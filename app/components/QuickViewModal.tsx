"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "@/app/context/ThemeContext";
import { colors } from "@/app/theme/colors";
type Product = {
  slug: string;
  name: string;
  image: string;
  images?: string[];
  price: string;
  description: string;
  badge?: string;
};

type Props = {
  product: Product | null;
  onClose: () => void;
};

export default function QuickViewModal({
  product,
  onClose,
}: Props) {
  const { darkMode } = useTheme();

const theme = darkMode ? colors.dark : colors.light;
  const images =
    product?.images && product.images.length > 0
      ? product.images
      : product
      ? [product.image]
      : [];

  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    setCurrentImage(0);
  }, [product]);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!product) return;

      if (event.key === "Escape") {
        onClose();
      }

      if (event.key === "ArrowRight") {
        setCurrentImage((prev) => (prev + 1) % images.length);
      }

      if (event.key === "ArrowLeft") {
        setCurrentImage(
          (prev) => (prev - 1 + images.length) % images.length
        );
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [product, images.length, onClose]);

  const nextImage = () =>
    setCurrentImage((prev) => (prev + 1) % images.length);

  const previousImage = () =>
    setCurrentImage(
      (prev) => (prev - 1 + images.length) % images.length
    );
useEffect(() => {
  if (!product) return;

  const originalOverflow = document.body.style.overflow;

  document.body.style.overflow = "hidden";

  return () => {
    document.body.style.overflow = originalOverflow;
  };
}, [product]);
if (!product) return null;
  return (
    <AnimatePresence>
      <motion.div
  onClick={onClose}
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  exit={{ opacity: 0 }}
  style={{
    position: "fixed",
    inset: 0,
    background: "rgba(0,0,0,.72)",
    backdropFilter: "blur(8px)",
    zIndex: 9999,

    display: "flex",
    justifyContent: "center",
    alignItems: "flex-start",

    overflowY: "auto",

    padding: "40px 20px",
  }}
>
      
        <motion.div
  onClick={(e) => e.stopPropagation()}
  initial={{
  opacity:0,
  scale:.96,
  y:25,
}}
  animate={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}
  exit={{
    opacity: 0,
    scale: 0.95,
  }}
 transition={{
 duration:.35,
 ease:"easeOut"
}}
 style={{
  position: "relative",
  width: "100%",
  maxWidth: "1100px",

  margin: "40px 0",

  maxHeight: "90vh",

  overflowY: "auto",

  background: theme.surface,

  borderRadius: "28px",

  display: "grid",

  gridTemplateColumns:
    "repeat(auto-fit,minmax(420px,1fr))",

  boxShadow: darkMode
    ? "0 40px 90px rgba(0,0,0,.65)"
    : "0 40px 90px rgba(0,0,0,.30)",

  border: darkMode
    ? "1px solid rgba(255,255,255,.08)"
    : "1px solid rgba(0,0,0,.06)",
}}
>
  {/* Close Button */}

<motion.button
  whileHover={{
    scale: 1.08,
    rotate: 90,
  }}
  whileTap={{
    scale: 0.92,
  }}
  onClick={onClose}
  style={{
    position: "absolute",
    top: "18px",
    right: "18px",
    width: "46px",
    height: "46px",
    borderRadius: "50%",
    border: "none",
    cursor: "pointer",
    zIndex: 100,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    background: darkMode
      ? "rgba(30,30,30,.95)"
      : "rgba(255,255,255,.95)",
    color: theme.text,
    fontSize: "28px",
    fontWeight: 500,
    boxShadow: darkMode
      ? "0 10px 25px rgba(0,0,0,.45)"
      : "0 10px 25px rgba(0,0,0,.15)",
  }}
>
  ×
</motion.button>
          {/* LEFT */}

          <div
            style={{
             background: theme.background,
              padding: "25px",
            }}
          >
            <div
              style={{
                position: "relative",
                borderRadius: "22px",
                overflow: "hidden",
                background: theme.card,
              }}
            >
              <motion.img
                key={currentImage}
                src={images[currentImage]}
                alt={product.name}
                initial={{
                  opacity: 0,
                  scale: 1.05,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  duration: 0.3,
                }}
                style={{
                  width: "100%",
                  display: "block",
                }}
              />

              {images.length > 1 && (
                <>
                  <button
                    onClick={previousImage}
                    style={{
                      position: "absolute",
                      left: "15px",
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "none",
                      cursor: "pointer",
                      background: darkMode
  ? "rgba(25,25,25,.95)"
  : "rgba(255,255,255,.95)",

color: theme.text,
                      fontSize: "22px",
                    }}
                  >
                    ‹
                  </button>

                  <button
                    onClick={nextImage}
                    style={{
                      position: "absolute",
                      right: "15px",
                      top: "50%",
                      transform:
                        "translateY(-50%)",
                      width: "44px",
                      height: "44px",
                      borderRadius: "50%",
                      border: "none",
                      cursor: "pointer",
                      background: darkMode
  ? "rgba(25,25,25,.95)"
  : "rgba(255,255,255,.95)",

color: theme.text,
                      fontSize: "22px",
                    }}
                  >
                    ›
                  </button>

                  <div
                    style={{
                      position: "absolute",
                      bottom: "18px",
                      right: "18px",
                      background:
                        "rgba(0,0,0,.55)",
                      color: "#fff",
                      padding:
                        "8px 14px",
                      borderRadius: "999px",
                      fontSize: "13px",
                    }}
                  >
                    {currentImage + 1} / {images.length}
                  </div>
                </>
              )}
            </div>

            {images.length > 1 && (
              <div
                style={{
                  display: "flex",
                  gap: "12px",
                  marginTop: "18px",
                  overflowX: "auto",
                }}
              >
                {images.map((image, index) => (
                  <img
                    key={image}
                    src={image}
                    onClick={() =>
                      setCurrentImage(index)
                    }
                    style={{
                      width: "82px",
                      height: "82px",
                      objectFit: "cover",
                      cursor: "pointer",
                      borderRadius: "12px",
                      border:
                        currentImage === index
                          ? "3px solid #F97316"
                         : `2px solid ${theme.border}`
                    }}
                  />
                ))}
              </div>
            )}
          </div>

          {/* RIGHT */}
                    <div
            style={{
              padding: "45px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            {product.badge && (
              <span
                style={{
                  display: "inline-block",
                  background: "#F97316",
                  color: "#fff",
                  padding: "8px 14px",
                  borderRadius: "999px",
                  fontSize: "12px",
                  fontWeight: "bold",
                  width: "fit-content",
                  marginBottom: "18px",
                }}
              >
                {product.badge}
              </span>
            )}

            <h2
              style={{
                fontSize: "40px",
                color: theme.text,
                marginBottom: "15px",
                lineHeight: "1.2",
              }}
            >
              {product.name}
            </h2>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                marginBottom: "20px",
                color: "#F59E0B",
                fontSize: "18px",
              }}
            >
              ★★★★★
              <span
                style={{
                 color: theme.textSecondary,
                  fontSize: "15px",
                }}
              >
                (5.0)
              </span>
            </div>

            <h3
              style={{
                color: "#F97316",
                fontSize: "34px",
                marginBottom: "20px",
              }}
            >
              {product.price}
            </h3>

            <p
              style={{
                color: theme.textSecondary,
                lineHeight: "1.9",
                fontSize: "17px",
                marginBottom: "30px",
              }}
            >
              {product.description}
            </p>

            <div
              style={{
               background: theme.background,
                borderRadius: "18px",
                padding: "22px",
                marginBottom: "30px",
              }}
            >
              <h4
                style={{
                  marginBottom: "15px",
                  color: theme.text,
                }}
              >
                Why Shop With CHICKLUXE?
              </h4>

              <div
                style={{
                  display: "grid",
                  gap: "12px",
                 color: theme.textSecondary,
                  fontSize: "15px",
                }}
              >
                <span>✓ Premium Imported Handbags</span>
                <span>✓ Nationwide Delivery</span>
                <span>✓ Secure WhatsApp Ordering</span>
                <span>✓ Carefully Inspected Before Shipping</span>
                <span>✓ Fast Customer Support</span>
              </div>
            </div>

            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <Link
                href={`/products/${product.slug}`}
                onClick={onClose}
                style={{
                  flex: 1,
                  minWidth: "180px",
                  textAlign: "center",
                 background: theme.accent,
                  color: "#fff",
                  textDecoration: "none",
                  padding: "16px",
                  borderRadius: "14px",
                  fontWeight: "bold",
                }}
              >
                View Details
              </Link>

              <a
                href={`https://wa.me/2349166964067?text=${encodeURIComponent(
                  `Hello CHICKLUXE! I'd like to order the ${product.name} (${product.price}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  flex: 1,
                  minWidth: "180px",
                  textAlign: "center",
                  background: "#25D366",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "16px",
                  borderRadius: "14px",
                  fontWeight: "bold",
                }}
              >
                Order on WhatsApp
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}