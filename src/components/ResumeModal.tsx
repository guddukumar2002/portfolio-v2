"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Download, ExternalLink, FileText, Eye, Briefcase, GraduationCap, Code, CheckCircle2 } from "lucide-react";
import { availability, experiences, education, projects } from "@/data";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Default to 'interactive' so recruiters and users IMMEDIATELY see the clean, beautiful resume
  const [viewMode, setViewMode] = useState<"interactive" | "pdf">("interactive");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      document.documentElement.style.overflow = "hidden";
      document.body.style.overscrollBehavior = "contain";
      document.documentElement.style.overscrollBehavior = "contain";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "";
      document.documentElement.style.overflow = "";
      document.body.style.overscrollBehavior = "";
      document.documentElement.style.overscrollBehavior = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div
          style={{ position: "fixed", inset: 0, zIndex: 200, display: "flex", alignItems: "center", justifyContent: "center", padding: "16px", overscrollBehavior: "contain" }}
          onWheel={(e) => e.stopPropagation()}
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="resume-modal-backdrop"
            style={{ position: "absolute", inset: 0 }}
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="resume-modal-container"
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 960,
              height: "88vh",
              borderRadius: 20,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {/* Header */}
            <div className="resume-modal-header" style={{ padding: "14px 20px", display: "flex", alignItems: "center", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                <div style={{ width: 34, height: 34, borderRadius: 9, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366f1" }}>
                  <FileText size={18} />
                </div>
                <div>
                  <h3 className="resume-text-title" style={{ fontWeight: 700, fontSize: 15 }}>Guddu Kumar — Resume</h3>
                  <p className="resume-text-company" style={{ fontSize: 11, fontWeight: 600 }}>Full Stack Developer | React, Next.js, Node.js, TypeScript</p>
                </div>
              </div>

              {/* View Selector Tabs & Action Buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, flexWrap: "wrap" }}>
                {/* View Switcher Pills */}
                <div className="resume-pill-wrapper" style={{ display: "flex", padding: 3, borderRadius: 8 }}>
                  <button
                    onClick={() => setViewMode("interactive")}
                    className={viewMode === "interactive" ? "" : "resume-pill-inactive"}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 6,
                      background: viewMode === "interactive" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "transparent",
                      color: viewMode === "interactive" ? "#fff" : undefined,
                      fontSize: 11,
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <Eye size={13} /> Interactive Resume
                  </button>
                  <button
                    onClick={() => setViewMode("pdf")}
                    className={viewMode === "pdf" ? "" : "resume-pill-inactive"}
                    style={{
                      padding: "6px 14px",
                      borderRadius: 6,
                      background: viewMode === "pdf" ? "linear-gradient(135deg, #6366f1, #8b5cf6)" : "transparent",
                      color: viewMode === "pdf" ? "#fff" : undefined,
                      fontSize: 11,
                      fontWeight: 700,
                      border: "none",
                      cursor: "pointer",
                      display: "flex",
                      alignItems: "center",
                      gap: 5,
                    }}
                  >
                    <FileText size={13} /> Raw PDF
                  </button>
                </div>

                {/* Download PDF Button */}
                <a
                  href={availability.resumeUrl}
                  download="Guddu_Kumar_Resume.pdf"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 14px",
                    borderRadius: 8,
                    background: "rgba(52, 211, 153, 0.15)",
                    border: "1px solid rgba(52, 211, 153, 0.35)",
                    color: "#059669",
                    fontSize: 12,
                    fontWeight: 700,
                    textDecoration: "none",
                  }}
                >
                  <Download size={13} />
                  Download PDF
                </a>

                {/* Open in external tab */}
                <a
                  href={availability.resumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="resume-btn-secondary"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    padding: "7px 12px",
                    borderRadius: 8,
                    fontSize: 12,
                    fontWeight: 600,
                    textDecoration: "none",
                  }}
                >
                  <ExternalLink size={13} />
                  New Tab
                </a>

                <button
                  onClick={onClose}
                  className="resume-btn-secondary"
                  style={{
                    width: 30,
                    height: 30,
                    borderRadius: 8,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    cursor: "pointer",
                  }}
                >
                  <X size={15} />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="resume-modal-body" style={{ flex: 1, width: "100%", height: "100%", overflow: "hidden", position: "relative" }}>
              {viewMode === "interactive" ? (
                /* Interactive Formatted Resume View */
                <div className="modal-mobile-padding" style={{ height: "100%", overflowY: "auto", overscrollBehavior: "contain", WebkitOverflowScrolling: "touch", padding: "28px", display: "flex", flexDirection: "column", gap: 24 }}>
                  {/* Candidate Header */}
                  <div className="resume-header-box" style={{ padding: "24px", borderRadius: 16 }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: 12 }}>
                      <div>
                        <h2 className="resume-text-title" style={{ fontSize: 26, fontWeight: 800, marginBottom: 4 }}>Guddu Kumar</h2>
                        <p className="resume-text-subtitle" style={{ fontSize: 14, fontWeight: 700, marginBottom: 8 }}>Full Stack Developer | React.js · Next.js · Node.js · TypeScript · MERN · AI APIs</p>
                        <p className="resume-text-muted" style={{ fontSize: 13 }}>Ghaziabad, India · {availability.email} · Available Immediately</p>
                      </div>
                      <a
                        href={availability.resumeUrl}
                        download="Guddu_Kumar_Resume.pdf"
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          gap: 6,
                          padding: "9px 16px",
                          borderRadius: 10,
                          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                          color: "#fff",
                          fontSize: 12,
                          fontWeight: 700,
                          textDecoration: "none",
                          boxShadow: "0 0 20px rgba(99,102,241,0.4)",
                        }}
                      >
                        <Download size={14} /> Download Official PDF
                      </a>
                    </div>
                  </div>

                  {/* Summary */}
                  <div className="resume-section-card" style={{ padding: "20px", borderRadius: 14 }}>
                    <h4 className="resume-text-title" style={{ fontSize: 15, fontWeight: 700, marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                      <CheckCircle2 size={16} style={{ color: "#10b981" }} /> Executive Summary
                    </h4>
                    <p className="resume-text-body" style={{ fontSize: 13, lineHeight: 1.75 }}>
                      Full Stack Developer with hands-on experience across 4 companies (SEG, Pearl Thoughts, Inlign Tech, Code Alpha). Specialized in React.js, Next.js, Node.js, Express.js, MongoDB, PostgreSQL, and modern AI application workflows. Proven record of building production applications that process real patient files, manage sports tournament registrations with Razorpay payments, and perform real-time website SEO audits.
                    </p>
                  </div>

                  {/* Work Experience */}
                  <div>
                    <h4 className="resume-text-title" style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                      <Briefcase size={16} style={{ color: "#3b82f6" }} /> Work Experience (4 Companies)
                    </h4>
                    <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                      {experiences.map((exp, i) => (
                        <div key={i} className="resume-section-card" style={{ padding: "16px 18px", borderRadius: 14, borderLeft: exp.current ? "3px solid #10b981" : undefined }}>
                          <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 6, marginBottom: 6 }}>
                            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                              <span className="resume-text-title" style={{ fontWeight: 700, fontSize: 15 }}>{exp.role}</span>
                              <span className="resume-text-company" style={{ fontWeight: 700, fontSize: 14 }}>@ {exp.company}</span>
                              {exp.current && (
                                <span style={{ fontSize: 10, fontWeight: 800, padding: "2px 6px", borderRadius: 4, background: "rgba(16,185,129,0.15)", color: "#059669", border: "1px solid rgba(16,185,129,0.3)" }}>
                                  Current
                                </span>
                              )}
                            </div>
                            <span className="resume-text-muted" style={{ fontSize: 12, fontFamily: "monospace", fontWeight: 600 }}>{exp.duration} ({exp.type})</span>
                          </div>
                          <ul style={{ listStyle: "none", paddingLeft: 0, fontSize: 13, marginTop: 8, display: "flex", flexDirection: "column", gap: 6 }}>
                            {exp.points.map((pt, j) => (
                              <li key={j} className="resume-text-body" style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                                <span style={{ color: "#6366f1", marginTop: 4 }}>•</span>
                                <span>{pt}</span>
                              </li>
                            ))}
                          </ul>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginTop: 12 }}>
                            {exp.tech.map((t) => (
                              <span key={t} className="resume-tech-tag" style={{ fontSize: 10, padding: "2px 7px", borderRadius: 4 }}>
                                {t}
                              </span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Featured Production Projects */}
                  <div>
                    <h4 className="resume-text-title" style={{ fontSize: 15, fontWeight: 700, marginBottom: 12, display: "flex", alignItems: "center", gap: 8 }}>
                      <Code size={16} style={{ color: "#8b5cf6" }} /> Featured Production Projects
                    </h4>
                    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
                      {projects.map((p) => (
                        <div key={p.id} className="resume-section-card" style={{ padding: "16px", borderRadius: 14, display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                          <div>
                            <div className="resume-text-title" style={{ fontWeight: 700, fontSize: 14, marginBottom: 4 }}>{p.title}</div>
                            <p className="resume-text-body" style={{ fontSize: 12, lineHeight: 1.5, marginBottom: 10 }}>{p.description}</p>
                          </div>
                          <div style={{ display: "flex", flexWrap: "wrap", gap: 4 }}>
                            {p.tech.map((t) => (
                              <span key={t} className="resume-tech-tag" style={{ fontSize: 10, padding: "2px 6px", borderRadius: 4 }}>{t}</span>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Education & Certifications */}
                  <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 14 }}>
                    <div className="resume-section-card" style={{ padding: "16px", borderRadius: 14 }}>
                      <h4 className="resume-text-title" style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                        <GraduationCap size={16} style={{ color: "#d97706" }} /> Education
                      </h4>
                      <div className="resume-text-title" style={{ fontWeight: 700, fontSize: 13 }}>{education.degree}</div>
                      <div className="resume-text-company" style={{ fontSize: 12, marginTop: 2, fontWeight: 600 }}>{education.institution} (2020–2024)</div>
                      <div className="resume-text-muted" style={{ fontSize: 12, marginTop: 4 }}>CGPA: {education.cgpa}</div>
                    </div>

                    <div className="resume-section-card" style={{ padding: "16px", borderRadius: 14 }}>
                      <h4 className="resume-text-title" style={{ fontSize: 14, fontWeight: 700, marginBottom: 8, display: "flex", alignItems: "center", gap: 8 }}>
                        <CheckCircle2 size={16} style={{ color: "#10b981" }} /> Skills & Stack
                      </h4>
                      <div className="resume-text-body" style={{ fontSize: 12, lineHeight: 1.6 }}>
                        React, Next.js 16, Node.js, Express, TypeScript, MongoDB, PostgreSQL, Prisma, Tailwind CSS, GCP, Vercel, REST APIs.
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* Raw PDF View with direct option */
                <div style={{ width: "100%", height: "100%", position: "relative", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: 24, textAlign: "center" }}>
                  <div className="resume-section-card" style={{ padding: "32px", borderRadius: 20, maxWidth: 500, width: "100%", display: "flex", flexDirection: "column", alignItems: "center" }}>
                    <div style={{ width: 64, height: 64, borderRadius: 16, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", display: "flex", alignItems: "center", justifyContent: "center", color: "#6366f1", marginBottom: 20 }}>
                      <FileText size={32} />
                    </div>
                    <h4 className="resume-text-title" style={{ fontSize: 18, fontWeight: 700, marginBottom: 8 }}>Guddu Kumar — Official Resume PDF</h4>
                    <p className="resume-text-muted" style={{ fontSize: 13, lineHeight: 1.6, marginBottom: 24 }}>
                      You can open or download the complete PDF file directly in your browser.
                    </p>

                    <div style={{ display: "flex", flexDirection: "column", gap: 10, width: "100%" }}>
                      <a
                        href={availability.resumeUrl}
                        download="Guddu_Kumar_Resume.pdf"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          padding: "12px",
                          borderRadius: 12,
                          background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                          color: "#fff",
                          fontSize: 14,
                          fontWeight: 700,
                          textDecoration: "none",
                          boxShadow: "0 0 24px rgba(99,102,241,0.35)",
                        }}
                      >
                        <Download size={16} /> Download Resume PDF
                      </a>

                      <a
                        href={availability.resumeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="resume-btn-secondary"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          gap: 8,
                          padding: "12px",
                          borderRadius: 12,
                          fontSize: 14,
                          fontWeight: 600,
                          textDecoration: "none",
                        }}
                      >
                        <ExternalLink size={16} /> Open PDF in New Tab
                      </a>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
