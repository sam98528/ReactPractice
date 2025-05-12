import Post from './Post';
import styles from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const posts = useLoaderData();

  function addPostHandler(postData) {
    setPosts((prevPosts) => [postData, ...prevPosts]);
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }

  return (
    <>
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post key={post.name} name={post.name} content={post.body} />
          ))}
        </ul>
      ) : (
        <h2 style={{ textAlign: 'center' }}>No posts yet</h2>
      )}
    </>
  );
}

export default PostsList;
