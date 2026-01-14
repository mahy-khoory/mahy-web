"use client";

import AnimatedLines from "../UI/AnimatedLines";
import AwardsAccordion from "./AwardsAccordion";
import { awardsData } from "./awardsData";

export default function AwardsSection() {
  const hasOdd = awardsData.length % 2 !== 0;
  const mainItems = hasOdd ? awardsData.slice(0, -1) : awardsData;
  const lastItem = hasOdd ? awardsData[awardsData.length - 1] : null;

  const mid = Math.ceil(mainItems.length / 2);

  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">
        <AnimatedLines />

        <h2 className="mb-16 text-center text-[38px] font-semibold text-[#2F3A40]">
          Certifications
        </h2>
        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <AwardsAccordion items={mainItems.slice(0, mid)} />
          <AwardsAccordion items={mainItems.slice(mid)} />
        </div>

        {lastItem && (
          <div className="mt-6 flex justify-center">
            <div className="w-full lg:max-w-[50%]">
              <AwardsAccordion items={[lastItem]} />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
