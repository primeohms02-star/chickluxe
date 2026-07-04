"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
export default function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div
        style={{
          width: 52,
          height: 52,
        }}
      />
    );
  }

  const dark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(dark ? "light" : "dark")}
      aria-label="Toggle Theme"
      style={{
        width: 52,
        height: 52,
        borderRadius: "999px",
        border: dark ? "1px solid #444" : "1px solid #eee",
        background: dark ? "#1A1A1A" : "#fff",
        color: dark ? "#F97316" : "#111",
        cursor: "pointer",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all .35s ease",
        boxShadow: dark
          ? "0 10px 25px rgba(0,0,0,.35)"
          : "0 10px 25px rgba(0,0,0,.08)",
      }}
    >
      {dark ? <Sun size={22} /> : <Moon size={22} />}
    </button>
  );
}