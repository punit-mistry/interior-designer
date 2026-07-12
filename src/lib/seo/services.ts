export interface Service {
  slug: string;
  name: string;
  shortName: string;
  metaTitleSuffix: string;
  h1: string;
  description: string;
  intro: string;
  process: string[];
  pricing: { label: string; range: string; description: string }[];
}

export const SERVICES: Record<string, Omit<Service, "slug">> = {
  "interior-designer": {
    name: "Interior Designer",
    shortName: "Interior Design",
    metaTitleSuffix: "Interior Designer",
    h1: "Interior Designer in {location}",
    description: "Premium residential interior design services in {location}. Complete home interiors — 1BHK, 2BHK, 3BHK and luxury apartments.",
    intro: "Your home should feel like the best version of you. At Bhumi Mistry Interiors, we design spaces that are warm, functional, and deeply personal. From the first consultation to the final cushion, every detail matters.",
    process: [
      "Free consultation and site visit to understand your requirements, lifestyle and budget",
      "Concept design with mood boards, material samples and 3D visualisations",
      "Detailed design development including layout plans, electrical and plumbing drawings",
      "Execution by our in-house team of craftsmen, carpenters and site supervisors",
      "Quality checks at every stage with regular progress updates",
      "Handover and styling — we style every room before you move in",
    ],
    pricing: [
      { label: "1BHK Interior", range: "₹3.5 – 5.5 Lakh", description: "Complete interior design for a 1BHK apartment including living, bedroom, kitchen, balcony and bathroom essentials" },
      { label: "2BHK Interior", range: "₹5.5 – 9 Lakh", description: "Full home interior package for a 2BHK with modular kitchen, wardrobes, TV unit, false ceiling and furniture" },
      { label: "3BHK Interior", range: "₹8 – 14 Lakh", description: "Premium 3BHK interior design with custom furniture, luxury finishes and complete turnkey execution" },
      { label: "Luxury Interior", range: "₹15 Lakh+", description: "Bespoke luxury interiors with premium materials, custom joinery, designer lighting and art curation" },
    ],
  },
  "2bhk-interior": {
    name: "2BHK Interior Design",
    shortName: "2BHK Interior",
    metaTitleSuffix: "2BHK Interior Designer",
    h1: "2BHK Interior Design in {location}",
    description: "Expert 2BHK interior design in {location}. Complete 2-bedroom home interiors with modular kitchen, wardrobes, living room and bedroom design.",
    intro: "A 2BHK is the most versatile home size — big enough to need proper planning, compact enough to demand smart solutions. Our 2BHK interior design packages cover every room with custom layouts, efficient storage, and a cohesive aesthetic.",
    process: [
      "Site visit and requirement analysis specific to your 2BHK layout",
      "Space planning optimised for your floor plan and family needs",
      "Design presentation with 3D renders, material selection and budget breakdown",
      "Manufacturing and execution by our experienced team",
      "Quality checks and mid-project reviews",
      "Final styling and handover",
    ],
    pricing: [
      { label: "Economy 2BHK", range: "₹4 – 5.5 Lakh", description: "Essential 2BHK interiors with modular kitchen, wardrobe, TV unit and basic false ceiling" },
      { label: "Standard 2BHK", range: "₹5.5 – 7.5 Lakh", description: "Complete 2BHK interiors with upgraded materials, designer finishes and furniture package" },
      { label: "Premium 2BHK", range: "₹7.5 – 11 Lakh", description: "Premium 2BHK with luxury finishes, custom furniture, feature walls and curated decor" },
    ],
  },
  "3bhk-interior": {
    name: "3BHK Interior Design",
    shortName: "3BHK Interior",
    metaTitleSuffix: "3BHK Interior Designer",
    h1: "3BHK Interior Design in {location}",
    description: "Premium 3BHK interior design in {location}. Spacious, luxurious home interiors for three-bedroom apartments with turnkey execution.",
    intro: "A 3BHK home gives you the canvas to create something special. Our 3BHK interior design service covers every square foot — from the entrance foyer to the master suite, kitchen to balcony — creating a home that flows beautifully.",
    process: [
      "Comprehensive site assessment and family requirement analysis",
      "Zonal planning for public areas, private zones and service areas",
      "Detailed design with elevations, material specifications and furniture plans",
      "In-house manufacturing and professional installation",
      "Multi-stage quality assurance",
      "Complete home styling and handover",
    ],
    pricing: [
      { label: "Standard 3BHK", range: "₹7 – 10 Lakh", description: "Complete 3BHK interiors with modular kitchen, all wardrobes, TV unit, false ceiling and basic furniture" },
      { label: "Premium 3BHK", range: "₹10 – 15 Lakh", description: "Premium 3BHK with designer finishes, custom furniture, feature lighting and upgraded materials" },
      { label: "Luxury 3BHK", range: "₹15 – 25 Lakh", description: "Bespoke 3BHK interiors with luxury materials, custom joinery, home automation and art integration" },
    ],
  },
  "1bhk-interior": {
    name: "1BHK Interior Design",
    shortName: "1BHK Interior",
    metaTitleSuffix: "1BHK Interior Designer",
    h1: "1BHK Interior Design in {location}",
    description: "Smart and beautiful 1BHK interior design in {location}. Maximise every square foot with custom modular furniture and space-saving solutions.",
    intro: "Small doesn't mean simple. A 1BHK requires thoughtful planning to feel spacious, functional and beautiful. Our 1BHK interior design solutions are built around smart storage, multi-functional furniture, and layouts that make your home feel bigger than its square footage.",
    process: [
      "Detailed space audit and storage requirement analysis",
      "Space-optimised layout planning with multi-functional furniture",
      "Custom design with modular solutions, colour palette and material selection",
      "Precision manufacturing and professional installation",
      "Quality checks and final styling",
    ],
    pricing: [
      { label: "Essential 1BHK", range: "₹2.5 – 3.5 Lakh", description: "Smart 1BHK interiors with modular kitchen, wardrobe, TV unit and space-saving furniture" },
      { label: "Standard 1BHK", range: "₹3.5 – 5 Lakh", description: "Complete 1BHK interiors with upgraded finishes, custom storage and designer touches" },
    ],
  },
  "modular-kitchen": {
    name: "Modular Kitchen Design",
    shortName: "Modular Kitchen",
    metaTitleSuffix: "Modular Kitchen Designer",
    h1: "Modular Kitchen Design in {location}",
    description: "Beautiful and functional modular kitchen design in {location}. Custom kitchens with premium materials, smart storage and elegant finishes.",
    intro: "The kitchen is the heart of every Indian home. Our modular kitchen designs combine generous storage with beautiful finishes — whether you prefer a sleek handleless kitchen, a warm wood-finish space, or a bold coloured island.",
    process: [
      "Kitchen layout assessment and workflow analysis",
      "Custom modular design with storage planning for Indian kitchen needs",
      "Material selection — finishes, hardware, countertops and backsplash",
      "Precision manufacturing in our workshop",
      "Professional installation by trained carpenters",
      "Final finishing, appliance installation and handover",
    ],
    pricing: [
      { label: "Budget Kitchen", range: "₹80K – 1.2 Lakh", description: "Functional modular kitchen with membrane finish, plywood construction and essential storage" },
      { label: "Standard Kitchen", range: "₹1.2 – 2 Lakh", description: "Premium modular kitchen with acrylic finish, soft-close hardware, tall units and chimney" },
      { label: "Premium Kitchen", range: "₹2 – 3.5 Lakh", description: "Luxury kitchen with PU finish, solid wood, quartz countertop, island and smart storage" },
    ],
  },
  "living-room-design": {
    name: "Living Room Design",
    shortName: "Living Room Design",
    metaTitleSuffix: "Living Room Designer",
    h1: "Living Room Design in {location}",
    description: "Beautiful living room interior design in {location}. Custom sofas, TV units, feature walls and lighting design for your ideal living space.",
    intro: "The living room is where your home comes together. It is where you entertain, relax, and spend time with family. Our living room designs balance comfort and style — with carefully chosen furniture, ambient lighting, and a layout that flows naturally.",
    process: [
      "Room assessment and layout planning",
      "Furniture design and selection",
      "TV unit, entertainment and storage design",
      "Lighting design — ambient, task and accent",
      "Material and finish selection",
      "Execution, furnishing and styling",
    ],
    pricing: [
      { label: "Basic Living Room", range: "₹80K – 1.5 Lakh", description: "Living room design with TV unit, sofa, coffee table, curtains and lighting" },
      { label: "Premium Living Room", range: "₹1.5 – 3 Lakh", description: "Designer living room with custom furniture, feature wall, premium finishes and decor" },
    ],
  },
  "bedroom-design": {
    name: "Bedroom Design",
    shortName: "Bedroom Design",
    metaTitleSuffix: "Bedroom Designer",
    h1: "Bedroom Design in {location}",
    description: "Serene and stylish bedroom interior design in {location}. Custom wardrobes, bed designs, lighting and wall finishes for your perfect bedroom.",
    intro: "Your bedroom should be the calmest room in your home. Our bedroom designs focus on comfort, storage and atmosphere — with custom wardrobes, comfortable bedding, gentle lighting, and finishes that help you unwind.",
    process: [
      "Bedroom measurement and storage audit",
      "Wardrobe design — layout, finish and internal configuration",
      "Bed design, side tables and seating selection",
      "Lighting design for sleep and reading",
      "Wall finishes, paint colours and fabric selection",
      "Execution and styling",
    ],
    pricing: [
      { label: "Basic Bedroom", range: "₹60K – 1.2 Lakh", description: "Bedroom design with wardrobe, bed lighting and wall finish" },
      { label: "Premium Bedroom", range: "₹1.2 – 2.5 Lakh", description: "Designer bedroom with custom wardrobe, panel headboard, feature lighting and premium finishes" },
    ],
  },
  "false-ceiling": {
    name: "False Ceiling Design",
    shortName: "False Ceiling",
    metaTitleSuffix: "False Ceiling Designer",
    h1: "False Ceiling Design in {location}",
    description: "Modern false ceiling design in {location}. POP, gypsum and wooden ceiling designs with cove lighting for every room.",
    intro: "A well-designed false ceiling transforms a room — adding depth, warmth, and a sense of completeness. Our false ceiling designs range from simple cove details to dramatic multi-level ceilings with integrated lighting.",
    process: [
      "Ceiling assessment and room proportion analysis",
      "Design concept — single level, multi-level or tray ceiling",
      "Lighting integration — cove lights, spotlights, chandeliers",
      "Material selection — POP, gypsum, wood or metal",
      "Professional installation by experienced team",
      "Finishing, painting and light fixture installation",
    ],
    pricing: [
      { label: "Basic False Ceiling", range: "₹40 – 60 /sq ft", description: "Single-level POP false ceiling with cove lighting in living and bedrooms" },
      { label: "Premium False Ceiling", range: "₹60 – 100 /sq ft", description: "Multi-level designer ceiling with gypsum, wooden accents and integrated lighting" },
    ],
  },
  "tv-unit": {
    name: "TV Unit Design",
    shortName: "TV Unit",
    metaTitleSuffix: "TV Unit Designer",
    h1: "TV Unit Design in {location}",
    description: "Custom TV unit design in {location}. Modern, minimalist and storage-integrated TV units for your living room or bedroom.",
    intro: "The TV unit is often the focal point of your living room. Our designs go beyond a simple cabinet — we create TV units that anchor the room, hide cables beautifully, and provide storage without clutter.",
    process: [
      "Wall measurement and viewing distance assessment",
      "Design concept — floating, floor-standing or full-height",
      "Storage integration — media, books, display and closed storage",
      "Material and finish selection",
      "Precision manufacturing and installation",
      "Cable management and final styling",
    ],
    pricing: [
      { label: "Basic TV Unit", range: "₹25 – 40K", description: "Floating or floor-standing TV unit with laminated finish and basic storage" },
      { label: "Premium TV Unit", range: "₹40 – 80K", description: "Designer TV unit with PU/acrylic finish, LED integration, open and closed storage" },
    ],
  },
  "wardrobe-design": {
    name: "Wardrobe Design",
    shortName: "Wardrobe Design",
    metaTitleSuffix: "Wardrobe Designer",
    h1: "Wardrobe Design in {location}",
    description: "Custom wardrobe design in {location}. Modular and bespoke wardrobes with intelligent storage, premium finishes and space-saving solutions.",
    intro: "A great wardrobe does more than store clothes — it organises your life. Our wardrobe designs are built around how you actually dress, with dedicated spaces for hanging, folding, accessories and shoes.",
    process: [
      "Storage audit — clothes, accessories, shoes and linen",
      "Wardrobe layout design — hanging vs folding, drawers, shelves",
      "Internal configuration — pull-out trays, tie racks, shoe shelves",
      "Material and finish selection",
      "Precision manufacturing and installation",
      "Final adjustments and organisation system setup",
    ],
    pricing: [
      { label: "Standard Wardrobe", range: "₹45 – 70 /sq ft", description: "Modular wardrobe with laminate/membrane finish, soft-close hinges and custom internals" },
      { label: "Premium Wardrobe", range: "₹70 – 120 /sq ft", description: "Bespoke wardrobe with PU/acrylic finish, solid wood options, LED lighting and luxury internals" },
    ],
  },
  "home-renovation": {
    name: "Home Renovation",
    shortName: "Home Renovation",
    metaTitleSuffix: "Home Renovation Specialist",
    h1: "Home Renovation in {location}",
    description: "Complete home renovation services in {location}. Civil work, electrical, plumbing, flooring, painting and interior transformation under one roof.",
    intro: "Sometimes your home just needs a fresh start. Our home renovation service covers everything from structural changes to cosmetic upgrades — civil work, new electrical and plumbing, flooring, painting, and full interior transformation.",
    process: [
      "Comprehensive site assessment and structural audit",
      "Design and renovation planning with budget breakdown",
      "Civil work — demolition, wall modifications, waterproofing",
      "MEP — electrical rewiring, plumbing, AC and ventilation",
      "Flooring, tiling and wall finishes",
      "Interior installation — kitchen, wardrobes, furniture",
      "Painting and final finishing",
      "Clean-up and handover",
    ],
    pricing: [
      { label: "Basic Renovation", range: "₹1.5 – 3 Lakh", description: "Painting, flooring replacement, basic electrical and plumbing updates" },
      { label: "Standard Renovation", range: "₹3 – 6 Lakh", description: "Complete room renovation with new interiors, modular kitchen, wardrobe and furniture" },
      { label: "Full Home Renovation", range: "₹6 – 15 Lakh", description: "Comprehensive home renovation including structural changes, MEP, interiors and premium finishes" },
    ],
  },
  "apartment-interior": {
    name: "Apartment Interior Design",
    shortName: "Apartment Interior",
    metaTitleSuffix: "Apartment Interior Designer",
    h1: "Apartment Interior Design in {location}",
    description: "Complete apartment interior design in {location}. End-to-end interior solutions for apartments — from 1BHK to 4BHK and penthouses.",
    intro: "Apartment living comes with its own set of opportunities and constraints. Our apartment interior design service is built specifically for flats — maximising every square foot, working with existing architecture, and delivering beautiful results.",
    process: [
      "Apartment layout analysis and measurement",
      "Zonal planning — public, private and service zones",
      "Complete interior design including all rooms",
      "Custom furniture and storage solutions",
      "Kitchen, wardrobe and ceiling design",
      "Execution and project management",
      "Styling and handover",
    ],
    pricing: [
      { label: "1BHK Apartment", range: "₹3.5 – 5.5 Lakh", description: "Complete 1BHK apartment interiors with all rooms covered" },
      { label: "2BHK Apartment", range: "₹5.5 – 9 Lakh", description: "Full 2BHK apartment interior design package" },
      { label: "3BHK Apartment", range: "₹8 – 14 Lakh", description: "Premium 3BHK apartment interiors with custom features" },
    ],
  },
};

export const SERVICE_ENTRIES = Object.entries(SERVICES).map(([slug, data]) => ({
  slug,
  ...data,
}));

export function getServiceBySlug(slug: string): (Service) | undefined {
  const service = SERVICES[slug];
  if (!service) return undefined;
  return { slug, ...service };
}

export const SERVICE_SLUGS = Object.keys(SERVICES);
