import styles from "../styles/index.module.css";
import { API_URL } from "@/api";
import { useRouter } from "next/router";
import React, { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [username, setUsername] = useState("");

  const handleUsernameSubmit = async () => {
    const response = await fetch(`${API_URL}/join?username=${username}`, {
      method: "POST",
    });

    if (response.ok) {
      router.push("/chat");
    } else {
      console.error("failed to join phi chat: ", response.statusText);
    }
  };

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
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <div className={styles.submitContainer}>
            <button
              className={styles.mainSubmit}
              onClick={handleUsernameSubmit}
            >
              Phi Time
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
