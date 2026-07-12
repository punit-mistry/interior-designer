"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const MATERIALS = [
  {
    name: "Italian Calacatta",
    tone: "linear-gradient(135deg,#f4efe6 0%,#e9e2d4 45%,#cfc6b4 100%)",
    vein: true,
    use: "Kitchen islands, vanity tops",
    finish: "Honed · sealed twice a year",
    note: "Cool underfoot, warm under brass light.",
  },
  {
    name: "Burma Teak",
    tone: "linear-gradient(135deg,#8a5a33 0%,#6e4526 55%,#4e3018 100%)",
    use: "Flooring, floating stairs",
    finish: "Matte PU · oil refresh yearly",
    note: "Grows richer with every monsoon.",
  },
  {
    name: "American Walnut",
    tone: "linear-gradient(135deg,#5c4633 0%,#4a3728 55%,#33251a 100%)",
    use: "Wall panelling, wardrobes",
    finish: "Natural oil · dust with dry cloth",
    note: "The quiet backbone of every room.",
  },
  {
    name: "Board-cast Concrete",
    tone: "linear-gradient(135deg,#b8b2a6 0%,#9c968a 55%,#7d786e 100%)",
    use: "Feature walls, exteriors",
    finish: "Raw · anti-dust sealant",
    note: "Honest texture, softened by linen.",
  },
  {
    name: "Antique Brass",
    tone: "linear-gradient(135deg,#d9b87a 0%,#c2a26b 45%,#8f7443 100%)",
    use: "Handles, line lights, taps",
    finish: "Living finish · patinas naturally",
    note: "Every fingerprint becomes history.",
  },
  {
    name: "Kota Stone",
    tone: "linear-gradient(135deg,#a9ab9c 0%,#8c8f80 55%,#6f7264 100%)",
    use: "Balconies, utility floors",
    finish: "Leather finish · mop with water",
    note: "An Indian classic, reborn.",
  },
];

export default function Materials() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".mat-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.08,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: { trigger: rootRef.current, start: "top 70%" },
        }
      );
    }, rootRef);

    // 3D tilt + light sweep
    const cards = rootRef.current!.querySelectorAll<HTMLElement>(".mat-card");
    const cleanups: Array<() => void> = [];
    cards.forEach((card) => {
      const sheen = card.querySelector<HTMLElement>(".mat-sheen")!;
      const move = (e: MouseEvent) => {
        const r = card.getBoundingClientRect();
        const px = (e.clientX - r.left) / r.width - 0.5;
        const py = (e.clientY - r.top) / r.height - 0.5;
        gsap.to(card, { rotateY: px * 10, rotateX: -py * 10, duration: 0.5, transformPerspective: 700 });
        gsap.to(sheen, { x: px * 120, y: py * 120, opacity: 0.5, duration: 0.5 });
      };
      const leave = () => {
        gsap.to(card, { rotateX: 0, rotateY: 0, duration: 0.8, ease: "elastic.out(1,0.6)" });
        gsap.to(sheen, { opacity: 0, duration: 0.5 });
      };
      card.addEventListener("mousemove", move);
      card.addEventListener("mouseleave", leave);
      cleanups.push(() => {
        card.removeEventListener("mousemove", move);
        card.removeEventListener("mouseleave", leave);
      });
    });

    return () => {
      ctx.revert();
      cleanups.forEach((fn) => fn());
    };
  }, []);

  return (
    <section ref={rootRef} className="bg-ivory px-6 py-28 md:px-16 md:py-40" aria-label="Material library">
      <p className="eyebrow">The Material Library</p>
      <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
        Chosen by hand.
        <span className="italic text-terracotta"> Kept for decades.</span>
      </h2>

      <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {MATERIALS.map((m) => (
          <article
            key={m.name}
            data-cursor="Feel"
            className="mat-card group relative overflow-hidden rounded-sm p-8 text-ivory shadow-[0_20px_60px_rgba(28,25,23,0.12)] will-change-transform"
            style={{ background: m.tone }}
          >
            {m.vein && (
              <div className="pointer-events-none absolute inset-0 opacity-40 [background:repeating-linear-gradient(115deg,transparent_0_38px,rgba(120,110,95,.35)_38px_40px)]" />
            )}
            <div className="mat-sheen pointer-events-none absolute -inset-1/2 rounded-full bg-white/60 opacity-0 blur-3xl" />
            <div className="relative flex h-64 flex-col justify-end mix-blend-luminosity">
              <h3 className="display text-3xl">{m.name}</h3>
            </div>
            <div className="relative mt-6 space-y-1.5 border-t border-white/25 pt-5 text-xs leading-relaxed opacity-0 transition-opacity duration-500 group-hover:opacity-100">
              <p><span className="opacity-60">Used in — </span>{m.use}</p>
              <p><span className="opacity-60">Finish — </span>{m.finish}</p>
              <p className="italic">{m.note}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
