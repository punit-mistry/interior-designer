"use client";

import { useCallback, useEffect, useRef, useState } from "react";

/**
 * WOW 6 — Before & After. Drag the seam: dust and darkness clear away,
 * furniture and warmth fade in as the reveal widens.
 */
export default function BeforeAfter() {
  const wrapRef = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(38);
  const dragging = useRef(false);

  const setFromClientX = useCallback((clientX: number) => {
    const r = wrapRef.current!.getBoundingClientRect();
    const pct = ((clientX - r.left) / r.width) * 100;
    setPos(Math.min(96, Math.max(4, pct)));
  }, []);

  useEffect(() => {
    const move = (e: PointerEvent) => dragging.current && setFromClientX(e.clientX);
    const up = () => (dragging.current = false);
    window.addEventListener("pointermove", move);
    window.addEventListener("pointerup", up);
    return () => {
      window.removeEventListener("pointermove", move);
      window.removeEventListener("pointerup", up);
    };
  }, [setFromClientX]);

  // as the reveal grows, the whole scene warms up
  const warmth = pos / 100;

  return (
    <section className="bg-charcoal px-6 py-28 text-ivory md:px-16 md:py-40" aria-label="Before and after comparison">
      <p className="eyebrow !text-gold">Before &amp; After</p>
      <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
        Drag the light <span className="italic">across the room.</span>
      </h2>

      <div
        ref={wrapRef}
        data-cursor="Drag"
        className="relative mt-14 aspect-[16/9] w-full touch-none select-none overflow-hidden rounded-sm"
        onPointerDown={(e) => {
          dragging.current = true;
          setFromClientX(e.clientX);
        }}
        role="slider"
        aria-label="Comparison between unfinished and finished bedroom"
        aria-valuenow={Math.round(pos)}
        aria-valuemin={0}
        aria-valuemax={100}
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "ArrowLeft") setPos((p) => Math.max(4, p - 4));
          if (e.key === "ArrowRight") setPos((p) => Math.min(96, p + 4));
        }}
      >
        {/* BEFORE — raw and dusty */}
        <img
          src="/assets/image-3.png"
          alt="Unfinished bedroom before renovation with dust and construction debris"
          aria-hidden
          className="absolute inset-0 h-full w-full object-cover"
          style={{ filter: `saturate(.5) brightness(${0.85 - warmth * 0.15})` }}
        />
        {/* dust motes on the before side */}
        <div className="pointer-events-none absolute inset-0 opacity-30 [background:radial-gradient(2px_2px_at_20%_30%,#fff5,transparent),radial-gradient(2px_2px_at_60%_60%,#fff4,transparent),radial-gradient(1px_1px_at_80%_20%,#fff5,transparent),radial-gradient(2px_2px_at_40%_80%,#fff3,transparent)]" />

        {/* AFTER — clipped by drag position; warms as you reveal */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          <img
            src="/assets/image-3.png"
            alt="Finished bedroom, warm and furnished"
            className="h-full w-full object-cover"
            style={{ filter: `brightness(${0.9 + warmth * 0.18}) saturate(${0.9 + warmth * 0.25})` }}
          />
          <div
            className="pointer-events-none absolute inset-0 bg-gold mix-blend-soft-light"
            style={{ opacity: warmth * 0.3 }}
          />
        </div>

        <div className="ba-handle" style={{ left: `${pos}%` }} />

        <span className="eyebrow absolute bottom-4 left-4 !text-ivory/70">Handover Day −90</span>
        <span className="eyebrow absolute bottom-4 right-4 !text-ivory/70">Handover Day</span>
      </div>
    </section>
  );
}
