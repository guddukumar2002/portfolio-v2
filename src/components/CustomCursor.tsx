"use client";
import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [mounted, setMounted] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicking, setClicking] = useState(false);
  const [hovering, setHovering] = useState(false);

  const mouseX = useMotionValue(-400);
  const mouseY = useMotionValue(-400);

  // Spotlight follows mouse — very smooth
  const spotX = useSpring(mouseX, { stiffness: 80, damping: 20 });
  const spotY = useSpring(mouseY, { stiffness: 80, damping: 20 });

  // Dot — instant
  const dotX = useSpring(mouseX, { stiffness: 1000, damping: 50 });
  const dotY = useSpring(mouseY, { stiffness: 1000, damping: 50 });

  // Ring — lags behind
  const ringX = useSpring(mouseX, { stiffness: 180, damping: 22 });
  const ringY = useSpring(mouseY, { stiffness: 180, damping: 22 });

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(max-width: 1024px)").matches) return;

    setMounted(true);

    const onMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
      setVisible(true);
    };

    const onLeave = () => setVisible(false);
    const onEnter = () => setVisible(true);
    const onDown = () => setClicking(true);
    const onUp = () => setClicking(false);
    const onOver = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [role='button']")) setHovering(true);
    };
    const onOut = (e: MouseEvent) => {
      if ((e.target as HTMLElement).closest("a, button, [role='button']")) setHovering(false);
    };

    document.addEventListener("mousemove", onMove);
    document.addEventListener("mouseleave", onLeave);
    document.addEventListener("mouseenter", onEnter);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("mouseup", onUp);
    document.addEventListener("mouseover", onOver);
    document.addEventListener("mouseout", onOut);
    document.body.classList.add("custom-cursor-active");

    return () => {
      document.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseleave", onLeave);
      document.removeEventListener("mouseenter", onEnter);
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("mouseup", onUp);
      document.removeEventListener("mouseover", onOver);
      document.removeEventListener("mouseout", onOut);
      document.body.classList.remove("custom-cursor-active");
    };
  }, [mouseX, mouseY]);

  if (!mounted) return null;

  return (
    <>
      {/* ── SPOTLIGHT GLOW ── follows mouse slowly, lights up the page */}
      <motion.div
        style={{
          x: spotX,
          y: spotY,
          position: "fixed",
          top: -300,
          left: -300,
          width: 600,
          height: 600,
          borderRadius: "50%",
          background: hovering
            ? "radial-gradient(circle, rgba(192,132,252,0.07) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(99,102,241,0.06) 0%, transparent 70%)",
          pointerEvents: "none",
          zIndex: 1,
          opacity: visible ? 1 : 0,
          transition: "opacity 0.3s, background 0.3s",
        }}
      />

      {/* ── OUTER RING ── lags behind cursor */}
      <motion.div
        style={{
          x: ringX,
          y: ringY,
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9998,
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 20 : hovering ? 52 : 36,
            height: clicking ? 20 : hovering ? 52 : 36,
            top: clicking ? -10 : hovering ? -26 : -18,
            left: clicking ? -10 : hovering ? -26 : -18,
            borderColor: hovering ? "rgba(192,132,252,0.8)" : "rgba(129,140,248,0.45)",
            backgroundColor: hovering ? "rgba(192,132,252,0.06)" : "transparent",
          }}
          transition={{ type: "spring", stiffness: 300, damping: 25 }}
          style={{
            position: "absolute",
            borderRadius: "50%",
            border: "1.5px solid rgba(129,140,248,0.45)",
          }}
        />
      </motion.div>

      {/* ── CENTER DOT ── */}
      <motion.div
        style={{
          x: dotX,
          y: dotY,
          position: "fixed",
          pointerEvents: "none",
          zIndex: 9999,
          opacity: visible ? 1 : 0,
        }}
      >
        <motion.div
          animate={{
            width: clicking ? 4 : hovering ? 0 : 8,
            height: clicking ? 4 : hovering ? 0 : 8,
            top: clicking ? -2 : hovering ? 0 : -4,
            left: clicking ? -2 : hovering ? 0 : -4,
            opacity: hovering ? 0 : 1,
          }}
          transition={{ type: "spring", stiffness: 600, damping: 30 }}
          style={{
            position: "absolute",
            borderRadius: "50%",
            background: "linear-gradient(135deg, #a5b4fc, #c084fc)",
            boxShadow: "0 0 8px rgba(165,180,252,0.9)",
          }}
        />
      </motion.div>

      {/* ── HOVER TEXT INDICATOR ── shows "click" on hoverable elements */}
      {hovering && (
        <motion.div
          style={{
            x: dotX,
            y: dotY,
            position: "fixed",
            top: -10,
            left: -10,
            pointerEvents: "none",
            zIndex: 9999,
          }}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          transition={{ duration: 0.15 }}
        >
          <div style={{
            width: 20, height: 20,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #818cf8, #c084fc)",
            boxShadow: "0 0 20px rgba(129,140,248,0.8), 0 0 40px rgba(129,140,248,0.3)",
          }} />
        </motion.div>
      )}
    </>
  );
}
