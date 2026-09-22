"use client";
import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { ArrowRight, Code, Sparkles, Terminal, FileText, Mail, CheckCircle, Copy, Play } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { scrollToSection } from "@/components/SmoothScroll";
import { availability } from "@/data";

const ROLES = [
  "Full Stack Developer",
  "React & Next.js Engineer",
  "Node.js Backend Developer",
  "MERN Stack Specialist",
  "AI Web Application Dev",
];

const codeSnippets = {
  stack: `// Guddu_Kumar_Profile.ts
export const developer = {
  name: "Guddu Kumar",
  title: "Full Stack Developer",
  location: "Ghaziabad, India",
  experience: "2+ Years | 4 Companies",
  coreStack: ["React.js", "Next.js", "Node.js", "TypeScript"],
  databases: ["MongoDB", "PostgreSQL", "Prisma ORM"],
  cloud: ["Google Cloud (GCP)", "Vercel", "Nginx"],
  focus: "Production Apps + AI Integrations",
  status: "Available Immediately 🚀"
};`,
  backend: `// api/medical-gallery/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { cloudinary } from "@/lib/cloudinary";

export async function POST(req: Request) {
  const { userId, file, category } = await req.json();
  
  // Role-based authorization & cloud stream
  const upload = await cloudinary.uploader.upload(file);
  const document = await prisma.document.create({
    data: { userId, url: upload.secure_url, category }
  });
  
  return NextResponse.json({ success: true, document });
}`,
  ai: `// lib/ai-agent.ts
import { GoogleGenerativeAI } from "@google/genai";

export async function analyzeUserData(inputPrompt: string) {
  const ai = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);
  const model = ai.getGenerativeModel({ model: "gemini-1.5-pro" });

  const response = await model.generateContent({
    contents: [{ role: "user", parts: [{ text: inputPrompt }] }],
    generationConfig: { responseMimeType: "application/json" }
  });

  return JSON.parse(response.response.text());
}`,
};

const consoleLogs = {
  stack: [
    "🚀 [INFO] Compiling Guddu_Kumar_Profile.ts...",
    "✓ [SUCCESS] React 19 & Next.js 16 bundle initialized.",
    "✓ [SUCCESS] Core stack: React, Next.js, Node.js, TypeScript, MERN, AI APIs.",
    "✦ Candidate status: Available immediately for Full-Time & Freelance roles.",
  ],
  backend: [
    "⚡ [POST] /api/medical-gallery/route.ts endpoint hit.",
    "✓ [AUTH] NextAuth JWT session validated.",
    "✓ [CDN] Cloudinary asset pipeline stream active.",
    "✓ [DB] PostgreSQL record created via Prisma ORM.",
  ],
  ai: [
    "🤖 [AI] Invoking Gemini-1.5-Pro LLM engine...",
    "✓ [PROMPT] Context window & system instructions set.",
    "✓ [JSON] Structured response parsed successfully.",
    "✦ AI application workflow execution complete.",
  ],
};

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const roleRef = useRef<HTMLSpanElement>(null);
  const [activeTab, setActiveTab] = useState<"stack" | "backend" | "ai">("stack");
  const [copied, setCopied] = useState(false);
  const [isRunning, setIsRunning] = useState(false);
  const [showConsole, setShowConsole] = useState(true);
  const [mounted, setMounted] = useState(false);
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number; opacity: number }>>([]);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const blobX = useSpring(mouseX, { stiffness: 30, damping: 20 });
  const blobY = useSpring(mouseY, { stiffness: 30, damping: 20 });

  useEffect(() => {
    setMounted(true);
    setParticles(
      Array.from({ length: 18 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2.5 + 1,
        duration: Math.random() * 8 + 6,
        delay: Math.random() * 4,
        opacity: Math.random() * 0.4 + 0.1,
      }))
    );
  }, []);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      mouseX.set((e.clientX / window.innerWidth - 0.5) * 40);
      mouseY.set((e.clientY / window.innerHeight - 0.5) * 40);
    };
    window.addEventListener("mousemove", onMove);
    return () => window.removeEventListener("mousemove", onMove);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let roleIdx = 0, charIdx = 0, deleting = false;
    let timeout: ReturnType<typeof setTimeout>;
    const type = () => {
      const el = roleRef.current;
      if (!el) return;
      const cur = ROLES[roleIdx];
      el.textContent = deleting ? cur.slice(0, charIdx - 1) : cur.slice(0, charIdx + 1);
      if (!deleting) {
        charIdx++;
        if (charIdx === cur.length) { deleting = true; timeout = setTimeout(type, 2200); return; }
      } else {
        charIdx--;
        if (charIdx === 0) { deleting = false; roleIdx = (roleIdx + 1) % ROLES.length; }
      }
      timeout = setTimeout(type, deleting ? 32 : 62);
    };
    type();
    return () => clearTimeout(timeout);
  }, []);

  const copyCode = () => {
    navigator.clipboard.writeText(codeSnippets[activeTab]);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleRun = () => {
    setIsRunning(true);
    setShowConsole(true);
    setTimeout(() => setIsRunning(false), 600);
  };

  return (
    <section
      id="home"
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        zIndex: 1,
        maxWidth: "100vw",
        paddingTop: 80,
      }}
    >
      {/* Background Particles */}
      {mounted &&
        particles.map((p) => (
          <motion.div
            key={p.id}
            animate={{ y: [0, -30, 0], opacity: [p.opacity, p.opacity * 0.3, p.opacity] }}
            transition={{ duration: p.duration, delay: p.delay, repeat: Infinity, ease: "easeInOut" }}
            style={{
              position: "absolute",
              left: `${p.x}%`,
              top: `${p.y}%`,
              width: p.size,
              height: p.size,
              borderRadius: "50%",
              background: p.id % 3 === 0 ? "#818cf8" : p.id % 3 === 1 ? "#c084fc" : "#34d399",
              pointerEvents: "none",
              zIndex: 0,
            }}
          />
        ))}

      {/* Grid Pattern */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `linear-gradient(rgba(99,102,241,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.04) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
          pointerEvents: "none",
        }}
      />
      {/* Radial ambient background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: "radial-gradient(ellipse 90% 60% at 50% -10%, rgba(99,102,241,0.22) 0%, transparent 60%)",
          pointerEvents: "none",
        }}
      />
      <motion.div
        style={{
          x: blobX,
          y: blobY,
          position: "absolute",
          top: "15%",
          left: "-10%",
          width: "min(600px, 80vw)",
          height: "min(600px, 80vw)",
          borderRadius: "50%",
          background: "rgba(99,102,241,0.08)",
          filter: "blur(120px)",
          pointerEvents: "none",
        }}
      />

      <div className="hero-inner" style={{ position: "relative", zIndex: 2, width: "100%", gap: 48 }}>
        {/* LEFT COLUMN */}
        <div style={{ flex: "1 1 520px", minWidth: 0 }}>
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              marginBottom: 20,
              padding: "7px 14px",
              borderRadius: 999,
              border: "1px solid rgba(52,211,153,0.3)",
              background: "rgba(52,211,153,0.08)",
              color: "#6ee7b7",
              fontSize: 12,
              fontWeight: 600,
            }}
          >
            <motion.span
              animate={{ scale: [1, 1.4, 1], opacity: [1, 0.6, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ width: 7, height: 7, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 10px #34d399", flexShrink: 0 }}
            />
            Web Developer @ SEG · Open to full-time & freelance
          </motion.div>

          {/* Name & Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ fontSize: "clamp(34px, 5.5vw, 68px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1.05, color: "var(--text-main)", marginBottom: 16 }}
          >
            Hi, I&apos;m <span className="animated-gradient">Guddu Kumar</span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            style={{ display: "flex", alignItems: "center", gap: 6, marginBottom: 16, height: 36 }}
          >
            <span style={{ fontSize: "clamp(16px, 2.4vw, 24px)", fontWeight: 700, color: "#818cf8" }} ref={roleRef} />
            <motion.span
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity }}
              style={{ width: 2, height: 24, background: "#818cf8", borderRadius: 2, display: "inline-block" }}
            />
          </motion.div>

          {/* Core supporting text */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            style={{ color: "var(--text-muted)", fontSize: "clamp(15px, 1.6vw, 17px)", lineHeight: 1.7, maxWidth: 540, marginBottom: 24 }}
          >
            Full Stack Developer building scalable web applications with <strong style={{ color: "var(--text-main)" }}>React, Next.js, Node.js, TypeScript & AI Integrations</strong>. 
            Delivering production-ready systems, REST APIs, and accessible user interfaces.
          </motion.p>

          {/* Key Metrics Quick Strip */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 12, marginBottom: 32 }}
          >
            {[
              { stat: "4", label: "Companies" },
              { stat: "5+", label: "Production Apps" },
              { stat: "100+", label: "Registrations" },
              { stat: "2+ Yrs", label: "Experience" },
            ].map((m) => (
              <div
                key={m.label}
                style={{
                  padding: "6px 12px",
                  borderRadius: 8,
                  background: "rgba(99, 102, 241, 0.08)",
                  border: "1px solid rgba(99, 102, 241, 0.2)",
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                <span style={{ color: "#34d399", fontWeight: 800, fontSize: 13 }}>{m.stat}</span>
                <span style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 600 }}>{m.label}</span>
              </div>
            ))}
          </motion.div>

          {/* Primary & Secondary CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            style={{ display: "flex", flexWrap: "wrap", gap: 14, marginBottom: 36 }}
          >
            <motion.a
              href="#projects"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("projects");
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 26px",
                borderRadius: 12,
                background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
                color: "#fff",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                boxShadow: "0 0 30px rgba(99,102,241,0.4)",
              }}
            >
              View Projects
              <ArrowRight size={16} />
            </motion.a>

            <motion.a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 24px",
                borderRadius: 12,
                border: "1px solid var(--card-border)",
                background: "var(--card-bg)",
                color: "var(--text-main)",
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
              }}
            >
              Let&apos;s Connect
            </motion.a>

            <motion.button
              onClick={onOpenResume}
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                padding: "13px 22px",
                borderRadius: 12,
                border: "1px solid rgba(99,102,241,0.3)",
                background: "rgba(99,102,241,0.1)",
                color: "var(--text-main)",
                fontWeight: 700,
                fontSize: 14,
                cursor: "pointer",
              }}
            >
              <FileText size={16} />
              Resume
            </motion.button>
          </motion.div>

          {/* Social Profiles */}
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.5 }} style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <span style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>Connect</span>
            <div style={{ width: 24, height: 1, background: "var(--card-border)" }} />

            <a
              href={availability.github}
              target="_blank"
              rel="noopener noreferrer"
              title="GitHub Profile"
              style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid var(--card-border)", background: "var(--card-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-main)", textDecoration: "none" }}
            >
              <FaGithub size={18} />
            </a>
            <a
              href={availability.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              title="LinkedIn Profile"
              style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid var(--card-border)", background: "var(--card-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-main)", textDecoration: "none" }}
            >
              <FaLinkedin size={18} />
            </a>
            <a
              href={`mailto:${availability.email}`}
              title="Email Guddu"
              style={{ width: 38, height: 38, borderRadius: 10, border: "1px solid var(--card-border)", background: "var(--card-bg)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--text-main)", textDecoration: "none" }}
            >
              <Mail size={18} />
            </a>
          </motion.div>
        </div>

        {/* RIGHT COLUMN — 3D Interactive Code & Console Deck */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          style={{ flex: "1 1 480px", maxWidth: 540, minWidth: 320 }}
        >
          <div
            className="code-editor-deck"
            style={{
              borderRadius: 20,
              border: "1px solid rgba(99, 102, 241, 0.35)",
              background: "#080814",
              boxShadow: "0 24px 60px rgba(0,0,0,0.8), 0 0 40px rgba(99,102,241,0.2)",
              overflow: "hidden",
            }}
          >
            {/* Editor Window Header Bar */}
            <div style={{ padding: "12px 16px", background: "rgba(255,255,255,0.03)", borderBottom: "1px solid rgba(255,255,255,0.06)", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
              {/* Window controls & Tabs */}
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <div style={{ display: "flex", gap: 6 }}>
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#ef4444" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#f59e0b" }} />
                  <div style={{ width: 10, height: 10, borderRadius: "50%", background: "#10b981" }} />
                </div>
                {/* Tabs */}
                <div style={{ display: "flex", gap: 4 }}>
                  {(
                    [
                      { id: "stack", label: "stack.config.ts", icon: <Code size={12} /> },
                      { id: "backend", label: "route.ts", icon: <Terminal size={12} /> },
                      { id: "ai", label: "ai-agent.ts", icon: <Sparkles size={12} /> },
                    ] as const
                  ).map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 5,
                        padding: "4px 10px",
                        borderRadius: 6,
                        background: activeTab === tab.id ? "rgba(99,102,241,0.18)" : "transparent",
                        border: activeTab === tab.id ? "1px solid rgba(99,102,241,0.3)" : "1px solid transparent",
                        color: activeTab === tab.id ? "#a5b4fc" : "#64748b",
                        fontSize: 11,
                        fontWeight: 600,
                        cursor: "pointer",
                        fontFamily: "monospace",
                      }}
                    >
                      {tab.icon}
                      {tab.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Action Buttons: Run Code & Copy */}
              <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                <button
                  onClick={handleRun}
                  title="Run Code Snippet"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 4,
                    padding: "3px 8px",
                    borderRadius: 6,
                    background: "rgba(52, 211, 153, 0.15)",
                    border: "1px solid rgba(52, 211, 153, 0.3)",
                    color: "#6ee7b7",
                    fontSize: 10,
                    fontWeight: 700,
                    cursor: "pointer",
                  }}
                >
                  <Play size={10} /> Run
                </button>

                <button
                  onClick={copyCode}
                  title="Copy Code"
                  style={{ background: "none", border: "none", color: copied ? "#34d399" : "#64748b", cursor: "pointer", display: "flex", alignItems: "center", gap: 4, fontSize: 11 }}
                >
                  {copied ? <CheckCircle size={14} /> : <Copy size={14} />}
                </button>
              </div>
            </div>

            {/* Editor Code Snippet Body */}
            <div style={{ padding: "20px", background: "#04040a", overflowX: "auto", fontFamily: "monospace", fontSize: 12, lineHeight: 1.7, color: "#cbd5e1" }}>
              <pre style={{ margin: 0, whiteSpace: "pre-wrap", wordBreak: "break-word" }}>
                {codeSnippets[activeTab]}
              </pre>
            </div>

            {/* Interactive Console Terminal Output Drawer */}
            {showConsole && (
              <div style={{ padding: "12px 16px", background: "rgba(0,0,0,0.85)", borderTop: "1px solid rgba(99,102,241,0.2)", fontFamily: "monospace", fontSize: 11 }}>
                <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 6, color: "#818cf8" }}>
                  <span style={{ fontWeight: 700, display: "flex", alignItems: "center", gap: 4 }}>
                    <Terminal size={12} /> Execution Output ({activeTab}.ts)
                  </span>
                  {isRunning && <span style={{ color: "#34d399" }}>Running...</span>}
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                  {consoleLogs[activeTab].map((log, idx) => (
                    <div key={idx} style={{ color: log.includes("SUCCESS") ? "#34d399" : log.includes("Candidate") ? "#a5b4fc" : "#94a3b8" }}>
                      {log}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
