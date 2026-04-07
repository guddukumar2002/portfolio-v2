"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { education, certificates } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

export default function Education() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper id="education" title="Education & Certifications" subtitle="Background">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(320px, 100%), 1fr))",
          gap: 20,
        }}
      >
        {/* Education card */}
        <motion.div
          variants={{
            hidden: { opacity: 0, y: 24 },
            visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
          }}
          style={{
            padding: "28px",
            borderRadius: 20,
            border: "1px solid rgba(59,130,246,0.2)",
            background: "rgba(59,130,246,0.04)",
            backdropFilter: "blur(8px)",
            boxShadow: "0 0 40px rgba(59,130,246,0.06)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(59,130,246,0.5), transparent)" }} />

          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "rgba(59,130,246,0.12)",
                border: "1px solid rgba(59,130,246,0.25)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                flexShrink: 0,
              }}
            >
              🎓
            </div>
            <div>
              <span
                style={{
                  display: "inline-block",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "3px 8px",
                  borderRadius: 6,
                  background: "rgba(59,130,246,0.12)",
                  color: "#60a5fa",
                  border: "1px solid rgba(59,130,246,0.2)",
                  marginBottom: 10,
                }}
              >
                Education
              </span>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, lineHeight: 1.3, marginBottom: 6 }}>
                {education.degree}
              </h3>
              <p style={{ color: "#60a5fa", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>
                {education.institution}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 16px" }}>
                {[
                  { icon: "📍", text: education.location },
                  { icon: "📅", text: education.duration },
                ].map((item) => (
                  <span key={item.text} style={{ color: "#475569", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                    {item.icon} {item.text}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificate cards */}
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: (i + 1) * 0.1 } },
            }}
            style={{
              padding: "28px",
              borderRadius: 20,
              border: "1px solid rgba(139,92,246,0.2)",
              background: "rgba(139,92,246,0.04)",
              backdropFilter: "blur(8px)",
              boxShadow: "0 0 40px rgba(139,92,246,0.06)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(139,92,246,0.5), transparent)" }} />

            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div
                style={{
                  width: 48,
                  height: 48,
                  borderRadius: 14,
                  background: "rgba(139,92,246,0.12)",
                  border: "1px solid rgba(139,92,246,0.25)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontSize: 22,
                  flexShrink: 0,
                }}
              >
                🏆
              </div>
              <div>
                <span
                  style={{
                    display: "inline-block",
                    fontSize: 10,
                    fontWeight: 700,
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    padding: "3px 8px",
                    borderRadius: 6,
                    background: "rgba(139,92,246,0.12)",
                    color: "#a78bfa",
                    border: "1px solid rgba(139,92,246,0.2)",
                    marginBottom: 10,
                  }}
                >
                  Certificate
                </span>
                <h4 style={{ color: "#fff", fontWeight: 700, fontSize: 15, lineHeight: 1.3, marginBottom: 4 }}>
                  {cert.title}
                </h4>
                <p style={{ color: "#a78bfa", fontSize: 12, fontWeight: 600, marginBottom: 10 }}>
                  Issued by {cert.issuer}
                </p>
                <p style={{ color: "#475569", fontSize: 13, lineHeight: 1.6 }}>{cert.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
