import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";
import useEscape from "../../hooks/useescape";

function ToastShelf() {
  const { toasts, hideToast, dismissAllToasts } =
    React.useContext(ToastContext);

  useEscape((_e) => {
    dismissAllToasts();
  });

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
