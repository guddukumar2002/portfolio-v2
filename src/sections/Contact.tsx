"use client";
import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { Mail, Send, CheckCircle2, AlertCircle } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionWrapper from "@/components/SectionWrapper";
import { availability } from "@/data";

interface FormState { name: string; email: string; message: string; }
interface Errors { name?: string; email?: string; message?: string; }

const contactInfo = [
  { label: "Email", value: availability.email, href: `mailto:${availability.email}`, color: "#818cf8", icon: <Mail size={18} /> },
  { label: "LinkedIn", value: "guddu-kumar-dev21", href: availability.linkedin, color: "#60a5fa", icon: <FaLinkedin size={18} /> },
  { label: "GitHub", value: availability.githubUsername, href: availability.github, color: "#c084fc", icon: <FaGithub size={18} /> },
];

const inputStyle: React.CSSProperties = {
  width: "100%",
  padding: "14px 16px",
  borderRadius: 12,
  background: "var(--card-bg)",
  border: "1px solid var(--card-border)",
  color: "var(--text-main)",
  fontSize: 14,
  outline: "none",
  transition: "border-color 0.2s",
  fontFamily: "inherit",
};

export default function Contact() {
  const { ref, inView } = useScrollReveal();
  const [form, setForm] = useState<FormState>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const validate = (): boolean => {
    const e: Errors = {};
    if (!form.name.trim()) e.name = "Name is required";
    if (!form.email.trim()) e.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = "Please enter a valid email";
    if (form.message.trim().length < 10) e.message = "Message must be at least 10 characters";
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
    } catch {
      setStatus("error");
    }
  };

  return (
    <SectionWrapper id="contact" title="Get In Touch" subtitle="Contact">
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: 28 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="contact-grid"
      >
        {/* LEFT COLUMN: Contact Cards */}
        <div>
          {/* Availability badge */}
          <div style={{ display: "inline-flex", alignItems: "center", gap: 10, padding: "10px 16px", borderRadius: 12, border: "1px solid rgba(52,211,153,0.3)", background: "rgba(52,211,153,0.06)", marginBottom: 20 }}>
            <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#34d399", boxShadow: "0 0 10px #34d399", flexShrink: 0 }} />
            <div>
              <div style={{ color: "#6ee7b7", fontSize: 13, fontWeight: 700 }}>{availability.status}</div>
              <div style={{ color: "var(--text-muted)", fontSize: 11, marginTop: 1 }}>{availability.type} · {availability.location}</div>
            </div>
          </div>

          <h3 style={{ color: "var(--text-main)", fontWeight: 800, fontSize: "clamp(20px, 3vw, 26px)", marginBottom: 10 }}>
            Have a project or role in mind? Let&apos;s talk.
          </h3>
          <p style={{ color: "var(--text-muted)", fontSize: 14, lineHeight: 1.75, marginBottom: 28 }}>
            I am available immediately for full-time software engineering roles, freelance opportunities, or technical conversations. Send me a message and I will get back to you promptly.
          </p>

          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {contactInfo.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 14,
                  padding: "14px 18px",
                  borderRadius: 14,
                  border: "1px solid var(--card-border)",
                  background: "var(--card-bg)",
                  textDecoration: "none",
                  transition: "all 0.2s",
                }}
                onMouseEnter={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = `${item.color}50`;
                }}
                onMouseLeave={(e) => {
                  (e.currentTarget as HTMLElement).style.borderColor = "var(--card-border)";
                }}
              >
                <div style={{ width: 40, height: 40, borderRadius: 10, background: `${item.color}15`, border: `1px solid ${item.color}30`, display: "flex", alignItems: "center", justifyContent: "center", color: item.color, flexShrink: 0 }}>
                  {item.icon}
                </div>
                <div style={{ minWidth: 0 }}>
                  <div style={{ color: "var(--text-muted)", fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 2 }}>
                    {item.label}
                  </div>
                  <div style={{ color: "var(--text-main)", fontSize: 14, fontWeight: 600, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
                    {item.value}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: Contact Form */}
        <form
          onSubmit={handleSubmit}
          style={{
            padding: "32px",
            borderRadius: 20,
            border: "1px solid var(--card-border)",
            background: "var(--card-bg)",
            backdropFilter: "blur(12px)",
            display: "flex",
            flexDirection: "column",
            gap: 16,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div style={{ position: "absolute", top: 0, left: 0, right: 0, height: 2, background: "linear-gradient(90deg, #6366f1, #8b5cf6)" }} />

          <div>
            <label style={{ display: "block", color: "var(--text-main)", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Your Name</label>
            <input
              type="text"
              placeholder="e.g. Sarah Jenkins"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              onFocus={() => setFocused("name")}
              onBlur={() => setFocused(null)}
              style={{
                ...inputStyle,
                borderColor: errors.name ? "rgba(239,68,68,0.6)" : focused === "name" ? "#818cf8" : "var(--card-border)",
              }}
            />
            {errors.name && <p style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.name}</p>}
          </div>

          <div>
            <label style={{ display: "block", color: "var(--text-main)", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Your Email Address</label>
            <input
              type="email"
              placeholder="e.g. sarah@company.com"
              value={form.email}
              onChange={(e) => setForm({ ...form, email: e.target.value })}
              onFocus={() => setFocused("email")}
              onBlur={() => setFocused(null)}
              style={{
                ...inputStyle,
                borderColor: errors.email ? "rgba(239,68,68,0.6)" : focused === "email" ? "#818cf8" : "var(--card-border)",
              }}
            />
            {errors.email && <p style={{ color: "#f87171", fontSize: 12, marginTop: 4 }}>{errors.email}</p>}
          </div>

          <div>
            <label style={{ display: "block", color: "var(--text-main)", fontSize: 13, fontWeight: 600, marginBottom: 6 }}>Message</label>
            <textarea
              placeholder="Tell me about your project, role, or inquiry..."
              rows={5}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              onFocus={() => setFocused("message")}
              onBlur={() => setFocused(null)}
              style={{
                ...inputStyle,
                resize: "none",
                borderColor: errors.message ? "rgba(239,68,68,0.6)" : focused === "message" ? "#818cf8" : "var(--card-border)",
              }}
            />
            <div style={{ display: "flex", justifyContent: "space-between", marginTop: 4 }}>
              {errors.message ? <p style={{ color: "#f87171", fontSize: 12 }}>{errors.message}</p> : <span />}
              <span style={{ fontSize: 11, color: form.message.length >= 10 ? "#34d399" : "var(--text-muted)" }}>{form.message.length} chars</span>
            </div>
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            style={{
              padding: "14px",
              borderRadius: 12,
              background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
              color: "#fff",
              fontSize: 14,
              fontWeight: 700,
              border: "none",
              cursor: status === "sending" ? "not-allowed" : "pointer",
              opacity: status === "sending" ? 0.7 : 1,
              boxShadow: "0 0 24px rgba(99,102,241,0.35)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              fontFamily: "inherit",
            }}
          >
            {status === "sending" ? "Sending Message..." : <>Send Message <Send size={15} /></>}
          </button>

          {status === "success" && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#34d399", fontSize: 13, justifyContent: "center" }}>
              <CheckCircle2 size={16} /> Message sent successfully! I will reply soon.
            </div>
          )}
          {status === "error" && (
            <div style={{ display: "flex", alignItems: "center", gap: 8, color: "#f87171", fontSize: 13, justifyContent: "center" }}>
              <AlertCircle size={16} /> Direct submission failed. Please email gk13212@gmail.com directly.
            </div>
          )}
        </form>
      </motion.div>
    </SectionWrapper>
  );
}
