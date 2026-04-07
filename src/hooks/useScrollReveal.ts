"use client";
import { useInView } from "react-intersection-observer";

export function useScrollReveal(threshold = 0.12) {
  const { ref, inView } = useInView({ threshold, triggerOnce: true, rootMargin: "0px 0px -60px 0px" });
  return { ref, inView };
}
