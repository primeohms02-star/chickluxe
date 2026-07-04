import products from "@/app/data/products";
import Link from "next/link";
import { notFound } from "next/navigation";
import FloatingWhatsApp from "@/app/components/FloatingWhatsApp";
import ProductGallery from "@/app/components/ProductGallery";
import RelatedProducts from "@/app/components/RelatedProducts";

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const product = products.find((p) => p.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main
      style={{
        background: "#FFF8F2",
        minHeight: "100vh",
        padding: "70px 40px",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
        }}
      >
        {/* Product Section */}

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(420px,1fr))",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* Product Gallery */}

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
                color: "#111",
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
              ★★★★★ <span style={{ color: "#666", fontSize: "16px" }}>(5.0)</span>
            </div>

            <h2
              style={{
                color: "#F97316",
                fontSize: "40px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              {product.price}
            </h2>

            <p
              style={{
                color: "#555",
                fontSize: "18px",
                lineHeight: "1.8",
              }}
            >
              {product.description}
            </p>

            {/* Product Details Card */}

            <div
              style={{
                marginTop: "35px",
                background: "#fff",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,.06)",
              }}
            >
              <h3
                style={{
                  marginBottom: "20px",
                  color: "#111",
                }}
              >
                👜 Product Details
              </h3>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  borderBottom: "1px solid #eee",
                  paddingBottom: "14px",
                }}
              >
                <strong>Material</strong>
                <span>{product.material}</span>
              </div>

              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginTop: "18px",
                }}
              >
                <strong>Size</strong>
                <span>{product.size}</span>
              </div>
            </div>

            {/* Features Card */}

            <div
              style={{
                marginTop: "25px",
                background: "#fff",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,.06)",
              }}
            >
              <h3
                style={{
                  marginBottom: "18px",
                }}
              >
                ✨ Why You'll Love It
              </h3>

              <ul
                style={{
                  lineHeight: "2.1",
                  color: "#555",
                  paddingLeft: "18px",
                }}
              >
                {product.features.map((feature) => (
                  <li key={feature}>✓ {feature}</li>
                ))}
              </ul>
            </div>

            {/* Premium Purchase Card */}

            <div
              style={{
                marginTop: "30px",
                background: "#fff",
                borderRadius: "22px",
                padding: "28px",
                boxShadow: "0 15px 35px rgba(0,0,0,.08)",
                border: "1px solid #f2f2f2",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  marginBottom: "20px",
                }}
              >
                <span
                  style={{
                    width: "12px",
                    height: "12px",
                    borderRadius: "50%",
                    background: "#22C55E",
                  }}
                />

                <span
                  style={{
                    color: "#22C55E",
                    fontWeight: "bold",
                  }}
                >
                  In Stock
                </span>
              </div>

              <a
                href={`https://wa.me/2349166964067?text=${encodeURIComponent(
                  `Hello CHICKLUXE! I'd like to order the ${product.name} (${product.price}).`
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: "block",
                  textAlign: "center",
                  background: "#25D366",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "18px",
                  borderRadius: "14px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                💬 Order on WhatsApp
              </a>

              <div
                style={{
                  marginTop: "25px",
                  display: "grid",
                  gap: "14px",
                  color: "#555",
                }}
              >
                <p>🚚 Nationwide Delivery (2–7 Business Days)</p>

                <p>🔒 Secure WhatsApp Ordering</p>

                <p>💎 Premium Quality Guaranteed</p>

                <p>📦 Carefully Packaged Before Shipping</p>

                <p>⭐ Trusted by Hundreds of Happy Customers</p>
              </div>
            </div>

            {/* Shopping Trust Card */}

            <div
              style={{
                marginTop: "30px",
                background: "#fff",
                borderRadius: "20px",
                padding: "25px",
                boxShadow: "0 10px 25px rgba(0,0,0,.06)",
              }}
            >
              <h3
                style={{
                  marginBottom: "18px",
                  color: "#111",
                }}
              >
                🛍 Why Shop With CHICKLUXE?
              </h3>

              <div
                style={{
                  display: "grid",
                  gap: "14px",
                  color: "#555",
                  lineHeight: "1.8",
                }}
              >
                <p>✓ Premium Imported Handbags</p>

                <p>✓ Nationwide Delivery Across Nigeria</p>

                <p>✓ Fast WhatsApp Customer Support</p>

                <p>✓ Carefully Inspected Before Shipping</p>

                <p>✓ Trusted by Hundreds of Customers</p>
              </div>
            </div>

            {/* Back Button */}

            <div
              style={{
                marginTop: "35px",
              }}
            >
              <Link
                href="/"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#111",
                  textDecoration: "none",
                  fontWeight: "bold",
                }}
              >
                ← Back to Collection
              </Link>
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