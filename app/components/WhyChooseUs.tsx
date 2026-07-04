"use client";

import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { colors } from "@/app/theme/colors";
export default function WhyChooseUs() {
  const { darkMode } = useTheme();

  const theme = darkMode ? colors.dark : colors.light;

  const items = [
    {
      title: "Premium Quality",
      text: "Every handbag is carefully selected for exceptional craftsmanship, luxury finishing and lasting durability.",
      icon: "⭐",
    },
    {
      title: "Nationwide Delivery",
      text: "Fast, reliable and secure delivery to every state across Nigeria with careful packaging.",
      icon: "🚚",
    },
    {
      title: "Easy WhatsApp Ordering",
      text: "Order directly through WhatsApp and enjoy quick responses from our friendly support team.",
      icon: "💬",
    },
    {
      title: "Trusted Brand",
      text: "Hundreds of satisfied customers trust CHICKLUXE for authentic luxury handbags and excellent service.",
      icon: "🛍️",
    },
  ];

  return (
    <section
      id="why-us"
      style={{
        padding: "110px 40px",
        background: theme.surface,
        transition: "all .35s ease",
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
            fontSize: "15px",
            marginBottom: "16px",
          }}
        >
          WHY CHOOSE US
        </p>

        <h2
          style={{
            fontSize: "clamp(38px,5vw,52px)",
            color: theme.text,
            marginBottom: "18px",
          }}
        >
          Why Shop With CHICKLUXE?
        </h2>

        <p
          style={{
            maxWidth: "700px",
            margin: "0 auto",
            color: theme.textSecondary,
            fontSize: "18px",
            lineHeight: "1.8",
          }}
        >
          We don't just sell handbags—we deliver confidence, luxury, premium
          quality and an exceptional shopping experience from start to finish.
        </p>
      </motion.div>

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(260px,1fr))",
          gap: "30px",
        }}
      >
        {items.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.12,
            }}
            whileHover={{
              y: -10,
              scale: 1.03,
            }}
            style={{
              background: theme.card,
              borderRadius: "24px",
              padding: "40px 30px",
              textAlign: "center",
              border: `1px solid ${theme.border}`,
              boxShadow: theme.shadow,
              transition: ".3s",
            }}
          >
            <div
              style={{
                width: "82px",
                height: "82px",
                margin: "0 auto 25px",
                borderRadius: "50%",
                background: darkMode
                  ? "rgba(249,115,22,.12)"
                  : "#FFF3E8",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "42px",
              }}
            >
              {item.icon}
            </div>

            <h3
              style={{
                color: theme.text,
                fontSize: "24px",
                marginBottom: "16px",
              }}
            >
              {item.title}
            </h3>

            <p
              style={{
                color: theme.textSecondary,
                lineHeight: "1.8",
                fontSize: "16px",
              }}
            >
              {item.text}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}