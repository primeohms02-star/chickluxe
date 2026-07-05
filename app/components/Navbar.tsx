"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X, Moon, Sun } from "lucide-react";
import { useTheme } from "@/app/context/ThemeContext";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { darkMode, toggleDarkMode } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        style={{
          position: "sticky",
          top: 0,
          zIndex: 1000,
          background: darkMode ? "#0F1115" : "#FFFFFF",
          borderBottom: `1px solid ${
            darkMode
              ? "rgba(255,255,255,.08)"
              : "rgba(0,0,0,.08)"
          }`,
          boxShadow: scrolled
            ? darkMode
              ? "0 8px 28px rgba(0,0,0,.35)"
              : "0 8px 24px rgba(0,0,0,.08)"
            : "none",
          transition: "all .35s ease",
        }}
      >
        <div
          style={{
            maxWidth: "1400px",
            margin: "0 auto",
            height: scrolled ? "78px" : "92px",
            padding: "0 6px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            transition: ".35s ease",
          }}
        >
          <Link
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              marginLeft: "-30px",
            }}
          >
           <Image
  src="/logo.png"
  alt="CHICKLUXE"
  width={0}
  height={0}
  sizes="100vw"
  priority
  style={{
    width: scrolled ? "290px" : "330px",
    height: "auto",
    objectFit: "contain",
    marginTop: "18px",
    transition: ".35s ease",
  }}
/>
          </Link>

          <nav
            className="desktop-menu"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "36px",
            }}
          >
            <a href="#hero" style={linkStyle(darkMode)}>
              Home
            </a>

            <a href="#products" style={linkStyle(darkMode)}>
              Collection
            </a>

            <a href="#about" style={linkStyle(darkMode)}>
              About
            </a>

            <a href="#why-us" style={linkStyle(darkMode)}>
              Why Us
            </a>

            <a href="#contact" style={linkStyle(darkMode)}>
              Contact
            </a>
          </nav>

          {/* Right Side */}
                <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "18px",
            }}
          >
            {/* Theme Button */}

            <button
              onClick={toggleDarkMode}
              aria-label="Toggle Theme"
              style={{
                width: "46px",
                height: "46px",
                borderRadius: "50%",
                border: darkMode
                  ? "1px solid rgba(255,255,255,.15)"
                  : "1px solid #ddd",
                background: darkMode ? "#1F2937" : "#fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
                transition: ".3s",
              }}
            >
              {darkMode ? (
                <Sun size={20} color="#F97316" />
              ) : (
                <Moon size={20} color="#111827" />
              )}
            </button>

            {/* Order Button */}

            <a
              className="desktop-order-btn"
              href="https://wa.me/2349166964067"
              target="_blank"
              rel="noopener noreferrer"
              style={{
                background: "#F97316",
                color: "#fff",
                textDecoration: "none",
                padding: "14px 30px",
                borderRadius: "999px",
                fontWeight: 700,
                fontSize: "15px",
                boxShadow:
                  "0 8px 24px rgba(249,115,22,.25)",
                transition: ".3s",
              }}
            >
              Order Now
            </a>

            {/* Mobile Menu Button */}

            <button
              className="mobile-menu-button"
              onClick={() => setMenuOpen(!menuOpen)}
              style={{
                display: "none",
                background: "none",
                border: "none",
                cursor: "pointer",
                color: darkMode ? "#fff" : "#111827",
              }}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}

        {menuOpen && (
          <div
            style={{
              background: darkMode ? "#0F1115" : "#fff",
              borderTop: `1px solid ${
                darkMode
                  ? "rgba(255,255,255,.08)"
                  : "rgba(0,0,0,.08)"
              }`,
              padding: "25px 32px",
              display: "flex",
              flexDirection: "column",
              gap: "22px",
            }}
          >
            <a
              href="#hero"
              style={linkStyle(darkMode)}
              onClick={() => setMenuOpen(false)}
            >
              Home
            </a>

            <a
              href="#products"
              style={linkStyle(darkMode)}
              onClick={() => setMenuOpen(false)}
            >
              Collection
            </a>

            <a
              href="#about"
              style={linkStyle(darkMode)}
              onClick={() => setMenuOpen(false)}
            >
              About
            </a>

            <a
              href="#why-us"
              style={linkStyle(darkMode)}
              onClick={() => setMenuOpen(false)}
            >
              Why Us
            </a>

            <a
              href="#contact"
              style={linkStyle(darkMode)}
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </a>

            <a
              href="https://wa.me/2349166964067"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMenuOpen(false)}
              style={{
                background: "#F97316",
                color: "#fff",
                textDecoration: "none",
                padding: "15px",
                borderRadius: "999px",
                textAlign: "center",
                fontWeight: 700,
                marginTop: "10px",
              }}
            >
              Order on WhatsApp
            </a>
          </div>
        )}
      </header>
    </>
  );
}

const linkStyle = (darkMode: boolean) => ({
  textDecoration: "none",
  color: darkMode ? "#F9FAFB" : "#1F2937",
  fontWeight: 600,
  fontSize: "15px",
  transition: "color .25s ease",
});