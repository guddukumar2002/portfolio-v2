"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navLinks } from "@/data";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { scrollToSection } from "@/components/SmoothScroll";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [mounted, setMounted] = useState(false);
  const isMobile = useMediaQuery("(max-width: 768px)");

  useEffect(() => { setMounted(true); }, []);
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

  // close menu on resize to desktop
  useEffect(() => {
    if (!isMobile && open) setOpen(false);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMobile]);

  // close menu on outside click
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
    const id = href.replace("#", "");
    setTimeout(() => scrollToSection(id), 300);
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
      <nav
        style={{
          maxWidth: 1100, margin: "0 auto",
          padding: (mounted && isMobile) ? "0 20px" : "0 32px",
          height: 64,
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}
      >
        {/* Logo */}
        <button
          onClick={() => scrollTo("#home")}
          style={{ display: "flex", alignItems: "center", gap: 10, background: "none", border: "none", cursor: "pointer", padding: 0 }}
        >
          <div
            style={{
              width: 32, height: 32, borderRadius: 9,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 0 16px rgba(99,102,241,0.4)",
              flexShrink: 0,
            }}
          >
            <span style={{ color: "#fff", fontWeight: 800, fontSize: 12 }}>GK</span>
          </div>
          <span style={{ color: "#e2e8f0", fontWeight: 700, fontSize: 15, letterSpacing: "-0.01em" }}>
            Guddu Kumar
          </span>
        </button>

        {/* Desktop nav — always show on server, hide on mobile after mount */}
        {!(mounted && isMobile) && (
          <ul style={{ display: "flex", alignItems: "center", gap: 4, listStyle: "none", margin: 0, padding: 0 }}>
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
                      fontSize: 13, fontWeight: 600, cursor: "pointer",
                      transition: "all 0.2s", fontFamily: "inherit",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              );
            })}
          </ul>
        )}

        {/* Desktop Resume CTA */}
        {!(mounted && isMobile) && (
          <a
            href="/assets/GudduKumarResume.pdf"
            download
            style={{
              display: "flex", alignItems: "center", gap: 6,
              padding: "9px 18px", borderRadius: 10,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff", fontSize: 13, fontWeight: 700,
              textDecoration: "none",
              boxShadow: "0 0 20px rgba(99,102,241,0.3)",
            }}
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Resume
          </a>
        )}

        {/* Hamburger — mobile only */}
        {(mounted && isMobile) && (
          <button
            onClick={() => setOpen(!open)}
            style={{
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              gap: 5, width: 40, height: 40,
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: 10, cursor: "pointer",
            }}
            aria-label="Menu"
          >
            <span style={{ display: "block", width: 18, height: 1.5, background: open ? "transparent" : "#94a3b8", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(45deg) translate(4px, 4px)" : "none" }} />
            <span style={{ display: "block", width: 18, height: 1.5, background: "#94a3b8", borderRadius: 2, transition: "all 0.3s", transform: open ? "rotate(-45deg)" : "none", marginTop: open ? -7 : 0 }} />
          </button>
        )}
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (mounted && isMobile) && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              overflow: "hidden",
              background: "rgba(3,3,8,0.98)",
              backdropFilter: "blur(24px)",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    style={{
                      width: "100%", textAlign: "left",
                      padding: "13px 16px", borderRadius: 10,
                      background: active === link.href.replace("#", "") ? "rgba(99,102,241,0.1)" : "none",
                      border: "none",
                      color: active === link.href.replace("#", "") ? "#a5b4fc" : "#94a3b8",
                      fontSize: 15, fontWeight: 600, cursor: "pointer", fontFamily: "inherit",
                    }}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
              <li style={{ marginTop: 8 }}>
                <a
                  href="/assets/GudduKumarResume.pdf"
                  download
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center", gap: 8,
                    padding: "13px", borderRadius: 10,
                    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                    color: "#fff", fontSize: 14, fontWeight: 700, textDecoration: "none",
                  }}
                >
                  Download Resume
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
