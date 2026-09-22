"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Command, Code, FolderGit2, Briefcase, Mail, User, FileText, ExternalLink, Sparkles, X } from "lucide-react";
import { scrollToSection } from "@/components/SmoothScroll";
import { availability } from "@/data";

interface CommandPaletteProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

export default function CommandPalette({ isOpen, onClose, onOpenResume }: CommandPaletteProps) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === "k") {
        e.preventDefault();
        if (isOpen) onClose();
        else onOpenResume(); // or open command palette
      }
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onOpenResume]);

  const items = [
    { id: "home", label: "Jump to Hero / Overview", icon: <User size={16} />, action: () => scrollToSection("home") },
    { id: "about", label: "Read About Guddu Kumar", icon: <User size={16} />, action: () => scrollToSection("about") },
    { id: "capabilities", label: "Explore What I Build", icon: <Sparkles size={16} />, action: () => scrollToSection("capabilities") },
    { id: "skills", label: "View Tech Stack & Skills", icon: <Code size={16} />, action: () => scrollToSection("skills") },
    { id: "projects", label: "Browse Production Projects", icon: <FolderGit2 size={16} />, action: () => scrollToSection("projects") },
    { id: "experience", label: "Review Work Experience", icon: <Briefcase size={16} />, action: () => scrollToSection("experience") },
    { id: "contact", label: "Get In Touch", icon: <Mail size={16} />, action: () => scrollToSection("contact") },
    { id: "resume", label: "View Resume (PDF)", icon: <FileText size={16} />, action: onOpenResume },
    { id: "github", label: "Open GitHub Profile", icon: <ExternalLink size={16} />, action: () => window.open(availability.github, "_blank") },
    { id: "linkedin", label: "Open LinkedIn Profile", icon: <ExternalLink size={16} />, action: () => window.open(availability.linkedin, "_blank") },
  ];

  const filtered = items.filter((item) =>
    item.label.toLowerCase().includes(query.toLowerCase())
  );

  const handleSelect = (action: () => void) => {
    onClose();
    action();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div style={{ position: "fixed", inset: 0, zIndex: 300, display: "flex", alignItems: "flex-start", justifyContent: "center", paddingTop: "12vh", paddingLeft: 16, paddingRight: 16 }}>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            style={{ position: "absolute", inset: 0, background: "rgba(3, 3, 8, 0.8)", backdropFilter: "blur(12px)" }}
          />

          {/* Palette */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 580,
              borderRadius: 18,
              border: "1px solid rgba(99, 102, 241, 0.3)",
              background: "#080814",
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.8), 0 0 30px rgba(99,102,241,0.25)",
              overflow: "hidden",
              zIndex: 1,
            }}
          >
            {/* Search Input Bar */}
            <div style={{ padding: "14px 18px", borderBottom: "1px solid rgba(255, 255, 255, 0.08)", display: "flex", alignItems: "center", gap: 12 }}>
              <Search size={18} style={{ color: "#818cf8" }} />
              <input
                type="text"
                autoFocus
                placeholder="Type a command or search section..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 14, fontFamily: "inherit" }}
              />
              <div style={{ display: "flex", alignItems: "center", gap: 4, padding: "3px 8px", borderRadius: 6, background: "rgba(255,255,255,0.06)", border: "1px solid rgba(255,255,255,0.1)", color: "#64748b", fontSize: 11, fontWeight: 700 }}>
                <Command size={11} /> K
              </div>
              <button onClick={onClose} style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer" }}>
                <X size={16} />
              </button>
            </div>

            {/* List */}
            <div style={{ maxHeight: 340, overflowY: "auto", padding: "8px" }}>
              {filtered.length === 0 ? (
                <div style={{ padding: "24px", textAlign: "center", color: "#64748b", fontSize: 13 }}>
                  No matching commands found.
                </div>
              ) : (
                filtered.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleSelect(item.action)}
                    style={{
                      width: "100%",
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      padding: "10px 14px",
                      borderRadius: 10,
                      background: "transparent",
                      border: "none",
                      color: "#e2e8f0",
                      fontSize: 13,
                      fontWeight: 500,
                      cursor: "pointer",
                      textAlign: "left",
                      transition: "background 0.15s, color 0.15s",
                      fontFamily: "inherit",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "rgba(99, 102, 241, 0.12)";
                      e.currentTarget.style.color = "#a5b4fc";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#e2e8f0";
                    }}
                  >
                    <span style={{ color: "#818cf8", display: "flex" }}>{item.icon}</span>
                    <span style={{ flex: 1 }}>{item.label}</span>
                    <span style={{ fontSize: 10, color: "#475569", textTransform: "uppercase", letterSpacing: "0.05em" }}>Jump</span>
                  </button>
                ))
              )}
            </div>

            {/* Footer */}
            <div style={{ padding: "10px 18px", borderTop: "1px solid rgba(255, 255, 255, 0.05)", background: "rgba(255,255,255,0.02)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ color: "#475569", fontSize: 11 }}>Press <kbd style={{ padding: "1px 4px", borderRadius: 4, background: "rgba(255,255,255,0.08)", color: "#94a3b8" }}>ESC</kbd> to exit</span>
              <span style={{ color: "#818cf8", fontSize: 11, fontWeight: 600 }}>Guddu Kumar Portfolio CLI</span>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
