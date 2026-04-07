"use client";
import { motion } from "framer-motion";
import { scrollToSection } from "@/components/SmoothScroll";

export default function NotFound() {
  return (
    <div style={{ minHeight: "100vh", display: "flex", alignItems: "center", justifyContent: "center", background: "#030308", position: "relative", overflow: "hidden" }}>
      {/* Glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 80% 60% at 50% 0%, rgba(99,102,241,0.2) 0%, transparent 60%)", pointerEvents: "none" }} />

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        style={{ textAlign: "center", padding: "0 24px", position: "relative", zIndex: 1 }}
      >
        <div style={{ fontSize: "clamp(80px, 20vw, 160px)", fontWeight: 900, letterSpacing: "-0.05em", lineHeight: 1, background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text", marginBottom: 16 }}>
          404
        </div>
        <h1 style={{ color: "#e2e8f0", fontSize: "clamp(20px, 4vw, 28px)", fontWeight: 700, marginBottom: 12 }}>
          Page Not Found
        </h1>
        <p style={{ color: "#475569", fontSize: 15, lineHeight: 1.7, maxWidth: 400, margin: "0 auto 36px" }}>
          Looks like this page doesn&apos;t exist. Let&apos;s get you back to the portfolio.
        </p>
        <motion.button
          whileHover={{ scale: 1.04, y: -2 }}
          whileTap={{ scale: 0.97 }}
          onClick={() => { window.location.href = "/"; }}
          style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "14px 28px", borderRadius: 14, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", fontWeight: 700, fontSize: 14, border: "none", cursor: "pointer", boxShadow: "0 0 32px rgba(99,102,241,0.4)", fontFamily: "inherit" }}
        >
          ← Back to Home
        </motion.button>
      </motion.div>
    </div>
  );
}
