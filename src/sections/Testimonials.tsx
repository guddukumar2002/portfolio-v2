"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { testimonials as process } from "@/data";
import SectionWrapper from "@/components/SectionWrapper";

export default function Testimonials() {
  const { ref, inView } = useScrollReveal();

  return (
    <SectionWrapper title="How I Work" subtitle="Process">
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{ visible: { transition: { staggerChildren: 0.12 } } }}
        style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(min(260px, 100%), 1fr))", gap: 20 }}
      >
        {process.map((item, i) => (
          <motion.div
            key={item.step}
            variants={{ hidden: { opacity: 0, y: 24 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
            whileHover={{ y: -6 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
              padding: "28px 24px", borderRadius: 20,
              border: `1px solid ${item.color}25`,
              background: `${item.color}06`,
              backdropFilter: "blur(8px)",
              position: "relative", overflow: "hidden",
            }}
          >
            {/* Top glow */}
            <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: `linear-gradient(90deg, transparent, ${item.color}80, transparent)` }} />

            {/* Step number */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", marginBottom: 20 }}>
              <span style={{ fontSize: 11, fontFamily: "monospace", fontWeight: 700, color: item.color, opacity: 0.6, letterSpacing: "0.1em" }}>
                STEP {item.step}
              </span>
              <span style={{ fontSize: 24 }}>{item.icon}</span>
            </div>

            {/* Connector line — not on last */}
            {i < process.length - 1 && (
              <div style={{ position: "absolute", top: "50%", right: -10, width: 20, height: 1, background: `linear-gradient(90deg, ${item.color}40, transparent)`, display: "none" }} />
            )}

            <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 17, marginBottom: 10 }}>
              {item.title}
            </h3>
            <p style={{ color: "#64748b", fontSize: 13, lineHeight: 1.7 }}>{item.desc}</p>
          </motion.div>
        ))}
      </motion.div>

      {/* Bottom CTA */}
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.5, delay: 0.6 }}
        style={{ marginTop: 40, textAlign: "center", padding: "28px", borderRadius: 20, border: "1px solid rgba(99,102,241,0.15)", background: "rgba(99,102,241,0.04)" }}
      >
        <p style={{ color: "#64748b", fontSize: 14, marginBottom: 4 }}>
          Ready to build something together?
        </p>
        <p style={{ color: "#a5b4fc", fontSize: 15, fontWeight: 600 }}>
          I&apos;m available for full-time roles & freelance projects — let&apos;s talk.
        </p>
      </motion.div>
    </SectionWrapper>
  );
}
