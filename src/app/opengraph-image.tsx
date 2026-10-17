import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = siteConfig.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "#FBF4EC",
          color: "#6F3A26",
          borderLeft: "24px solid #6F3A26",
        }}
      >
        <div style={{ fontSize: 30, letterSpacing: 8, color: "#B5663F", display: "flex" }}>
          NEUROPSICOPEDAGOGA E ESCRITORA
        </div>
        <div style={{ fontSize: 150, fontWeight: 700, lineHeight: 1, marginTop: 24, display: "flex" }}>
          Erika Gomes
        </div>
        <div style={{ fontSize: 34, marginTop: 36, color: "#5B4439", maxWidth: 900, display: "flex" }}>
          Ciência e acolhimento para transformar histórias.
        </div>
      </div>
    ),
    size,
  );
}
