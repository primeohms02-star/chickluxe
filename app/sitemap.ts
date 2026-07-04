import { MetadataRoute } from "next";
import products from "./data/products";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://chickluxe.store";

  const productPages: MetadataRoute.Sitemap = products.map((product) => ({
    url: `${baseUrl}/products/${product.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    ...productPages,
  ];
}