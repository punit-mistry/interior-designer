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
          ? "bg-charcoal/95 shadow-lg shadow-black/10 backdrop-blur-md"
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
          className="font-display text-xl tracking-tight text-gold transition-colors hover:text-saffron"
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
              className="font-body text-xs uppercase tracking-[0.25em] text-ivory/70 transition-colors hover:text-gold"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/917977653450?text=Hi!%20I'd%20like%20to%20discuss%20interior%20design%20for%20my%20home."
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold px-6 py-2.5 font-body text-xs uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-charcoal"
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
            className={`block h-px w-6 bg-ivory transition-all duration-300 ${
              open ? "translate-y-[7px] rotate-45" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ivory transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px w-6 bg-ivory transition-all duration-300 ${
              open ? "-translate-y-[7px] -rotate-45" : ""
            }`}
          />
        </button>
      </nav>

      <div
        className={`fixed inset-0 z-40 flex flex-col items-center justify-center gap-10 bg-charcoal/98 backdrop-blur-xl transition-all duration-500 ${
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
            className="font-display text-4xl text-ivory transition-colors hover:text-gold"
          >
            {link.label}
          </a>
        ))}
        <a
          href="https://wa.me/917977653450?text=Hi!%20I'd%20like%20to%20discuss%20interior%20design%20for%20my%20home."
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 border border-gold px-10 py-4 font-body text-sm uppercase tracking-[0.2em] text-gold transition-colors hover:bg-gold hover:text-charcoal"
        >
          WhatsApp
        </a>
      </div>
    </header>
  );
}
