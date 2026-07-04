import Link from "next/link";
import products from "../data/products";

type Props = {
  currentSlug: string;
};

export default function RelatedProducts({ currentSlug }: Props) {
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
          color: "#111",
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
              background: "#fff",
              borderRadius: "20px",
              overflow: "hidden",
              boxShadow: "0 10px 30px rgba(0,0,0,.08)",
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
                  color: "#111",
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
                  background: "#111",
                  color: "#fff",
                  textDecoration: "none",
                  padding: "12px 30px",
                  borderRadius: "40px",
                  fontWeight: "bold",
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