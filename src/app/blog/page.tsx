import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Design Journal",
  description:
    "Insights, ideas, and behind-the-scenes stories from Bhumi Mistry Interiors — Indian interior design, material craft, and home transformation.",
  openGraph: { title: "Design Journal | Bhumi Mistry Interiors" },
};

const POSTS = [
  {
    slug: "small-apartment-interior-design-mumbai",
    title: "Making 650 sq ft Feel Like a Palace",
    excerpt:
      "How we transformed a cramped Mumbai 1BHK into a light-filled home with layered storage, reflective surfaces, and space-multiplying tricks.",
    category: "Small Spaces",
    date: "2026-06-28",
  },
  {
    slug: "choosing-wood-finishes-for-indian-homes",
    title: "The Right Wood Finish for Every Indian Climate",
    excerpt:
      "From coastal humidity to desert heat — a practical guide to choosing wood veneers, laminates, and treatments that last.",
    category: "Materials",
    date: "2026-06-21",
  },
  {
    slug: "vastu-alternative-approach",
    title: "Vastu Without Superstition — What Actually Works",
    excerpt:
      "We break down the spatial logic behind Vastu principles and show how to design homes that feel right without rigid rules.",
    category: "Design Philosophy",
    date: "2026-06-14",
  },
  {
    slug: "modular-kitchen-cost-guide-2026",
    title: "Modular Kitchen Budget Guide for 2026",
    excerpt:
      "Transparent pricing for laminate, acrylic, and solid wood kitchens — with real project costs from our Pune and Ahmedabad studios.",
    category: "Kitchen",
    date: "2026-06-07",
  },
  {
    slug: "layered-lighting-guide",
    title: "The Art of Layered Light: Ambient, Task & Accent",
    excerpt:
      "Good lighting is the difference between a room that works and a room that feels. Here is how we light every space.",
    category: "Lighting",
    date: "2026-05-31",
  },
  {
    slug: "indoor-outdoor-living-indian-homes",
    title: "Bringing the Outside In — Indoor-Outdoor Living for India",
    excerpt:
      "Courtyards, verandahs, and how modern Indian homes are blurring the line between interior and exterior spaces.",
    category: "Architecture",
    date: "2026-05-24",
  },
];

export default function BlogIndex() {
  return (
    <main className="bg-ivory px-6 pb-28 pt-32 md:px-16 md:pb-40 md:pt-40">
      <div className="mx-auto max-w-4xl">
        <p className="eyebrow text-terracotta">Journal</p>
        <h1 className="display mt-4 text-4xl md:text-6xl">
          Ideas &amp; <span className="italic text-terracotta">Observations</span>
        </h1>
        <p className="mt-6 max-w-lg text-sm leading-relaxed text-stone">
          Notes from the studio — material experiments, project stories, and
          things we have learned making homes for Indian families.
        </p>

        <div className="mt-16 space-y-16">
          {POSTS.map((post) => (
            <article key={post.slug}>
              <Link href={`/blog/${post.slug}`} className="group block">
                <div className="flex items-center gap-4 text-xs text-stone/60">
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
                <h2 className="display mt-4 text-2xl transition-colors duration-300 group-hover:text-terracotta md:text-4xl">
                  {post.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-relaxed text-stone">
                  {post.excerpt}
                </p>
                <span className="eyebrow mt-6 inline-block text-gold">Read →</span>
              </Link>
            </article>
          ))}
        </div>
      </div>
    </main>
  );
}
