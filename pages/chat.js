import { Inter } from "next/font/google";
import styles from "../styles/chat.module.css";

export default function chat() {
  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <textarea
          className={styles.textArea}
          placeholder="Chat stuff go here"
          readOnly
        ></textarea>
        <div className={styles.inputContainer}>
          <input
            type="text"
            className={styles.textField}
            placeholder="Phi Pham"
          />
          <button className={styles.button}>send</button>
        </div>
      </div>
    </div>
  );
}
