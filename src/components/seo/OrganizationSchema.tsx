const schema = {
  "@context": "https://schema.org",
  "@type": ["Organization", "ProfessionalService"],
  "@id": "https://bhumimistry.in#organization",
  name: "Bhumi Mistry Interiors",
  url: "https://bhumimistry.in",
  logo: "https://bhumimistry.in/logo.png",
  description:
    "Premium residential interior design studio creating timeless homes across India. Specialising in 1BHK, 2BHK and 3BHK interiors, modular kitchens, wardrobes and home renovation.",
  foundingDate: "2017",
  founder: { "@type": "Person", name: "Bhumi Mistry" },
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+917738437601",
      contactType: "customer service",
      email: "studio@bhumimistry.in",
      availableLanguage: ["English", "Hindi", "Gujarati"],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Ahmedabad",
    addressRegion: "Gujarat",
    addressCountry: "IN",
  },
  sameAs: [
    "https://instagram.com/bhumimistry",
    "https://facebook.com/bhumimistry",
    "https://houzz.in/bhumimistry",
  ],
  knowsAbout: [
    "Interior Design",
    "Residential Interior Design",
    "Modular Kitchen Design",
    "Wardrobe Design",
    "False Ceiling Design",
    "Home Renovation",
    "Space Planning",
    "Luxury Interior Design",
    "Apartment Interior Design",
  ],
  areaServed: [
    "Mumbai", "Thane", "Navi Mumbai", "Borivali", "Andheri", "Bandra",
    "Malad", "Kandivali", "Goregaon", "Dahisar", "Mira Road",
    "Mira Bhayandar", "Vasai", "Virar", "Powai", "Ghatkopar",
    "Chembur", "Dadar", "Vashi", "Kharghar", "Nerul", "Panvel",
    "Ahmedabad",
  ],
  priceRange: "₹3.5L – ₹25L",
};

export default function OrganizationSchema() {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
