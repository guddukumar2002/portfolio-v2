"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { projects } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

const accentColors = [
  { border: "rgba(99,102,241,0.35)", glow: "rgba(99,102,241,0.12)", top: "#6366f1", badge: "rgba(99,102,241,0.15)" },
  { border: "rgba(16,185,129,0.35)", glow: "rgba(16,185,129,0.1)", top: "#10b981", badge: "rgba(16,185,129,0.12)" },
  { border: "rgba(245,158,11,0.35)", glow: "rgba(245,158,11,0.1)", top: "#f59e0b", badge: "rgba(245,158,11,0.12)" },
  { border: "rgba(192,132,252,0.35)", glow: "rgba(192,132,252,0.1)", top: "#c084fc", badge: "rgba(192,132,252,0.12)" },
];

function ProjectCard({ project, i, large = false }: { project: typeof projects[0]; i: number; large?: boolean }) {
  const c = accentColors[i % accentColors.length];
  return (
    <motion.article
      variants={{ hidden: { opacity: 0, y: 28 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: i * 0.08 } } }}
      whileHover={{ y: -6, boxShadow: `0 24px 60px ${c.glow}` }}
      transition={{ type: "spring", stiffness: 280, damping: 22 }}
      style={{
        display: "flex", flexDirection: "column",
        borderRadius: 20,
        border: `1px solid ${c.border}`,
        background: "rgba(8,8,20,0.6)",
        backdropFilter: "blur(12px)",
        overflow: "hidden",
        position: "relative",
        boxShadow: `0 0 0 1px ${c.border}, 0 8px 32px ${c.glow}`,
      }}
    >
      {/* Top accent line */}
      <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: `linear-gradient(90deg, transparent, ${c.top}, transparent)`, zIndex: 3 }} />

      {/* Screenshot */}
      <div style={{ position: "relative", height: large ? 240 : 180, overflow: "hidden", background: "#050510", flexShrink: 0 }}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.screenshot}
          alt={project.title}
          loading="lazy"
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block", transition: "transform 0.4s ease" }}
          onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
          onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
        />
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(8,8,20,0.7) 100%)" }} />

        {/* Top-right: Live button */}
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          style={{ position: "absolute", top: 12, right: 12, display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 8, background: "rgba(8,8,20,0.85)", border: `1px solid ${c.border}`, color: "#fff", fontSize: 11, fontWeight: 700, textDecoration: "none", backdropFilter: "blur(8px)", zIndex: 2 }}
        >
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: c.top, boxShadow: `0 0 6px ${c.top}` }} />
          Live
        </a>
      </div>

      {/* Content */}
      <div style={{ padding: "18px 20px 20px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Title + GitHub */}
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 8, marginBottom: 8 }}>
          <h3 style={{ color: "#f1f5f9", fontWeight: 700, fontSize: large ? 17 : 15, lineHeight: 1.3, flex: 1 }}>
            {project.title}
          </h3>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#475569", flexShrink: 0, display: "flex", alignItems: "center", transition: "color 0.2s" }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "#a5b4fc")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
            title="View Source"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
          </a>
        </div>

        <p style={{ color: "#64748b", fontSize: 12, lineHeight: 1.65, marginBottom: 12, flex: 1 }}>
          {project.description}
        </p>

        {/* Metrics */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 10 }}>
          {project.metrics.map((m) => (
            <span key={m} style={{ fontSize: 10, fontWeight: 700, padding: "3px 8px", borderRadius: 6, background: c.badge, border: `1px solid ${c.border}`, color: "#e2e8f0", letterSpacing: "0.02em" }}>
              ✦ {m}
            </span>
          ))}
        </div>

        {/* Tech */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 5 }}>
          {project.tech.map((t) => (
            <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "2px 8px", borderRadius: 5, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "#475569" }}>
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const { ref, inView } = useScrollReveal();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Work">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.08 } } }}
      >
        {isMobile ? (
          /* Mobile — single column */
          <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
            {projects.map((p, i) => <ProjectCard key={p.title} project={p} i={i} large />)}
          </div>
        ) : (
          <div style={{ display: "flex", flexDirection: "column", gap: 36 }}>
            {/* Row 1 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <ProjectCard project={projects[0]} i={0} large />
              <ProjectCard project={projects[1]} i={1} large />
            </div>
            {/* Row 2 */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 32 }}>
              <ProjectCard project={projects[2]} i={2} />
              <ProjectCard project={projects[3]} i={3} />
            </div>
          </div>
        )}
      </motion.div>
    </SectionWrapper>
  );
}
