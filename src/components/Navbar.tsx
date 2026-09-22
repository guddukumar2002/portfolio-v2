"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Command, FileText, Menu, X } from "lucide-react";
import { navLinks } from "@/data";
import { scrollToSection } from "@/components/SmoothScroll";
import ThemeToggle from "@/components/ThemeToggle";

interface NavbarProps {
  onOpenCommandPalette: () => void;
  onOpenResume: () => void;
}

export default function Navbar({ onOpenCommandPalette, onOpenResume }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 130) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    setTimeout(() => scrollToSection(href.replace("#", "")), 200);
  };

  return (
    <header
      id="main-header"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        transition: "all 0.3s ease",
        background: scrolled ? "var(--header-bg)" : "transparent",
        backdropFilter: scrolled ? "blur(20px)" : "none",
        borderBottom: scrolled ? "1px solid var(--card-border)" : "1px solid transparent",
      }}
    >
      <nav className="nav-inner" style={{ height: 68 }}>
        {/* Logo */}
        <button onClick={() => scrollTo("#home")} className="nav-logo">
          <div
            style={{
              width: 34,
              height: 34,
              borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 16px rgba(99,102,241,0.4)",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 13 }}>GK</span>
          </div>
          <div style={{ display: "flex", flexDirection: "column", textAlign: "left" }}>
            <span style={{ color: "var(--text-main)", fontWeight: 800, fontSize: 15, letterSpacing: "-0.01em" }}>Guddu Kumar</span>
            <span style={{ color: "#818cf8", fontSize: 10, fontWeight: 700, letterSpacing: "0.05em" }}>FULL STACK DEV</span>
          </div>
        </button>

        {/* Desktop nav links */}
        <ul className="nav-links-desktop">
          {navLinks.map((link) => {
            const id = link.href.replace("#", "");
            const isActive = active === id;
            return (
              <li key={link.label}>
                <button
                  onClick={() => scrollTo(link.href)}
                  style={{
                    padding: "7px 13px",
                    borderRadius: 8,
                    background: isActive ? "rgba(99,102,241,0.12)" : "transparent",
                    border: isActive ? "1px solid rgba(99,102,241,0.25)" : "1px solid transparent",
                    color: isActive ? "#a5b4fc" : "var(--text-muted)",
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.2s",
                    fontFamily: "inherit",
                  }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop Controls: Cmd+K, ThemeToggle, Resume */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          {/* Cmd+K trigger button */}
          <button
            onClick={onOpenCommandPalette}
            title="Open Command Palette (Cmd+K)"
            className="nav-cmd-btn"
            style={{
              alignItems: "center",
              gap: 6,
              padding: "7px 12px",
              borderRadius: 9,
              border: "1px solid var(--card-border)",
              background: "var(--card-bg)",
              color: "var(--text-muted)",
              fontSize: 12,
              fontWeight: 600,
              cursor: "pointer",
              backdropFilter: "blur(8px)",
            }}
          >
            <Command size={13} style={{ color: "#818cf8" }} />
            <span style={{ fontSize: 11, fontFamily: "monospace" }}>Cmd+K</span>
          </button>

          {/* Theme Switcher */}
          <ThemeToggle />

          {/* Desktop Resume CTA */}
          <button
            onClick={onOpenResume}
            className="nav-resume-btn"
            style={{
              alignItems: "center",
              gap: 6,
              padding: "8px 16px",
              borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              fontSize: 13,
              fontWeight: 700,
              border: "none",
              cursor: "pointer",
              boxShadow: "0 0 20px rgba(99,102,241,0.35)",
            }}
          >
            <FileText size={14} />
            Resume
          </button>

          {/* Hamburger */}
          <button onClick={() => setOpen(!open)} className="nav-hamburger" aria-label="Toggle Menu">
            {open ? <X size={20} className="nav-hamburger-icon" /> : <Menu size={20} className="nav-hamburger-icon" />}
          </button>
        </div>
      </nav>

      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="nav-mobile-menu"
          >
            <ul style={{ listStyle: "none", margin: 0, padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: 6 }}>
              {navLinks.map((link) => {
                const linkId = link.href.replace("#", "");
                const isActive = active === linkId;
                return (
                  <li key={link.label}>
                    <button
                      onClick={() => scrollTo(link.href)}
                      className={`nav-mobile-link ${isActive ? "active" : ""}`}
                      style={{
                        width: "100%",
                        textAlign: "left",
                        padding: "12px 16px",
                        borderRadius: 10,
                        background: isActive ? "rgba(99,102,241,0.12)" : "transparent",
                        border: "none",
                        fontSize: 14,
                        fontWeight: 600,
                        cursor: "pointer",
                        fontFamily: "inherit",
                      }}
                    >
                      {link.label}
                    </button>
                  </li>
                );
              })}
              <li style={{ marginTop: 8, display: "flex", gap: 10 }}>
                <button
                  onClick={() => { setOpen(false); onOpenCommandPalette(); }}
                  className="nav-mobile-search-btn"
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "12px",
                    borderRadius: 10,
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: "pointer",
                  }}
                >
                  <Command size={14} /> Search (Cmd+K)
                </button>

                <button
                  onClick={() => { setOpen(false); onOpenResume(); }}
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 6,
                    padding: "12px",
                    borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff",
                    fontSize: 13,
                    fontWeight: 700,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  <FileText size={14} /> Resume
                </button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
