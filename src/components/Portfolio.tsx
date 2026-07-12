"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const PROJECTS = [
  { img: "/assets/image-5.png", title: "The Monsoon Villa", place: "Alibaug · 6,200 sq ft", year: "2025", tall: true },
  { img: "/assets/image-2.png", title: "House of Quiet Curves", place: "Ahmedabad · 3,400 sq ft", year: "2025" },
  { img: "/assets/image-4.png", title: "Calacatta Kitchen", place: "Pune · 1BHK reborn", year: "2024" },
  { img: "/assets/image-3.png", title: "The Linen Bedroom", place: "Surat · Penthouse", year: "2024", tall: true },
  { img: "/assets/img-2.webp", title: "Plan 19560", place: "Mumbai · In progress", year: "2026" },
];

/**
 * WOW 8 + 9 — Editorial masonry portfolio with depth: each image drifts
 * at its own speed inside its frame (parallax) and scales on hover.
 */
export default function Portfolio() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".pf-item").forEach((item, i) => {
        const img = item.querySelector("img");
        gsap.fromTo(
          img,
          { yPercent: -10 },
          {
            yPercent: 10,
            ease: "none",
            scrollTrigger: { trigger: item, start: "top bottom", end: "bottom top", scrub: true },
          }
        );
        gsap.fromTo(
          item,
          { y: 80, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            delay: (i % 2) * 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 85%" },
          }
        );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="portfolio" ref={rootRef} className="bg-ivory px-6 py-28 md:px-16 md:py-40" aria-label="Selected projects">
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="eyebrow">Selected Work</p>
          <h2 className="display mt-4 text-4xl md:text-6xl">
            Homes with <span className="italic text-terracotta">their own weather.</span>
          </h2>
        </div>
        <p className="max-w-xs text-sm leading-relaxed text-stone">
          Nine years, twelve cities, one obsession: rooms that feel inevitable
          the moment you walk in.
        </p>
      </div>

      <div className="mt-16 columns-1 gap-6 sm:columns-2 [column-fill:balance]">
        {PROJECTS.map((p) => (
          <a
            key={p.title}
            href="#contact"
            data-cursor="Open"
            className="pf-item group mb-6 block break-inside-avoid overflow-hidden rounded-sm"
          >
            <div className={`relative overflow-hidden ${p.tall ? "aspect-[4/5]" : "aspect-[16/11]"}`}>
              <img
                src={p.img}
                alt={p.title}
                loading="lazy"
                className="absolute inset-0 h-[120%] w-full scale-105 object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/70 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <div className="absolute inset-x-0 bottom-0 translate-y-4 p-7 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="eyebrow !text-gold">{p.year} · {p.place}</p>
              </div>
            </div>
            <div className="flex items-baseline justify-between py-5">
              <h3 className="display text-2xl transition-colors duration-300 group-hover:text-terracotta md:text-3xl">
                {p.title}
              </h3>
              <span className="eyebrow">View →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
