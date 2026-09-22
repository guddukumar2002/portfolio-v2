"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";

export default function ThemeToggle() {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const saved = localStorage.getItem("theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.remove("dark", "light");
      document.documentElement.classList.add(saved);
    }
  }, []);

  const toggleTheme = () => {
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);
    localStorage.setItem("theme", nextTheme);
    document.documentElement.classList.remove("dark", "light");
    document.documentElement.classList.add(nextTheme);
  };

  if (!mounted) return null;

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.92 }}
      onClick={toggleTheme}
      title={`Switch to ${theme === "dark" ? "Light" : "Dark"} mode`}
      aria-label="Toggle Theme"
      style={{
        width: 36,
        height: 36,
        borderRadius: 10,
        border: "1px solid var(--card-border)",
        background: "var(--card-bg)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "var(--text-main)",
        cursor: "pointer",
        backdropFilter: "blur(8px)",
      }}
    >
      {theme === "dark" ? <Sun size={17} style={{ color: "#fbbf24" }} /> : <Moon size={17} style={{ color: "#818cf8" }} />}
    </motion.button>
  );
}
