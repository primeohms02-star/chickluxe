"use client";

import { useEffect } from "react";
type LightboxProps = {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  onNext: () => void;
  onPrevious: () => void;
};

export default function Lightbox({
  images,
  currentIndex,
  isOpen,
  onClose,
  onNext,
  onPrevious,
}: LightboxProps) {
  useEffect(() => {
    if (!isOpen) return;

    document.body.style.overflow = "hidden";

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case "Escape":
          onClose();
          break;

        case "ArrowRight":
          onNext();
          break;

        case "ArrowLeft":
          onPrevious();
          break;
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose, onNext, onPrevious]);

  if (!isOpen) return null;

  return (
    <div
      onClick={onClose}
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(0,0,0,.92)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
        padding: "30px",
        animation: "fadeIn .25s ease",
      }}
    >
      {/* Close */}

      <button
        onClick={onClose}
        style={{
          position: "absolute",
          top: "25px",
          right: "30px",
          width: "52px",
          height: "52px",
          borderRadius: "50%",
          border: "none",
          background: "rgba(255,255,255,.15)",
          color: "#fff",
          fontSize: "30px",
          cursor: "pointer",
          transition: ".25s",
        }}
      >
        ×
      </button>

      {/* Previous */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onPrevious();
        }}
        style={{
          position: "absolute",
          left: "30px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: "rgba(255,255,255,.15)",
          color: "#fff",
          fontSize: "30px",
          cursor: "pointer",
          transition: ".25s",
        }}
      >
        ‹
      </button>

      {/* Image */}

      <img
        src={images[currentIndex]}
        alt=""
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "90%",
          maxHeight: "85vh",
          borderRadius: "18px",
          boxShadow: "0 30px 70px rgba(0,0,0,.45)",
          animation: "fadeIn .3s ease",
        }}
      />

      {/* Next */}

      <button
        onClick={(e) => {
          e.stopPropagation();
          onNext();
        }}
        style={{
          position: "absolute",
          right: "30px",
          width: "60px",
          height: "60px",
          borderRadius: "50%",
          border: "none",
          background: "rgba(255,255,255,.15)",
          color: "#fff",
          fontSize: "30px",
          cursor: "pointer",
          transition: ".25s",
        }}
      >
        ›
      </button>

      {/* Counter */}

      <div
        style={{
          position: "absolute",
          bottom: "30px",
          color: "#fff",
          fontSize: "18px",
          letterSpacing: "1px",
        }}
      >
        {currentIndex + 1} / {images.length}
      </div>

      {/* Keyboard Hint */}

      <div
        style={{
          position: "absolute",
          bottom: "65px",
          color: "#bbb",
          fontSize: "14px",
        }}
      >
        ← → Navigate • ESC to Close
      </div>

      <style>
        {`
          @keyframes fadeIn{
            from{
              opacity:0;
            }
            to{
              opacity:1;
            }
          }
        `}
      </style>
    </div>
  );
}