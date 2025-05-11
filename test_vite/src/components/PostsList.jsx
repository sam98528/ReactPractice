import Post from './Post';
import styles from './PostsList.module.css';
import NewPost from './NewPost';
import { useState } from 'react';
import Modal from './Modal';

function PostsList() {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const [posts, setPosts] = useState([]);
  function changeBodyHandler(event) {
    setBody(event.target.value);
  }

  function changeNameHandler(event) {
    setName(event.target.value);
  }

  function onSavePost(event) {
    event.preventDefault();
    setPosts([...posts, { name, body }]);
  }
  return (
    <>
      <Modal>
        <NewPost
          changeBodyHandler={changeBodyHandler}
          changeNameHandler={changeNameHandler}
          onSavePost={onSavePost}
        />
      </Modal>
      <ul className={styles.posts}>
        {posts.map((post) => (
          <Post name={post.name} content={post.body} />
        ))}
      </ul>
    </>
  );
}

export default PostsList;
