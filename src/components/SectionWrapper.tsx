"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";

interface Props {
  id?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionWrapper({ id, children, title, subtitle, align = "center" }: Props) {
  const { ref, inView } = useScrollReveal();
  const isMobile = useMediaQuery("(max-width: 768px)");

  return (
    <section id={id} style={{ position: "relative", padding: isMobile ? "64px 0" : "96px 0", zIndex: 1 }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px" }}>
        {(title || subtitle) && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ marginBottom: isMobile ? 40 : 64, textAlign: align === "center" ? "center" : "left" }}
          >
            {subtitle && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, transparent, #6366f1)" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#818cf8" }}>{subtitle}</span>
                <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
              </div>
            )}
            {title && (
              <h2 style={{ fontSize: isMobile ? "clamp(24px, 7vw, 32px)" : "clamp(28px, 4vw, 42px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                {title}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
