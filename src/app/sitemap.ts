import { MetadataRoute } from "next";
import { LOCATION_SLUGS } from "@/lib/seo/locations";
import { SERVICE_SLUGS } from "@/lib/seo/services";

const SITE_URL = "https://bhumimistry.in";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
  ];

  const seoPages: MetadataRoute.Sitemap = [];
  for (const serviceSlug of SERVICE_SLUGS) {
    for (const locationSlug of LOCATION_SLUGS) {
      seoPages.push({
        url: `${SITE_URL}/${serviceSlug}/${locationSlug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.7,
      });
    }
  }

  return [...staticPages, ...seoPages];
}
