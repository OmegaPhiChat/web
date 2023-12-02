import { API_URL } from "@/api";
import styles from "../styles/chat.module.css";
import React, { useState } from "react";

export default function chat() {
  const [text, setText] = useState("");

  const handleClick = () => {
    fetch(`${API_URL}/message?message=${text}`, {
      method: "POST",
    });
    setText("");
  };

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
            value={text}
            onChange={(e) => {
              setText(e.currentTarget.value);
            }}
            type="text"
            className={styles.inputMessage}
            placeholder="Phi Pham"
          />
          <button onClick={handleClick} className={styles.sendMessage}>
            send
          </button>
        </div>
      </div>
    </div>
  );
}
