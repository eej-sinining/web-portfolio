"use client";

import Galaxy from "@/styles/Galaxy";

export default function GalaxyBackground() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 0,
        pointerEvents: "none",
      }}
    >
      <div
        style={{
          width: "100%",
          height: "100%",
          pointerEvents: "auto",
        }}
      >
        <Galaxy />
      </div>
    </div>
  );
}