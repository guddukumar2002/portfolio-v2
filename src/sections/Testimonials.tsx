"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { testimonials } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

export default function Testimonials() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper title="Testimonials" subtitle="Feedback">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(300px, 100%), 1fr))",
          gap: 20,
        }}
      >
        {testimonials.map((t) => (
          <motion.div
            key={t.name}
            variants={{
              hidden: { opacity: 0, y: 24 },
              visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
            }}
            whileHover={{ y: -6, borderColor: "rgba(99,102,241,0.25)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              display: "flex",
              flexDirection: "column",
              padding: "28px",
              borderRadius: 20,
              border: "1px solid rgba(255,255,255,0.07)",
              background: "rgba(255,255,255,0.02)",
              backdropFilter: "blur(8px)",
              boxShadow: "inset 0 1px 0 rgba(255,255,255,0.04)",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Quote mark */}
            <div
              style={{
                position: "absolute",
                top: 16,
                right: 20,
                fontSize: 64,
                lineHeight: 1,
                color: "rgba(99,102,241,0.12)",
                fontFamily: "Georgia, serif",
                fontWeight: 900,
                userSelect: "none",
              }}
            >
              &ldquo;
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: 3, marginBottom: 16 }}>
              {Array.from({ length: 5 }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#6366f1">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>

            <p style={{ color: "#94a3b8", fontSize: 14, lineHeight: 1.75, flex: 1, marginBottom: 24, fontStyle: "italic" }}>
              &ldquo;{t.text}&rdquo;
            </p>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                  paddingTop: 20,
                  borderTop: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: "rgba(99,102,241,0.15)",
                    border: "1px solid rgba(99,102,241,0.3)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "#a5b4fc",
                    fontSize: 12,
                    fontWeight: 800,
                    letterSpacing: "0.05em",
                    boxShadow: "0 0 16px rgba(99,102,241,0.2)",
                  }}
                >
                  {t.avatar}
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ color: "#e2e8f0", fontSize: 14, fontWeight: 700 }}>{t.name}</div>
                  <div style={{ color: "#475569", fontSize: 12, marginTop: 2 }}>{t.role}</div>
                </div>
                <a
                  href={t.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  title="View LinkedIn"
                  style={{ color: "#475569", display: "flex", alignItems: "center", flexShrink: 0, transition: "color 0.2s" }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#60a5fa")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#475569")}
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </a>
              </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
