"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

const ASSETS = [
  "/assets/image-5.png",
  "/assets/image-2.png",
  "/assets/image-4.png",
  "/assets/image-3.png",
  "/assets/img-2.webp",
  "/assets/image-1.png",
];

export default function Lightbox({
  index,
  onClose,
}: {
  index: number | null;
  onClose: () => void;
}) {
  const overlayRef = useRef<HTMLDivElement>(null);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (index === null) return;
    document.body.style.overflow = "hidden";
    const ctx = gsap.context(() => {
      gsap.fromTo(overlayRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 });
      gsap.fromTo(imgRef.current, { scale: 0.92, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: "power3.out" });
    });
    return () => {
      ctx.revert();
      document.body.style.overflow = "";
    };
  }, [index]);

  const onKey = useRef((e: KeyboardEvent) => {
    if (e.key === "Escape") onClose();
  });

  useEffect(() => {
    window.addEventListener("keydown", onKey.current);
    return () => window.removeEventListener("keydown", onKey.current);
  }, []);

  if (index === null) return null;

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/90 p-6 opacity-0"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute right-6 top-6 z-10 text-3xl text-ivory/70 transition-colors hover:text-ivory"
        aria-label="Close lightbox"
      >
        ✕
      </button>
      <button
        onClick={(e) => e.stopPropagation()}
        className="relative flex max-h-full max-w-full items-center justify-center"
      >
        <img
          ref={imgRef}
          src={ASSETS[index]}
          alt=""
          className="max-h-[90vh] max-w-[90vw] rounded-sm object-contain shadow-2xl"
        />
      </button>
    </div>
  );
}
