import { API_URL } from "@/api";
import styles from "../styles/chat.module.css";
import React, { useEffect, useState } from "react";
import Pusher from 'pusher-js';

export default function chat() {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const pusher = new Pusher(process.env.NEXT_PUBLIC_PUSHER_KEY, {
      cluster: process.env.NEXT_PUBLIC_PUSHER_CLUSTER,
    });
    const channel = pusher.subscribe("global");
    channel.bind("message", (data) => {
      setMessages((messages) => [
        ...messages,
        data.message]);
    })

    return () => {
      pusher.disconnect();
    }
  }, []);

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
          value={messages.join("\n")}
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
