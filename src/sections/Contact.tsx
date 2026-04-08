"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionWrapper from "@/components/SectionWrapper";
import { availability } from "@/data";

interface FormState { name: string; email: string; message: string; }
interface Errors { name?: string; email?: string; message?: string; }

const contactInfo = [
  { label: "Email", value: "gk13212@gmail.com", href: "mailto:gk13212@gmail.com", color: "#818cf8", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="16" x="2" y="4" rx="2" /><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" /></svg> },
  { label: "LinkedIn", value: "guddu-kumar-10b7bb258", href: "https://linkedin.com/in/guddu-kumar-10b7bb258", color: "#60a5fa", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg> },
  { label: "GitHub", value: "guddukumar2002", href: "https://github.com/guddukumar2002", color: "#a78bfa", icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" /></svg> },
];

const inputStyle: React.CSSProperties = {
  width: "100%", padding: "14px 16px", borderRadius: 12,
  background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)",
  color: "#e2e8f0", fontSize: 14, outline: "none", transition: "border-color 0.2s", fontFamily: "inherit",
};

const inputFocusStyle: React.CSSProperties = {
  borderColor: "rgba(99,102,241,0.5)",
  background: "rgba(99,102,241,0.04)",
};

export default function Contact() {
  const { ref, inView } = useScrollReveal();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Required";
    if (!form.email.trim()) e.email = "Required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Invalid email";
    if (form.message.trim().length < 10) e.message = "Too short (min 10 chars)";
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { from_name: form.name, from_email: form.email, message: form.message },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!
      );
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch { setStatus("error"); }
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Contact">
      <motion.div
        ref={ref} initial={{ opacity: 0, y: 28 }} animate={inView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }}
        className="contact-grid"
      >
        {/* Left */}
        <div>
          {/* Availability badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 8, padding: "10px 16px", borderRadius: 12, border: "1px solid rgba(52,211,153,0.25)", background: "rgba(52,211,153,0.06)", marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 10px #34d399", flexShrink: 0 }} />
            <div>
              <div style={{ color: "#6ee7b7", fontSize: 12, fontWeight: 700 }}>{availability.status}</div>
              <div style={{ color: "#475569", fontSize: 11, marginTop: 1 }}>{availability.type} · {availability.location}</div>
            </div>
          </div>

          <h3 style={{ color: "#fff", fontWeight: 700, fontSize: "clamp(16px, 2.5vw, 22px)", marginBottom: 10 }}>Let&apos;s build something together</h3>
          <p style={{ color: "#64748b", fontSize: 14, lineHeight: 1.75, marginBottom: 24 }}>
            Open to full-time roles, freelance projects, or just a good conversation about tech. I respond fast.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            {contactInfo.map((item) => (
              <a key={item.label} href={item.href} target={item.href.startsWith("http") ? "_blank" : undefined} rel="noopener noreferrer"
                style={{ display: "flex", alignItems: "center", gap: 14, padding: "12px 16px", borderRadius: 14, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", textDecoration: "none", transition: "all 0.2s" }}
                onMouseEnter={(e) => { (e.currentTarget as HTMLElement).style.borderColor = `${item.color}40`; (e.currentTarget as HTMLElement).style.background = `${item.color}08`; }}
                onMouseLeave={(e) => { (e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"; (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.02)"; }}
              >
                <div style={{ width: 36, height: 36, borderRadius: 10, background: `${item.color}18`, border: `1px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ color: "#475569", fontSize: 11, fontWeight: 600, marginBottom: 2 }}>{item.label}</div>
                  <div style={{ color: "#cbd5e1", fontSize: 13, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>{item.value}</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit}
          style={{ padding: "28px", borderRadius: 20, border: "1px solid rgba(255,255,255,0.07)", background: "rgba(255,255,255,0.02)", backdropFilter: "blur(8px)", display: "flex", flexDirection: "column", gap: 14, position: "relative", overflow: "hidden" }}
        >
          <div style={{ position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)", width: "60%", height: 1, background: "linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent)" }} />
          <div>
            <input type="text" placeholder="Your name" value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused("name")} onBlur={() => setFocused(null)}
              style={{ ...inputStyle, borderColor: errors.name ? "rgba(239,68,68,0.5)" : focused === "name" ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.08)", background: focused === "name" ? "rgba(99,102,241,0.04)" : "rgba(255,255,255,0.04)" }} />
            {errors.name && <p style={{ color: "#f87171", fontSize: 12, marginTop: 6 }}>{errors.name}</p>}
          </div>
          <div>
            <input type="email" placeholder="your@email.com" value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused("email")} onBlur={() => setFocused(null)}
              style={{ ...inputStyle, borderColor: errors.email ? "rgba(239,68,68,0.5)" : focused === "email" ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.08)", background: focused === "email" ? "rgba(99,102,241,0.04)" : "rgba(255,255,255,0.04)" }} />
            {errors.email && <p style={{ color: "#f87171", fontSize: 12, marginTop: 6 }}>{errors.email}</p>}
          </div>
          <div>
            <textarea placeholder="Tell me about your project or opportunity..." rows={5} value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")} onBlur={() => setFocused(null)}
              style={{ ...inputStyle, resize: "none", borderColor: errors.message ? "rgba(239,68,68,0.5)" : focused === "message" ? "rgba(99,102,241,0.5)" : "rgba(255,255,255,0.08)", background: focused === "message" ? "rgba(99,102,241,0.04)" : "rgba(255,255,255,0.04)" }} />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 6 }}>
              {errors.message ? <p style={{ color: "#f87171", fontSize: 12 }}>{errors.message}</p> : <span />}
              <span style={{ fontSize: 11, color: form.message.length >= 10 ? "#34d399" : "#475569" }}>{form.message.length} chars</span>
            </div>
          </div>
          <button type="submit" disabled={status === "sending"}
            style={{ padding: "14px", borderRadius: 12, background: "linear-gradient(135deg, #6366f1, #8b5cf6)", color: "#fff", fontSize: 14, fontWeight: 700, border: "none", cursor: status === "sending" ? "not-allowed" : "pointer", opacity: status === "sending" ? 0.6 : 1, boxShadow: "0 0 24px rgba(99,102,241,0.3)", fontFamily: "inherit" }}
          >
            {status === "sending" ? "Sending..." : "Send Message →"}
          </button>
          {status === "success" && <p style={{ color: "#34d399", fontSize: 13, textAlign: "center" }}>✓ Message sent! I&apos;ll get back to you soon.</p>}
          {status === "error" && <p style={{ color: "#f87171", fontSize: 13, textAlign: "center" }}>Failed to send. Email me at gk13212@gmail.com</p>}
        </form>
      </motion.div>
    </SectionWrapper>
  );
}
