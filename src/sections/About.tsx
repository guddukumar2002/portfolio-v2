"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { scrollToSection } from "@/components/SmoothScroll";
import { availability } from "@/data";
import GitHubStats from "@/components/GitHubStats";

const facts = [
  { icon: "🎓", label: "Education", value: "B.Tech CSE, ABES" },
  { icon: "📍", label: "Location", value: "Ghaziabad, India" },
  { icon: "💼", label: "Experience", value: "2+ Yrs, 4 Companies" },
  { icon: "🚀", label: "Currently", value: "Dev @ SEG" },
  { icon: "📧", label: "Email", value: "gk13212@gmail.com" },
  { icon: "🎯", label: "Open To", value: "Full-time / Freelance" },
];

export default function About() {
  const { ref, inView } = useScrollReveal();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id="about" className="section-pad" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-inner">

        {/* Label */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
          <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, transparent, #6366f1)" }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#818cf8" }}>About Me</span>
          <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
        </div>

        {/* Grid */}
        <div
          ref={ref}
          style={{
            display: "grid",
            gridTemplateColumns: isMobile ? "1fr" : "1fr 1fr",
            gap: isMobile ? 32 : 56,
            alignItems: "start",
          }}
        >
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            style={{ width: "100%", minWidth: 0 }}
          >
            <h2 style={{ fontSize: "clamp(24px, 5vw, 42px)", fontWeight: 800, color: "#fff", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 18 }}>
              Passionate about{" "}
              <span style={{ background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
                building great software
              </span>
            </h2>

            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.8, marginBottom: 12 }}>
              Full Stack Developer from Ghaziabad, India with a B.Tech in Computer Science. I turn complex problems into clean, scalable solutions.
            </p>
            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.8, marginBottom: 24 }}>
              Worked across <span style={{ color: "#e2e8f0", fontWeight: 600 }}>4 companies</span> — from educational platforms at SEG to backend APIs at Inlign Tech.
            </p>

            <div style={{ marginBottom: 24 }}>
              <GitHubStats username={availability.github} />
            </div>

            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <motion.a
                href="#contact"
                onClick={(e) => { e.preventDefault(); scrollToSection("contact"); }}
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", fontWeight: 700, fontSize: 14, textDecoration: "none", boxShadow: "0 0 24px rgba(99,102,241,0.35)" }}
              >
                Hire Me
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7" /></svg>
              </motion.a>
              <motion.a
                href="/assets/GudduKumarResume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04, y: -2 }} whileTap={{ scale: 0.97 }}
                style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "12px 24px", borderRadius: 12, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.04)", color: "#cbd5e1", fontWeight: 700, fontSize: 14, textDecoration: "none" }}
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                </svg>
                View Resume
              </motion.a>
            </div>
          </motion.div>

          {/* RIGHT — facts */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: 12, width: "100%", minWidth: 0 }}
          >
            {/* Facts grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.35)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    padding: "14px 12px", borderRadius: 14,
                    border: "1px solid rgba(255,255,255,0.07)",
                    background: "rgba(255,255,255,0.02)",
                    backdropFilter: "blur(8px)",
                    minWidth: 0,
                  }}
                >
                  <div style={{ fontSize: 18, marginBottom: 6 }}>{fact.icon}</div>
                  <div style={{ color: "#475569", fontSize: 10, fontWeight: 700, marginBottom: 3, textTransform: "uppercase", letterSpacing: "0.08em" }}>{fact.label}</div>
                  <div style={{ color: "#e2e8f0", fontSize: 12, fontWeight: 600, lineHeight: 1.4, wordBreak: "break-word" }}>{fact.value}</div>
                </motion.div>
              ))}
            </div>

            {/* Availability */}
            <div style={{ padding: "14px 16px", borderRadius: 14, border: "1px solid rgba(52,211,153,0.2)", background: "rgba(52,211,153,0.04)", display: "flex", alignItems: "center", gap: 12 }}>
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 10px #34d399", flexShrink: 0 }} />
              <div>
                <div style={{ color: "#6ee7b7", fontSize: 12, fontWeight: 700 }}>Available Immediately</div>
                <div style={{ color: "#475569", fontSize: 11, marginTop: 2 }}>Open to full-time & freelance</div>
              </div>
            </div>

            {/* Tech stack quick view */}
            <div style={{ padding: "16px", borderRadius: 14, border: "1px solid rgba(99,102,241,0.15)", background: "rgba(99,102,241,0.04)" }}>
              <div style={{ color: "#475569", fontSize: 10, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>Core Stack</div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["React", "Next.js", "Node.js", "TypeScript", "MongoDB", "Tailwind"].map(t => (
                  <span key={t} style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6, background: "rgba(99,102,241,0.12)", border: "1px solid rgba(99,102,241,0.2)", color: "#a5b4fc" }}>{t}</span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
