"use client";

import AdvantageGridItem from "./AdvantageGridItem";

export default function NextAdvantagesSection({ data }) {
  return (
    <section className="mx-auto py-12 lg:py-20 max-w-7xl px-5 sm:px-6">
      <div className="grid overflow-hidden rounded-[22px] sm:rounded-[26px] grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-0 
        auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[420px]">
        {data.map((item, index) => (
          <AdvantageGridItem key={index} {...item} variant="small" />
        ))}
      </div>
    </section >
  );
}
