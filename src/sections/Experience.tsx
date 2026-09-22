"use client";
import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar, CheckCircle2 } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { experiences } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

export default function Experience() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper id="experience" title="Work Experience" subtitle="Career Journey" align="left">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        style={{ position: "relative", maxWidth: "100%" }}
      >
        {/* Timeline Line */}
        <div
          style={{
            position: "absolute",
            left: 17,
            top: 10,
            bottom: 10,
            width: 2,
            background: "linear-gradient(to bottom, rgba(99,102,241,0.9), rgba(52,211,153,0.5), transparent)",
          }}
        />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } }}
            style={{ position: "relative", paddingLeft: 52, paddingBottom: 36 }}
          >
            {/* Timeline Dot Node */}
            <div
              style={{
                position: "absolute",
                left: 3,
                top: 16,
                width: 30,
                height: 30,
                borderRadius: "50%",
                border: `2px solid ${exp.current ? "#34d399" : "#6366f1"}`,
                background: exp.current ? "rgba(52,211,153,0.15)" : "#080814",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: exp.current ? "0 0 18px rgba(52,211,153,0.5)" : "0 0 14px rgba(99,102,241,0.3)",
                zIndex: 2,
              }}
            >
              <Briefcase size={14} style={{ color: exp.current ? "#34d399" : "#818cf8" }} />
            </div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ borderColor: exp.current ? "rgba(52,211,153,0.4)" : "rgba(99,102,241,0.35)", y: -3 }}
              transition={{ duration: 0.2 }}
              style={{
                padding: "24px 28px",
                borderRadius: 20,
                border: exp.current ? "1px solid rgba(52,211,153,0.3)" : "1px solid var(--card-border)",
                background: exp.current ? "rgba(52,211,153,0.03)" : "var(--card-bg)",
                backdropFilter: "blur(12px)",
                boxShadow: exp.current ? "0 8px 32px rgba(52,211,153,0.08)" : "none",
              }}
            >
              {/* Header Info */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: 10, marginBottom: 8 }}>
                <div>
                  <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                    <h3 style={{ color: "var(--text-main)", fontWeight: 800, fontSize: "clamp(16px, 2.5vw, 19px)", lineHeight: 1.2 }}>
                      {exp.role}
                    </h3>
                    {exp.current && (
                      <span style={{ fontSize: 10, fontWeight: 800, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 9px", borderRadius: 6, background: "rgba(16,185,129,0.12)", color: "#059669", border: "1px solid rgba(16,185,129,0.3)" }}>
                        Current Role
                      </span>
                    )}
                    <span style={{ fontSize: 11, fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: "var(--card-bg)", color: "var(--text-muted)", border: "1px solid var(--card-border)" }}>
                      {exp.type}
                    </span>
                  </div>
                  <div style={{ color: "#4f46e5", fontSize: 14, fontWeight: 700, marginTop: 4 }}>
                    @ {exp.company}
                  </div>
                </div>

                {/* Duration & Location */}
                <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: 4 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 6, color: "var(--text-muted)", fontSize: 12, fontFamily: "monospace" }}>
                    <Calendar size={13} />
                    {exp.duration}
                  </div>
                  <div style={{ display: "flex", alignItems: "center", gap: 4, color: "var(--text-muted)", fontSize: 11 }}>
                    <MapPin size={11} />
                    {exp.location}
                  </div>
                </div>
              </div>

              {/* Responsibilities Bullets */}
              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, marginTop: 16, marginBottom: 16 }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ display: "flex", alignItems: "flex-start", gap: 10, color: "var(--text-muted)", fontSize: 14, lineHeight: 1.65 }}>
                    <CheckCircle2 size={15} style={{ color: "#6366f1", marginTop: 4, flexShrink: 0 }} />
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 12, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                {exp.tech.map((t) => (
                  <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 5, background: "rgba(99,102,241,0.08)", border: "1px solid rgba(99,102,241,0.18)", color: "#a5b4fc" }}>
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
