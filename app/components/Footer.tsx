"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  FaInstagram,
  FaFacebookF,
  FaWhatsapp,
} from "react-icons/fa";
import { SiTiktok } from "react-icons/si";
import { useTheme } from "@/app/context/ThemeContext";
import { colors } from "@/app/theme/colors";

export default function Footer() {
  const { darkMode } = useTheme();
  const theme = darkMode ? colors.dark : colors.light;

  const socialStyle = {
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: theme.card,
    color: theme.text,
    border: `1px solid ${theme.border}`,
    textDecoration: "none",
    boxShadow: theme.shadow,
    transition: "all .3s ease",
  } as const;

  return (
    <footer
      id="contact"
      style={{
        background: darkMode ? "#0B0D11" : "#FDF7F2",
        borderTop: `1px solid ${theme.border}`,
        transition: ".35s",
      }}
    >
      <div
        style={{
          maxWidth: "1250px",
          margin: "0 auto",
          padding: "80px 40px 35px",
        }}
      >
        {/* Top */}

        <div
          className="footer-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(240px,1fr))",
            gap: "50px",
            marginBottom: "60px",
          }}
        >
          {/* Logo */}

          <div className="footer-column">
            <motion.div whileHover={{ scale: 1.03 }}>
              <Image
                src="/logo.png"
                alt="CHICKLUXE"
                width={240}
                height={90}
                priority
                style={{
                  width: "220px",
                  height: "auto",
                }}
              />
            </motion.div>
          </div>

          {/* Quick Links */}

          <div className="footer-column">
            <h3
              style={{
                color: theme.text,
                marginBottom: "22px",
                fontSize: "22px",
              }}
            >
              Quick Links
            </h3>

            <div
              style={{
                display: "grid",
                gap: "14px",
              }}
            >
              {[
                ["Home", "/"],
                ["Collection", "#products"],
                ["About", "#about"],
                ["Why Us", "#why-us"],
                ["Contact", "#contact"],
              ].map(([name, href]) => (
                <Link
                  key={name}
                  href={href}
                  className="footer-link"
                  style={{
                    color: theme.textSecondary,
                    textDecoration: "none",
                    transition: "all .3s ease",
                  }}
                >
                  {name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}

          <div className="footer-column">
            <h3
              style={{
                color: theme.text,
                marginBottom: "22px",
                fontSize: "22px",
              }}
            >
              Contact
            </h3>

            <div
              style={{
                display: "grid",
                gap: "18px",
                color: theme.textSecondary,
                lineHeight: "1.8",
              }}
            >
              <span>📍 Lagos, Nigeria</span>
              <span>📞 +234 916 696 4067</span>
              <span>✉️ chickluxehq@gmail.com</span>
            </div>
          </div>

          {/* Social */}

          <div className="footer-column">
            <h3
              style={{
                color: theme.text,
                marginBottom: "22px",
                fontSize: "22px",
              }}
            >
              Follow Us
            </h3>

            <p
              style={{
                color: theme.textSecondary,
                marginBottom: "25px",
                lineHeight: "1.8",
              }}
            >
              Stay updated with our newest arrivals, exclusive offers and luxury
              collections.
            </p>

            <div
              style={{
                display: "flex",
                gap: "15px",
                alignItems: "center",
              }}
            >
              <motion.a
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialStyle}
              >
                <FaInstagram size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://facebook.com/"
                target="_blank"
                rel="noopener noreferrer"
                style={socialStyle}
              >
                <FaFacebookF size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://wa.me/2349166964067?text=Hello%20CHICKLUXE,%20I'm%20interested%20in%20your%20handbags."
                target="_blank"
                rel="noopener noreferrer"
                style={socialStyle}
              >
                <FaWhatsapp size={20} />
              </motion.a>

              <motion.a
                whileHover={{ y: -4, scale: 1.08 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.tiktok.com/@CHICKLUXE"
                target="_blank"
                rel="noopener noreferrer"
                style={socialStyle}
              >
                <SiTiktok size={20} />
              </motion.a>
            </div>
          </div>
        </div>

        {/* Bottom */}

        <div
          className="footer-bottom"
          style={{
            borderTop: `1px solid ${theme.border}`,
            paddingTop: "30px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <p
            style={{
              color: theme.textSecondary,
              fontSize: "15px",
            }}
          >
            © {new Date().getFullYear()} CHICKLUXE. All rights reserved.
          </p>

          <p
            style={{
              color: theme.textSecondary,
              fontSize: "15px",
            }}
          >
            Designed with elegance for modern women.
          </p>
        </div>
      </div>
    </footer>
  );
}