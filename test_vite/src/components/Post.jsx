import styles from './Post.module.css';

function Post(props) {
  return (
    <li className={styles.post} >
    <p className={styles.author}>{props.name}</p>
    <p className={styles.text}>{props.content}</p>
  </li>
  );
}


export default Post;