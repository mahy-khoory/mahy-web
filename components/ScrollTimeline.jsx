"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import SlideReveal from "./UI/SlideReveal";

export default function ScrollTimeline({ items, size = "lg" }) {
  const containerRef = useRef(null);
  const sectionsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const triggerPoint = window.innerHeight / 2;

      sectionsRef.current.forEach((section, index) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= triggerPoint && rect.bottom >= triggerPoint) {
          setActiveIndex(index);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const stepHeight = 100 / (items.length - 1);

  const isActiveDark = activeIndex % 2 !== 0;

  return (
    <section ref={containerRef} className="relative flex xl:pt-15">
      {/* TIMELINE */}
      <div className="w-40 hidden xl:flex justify-center">
        <div className="sticky top-1/2 -translate-y-1/2 h-[70vh]">
          {/* Vertical Line */}
          <div className="absolute left-1/2 -translate-x-1/2 w-0.5 h-full bg-gray-300" />

          {/* Titles */}
          {items.map((item, i) => (
            <div
              key={i}
              className="absolute right-full mr-6 whitespace-nowrap text-sm transition-colors duration-300"
              style={{
                top: `${i * stepHeight}%`,
                transform: "translateY(-50%)",
              }}
            >
              <span
                className={
                  i === activeIndex
                    ? `font-semibold ${isActiveDark ? "text-white" : "text-black"}`
                    : `${isActiveDark ? "text-gray-300" : "text-gray-800"}`
                }
              >
                {i + 1}
              </span>
            </div>
          ))}

          {/* Slider Circle */}
          <div
            className="absolute left-1/2 w-5 h-5 bg-[#2da5dc] rounded-full transition-all duration-300"
            style={{
              top: `${activeIndex * stepHeight}%`,
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="flex-1">
        {items.map((item, i) => (
          <div key={i} ref={(el) => (sectionsRef.current[i] = el)}>
            {i === 0 ? (
              <FirstSection
                title={"The History"}
                texts={item.texts}
                start={items[0].title}
                end={items[items.length - 1].title}
                image={item.image}
              />
            ) : (
              <Sections
                title={item.title}
                heading={item.heading}
                texts={item.texts}
                image={item.image}
                dark={i % 2 !== 0}
              />
            )}
          </div>
        ))}
      </div>
    </section>
  );
}

const FirstSection = ({ title, start, end, image, texts }) => (
  <div className="relative max-w-6xl px-5 xl:px-0 mt-5 xl:mt-0">
    <div className="relative z-10">
      {/* <SlideReveal direction="up" triggerOnce={false}>
                <p className="text-2xl xl:text-3xl t-base font-bold uppercase">{title}</p>
            </SlideReveal> */}
      <SlideReveal direction="up" delay={0.2} triggerOnce={false}>
        <p className="text-transparent stroke-text text-[40px] xl:text-[60px] leading-12 xl:leading-tight">
          {start}
        </p>
      </SlideReveal>
      {/* <SlideReveal direction="right" delay={0.4} triggerOnce={false}>
                <p className="text-transparent stroke-text text-[45px] xl:text-[60px] leading-tight text-right mt-30 flex justify-end">{end}</p>
            </SlideReveal> */}
    </div>
    <div className="flex justify-center mt-6 xl:mt-8">
      <SlideReveal direction="left" triggerOnce={false}>
        <div className="w-full xl:w-6xl h-60 sm:h-80 md:90  xl:h-110 flex-none relative">
          <Image src={image} alt={title} style={{ objectFit: "cover" }} fill />
        </div>
      </SlideReveal>
    </div>
    <SlideReveal direction="left" delay={0.4} triggerOnce={false}>
      <div className="mt-6 xl:mt-8 space-y-3 xl:space-y-4 text-sm text-gray-700 mb-8 xl:mb-12">
        {texts.map((text, i) => (
          <p key={i} className="">
            {text}
          </p>
        ))}
      </div>
    </SlideReveal>
  </div>
);

const Sections = ({ title, heading, texts, image, dark }) => (
  <div
    className={`grid grid-cols-1 xl:grid-cols-2 gap-6 xl:gap-15 py-8 px-5 xl:px-0 xl:py-20 ${dark ? "text-white" : "t-base"} relative`}
  >
    {dark && (
      <div className="absolute -left-5 xl:-left-40 right-0 h-full b-base -z-10" />

      // <div className="absolute w-screen h-full b-base xl:-translate-x-40 -z-10" />
    )}
    <div className="relative z-10">
      <div className="">
        <SlideReveal direction="up" triggerOnce={false}>
          <p className="text-2xl xl:text-lg font-bold uppercase">{heading}</p>
        </SlideReveal>
        <SlideReveal direction="left" delay={0.2} triggerOnce={false}>
          <p
            className={`text-transparent ${dark ? "stroke-text-white" : "stroke-text"}  text-[40px] xl:text-[60px] leading-12 xl:leading-tight`}
          >
            {title}
          </p>
          <div
            className={`h-0.5 w-7/12 mt-5 ${dark ? "bg-white" : "b-base"} `}
          />
        </SlideReveal>
        <SlideReveal direction="left" delay={0.4} triggerOnce={false}>
          <div className="mt-7 space-y-3 xl:space-y-4 text-sm">
            {texts.map((text, i) => (
              <p key={i} className="">
                {text}
              </p>
            ))}
          </div>
        </SlideReveal>
      </div>
    </div>
    <div className="flex items-center overflow-hidden">
      <SlideReveal direction="right" delay={0.4} triggerOnce={false}>
        <div className="relative w-full xl:w-170 h-90 xl:h-100">
          <Image src={image} alt={title} style={{ objectFit: "cover" }} fill />
        </div>
      </SlideReveal>
    </div>
  </div>
);
