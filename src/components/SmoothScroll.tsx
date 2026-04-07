"use client";

export function scrollToSection(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  const top = el.getBoundingClientRect().top + window.scrollY - 64;
  window.scrollTo({ top, behavior: "smooth" });
}

export default function SmoothScroll({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
