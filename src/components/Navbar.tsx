"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";
import { scrollToSection } from "@/components/SmoothScroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      const sections = navLinks.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) { setActive(id); break; }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      const header = document.getElementById("main-header");
      if (header && !header.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [open]);

  const scrollTo = (href: string) => {
    setOpen(false);
    setTimeout(() => scrollToSection(href.replace("#", "")), 300);
  };

  return (
    <header
      id="main-header"
      style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
        transition: "all 0.4s",
        background: scrolled ? "rgba(3,3,8,0.9)" : "transparent",
        backdropFilter: scrolled ? "blur(24px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
      }}
    >
      <nav className="nav-inner">
        {/* Logo */}
        <button onClick={() => scrollTo("#home")} className="nav-logo">
          <div style={{ width: 32, height: 32, borderRadius: 9, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", display: "flex", alignItems: "center", justifyContent: "center", boxShadow: "0 0 16px rgba(99,102,241,0.4)", flexShrink: 0 }}>
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 12 }}>GK</span>
          </div>
          <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>Guddu Kumar</span>
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
                    padding: "8px 14px", borderRadius: 10,
                    background: isActive ? "rgba(99,102,241,0.12)" : "transparent",
                    border: isActive ? "1px solid rgba(99,102,241,0.25)" : "1px solid transparent",
                    color: isActive ? "#a5b4fc" : "#64748b",
                    fontSize: 13, fontWeight: 600, cursor: "pointer", transition: "all 0.2s", fontFamily: "inherit",
                  }}
                >
                  {link.label}
                </button>
              </li>
            );
          })}
        </ul>

        {/* Desktop Resume CTA */}
        <a href="/assets/GudduKumarResume.pdf" target="_blank" rel="noopener noreferrer" className="nav-resume-btn">
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
          </svg>
          View Resume
        </a>

        {/* Hamburger */}
        <button onClick={() => setOpen(!open)} className="nav-hamburger" aria-label="Menu">
          <span style={{ display: "block", width: 18, height: 1.5, background: open ? "transparent" : "#94a3b8", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
          <span style={{ display: "block", width: 18, height: 1.5, background: "#94a3b8", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(-45deg)" : "none", marginTop: open ? -7 : 0 }} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="nav-mobile-menu"
          >
            <ul style={{ listStyle: "none", margin: 0, padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      width: "100%", textAlign: "left", padding: "13px 16px", borderRadius: 10,
                      background: active === link.href.replace("#", "") ? "rgba(99,102,241,0.1)" : "none",
                      border: "none", color: active === link.href.replace("#", "") ? "#a5b4fc" : "#94a3b8",
                      fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li style={{ marginTop: 8 }}>
                <a href="/assets/GudduKumarResume.pdf" target="_blank" rel="noopener noreferrer"
                  style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 8, padding: "13px", borderRadius: 10, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", fontSize: 14, fontWeight: 700, textDecoration: "none" }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /><polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
                  </svg>
                  View Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
