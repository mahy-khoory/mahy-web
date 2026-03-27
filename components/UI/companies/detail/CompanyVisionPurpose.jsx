"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function CompanyVisionPurpose({
  heading = "Driven by purpose",
  tabs,
  items,
  endText,
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-14 sm:py-16 lg:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-0">

          {/* LEFT SIDE */}
          <div className="lg:col-span-5">
            <h2 className="font-serif text-[32px] sm:text-[40px] lg:text-[56px] leading-[1.15] text-white">
              {heading}
            </h2>

            {/* Tabs */}
            <div className="relative mt-8 sm:mt-10 lg:mt-14 lg:pl-10">

              {/* Vertical line (desktop only) */}
              <span className="hidden lg:block absolute left-[10px] top-0 h-full w-px bg-slate-300" />

              {/* Fade edges for mobile swipe */}
              <div className="relative lg:hidden">
                <div className="pointer-events-none absolute left-0 top-0 h-full w-6 bg-gradient-to-r from-[#F4F1E8] to-transparent z-10" />
                <div className="pointer-events-none absolute right-0 top-0 h-full w-6 bg-gradient-to-l from-[#F4F1E8] to-transparent z-10" />
              </div>

              {/* Tabs container */}
              <div
                className="
                flex gap-6
                overflow-x-auto
                lg:overflow-visible
                lg:flex-col
                lg:gap-2
                scrollbar-hide
                snap-x snap-mandatory
                scroll-smooth
                [-webkit-overflow-scrolling:touch]
                px-1
              "
              >
                {tabs.map((tab, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveIndex(i)}
                    className="relative shrink-0 lg:shrink block text-left py-2 snap-start"
                  >
                    {/* Active vertical indicator (desktop) */}
                    {activeIndex === i && (
                      <span className="hidden lg:block absolute -left-[30px] top-1/2 h-[36px] w-px -translate-y-1/2 bg-slate-500" />
                    )}

                    <span
                      className={clsx(
                        "font-serif text-[18px] sm:text-[20px] lg:text-[22px] whitespace-nowrap transition-colors",
                        activeIndex === i
                          ? "text-white"
                          : "text-white/45"
                      )}
                    >
                      {tab}
                    </span>

                    {/* Mobile underline */}
                    {activeIndex === i && (
                      <span className="lg:hidden block mt-2 h-[1px] w-full bg-slate-500" />
                    )}
                  </button>
                ))}
              </div>
            </div>

            {endText && (
              <p className="mt-6 text-gray-500 text-sm sm:text-base">
                {endText}
              </p>
            )}
          </div>

          {/* RIGHT SIDE */}
          <div className="lg:col-span-7 lg:pl-14">
            <motion.div
              key={activeIndex}
              initial={{ y: 24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 0.6,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* Image */}
              <div className="relative w-full aspect-[4/3] sm:aspect-[16/10] lg:aspect-[16/9] overflow-hidden rounded-sm">
                <Image
                  src={items[activeIndex].image}
                  alt=""
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              {/* Content */}
              <div className="bg-slate-500 px-5 sm:px-6 lg:px-8 py-6 sm:py-7 space-y-5">
                {items[activeIndex].items?.map((item, i) => (
                  <div key={i}>
                    <h3 className="font-serif text-[18px] sm:text-[20px] md:text-xl text-white">
                      {item.title}
                    </h3>

                    {item.text && (
                      <p className="mt-1.5 text-sm sm:text-base text-white/80 leading-relaxed">
                        {item.text}
                      </p>
                    )}

                    {item.items && (
                      <ul className="list-disc pl-5 mt-1.5 text-sm sm:text-base text-white/80 space-y-1.5">
                        {item.items.map((bullet, index) => (
                          <li key={index}>{bullet}</li>
                        ))}
                      </ul>
                    )}

                    {item.lastText && (
                      <p className="mt-2 text-sm sm:text-base text-white/80 leading-relaxed">
                        {item.lastText}
                      </p>
                    )}
                  </div>
                ))}
              </div>

            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}