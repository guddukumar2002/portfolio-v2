"use client";
import { motion } from "framer-motion";
import { GraduationCap, MapPin, Briefcase, Mail, CheckCircle2, ArrowUpRight, Sparkles } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { availability } from "@/data";
import GitHubStats from "@/components/GitHubStats";

const facts = [
  { icon: <GraduationCap size={16} style={{ color: "#818cf8" }} />, label: "Education", value: "B.Tech CSE, ABES IT" },
  { icon: <MapPin size={16} style={{ color: "#34d399" }} />, label: "Location", value: "Ghaziabad, India" },
  { icon: <Briefcase size={16} style={{ color: "#60a5fa" }} />, label: "Experience", value: "2+ Yrs | 4 Companies" },
  { icon: <Sparkles size={16} style={{ color: "#fbbf24" }} />, label: "Currently", value: "Web Developer @ SEG" },
  { icon: <Mail size={16} style={{ color: "#c084fc" }} />, label: "Email", value: availability.email },
  { icon: <CheckCircle2 size={16} style={{ color: "#34d399" }} />, label: "Open To", value: "Full-Time & Freelance" },
];

interface AboutProps {
  onOpenResume: () => void;
}

export default function About({ onOpenResume }: AboutProps) {
  const { ref, inView } = useScrollReveal();

  return (
    <section id="about" className="section-pad" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-inner">
        {/* Section Label Header */}
        <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 36 }}>
          <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, transparent, #6366f1)" }} />
          <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#818cf8" }}>
            About Me
          </span>
          <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
        </div>

        {/* Content Grid */}
        <div
          ref={ref}
          className="about-grid"
        >
          {/* LEFT: Concise Bio & Philosophy */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 style={{ fontSize: "clamp(26px, 4vw, 42px)", fontWeight: 800, color: "var(--text-main)", letterSpacing: "-0.02em", lineHeight: 1.15, marginBottom: 20 }}>
              Engineering scalable platforms with{" "}
              <span className="animated-gradient">
                clean code & modern architecture
              </span>
            </h2>

            {/* Currently Building Badge */}
            <div style={{ padding: "12px 16px", borderRadius: 12, border: "1px solid rgba(99, 102, 241, 0.25)", background: "rgba(99, 102, 241, 0.06)", display: "inline-flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#6366f1", boxShadow: "0 0 10px #6366f1" }} />
              <span style={{ color: "#a5b4fc", fontSize: 13, fontWeight: 600 }}>
                Currently building → <strong style={{ color: "#fff" }}>scalable web applications + AI-powered experiences</strong>
              </span>
            </div>

            <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.8, marginBottom: 16 }}>
              Full Stack Developer based in Ghaziabad, India with a B.Tech in Computer Science & Engineering. I specialize in building complete end-to-end web applications — from pixel-perfect React/Next.js interfaces to robust Node.js/Express APIs and database architectures.
            </p>

            <p style={{ color: "var(--text-muted)", fontSize: 15, lineHeight: 1.8, marginBottom: 24 }}>
              With experience across <strong style={{ color: "var(--text-main)" }}>4 companies</strong> (SEG, Pearl Thoughts, Inlign Tech, Code Alpha), I take pride in delivering production apps that handle real clinical data, user registrations, and live payments.
            </p>

            {/* GitHub Stats Component */}
            <div style={{ marginBottom: 28 }}>
              <GitHubStats username={availability.githubUsername} />
            </div>

            {/* CTAs */}
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
              <button
                onClick={onOpenResume}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  padding: "12px 24px",
                  borderRadius: 12,
                  background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                  color: "#fff",
                  fontWeight: 700,
                  fontSize: 14,
                  border: "none",
                  cursor: "pointer",
                  boxShadow: "0 0 24px rgba(99,102,241,0.35)",
                }}
              >
                View Full Resume
                <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>

          {/* RIGHT: Quick Facts & Core Stack Grid */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
          >
            {/* Facts Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
              {facts.map((fact, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, borderColor: "rgba(99,102,241,0.35)" }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  style={{
                    padding: "16px 14px",
                    borderRadius: 14,
                    border: "1px solid var(--card-border)",
                    background: "var(--card-bg)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 6 }}>
                    {fact.icon}
                    <span style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                      {fact.label}
                    </span>
                  </div>
                  <div style={{ color: "var(--text-main)", fontSize: 13, fontWeight: 600, lineHeight: 1.4, wordBreak: "break-word" }}>
                    {fact.value}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Availability Banner */}
            <div
              style={{
                padding: "16px",
                borderRadius: 14,
                border: "1px solid rgba(52,211,153,0.3)",
                background: "rgba(52,211,153,0.05)",
                display: "flex",
                alignItems: "center",
                gap: 12,
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 10px #34d399", flexShrink: 0 }} />
              <div>
                <div style={{ color: "#6ee7b7", fontSize: 13, fontWeight: 700 }}>Available Immediately</div>
                <div style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 2 }}>Open to Full-Time roles & high-impact Freelance projects</div>
              </div>
            </div>

            {/* Core Stack Quick View */}
            <div
              style={{
                padding: "20px",
                borderRadius: 14,
                border: "1px solid rgba(99,102,241,0.2)",
                background: "rgba(99,102,241,0.04)",
              }}
            >
              <div style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 12 }}>
                Primary Technology Stack
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {["React.js", "Next.js 16", "Node.js", "TypeScript", "Prisma", "PostgreSQL", "MongoDB", "Tailwind CSS", "AI APIs"].map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(99,102,241,0.12)",
                      border: "1px solid rgba(99,102,241,0.25)",
                      color: "#a5b4fc",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
