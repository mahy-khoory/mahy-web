"use client";

import AdvantageGridItem from "./AdvantageGridItem";
import AnimatedLines from "./UI/AnimatedLines";

export default function NextAdvantagesSection({ heading, text, data }) {
  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 text-center">
        <AnimatedLines />

        <h2 className="text-[42px] sm:text-[50px] lg:text-[56px] font-semibold leading-[1] tracking-tight text-black pt-3">
          {heading}
        </h2>

        <p className="mx-auto mt-5 sm:mt-12 max-w-5xl text-lg font-light leading-[1.2] text-gray-500">
          MAHY Khoory Group brings together decades of experience, deep sector knowledge, and strong operational capabilities across a diversified portfolio of businesses. Our expertise has been built over time through disciplined growth, long-term partnerships, and consistent execution across industrial, commercial, environmental, and service sectors.
        </p>
        <p className="mt-10 max-w-5xl mx-auto text-lg font-light leading-[1.2] text-gray-500">The Group's capabilities are anchored in physical assets, skilled teams, and integrated operations that allow us to deliver reliable solutions at scale, while maintaining high standards of governance, safety, and performance</p>
      </div>
      <div className="mx-auto mt-12 sm:mt-12 lg:mt-20 max-w-7xl px-5 sm:px-6">
        <div
          className="
            grid overflow-hidden rounded-[22px] sm:rounded-[26px]
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-0
            auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[420px]
          "
        >
          {data.map((item, index) => (
            <AdvantageGridItem key={index} {...item} variant="small" />
          ))}
        </div>
      </div>
    </section >
  );
}
