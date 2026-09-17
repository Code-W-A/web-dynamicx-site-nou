import { ImageResponse } from "next/og";

export const OG_IMAGE_SIZE = {
  width: 1200,
  height: 630,
};

type OgImageOptions = {
  eyebrow: string;
  title: string;
  description?: string;
};

export function createOgImage({ eyebrow, title, description }: OgImageOptions) {
  const safeDescription = description?.trim().slice(0, 180);
  const titleSize = title.length > 72 ? 52 : title.length > 48 ? 58 : 66;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          padding: "58px 68px",
          color: "#ffffff",
          background:
            "linear-gradient(135deg, #090e34 0%, #111c52 54%, #3f5fd7 130%)",
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: 520,
            height: 520,
            borderRadius: 520,
            right: -180,
            top: -220,
            background: "rgba(111, 138, 255, 0.22)",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 330,
            height: 330,
            borderRadius: 330,
            left: -150,
            bottom: -210,
            border: "42px solid rgba(111, 138, 255, 0.16)",
          }}
        />

        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              width: 62,
              height: 62,
              borderRadius: 18,
              background: "#ffffff",
              color: "#3f5fd7",
              fontSize: 25,
              fontWeight: 800,
              marginRight: 18,
            }}
          >
            WD
          </div>
          <div style={{ display: "flex", fontSize: 28, fontWeight: 700 }}>
            Web Dynamicx
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", maxWidth: 1010 }}>
          <div
            style={{
              display: "flex",
              marginBottom: 18,
              color: "#aebdff",
              fontSize: 22,
              fontWeight: 700,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
            }}
          >
            {eyebrow}
          </div>
          <div
            style={{
              display: "flex",
              fontSize: titleSize,
              lineHeight: 1.08,
              fontWeight: 800,
              letterSpacing: "-0.035em",
            }}
          >
            {title}
          </div>
          {safeDescription ? (
            <div
              style={{
                display: "flex",
                maxWidth: 930,
                marginTop: 22,
                color: "#d8def2",
                fontSize: 25,
                lineHeight: 1.35,
              }}
            >
              {safeDescription}
            </div>
          ) : null}
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            color: "#b9c5ef",
            fontSize: 21,
          }}
        >
          <div style={{ display: "flex" }}>webdynamicx.ro</div>
          <div style={{ display: "flex" }}>Website-uri • SEO • Aplicații mobile</div>
        </div>
      </div>
    ),
    OG_IMAGE_SIZE,
  );
}
