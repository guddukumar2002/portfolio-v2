"use client";
import { motion } from "framer-motion";
import { Mail, FileText, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { availability } from "@/data";
import { scrollToSection } from "@/components/SmoothScroll";

interface FooterProps {
  onOpenResume: () => void;
}

export default function Footer({ onOpenResume }: FooterProps) {
  return (
    <footer style={{ position: "relative", zIndex: 1, borderTop: "1px solid var(--card-border)", marginTop: 32 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: "28px 32px", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 16 }}>
        <div>
          <p style={{ color: "var(--text-main)", fontSize: 14, fontWeight: 700 }}>
            Guddu Kumar — Full Stack Developer
          </p>
          <p style={{ color: "var(--text-muted)", fontSize: 12, marginTop: 2 }}>
            © {new Date().getFullYear()} Guddu Kumar. Built with Next.js 16, TypeScript, Tailwind CSS & Framer Motion.
          </p>
        </div>

        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <a
            href={availability.github}
            target="_blank"
            rel="noopener noreferrer"
            title="GitHub"
            style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--card-border)", background: "var(--card-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none" }}
          >
            <FaGithub size={16} />
          </a>
          <a
            href={availability.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn"
            style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--card-border)", background: "var(--card-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none" }}
          >
            <FaLinkedin size={16} />
          </a>
          <a
            href={`mailto:${availability.email}`}
            title="Email"
            style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid var(--card-border)", background: "var(--card-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-muted)", textDecoration: "none" }}
          >
            <Mail size={16} />
          </a>
          <button
            onClick={onOpenResume}
            title="Resume"
            style={{ display: "flex", alignItems: "center", gap: 5, padding: "6px 12px", borderRadius: 8, border: "1px solid var(--card-border)", background: "var(--card-bg)", color: "var(--text-muted)", fontSize: 12, fontWeight: 600, cursor: "pointer" }}
          >
            <FileText size={14} /> Resume
          </button>
          <motion.button
            whileHover={{ scale: 1.1, y: -2 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => scrollToSection("home")}
            title="Back to Top"
            style={{ width: 34, height: 34, borderRadius: 8, border: "1px solid rgba(99,102,241,0.3)", background: "rgba(99,102,241,0.12)", color: "#818cf8", display: "flex", alignItems: "center", justifyContent: "center", cursor: "pointer" }}
          >
            <ArrowUp size={16} />
          </motion.button>
        </div>
      </div>
    </footer>
  );
}
