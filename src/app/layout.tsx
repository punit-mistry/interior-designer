import type { Metadata } from "next";
import "@fontsource-variable/fraunces";
import "@fontsource-variable/manrope";
import "./globals.css";
import OrganizationSchema from "@/components/seo/OrganizationSchema";
import WhatsAppButton from "@/components/WhatsAppButton";

const SITE_URL = "https://bhumimistry.in";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Bhumi Mistry — Luxury Interior Design Studio",
    template: "%s | Bhumi Mistry Interiors",
  },
  description:
    "Transforming empty spaces into timeless homes. Premium residential interior design across India — bespoke materials, warm light, and architecture that breathes.",
  openGraph: {
    siteName: "Bhumi Mistry Interiors",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
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
    google: "YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className="grain">
        <OrganizationSchema />
        <WhatsAppButton />
        {children}
      </body>
    </html>
  );
}
