"use client";
import { useEffect, useState } from "react";
import styles from "./page.module.css";
export default function MobileCta() {
  const [visible, setVisible] = useState(false);
  const [typing, setTyping] = useState(false);
  useEffect(() => {
    const contact = document.getElementById("ai-contact-form");
    if (!contact) return;
    const observer = new IntersectionObserver(([entry]) =>
      setVisible(!entry.isIntersecting),
    );
    observer.observe(contact);
    const focus = () =>
      setTyping(
        document.activeElement?.matches(
          "input, textarea, select, [contenteditable='true']",
        ) ?? false,
      );
    document.addEventListener("focusin", focus);
    document.addEventListener("focusout", focus);
    return () => {
      observer.disconnect();
      document.removeEventListener("focusin", focus);
      document.removeEventListener("focusout", focus);
    };
  }, []);
  return visible && !typing ? (
    <div className={styles.mobileCta}>
      <a href="#ai-contact" className={styles.primary}>
        Discută o automatizare
      </a>
    </div>
  ) : null;
}
