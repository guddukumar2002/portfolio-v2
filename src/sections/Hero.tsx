"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { scrollToSection } from "@/components/SmoothScroll";

const ROLES = ["Full Stack Developer", "React & Next.js Dev", "Node.js Backend Dev", "MERN Stack Engineer"];

export default function Hero() {
  const roleRef = useRef<HTMLSpanElement>(null);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number; opacity: number }>>([]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    setParticles(Array.from({ length: 22 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2.5 + 1,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 4,
      opacity: Math.random() * 0.4 + 0.1,
    })));
  }, []);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const blobX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const blobY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false;
    let timeout: ReturnType<typeof setTimeout>;
    const type = () => {
      const el = roleRef.current;
      if (!el) return;
      const cur = ROLES[roleIdx];
      el.textContent = deleting ? cur.slice(0, charIdx - 1) : cur.slice(0, charIdx + 1);
      if (!deleting) {
        charIdx++;
        if (charIdx === cur.length) { deleting = true; timeout = setTimeout(type, 2200); return; }
      } else {
        charIdx--;
        if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; }
      }
      timeout = setTimeout(type, deleting ? 32 : 62);
    };
    type();
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section id="home" style={{ position: "relative", minHeight: "100vh", display: "flex", alignItems: "center", overflow: "hidden", zIndex: 1, maxWidth: "100vw" }}>

      {/* Floating particles */}
      {mounted && particles.map((p) => (
        <motion.div
          key={p.id}
          animate={{ y: [0, -30, 0], opacity: [p.opacity, p.opacity * 0.3, p.opacity] }}
          transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: "absolute", left: `${p.x}%`, top: `${p.y}%`, width: p.size, height: p.size, borderRadius: "50%", background: p.id % 3 === 0 ? "#818cf8" : p.id % 3 === 1 ? "#c084fc" : "#60a5fa", pointerEvents: "none", zIndex: 0 }}
        />
      ))}

      {/* Grid */}
      <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`, backgroundSize: "80px 80px", pointerEvents: "none" }} />
      {/* Top glow */}
      <div style={{ position: "absolute", inset: 0, background: "radial-gradient(ellipse 100% 60% at 50% -10%, rgba(99,102,241,0.28) 0%, transparent 60%)", pointerEvents: "none" }} />
      {/* Blobs */}
      <motion.div style={{ x: blobX, y: blobY, position: "absolute", top: "15%", left: "-10%", width: "min(600px, 80vw)", height: "min(600px, 80vw)", borderRadius: "50%", background: "rgba(99,102,241,0.1)", filter: "blur(100px)", pointerEvents: "none" }} />
      <motion.div style={{ x: blobX, y: blobY, position: "absolute", bottom: "5%", right: "-10%", width: "min(500px, 70vw)", height: "min(500px, 70vw)", borderRadius: "50%", background: "rgba(192,132,252,0.08)", filter: "blur(100px)", pointerEvents: "none" }} />

      <div className="hero-inner" style={{ position: "relative", zIndex: 2, width: "100%" }}>

        {/* LEFT */}
        <div style={{ flex: "1 1 auto", minWidth: 0 }}>

          {/* Status badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
            style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 24, padding: "8px 16px", borderRadius: 999, border: "1px solid rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.08)", color: "#6ee7b7", fontSize: 12, fontWeight: 600 }}
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 10px #34d399", flexShrink: 0, display: "inline-block" }}
            />
            Currently @ SEG · Open to new opportunities
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, delay: 0.1 }}
            style={{ fontSize: "clamp(32px, 6vw, 76px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.04, color: "#fff", marginBottom: 16 }}
          >
            Hi, I&apos;m{" "}
            <span className="animated-gradient">Guddu Kumar</span>
          </motion.h1>

          {/* Typed role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 10, height: 36 }}
          >
            <span style={{ fontSize: "clamp(15px, 2.5vw, 26px)", fontWeight: 600, color: "#c7d2fe" }} ref={roleRef} />
            <motion.span animate={{ opacity: [1, 0, 1] }} transition={{ duration: 1, repeat: Infinity }}
              style={{ width: 2, height: 24, background: "#818cf8", borderRadius: 2, display: "inline-block", flexShrink: 0 }}
            />
          </motion.div>

          {/* Location */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.28 }}
            style={{ display: "flex", alignItems: "center", gap: 6, color: "#64748b", fontSize: 13, marginBottom: 20 }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" /><circle cx="12" cy="10" r="3" />
            </svg>
            Ghaziabad, India
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
            style={{ color: "#94a3b8", fontSize: "clamp(14px, 1.8vw, 17px)", lineHeight: 1.75, maxWidth: 520, marginBottom: 32 }}
          >
            Full Stack Developer with hands-on experience building scalable web platforms. Specialized in{" "}
            <span style={{ color: "#e2e8f0", fontWeight: 600 }}>React, Next.js, Node.js & MongoDB</span>
            {" "}— from pixel-perfect UIs to production-ready APIs.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => { e.preventDefault(); scrollToSection("projects"); }}
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", borderRadius: 14, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 0 32px rgba(99,102,241,0.4)" }}
            >
              View My Work
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
            </motion.a>
            <motion.a
              href="/assets/GudduKumarResume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
              style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "13px 24px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.15)", background: "rgba(255,255,255,0.05)", color: "#cbd5e1", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              View Resume
            </motion.a>
          </motion.div>

          {/* Socials */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6 }}
            style={{ display: "flex", alignItems: "center", gap: 12, flexWrap: "wrap" }}
          >
            <span style={{ color: "#334155", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Connect</span>
            <div style={{ width: 28, height: 1, background: "rgba(255,255,255,0.08)" }} />
            {[
              { label: "GitHub", href: "https://github.com/guddukumar2002", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg> },
              { label: "LinkedIn", href: "https://linkedin.com/in/guddu-kumar-10b7bb258", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
              { label: "Email", href: "mailto:gk13212@gmail.com", icon: <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> },
            ].map((s) => (
              <motion.a key={s.label} href={s.href} target={s.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer" title={s.label}
                whileHover={{ y: -3, scale: 1.1 }} whileTap={{ scale: 0.9 }}
                style={{ width: 40, height: 40, borderRadius: 10, border: "1px solid rgba(255,255,255,0.08)", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", color: "#475569", textDecoration: "none" }}
              >
                {s.icon}
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* RIGHT — avatar */}
        <motion.div
          className="hero-avatar float"
          initial={{ opacity: 0, scale: 0.85, y: 20 }} animate={{ opacity: 1, scale: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.35 }}
          style={{ position: "relative", flexShrink: 0 }}
        >
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
            style={{ position: "absolute", inset: -4, borderRadius: "50%", background: "conic-gradient(from 0deg, #6366f1, #c084fc, #60a5fa, #34d399, #6366f1)", padding: 2, zIndex: 0 }}
          />
          <div style={{ position: "absolute", inset: -40, borderRadius: "50%", background: "radial-gradient(circle, rgba(99,102,241,0.25) 0%, transparent 70%)", filter: "blur(20px)", zIndex: 0 }} />
          <div className="hero-avatar-img" style={{ position: "relative", zIndex: 1, width: 260, height: 260, borderRadius: "50%", border: "3px solid rgba(3,3,8,1)", background: "linear-gradient(135deg, rgba(99,102,241,0.2) 0%, rgba(139,92,246,0.15) 100%)", display: "flex", alignItems: "center", justifyContent: "center", overflow: "hidden", boxShadow: "0 0 60px rgba(99,102,241,0.25), inset 0 0 60px rgba(99,102,241,0.08)" }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/assets/profile.jpg" alt="Guddu Kumar" style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "center top", display: "block" }} />
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.5 }}
        style={{ position: "absolute", bottom: 32, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8 }}
      >
        <span style={{ color: "#334155", fontSize: 10, fontWeight: 700, letterSpacing: "0.2em", textTransform: "uppercase" }}>Scroll</span>
        <motion.div animate={{ y: [0, 10, 0] }} transition={{ duration: 1.5, repeat: Infinity }}
          style={{ width: 1, height: 40, background: "linear-gradient(to bottom, rgba(99,102,241,0.8), transparent)" }}
        />
      </motion.div>
    </section>
  );
}
