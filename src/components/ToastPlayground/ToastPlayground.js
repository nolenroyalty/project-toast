import React from "react";

import Button from "../Button";
import styles from "./ToastPlayground.module.css";
import ToastShelf from "../ToastShelf";
import { ToastContext } from "../ToastProvider";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastMessageInput({ message, setMessage }) {
  return (
    <div className={styles.row}>
      <label
        htmlFor="message"
        className={styles.label}
        style={{ alignSelf: "baseline" }}
      >
        Message
      </label>
      <div className={styles.inputWrapper}>
        <textarea
          id="message"
          className={styles.messageInput}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
      </div>
    </div>
  );
}

function ToastVariantInput({ variant, setVariant }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {VARIANT_OPTIONS.map((option) => (
          <label key={option} htmlFor={`variant-${option}`}>
            <input
              id={`variant-${option}`}
              type="radio"
              name="toast-variant"
              value={option}
              checked={variant === option}
              onChange={(e) => setVariant(e.target.value)}
            />
            {option}
          </label>
        ))}
      </div>
    </div>
  );
}

function PopToast() {
  return (
    <div className={styles.row}>
      <div className={styles.label} />
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        <Button>Pop Toast!</Button>
      </div>
    </div>
  );
}

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variant, setVariant] = React.useState("notice");
  const { addToast } = React.useContext(ToastContext);

  function popToast() {
    addToast({ message, variant });
    setMessage("");
    setVariant("notice");
  }

  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      <ToastShelf />

      <div className={styles.controlsWrapper}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            popToast();
          }}
        >
          {ToastMessageInput({ message, setMessage })}
          {ToastVariantInput({ variant, setVariant })}
          {PopToast()}
        </form>
      </div>
    </div>
  );
}

export default ToastPlayground;
