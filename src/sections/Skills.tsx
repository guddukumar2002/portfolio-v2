"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import { Search, Sparkles, Bot, Server } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skills, SkillItem } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";
import {
  SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiHtml5, SiFramer, SiBootstrap,
  SiNodedotjs, SiExpress, SiMongodb, SiPrisma, SiJsonwebtokens,
  SiGit, SiVercel, SiGooglecloud, SiPostman, SiNpm,
  SiPostgresql,
} from "react-icons/si";
import { TbApi } from "react-icons/tb";
import { VscVscode } from "react-icons/vsc";

const iconMap: Record<string, { icon: React.ReactNode; color: string }> = {
  "React.js": { icon: <SiReact />, color: "#61DAFB" },
  "Next.js": { icon: <SiNextdotjs />, color: "var(--text-main)" },
  "TypeScript": { icon: <SiTypescript />, color: "#3178C6" },
  "Tailwind CSS": { icon: <SiTailwindcss />, color: "#06B6D4" },
  "HTML5 / CSS3": { icon: <SiHtml5 />, color: "#E34F26" },
  "Framer Motion": { icon: <SiFramer />, color: "#0055FF" },
  "Bootstrap": { icon: <SiBootstrap />, color: "#7952B3" },
  "Node.js": { icon: <SiNodedotjs />, color: "#339933" },
  "Express.js": { icon: <SiExpress />, color: "var(--text-main)" },
  "REST APIs": { icon: <TbApi />, color: "#60a5fa" },
  "Prisma ORM": { icon: <SiPrisma />, color: "#38bdf8" },
  "JWT Auth": { icon: <SiJsonwebtokens />, color: "#d63aff" },
  "MongoDB": { icon: <SiMongodb />, color: "#47A248" },
  "PostgreSQL": { icon: <SiPostgresql />, color: "#4169E1" },
  "Git & GitHub": { icon: <SiGit />, color: "#F05032" },
  "Vercel": { icon: <SiVercel />, color: "var(--text-main)" },
  "Google Cloud (GCP)": { icon: <SiGooglecloud />, color: "#4285F4" },
  "Nginx / PM2": { icon: <Server size={16} />, color: "#10b981" },
  "AI APIs & LLMs": { icon: <Sparkles size={16} />, color: "#fbbf24" },
  "AI Dev Tooling": { icon: <Bot size={16} />, color: "#c084fc" },
  "Postman": { icon: <SiPostman />, color: "#FF6C37" },
  "npm / yarn": { icon: <SiNpm />, color: "#CB3837" },
  "VS Code": { icon: <VscVscode />, color: "#007ACC" },
};

const categories = ["Frontend", "Backend", "Databases", "DevOps & Cloud", "Tools & AI"] as const;

const catStyle: Record<string, { border: string; glow: string; label: string; displayName: string }> = {
  Frontend: { border: "rgba(59,130,246,0.25)", glow: "rgba(59,130,246,0.1)", label: "#60a5fa", displayName: "Frontend Development" },
  Backend: { border: "rgba(16,185,129,0.25)", glow: "rgba(16,185,129,0.1)", label: "#34d399", displayName: "Backend & APIs" },
  Databases: { border: "rgba(168,85,247,0.25)", glow: "rgba(168,85,247,0.1)", label: "#c084fc", displayName: "Databases & ORMs" },
  "DevOps & Cloud": { border: "rgba(245,158,11,0.25)", glow: "rgba(245,158,11,0.1)", label: "#fbbf24", displayName: "DevOps, Cloud & Hosting" },
  "Tools & AI": { border: "rgba(236,72,153,0.25)", glow: "rgba(236,72,153,0.1)", label: "#f472b6", displayName: "Tools & AI Developer Tooling" },
};

const levelDots: Record<string, number> = { expert: 3, proficient: 2, familiar: 1 };

export default function Skills() {
  const { ref, inView } = useScrollReveal();
  const [search, setSearch] = useState("");
  const [selectedCat, setSelectedCat] = useState<string>("All");

  const filteredSkills = skills.filter((s) => {
    const matchesSearch = s.name.toLowerCase().includes(search.toLowerCase()) || s.description.toLowerCase().includes(search.toLowerCase());
    const matchesCat = selectedCat === "All" || s.category === selectedCat;
    return matchesSearch && matchesCat;
  });

  return (
    <SectionWrapper id="skills" title="Skills & Tech Stack" subtitle="Technologies">
      {/* Search & Filter Bar */}
      <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 36, maxWidth: 800, margin: "0 auto 36px" }}>
        {/* Search input */}
        <div style={{ position: "relative" }}>
          <Search size={18} style={{ position: "absolute", left: 16, top: "50%", transform: "translateY(-50%)", color: "#818cf8" }} />
          <input
            type="text"
            placeholder="Search technology or framework (e.g. Next.js, Prisma, AI)..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            style={{
              width: "100%",
              padding: "12px 16px 12px 48px",
              borderRadius: 12,
              border: "1px solid var(--card-border)",
              background: "var(--card-bg)",
              color: "var(--text-main)",
              fontSize: 14,
              outline: "none",
              fontFamily: "inherit",
              backdropFilter: "blur(8px)",
            }}
          />
        </div>

        {/* Category Pills */}
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: 8 }}>
          {["All", ...categories].map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              style={{
                padding: "6px 14px",
                borderRadius: 8,
                background: selectedCat === cat ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "var(--card-bg)",
                border: selectedCat === cat ? "1px solid #8b5cf6" : "1px solid var(--card-border)",
                color: selectedCat === cat ? "#fff" : "var(--text-muted)",
                fontSize: 12,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                fontFamily: "inherit",
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Skills Grid */}
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
        style={{ display: "flex", flexDirection: "column", gap: 32 }}
      >
        {categories.map((cat) => {
          if (selectedCat !== "All" && selectedCat !== cat) return null;
          const catSkills = filteredSkills.filter((s) => s.category === cat);
          if (catSkills.length === 0) return null;
          const c = catStyle[cat];

          return (
            <motion.div
              key={cat}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            >
              {/* Category Header */}
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <div style={{ width: 8, height: 8, borderRadius: "50%", background: c.label, boxShadow: `0 0 10px ${c.label}` }} />
                <span style={{ color: c.label, fontSize: 12, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>
                  {c.displayName}
                </span>
                <div style={{ flex: 1, height: 1, background: "rgba(255,255,255,0.06)" }} />
              </div>

              {/* Badges Grid */}
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(200px, 100%), 1fr))", gap: 12 }}>
                {catSkills.map((skill) => {
                  const meta = iconMap[skill.name];
                  const filled = levelDots[skill.level] ?? 1;

                  return (
                    <motion.div
                      key={skill.name}
                      whileHover={{ y: -4, scale: 1.02, boxShadow: `0 8px 24px ${c.glow}` }}
                      transition={{ type: "spring", stiffness: 400, damping: 20 }}
                      style={{
                        padding: "12px 14px",
                        borderRadius: 12,
                        border: `1px solid ${c.border}`,
                        background: "var(--card-bg)",
                        backdropFilter: "blur(8px)",
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 12,
                      }}
                    >
                      {/* Icon */}
                      <div
                        style={{
                          width: 34,
                          height: 34,
                          borderRadius: 8,
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          fontSize: 18,
                          color: meta?.color || "#fff",
                          flexShrink: 0,
                        }}
                      >
                        {meta?.icon || <Sparkles size={16} />}
                      </div>

                      {/* Content */}
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 6 }}>
                          <span style={{ color: "var(--text-main)", fontSize: 13, fontWeight: 700 }}>{skill.name}</span>
                          {/* Dots */}
                          <div style={{ display: "flex", gap: 2 }}>
                            {[0, 1, 2].map((i) => (
                              <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", background: i < filled ? c.label : "rgba(255,255,255,0.15)" }} />
                            ))}
                          </div>
                        </div>
                        <p style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 2, lineHeight: 1.4 }}>
                          {skill.description}
                        </p>
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
