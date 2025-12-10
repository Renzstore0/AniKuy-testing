"use client";

import { createContext, useContext, useEffect, useState } from "react";

const ThemeContext = createContext(null);

export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("dark");

  useEffect(() => {
    if (typeof window === "undefined") return;
    const saved = window.localStorage.getItem("anikuy_theme");
    if (saved === "light" || saved === "dark") {
      setTheme(saved);
      applyTheme(saved);
    } else {
      applyTheme("dark");
    }
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    applyTheme(theme);
    window.localStorage.setItem("anikuy_theme", theme);
  }, [theme]);

  function applyTheme(t) {
    if (typeof document === "undefined") return;
    const body = document.body;
    body.classList.remove("theme-dark", "theme-light");
    body.classList.add(t === "light" ? "theme-light" : "theme-dark");
  }

  const value = {
    theme,
    setTheme,
    toggleTheme: () =>
      setTheme((prev) => (prev === "dark" ? "light" : "dark"))
  };

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export function useTheme() {
  const ctx = useContext(ThemeContext);
  if (!ctx) throw new Error("useTheme must be used inside ThemeProvider");
  return ctx;
}