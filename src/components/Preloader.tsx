"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Preloader() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".pre-word", { opacity: 1, letterSpacing: "0.4em", duration: 1.2, ease: "power2.out" })
      .to(ref.current, { yPercent: -100, duration: 1, ease: "power4.inOut", delay: 0.3 })
      .set(ref.current, { display: "none" });
  }, []);
  return (
    <div ref={ref} className="fixed inset-0 z-[95] flex items-center justify-center bg-charcoal">
      <p className="pre-word eyebrow !text-gold opacity-0" style={{ letterSpacing: "0.15em" }}>
        Bhumi Mistry
      </p>
    </div>
  );
}
