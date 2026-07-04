"use client";

import { useState } from "react";
import Lightbox from "./Lightbox";

type ProductGalleryProps = {
  images: string[];
  name: string;
};

export default function ProductGallery({
  images,
  name,
}: ProductGalleryProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  return (
    <>
      <div>
        {/* Main Image */}

        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          onClick={() => setLightboxOpen(true)}
          style={{
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "0 20px 45px rgba(0,0,0,.12)",
            background: "#fff",
            cursor: "zoom-in",
          }}
        >
          <img
            src={images[currentIndex]}
            alt={name}
            style={{
              width: "100%",
              display: "block",
              transition: "transform .45s ease",
              transform: isHovered ? "scale(1.08)" : "scale(1)",
            }}
          />
        </div>

        {/* Thumbnails */}

        <div
          style={{
            display: "flex",
            gap: "15px",
            marginTop: "20px",
            flexWrap: "wrap",
          }}
        >
          {images.map((image, index) => (
            <img
              key={image}
              src={image}
              alt={name}
              onClick={() => setCurrentIndex(index)}
              style={{
                width: "85px",
                height: "85px",
                objectFit: "cover",
                borderRadius: "12px",
                cursor: "pointer",
                border:
                  currentIndex === index
                    ? "3px solid #F97316"
                    : "2px solid #ddd",
                transition: ".25s",
                transform:
                  currentIndex === index
                    ? "scale(1.05)"
                    : "scale(1)",
              }}
            />
          ))}
        </div>
      </div>

      <Lightbox
        images={images}
        currentIndex={currentIndex}
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        onNext={() =>
          setCurrentIndex((prev) =>
            prev === images.length - 1 ? 0 : prev + 1
          )
        }
        onPrevious={() =>
          setCurrentIndex((prev) =>
            prev === 0 ? images.length - 1 : prev - 1
          )
        }
      />
    </>
  );
}