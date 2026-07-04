"use client";

import { useTheme } from "@/app/context/ThemeContext";

export default function FloatingWhatsApp() {
  const { darkMode } = useTheme();

  return (
    <a
      href="https://wa.me/2349166964067?text=Hello%20CHICKLUXE,%20I'm%20interested%20in%20your%20handbags."
      target="_blank"
      rel="noopener noreferrer"
      style={{
        position: "fixed",
        right: "25px",
        bottom: "25px",
        width: "65px",
        height: "65px",
        borderRadius: "50%",
        background: "#25D366",
        color: "#fff",
        fontSize: "32px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        textDecoration: "none",
        boxShadow: darkMode
          ? "0 10px 35px rgba(0,0,0,.45)"
          : "0 10px 35px rgba(0,0,0,.20)",
        zIndex: 999,
        transition: "all .3s ease",
      }}
    >
      💬
    </a>
  );
}