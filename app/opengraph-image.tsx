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
            "radial-gradient(circle at 20% 10%, rgba(249,171,39,0.35), transparent 55%), radial-gradient(circle at 90% 90%, rgba(30,194,173,0.20), transparent 60%), #05070d",
          color: "#e6ebf3",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <div
            style={{
              width: 60,
              height: 60,
              background: "#f9ab27",
              borderRadius: 14,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#05070d",
              fontSize: 36,
              fontWeight: 700,
            }}
          >
            L
          </div>
          <div style={{ fontSize: 34, fontWeight: 600, letterSpacing: "-0.02em" }}>
            Logistics.af
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
            <span style={{ color: "#f9ab27" }}>journey.</span>
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
