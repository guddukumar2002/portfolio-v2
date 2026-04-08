"use client";
import { motion } from "framer-motion";
import {
  SiReact, SiNextdotjs, SiTypescript, SiNodedotjs, SiMongodb,
  SiExpress, SiTailwindcss, SiGit, SiGooglecloud, SiPrisma,
  SiVercel, SiPython, SiJavascript, SiPostgresql, SiPostman,
} from "react-icons/si";
import { FaJava } from "react-icons/fa";

const techs = [
  { name: "React",      color: "#61DAFB", icon: <SiReact /> },
  { name: "Next.js",    color: "#ffffff", icon: <SiNextdotjs /> },
  { name: "TypeScript", color: "#3178C6", icon: <SiTypescript /> },
  { name: "Node.js",    color: "#339933", icon: <SiNodedotjs /> },
  { name: "MongoDB",    color: "#47A248", icon: <SiMongodb /> },
  { name: "Express",    color: "#ffffff", icon: <SiExpress /> },
  { name: "Tailwind",   color: "#06B6D4", icon: <SiTailwindcss /> },
  { name: "Git",        color: "#F05032", icon: <SiGit /> },
  { name: "GCP",        color: "#4285F4", icon: <SiGooglecloud /> },
  { name: "Prisma",     color: "#a78bfa", icon: <SiPrisma /> },
  { name: "Vercel",     color: "#ffffff", icon: <SiVercel /> },
  { name: "Python",     color: "#3776AB", icon: <SiPython /> },
  { name: "Java",       color: "#ED8B00", icon: <FaJava /> },
  { name: "JavaScript", color: "#F7DF1E", icon: <SiJavascript /> },
  { name: "PostgreSQL", color: "#4169E1", icon: <SiPostgresql /> },
  { name: "Postman",    color: "#FF6C37", icon: <SiPostman /> },
];

const Row = ({ reverse = false }: { reverse?: boolean }) => {
  const items = [...techs, ...techs];
  return (
    <div style={{ overflow: "hidden", width: "100%", WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)", maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
      <motion.div
        animate={{ x: reverse ? ["0%", "50%"] : ["0%", "-50%"] }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        style={{ display: "flex", gap: 12, width: "max-content" }}
      >
        {items.map((tech, i) => (
          <div
            key={i}
            style={{
              display: "flex", alignItems: "center", gap: 8,
              padding: "10px 18px", borderRadius: 12,
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.03)",
              whiteSpace: "nowrap", flexShrink: 0,
            }}
          >
            <span style={{ fontSize: 18, color: tech.color, display: "flex", alignItems: "center" }}>{tech.icon}</span>
            <span style={{ color: "#94a3b8", fontSize: 13, fontWeight: 600 }}>{tech.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

export default function TechMarquee() {
  return (
    <section style={{ position: "relative", zIndex: 1, padding: "32px 0", overflow: "hidden", maxWidth: "100vw" }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 12, overflow: "hidden", width: "100%" }}>
        <Row />
        <Row reverse />
      </div>
    </section>
  );
}
