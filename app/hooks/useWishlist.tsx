"use client";

import { useEffect, useState } from "react";

export default function useWishlist() {
  const [wishlist, setWishlist] = useState<string[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem("wishlist");

    if (saved) {
      setWishlist(JSON.parse(saved));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);

  const toggleWishlist = (slug: string) => {
    setWishlist((prev) =>
      prev.includes(slug)
        ? prev.filter((item) => item !== slug)
        : [...prev, slug]
    );
  };

  const isWishlisted = (slug: string) => wishlist.includes(slug);

  return {
    wishlist,
    toggleWishlist,
    isWishlisted,
  };
}