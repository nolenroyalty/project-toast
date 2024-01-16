import React from "react";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  function hideToast(key) {
    setToasts((toasts) => toasts.filter((t) => t.key !== key));
  }

  function addToast({ message, variant }) {
    const key = crypto.randomUUID();
    const toast = { key, message, variant };
    setToasts((toasts) => [...toasts, toast]);
  }

  return (
    <ToastContext.Provider value={{ toasts, hideToast, addToast }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
