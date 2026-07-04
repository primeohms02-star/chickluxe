"use client";

import { useTheme } from "@/app/context/ThemeContext";
import { colors } from "@/app/theme/colors";

export default function Contact() {
  const { darkMode } = useTheme();
  const theme = darkMode ? colors.dark : colors.light;

  return (
    <section
      id="contact"
      style={{
        background: theme.background,
        padding: "100px 40px",
        transition: ".35s",
      }}
    >
      <div
  className="contact-card"
  style={{
          maxWidth: "1100px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <p
          style={{
            color: theme.accent,
            fontWeight: "bold",
            letterSpacing: "3px",
            marginBottom: "15px",
          }}
        >
          CONTACT US
        </p>

        <h2
          style={{
            fontSize: "42px",
            color: theme.text,
            marginBottom: "20px",
          }}
        >
          We'd Love to Hear From You
        </h2>

        <p
          style={{
            color: theme.textSecondary,
            fontSize: "18px",
            lineHeight: "1.8",
            maxWidth: "650px",
            margin: "0 auto 50px",
          }}
        >
          Have questions about any handbag? Need help placing an order?
          Reach out to us through WhatsApp or our contact details below.
        </p>

        <div
  className="contact-grid"
  style={{
    display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
            gap: "30px",
          }}
        >
          {/* WhatsApp */}

          <div
  className="contact-card"
  style={{
              background: theme.card,
              padding: "35px",
              borderRadius: "20px",
              border: `1px solid ${theme.border}`,
              boxShadow: theme.shadow,
              transition: ".3s",
            }}
          >
            <h3
              style={{
                color: theme.text,
              }}
            >
              📱 WhatsApp
            </h3>

            <p
              style={{
                marginTop: "15px",
                color: theme.textSecondary,
              }}
            >
              +234 916 696 4067
            </p>
          </div>

          {/* Email */}

         <div
  className="contact-card"
  style={{
              background: theme.card,
              padding: "35px",
              borderRadius: "20px",
              border: `1px solid ${theme.border}`,
              boxShadow: theme.shadow,
            }}
          >
            <h3
              style={{
                color: theme.text,
              }}
            >
              📧 Email
            </h3>

            <p
              style={{
                marginTop: "15px",
                color: theme.textSecondary,
              }}
            >
              Chickluxehq@gmail.com
            </p>
          </div>

          {/* Location */}

          <div
            style={{
              background: theme.card,
              padding: "35px",
              borderRadius: "20px",
              border: `1px solid ${theme.border}`,
              boxShadow: theme.shadow,
            }}
          >
            <h3
              style={{
                color: theme.text,
              }}
            >
              📍 Location
            </h3>

            <p
              style={{
                marginTop: "15px",
                color: theme.textSecondary,
              }}
            >
              Lagos, Nigeria
            </p>
          </div>
        </div>

        <a
          href="https://wa.me/2349166964067"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-block",
            marginTop: "50px",
            background: theme.accent,
            color: "#fff",
            textDecoration: "none",
            padding: "16px 40px",
            borderRadius: "40px",
            fontSize: "18px",
            fontWeight: 600,
            transition: ".3s",
          }}
        >
          Chat on WhatsApp
        </a>
      </div>
    </section>
  );
}