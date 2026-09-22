"use client";
import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle2, Calendar, MapPin } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { education, certificates } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

export default function Education() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper id="education" title="Education & Certifications" subtitle="Academic Credentials">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        className="edu-grid"
      >
        {/* Degree Education Card */}
        <motion.div
          variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          style={{
            padding: "28px",
            borderRadius: 20,
            border: "1px solid rgba(59,130,246,0.25)",
            background: "var(--card-bg)",
            backdropFilter: "blur(12px)",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #60a5fa, #818cf8)" }} />

          <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
            <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(59,130,246,0.12)", border: "1px solid rgba(59,130,246,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#60a5fa", flexShrink: 0 }}>
              <GraduationCap size={22} />
            </div>

            <div style={{ flex: 1 }}>
              <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 6, background: "rgba(59,130,246,0.12)", color: "#60a5fa", border: "1px solid rgba(59,130,246,0.2)", marginBottom: 10 }}>
                Degree Program
              </span>

              <h3 style={{ color: "var(--text-main)", fontWeight: 800, fontSize: 16, lineHeight: 1.3, marginBottom: 4 }}>
                {education.degree}
              </h3>
              <p style={{ color: "#60a5fa", fontSize: 13, fontWeight: 700, marginBottom: 10 }}>
                {education.institution}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px 14px", marginBottom: 14 }}>
                <span style={{ color: "var(--text-muted)", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                  <MapPin size={12} /> {education.location}
                </span>
                <span style={{ color: "var(--text-muted)", fontSize: 12, display: "flex", alignItems: "center", gap: 4 }}>
                  <Calendar size={12} /> {education.duration}
                </span>
              </div>

              {/* Highlights */}
              <div style={{ display: "flex", flexDirection: "column", gap: 6 }}>
                {education.highlights.map((h, i) => (
                  <div key={i} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}>
                    <CheckCircle2 size={14} style={{ color: "#34d399", marginTop: 2, flexShrink: 0 }} />
                    <span style={{ color: "var(--text-muted)", fontSize: 12, lineHeight: 1.5 }}>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>

        {/* Certificate Cards */}
        {certificates.map((cert, i) => (
          <motion.div
            key={i}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: (i + 1) * 0.1 } } }}
            style={{
              padding: "28px",
              borderRadius: 20,
              border: "1px solid rgba(139,92,246,0.25)",
              background: "var(--card-bg)",
              backdropFilter: "blur(12px)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #8b5cf6, #c084fc)" }} />

            <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
              <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(139,92,246,0.12)", border: "1px solid rgba(139,92,246,0.25)", display: "flex", alignItems: "center", justifyContent: "center", color: "#c084fc", flexShrink: 0 }}>
                <Award size={22} />
              </div>

              <div>
                <span style={{ display: "inline-block", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 8px", borderRadius: 6, background: "rgba(139,92,246,0.12)", color: "#c084fc", border: "1px solid rgba(139,92,246,0.2)", marginBottom: 10 }}>
                  Industry Certification
                </span>
                <h4 style={{ color: "var(--text-main)", fontWeight: 700, fontSize: 15, lineHeight: 1.3, marginBottom: 4 }}>
                  {cert.title}
                </h4>
                <p style={{ color: "#c084fc", fontSize: 12, fontWeight: 600, marginBottom: 10 }}>
                  Issued by {cert.issuer}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6 }}>{cert.desc}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
