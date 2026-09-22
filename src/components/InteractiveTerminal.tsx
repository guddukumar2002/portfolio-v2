"use client";
import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Terminal as TerminalIcon, X, Minimize2, Maximize2 } from "lucide-react";
import { projects, experiences, skills, availability } from "@/data";

interface CommandLog {
  cmd: string;
  output: React.ReactNode;
}

export default function InteractiveTerminal() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<CommandLog[]>([
    {
      cmd: "welcome",
      output: (
        <div style={{ color: "#94a3b8", fontSize: 12, lineHeight: 1.6 }}>
          <p style={{ color: "#34d399", fontWeight: 700 }}>Guddu Kumar Developer Terminal v2.0</p>
          <p>Type <span style={{ color: "#818cf8", fontWeight: 600 }}>&apos;help&apos;</span> to list available commands or <span style={{ color: "#818cf8", fontWeight: 600 }}>&apos;whoami&apos;</span> to inspect candidate profile.</p>
        </div>
      ),
    },
  ]);
  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanCmd = input.trim().toLowerCase();
    if (!cleanCmd) return;

    let output: React.ReactNode = null;

    switch (cleanCmd) {
      case "help":
        output = (
          <div style={{ color: "#cbd5e1", fontSize: 12, display: "flex", flexDirection: "column", gap: 4 }}>
            <div><span style={{ color: "#818cf8", fontWeight: 700 }}>whoami</span> — Summary of candidate & background</div>
            <div><span style={{ color: "#818cf8", fontWeight: 700 }}>skills</span> — List primary full-stack technologies</div>
            <div><span style={{ color: "#818cf8", fontWeight: 700 }}>projects</span> — View production applications</div>
            <div><span style={{ color: "#818cf8", fontWeight: 700 }}>experience</span> — Timeline of companies & roles</div>
            <div><span style={{ color: "#818cf8", fontWeight: 700 }}>contact</span> — Get direct contact links</div>
            <div><span style={{ color: "#818cf8", fontWeight: 700 }}>ai</span> — View AI API integration capabilities</div>
            <div><span style={{ color: "#818cf8", fontWeight: 700 }}>clear</span> — Clear terminal screen history</div>
          </div>
        );
        break;
      case "whoami":
        output = (
          <div style={{ color: "#cbd5e1", fontSize: 12, lineHeight: 1.6 }}>
            <p><strong style={{ color: "#fff" }}>Guddu Kumar</strong> — Full Stack Developer</p>
            <p>Specialized in React.js, Next.js, Node.js, TypeScript, MERN & AI Web Integrations.</p>
            <p>Current Role: Web Developer @ SEG | Location: Ghaziabad, India</p>
            <p>Education: B.Tech CSE @ ABES Institute of Technology</p>
          </div>
        );
        break;
      case "skills":
        output = (
          <div style={{ color: "#cbd5e1", fontSize: 12, display: "flex", flexWrap: "wrap", gap: 6, marginTop: 4 }}>
            {skills.map((s) => (
              <span key={s.name} style={{ padding: "2px 8px", borderRadius: 4, background: "rgba(99,102,241,0.15)", border: "1px solid rgba(99,102,241,0.3)", color: "#a5b4fc" }}>
                {s.name}
              </span>
            ))}
          </div>
        );
        break;
      case "projects":
        output = (
          <div style={{ color: "#cbd5e1", fontSize: 12, display: "flex", flexDirection: "column", gap: 6 }}>
            {projects.map((p) => (
              <div key={p.id}>
                <span style={{ color: "#34d399", fontWeight: 700 }}>• {p.title}</span> — {p.subtitle}
                <div style={{ color: "#64748b", fontSize: 11 }}>Live: {p.live}</div>
              </div>
            ))}
          </div>
        );
        break;
      case "experience":
        output = (
          <div style={{ color: "#cbd5e1", fontSize: 12, display: "flex", flexDirection: "column", gap: 6 }}>
            {experiences.map((exp, i) => (
              <div key={i}>
                <span style={{ color: "#818cf8", fontWeight: 700 }}>{exp.role}</span> @ {exp.company} ({exp.duration})
              </div>
            ))}
          </div>
        );
        break;
      case "contact":
        output = (
          <div style={{ color: "#cbd5e1", fontSize: 12 }}>
            <p>Email: <a href={`mailto:${availability.email}`} style={{ color: "#818cf8" }}>{availability.email}</a></p>
            <p>GitHub: <a href={availability.github} target="_blank" rel="noreferrer" style={{ color: "#818cf8" }}>{availability.github}</a></p>
            <p>LinkedIn: <a href={availability.linkedin} target="_blank" rel="noreferrer" style={{ color: "#818cf8" }}>{availability.linkedin}</a></p>
          </div>
        );
        break;
      case "ai":
        output = (
          <div style={{ color: "#cbd5e1", fontSize: 12, lineHeight: 1.6 }}>
            <p style={{ color: "#c084fc", fontWeight: 700 }}>✦ AI & Modern Web Development Capabilities:</p>
            <p>• OpenAI / Gemini API integration for intelligent web workflows</p>
            <p>• Prompt engineering & structured JSON response parsing</p>
            <p>• Modern AI developer tooling and AI-assisted application features</p>
          </div>
        );
        break;
      case "clear":
        setHistory([]);
        setInput("");
        return;
      default:
        output = <div style={{ color: "#f87171", fontSize: 12 }}>Command not recognized: &apos;{cleanCmd}&apos;. Type &apos;help&apos; for commands.</div>;
    }

    setHistory((prev) => [...prev, { cmd: cleanCmd, output }]);
    setInput("");
  };

  if (!isOpen) {
    return (
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => setIsOpen(true)}
        style={{
          position: "fixed",
          bottom: 24,
          right: 24,
          zIndex: 90,
          display: "flex",
          alignItems: "center",
          gap: 8,
          padding: "10px 16px",
          borderRadius: 999,
          background: "linear-gradient(135deg, #0f172a, #1e1b4b)",
          border: "1px solid rgba(99, 102, 241, 0.4)",
          color: "#a5b4fc",
          fontSize: 12,
          fontWeight: 700,
          cursor: "pointer",
          boxShadow: "0 8px 32px rgba(0,0,0,0.6), 0 0 20px rgba(99,102,241,0.25)",
        }}
      >
        <TerminalIcon size={16} style={{ color: "#34d399" }} />
        Terminal
      </motion.button>
    );
  }

  return (
    <motion.div
      className="terminal-window"
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 40 }}
      style={{
        position: "fixed",
        bottom: "clamp(16px, 3vw, 24px)",
        right: "clamp(12px, 3vw, 24px)",
        width: "min(480px, calc(100vw - 24px))",
        height: isMinimized ? 44 : 320,
        borderRadius: 16,
        border: "1px solid rgba(99, 102, 241, 0.35)",
        background: "#050510",
        boxShadow: "0 20px 40px rgba(0,0,0,0.8), 0 0 30px rgba(99,102,241,0.2)",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        zIndex: 95,
        transition: "height 0.3s ease",
      }}
    >
      {/* Header */}
      <div style={{ padding: "10px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <div style={{ display: "flex", gap: 5 }}>
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
            <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
          </div>
          <span style={{ color: "#94a3b8", fontSize: 11, fontWeight: 700, fontFamily: "monospace" }}>guddu@portfolio:~</span>
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
          <button onClick={() => setIsMinimized(!isMinimized)} style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer" }}>
            {isMinimized ? <Maximize2 size={13} /> : <Minimize2 size={13} />}
          </button>
          <button onClick={() => setIsOpen(false)} style={{ background: "none", border: "none", color: "#64748b", cursor: "pointer" }}>
            <X size={14} />
          </button>
        </div>
      </div>

      {/* Body */}
      {!isMinimized && (
        <div style={{ flex: 1, padding: 14, overflowY: "auto", fontFamily: "monospace", display: "flex", flexDirection: "column", gap: 12 }}>
          {history.map((h, i) => (
            <div key={i}>
              <div style={{ color: "#818cf8", fontSize: 12 }}>
                <span style={{ color: "#34d399" }}>$</span> {h.cmd}
              </div>
              <div style={{ marginTop: 4 }}>{h.output}</div>
            </div>
          ))}

          {/* Form */}
          <form onSubmit={handleCommand} style={{ display: "flex", alignItems: "center", gap: 8, marginTop: "auto" }}>
            <span style={{ color: "#34d399", fontSize: 13 }}>$</span>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="type command..."
              style={{ flex: 1, background: "transparent", border: "none", outline: "none", color: "#fff", fontSize: 12, fontFamily: "monospace" }}
            />
          </form>
          <div ref={bottomRef} />
        </div>
      )}
    </motion.div>
  );
}
