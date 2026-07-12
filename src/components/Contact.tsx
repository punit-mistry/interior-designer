"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * WOW 15 — the closing experience. The villa sits at golden hour; as you
 * scroll into the footer, night falls, windows glow, stars appear.
 * Mouse movement gently tilts the house.
 */
export default function Contact() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top 70%",
          end: "bottom bottom",
          scrub: 0.8,
        },
      });
      tl.to(".ct-night", { opacity: 0.75, duration: 1 })
        .to(".ct-glow", { opacity: 1, duration: 0.8, stagger: 0.1 }, "-=0.4")
        .to(".ct-star", { opacity: 1, duration: 0.6, stagger: 0.02 }, "-=0.5");
    }, rootRef);

    // subtle mouse tilt on the house
    const house = rootRef.current!.querySelector<HTMLElement>(".ct-house")!;
    const move = (e: MouseEvent) => {
      const r = rootRef.current!.getBoundingClientRect();
      const px = (e.clientX - r.left) / r.width - 0.5;
      const py = (e.clientY - r.top) / r.height - 0.5;
      gsap.to(house, { rotateY: px * 5, rotateX: -py * 3, duration: 0.8, transformPerspective: 1200 });
    };
    rootRef.current!.addEventListener("mousemove", move);

    return () => {
      ctx.revert();
      rootRef.current?.removeEventListener("mousemove", move);
    };
  }, []);

  return (
    <section
      id="contact"
      ref={rootRef}
      className="relative overflow-hidden bg-charcoal px-6 pb-16 pt-28 text-ivory jali-overlay-soft md:px-16 md:pt-40"
      aria-label="Contact"
    >
      {/* stars */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-1/2">
        {Array.from({ length: 40 }).map((_, i) => (
          <span
            key={i}
            className="ct-star absolute h-px w-px rounded-full bg-ivory opacity-0"
            style={{ left: `${(i * 41) % 100}%`, top: `${(i * 29) % 100}%` }}
          />
        ))}
      </div>

      <div className="relative z-10 grid items-center gap-16 lg:grid-cols-2">
        <div className="motif-border pt-6">
          <p className="eyebrow !text-saffron">Begin Your Home</p>
          <h2 className="display mt-4 text-5xl md:text-7xl">
            Let&rsquo;s turn on <span className="italic">the lights.</span>
          </h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-ivory/70">
            One conversation is all it takes to start. Tell us about your
            space — a bare 1BHK, a family villa, a penthouse with too much
            echo — and we&rsquo;ll tell you what it could become.
          </p>
          <div className="mt-6 flex items-baseline gap-4 text-xs text-saffron/60">
            <span className="font-mono text-ivory/20">//</span>
            <span className="italic">आपका घर, हमारी कला</span>
            <span className="text-ivory/30">— your home, our craft</span>
          </div>
          <div className="mt-12 space-y-4 text-sm">
            <a data-cursor="Write" href="mailto:studio@bhumimistry.in" className="block w-fit border-b border-gold/50 pb-1 text-lg transition-colors hover:text-gold">
              studio@bhumimistry.in
            </a>
            <a data-cursor="Call" href="tel:+917977653450" className="block w-fit border-b border-gold/50 pb-1 text-lg transition-colors hover:text-gold">
              +91 79776 53450
            </a>
            <a
              data-cursor="WhatsApp"
              href="https://wa.me/917977653450?text=Hi!%20I'd%20like%20to%20discuss%20interior%20design%20for%20my%20home."
              target="_blank"
              rel="noopener noreferrer"
              className="flex w-fit items-center gap-2 border-b border-green-500/50 pb-1 text-lg text-green-400 transition-colors hover:text-green-300"
            >
              <svg viewBox="0 0 32 32" className="h-5 w-5 fill-current"><path d="M16 0C7.164 0 0 7.164 0 16c0 2.84.74 5.512 2.04 7.832L.7 31.3l7.468-1.34A15.92 15.92 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.2c-2.612 0-5.16-.68-7.368-1.96l-.528-.32-4.432.796.796-4.32-.344-.544A13.08 13.08 0 012.8 16c0-7.28 5.92-13.2 13.2-13.2S29.2 8.72 29.2 16 23.28 29.2 16 29.2zm7.36-10.04c-.4-.2-2.36-1.16-2.72-1.3-.36-.12-.64-.2-.92.2s-1.04 1.3-1.28 1.56c-.24.28-.48.32-.88.12-.4-.2-1.72-.64-3.28-2.04-1.2-1.08-2-2.4-2.24-2.8-.24-.4-.024-.64.18-.84.18-.2.4-.48.6-.72.2-.24.28-.4.4-.68.12-.28.06-.52-.02-.72-.08-.2-.92-2.2-1.24-3-.32-.8-.64-.68-.88-.68-.24-.02-.52-.02-.8-.02-.28 0-.72.1-1.1.52s-1.44 1.4-1.44 3.4c0 2 1.44 3.92 1.64 4.2.2.28 2.76 4.36 6.84 5.96.96.36 1.7.6 2.28.76.96.28 1.84.24 2.52.16.76-.08 2.36-.96 2.68-1.88.32-.92.32-1.72.24-1.88-.08-.16-.28-.28-.68-.48z"/></svg>
              WhatsApp
            </a>
            <p className="pt-4 text-ivory/50">Ahmedabad · Mumbai · Pune · Surat</p>
          </div>
        </div>

        <div className="ct-house relative aspect-[16/10] overflow-hidden rounded-sm will-change-transform">
          <img src="/assets/image-5.png" alt="Modern villa at dusk with reflecting pool" className="absolute inset-0 h-full w-full object-cover" />
          <div className="ct-night absolute inset-0 bg-[#0a1024] opacity-0 mix-blend-multiply" />
          {/* window glows */}
          <div className="ct-glow absolute left-[16%] top-[38%] h-24 w-28 bg-[#ffb35c]/50 opacity-0 blur-2xl" />
          <div className="ct-glow absolute left-[44%] top-[42%] h-24 w-32 bg-[#ffb35c]/50 opacity-0 blur-2xl" />
          <div className="ct-glow absolute right-[10%] top-[34%] h-28 w-40 bg-[#ffb35c]/50 opacity-0 blur-2xl" />
        </div>
      </div>

      <footer className="relative z-10 mt-24 flex flex-wrap items-end justify-between gap-6 border-t border-ivory/10 pt-8">
        <div>
          <p className="display text-2xl">Bhumi Mistry</p>
          <p className="mt-1 text-xs text-saffron/50">भूमि मistry — Interior Design Studio</p>
        </div>
        <p className="eyebrow">Rooted in Indian Craft · Est. 2017 · India</p>
        <p className="text-xs text-ivory/40">© 2026 Bhumi Mistry. All rights reserved.</p>
      </footer>
    </section>
  );
}
