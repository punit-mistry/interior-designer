import Link from "next/link";
import type { Metadata } from "next";

const POSTS = [
  {
    slug: "small-apartment-interior-design-mumbai",
    title: "Making 650 sq ft Feel Like a Palace",
    content: `Mumbai real estate comes with a built-in constraint: space is never abundant. But constraint is not a limitation — it is a brief. Over the years we have designed seventeen sub-700 sq-ft apartments, and each one taught us something new about how to make small feel vast.

## Start with Light

The first thing we do in any small apartment is strip away the visual blockers. Heavy drapery, dark wall paints, cluttered window frames — all of it has to go. We replace solid doors with flush shutters or sliding panels in warm white oak. Kitchen cabinets go matte white or pale sage. The idea is that your eye should travel through the room without hitting a dark patch.

## Mirrors, Placed with Intention

A mirror on every wall is amateur. A mirror placed to reflect a window is magic. In a recent Bandra project, we positioned a 5-by-4 ft mirror opposite an east-facing window. The result? The living room doubled in perceived size between 6 and 9 am, when the light bounced off the glass and painted the ceiling amber.

## Multi-functional joinery

Every piece of furniture in a small home should earn its square footage. A window seat that lifts to store luggage. A dining table that extends to seat eight. A TV unit that hides the router, the cables, the board games, and the winter clothes. This is not minimalism — it is intelligence.

## The Verdict

650 sq ft can feel like 1,200 if you are ruthless about what stays and deliberate about what goes.`,
    category: "Small Spaces",
    date: "2026-06-28",
  },
  {
    slug: "choosing-wood-finishes-for-indian-homes",
    title: "The Right Wood Finish for Every Indian Climate",
    content: `India is not one climate — it is several. And the wood finish that survives ten years in Pune may peel in Goa within a single monsoon. Here is what we specify for each region.

## Coastal Homes (Mumbai, Goa, Kochi)

Humidity is the enemy. We avoid solid wood for horizontal surfaces and recommend marine-grade plywood with PU (polyurethane) finish for cabinets. For wardrobes, laminate or acrylic sheets outperform veneer every time because they do not absorb moisture.

## Hot & Dry (Ahmedabad, Jaipur, Delhi)

The challenge here is UV damage and temperature fluctuation. Wood expands and contracts with heat. We specify a 3-mm expansion gap on all panel doors and use matte PU finish that absorbs UV rather than reflecting it — it looks softer and lasts longer.

## Hill Stations (Dehradun, Shimla, Coorg)

Cold and damp leads to warping. The trick is to condition the wood onsite for at least two weeks before installation. We use melamine-faced MDF for wardrobes and solid teak for structural frames.

## The Bottom Line

There is no one-size-fits-all wood finish. Ask your contractor where the plywood was stored, ask what the humidity is during installation week, and choose your finish based on your city, not your Pinterest board.`,
    category: "Materials",
    date: "2026-06-21",
  },
  {
    slug: "vastu-alternative-approach",
    title: "Vastu Without Superstition — What Actually Works",
    content: `Vastu Shastra is 5,000 years old. Some of it is brilliant spatial logic. Some of it is outdated dogma. Our approach is to keep what works and leave what doesn't.

## What Makes Sense

Orientating the main entrance toward the east or north has practical benefits: morning light, prevailing wind direction, and street-facing visibility. Placing the kitchen in the south-east corner makes sense because that is where the morning sun hits — natural light for cooking. Bedrooms in the south-west are cooler in the afternoon, which aligns with Indian nap culture.

## What We Ignore

The rule about not having a toilet in the north-east? That comes from an era before modern plumbing. We design bathrooms where they make structural sense, not astrological sense. The insistence on exposed brick for the south wall? Beautiful but not mandatory.

## Our Principle

If a Vastu rule improves natural light, ventilation, or flow, we follow it. If it restricts good design, we override it. Homes should feel like homes, not temples.`,
    category: "Design Philosophy",
    date: "2026-06-14",
  },
  {
    slug: "modular-kitchen-cost-guide-2026",
    title: "Modular Kitchen Budget Guide for 2026",
    content: `A kitchen renovation is the highest-ROI improvement you can make to an Indian home. But the price range is enormous — here is what different budgets actually buy.

## Budget: ₹1.5–2.5 lakh (Laminate)

This gets you laminate shutters with BWP (boiling water proof) plywood carcass, stainless steel handles, and granite countertop. No modular accessories, no soft-close. Functional but basic.

## Mid-range: ₹3–5 lakh (Acrylic)

Acrylic finish with soft-close hinges, aluminum frame glass shutters for upper cabinets, quartz countertop, and basic interior accessories (cutlery tray, bottle pull-out). This is the sweet spot for most Mumbai apartments.

## Premium: ₹6–10 lakh (Solid Wood / PU)

Solid wood or PU finish, full-height shutters, Blum hardware, quartzite or marble counter, chimney with auto-clean, and a custom island if space permits. This is what we specify for homes where the kitchen doubles as a social space.

## Advice

Never cut corners on the carcass. You can upgrade the shutters later, but bad plywood will warp in two monsoons. Invest in the structure, choose laminate if the budget is tight, and upgrade finishes in phase two.`,
    category: "Kitchen",
    date: "2026-06-07",
  },
  {
    slug: "layered-lighting-guide",
    title: "The Art of Layered Light: Ambient, Task & Accent",
    content: `The single biggest mistake we see in Indian homes is one ceiling light per room. It flattens the space, casts harsh shadows, and makes everything look clinical.

## Ambient Light

This is the base layer — soft, diffused light that fills the room without glare. We use cove lighting with LED strip in warm white (2700K), concealed in the ceiling cornice. It bounces off the ceiling and wraps the room in an even glow.

## Task Light

This is focused light where you need it — reading lamp by the armchair, under-cabinet strip in the kitchen, pendant over the dining table. Task light should be dimmable and positioned to avoid casting shadows onto the work surface.

## Accent Light

This is the drama layer — a picture light over the gallery wall, a floor washer grazing the textured plaster, a spot inside the showcase highlighting the ceramic collection. Accent light should be 3–4 times brighter than ambient to create contrast.

## The Rule

Every room needs all three. Living room: cove (ambient) + floor lamp (task) + picture light (accent). Bedroom: indirect ceiling (ambient) + bedside pendants (task) + backlit headboard (accent). Kitchens: ceiling spots (ambient) + under-cabinet strip (task) + glass cabinet interior (accent).`,
    category: "Lighting",
    date: "2026-05-31",
  },
  {
    slug: "indoor-outdoor-living-indian-homes",
    title: "Bringing the Outside In — Indoor-Outdoor Living for India",
    content: `The Indian climate does not cooperate with floor-to-ceiling glass walls. Dust, heat, and monsoon make the indoor-outdoor ideal complicated. But not impossible.

## The Verandah Strategy

Before AC, every Indian home had a verandah. It was the thermal buffer — warm in winter, cool in summer, shaded from the harsh sun. We are bringing it back. A 4-ft deep verandah with a concrete jaali screen cuts heat gain by 40% while letting breeze through.

## The Courtyard Principle

A central courtyard is nature's HVAC. Hot air rises and escapes through the open top, pulling cool air from the ground level. We designed a home in Ahmedabad with a 12x12 ft courtyard and the owners turned off their AC for nine months of the year.

## Operable Screens

Instead of fixed glass, we use folding aluminum french doors that open fully to the outside. Paired with a perforated zinc screen, they keep insects out and let air in. In Mumbai, this turns a 400 sq-ft living room into a 700 sq-ft indoor-outdoor space.

## Bottom Line

Indoor-outdoor living in India is not about glass walls. It is about shaded thresholds, breezeways, and screens that filter without blocking.`,
    category: "Architecture",
    date: "2026-05-24",
  },
];

export function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return {};
  return {
    title: post.title,
    description: post.excerpt ?? `Read about ${post.title} from Bhumi Mistry Interiors.`,
    openGraph: { title: `${post.title} | Bhumi Mistry Interiors` },
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = POSTS.find((p) => p.slug === params.slug);
  if (!post) return null;

  const paragraphs = post.content.split("\n\n");

  return (
    <main className="bg-ivory px-6 pb-28 pt-32 md:px-16 md:pb-40 md:pt-40">
      <article className="mx-auto max-w-2xl">
        <Link
          href="/blog"
          className="eyebrow inline-block text-stone/60 transition-colors hover:text-gold"
        >
          ← Back to Journal
        </Link>

        <div className="mt-8 flex items-center gap-4 text-xs text-stone/60">
          <span className="eyebrow !text-terracotta/80">{post.category}</span>
          <span className="text-ivory-dark/20">·</span>
          <time dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </time>
        </div>

        <h1 className="display mt-6 text-3xl md:text-5xl">{post.title}</h1>

        <div className="mt-12 space-y-6 text-base leading-[1.8] text-stone md:text-lg">
          {paragraphs.map((p, i) => {
            if (p.startsWith("## ")) {
              return (
                <h2 key={i} className="display mt-12 text-xl text-charcoal md:text-2xl">
                  {p.replace("## ", "")}
                </h2>
              );
            }
            return <p key={i}>{p}</p>;
          })}
        </div>
      </article>
    </main>
  );
}
