"use client";
import { motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { colors } from "@/app/theme/colors";

export default function Testimonials() {
  const { darkMode } = useTheme();

  const theme = darkMode ? colors.dark : colors.light;

  const reviews = [
    {
      name: "Ada",
      location: "Lagos",
      initial: "A",
      review:
        "Absolutely love my handbag! The quality exceeded my expectations and delivery was incredibly fast.",
    },
    {
      name: "Chioma",
      location: "Abuja",
      initial: "C",
      review:
        "Beautiful packaging and premium quality. I've already recommended CHICKLUXE to all my friends.",
    },
    {
      name: "Amara",
      location: "Port Harcourt",
      initial: "A",
      review:
        "The handbag looks even better in person. Elegant, classy and definitely worth every naira.",
    },
  ];

  return (
    <section
      style={{
        padding: "110px 40px",
        background: theme.background,
        transition: "all .35s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p
            style={{
              color: theme.accent,
              letterSpacing: "3px",
              fontWeight: "bold",
              fontSize: "15px",
            }}
          >
            TESTIMONIALS
          </p>

          <h2
            style={{
              fontSize: "clamp(38px,5vw,52px)",
              color: theme.text,
              marginTop: "18px",
            }}
          >
            Loved by Women Across Nigeria
          </h2>

          <p
            style={{
              maxWidth: "700px",
              margin: "20px auto 70px",
              color: theme.textSecondary,
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Our customers love the elegance, premium quality and exceptional
            shopping experience that comes with every CHICKLUXE handbag.
          </p>
        </motion.div>

       <div
  className="testimonials-grid"
  style={{
    display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(330px,1fr))",
            gap: "35px",
          }}
        >
          {reviews.map((review, index) => (
            <motion.div
  className="testimonial-card"
              key={review.name}
              initial={{ opacity: 0, y: 45 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.12,
              }}
             whileHover={{
  y: -8,
  scale: 1.015,
  boxShadow: darkMode
    ? "0 30px 60px rgba(0,0,0,.45)"
    : "0 30px 60px rgba(0,0,0,.12)",
}}
              style={{
                background: theme.card,
                borderRadius: "26px",
                padding: "40px 35px",
                border: `1px solid ${theme.border}`,
                boxShadow: theme.shadow,
                textAlign: "left",
                transition: "all .35s ease",
              }}
            >
              {/* Customer */}

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "18px",
                  marginBottom: "28px",
                }}
              >
                <div
                  style={{
                  width: "68px",
height: "68px", 
border: `2px solid ${theme.accent}`,
boxShadow: "0 8px 20px rgba(249,115,22,.15)",
                    borderRadius: "50%",
                    background: darkMode
                      ? "rgba(249,115,22,.15)"
                      : "#FFF3E8",
                    color: theme.accent,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "30px",
                    fontWeight: 700,
                  }}
                >
                  {review.initial}
                </div>

                <div>
                  <h4
                    style={{
                      color: theme.text,
                      marginBottom: "5px",
                      fontSize: "20px",
                    }}
                  >
                    {review.name}
                  </h4>

                  <p
                    style={{
                      color: theme.textSecondary,
                      fontSize: "15px",
                    }}
                  >
                    {review.location}
                  </p>
                </div>
              </div>

              {/* Stars */}

              <div
                style={{
                  color: "#F59E0B",
                fontSize: "20px",
letterSpacing: "2px",
                  marginBottom: "20px",
                }}
              >
                ★★★★★
              </div>

              {/* Review */}

              <p
                style={{
                  color: theme.textSecondary,
                  lineHeight: "1.9",
                  fontStyle: "italic",
                  fontWeight: 400,
                  fontSize: "17px",
                }}
              >
                "{review.review}"
              </p>
            </motion.div>
          ))}
        </div>

       
      </div>
    </section>
  );
}