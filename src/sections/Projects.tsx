"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

const filters = ["All", "Featured", "Other"] as const;

const projectGradients = [
  "linear-gradient(135deg, rgba(99,102,241,0.3) 0%, rgba(139,92,246,0.2) 100%)",
  "linear-gradient(135deg, rgba(16,185,129,0.3) 0%, rgba(59,130,246,0.2) 100%)",
  "linear-gradient(135deg, rgba(245,158,11,0.3) 0%, rgba(239,68,68,0.2) 100%)",
  "linear-gradient(135deg, rgba(192,132,252,0.3) 0%, rgba(99,102,241,0.2) 100%)",
];

export default function Projects() {
  const { ref, inView } = useScrollReveal();
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");

  const filtered = projects.filter((p) => {
    if (filter === "All") return true;
    if (filter === "Featured") return p.featured;
    return !p.featured;
  });

  return (
    <SectionWrapper id="projects" title="Projects" subtitle="Work">
      {/* Filter tabs */}
      <div style={{ display: "flex", justifyContent: "center", gap: 8, marginBottom: 48 }}>
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            style={{
              position: "relative",
              padding: "8px 20px",
              borderRadius: 10,
              border: filter === f ? "1px solid rgba(99,102,241,0.4)" : "1px solid rgba(255,255,255,0.07)",
              background: filter === f ? "rgba(99,102,241,0.12)" : "transparent",
              color: filter === f ? "#a5b4fc" : "#475569",
              fontSize: 13,
              fontWeight: 600,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {f}
          </button>
        ))}
      </div>

      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(460px, 100%), 1fr))",
          gap: 20,
        }}
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <motion.article
              key={project.title}
              layout
              variants={{
                hidden: { opacity: 0, y: 24 },
                visible: { opacity: 1, y: 0, transition: { duration: 0.45 } },
              }}
              exit={{ opacity: 0, scale: 0.95 }}
              whileHover={{ y: -6, scale: 1.01 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                display: "flex",
                flexDirection: "column",
                padding: "28px 28px 24px",
                borderRadius: 20,
                border: project.featured
                  ? "1px solid rgba(99,102,241,0.25)"
                  : "1px solid rgba(255,255,255,0.07)",
                background: project.featured
                  ? "rgba(99,102,241,0.04)"
                  : "rgba(255,255,255,0.02)",
                backdropFilter: "blur(8px)",
                boxShadow: project.featured
                  ? "0 0 40px rgba(99,102,241,0.12), inset 0 1px 0 rgba(255,255,255,0.05)"
                  : "inset 0 1px 0 rgba(255,255,255,0.03)",
                transition: "all 0.3s",
                position: "relative",
                overflow: "hidden",
              }}
            >
              {/* Top glow for featured */}
              {project.featured && (
                <div
                  style={{
                    position: "absolute",
                    top: 0,
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "70%",
                    height: 1,
                    background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)",
                  }}
                />
              )}

              {/* Mockup banner — auto preview via microlink */}
              <div style={{ height: 120, borderRadius: 12, marginBottom: 20, overflow: "hidden", border: "1px solid rgba(255,255,255,0.06)", position: "relative", background: projectGradients[i % projectGradients.length] }}>
                <img
                  src={`https://api.microlink.io/?url=${encodeURIComponent(project.live)}&screenshot=true&meta=false&embed=screenshot.url`}
                  alt={project.title}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                  onError={(e) => { (e.currentTarget as HTMLImageElement).style.display = "none"; }}
                />
                {/* Fallback grid overlay */}
                <div style={{ position: "absolute", inset: 0, backgroundImage: `linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)`, backgroundSize: "20px 20px", pointerEvents: "none" }} />
              </div>

              {/* Number + badge */}
              <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 16 }}>
                <span style={{ color: "#1e293b", fontSize: 12, fontFamily: "monospace", fontWeight: 700 }}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                {project.featured && (
                  <span
                    style={{
                      fontSize: 10,
                      fontWeight: 700,
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(99,102,241,0.15)",
                      color: "#a5b4fc",
                      border: "1px solid rgba(99,102,241,0.25)",
                    }}
                  >
                    Featured
                  </span>
                )}
              </div>

              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 20, lineHeight: 1.25, marginBottom: 12 }}>
                {project.title}
              </h3>

              <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.7, marginBottom: 20, flex: 1 }}>
                {project.description}
              </p>

              {/* Tech stack */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 20 }}>
                {project.tech.map((t) => (
                  <span
                    key={t}
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      padding: "4px 10px",
                      borderRadius: 6,
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(255,255,255,0.08)",
                      color: "#94a3b8",
                    }}
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 16,
                  paddingTop: 16,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#64748b",
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
                  </svg>
                  Source Code
                </a>
                <div style={{ width: 1, height: 14, background: "rgba(255,255,255,0.08)" }} />
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#818cf8",
                    fontSize: 13,
                    fontWeight: 600,
                    textDecoration: "none",
                    transition: "color 0.2s",
                  }}
                >
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                    <polyline points="15 3 21 3 21 9" />
                    <line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  Live Demo
                </a>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>
    </SectionWrapper>
  );
}
