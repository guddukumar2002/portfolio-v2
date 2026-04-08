import { ImageResponse } from "next/og";

export const runtime = "edge";

export function GET() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#030308",
          fontFamily: "sans-serif",
          position: "relative",
        }}
      >
        {/* Background glow top */}
        <div
          style={{
            position: "absolute",
            top: -100,
            left: "50%",
            transform: "translateX(-50%)",
            width: 800,
            height: 400,
            borderRadius: "50%",
            background: "rgba(99,102,241,0.25)",
            filter: "blur(120px)",
          }}
        />
        {/* Background glow bottom right */}
        <div
          style={{
            position: "absolute",
            bottom: -80,
            right: 100,
            width: 400,
            height: 300,
            borderRadius: "50%",
            background: "rgba(192,132,252,0.15)",
            filter: "blur(100px)",
          }}
        />

        {/* Avatar */}
        <div
          style={{
            width: 100,
            height: 100,
            borderRadius: "50%",
            background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 32,
            fontSize: 36,
            fontWeight: 900,
            color: "#fff",
            border: "3px solid rgba(255,255,255,0.15)",
          }}
        >
          GK
        </div>

        {/* Name */}
        <div
          style={{
            fontSize: 64,
            fontWeight: 900,
            color: "#ffffff",
            letterSpacing: "-2px",
            marginBottom: 16,
          }}
        >
          Guddu Kumar
        </div>

        {/* Role */}
        <div
          style={{
            fontSize: 28,
            fontWeight: 600,
            color: "#818cf8",
            marginBottom: 32,
          }}
        >
          Full Stack Developer
        </div>

        {/* Tags */}
        <div style={{ display: "flex", gap: 12 }}>
          {["React", "Next.js", "Node.js", "MongoDB"].map((tag) => (
            <div
              key={tag}
              style={{
                padding: "8px 20px",
                borderRadius: 8,
                background: "rgba(99,102,241,0.15)",
                border: "1px solid rgba(99,102,241,0.3)",
                color: "#a5b4fc",
                fontSize: 18,
                fontWeight: 600,
              }}
            >
              {tag}
            </div>
          ))}
        </div>

        {/* URL */}
        <div
          style={{
            position: "absolute",
            bottom: 40,
            color: "#334155",
            fontSize: 16,
            fontWeight: 600,
          }}
        >
          guddu-kumar.vercel.app
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}
