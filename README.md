# Bhumi Mistry Interiors — Luxury Interior Design Studio

A high-performance Next.js 14 website for **Bhumi Mistry Interiors** featuring 270+ programmatic local SEO landing pages, WhatsApp integration, GSAP scroll animations, and semantic schema markup.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** GSAP + Lenis (smooth scroll)
- **SEO:** 270+ programmatic location-service pages, JSON-LD schemas (LocalBusiness, Service, FAQ, Breadcrumb, Product, Website)
- **Forms:** WhatsApp direct chat integration

## Features

- **270+ SEO Pages** — One page per service per location across 22 Mumbai / Navi Mumbai / Thane areas
- **Schema Markup** — Rich snippets for LocalBusiness, Service, FAQ, BreadcrumbList, Product, WebSite
- **GSAP Scroll Animations** — Hero parallax, sunlight/blueprint video scrubbing, marquee ticker
- **WhatsApp Integration** — Floating chat button + inline CTA links
- **Indian Design Aesthetic** — Jali patterns, indigo/saffron/rust palette, bespoke typography
- **Fully Responsive** — Mobile-first, adaptive layouts throughout

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Project Structure

```
src/
├── app/
│   ├── (seo)/[serviceSlug]/[locationSlug]/   # 270 static SEO pages
│   ├── layout.tsx                             # Root layout + OrganizationSchema
│   └── page.tsx                               # Home page
├── components/                                # React components
│   ├── seo/                                   # OrganizationSchema, JsonLD
│   ├── WhatsAppButton.tsx                     # Floating WhatsApp bubble
│   ├── Hero.tsx, Sunlight.tsx, Blueprint.tsx  # Scroll-animated sections
│   ├── Contact.tsx, Testimonials.tsx          # Content sections
│   └── ...
├── lib/seo/                                   # SEO data layer
│   ├── locations.ts                           # 22 location definitions
│   ├── services.ts                            # 13 service definitions
│   ├── schemas.ts                             # JSON-LD generators
│   ├── faqs.ts                                # FAQ content
│   └── metadata.ts                            # Page metadata builders
└── ...
```

## Key Configuration

- **Phone:** +91 77384 37601
- **WhatsApp:** 917738437601
- **Site:** https://bhumimistry.in
- **Email:** studio@bhumimistry.in

## Environment Variables

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_SITE_URL` | Site URL (default: https://bhumimistry.in) |

## License

All rights reserved — Bhumi Mistry Interiors.
