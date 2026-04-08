"use client";
import { useEffect, useState } from "react";

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(total > 0 ? (window.scrollY / total) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div style={{ position: "fixed", top: 0, left: 0, right: 0, height: 2, zIndex: 200, background: "rgba(255,255,255,0.04)" }}>
      <div
        style={{
          height: "100%",
          width: `${progress}%`,
          background: "linear-gradient(90deg, #6366f1, #c084fc, #2dd4bf)",
          boxShadow: "0 0 10px rgba(99,102,241,0.9), 0 0 20px rgba(99,102,241,0.4)",
          transition: "width 0.1s linear",
        }}
      />
    </div>
  );
}
