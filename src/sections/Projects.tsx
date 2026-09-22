"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, ArrowRight, CheckCircle2, ChevronDown, ChevronUp, Sparkles } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects, Project } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

interface ProjectsProps {
  onSelectProject: (p: Project) => void;
}

const CATEGORIES = ["Featured", "All", "Full Stack", "AI & Automation", "Backend & APIs", "Educational & Systems"] as const;

export default function Projects({ onSelectProject }: ProjectsProps) {
  const { ref, inView } = useScrollReveal();
  const [selectedCategory, setSelectedCategory] = useState<string>("Featured");
  const [isExpanded, setIsExpanded] = useState<boolean>(false);

  // Filter projects based on selected category
  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Featured") return p.featured;
    return p.category === selectedCategory;
  });

  // Featured spotlight is always project #0 (AIVOA)
  const spotlightProject = projects[0];

  // Projects to display in the main grid
  const gridProjects = selectedCategory === "All" && !isExpanded
    ? filteredProjects.slice(0, 4)
    : filteredProjects;

  const hasMoreProjects = selectedCategory === "All" && filteredProjects.length > 4;

  const getCategoryCount = (cat: string) => {
    if (cat === "All") return projects.length;
    if (cat === "Featured") return projects.filter((p) => p.featured).length;
    return projects.filter((p) => p.category === cat).length;
  };

  return (
    <SectionWrapper id="projects" title="Featured Projects" subtitle="Production Work">
      {/* CATEGORY FILTER TABS */}
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 14, marginBottom: 36 }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
            gap: 8,
            maxWidth: "100%",
          }}
        >
          {CATEGORIES.map((cat) => {
            const count = getCategoryCount(cat);
            const isActive = selectedCategory === cat;
            return (
              <button
                key={cat}
                onClick={() => {
                  setSelectedCategory(cat);
                  setIsExpanded(false);
                }}
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                  padding: "8px 16px",
                  borderRadius: 10,
                  background: isActive ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "var(--card-bg)",
                  border: isActive ? "1px solid #8b5cf6" : "1px solid var(--card-border)",
                  color: isActive ? "#ffffff" : "var(--text-muted)",
                  fontSize: 13,
                  fontWeight: 700,
                  cursor: "pointer",
                  transition: "all 0.2s cubic-bezier(0.16, 1, 0.3, 1)",
                  fontFamily: "inherit",
                  backdropFilter: "blur(8px)",
                  boxShadow: isActive ? "0 4px 20px rgba(99,102,241,0.35)" : "none",
                }}
              >
                {cat === "Featured" && <Sparkles size={13} style={{ color: isActive ? "#fff" : "#fbbf24" }} />}
                {cat}
                <span
                  style={{
                    fontSize: 10,
                    fontWeight: 800,
                    padding: "2px 6px",
                    borderRadius: 99,
                    background: isActive ? "rgba(255,255,255,0.25)" : "rgba(99,102,241,0.12)",
                    color: isActive ? "#fff" : "#a5b4fc",
                  }}
                >
                  {count}
                </span>
              </button>
            );
          })}
        </div>
      </div>

      {/* FEATURED SPOTLIGHT BLOCK (Show prominent spotlight when in Featured or All tab) */}
      {(selectedCategory === "Featured" || selectedCategory === "All") && spotlightProject && (
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          style={{
            marginBottom: 40,
            borderRadius: 24,
            border: "1px solid rgba(99, 102, 241, 0.4)",
            background: "linear-gradient(135deg, rgba(8,8,20,0.9) 0%, rgba(15,15,35,0.7) 100%)",
            backdropFilter: "blur(16px)",
            overflow: "hidden",
            boxShadow: "0 20px 50px rgba(0,0,0,0.6), 0 0 40px rgba(99,102,241,0.15)",
            position: "relative",
          }}
        >
          {/* Top highlight bar */}
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 3, background: "linear-gradient(90deg, #6366f1, #8b5cf6, #34d399)" }} />

          <div className="modal-mobile-padding" style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 24, padding: "32px" }}>
            {/* LEFT: Project Image Preview */}
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 50%, #0f172a 100%)", height: "100%", minHeight: 260, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              <div style={{ position: "absolute", inset: 0, padding: 24, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <div style={{ width: 56, height: 56, borderRadius: 16, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", display: "flex", alignItems: "center", justifyContent: "center", fontSize: 24, marginBottom: 12, color: "#a5b4fc" }}>
                  💻
                </div>
                <span style={{ fontSize: 15, fontWeight: 800, color: "#e2e8f0" }}>{spotlightProject.title}</span>
                <span style={{ fontSize: 12, color: "#818cf8", marginTop: 4, fontWeight: 600 }}>{spotlightProject.tech.slice(0, 4).join(" • ")}</span>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={spotlightProject.screenshot}
                alt={spotlightProject.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", transition: "transform 0.5s ease", position: "relative", zIndex: 2 }}
                onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, rgba(0,0,0,0.1) 0%, rgba(8,8,20,0.85) 100%)", zIndex: 3, pointerEvents: "none" }} />

              <div style={{ position: "absolute", top: 14, left: 14, padding: "4px 10px", borderRadius: 8, background: "rgba(99, 102, 241, 0.9)", color: "#fff", fontSize: 11, fontWeight: 800, letterSpacing: "0.08em", textTransform: "uppercase", zIndex: 4 }}>
                ⭐ Featured Spotlight
              </div>
            </div>

            {/* RIGHT: Detailed Info */}
            <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
              <div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 12 }}>
                  {spotlightProject.metrics.map((m) => (
                    <span key={m} style={{ fontSize: 11, fontWeight: 700, padding: "3px 9px", borderRadius: 6, background: "rgba(52,211,153,0.12)", border: "1px solid rgba(52,211,153,0.25)", color: "#6ee7b7" }}>
                      ✦ {m}
                    </span>
                  ))}
                </div>

                <h3 style={{ color: "var(--text-main)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 26px)", marginBottom: 8, lineHeight: 1.2 }}>
                  {spotlightProject.title}
                </h3>
                <p style={{ color: "#818cf8", fontSize: 13, fontWeight: 600, marginBottom: 14 }}>
                  {spotlightProject.subtitle}
                </p>
                <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.7, marginBottom: 20 }}>
                  {spotlightProject.description}
                </p>

                {/* Key features bullet points */}
                <div style={{ display: "flex", flexDirection: "column", gap: 6, marginBottom: 20 }}>
                  {spotlightProject.keyFeatures.slice(0, 3).map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--text-main)", fontSize: 13 }}>
                      <CheckCircle2 size={14} style={{ color: "#10b981", flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>

                {/* Tech Badges */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 24 }}>
                  {spotlightProject.tech.map((t) => (
                    <span key={t} style={{ fontSize: 11, fontWeight: 600, padding: "3px 9px", borderRadius: 6, background: "rgba(99, 102, 241, 0.08)", border: "1px solid rgba(99, 102, 241, 0.2)", color: "var(--text-main)" }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Links */}
              <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", gap: 12 }}>
                <button
                  onClick={() => onSelectProject(spotlightProject)}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "11px 20px",
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 0 20px rgba(99,102,241,0.4)",
                  }}
                >
                  View Case Study
                  <ArrowRight size={15} />
                </button>

                <a
                  href={spotlightProject.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", borderRadius: 10, border: "1px solid var(--card-border)", background: "var(--card-bg)", color: "var(--text-main)", fontSize: 13, fontWeight: 600, textDecoration: "none" }}
                >
                  <ExternalLink size={14} />
                  Live Demo
                </a>

                <a
                  href={spotlightProject.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="Source Code"
                  style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid rgba(255,255,255,0.1)", background: "rgba(255,255,255,0.03)", display: "flex", alignItems: "center", justifyContent: "center", color: "#94a3b8", textDecoration: "none" }}
                >
                  <SiGithub size={18} />
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {/* FILTERED PROJECTS GRID */}
      <AnimatePresence mode="wait">
        <motion.div
          key={selectedCategory + (isExpanded ? "-expanded" : "-collapsed")}
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
          style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 24 }}
        >
          {gridProjects.map((project) => (
            <motion.article
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              whileHover={{ y: -6, boxShadow: "0 20px 40px rgba(99, 102, 241, 0.15)" }}
              transition={{ type: "spring", stiffness: 300, damping: 22 }}
              style={{
                borderRadius: 20,
                border: "1px solid var(--card-border)",
                background: "var(--card-bg)",
                backdropFilter: "blur(12px)",
                overflow: "hidden",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              {/* Image header */}
              <div style={{ position: "relative", height: 190, overflow: "hidden", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                <div style={{ position: "absolute", inset: 0, padding: 16, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                  <span style={{ fontSize: 13, fontWeight: 800, color: "#a5b4fc", letterSpacing: "0.03em" }}>{project.title}</span>
                  <span style={{ fontSize: 11, color: "#64748b", marginTop: 4 }}>{project.tech.slice(0, 3).join(" • ")}</span>
                </div>

                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={project.screenshot}
                  alt={project.title}
                  loading="lazy"
                  onError={(e) => {
                    (e.currentTarget as HTMLImageElement).style.display = "none";
                  }}
                  style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", transition: "transform 0.4s ease", position: "relative", zIndex: 2 }}
                  onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                />
                <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 40%, rgba(8,8,20,0.85) 100%)", zIndex: 3, pointerEvents: "none" }} />

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ position: "absolute", top: 12, right: 12, display: "flex", alignItems: "center", gap: 5, padding: "5px 12px", borderRadius: 8, background: "rgba(8,8,20,0.85)", border: "1px solid rgba(255,255,255,0.15)", color: "#fff", fontSize: 11, fontWeight: 700, textDecoration: "none", backdropFilter: "blur(8px)", zIndex: 4 }}
                >
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 6px #34d399" }} />
                  Live Demo
                </a>
              </div>

              {/* Card Content */}
              <div style={{ padding: "20px", display: "flex", flexDirection: "column", flex: 1, justifyContent: "space-between" }}>
                <div>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                    <h3 style={{ color: "var(--text-main)", fontWeight: 700, fontSize: 17, lineHeight: 1.3 }}>
                      {project.title}
                    </h3>
                    <a href={project.github} target="_blank" rel="noopener noreferrer" title="View Source" style={{ color: "#64748b" }}>
                      <SiGithub size={17} />
                    </a>
                  </div>

                  <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.6, marginBottom: 14 }}>
                    {project.description}
                  </p>

                  {/* Metrics */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 12 }}>
                    {project.metrics.map((m) => (
                      <span key={m} style={{ fontSize: 10, fontWeight: 700, padding: "2px 7px", borderRadius: 5, background: "rgba(99,102,241,0.12)", color: "#a5b4fc" }}>
                        ✦ {m}
                      </span>
                    ))}
                  </div>

                  {/* Tech tags */}
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 5, marginBottom: 16 }}>
                    {project.tech.map((t) => (
                      <span key={t} style={{ fontSize: 10, fontWeight: 600, padding: "2px 7px", borderRadius: 5, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.07)", color: "var(--text-muted)" }}>
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Case Study Button */}
                <button
                  onClick={() => onSelectProject(project)}
                  style={{
                    width: "100%",
                    display: "inline-flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "10px",
                    borderRadius: 10,
                    border: "1px solid rgba(99,102,241,0.25)",
                    background: "rgba(99,102,241,0.08)",
                    color: "#a5b4fc",
                    fontSize: 12,
                    fontWeight: 700,
                    cursor: "pointer",
                    transition: "all 0.2s",
                  }}
                >
                  View Case Study Details
                  <ArrowRight size={14} />
                </button>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </AnimatePresence>

      {/* EXPAND / COLLAPSE TOGGLE BUTTON */}
      {hasMoreProjects && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          style={{ display: "flex", justifyContent: "center", marginTop: 40 }}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "12px 28px",
              borderRadius: 12,
              background: "linear-gradient(135deg, rgba(99,102,241,0.15), rgba(139,92,246,0.15))",
              border: "1px solid rgba(99,102,241,0.35)",
              color: "var(--text-main)",
              fontSize: 14,
              fontWeight: 700,
              cursor: "pointer",
              boxShadow: "0 0 24px rgba(99,102,241,0.25)",
              transition: "all 0.2s ease",
            }}
          >
            {isExpanded ? (
              <>
                Show Fewer Projects <ChevronUp size={16} />
              </>
            ) : (
              <>
                Explore All {projects.length} Projects <ChevronDown size={16} />
              </>
            )}
          </button>
        </motion.div>
      )}
    </SectionWrapper>
  );
}
