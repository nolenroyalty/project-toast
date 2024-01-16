import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";
import { ToastContext } from "../ToastProvider";

function ToastShelf() {
  const { toasts, hideToast } = React.useContext(ToastContext);

  return (
    <ol className={styles.wrapper}>
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
