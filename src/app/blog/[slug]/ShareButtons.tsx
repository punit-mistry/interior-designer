"use client";

export default function ShareButtons({ url, title }: { url: string; title: string }) {
  const encoded = encodeURIComponent(url);
  const text = encodeURIComponent(`${title} | Bhumi Mistry Interiors`);

  return (
    <div className="mt-12 border-t border-charcoal/10 pt-8">
      <p className="eyebrow mb-4 text-stone/60">Share this article</p>
      <div className="flex flex-wrap gap-3">
        <a
          href={`https://wa.me/?text=${text}%20${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-green-500/30 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-green-600 transition-colors hover:border-green-500 hover:bg-green-500 hover:text-white"
        >
          <svg viewBox="0 0 32 32" className="h-4 w-4 fill-current"><path d="M16 0C7.164 0 0 7.164 0 16c0 2.84.74 5.512 2.04 7.832L.7 31.3l7.468-1.34A15.92 15.92 0 0016 32c8.836 0 16-7.164 16-16S24.836 0 16 0zm0 29.2c-2.612 0-5.16-.68-7.368-1.96l-.528-.32-4.432.796.796-4.32-.344-.544A13.08 13.08 0 012.8 16c0-7.28 5.92-13.2 13.2-13.2S29.2 8.72 29.2 16 23.28 29.2 16 29.2zm7.36-10.04c-.4-.2-2.36-1.16-2.72-1.3-.36-.12-.64-.2-.92.2s-1.04 1.3-1.28 1.56c-.24.28-.48.32-.88.12-.4-.2-1.72-.64-3.28-2.04-1.2-1.08-2-2.4-2.24-2.8-.24-.4-.024-.64.18-.84.18-.2.4-.48.6-.72.2-.24.28-.4.4-.68.12-.28.06-.52-.02-.72-.08-.2-.92-2.2-1.24-3-.32-.8-.64-.68-.88-.68-.24-.02-.52-.02-.8-.02-.28 0-.72.1-1.1.52s-1.44 1.4-1.44 3.4c0 2 1.44 3.92 1.64 4.2.2.28 2.76 4.36 6.84 5.96.96.36 1.7.6 2.28.76.96.28 1.84.24 2.52.16.76-.08 2.36-.96 2.68-1.88.32-.92.32-1.72.24-1.88-.08-.16-.28-.28-.68-.48z"/></svg>
          WhatsApp
        </a>
        <a
          href={`https://twitter.com/intent/tweet?text=${text}&url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-charcoal/20 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-charcoal/70 transition-colors hover:bg-charcoal hover:text-ivory"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
          X / Twitter
        </a>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=${encoded}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 rounded-full border border-blue-500/30 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-blue-600 transition-colors hover:border-blue-600 hover:bg-blue-600 hover:text-white"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
          LinkedIn
        </a>
        <button
          onClick={() => { navigator.clipboard?.writeText(url); }}
          className="flex items-center gap-2 rounded-full border border-gold/30 px-5 py-2.5 text-xs uppercase tracking-[0.15em] text-gold transition-colors hover:border-gold hover:bg-gold hover:text-charcoal"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4 fill-none stroke-current" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" /><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" /></svg>
          Copy link
        </button>
      </div>
    </div>
  );
}
