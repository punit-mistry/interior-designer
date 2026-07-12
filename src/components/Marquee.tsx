export default function Marquee() {
  const items = [
    "Rooted in Indian Craft", "Kota Stone · Marble · Teak", "Jali · Handloom · Brass",
    "Warm Indian Minimal", "Craft Traditions, Modern Lines", "Bespoke · Authentic · Timeless",
    "Est. 2017",
  ];
  const row = [...items, ...items];
  return (
    <div className="overflow-hidden border-y border-walnut/15 bg-ivory py-5" aria-hidden>
      <div className="marquee-track">
        {row.map((t, i) => (
          <span key={i} className="eyebrow mx-8 whitespace-nowrap !text-walnut/70">
            {t} <span className="mx-8 text-terracotta">✦</span>
          </span>
        ))}
      </div>
    </div>
  );
}
