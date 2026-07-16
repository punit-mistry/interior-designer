import { MetadataRoute } from "next";
import { LOCATION_SLUGS } from "@/lib/seo/locations";
import { SERVICE_SLUGS } from "@/lib/seo/services";

const SITE_URL = "https://bhumimistry.in";

const BLOG_SLUGS = [
  "small-apartment-interior-design-mumbai",
  "choosing-wood-finishes-for-indian-homes",
  "vastu-alternative-approach",
  "modular-kitchen-cost-guide-2026",
  "layered-lighting-guide",
  "indoor-outdoor-living-indian-homes",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages: MetadataRoute.Sitemap = [
    { url: SITE_URL, lastModified: new Date(), changeFrequency: "weekly", priority: 1.0 },
    { url: `${SITE_URL}/blog`, lastModified: new Date(), changeFrequency: "weekly", priority: 0.8 },
  ];

  const blogPages: MetadataRoute.Sitemap = BLOG_SLUGS.map((slug) => ({
    url: `${SITE_URL}/blog/${slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

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

  return [...staticPages, ...blogPages, ...seoPages];
}
