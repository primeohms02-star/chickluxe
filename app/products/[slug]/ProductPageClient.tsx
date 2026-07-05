"use client";

import Link from "next/link";
import { useTheme } from "@/app/context/ThemeContext";
import { colors } from "@/app/theme/colors";

import ProductGallery from "@/app/components/ProductGallery";
import RelatedProducts from "@/app/components/RelatedProducts";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";

type Product = {
  id: number;
  slug: string;
  name: string;
  price: string;
  image: string;
  images: string[];
  description: string;
  badge: string;
  material: string;
  size: string;
  features: string[];
};

type Props = {
  product: Product;
};

export default function ProductPageClient({ product }: Props) {
  const { darkMode } = useTheme();

  const theme = darkMode ? colors.dark : colors.light;

  return (
    <main
      style={{
        background: theme.background,
        minHeight: "100vh",
        padding: "70px 40px",
        transition: "all .35s ease",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        <Link
  href="/"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    marginBottom: "35px",
    color: darkMode ? "#F9FAFB" : "#111",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "16px",
    transition: "all .25s ease",
  }}
>
  ← Back to Collection
</Link>
        {/* Product Section */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit,minmax(420px,1fr))",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* Gallery */}

          <ProductGallery
            images={product.images}
            name={product.name}
          />

          {/* Product Details */}

          <div>
  {product.badge && (
    <span
      style={{
        background: "#F97316",
        color: "#fff",
        padding: "8px 16px",
        borderRadius: "999px",
        fontSize: "13px",
        fontWeight: "bold",
      }}
    >
      {product.badge}
    </span>
  )}

  <h1
    style={{
      fontSize: "48px",
      marginTop: "25px",
      color: theme.text,
      fontWeight: 700,
      lineHeight: 1.2,
    }}
  >
    {product.name}
  </h1>

  <div
    style={{
      color: "#F59E0B",
      fontSize: "22px",
      margin: "18px 0",
    }}
  >
    ★★★★★{" "}
    <span
      style={{
        color: theme.textSecondary,
        fontSize: "16px",
      }}
    >
      (5.0)
    </span>
  </div>

  <h2
    style={{
      color: theme.accent,
      fontSize: "42px",
      fontWeight: "700",
      marginBottom: "22px",
    }}
  >
    {product.price}
  </h2>

  <p
    style={{
      color: theme.textSecondary,
      fontSize: "18px",
      lineHeight: "1.9",
      marginBottom: "35px",
    }}
  >
    {product.description}
  </p>

  {/* Product Details Card */}

  <div
    style={{
      background: theme.card,
      border: `1px solid ${theme.border}`,
      borderRadius: "20px",
      padding: "24px",
      boxShadow: theme.shadow,
      marginBottom: "24px",
      transition: ".35s ease",
    }}
  >
    <h3
      style={{
        color: theme.text,
        marginBottom: "20px",
      }}
    >
      👜 Product Details
    </h3>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        paddingBottom: "14px",
        borderBottom: `1px solid ${theme.border}`,
      }}
    >
      <strong style={{ color: theme.text }}>
        Material
      </strong>

      <span style={{ color: theme.textSecondary }}>
        {product.material}
      </span>
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "18px",
      }}
    >
      <strong style={{ color: theme.text }}>
        Size
      </strong>

      <span style={{ color: theme.textSecondary }}>
        {product.size}
      </span>
    </div>
  </div>
</div>
        </div>

        {/* Related Products */}

        <div
          style={{
            marginTop: "100px",
          }}
        >
          <RelatedProducts currentSlug={product.slug} />
        </div>
      </div>

      <FloatingWhatsApp />
    </main>
  );
}