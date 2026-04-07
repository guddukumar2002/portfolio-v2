"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { scrollToSection } from "@/components/SmoothScroll";

const facts = [
  { icon: "🎓", label: "Education", value: "B.Tech CSE, ABES Institute" },
  { icon: "📍", label: "Location", value: "Ghaziabad, India" },
  { icon: "💼", label: "Experience", value: "1+ Year, 4 Companies" },
  { icon: "🚀", label: "Currently", value: "Web Developer @ SEG" },
  { icon: "📧", label: "Email", value: "gk13212@gmail.com" },
  { icon: "🎯", label: "Looking For", value: "Full-time / Freelance" },
];

export default function About() {
  const { ref, inView } = useScrollReveal();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="about" style={{ position: "relative", zIndex: 1, padding: isMobile ? "64px 0" : "96px 0" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px" }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 40 : 64,
            alignItems: "center",
          }}
        >
          {/* Left — text */}
          <div>
            <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, transparent, #6366f1)" }} />
              <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#818cf8" }}>About Me</span>
              <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
            </div>

            <h2 style={{ fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.1, marginBottom: 24 }}>
              Passionate about building{" "}
              <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                great software
              </span>
            </h2>

            <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.8, marginBottom: 20 }}>
              I&apos;m a Full Stack Developer from Ghaziabad, India with a B.Tech in Computer Science. I love turning complex problems into simple, beautiful, and intuitive solutions.
            </p>
            <p style={{ color: "#94a3b8", fontSize: 15, lineHeight: 1.8, marginBottom: 32 }}>
              With hands-on experience across <span style={{ color: "#e2e8f0", fontWeight: 600 }}>4 companies</span> — from building educational platforms at SEG to crafting backend APIs at Inlign Tech — I bring both frontend finesse and backend muscle to every project.
            </p>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}
              >
                Hire Me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </motion.a>
              <motion.a
                href="/assets/GudduKumarResume.pdf"
                download
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#cbd5e1", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
                </svg>
                Resume
              </motion.a>
            </div>
          </div>

          {/* Right — facts grid */}
          <motion.div
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
            style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}
          >
            {facts.map((fact, i) => (
              <motion.div
                key={i}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0, transition: { duration: 0.4 } } }}
                whileHover={{ y: -4, borderColor: "rgba(99,102,241,0.3)" }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                style={{
                  padding: "16px 18px", borderRadius: 14,
                  border: "1px solid rgba(255,255,255,0.07)",
                  background: "rgba(255,255,255,0.02)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div style={{ fontSize: 20, marginBottom: 8 }}>{fact.icon}</div>
                <div style={{ color: "#475569", fontSize: 11, fontWeight: 600, marginBottom: 4, textTransform: "uppercase", letterSpacing: "0.08em" }}>{fact.label}</div>
                <div style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600, lineHeight: 1.4 }}>{fact.value}</div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
