import Link from "next/link";

const links = [
  { label: "Home", href: "/" },
  { label: "Portfolio", href: "/#portfolio" },
  { label: "Services", href: "/#process" },
  { label: "Contact", href: "/#contact" },
  { label: "Blog", href: "/blog" },
];

const socials = [
  {
    label: "Instagram",
    href: "https://instagram.com/bhumimistry",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" /></svg>
    ),
  },
  {
    label: "Pinterest",
    href: "https://pinterest.com/bhumimistry",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.936 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0z" /></svg>
    ),
  },
  {
    label: "Houzz",
    href: "https://houzz.com/pro/bhumimistry",
    svg: (
      <svg viewBox="0 0 24 24" className="h-5 w-5 fill-current"><path d="M1.27 0V24H9.32V16.44H14.68V24H22.73V10.37L6.86 0L1.27 3.69V0Z" /></svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="bg-charcoal px-6 py-16 text-ivory/60 md:px-16 md:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <Link href="/" className="font-display text-2xl tracking-tight text-gold">
              Bhumi Mistry
            </Link>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ivory/50">
              Transforming empty spaces into timeless homes. Premium interior design rooted in Indian craft.
            </p>
            <div className="mt-6 flex gap-4">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="text-ivory/40 transition-colors hover:text-gold"
                >
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-ivory/40">Navigation</p>
            <ul className="space-y-3">
              {links.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-sm transition-colors hover:text-gold"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="mb-4 font-body text-xs uppercase tracking-[0.2em] text-ivory/40">Contact</p>
            <ul className="space-y-3 text-sm">
              <li>
                <a href="mailto:studio@bhumimistry.in" className="transition-colors hover:text-gold">
                  studio@bhumimistry.in
                </a>
              </li>
              <li>
                <a href="tel:+917977653450" className="transition-colors hover:text-gold">
                  +91 79776 53450
                </a>
              </li>
              <li className="text-ivory/40">Ahmedabad · Mumbai · Pune · Surat</li>
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-wrap items-end justify-between gap-4 border-t border-ivory/10 pt-8 text-xs text-ivory/30">
          <p>© {new Date().getFullYear()} Bhumi Mistry Interiors. All rights reserved.</p>
          <p>Rooted in Indian Craft · Est. 2017</p>
        </div>
      </div>
    </footer>
  );
}
