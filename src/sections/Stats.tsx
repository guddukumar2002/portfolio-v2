"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { useMediaQuery } from "@/hooks/useMediaQuery";
import { stats } from "@/data";

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setStarted(true); }, { threshold: 0.5 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1800;
    const startTime = performance.now();
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      setCount(Math.round((1 - Math.pow(1 - progress, 3)) * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [started, target]);

  return <span ref={ref}>{count}{suffix}</span>;
}

export default function Stats() {
  const { ref, inView } = useScrollReveal();
  const isMobile = useMediaQuery("(max-width: 640px)");

  return (
    <section style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)" }} />
      <motion.div
        ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
        style={{
          maxWidth: 1100, margin: "0 auto", padding: isMobile ? "0 20px" : "0 32px",
          display: "grid",
          gridTemplateColumns: isMobile ? "repeat(2, 1fr)" : "repeat(4, 1fr)",
        }}
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
            style={{
              padding: isMobile ? "32px 16px" : "48px 24px",
              textAlign: "center", position: "relative",
              borderRight: isMobile
                ? (i % 2 === 0 ? "1px solid rgba(255,255,255,0.05)" : "none")
                : (i < stats.length - 1 ? "1px solid rgba(255,255,255,0.05)" : "none"),
              borderBottom: isMobile && i < 2 ? "1px solid rgba(255,255,255,0.05)" : "none",
            }}
          >
            <div style={{ fontSize: isMobile ? "clamp(28px, 8vw, 40px)" : "clamp(36px, 4vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8, background: "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ color: "#64748b", fontSize: isMobile ? 12 : 13, fontWeight: 600 }}>{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
