"use client";

import { useEffect, useState } from "react";
import gsap from "gsap";

export default function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTop = () => {
    gsap.to(window, { duration: 1.2, scrollTo: 0, ease: "power4.inOut" });
  };

  return (
    <button
      onClick={scrollTop}
      aria-label="Back to top"
      className={`fixed bottom-8 left-8 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-gold/40 bg-ivory/80 text-gold backdrop-blur-md transition-all duration-500 hover:border-gold hover:bg-gold hover:text-charcoal ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-4 opacity-0 pointer-events-none"
      }`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round">
        <path d="M12 19V5M5 12l7-7 7 7" />
      </svg>
    </button>
  );
}
