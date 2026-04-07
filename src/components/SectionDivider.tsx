"use client";
import { motion } from "framer-motion";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export default function SectionDivider() {
  const { ref, inView } = useScrollReveal();
  return (
    <motion.div
      ref={ref}
      initial={{ scaleX: 0, opacity: 0 }}
      animate={inView ? { scaleX: 1, opacity: 1 } : {}}
      transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
      style={{
        height: 1,
        background: "linear-gradient(90deg, transparent 0%, rgba(99,102,241,0.5) 30%, rgba(192,132,252,0.5) 70%, transparent 100%)",
        transformOrigin: "center",
        margin: "0 auto",
        maxWidth: 800,
        position: "relative",
        zIndex: 1,
      }}
    />
  );
}
