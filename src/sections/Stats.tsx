"use client";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";
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

  return (
    <section style={{ position: "relative", zIndex: 1, borderTop: "1px solid rgba(255,255,255,0.06)", borderBottom: "1px solid rgba(255,255,255,0.06)", background: "rgba(255,255,255,0.015)", overflow: "hidden" }}>
      <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.6), transparent)" }} />
      <motion.div
        ref={ref} initial={{ opacity: 0 }} animate={inView ? { opacity: 1 } : {}} transition={{ duration: 0.6 }}
        className="stats-grid"
      >
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: i * 0.1 }}
            className="stats-item"
            style={{ textAlign: "center", position: "relative" }}
          >
            <div style={{ fontSize: "clamp(28px, 5vw, 52px)", fontWeight: 900, letterSpacing: "-0.03em", lineHeight: 1, marginBottom: 8, background: i === 2 ? "linear-gradient(135deg, #2dd4bf, #60a5fa)" : "linear-gradient(135deg, #818cf8, #c084fc)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", backgroundClip: "text" }}>
              <CountUp target={s.value} suffix={s.suffix} />
            </div>
            <div style={{ color: "#64748b", fontSize: 13, fontWeight: 600 }}>{s.label}</div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
