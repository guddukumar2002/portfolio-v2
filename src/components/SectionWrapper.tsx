"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

interface Props {
  id?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  align?: "left" | "center";
}

export default function SectionWrapper({ id, children, title, subtitle, align = "center" }: Props) {
  const { ref, inView } = useScrollReveal();

  return (
    <section id={id} className="section-pad" style={{ position: "relative", zIndex: 1 }}>
      <div className="section-inner">
        {(title || subtitle) && (
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
            style={{ marginBottom: 48, textAlign: align === "center" ? "center" : "left" }}
          >
            {subtitle && (
              <div style={{ display: "inline-flex", alignItems: "center", gap: 8, marginBottom: 14 }}>
                <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, transparent, #6366f1)" }} />
                <span style={{ fontSize: 11, fontWeight: 700, letterSpacing: "0.18em", textTransform: "uppercase", color: "#818cf8" }}>{subtitle}</span>
                <div style={{ width: 24, height: 1, background: "linear-gradient(90deg, #6366f1, transparent)" }} />
              </div>
            )}
            {title && (
              <h2 style={{ fontSize: "clamp(24px, 4vw, 42px)", fontWeight: 800, color: "#ffffff", letterSpacing: "-0.02em", lineHeight: 1.1 }}>
                {title.split(" ").map((word, i) => (
                  <motion.span
                    key={i}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.1 + i * 0.08 }}
                    style={{ display: "inline-block", marginRight: "0.25em" }}
                  >
                    {word}
                  </motion.span>
                ))}
              </h2>
            )}
          </motion.div>
        )}
        {children}
      </div>
    </section>
  );
}
