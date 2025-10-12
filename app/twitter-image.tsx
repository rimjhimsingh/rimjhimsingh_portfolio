import { ImageResponse } from "next/og"

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Rimjhim Singh - Full Stack Engineer"
export const size = {
  width: 1200,
  height: 630,
}
export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#f5f2e8",
        position: "relative",
      }}
    >
      <div
        style={{
          position: "absolute",
          top: 30,
          left: 30,
          display: "flex",
          alignItems: "center",
          gap: "15px",
        }}
      >
        <div
          style={{
            width: "60px",
            height: "60px",
            borderRadius: "50%",
            backgroundColor: "#e63946",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "white",
            fontSize: "36px",
            fontWeight: 700,
            fontFamily: "Georgia, serif",
          }}
        >
          R
        </div>
        <div
          style={{
            fontSize: "28px",
            fontWeight: 700,
            color: "#e63946",
            fontFamily: "Georgia, serif",
          }}
        >
          RIMJHIM SINGH
        </div>
      </div>

      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "40px",
        }}
      >
        <h1
          style={{
            fontSize: "80px",
            fontWeight: 800,
            color: "#121212",
            marginBottom: "20px",
            textAlign: "center",
            fontFamily: "Georgia, serif",
          }}
        >
          Full Stack Engineer
        </h1>
        <p
          style={{
            fontSize: "32px",
            color: "#333",
            textAlign: "center",
            maxWidth: "800px",
            fontFamily: "system-ui",
          }}
        >
          React.js • Node.js • TypeScript • Python • Java
        </p>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: 30,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <p
          style={{
            fontSize: "24px",
            color: "#666",
            fontFamily: "system-ui",
          }}
        >
          Portfolio & Professional Experience
        </p>
      </div>
    </div>,
    // ImageResponse options
    {
      // For convenience, we can re-use the exported size metadata
      // config to also set the ImageResponse's width and height.
      ...size,
    },
  )
}
