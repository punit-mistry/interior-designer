export interface FAQ {
  question: string;
  answer: string;
}

export function getServiceFAQs(serviceSlug: string, locationName: string): FAQ[] {
  const base: Record<string, FAQ[]> = {
    "interior-designer": [
      { question: `How much does interior design cost in ${locationName}?`, answer: `Interior design costs in ${locationName} typically range from ₹2.5 lakh for a basic 1BHK to ₹15 lakh+ for a luxury 3BHK. Bhumi Mistry Interiors offers transparent pricing with detailed quotes after the first site visit.` },
      { question: `How long does an interior design project take in ${locationName}?`, answer: `A typical apartment interior project in ${locationName} takes 6–12 weeks depending on the scope. A 1BHK can be completed in 4–6 weeks, while a full 3BHK with custom furniture may take 10–14 weeks.` },
      { question: `Do you handle all the civil and electrical work?`, answer: `Yes. We provide end-to-end services including civil modifications, electrical rewiring, plumbing, false ceiling, painting and all interior finishes.` },
      { question: `Can I see a 3D design before starting the work?`, answer: `Absolutely. We create detailed 3D visualisations of every room so you can see exactly how your ${locationName} home will look before we begin execution.` },
      { question: `Do you work within my budget?`, answer: `Yes. We design within your budget from the start. Our team provides multiple material and finish options to achieve the best look for your investment.` },
    ],
    "2bhk-interior": [
      { question: `What is the cost of 2BHK interior design in ${locationName}?`, answer: `2BHK interior design in ${locationName} costs between ₹4–11 lakh depending on the scope, materials and finishes. Our packages start at ₹4 lakh for essential interiors.` },
      { question: `What is included in a 2BHK interior package?`, answer: `Our 2BHK package includes modular kitchen, wardrobes for both bedrooms, TV unit, false ceiling in living and bedrooms, lighting design, paint and all necessary furniture.` },
      { question: `How long does a 2BHK interior project take?`, answer: `A 2BHK interior project in ${locationName} typically takes 6–10 weeks from design approval to handover.` },
    ],
    "modular-kitchen": [
      { question: `What is the cost of a modular kitchen in ${locationName}?`, answer: `Modular kitchen prices in ${locationName} start at ₹80,000 for a budget kitchen and go up to ₹3.5 lakh for a premium kitchen with solid wood and quartz countertops.` },
      { question: `How long does it take to install a modular kitchen?`, answer: `A modular kitchen typically takes 3–4 weeks from design finalisation to installation in ${locationName}.` },
      { question: `What materials are best for modular kitchens in ${locationName}?`, answer: `For ${locationName}'s climate, we recommend marine plywood with acrylic or PU finishes. Quartz or granite countertops are ideal for durability and heat resistance.` },
    ],
  };
  return base[serviceSlug] || [
    { question: `What services does Bhumi Mistry Interiors offer in ${locationName}?`, answer: `We offer complete interior design services in ${locationName} including modular kitchen, wardrobe, false ceiling, TV unit, living room and bedroom design, home renovation and turnkey interior solutions.` },
    { question: `Why choose Bhumi Mistry Interiors in ${locationName}?`, answer: `Bhumi Mistry Interiors brings 9+ years of experience, a dedicated in-house team, transparent pricing, and a portfolio of 150+ completed homes across ${locationName} and the Mumbai region.` },
    { question: `Do you offer free consultations in ${locationName}?`, answer: `Yes, we offer a free site visit and consultation for all projects in ${locationName}. Our team will visit your home, understand your requirements, and provide a detailed estimate.` },
  ];
}
