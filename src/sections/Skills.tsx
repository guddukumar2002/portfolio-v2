"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skills } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

const categories = ["Frontend", "Backend", "Language", "Tools"] as const;

const catStyle: Record<string, { color: string; bg: string; border: string; glow: string; label: string; displayName: string }> = {
  Frontend: { color: "#93c5fd", bg: "rgba(59,130,246,0.08)", border: "rgba(59,130,246,0.2)", glow: "rgba(59,130,246,0.15)", label: "#60a5fa", displayName: "Frontend" },
  Backend:  { color: "#6ee7b7", bg: "rgba(16,185,129,0.08)", border: "rgba(16,185,129,0.2)", glow: "rgba(16,185,129,0.15)", label: "#34d399", displayName: "Backend" },
  Language: { color: "#fcd34d", bg: "rgba(245,158,11,0.08)", border: "rgba(245,158,11,0.2)", glow: "rgba(245,158,11,0.15)", label: "#fbbf24", displayName: "Core Languages" },
  Tools:    { color: "#c4b5fd", bg: "rgba(139,92,246,0.08)", border: "rgba(139,92,246,0.2)", glow: "rgba(139,92,246,0.15)", label: "#a78bfa", displayName: "Tools & Platforms" },
};

export default function Skills() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper id="skills" title="Skills & Technologies" subtitle="Stack">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        style={{ display: "flex", flexDirection: "column", gap: 40 }}
      >
        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat);
          const c = catStyle[cat];
          return (
            <motion.div
              key={cat}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
              }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.label, boxShadow: `0 0 10px ${c.glow}` }} />
                <span style={{ color: c.label, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {c.displayName}
                </span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }} />
              </div>

              {/* Badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {catSkills.map((skill) => (
                  <motion.span
                    key={skill.name}
                    whileHover={{ y: -4, scale: 1.08, boxShadow: `0 4px 20px ${c.glow}` }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    style={{
                      display: "inline-flex",
                      alignItems: "center",
                      padding: "8px 16px",
                      borderRadius: 10,
                      border: `1px solid ${c.border}`,
                      background: c.bg,
                      color: c.color,
                      fontSize: 13,
                      fontWeight: 600,
                      cursor: "default",
                      boxShadow: `0 2px 12px ${c.glow}`,
                      transition: "all 0.2s",
                    }}
                  >
                    {skill.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
