import styles from './NewPost.module.css';

function NewPost(props) {
  return (
    <>
      <form className={styles.form} onSubmit={props.onSavePost}>
        <p>
          <label htmlFor='name'>Your name</label>
          <input
            type='text'
            id='name'
            required
            rows={3}
            onChange={props.changeNameHandler}
          />
        </p>
        <p>
          <label htmlFor='body'>Text</label>
          <textarea id='body' name='body' onChange={props.changeBodyHandler} />
        </p>
        <div className={styles.actions}>
          <button type='submit' className={styles.actionsButton}>
            Save Post
          </button>
        </div>
      </form>
    </>
  );
}
export default NewPost;
