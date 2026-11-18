"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import products from "../data/products";
import QuickViewModal from "./QuickViewModal";
import useWishlist from "../hooks/useWishlist";

export default function Products() {
  const [selected, setSelected] = useState<(typeof products)[number] | null>(null);
  const [size, setSize] = useState("");
  const { toggleWishlist, isWishlisted } = useWishlist();
  const visible = products.filter(bag => !size || bag.size === size);
  return (
    <section id="products" className="boutique-shop">
      <div className="boutique-tools"><h2>Shop handbags</h2>
        <label>Size <select value={size} onChange={event => setSize(event.target.value)}>
          <option value="">All sizes</option>
          {Array.from(new Set(products.map(bag => bag.size))).map(value => <option key={value}>{value}</option>)}
        </select></label>
      </div>
      <p className="boutique-count" role="status">{visible.length} {visible.length === 1 ? "bag" : "bags"}</p>
      <div className="boutique-grid">{visible.map(bag => (
        <article key={bag.slug}>
          <Link href={`/products/${bag.slug}`}>
            <Image src={bag.image} alt={bag.name} width={600} height={600} sizes="(max-width: 560px) 94vw, (max-width: 900px) 46vw, 30vw" />
            <small>{bag.size} · {bag.material}</small>
            <h3>{bag.name}</h3>
          </Link>
          <p>{bag.price}</p>
          <div className="boutique-buttons">
            <button onClick={() => setSelected(bag)}>Quick view</button>
            <button aria-label={`Save ${bag.name}`} aria-pressed={isWishlisted(bag.slug)} onClick={() => toggleWishlist(bag.slug)}>{isWishlisted(bag.slug) ? "♥ Saved" : "♡ Save"}</button>
          </div>
        </article>
      ))}</div>
      <QuickViewModal product={selected} onClose={() => setSelected(null)} />
    </section>
  );
}