import { ImageResponse } from "next/og";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";
export const alt = "Logistics.af — Every leg of the journey";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background:
            "radial-gradient(circle at 20% 10%, rgba(249,171,39,0.30), transparent 55%), radial-gradient(circle at 90% 90%, rgba(30,194,173,0.18), transparent 60%), #05070d",
          color: "#e6ebf3",
          fontFamily: "sans-serif",
        }}
      >
        {/* Brand lockup — mark + wordmark */}
        <div style={{ display: "flex", alignItems: "center", gap: 22 }}>
          <svg viewBox="0 0 103 70" width="72" height="49" style={{ display: "block" }}>
            <polygon points="0,70 20,70 33.103,34 13.103,34" fill="#FFFFFF" />
            <polygon points="34.687,53 54.687,53 67.79,17 47.79,17" fill="#FFFFFF" />
            <polygon points="69.374,36 89.374,36 102.477,0 82.477,0" fill="#DA262E" />
          </svg>
          <div style={{ fontSize: 44, fontWeight: 600, letterSpacing: "-0.02em" }}>
            logistics.af
          </div>
        </div>

        <div
          style={{
            fontSize: 92,
            fontWeight: 600,
            letterSpacing: "-0.03em",
            lineHeight: 1.0,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <div style={{ display: "flex" }}>Every leg</div>
          <div style={{ display: "flex", gap: 24 }}>
            <span>of the</span>
            <span style={{ color: "#DA262E" }}>journey.</span>
          </div>
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#9ba7bb",
            display: "flex",
            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <span>Air · Ocean · Road · Customs · 3PL</span>
          <span style={{ color: "#e6ebf3" }}>logistics.af</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
