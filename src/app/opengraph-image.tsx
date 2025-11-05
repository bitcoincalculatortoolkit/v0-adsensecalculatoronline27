import { ImageResponse } from "next/og"

export const runtime = "edge"
export const alt = "AdsenseCalculator.online - Professional AdSense Revenue Calculator"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        background: "linear-gradient(135deg, #0f172a 0%, #1e293b 100%)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "80px",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          marginBottom: "40px",
        }}
      >
        <div
          style={{
            width: "80px",
            height: "80px",
            background: "linear-gradient(135deg, #0ea5e9 0%, #06b6d4 100%)",
            borderRadius: "20px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: "24px",
          }}
        >
          <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
            <rect x="3" y="3" width="18" height="18" rx="2" />
            <line x1="7" y1="8" x2="17" y2="8" />
            <line x1="7" y1="12" x2="17" y2="12" />
            <line x1="7" y1="16" x2="13" y2="16" />
            <circle cx="16" cy="16" r="1.5" fill="white" />
          </svg>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
          }}
        >
          <h1
            style={{
              fontSize: "64px",
              fontWeight: "bold",
              color: "white",
              margin: 0,
              lineHeight: 1,
            }}
          >
            AdsenseCalculator.online
          </h1>
          <p
            style={{
              fontSize: "28px",
              color: "#94a3b8",
              margin: 0,
              marginTop: "12px",
            }}
          >
            Professional AdSense Revenue Calculator
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          gap: "32px",
          marginTop: "40px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "#0ea5e9",
              borderRadius: "50%",
            }}
          />
          <span style={{ color: "#cbd5e1", fontSize: "24px" }}>Real-time Calculations</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "#06b6d4",
              borderRadius: "50%",
            }}
          />
          <span style={{ color: "#cbd5e1", fontSize: "24px" }}>Advanced Analytics</span>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <div
            style={{
              width: "12px",
              height: "12px",
              background: "#8b5cf6",
              borderRadius: "50%",
            }}
          />
          <span style={{ color: "#cbd5e1", fontSize: "24px" }}>SEO Optimized</span>
        </div>
      </div>
    </div>,
    {
      ...size,
    },
  )
}
