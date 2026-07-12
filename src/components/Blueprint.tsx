"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") gsap.registerPlugin(ScrollTrigger);

/**
 * WOW 3 — Blueprint to Reality.
 * The uploaded blueprint animation is scrubbed by scroll: the scrollbar
 * becomes the render timeline (CAD plan → wireframe → photoreal interior).
 */
export default function Blueprint() {
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
      end: "+=300%",
      pin: true,
      scrub: true,
      onUpdate: (self) => {
        if (video.duration) targetTime = self.progress * video.duration;
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
      gsap.fromTo(
        ".bp-title span",
        { y: "110%" },
        {
          y: 0,
          stagger: 0.1,
          ease: "power4.out",
          duration: 1.2,
          scrollTrigger: { trigger: rootRef.current, start: "top 60%" },
        }
      );
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
      aria-label="From blueprint to reality"
    >
      <video
        ref={videoRef}
        src="/assets/video-1-scrub-4k.mp4"
        muted
        playsInline
        preload="auto"
        className="absolute inset-0 h-full w-full object-cover"
      />
      {/* darkening scrim so the copy stays readable over the video */}
      <div className="absolute inset-0 bg-gradient-to-r from-charcoal/85 via-charcoal/45 to-transparent" />
      <div className="relative z-10 mx-auto flex h-full max-w-[1440px] items-center px-6 md:px-16">
        <div className="flex-1">
          <p className="eyebrow !text-gold">The Drawing Becomes the Room</p>
          <h2 className="bp-title display mt-4 text-5xl text-ivory md:text-7xl">
            <span className="line-mask"><span>Blueprint</span></span>
            <span className="line-mask"><span className="italic">to Reality.</span></span>
          </h2>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-ivory/70">
            Keep scrolling — every millimetre of the CAD plan is drawn,
            wireframed, and rendered into the home you can walk through.
          </p>
        </div>
      </div>
    </section>
  );
}
