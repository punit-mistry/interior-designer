import { LOCATIONS, getLocationBySlug } from "@/lib/seo/locations";
import { getServiceBySlug } from "@/lib/seo/services";
import { getServiceFAQs, FAQ } from "@/lib/seo/faqs";
import {
  localBusinessSchema,
  serviceSchema,
  faqSchema,
  breadcrumbSchema,
  organizationSchema,
  websiteSchema,
} from "@/lib/seo/schemas";

export default function JsonLD({
  serviceSlug,
  locationSlug,
}: {
  serviceSlug: string;
  locationSlug: string;
}) {
  const location = getLocationBySlug(locationSlug);
  const service = getServiceBySlug(serviceSlug);
  if (!location || !service) return null;

  const faqs = getServiceFAQs(serviceSlug, location.name);
  const siteUrl = "https://bhumimistry.in";

  const schemas = [
    organizationSchema(),
    websiteSchema(),
    localBusinessSchema(location),
    serviceSchema(service, location),
    faqSchema(faqs),
    breadcrumbSchema([
      { name: "Home", url: siteUrl },
      { name: service.name, url: `${siteUrl}/${serviceSlug}` },
      { name: `${service.name} in ${location.name}`, url: `${siteUrl}/${serviceSlug}/${locationSlug}` },
    ]),
  ];

  return (
    <>
      {schemas.map((schema, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
