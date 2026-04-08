"use client";
import { motion } from "framer-motion";
import { scrollToSection } from "@/components/SmoothScroll";

export default function NotFound() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Glow */}
      <div style={{ position: "absolute", top: "20%", left: "50%", transform: "translateX(-50%)", width: 600, height: 400, borderRadius: "50%", background: "rgba(99,102,241,0.12)", filter: "blur(100px)", pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ position: "relative", zIndex: 1 }}
      >
        <div style={{ fontSize: "clamp(80px, 20vw, 160px)", fontWeight: 900, lineHeight: 1, background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 16 }}>
          404
        </div>
        <h1 style={{ color: "#fff", fontSize: "clamp(20px, 4vw, 32px)", fontWeight: 800, marginBottom: 12 }}>
          Page Not Found
        </h1>
        <p style={{ color: "#64748b", fontSize: 16, marginBottom: 40, maxWidth: 400 }}>
          Looks like this page doesn&apos;t exist. Let&apos;s get you back to the portfolio.
        </p>
        <motion.button
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => { window.location.href = "/"; }}
          style={{ padding: "14px 32px", borderRadius: 14, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", fontWeight: 700, fontSize: 15, border: "none", cursor: "pointer", boxShadow: "0 0 32px rgba(99,102,241,0.4)", fontFamily: "inherit" }}
        >
          ← Back to Portfolio
        </motion.button>
      </motion.div>
    </div>
  );
}
