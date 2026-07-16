import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WhatsAppButton from "@/components/WhatsAppButton";
import Cursor from "@/components/Cursor";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import BackToTop from "@/components/BackToTop";

const SITE_URL = "https://bhumi-mistry.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bhumi Mistry Interiors | Luxury Interior Designer in Ahmedabad & Mumbai",
    template: "%s | Bhumi Mistry Interiors",
  },
  description:
    "Premium interior designer in Ahmedabad, Mumbai & Pune. We design timeless homes — 1BHK, 2BHK, 3BHK interiors, modular kitchens, and complete home renovation. Book a free consultation.",
  alternates: {
    canonical: "https://bhumi-mistry.vercel.app",
  },
  openGraph: {
    siteName: "Bhumi Mistry Interiors",
    locale: "en_IN",
    type: "website",
    url: "https://bhumi-mistry.vercel.app",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    images: "/og-image.png",
  },
  keywords: [
    "interior designer Mumbai",
    "interior designer Ahmedabad",
    "luxury interior design India",
    "home interior designer",
    "2BHK interior design",
    "modular kitchen design",
    "Bhumi Mistry Interiors",
  ],
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180", type: "image/png" }],
  },
  verification: {
    google: "cc93d528db07d8ad",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain">
        <Analytics />
        <OrganizationSchema />
        <Cursor />
        <Navbar />
        <BackToTop />
        <WhatsAppButton />
        {children}
        <Footer />
      </body>
    </html>
  );
}
