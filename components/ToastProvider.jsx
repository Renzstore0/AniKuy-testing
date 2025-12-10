"use client";

import { createContext, useContext, useState, useCallback } from "react";

const ToastContext = createContext(null);

export function ToastProvider({ children }) {
  const [message, setMessage] = useState("");
  const [visible, setVisible] = useState(false);

  const showToast = useCallback((msg, duration = 1600) => {
    setMessage(msg);
    setVisible(true);
    window.setTimeout(() => setVisible(false), duration);
  }, []);

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className={`toast ${visible ? "show" : ""}`}>{message}</div>
    </ToastContext.Provider>
  );
}

export function useToast() {
  const ctx = useContext(ToastContext);
  if (!ctx) throw new Error("useToast must be used inside ToastProvider");
  return ctx;
}