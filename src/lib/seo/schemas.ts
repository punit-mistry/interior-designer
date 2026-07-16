import { Location } from "./locations";
import { Service } from "./services";
import { FAQ } from "./faqs";

const SITE_URL = "https://bhumimistry.in";
const BUSINESS_NAME = "Bhumi Mistry Interiors";
const BUSINESS_PHONE = "+917977653450";
const BUSINESS_EMAIL = "studio@bhumimistry.in";
const ADDRESS = {
  street: "Ahmedabad",
  city: "Ahmedabad",
  state: "Gujarat",
  country: "IN",
};

export function localBusinessSchema(location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE_URL}/interior-designer/${location.slug}#business`,
    name: `${BUSINESS_NAME} - ${location.name}`,
    description: `Premium residential interior designer in ${location.name}. Specialising in 1BHK, 2BHK and 3BHK home interiors, modular kitchens, wardrobes and complete home renovation.`,
    url: `${SITE_URL}/interior-designer/${location.slug}`,
    telephone: BUSINESS_PHONE,
    email: BUSINESS_EMAIL,
    address: {
      "@type": "PostalAddress",
      streetAddress: ADDRESS.street,
      addressLocality: location.name,
      addressRegion: location.state,
      addressCountry: ADDRESS.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: location.coordinates.latitude,
      longitude: location.coordinates.longitude,
    },
    areaServed: [location.name, ...location.nearby],
    priceRange: "₹3.5L - ₹25L",
    image: `${SITE_URL}/og-image.jpg`,
    openingHours: "Mo-Su 09:00-20:00",
    sameAs: [
      "https://instagram.com/bhumimistry",
      "https://facebook.com/bhumimistry",
      "https://pinterest.com/bhumimistry",
      "https://houzz.com/pro/bhumimistry",
    ],
  };
}

export function serviceSchema(service: Service, location: Location) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${SITE_URL}/${service.slug}/${location.slug}#service`,
    name: `${service.name} in ${location.name}`,
    description: service.description.replace(/\{location\}/g, location.name),
    provider: {
      "@type": "LocalBusiness",
      "@id": `${SITE_URL}/interior-designer/${location.slug}#business`,
    },
    areaServed: {
      "@type": "City",
      name: location.name,
    },
    serviceType: service.name,
  };
}

export function faqSchema(faqs: FAQ[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: f.answer,
      },
    })),
  };
}

export function breadcrumbSchema(items: { name: string; url: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function reviewSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Review",
    reviewRating: {
      "@type": "Rating",
      ratingValue: "4.9",
      bestRating: "5",
    },
    author: {
      "@type": "Person",
      name: "Bhumi Mistry Clients",
    },
    reviewBody: "Outstanding interior design service. Transformed our home beautifully. Professional team, on-time delivery, and within budget.",
  };
}

export function organizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${SITE_URL}#organization`,
    name: BUSINESS_NAME,
    url: SITE_URL,
    logo: `${SITE_URL}/logo.png`,
    description: "Premium interior designer in Mumbai and Ahmedabad. Specialising in 1BHK, 2BHK and 3BHK home interiors, modular kitchens, wardrobes and complete home renovation across India.",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: BUSINESS_PHONE,
      contactType: "customer service",
      email: BUSINESS_EMAIL,
    },
    address: {
      "@type": "PostalAddress",
      addressLocality: ADDRESS.city,
      addressRegion: ADDRESS.state,
      addressCountry: ADDRESS.country,
    },
    sameAs: [
      "https://instagram.com/bhumimistry",
      "https://facebook.com/bhumimistry",
    ],
  };
}

export function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${SITE_URL}#website`,
    url: SITE_URL,
    name: BUSINESS_NAME,
    description: "Premium interior designer in Mumbai and Ahmedabad creating timeless homes across India.",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${SITE_URL}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };
}
