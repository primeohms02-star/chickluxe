"use client";
import { useTheme } from "@/app/context/ThemeContext";
import { colors } from "@/app/theme/colors";
import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import products from "../data/products";
import QuickViewModal from "./QuickViewModal";
import useWishlist from "../hooks/useWishlist";
export default function Products() {
  const [selectedProduct, setSelectedProduct] = useState<
    (typeof products)[0] | null
  >(null);

  const { toggleWishlist, isWishlisted } = useWishlist();
const { darkMode } = useTheme();

const theme = darkMode ? colors.dark : colors.light;
  return (
    <>
      <section
        id="products"
        style={{
          padding: "100px 40px",
         background: theme.background,
transition: "all .35s ease",
        }}
      >
        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 30 }}
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
              color: "#F97316",
              fontWeight: "bold",
              letterSpacing: "3px",
              fontSize: "15px",
            }}
          >
            FEATURED COLLECTION
          </p>

         <h2
  style={{
    fontSize: "46px",
    color: theme.text,
    marginTop: "15px",
    fontWeight: "700",
  }}
>
            Luxury Handbags for Every Occasion
          </h2>

          <p
            style={{
              maxWidth: "650px",
              margin: "18px auto 0",
              color: theme.textSecondary,
              fontSize: "18px",
              lineHeight: "1.8",
            }}
          >
            Explore our carefully curated collection of premium handbags crafted
            for elegance, confidence, and everyday luxury.
          </p>
        </motion.div>

        {/* Products */}

       <div
  className="products-grid"
  style={{
    maxWidth: "1200px",
    margin: "0 auto",
    display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(300px,1fr))",
            gap: "35px",
          }}
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
             whileHover={{
  y: -8,
  scale: 1.015,
  boxShadow: darkMode
    ? "0 30px 60px rgba(0,0,0,.45)"
    : "0 30px 60px rgba(0,0,0,.14)",
}}
              style={{
               background: theme.card,
border: darkMode
  ? "1px solid rgba(255,255,255,.08)"
  : "1px solid rgba(0,0,0,.05)",
boxShadow: theme.shadow,
transition: "all .3s ease",
                borderRadius: "22px",
                overflow: "hidden",
                
                position: "relative",
              }}
            >
              {/* Badge */}

              {product.badge && (
                <div
                  style={{
                    position: "absolute",
                    top: "18px",
                    left: "18px",
                    background:
                      product.badge === "BEST SELLER"
                        ? "#111"
                        : product.badge === "PREMIUM"
                        ? "#7C3AED"
                        : "#F97316",
                    color: "#fff",
                    padding: "8px 14px",
                    borderRadius: "999px",
                    fontSize: "12px",
                    fontWeight: "bold",
                    zIndex: 5,
                  }}
                >
                  {product.badge}
                </div>
              )}

              {/* Wishlist */}

              <motion.button
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.9 }}
                onClick={() => toggleWishlist(product.slug)}
                style={{
                  position: "absolute",
                  top: "18px",
                  right: "18px",
                  width: "44px",
                  height: "44px",
                  borderRadius: "50%",
                  border: "none",
                  cursor: "pointer",
                 background: theme.surface,
color: theme.text,
                  boxShadow: "0 8px 20px rgba(0,0,0,.12)",
                  fontSize: "22px",
                  zIndex: 5,
                }}
              >
                {isWishlisted(product.slug) ? "❤️" : "🤍"}
              </motion.button>

              {/* Image */}

              <div
                style={{
                  position: "relative",
                  overflow: "hidden",
                }}
              >
                <Link href={`/products/${product.slug}`}>
                  <motion.img
                    src={product.image}
                    alt={product.name}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.35 }}
                    style={{
                      width: "100%",
                      height: "340px",
                      objectFit: "cover",
                      display: "block",
                    }}
                  />
                </Link>

                {/* Quick View */}

                <motion.button
                  whileHover={{
  scale: 1.03,
  y: -2,
}}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedProduct(product)}
                  style={{
                    position: "absolute",
                    bottom: "20px",
                    left: "50%",
                    transform: "translateX(-50%)",
                    background: theme.accent,
                    color: "#fff",
                    border: "none",
                    padding: "12px 22px",
                    borderRadius: "999px",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  👁 Quick View
                </motion.button>
              </div>

              {/* Content */}

              <div
                style={{
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    color: "#F59E0B",
                    fontSize: "18px",
                    marginBottom: "10px",
                  }}
                >
                  ★★★★★
                  <span
                    style={{
                      color: "#777",
                      marginLeft: "8px",
                      fontSize: "14px",
                    }}
                  >
                    (5.0)
                  </span>
                </div>

                <Link
                  href={`/products/${product.slug}`}
                  style={{
                    textDecoration: "none",
                  }}
                >
                  <h3
  style={{
    color: theme.text,
    fontSize: "24px",
    marginBottom: "12px",
  }}
>
                    {product.name}
                  </h3>
                </Link>

                <p
                  style={{
                   color: theme.text,
                    lineHeight: "1.8",
                    marginBottom: "20px",
                    minHeight: "60px",
                  }}
                >
                  {product.description}
                </p>

                <h2
                  style={{
                   color: theme.textSecondary,
                    fontSize: "30px",
                    fontWeight: "700",
                    marginBottom: "20px",
                  }}
                >
                  {product.price}
                </h2>

                <div
                  style={{
                    display: "grid",
                    gap: "6px",
                    marginBottom: "22px",
                   color: theme.textSecondary,
                    fontSize: "14px",
                  }}
                >
                  <span>✓ Premium Quality</span>
                  <span>✓ Nationwide Delivery</span>
                  <span>✓ WhatsApp Support</span>
                </div>

                <motion.div
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <Link
                    href={`/products/${product.slug}`}
                    style={{
                      display: "block",
                      textAlign: "center",
                      background: "#111",
                      color: "#fff",
                      textDecoration: "none",
                      padding: "15px",
                      borderRadius: "14px",
                      fontWeight: "bold",
                    }}
                  >
                    View Details →
                  </Link>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <QuickViewModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </>
  );
}