"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

const links = [
  { label: "Home", href: "#top" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Services", href: "#process" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (href: string) => {
    setOpen(false);
    if (href === "#top") {
      gsap.to(window, { duration: 1.2, scrollTo: 0, ease: "power4.inOut" });
    } else {
      gsap.to(window, {
        duration: 1.2,
        scrollTo: { y: href, offsetY: 80 },
        ease: "power4.inOut",
      });
    }
  };

  return (
    <header
      ref={navRef}
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-ivory/60 shadow-lg shadow-black/5 backdrop-blur-2xl"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5 md:px-16">
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            scrollTo("#top");
          }}
          className={`font-display text-xl tracking-tight transition-colors hover:text-saffron ${
            scrolled ? "text-charcoal" : "text-gold"
          }`}
        >
          Bhumi Mistry
        </a>

        <div className="hidden items-center gap-10 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollTo(link.href);
              }}
              className={`font-body text-xs uppercase tracking-[0.25em] transition-colors hover:text-gold ${
                scrolled ? "text-charcoal/70" : "text-ivory/70"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/917977653450?text=Hi!%20I'd%20like%20to%20discuss%20interior%20design%20for%20my%20home."
            target="_blank"
            rel="noopener noreferrer"
            className={`border px-6 py-2.5 font-body text-xs uppercase tracking-[0.2em] transition-colors hover:bg-gold hover:text-charcoal ${
              scrolled
                ? "border-charcoal/20 text-charcoal/80 hover:border-gold"
                : "border-gold text-gold"
            }`}
          >
            WhatsApp
          </a>
        </div>

        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 flex flex-col gap-1.5 md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-ivory"
            } ${open ? "translate-y-[7px] rotate-45" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-ivory"
            } ${open ? "opacity-0" : ""}`}
          />
          <span
            className={`block h-px w-6 transition-all duration-300 ${
              scrolled ? "bg-charcoal" : "bg-ivory"
            } ${open ? "-translate-y-[7px] -rotate-45" : ""}`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-ivory/90 backdrop-blur-2xl transition-all duration-500 ${
          open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={(e) => {
              e.preventDefault();
              scrollTo(link.href);
            }}
            className="font-display text-4xl text-charcoal transition-colors hover:text-gold"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/917977653450?text=Hi!%20I'd%20like%20to%20discuss%20interior%20design%20for%20my%20home."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 border border-charcoal/20 px-10 py-4 font-body text-sm uppercase tracking-[0.2em] text-charcoal/80 transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
