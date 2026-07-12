"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

const TIMES = ["Morning", "Afternoon", "Golden Hour", "Evening", "Night"];
const DURATION = 8;

export default function Sunlight() {
  const rootRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current!;
    video.pause();

    let targetTime = 0;
    let rafId = 0;

    const trigger = ScrollTrigger.create({
      trigger: rootRef.current,
      start: "top top",
      end: "+=350%",
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        targetTime = self.progress * (video.duration || DURATION);
      },
    });

    const tick = () => {
      rafId = requestAnimationFrame(tick);
      // never queue a seek while one is in flight — stacked seeks cause jank
      if (!video.duration || video.seeking) return;
      const diff = targetTime - video.currentTime;
      if (Math.abs(diff) < 1 / 96) return;
      video.currentTime += diff * 0.2;
    };
    rafId = requestAnimationFrame(tick);

    const ctx = gsap.context(() => {
      const labels = gsap.utils.toArray<HTMLElement>(".sun-label");
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top",
          end: "+=350%",
          scrub: 0.6,
        },
        defaults: { ease: "none" },
      });

      labels.forEach((el) => gsap.set(el, { autoAlpha: 0, y: 14 }));

      labels.forEach((el, i) => {
        const at = i / labels.length;
        const outAt = (i + 1) / labels.length - 0.08;
        tl.to(el, { autoAlpha: 1, y: 0, duration: 0.08 }, at)
          .to(el, { autoAlpha: 0, y: -14, duration: 0.08 }, outAt);
      });

      gsap.to(".sun-lamp", {
        opacity: 1,
        duration: 0.5,
        stagger: 0.1,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top+=75%",
          end: "top top+=85%",
          scrub: 0.3,
        },
      });

      gsap.to(".sun-stars", {
        opacity: 1,
        duration: 0.5,
        scrollTrigger: {
          trigger: rootRef.current,
          start: "top top+=80%",
          end: "top top+=90%",
          scrub: 0.3,
        },
      });
    }, rootRef);

    return () => {
      cancelAnimationFrame(rafId);
      trigger.kill();
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={rootRef}
      className="relative h-[100svh] overflow-hidden bg-charcoal"
      aria-label="A day of changing light in one room"
    >
      <video
        ref={videoRef}
        src="/assets/video-transition-scrub.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* lamps glow up at night */}
      <div className="sun-lamp pointer-events-none absolute left-[52%] top-[46%] h-40 w-40 rounded-full bg-[#ffb35c]/70 opacity-0 blur-3xl" />
      <div className="sun-lamp pointer-events-none absolute left-[76%] top-[52%] h-48 w-48 rounded-full bg-[#ffb35c]/70 opacity-0 blur-3xl" />

      {/* stars */}
      <div className="sun-stars pointer-events-none absolute inset-x-0 top-0 h-1/3 opacity-0">
        {Array.from({ length: 26 }).map((_, i) => (
          <span
            key={i}
            className="absolute h-px w-px rounded-full bg-ivory"
            style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%`, opacity: 0.4 + ((i * 13) % 60) / 100 }}
          />
        ))}
      </div>

      <div className="absolute bottom-10 left-4 z-10 md:bottom-14 md:left-16">
        <p className="eyebrow !text-ivory/60">One Room · One Day</p>
        <div className="relative mt-2 h-12 md:mt-3 md:h-20">
          {TIMES.map((t) => (
            <p key={t} className="sun-label display absolute text-3xl text-ivory opacity-0 md:text-6xl">
              {t}
            </p>
          ))}
        </div>
      </div>
    </section>
  );
}
