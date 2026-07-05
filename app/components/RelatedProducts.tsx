"use client";

import Link from "next/link";
import products from "../data/products";
import { useTheme } from "@/app/context/ThemeContext";
import { colors } from "@/app/theme/colors";

type Props = {
  currentSlug: string;
};

export default function RelatedProducts({ currentSlug }: Props) {
  const { darkMode } = useTheme();
  const theme = darkMode ? colors.dark : colors.light;

  const relatedProducts = products
    .filter((product) => product.slug !== currentSlug)
    .slice(0, 3);

  return (
    <section
      style={{
        marginTop: "120px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          marginBottom: "50px",
          color: theme.text,
          transition: "all .35s ease",
        }}
      >
        You May Also Like
      </h2>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))",
          gap: "30px",
        }}
      >
        {relatedProducts.map((product) => (
          <div
            key={product.id}
            style={{
              background: theme.card,
              border: `1px solid ${theme.border}`,
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: theme.shadow,
              transition: "all .35s ease",
            }}
          >
            <Link href={`/products/${product.slug}`}>
              <img
                src={product.image}
                alt={product.name}
                style={{
                  width: "100%",
                  height: "280px",
                  objectFit: "cover",
                  cursor: "pointer",
                }}
              />
            </Link>

            <div
              style={{
                padding: "25px",
                textAlign: "center",
              }}
            >
              <Link
                href={`/products/${product.slug}`}
                style={{
                  textDecoration: "none",
                  color: theme.text,
                }}
              >
                <h3>{product.name}</h3>
              </Link>

              <p
                style={{
                  color: "#F97316",
                  fontSize: "22px",
                  fontWeight: "bold",
                  marginTop: "15px",
                }}
              >
                {product.price}
              </p>

              <Link
                href={`/products/${product.slug}`}
                style={{
                  display: "inline-block",
                  marginTop: "20px",
                  background: theme.accent,
                  color: "#fff",
                  textDecoration: "none",
                  padding: "12px 30px",
                  borderRadius: "40px",
                  fontWeight: "bold",
                  transition: "all .35s ease",
                }}
              >
                View Product
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}