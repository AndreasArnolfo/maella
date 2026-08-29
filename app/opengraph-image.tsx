import { ImageResponse } from "next/og";

export const alt = "MAELLA — Votre produit. En production.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: "#0b0c0e", color: "#fcfcfa", padding: "68px 76px", position: "relative" }}>
      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 25, letterSpacing: "-1px" }}>
        <strong style={{ display: "flex", fontSize: 31, letterSpacing: "-2px" }}>MAELLA<span style={{ color: "#ff5a36" }}>.</span></strong>
        <span style={{ color: "#8c8d8b", fontSize: 18 }}>DÉPLOIEMENT · INFRASTRUCTURE · AUTOMATISATION</span>
      </div>
      <div style={{ display: "flex", flexDirection: "column", fontSize: 104, fontWeight: 600, lineHeight: .86, letterSpacing: "-7px" }}>
        <span style={{ display: "flex" }}>Votre produit<span style={{ color: "#ff5a36" }}>.</span></span>
        <span style={{ display: "flex", marginLeft: 85 }}>En production<span style={{ color: "#ff5a36" }}>.</span></span>
      </div>
      <div style={{ display: "flex", alignItems: "center", gap: 14, color: "#a5a6a3", fontSize: 20 }}>
        <span style={{ width: 10, height: 10, borderRadius: 10, background: "#ff5a36" }} />
        Studio technique français — maella.fr
      </div>
    </div>,
    size,
  );
}
