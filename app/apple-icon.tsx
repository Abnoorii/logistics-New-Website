import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#05070d",
        }}
      >
        <div
          style={{
            width: 128,
            height: 128,
            background: "#f9ab27",
            borderRadius: "28px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#05070d",
            fontSize: 84,
            fontWeight: 700,
            fontFamily: "sans-serif",
          }}
        >
          L
        </div>
      </div>
    ),
    { ...size }
  );
}
