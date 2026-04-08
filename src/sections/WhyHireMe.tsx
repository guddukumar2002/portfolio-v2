"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { whyHireMe } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

const cardColors = [
  { border: "rgba(99,102,241,0.2)", bg: "rgba(99,102,241,0.04)", glow: "rgba(99,102,241,0.08)", accent: "#818cf8" },
  { border: "rgba(16,185,129,0.2)", bg: "rgba(16,185,129,0.04)", glow: "rgba(16,185,129,0.08)", accent: "#34d399" },
  { border: "rgba(245,158,11,0.2)", bg: "rgba(245,158,11,0.04)", glow: "rgba(245,158,11,0.08)", accent: "#fbbf24" },
  { border: "rgba(139,92,246,0.2)", bg: "rgba(139,92,246,0.04)", glow: "rgba(139,92,246,0.08)", accent: "#a78bfa" },
];

export default function WhyHireMe() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper title="Why Work With Me" subtitle="Value">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        className="why-grid"
      >
        {whyHireMe.map((item, i) => {
          const c = cardColors[i];
          return (
            <motion.div
              key={item.title}
              variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
              whileHover={{ y: -8, boxShadow: `0 20px 60px ${c.glow}`, borderColor: c.border.replace("0.2", "0.5") }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              style={{
                padding: "28px 24px", borderRadius: 20,
                border: `1px solid ${c.border}`,
                background: c.bg, backdropFilter: "blur(8px)",
                boxShadow: `0 0 40px ${c.glow}`,
                position: "relative", overflow: "hidden", cursor: "default",
              }}
            >
              <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: `linear-gradient(90deg, transparent, ${c.accent}, transparent)` }} />
              <div className="shimmer" style={{ position: "absolute", inset: 0, pointerEvents: "none", borderRadius: 20 }} />

              {/* Icon + stat badge */}
              <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", marginBottom: 16 }}>
                <div style={{ fontSize: 28 }}>{item.icon}</div>
                <span style={{ fontSize: 10, fontWeight: 700, padding: "3px 10px", borderRadius: 20, background: `${c.accent}20`, border: `1px solid ${c.accent}40`, color: c.accent, letterSpacing: "0.05em" }}>
                  {item.stat}
                </span>
              </div>

              <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 16, marginBottom: 10 }}>
                {item.title}
              </h3>
              <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.65 }}>{item.desc}</p>
            </motion.div>
          );
        })}
      </motion.div>
    </SectionWrapper>
  );
}
