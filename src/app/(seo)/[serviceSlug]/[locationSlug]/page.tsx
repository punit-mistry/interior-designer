import { Metadata } from "next";
import { notFound } from "next/navigation";
import { LOCATION_SLUGS, getLocationBySlug } from "@/lib/seo/locations";
import { SERVICE_SLUGS, getServiceBySlug } from "@/lib/seo/services";
import { generateSEOMetadata } from "@/lib/seo/metadata";
import { getServiceFAQs } from "@/lib/seo/faqs";
import JsonLD from "@/components/seo/JsonLD";

type Props = { params: { serviceSlug: string; locationSlug: string } };

export async function generateStaticParams() {
  const paths: { serviceSlug: string; locationSlug: string }[] = [];
  for (const serviceSlug of SERVICE_SLUGS) {
    for (const locationSlug of LOCATION_SLUGS) {
      paths.push({ serviceSlug, locationSlug });
    }
  }
  return paths;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { serviceSlug, locationSlug } = params;
  if (!SERVICE_SLUGS.includes(serviceSlug) || !LOCATION_SLUGS.includes(locationSlug)) {
    return { title: "Not Found" };
  }
  return generateSEOMetadata(serviceSlug, locationSlug);
}

export default function SEOPage({ params }: Props) {
  const { serviceSlug, locationSlug } = params;
  const location = getLocationBySlug(locationSlug);
  const service = getServiceBySlug(serviceSlug);

  if (!location || !service) notFound();

  const h1 = service.h1.replace(/\{location\}/g, location.name);
  const description = service.description.replace(/\{location\}/g, location.name);
  const faqs = getServiceFAQs(serviceSlug, location.name);

  return (
    <>
      <JsonLD serviceSlug={serviceSlug} locationSlug={locationSlug} />

      <main className="min-h-screen bg-ivory">
        {/* Hero */}
        <section className="relative bg-charcoal px-6 py-28 text-ivory md:px-16 md:py-40">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow !text-gold">Bhumi Mistry Interiors</p>
            <h1 className="display mt-4 max-w-4xl text-4xl md:text-7xl">{h1}</h1>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-ivory/70">{location.intro}</p>
            <a
              href="#contact"
              className="mt-8 inline-block border border-gold px-8 py-3 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-charcoal"
            >
              Book a Free Consultation
            </a>
          </div>
        </section>

        {/* Services */}
        <section className="px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow">Our {service.name} Services</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">Complete {service.shortName.toLowerCase()} solutions in {location.name}</h2>
            <p className="mt-6 max-w-2xl text-sm leading-relaxed text-stone">{service.intro}</p>

            {service.pricing.length > 0 && (
              <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {service.pricing.map((pkg) => (
                  <div key={pkg.label} className="rounded-sm border border-walnut/15 bg-white p-8 shadow-sm">
                    <h3 className="display text-xl">{pkg.label}</h3>
                    <p className="mt-2 text-2xl font-light text-terracotta">{pkg.range}</p>
                    <p className="mt-3 text-sm leading-relaxed text-stone">{pkg.description}</p>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>

        {/* Process */}
        <section className="bg-charcoal px-6 py-24 text-ivory md:px-16 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow !text-gold">How It Works</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">Our process in {location.name}</h2>
            <ol className="mt-12 space-y-8">
              {service.process.map((step, i) => (
                <li key={i} className="flex items-baseline gap-6 border-b border-ivory/10 pb-6">
                  <span className="eyebrow !text-terracotta">{String(i + 1).padStart(2, "0")}</span>
                  <span className="text-lg md:text-xl">{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* Nearby Areas */}
        <section className="px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow">Areas We Serve</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">Nearby locations in {location.region}</h2>
            <div className="mt-8 flex flex-wrap gap-3">
              {[location.name, ...location.nearby].map((area) => (
                <span key={area} className="rounded-full border border-walnut/20 bg-white px-5 py-2 text-sm text-walnut">
                  {area}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="bg-beige px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow">FAQs</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">Frequently asked questions</h2>
            <div className="mt-12 space-y-6">
              {faqs.map((faq) => (
                <details key={faq.question} className="group rounded-sm border border-walnut/15 bg-white">
                  <summary className="flex cursor-pointer items-center justify-between px-6 py-5 text-sm font-medium md:text-base">
                    {faq.question}
                    <span className="text-gold transition-transform group-open:rotate-45">+</span>
                  </summary>
                  <p className="border-t border-walnut/10 px-6 pb-5 pt-3 text-sm leading-relaxed text-stone">
                    {faq.answer}
                  </p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="px-6 py-24 md:px-16 md:py-32">
          <div className="mx-auto max-w-[1440px]">
            <p className="eyebrow">Why Bhumi Mistry Interiors</p>
            <h2 className="display mt-4 text-3xl md:text-5xl">{location.name} trusts us</h2>
            <div className="mt-12 grid gap-8 md:grid-cols-3">
              {[
                { title: "9+ Years Experience", desc: "Over 150 luxury homes designed across Mumbai, Thane and Navi Mumbai with a 98% client satisfaction rate." },
                { title: "In-House Team", desc: "Designers, carpenters, painters and site supervisors — all under one roof. No sub-contracting, no quality compromise." },
                { title: "Transparent Pricing", desc: "Fixed-cost quotes with no hidden charges. You know exactly what you are paying for, from day one to handover." },
              ].map((item) => (
                <div key={item.title} className="rounded-sm border border-walnut/15 bg-white p-8 shadow-sm">
                  <h3 className="display text-xl">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-stone">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="bg-charcoal px-6 py-24 text-ivory md:px-16 md:py-32">
          <div className="mx-auto max-w-[1440px] text-center">
            <p className="eyebrow !text-gold">Begin Your Journey</p>
            <h2 className="display mt-4 text-4xl md:text-7xl">Let&rsquo;s design your {location.name} home.</h2>
            <p className="mx-auto mt-6 max-w-lg text-sm leading-relaxed text-ivory/70">
              One conversation is all it takes. Tell us about your space, and we&rsquo;ll tell you what it could become.
            </p>
            <div className="mt-10 flex flex-col items-center gap-4 md:flex-row md:justify-center">
              <a href="tel:+917977653450" className="border border-gold px-10 py-4 text-sm uppercase tracking-widest text-gold transition-colors hover:bg-gold hover:text-charcoal">
                Call +91 79776 53450
              </a>
              <a href="https://wa.me/917977653450?text=Hi!%20I'd%20like%20to%20discuss%20interior%20design%20for%20my%20home." target="_blank" rel="noopener noreferrer" className="border border-[#25D366] px-10 py-4 text-sm uppercase tracking-widest text-[#25D366] transition-colors hover:bg-[#25D366] hover:text-white">
                WhatsApp Us
              </a>
              <a href="mailto:studio@bhumimistry.in" className="px-10 py-4 text-sm uppercase tracking-widest text-ivory/60 transition-colors hover:text-gold">
                Email Us
              </a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
