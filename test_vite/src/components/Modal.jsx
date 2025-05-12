import styles from './Modal.module.css';
import { useNavigate } from 'react-router-dom';
function Modal(props) {
  const navigate = useNavigate();
  function closeModalHandler() {
    navigate('..');
  }
  return (
    <>
      <div className={styles.backdrop} onClick={closeModalHandler}></div>
      <dialog open className={styles.modal}>
        {props.children}
      </dialog>
    </>
  );
}

export default Modal;
