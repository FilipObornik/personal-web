import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 180,
          height: 180,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "white",
          position: "relative",
        }}
      >
        <span
          style={{
            fontFamily: "system-ui, -apple-system, sans-serif",
            fontWeight: 700,
            fontSize: 90,
            color: "#05121F",
          }}
        >
          FO
        </span>
        <div
          style={{
            position: "absolute",
            bottom: 38,
            right: 22,
            width: 24,
            height: 24,
            borderRadius: "50%",
            background: "#E88F31",
          }}
        />
      </div>
    ),
    { ...size }
  );
}
