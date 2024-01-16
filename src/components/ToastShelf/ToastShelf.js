import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, hideToast, dismissAllToasts } =
    React.useContext(ToastContext);

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.key === "Escape") {
        dismissAllToasts();
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [dismissAllToasts]);

  return (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="polite"
      aria-label="Notification"
    >
      {toasts.map(({ key, variant, message }) => (
        <li key={key} className={styles.toastWrapper}>
          <Toast key={key} variant={variant} hideToast={() => hideToast(key)}>
            <p>{message}</p>
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
