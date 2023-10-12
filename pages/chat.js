import styles from "../styles/chat.module.css";

export default function chat() {
  return (
    <div className={styles.container}>
      <div className={styles.chatContainer}>
        <textarea
          className={styles.chatBox}
          placeholder="Chat stuff go here"
          readOnly
        />
        <div className={styles.messageContainer}>
          <input
            type="text"
            className={styles.inputMessage}
            placeholder="Phi Pham"
          />
          <button className={styles.sendMessage}>send</button>
        </div>
      </div>
    </div>
  );
}
