"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { colors } from "@/app/theme/colors";
export default function About() {
  const { darkMode } = useTheme();

  const theme = darkMode ? colors.dark : colors.light;

  return (
    <section
      id="about"
      style={{
        background: theme.background,
        padding: "110px 40px",
        transition: "all .35s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1150px",
          margin: "0 auto",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{
            textAlign: "center",
            marginBottom: "70px",
          }}
        >
          <p
            style={{
              color: theme.accent,
              fontWeight: "bold",
              letterSpacing: "3px",
              marginBottom: "18px",
              fontSize: "15px",
            }}
          >
            ABOUT CHICKLUXE
          </p>

          <h2
            style={{
              fontSize: "clamp(38px,5vw,52px)",
              color: theme.text,
              marginBottom: "30px",
              lineHeight: "1.2",
            }}
          >
            Luxury Handbags Crafted
            <br />
            For Modern Women
          </h2>

          <p
            style={{
              fontSize: "20px",
              lineHeight: "1.9",
              color: theme.textSecondary,
              maxWidth: "820px",
              margin: "0 auto",
            }}
          >
            At CHICKLUXE, we believe every woman deserves to express confidence,
            sophistication and elegance through timeless fashion. Every handbag
            in our collection is carefully selected to deliver premium quality,
            luxurious style and everyday functionality.
          </p>
        </motion.div>

        {/* Cards */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {[
            {
              icon: "✨",
              title: "Premium Quality",
              text: "Only carefully selected handbags made with premium craftsmanship and elegant finishing.",
            },
            {
              icon: "👜",
              title: "Luxury Collection",
              text: "Fashion-forward handbags designed for work, special occasions and everyday elegance.",
            },
            {
              icon: "❤️",
              title: "Customer First",
              text: "Fast responses, nationwide delivery and a shopping experience you'll always enjoy.",
            },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{
                y: -8,
                scale: 1.02,
              }}
              transition={{
                duration: 0.25,
              }}
              style={{
                background: theme.card,
                border: `1px solid ${theme.border}`,
                borderRadius: "24px",
                padding: "38px",
                textAlign: "center",
                boxShadow: theme.shadow,
                transition: ".3s",
              }}
            >
              <div
                style={{
                  fontSize: "46px",
                  marginBottom: "20px",
                }}
              >
                {item.icon}
              </div>

              <h3
                style={{
                  color: theme.text,
                  marginBottom: "16px",
                  fontSize: "24px",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: theme.textSecondary,
                  lineHeight: "1.8",
                }}
              >
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            marginTop: "70px",
            textAlign: "center",
          }}
        >
          <h3
            style={{
              color: theme.accent,
              fontSize: "34px",
              fontWeight: 700,
            }}
          >
            Be Classy. Be Luxury. Be CHICKLUXE.
          </h3>
        </motion.div>
      </div>
    </section>
  );
}