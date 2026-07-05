"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";


export default function Hero() {
  const { darkMode } = useTheme();

  return (
    <section
  id="hero"
  className="section-padding"
  style={{
        minHeight: "78vh",
        background: darkMode
          ? "linear-gradient(to right, #0F1115, #1A1D23)"
          : "linear-gradient(to right, #FFF8F2, #FDF2E9)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "60px 24px",
        position: "relative",
        overflow: "hidden",
        transition: "all .35s ease",
      }}
    >
      {/* Background Blur Circles */}

      <div
        style={{
          position: "absolute",
          width: "320px",
          height: "320px",
          background: "#FDBA74",
          opacity: darkMode ? 0.08 : 0.18,
          borderRadius: "50%",
          filter: "blur(120px)",
          top: "-80px",
          left: "-80px",
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "260px",
          height: "260px",
          background: "#FB923C",
          opacity: darkMode ? 0.08 : 0.15,
          borderRadius: "50%",
          filter: "blur(120px)",
          bottom: "-60px",
          right: "-40px",
        }}
      />

      <div
        className="hero-container"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          gap: "50px",
          maxWidth: "1080px",
          width: "100%",
          flexWrap: "wrap",
          position: "relative",
          zIndex: 2,
        }}
      >
        {/* Left Side */}

        <motion.div
          className="hero-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          style={{
            flex: "1 1 500px",
          }}
        >
          <p
            style={{
              color: "#F97316",
              fontWeight: "bold",
              letterSpacing: "3px",
              marginBottom: "20px",
            }}
          >
            PREMIUM LUXURY HANDBAGS
          </p>

          <h1
            className="hero-title"
            style={{
              fontSize: "clamp(34px,5vw,58px)",
              lineHeight: "1.1",
              color: darkMode ? "#FFFFFF" : "#111111",
              marginBottom: "25px",
              transition: "color .3s ease",
            }}
          >
            Elevate
            <br />
            Your Style
          </h1>

          <p
            className="hero-text"
            style={{
              fontSize: "17px",
              color: darkMode ? "#D1D5DB" : "#666666",
              lineHeight: "1.8",
              maxWidth: "440px",
              transition: "color .3s ease",
            }}
          >
            Discover elegant handbags crafted for confident women who love
            timeless fashion, premium quality and everyday luxury.
          </p>

          {/* Buttons */}

          <div
            className="hero-buttons"
            style={{
              display: "flex",
              gap: "18px",
              flexWrap: "wrap",
              marginTop: "40px",
            }}
          >
           <motion.a
  whileHover={{
    scale: 1.04,
    y: -2,
    boxShadow: "0 18px 40px rgba(249,115,22,.35)",
  }}
  whileTap={{ scale: 0.98 }}
  href="#products"
              style={{
                background: "#F97316",
                color: "#fff",
                padding: "15px 30px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "bold",
                boxShadow: "0 12px 30px rgba(249,115,22,.25)",
                transition: "all .3s ease",
              }}
            >
              Shop Collection
            </motion.a>

           <motion.a
  whileHover={{
    scale: 1.04,
    y: -2,
  }}
  whileTap={{ scale: 0.98 }}
  href="https://wa.me/2349166964067?text=Hello%20CHICKLUXE,%20I'm%20interested%20in%20your%20handbags."
              target="_blank"
              rel="noopener noreferrer"
              style={{
                border: `2px solid ${
                  darkMode ? "#F97316" : "#111111"
                }`,
                color: darkMode ? "#FFFFFF" : "#111111",
                padding: "18px 38px",
                borderRadius: "999px",
                textDecoration: "none",
                fontWeight: "bold",
                transition: "all .3s ease",
              }}
            >
              WhatsApp Us
            </motion.a>
          </div>
                    {/* Stats */}

          <div
            className="hero-stats"
            style={{
              display: "flex",
              gap: "30px",
              flexWrap: "wrap",
              marginTop: "55px",
            }}
          >
            <div>
              <h2
                style={{
                  color: "#F97316",
                  fontSize: "34px",
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                Premium
              </h2>

              <p
                style={{
                  color: darkMode ? "#D1D5DB" : "#666666",
                  marginTop: "8px",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                Quality Materials
              </p>
            </div>

            <div>
              <h2
                style={{
                  color: "#F97316",
                  fontSize: "34px",
                  margin: 0,
                  fontWeight: 700,
                }}
              >
                Nigeria
              </h2>

              <p
                style={{
                  color: darkMode ? "#D1D5DB" : "#666666",
                  marginTop: "8px",
                  fontSize: "16px",
                  lineHeight: "1.6",
                }}
              >
                Nationwide Delivery
              </p>
            </div>
          </div>
        </motion.div>

        {/* Right Side */}

        <motion.div
          className="hero-right"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
          style={{
            flex: "1 1 420px",
            textAlign: "center",
          }}
        >
          <motion.img
            className="hero-image"
            src="/products/first-bag.jpg"
            alt="CHICKLUXE Signature Tote"
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              repeat: Infinity,
              duration: 5,
              ease: "easeInOut",
            }}
            style={{
              width: "100%",
              maxWidth: "520px",
              borderRadius: "28px",
              boxShadow: darkMode
                ? "0 35px 80px rgba(0,0,0,.60)"
                : "0 35px 80px rgba(0,0,0,.18)",
              transition: "box-shadow .3s ease",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}