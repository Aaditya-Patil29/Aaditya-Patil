import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          background: "#0d1117",
          color: "#f0f6fc",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 64
        }}
      >
        <div style={{ fontSize: 54, fontWeight: 700, letterSpacing: -1 }}>
          Aaditya Patil
        </div>
        <div style={{ marginTop: 18, fontSize: 30, color: "#c9d1d9" }}>
          DevOps Engineer · Full Stack Developer
        </div>
        <div style={{ marginTop: 28, fontSize: 22, color: "#8b949e" }}>
          GitHub-style portfolio inspired by hitesh.ai
        </div>
        <div
          style={{
            marginTop: 48,
            display: "flex",
            gap: 12,
            alignItems: "center"
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#58a6ff"
            }}
          />
          <div style={{ fontSize: 20, color: "#c9d1d9" }}>
            github.com/Aaditya-Patil29
          </div>
        </div>
      </div>
    ),
    size
  );
}

