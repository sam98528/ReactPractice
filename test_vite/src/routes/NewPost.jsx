import styles from './NewPost.module.css';
import Modal from '../components/Modal';
import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
function NewPost({ onSavePost }) {
  const [name, setName] = useState('');
  const [body, setBody] = useState('');
  const navigate = useNavigate();

  function changeBodyHandler(event) {
    setBody(event.target.value);
  }

  function changeNameHandler(event) {
    setName(event.target.value);
  }

  function onSavePost(event) {
    event.preventDefault();
    const postData = { name, body };
    onSavePost(postData);
    navigate('..');
  }

  return (
    <Modal>
      <form className={styles.form} onSubmit={onSavePost}>
        <p>
          <label htmlFor='name'>Your name</label>
          <input
            type='text'
            id='name'
            required
            rows={3}
            onChange={changeNameHandler}
          />
        </p>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' name='body' onChange={changeBodyHandler} />
        </p>
        <div className={styles.actions}>
          <Link to='..' type='button'>
            Cancel
          </Link>
          <button onClick={onSavePost}>Submit</button>
        </div>
      </form>
    </Modal>
  );
}
export default NewPost;
