import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";
export const alt = `${site.name} — Sadashivpet, Telangana`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background:
            "radial-gradient(ellipse at 50% 70%, rgba(160,122,58,0.35), transparent 55%), linear-gradient(180deg, #14110d 0%, #0a0805 100%)",
          color: "#f3ede2",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 22, letterSpacing: 6, color: "rgba(243,237,226,0.7)" }}>
          SADASHIVPET · TELANGANA
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              fontSize: 180,
              fontStyle: "italic",
              lineHeight: 0.95,
              letterSpacing: -3,
              backgroundImage: "linear-gradient(180deg, #f3e2b8 0%, #c19a52 60%, #7d5a2e 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Burle
          </div>
          <div
            style={{
              fontSize: 180,
              fontStyle: "italic",
              lineHeight: 0.95,
              letterSpacing: -3,
              backgroundImage: "linear-gradient(180deg, #f3e2b8 0%, #c19a52 60%, #7d5a2e 100%)",
              backgroundClip: "text",
              color: "transparent",
            }}
          >
            Convention
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            fontSize: 24,
            color: "rgba(243,237,226,0.8)",
          }}
        >
          <div style={{ maxWidth: 700, lineHeight: 1.3 }}>
            A function hall built for a thousand guests, and one unforgettable evening.
          </div>
          <div style={{ display: "flex", letterSpacing: 4, fontSize: 20, color: "#c19a52" }}>1000+ GUESTS</div>
        </div>
      </div>
    ),
    { ...size },
  );
}
