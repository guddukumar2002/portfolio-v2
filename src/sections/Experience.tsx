"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { experiences } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

export default function Experience() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper id="experience" title="Work Experience" subtitle="Career" align="left">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.15 } } }}
        style={{ position: "relative", maxWidth: "100%" }}
      >
        {/* Vertical line */}
        <div style={{ position: "absolute", left: 15, top: 8, bottom: 8, width: 1, background: "linear-gradient(to bottom, rgba(99,102,241,0.8), rgba(99,102,241,0.2), transparent)" }} />

        {experiences.map((exp, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, x: -24 }, visible: { opacity: 1, x: 0, transition: { duration: 0.55 } } }}
            style={{ position: "relative", paddingLeft: 48, paddingBottom: 32 }}
          >
            {/* Dot */}
            <div style={{
              position: "absolute", left: 0, top: 20,
              width: 28, height: 28, borderRadius: "50%",
              border: `2px solid ${exp.current ? "#34d399" : "#6366f1"}`,
              background: exp.current ? "rgba(52,211,153,0.1)" : "rgba(99,102,241,0.1)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: exp.current ? "0 0 16px rgba(52,211,153,0.4)" : "0 0 12px rgba(99,102,241,0.3)",
            }}>
              <div style={{ width: 8, height: 8, borderRadius: "50%", background: exp.current ? "#34d399" : "#6366f1" }} />
            </div>

            {/* Card */}
            <motion.div
              whileHover={{ borderColor: exp.current ? "rgba(52,211,153,0.35)" : "rgba(99,102,241,0.3)", y: -2 }}
              transition={{ duration: 0.2 }}
              style={{
                padding: "24px 28px",
                borderRadius: 20,
                border: exp.current ? "1px solid rgba(45,212,191,0.25)" : "1px solid rgba(255,255,255,0.07)",
                background: exp.current ? "rgba(45,212,191,0.04)" : "rgba(255,255,255,0.02)",
                backdropFilter: "blur(8px)",
                transition: "all 0.3s",
              }}
            >
              {/* Top row */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "flex-start", justifyContent: "space-between", gap: "6px 12px", marginBottom: 6 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                  <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(14px, 2.5vw, 18px)", lineHeight: 1.2 }}>
                    {exp.role}
                  </h3>
                  {exp.current && (
                    <span style={{ fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 6, background: "rgba(52,211,153,0.15)", color: "#6ee7b7", border: "1px solid rgba(52,211,153,0.25)", whiteSpace: "nowrap" }}>
                      Current
                    </span>
                  )}
                  <span style={{ fontSize: 10, fontWeight: 600, padding: "3px 8px", borderRadius: 6, background: "rgba(255,255,255,0.05)", color: "#64748b", border: "1px solid rgba(255,255,255,0.07)", whiteSpace: "nowrap" }}>
                    {exp.type}
                  </span>
                </div>
                <span style={{ color: "#475569", fontSize: 11, fontFamily: "monospace", whiteSpace: "nowrap" }}>
                  {exp.duration}
                </span>
              </div>

              <p style={{ color: "#818cf8", fontSize: 13, fontWeight: 700, marginBottom: 14, letterSpacing: "0.01em" }}>
                @ {exp.company}
              </p>

              <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                {exp.points.map((pt, j) => (
                  <li key={j} style={{ display: "flex", gap: 10, color: "#94a3b8", fontSize: "clamp(13px, 1.5vw, 14px)", lineHeight: 1.65 }}>
                    <span style={{ marginTop: 8, width: 4, height: 4, borderRadius: "50%", background: "#6366f1", flexShrink: 0, opacity: 0.7 }} />
                    {pt}
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
