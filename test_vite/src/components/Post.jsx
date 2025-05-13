import styles from './Post.module.css';
import { Link } from 'react-router-dom';

function Post(props) {
  return (
    <li className={styles.post}>
      <Link to={`/post/${props.id}`}>
        <p className={styles.author}>{props.name}</p>
        <p className={styles.text}>{props.content}</p>
      </Link>
    </li>
  );
}

export default Post;
