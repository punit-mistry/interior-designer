"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const STEPS = [
  "Consultation", "Site Visit", "Planning", "Moodboard",
  "3D Visualisation", "Execution", "Quality Check", "Handover",
];

const STATS = [
  { n: 150, suffix: "+", label: "Luxury Homes" },
  { n: 12, suffix: "+", label: "Cities" },
  { n: 98, suffix: "%", label: "Client Satisfaction" },
  { n: 9, suffix: "+", label: "Years of Practice" },
];

/**
 * WOW 11 — the process draws itself as an SVG line the scroll pulls along.
 * WOW 12 — numbers assemble like structures: frame → walls → count-up.
 */
export default function Process() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // draw the connecting line
      const path = rootRef.current!.querySelector<SVGPathElement>(".proc-line");
      if (path) {
        const len = path.getTotalLength();
        gsap.set(path, { strokeDasharray: len, strokeDashoffset: len });
        gsap.to(path, {
          strokeDashoffset: 0,
          ease: "none",
          scrollTrigger: { trigger: ".proc-wrap", start: "top 75%", end: "bottom 60%", scrub: true },
        });
      }
      gsap.utils.toArray<HTMLElement>(".proc-step").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7, delay: i * 0.02, scrollTrigger: { trigger: el, start: "top 85%" } }
        );
      });

      // numbers build like architecture
      gsap.utils.toArray<HTMLElement>(".stat").forEach((el) => {
        const frame = el.querySelector(".stat-frame");
        const fill = el.querySelector(".stat-fill");
        const num = el.querySelector<HTMLElement>(".stat-num")!;
        const target = Number(num.dataset.n);
        const tl = gsap.timeline({
          scrollTrigger: { trigger: el, start: "top 82%" },
        });
        tl.fromTo(frame, { scaleX: 0 }, { scaleX: 1, duration: 0.5, ease: "power2.out", transformOrigin: "left" })
          .fromTo(fill, { scaleY: 0 }, { scaleY: 1, duration: 0.6, ease: "power2.out", transformOrigin: "bottom" }, "-=0.15")
          .fromTo(
            num,
            { innerText: 0 },
            {
              innerText: target,
              duration: 1.4,
              ease: "power1.inOut",
              snap: { innerText: 1 },
            },
            "-=0.3"
          );
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className="bg-beige px-6 py-28 md:px-16 md:py-40" aria-label="Process and studio numbers">
      <p className="eyebrow">How a Home Happens</p>
      <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
        Eight steps. <span className="italic text-walnut">Zero surprises.</span>
      </h2>

      <div className="proc-wrap relative mt-16">
        <svg className="absolute left-4 top-0 hidden h-full w-8 md:block" viewBox="0 0 20 800" preserveAspectRatio="none" aria-hidden>
          <path className="proc-line" d="M10 0 V800" stroke="#5c4633" strokeWidth="1.5" fill="none" />
        </svg>
        <ol className="space-y-10 md:pl-20">
          {STEPS.map((s, i) => (
            <li key={s} className="proc-step flex items-baseline gap-6 border-b border-walnut/15 pb-8">
              <span className="eyebrow !text-terracotta">{String(i + 1).padStart(2, "0")}</span>
              <span className="display text-3xl md:text-4xl">{s}</span>
            </li>
          ))}
        </ol>
      </div>

      <div className="mt-28 grid grid-cols-2 gap-10 md:grid-cols-4">
        {STATS.map((s) => (
          <div key={s.label} className="stat">
            <div className="stat-frame h-px w-full bg-walnut/40" />
            <div className="stat-fill mt-5 inline-block bg-transparent">
              <p className="display text-6xl text-charcoal md:text-7xl">
                <span className="stat-num" data-n={s.n}>0</span>
                <span className="text-terracotta">{s.suffix}</span>
              </p>
            </div>
            <p className="eyebrow mt-3">{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
