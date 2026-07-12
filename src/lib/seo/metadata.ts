import type { Metadata } from "next";
import { getLocationBySlug } from "./locations";
import { getServiceBySlug } from "./services";

const SITE_NAME = "Bhumi Mistry Interiors";
const SITE_URL = "https://bhumi-mistry.vercel.app";

export function generateSEOMetadata(serviceSlug: string, locationSlug: string): Metadata {
  const location = getLocationBySlug(locationSlug);
  const service = getServiceBySlug(serviceSlug);

  if (!location || !service) {
    return { title: "Not Found" };
  }

  const title = `${service.name} in ${location.name} | ${SITE_NAME}`;
  const description = service.description.replace(/\{location\}/g, location.name);
  const canonical = `${SITE_URL}/${serviceSlug}/${locationSlug}`;

  return {
    title,
    description,
    alternates: { canonical },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    robots: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
    },
    keywords: [
      `${service.shortName.toLowerCase()} in ${location.name}`,
      `best ${service.shortName.toLowerCase()} in ${location.name}`,
      `${location.name} interior designer`,
      `home interior ${location.name}`,
      `apartment interior ${location.name}`,
      ...location.nearby.map((n) => `${service.shortName.toLowerCase()} near ${n}`),
    ],
  };
}
