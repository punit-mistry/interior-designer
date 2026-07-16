"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function Hero() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.4 });
      tl.to(".hero-img", { scale: 1, opacity: 1, duration: 2.2, ease: "power2.out" })
        .to(
          ".line-mask > span",
          { y: 0, duration: 1.4, ease: "power4.out", stagger: 0.12 },
          "-=1.6"
        )
        .to(".hero-scroll", { opacity: 1, duration: 1 }, "-=0.6");
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      id="top"
      className="relative h-[100svh] overflow-hidden bg-charcoal jali-overlay"
      aria-label="Introduction"
    >
      {/* raw, unlit shell — the story starts empty */}
      <img
        src="/assets/image-1.png"
        alt="An empty, unfinished apartment shell in low light"
        className="hero-img absolute inset-0 h-full w-full scale-110 object-cover opacity-0"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-indigo/30 to-charcoal/50" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />

      <div className="relative z-10 flex h-full flex-col items-center justify-center px-6 text-center">
        <p className="eyebrow mb-8 !text-saffron/70">
          भूमि मistry · Interior Design Studio · India
        </p>
        <h1 className="display max-w-5xl text-[11vw] leading-[0.95] text-ivory md:text-[6.5vw]">
          <span className="line-mask">
            <span>Interior Designer</span>
          </span>
          <span className="line-mask">
            <span className="italic text-gold">Transforming Empty Spaces</span>
          </span>
          <span className="line-mask">
            <span>Into Timeless Homes.</span>
          </span>
        </h1>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-ivory/50">
          Premium interior design in Ahmedabad, Mumbai &amp; Pune. Rooted in Indian craft. Shaped for modern living.
        </p>
      </div>

      <div className="hero-scroll absolute bottom-10 left-1/2 z-10 -translate-x-1/2 text-center opacity-0">
        <p className="eyebrow !text-ivory/60">Scroll to Experience</p>
        <div className="mx-auto mt-4 h-14 w-px overflow-hidden bg-ivory/20">
          <div className="h-1/2 w-full animate-pulse bg-gold" />
        </div>
      </div>
    </section>
  );
}
