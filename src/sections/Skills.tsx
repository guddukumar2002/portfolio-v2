"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skills } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiFramer, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiPrisma, SiJsonwebtokens,
  SiJavascript, SiPython, SiCplusplus,
  SiGit, SiVercel, SiGooglecloud, SiPostman, SiNpm, SiWebpack,
  SiPostgresql,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  "React.js":        { icon: <SiReact />, color: "#61DAFB" },
  "Next.js":         { icon: <SiNextdotjs />, color: "#ffffff" },
  "TypeScript":      { icon: <SiTypescript />, color: "#3178C6" },
  "Tailwind CSS":    { icon: <SiTailwindcss />, color: "#06B6D4" },
  "HTML5 / CSS3":    { icon: <SiHtml5 />, color: "#E34F26" },
  "Framer Motion":   { icon: <SiFramer />, color: "#ffffff" },
  "Bootstrap":       { icon: <SiBootstrap />, color: "#7952B3" },
  "Node.js":         { icon: <SiNodedotjs />, color: "#339933" },
  "Express.js":      { icon: <SiExpress />, color: "#ffffff" },
  "MongoDB":         { icon: <SiMongodb />, color: "#47A248" },
  "REST APIs":       { icon: <TbApi />, color: "#60a5fa" },
  "Prisma ORM":      { icon: <SiPrisma />, color: "#2D3748" },
  "JWT Auth":        { icon: <SiJsonwebtokens />, color: "#d63aff" },
  "SQL":             { icon: <SiPostgresql />, color: "#4169E1" },
  "JavaScript":      { icon: <SiJavascript />, color: "#F7DF1E" },
  "Java":            { icon: <FaJava />, color: "#ED8B00" },
  "C++":             { icon: <SiCplusplus />, color: "#00599C" },
  "Python":          { icon: <SiPython />, color: "#3776AB" },
  "Git & GitHub":    { icon: <SiGit />, color: "#F05032" },
  "Vercel":          { icon: <SiVercel />, color: "#ffffff" },
  "Google Cloud (GCP)": { icon: <SiGooglecloud />, color: "#4285F4" },
  "Postman":         { icon: <SiPostman />, color: "#FF6C37" },
  "npm / yarn":      { icon: <SiNpm />, color: "#CB3837" },
  "VS Code":         { icon: <VscVscode />, color: "#007ACC" },
  "Webpack":         { icon: <SiWebpack />, color: "#8DD6F9" },
};

const categories = ["Frontend", "Backend", "Language", "Tools"] as const;

const catStyle: Record<string, { border: string; glow: string; label: string; displayName: string }> = {
  Frontend: { border: "rgba(59,130,246,0.2)",  glow: "rgba(59,130,246,0.08)",  label: "#60a5fa", displayName: "Frontend" },
  Backend:  { border: "rgba(16,185,129,0.2)",  glow: "rgba(16,185,129,0.08)",  label: "#34d399", displayName: "Backend" },
  Language: { border: "rgba(245,158,11,0.2)",  glow: "rgba(245,158,11,0.08)",  label: "#fbbf24", displayName: "Core Languages" },
  Tools:    { border: "rgba(139,92,246,0.2)",  glow: "rgba(139,92,246,0.08)",  label: "#a78bfa", displayName: "Tools & Platforms" },
};

const levelDots: Record<string, number> = { expert: 3, proficient: 2, familiar: 1 };

export default function Skills() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper id="skills" title="Skills & Technologies" subtitle="Stack">
      {/* Legend */}
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 32, flexWrap: "wrap" }}>
        {[{ dots: 3, label: "Expert" }, { dots: 2, label: "Proficient" }, { dots: 1, label: "Familiar" }].map((l) => (
          <div key={l.label} style={{ display: "flex", alignItems: "center", gap: 6 }}>
            <div style={{ display: "flex", gap: 3 }}>
              {[0, 1, 2].map((i) => (
                <div key={i} style={{ width: 6, height: 6, borderRadius: "50%", background: i < l.dots ? "#818cf8" : "rgba(255,255,255,0.1)" }} />
              ))}
            </div>
            <span style={{ color: "#475569", fontSize: 11, fontWeight: 600 }}>{l.label}</span>
          </div>
        ))}
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        style={{ display: "flex", flexDirection: "column", gap: 32 }}
      >
        {categories.map((cat) => {
          const catSkills = skills.filter((s) => s.category === cat);
          const c = catStyle[cat];
          return (
            <motion.div
              key={cat}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              {/* Category header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.label, boxShadow: `0 0 10px ${c.glow}` }} />
                <span style={{ color: c.label, fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {c.displayName}
                </span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.05)" }} />
              </div>

              {/* Skill badges */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
                {catSkills.map((skill) => {
                  const meta = iconMap[skill.name];
                  const filled = levelDots[skill.level] ?? 1;
                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.06, boxShadow: `0 8px 24px ${c.glow}` }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        display: "inline-flex", alignItems: "center", gap: 8,
                        padding: "8px 14px", borderRadius: 10,
                        border: `1px solid ${c.border}`,
                        background: "rgba(255,255,255,0.03)",
                        cursor: "default", transition: "all 0.2s",
                      }}
                    >
                      {/* Tech logo */}
                      {meta && (
                        <span style={{ fontSize: 16, color: meta.color, display: "flex", alignItems: "center", flexShrink: 0 }}>
                          {meta.icon}
                        </span>
                      )}
                      {/* Name */}
                      <span style={{ color: "#e2e8f0", fontSize: 13, fontWeight: 600 }}>{skill.name}</span>
                      {/* Proficiency dots */}
                      <div style={{ display: "flex", gap: 2, marginLeft: 2 }}>
                        {[0, 1, 2].map((i) => (
                          <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: i < filled ? c.label : "rgba(255,255,255,0.12)" }} />
                        ))}
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
