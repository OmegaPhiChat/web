import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "../styles/index.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Omega Phi Chat</h1>
      <div calssName={styles.inputContainer}>
        <label className={styles.label} htmlFor="userInput"></label>
        <div className={styles.inputWrapper}>
          <input
            type="text"
            id="userInput"
            name="userInput"
            placeholder="Enter Username"
            className={styles.input}
          />
          <div className={styles.buttonContainer}>
            <button className={styles.button}>Phi Time</button>
          </div>
        </div>
      </div>
    </div>
  );
}
