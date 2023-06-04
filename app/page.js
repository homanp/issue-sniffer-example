"use client";
import { useState } from "react";
import styles from "./page.module.css";

export default function Home() {
  const [message, setMessage] = useState();

  return (
    <main className={styles.main}>
      <div className={styles.center}>
        <button className={styles.button}>Login</button>
      </div>
      <p>{message}</p>
    </main>
  );
}
