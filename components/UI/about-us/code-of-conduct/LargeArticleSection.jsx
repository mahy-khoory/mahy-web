"use client";

import LargeArticleCard from "./LargeArticleCard";

const articles = [
  {
    title: "Our Approach to Ethical Business",
    description:
      "We organize our approach to ethical business around three strategic pillars: governance, practices and privacy.",
    image: "/gallery/gallery-5.jpg",
    cta: "Learn more",
    href: "/ethical-business",
  },
  {
    title: "Annual Report",
    description:
      "Find out the latest information about corporate governance, Lenovo’s Board of Directors and more when you download our Annual Report.",
    image: "/gallery/gallery-2.jpg",
    cta: "Get the report",
    href: "/annual-report",
  },
];

export default function LargeArticleSection() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2">
          {articles.map((item, i) => (
            <LargeArticleCard key={i} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
