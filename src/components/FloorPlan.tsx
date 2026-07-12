"use client";

import { useState } from "react";

type Room = {
  id: string;
  name: string;
  x: number; y: number; w: number; h: number;
  area: string;
  materials: string;
  budget: string;
  timeline: string;
};

const ROOMS: Room[] = [
  { id: "living", name: "Living Room", x: 20, y: 20, w: 300, h: 220, area: "18′ × 14′ · 252 sq ft", materials: "Italian marble · walnut · bouclé", budget: "₹9.5 – 12 L", timeline: "5 weeks" },
  { id: "kitchen", name: "Kitchen & Dining", x: 20, y: 250, w: 300, h: 190, area: "16′ × 12′ · 192 sq ft", materials: "Calacatta · teak · brass", budget: "₹11 – 14 L", timeline: "6 weeks" },
  { id: "bed1", name: "Primary Bedroom", x: 330, y: 20, w: 250, h: 210, area: "15′ × 13′ · 195 sq ft", materials: "Walnut panelling · linen · Kota", budget: "₹7 – 9 L", timeline: "4 weeks" },
  { id: "bath", name: "Bath", x: 330, y: 240, w: 110, h: 200, area: "8′ × 6′ · 48 sq ft", materials: "Micro-cement · antique brass", budget: "₹3 – 4 L", timeline: "3 weeks" },
  { id: "balcony", name: "Balcony", x: 450, y: 240, w: 130, h: 200, area: "10′ × 6′ · 60 sq ft", materials: "Kota stone · planters · cane", budget: "₹1.5 – 2 L", timeline: "2 weeks" },
];

/** WOW 7 — Interactive floor plan drawn as blueprint SVG. */
export default function FloorPlan() {
  const [active, setActive] = useState<Room | null>(null);

  return (
    <section className="bg-[#101418] px-6 py-28 text-ivory md:px-16 md:py-40" aria-label="Interactive floor plan">
      <p className="eyebrow !text-gold">The 1BHK, Annotated</p>
      <h2 className="display mt-4 max-w-3xl text-4xl md:text-6xl">
        Hover a room. <span className="italic">Read its story.</span>
      </h2>

      <div className="mt-16 grid items-center gap-12 lg:grid-cols-[1.4fr_1fr]">
        <svg
          viewBox="0 0 600 460"
          className="w-full rounded-sm border border-ivory/10 bg-[#0b0f14] p-2"
          role="img"
          aria-label="Apartment floor plan with five rooms"
        >
          <defs>
            <pattern id="grid" width="20" height="20" patternUnits="userSpaceOnUse">
              <path d="M20 0H0V20" fill="none" stroke="#1d2733" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="600" height="460" fill="url(#grid)" />
          {ROOMS.map((r) => (
            <g
              key={r.id}
              data-cursor="Enter"
              onMouseEnter={() => setActive(r)}
              onFocus={() => setActive(r)}
              tabIndex={0}
              className="outline-none"
            >
              <rect
                x={r.x} y={r.y} width={r.w} height={r.h}
                fill={active?.id === r.id ? "rgba(194,162,107,0.18)" : "transparent"}
                stroke={active?.id === r.id ? "#c2a26b" : "#3d5166"}
                strokeWidth={active?.id === r.id ? 2 : 1.2}
                style={{ transition: "all .35s ease" }}
              />
              <text
                x={r.x + 14} y={r.y + 28}
                fill={active?.id === r.id ? "#c2a26b" : "#7e94a8"}
                fontSize="13"
                style={{ letterSpacing: "0.12em", textTransform: "uppercase" }}
              >
                {r.name}
              </text>
              {/* door arcs for blueprint flavour */}
              <path
                d={`M ${r.x + 30} ${r.y + r.h} a 26 26 0 0 1 26 -26`}
                fill="none" stroke="#3d5166" strokeWidth="1"
              />
            </g>
          ))}
        </svg>

        <aside className="min-h-[16rem]" aria-live="polite">
          {active ? (
            <div key={active.id} className="animate-[fadeUp_.5s_ease_both]">
              <h3 className="display text-4xl">{active.name}</h3>
              <dl className="mt-8 space-y-5 text-sm">
                <div><dt className="eyebrow !text-gold">Area</dt><dd className="mt-1 text-ivory/85">{active.area}</dd></div>
                <div><dt className="eyebrow !text-gold">Materials</dt><dd className="mt-1 text-ivory/85">{active.materials}</dd></div>
                <div><dt className="eyebrow !text-gold">Estimated Budget</dt><dd className="mt-1 text-ivory/85">{active.budget}</dd></div>
                <div><dt className="eyebrow !text-gold">Timeline</dt><dd className="mt-1 text-ivory/85">{active.timeline}</dd></div>
              </dl>
            </div>
          ) : (
            <p className="max-w-xs text-sm leading-relaxed text-ivory/50">
              Every square foot is planned before a single wall is touched.
              Move across the plan to see area, materials, budget and build
              time for each room.
            </p>
          )}
        </aside>
      </div>

      <style jsx>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(16px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}
