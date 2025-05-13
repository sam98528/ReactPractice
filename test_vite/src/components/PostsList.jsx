import Post from './Post';
import styles from './PostsList.module.css';
import { useLoaderData } from 'react-router-dom';

function PostsList() {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 ? (
        <ul className={styles.posts}>
          {posts.map((post) => (
            <Post
              key={post.name}
              id={post.id}
              name={post.name}
              content={post.body}
            />
          ))}
        </ul>
      ) : (
        <h2 style={{ textAlign: 'center' }}>No posts yet</h2>
      )}
    </>
  );
}

export default PostsList;
