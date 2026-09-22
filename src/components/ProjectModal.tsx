"use client";
import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ExternalLink, CheckCircle2, Layers, Cpu, Award } from "lucide-react";
import { SiGithub } from "react-icons/si";
import { Project } from "@/data";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      <div style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          style={{ position: "absolute", inset: 0, background: "rgba(3, 3, 8, 0.85)", backdropFilter: "blur(12px)" }}
        />

        {/* Modal */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 850,
            maxHeight: "90vh",
            borderRadius: 24,
            border: "1px solid rgba(99, 102, 241, 0.3)",
            background: "#080814",
            boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.8), 0 0 40px rgba(99, 102, 241, 0.2)",
            display: "flex",
            flexDirection: "column",
            overflow: "hidden",
            zIndex: 1,
          }}
        >
          {/* Header Bar */}
          <div style={{ padding: "16px 24px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "space-between", background: "rgba(255,255,255,0.02)" }}>
            <div>
              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 18 }}>{project.title}</h3>
              <p style={{ color: "#818cf8", fontSize: 12, fontWeight: 600 }}>{project.subtitle}</p>
            </div>
            <button
              onClick={onClose}
              style={{
                width: 32,
                height: 32,
                borderRadius: 8,
                border: "1px solid rgba(255,255,255,0.1)",
                background: "rgba(255,255,255,0.04)",
                color: "#94a3b8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
            >
              <X size={16} />
            </button>
          </div>

          {/* Scrollable Body */}
          <div style={{ flex: 1, overflowY: "auto", padding: "24px", display: "flex", flexDirection: "column", gap: 24 }}>
            {/* Image Preview */}
            <div style={{ borderRadius: 16, overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", background: "linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)", height: 260, position: "relative", display: "flex", alignItems: "center", justifyContent: "center" }}>
              {/* Fallback pattern */}
              <div style={{ position: "absolute", inset: 0, padding: 24, display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center", textAlign: "center" }}>
                <span style={{ fontSize: 18, fontWeight: 800, color: "#e2e8f0" }}>{project.title}</span>
                <span style={{ fontSize: 13, color: "#818cf8", marginTop: 6 }}>{project.subtitle}</span>
              </div>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={project.screenshot}
                alt={project.title}
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).style.display = "none";
                }}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", position: "relative", zIndex: 2 }}
              />
              <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to bottom, transparent 60%, rgba(8,8,20,0.9) 100%)", zIndex: 3, pointerEvents: "none" }} />
            </div>

            {/* Metrics pills */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {project.metrics.map((m) => (
                <div key={m} style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "6px 12px", borderRadius: 8, background: "rgba(99, 102, 241, 0.12)", border: "1px solid rgba(99, 102, 241, 0.25)", color: "#a5b4fc", fontSize: 12, fontWeight: 700 }}>
                  <Award size={14} />
                  {m}
                </div>
              ))}
            </div>

            {/* Problem & Solution Grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              <div style={{ padding: "16px", borderRadius: 14, background: "rgba(239, 68, 68, 0.04)", border: "1px solid rgba(239, 68, 68, 0.15)" }}>
                <h4 style={{ color: "#f87171", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>The Problem</h4>
                <p style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.6 }}>{project.problem}</p>
              </div>

              <div style={{ padding: "16px", borderRadius: 14, background: "rgba(52, 211, 153, 0.04)", border: "1px solid rgba(52, 211, 153, 0.15)" }}>
                <h4 style={{ color: "#34d399", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 8 }}>The Solution</h4>
                <p style={{ color: "#cbd5e1", fontSize: 13, lineHeight: 1.6 }}>{project.solution}</p>
              </div>
            </div>

            {/* Key Features */}
            <div>
              <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                <CheckCircle2 size={16} style={{ color: "#6366f1" }} /> Key Features
              </h4>
              <ul style={{ listStyle: "none", display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}>
                {project.keyFeatures.map((feat) => (
                  <li key={feat} style={{ display: "flex", alignItems: "flex-start", gap: 8, color: "#94a3b8", fontSize: 13, lineHeight: 1.5 }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#6366f1", marginTop: 6, flexShrink: 0 }} />
                    {feat}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack */}
            <div>
              <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
                <Layers size={16} style={{ color: "#8b5cf6" }} /> Technologies Used
              </h4>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
                {project.tech.map((t) => (
                  <span key={t} style={{ fontSize: 11, fontWeight: 600, padding: "4px 10px", borderRadius: 6, background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.08)", color: "#e2e8f0" }}>
                    {t}
                  </span>
                ))}
              </div>
            </div>

            {/* Architecture Highlights */}
            {project.architectureHighlights && project.architectureHighlights.length > 0 && (
              <div>
                <h4 style={{ color: "#fff", fontSize: 14, fontWeight: 700, marginBottom: 10, display: "flex", alignItems: "center", gap: 8 }}>
                  <Cpu size={16} style={{ color: "#60a5fa" }} /> Architecture Highlights
                </h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
                  {project.architectureHighlights.map((arch, idx) => (
                    <div key={idx} style={{ padding: "10px 14px", borderRadius: 10, background: "rgba(255,255,255,0.02)", border: "1px solid rgba(255,255,255,0.05)", color: "#cbd5e1", fontSize: 13 }}>
                      ⚡ {arch}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Footer CTAs */}
          <div style={{ padding: "16px 24px", borderTop: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", justifyContent: "flex-end", gap: 12, background: "rgba(255,255,255,0.02)" }}>
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 18px", borderRadius: 10, border: "1px solid rgba(255,255,255,0.12)", background: "rgba(255,255,255,0.05)", color: "#cbd5e1", fontSize: 13, fontWeight: 600, textDecoration: "none" }}
            >
              <SiGithub size={15} />
              View Source Code
            </a>
            <a
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, padding: "10px 20px", borderRadius: 10, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", fontSize: 13, fontWeight: 700, textDecoration: "none", boxShadow: "0 0 20px rgba(99,102,241,0.4)" }}
            >
              <ExternalLink size={15} />
              Visit Live Application
            </a>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
