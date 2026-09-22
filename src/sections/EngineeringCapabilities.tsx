"use client";
import { motion } from "framer-motion";
import { Layout, Server, Layers, Sparkles, Cloud, Check } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { engineeringCapabilities } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

const iconMap: Record<string, React.ReactNode> = {
  Layout: <Layout size={22} style={{ color: "#60a5fa" }} />,
  Server: <Server size={22} style={{ color: "#34d399" }} />,
  Layers: <Layers size={22} style={{ color: "#c084fc" }} />,
  Sparkles: <Sparkles size={22} style={{ color: "#fbbf24" }} />,
  Cloud: <Cloud size={22} style={{ color: "#818cf8" }} />,
};

export default function EngineeringCapabilities() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper id="capabilities" title="Engineering Capabilities" subtitle="What I Build">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(min(280px, 100%), 1fr))", gap: 24 }}
      >
        {engineeringCapabilities.map((cap, i) => (
          <motion.div
            key={cap.title}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            whileHover={{ y: -6, borderColor: "rgba(99, 102, 241, 0.4)", boxShadow: "0 16px 40px rgba(99, 102, 241, 0.12)" }}
            transition={{ type: "spring", stiffness: 300, damping: 22 }}
            style={{
              padding: "28px",
              borderRadius: 20,
              border: "1px solid var(--card-border)",
              background: "var(--card-bg)",
              backdropFilter: "blur(12px)",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              position: "relative",
              overflow: "hidden",
            }}
          >
            {/* Top accent line */}
            <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: i % 2 === 0 ? "linear-gradient(90deg, #6366f1, #8b5cf6)" : "linear-gradient(90deg, #34d399, #60a5fa)" }} />

            <div>
              {/* Icon & Title */}
              <div style={{ display: "flex", alignItems: "center", gap: 14, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: 12, background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  {iconMap[cap.icon] || <Layers size={22} />}
                </div>
                <h3 style={{ color: "var(--text-main)", fontWeight: 700, fontSize: 17, lineHeight: 1.3 }}>
                  {cap.title}
                </h3>
              </div>

              {/* Description */}
              <p style={{ color: "var(--text-muted)", fontSize: 13, lineHeight: 1.7, marginBottom: 20 }}>
                {cap.description}
              </p>
            </div>

            {/* Tech badges */}
            <div style={{ display: "flex", flexWrap: "wrap", gap: 6, paddingTop: 16, borderTop: "1px solid rgba(255,255,255,0.05)" }}>
              {cap.tech.map((t) => (
                <span
                  key={t}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 4,
                    fontSize: 11,
                    fontWeight: 600,
                    padding: "3px 9px",
                    borderRadius: 6,
                    background: "rgba(99, 102, 241, 0.08)",
                    border: "1px solid rgba(99, 102, 241, 0.18)",
                    color: "#a5b4fc",
                  }}
                >
                  <Check size={10} style={{ color: "#34d399" }} />
                  {t}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </SectionWrapper>
  );
}
