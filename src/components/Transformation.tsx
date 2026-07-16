"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * WOW 1 — Scroll-controlled transformation. The scroll position IS the
 * timeline: the shell brightens into a finished living room, then the
 * camera "walks" (WOW 2) from living room → bedroom → kitchen with
 * scale + pan moves rather than hard cuts.
 */
const STAGES = [
  { label: "01 · Raw Shell", copy: "Bare concrete. Untold potential." },
  { label: "02 · Light & Layers", copy: "Warm light finds walnut and stone." },
  { label: "03 · The Living Room", copy: "Bouclé curves under a floating stair." },
  { label: "04 · The Bedroom", copy: "A quiet room wrapped in linen and wood." },
  { label: "05 · The Kitchen", copy: "Calacatta island, brass line-light." },
];

export default function Transformation() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=420%",
          pin: true,
          scrub: 0.6,
        },
        defaults: { ease: "none" },
      });

      // Stage 1 → 2: raw shell brightens into the finished room
      tl.to(".tf-raw", { opacity: 0, duration: 1 })
        .fromTo(
          ".tf-living",
          { scale: 1.12, filter: "saturate(0.85)" },
          { scale: 1, filter: "saturate(1)", duration: 1 },
          "<"
        )
        // Walkthrough: push into the living room, glide to the bedroom
        .to(".tf-living", { scale: 1.35, xPercent: -8, duration: 1 }, "+=0.3")
        .fromTo(
          ".tf-bedroom",
          { opacity: 0, scale: 1.2, xPercent: 10 },
          { opacity: 1, scale: 1, xPercent: 0, duration: 1 },
          "-=0.6"
        )
        // Bedroom → kitchen
        .to(".tf-bedroom", { scale: 1.3, xPercent: 6, duration: 1 }, "+=0.3")
        .fromTo(
          ".tf-kitchen",
          { opacity: 0, scale: 1.2, xPercent: -10 },
          { opacity: 1, scale: 1, xPercent: 0, duration: 1 },
          "-=0.6"
        );

      // Stage captions tied to overall progress
      const captions = gsap.utils.toArray<HTMLElement>(".tf-caption");
      captions.forEach((cap, i) => {
        const at = i / captions.length + 0.02;
        tl.fromTo(
          cap,
          { autoAlpha: 0, y: 24 },
          { autoAlpha: 1, y: 0, duration: 0.25 },
          at * tl.duration()
        );
        if (i < captions.length - 1) {
          tl.to(
            cap,
            { autoAlpha: 0, y: -24, duration: 0.25 },
            (at + 1 / captions.length - 0.06) * tl.duration()
          );
        }
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[100svh] overflow-hidden bg-charcoal"
      aria-label="Scroll-controlled apartment transformation"
    >
      <img src="/assets/image-2.png" alt="Finished luxury living room with curved bouclé sofas and floating walnut staircase" className="tf-living absolute inset-0 h-full w-full object-cover" />
      <img src="/assets/image-1.png" alt="Unfinished apartment shell with raw concrete walls and exposed wiring, before transformation" aria-hidden className="tf-raw absolute inset-0 h-full w-full object-cover" />
      <img src="/assets/image-3.png" alt="Serene bedroom with walnut headboard wall and warm cove lighting" className="tf-bedroom absolute inset-0 h-full w-full object-cover opacity-0" />
      <img src="/assets/image-4.png" alt="Kitchen with Calacatta marble island and brass pendant lights" className="tf-kitchen absolute inset-0 h-full w-full object-cover opacity-0" />

      <div className="absolute inset-x-0 bottom-0 h-56 bg-gradient-to-t from-charcoal/85 to-transparent" />

      <div className="absolute bottom-12 left-6 z-10 md:left-16">
        {STAGES.map((s) => (
          <div key={s.label} className="tf-caption absolute bottom-0 left-0 w-[80vw] opacity-0 md:w-[36rem]">
            <p className="eyebrow !text-gold">{s.label}</p>
            <p className="display mt-3 text-3xl text-ivory md:text-5xl">{s.copy}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
