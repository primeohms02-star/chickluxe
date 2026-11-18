import Image from "next/image";
import Link from "next/link";
import products from "../data/products";

export default function Hero() {
  const bag = products[0];
  return (
    <section id="hero" className="boutique-hero">
      <div className="boutique-intro">
        <p className="boutique-label">CHICKLUXE · HANDBAGS</p>
        <h1>The handbag collection</h1>
        <p>Explore everyday totes, shoulder bags and compact styles, with delivery across Nigeria.</p>
        <a className="boutique-action" href="#products">Shop the collection ↓</a>
      </div>
      <Link className="boutique-feature" href={`/products/${bag.slug}`}>
        <Image src={bag.image} alt={bag.name} width={760} height={1012} unoptimized sizes="(max-width: 700px) 100vw, 50vw" priority />
        <span>{bag.name} <strong>↗</strong></span>
      </Link>
    </section>
  );
}