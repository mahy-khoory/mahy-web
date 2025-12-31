"use client";

import AdvantageGridItem from "./AdvantageGridItem";
import AnimatedLines from "./UI/AnimatedLines";

export default function NextAdvantagesSection({ advantages }) {
  const items = {
    experience: {
      title: advantages.items[0].title,
      image:
        "https://images.unsplash.com/photo-1682686581264-c47e25e61d95?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: advantages.items[0].heading,
      description: advantages.items[0].description,
    },
    insight: {
      title: advantages.items[1].title,
      image:
        "https://images.unsplash.com/photo-1653158861306-e5b3804f6115?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      heading: advantages.items[1].heading,
      description: advantages.items[1].description
    },
    innovate: {
      title: advantages.items[2].title,
      image:
        "https://plus.unsplash.com/premium_photo-1664304869167-130629c66932?q=80&w=734&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: advantages.items[2].description,
    },
    accelerate: {
      title: advantages.items[3].title,
      image:
        "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: advantages.items[3].description,
    },
    assure: {
      title: advantages.items[4].title,
      image:
        "https://images.unsplash.com/photo-1634402149804-67614eb48331?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      description: advantages.items[4].description,
    },
  };

  return (
    <section className="w-full bg-white py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 text-center">
        <AnimatedLines />

        <h2 className="text-[42px] sm:text-[50px] lg:text-[56px] font-semibold leading-[1] tracking-tight text-black">
          {advantages.heading}
        </h2>

        <p className="mx-auto mt-5 sm:mt-6 max-w-3xl text-[22px] sm:text-[28px] lg:text-[34px] font-light leading-[1.2] text-gray-500">
          {advantages.text1} <br className="hidden sm:block" />
          {advantages.text2}
        </p>
      </div>
      <div className="mx-auto mt-10 sm:mt-12 lg:mt-14 max-w-7xl px-5 sm:px-6">
        <div
          className="
            grid overflow-hidden rounded-[22px] sm:rounded-[26px]
            grid-cols-1 sm:grid-cols-2 lg:grid-cols-3
            gap-0
            auto-rows-[220px] sm:auto-rows-[260px] lg:auto-rows-[280px]
          "
        >
          <div className="lg:col-span-1 lg:row-span-2 lg:auto-rows-auto sm:col-span-2 lg:col-auto sm:row-span-1 lg:row-span-2">
            <AdvantageGridItem {...items.experience} variant="large" />
          </div>

          <AdvantageGridItem {...items.insight} variant="small" />
          <AdvantageGridItem {...items.innovate} variant="small" />
          <AdvantageGridItem {...items.accelerate} variant="small" />
          <AdvantageGridItem {...items.assure} variant="small" />
        </div>
      </div>
    </section>
  );
}
