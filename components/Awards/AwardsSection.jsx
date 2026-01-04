"use client";

import AnimatedLines from "../UI/AnimatedLines";
import AwardsAccordion from "./AwardsAccordion";
import { awardsData } from "./awardsData";


export default function AwardsSection() {
  const mid = Math.ceil(awardsData.length / 2);

  return (
    <section className="bg-[#ffffff] py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedLines />
        <h2 className="mb-16 text-center text-[38px] font-semibold text-[#2F3A40]">
          Awards & Certifications
        </h2>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AwardsAccordion items={awardsData.slice(0, mid)} />
          <AwardsAccordion items={awardsData.slice(mid)} />
        </div>
      </div>
    </section>
  );
}
