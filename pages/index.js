import styles from "../styles/index.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.mainTitle}>Omega Phi Chat</h1>
      <div className={styles.inputContainer}>
        <label className={styles.mainUserlabel} htmlFor="userInput"></label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="userInput"
            name="userInput"
            placeholder="Enter Username"
            className={styles.mainInput}
          />
          <div className={styles.submitContainer}>
            <button className={styles.mainSubmit}>Phi Time</button>
          </div>
        </div>
      </div>
    </div>
  );
}
