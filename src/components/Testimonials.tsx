"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const QUOTES = [
  {
    text: "We handed over an empty shell and got back a home that already felt lived-in and loved.",
    who: "Riya & Kunal Shah · Ahmedabad",
    pos: "md:absolute md:left-[8%] md:top-[22%]",
  },
  {
    text: "The team treated our 1BHK with the seriousness of a villa. Every centimetre earns its place.",
    who: "Meera Iyer · Pune",
    pos: "md:absolute md:right-[10%] md:top-[40%]",
  },
  {
    text: "Guests sit on the stairs just to stay in the light a little longer.",
    who: "The Deshpandes · Alibaug",
    pos: "md:absolute md:left-[16%] md:bottom-[14%]",
  },
];

/** WOW 13 — quotes float inside the living room itself. */
export default function Testimonials() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray<HTMLElement>(".quote").forEach((q, i) => {
        gsap.fromTo(
          q,
          { opacity: 0, y: 30, scale: 0.96 },
          {
            opacity: 1, y: 0, scale: 1,
            duration: 1, delay: i * 0.25, ease: "power3.out",
            scrollTrigger: { trigger: rootRef.current, start: "top 55%" },
          }
        );
        // gentle float
        gsap.to(q, { y: "+=10", duration: 3 + i, yoyo: true, repeat: -1, ease: "sine.inOut" });
      });
    }, rootRef);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative min-h-[100svh] overflow-hidden bg-charcoal"
      aria-label="Client words, in the rooms they live in"
    >
      <img src="/assets/image-2.png" alt="" aria-hidden className="absolute inset-0 h-full w-full object-cover opacity-90" />
      <div className="absolute inset-0 bg-charcoal/35" />

      <div className="relative z-10 px-6 pt-24 md:px-16">
        <p className="eyebrow !text-gold">Words, Left in the Room</p>
        <h2 className="display mt-4 text-4xl text-ivory md:text-6xl">The people who live here.</h2>
      </div>

      <div className="relative z-10 mx-auto mt-12 flex max-w-lg flex-col gap-6 px-6 md:absolute md:inset-0 md:mt-0 md:max-w-none md:px-0">
        {QUOTES.map((q) => (
          <figure
            key={q.who}
            className={`quote ${q.pos} max-w-[17rem] rounded-sm border border-ivory/15 bg-charcoal/55 p-6 text-ivory shadow-2xl backdrop-blur-md md:max-w-xs`}
          >
            <blockquote className="display text-lg italic leading-snug">“{q.text}”</blockquote>
            <figcaption className="eyebrow mt-4 !text-gold">{q.who}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
