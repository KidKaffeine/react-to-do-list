import styles from "./Modal.module.css";

export default function Modal({closeModal} ) {
  return (
    <div className={styles.modal} onClick={closeModal}>
      <h1>I'm a modal</h1>
    </div>
  );
}
