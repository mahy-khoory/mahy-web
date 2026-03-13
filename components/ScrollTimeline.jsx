"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import SlideReveal from "./UI/SlideReveal";

export default function ScrollTimeline({ items }) {
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

    return (
        <section ref={containerRef} className="relative flex md:pt-20">
            {/* TIMELINE */}
            <div className="w-56 hidden md:flex justify-center">
                <div className="sticky top-1/2 -translate-y-1/2 h-[70vh]">

                    {/* Vertical Line */}
                    <div className="absolute left-1/2 -translate-x-1/2 w-[2px] h-full bg-gray-300" />

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
                                        ? "font-semibold text-black"
                                        : "text-gray-800"
                                }
                            >
                                {item.title}
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
                    <div
                        key={i}
                        ref={(el) => (sectionsRef.current[i] = el)}
                        className="md:pl-8"
                    >
                        {i === 0 ? (
                            <FirstSection
                                title={"The History"}
                                start={items[0].title}
                                end={items[items.length - 1].title}
                                image={"/gallery/gallery-1.jpg"}
                            />
                        ) : (
                            <Sections
                                title={item.title}
                                heading={item.heading}
                                text={item.text}
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

const FirstSection = ({ title, start, end, image }) => (
    <div className="relative max-w-5xl my-8 px-5 md:px-0 md:my-20">
        <div className="relative z-10">
            <SlideReveal direction="up" triggerOnce={false}>
                <p className="text-2xl md:text-3xl t-base font-bold uppercase">{title}</p>
            </SlideReveal>
            <SlideReveal direction="up" delay={0.2} triggerOnce={false}>
                <p className="text-transparent stroke-text text-[100px] md:text-[150px]">{start}</p>
            </SlideReveal>
            <SlideReveal direction="right" delay={0.4} triggerOnce={false}>
                <p className="text-transparent stroke-text text-[100px] md:text-[150px] mt-30 flex justify-end">{end}</p>
            </SlideReveal>
        </div>
        <div className="absolute left-0 right-0 bottom-22 md:bottom-10 flex justify-center">
            <SlideReveal direction="left" triggerOnce={false}>
                <div className="w-96 md:w-170 h-60 md:h-110 flex-none relative">
                    <Image
                        src={image}
                        alt={title}
                        style={{ objectFit: 'cover' }}
                        fill
                    />
                </div>
            </SlideReveal>
        </div>
    </div>
);

const Sections = ({ title, heading, text, image, dark }) => (
    <div className={`grid grid-cols-1 md:grid-cols-2 py-8 px-5 md:px-0 md:py-20 ${dark ? "text-white" : "t-base"} relative`}>
        {dark && (
            <div className="absolute w-screen h-full b-base md:-translate-x-64 -z-10" />
        )}
        <div className="relative z-10">
            <div className="w-sm">
                <SlideReveal direction="up" triggerOnce={false}>
                    <p className="text-2xl md:text-3xl font-bold uppercase">{heading}</p>
                </SlideReveal>
                <SlideReveal direction="left" delay={0.2} triggerOnce={false}>
                    <p className={`text-transparent ${dark ? "stroke-text-white" : "stroke-text"}  text-[80px] md:text-[140px]`}>{title}</p>
                    <div className={`h-0.5 w-7/12 ${dark ? "bg-white" : "b-base"} `} />
                </SlideReveal>
                <SlideReveal direction="left" delay={0.4} triggerOnce={false}>
                    <p className="mt-8 md:mt-15 w-xs mb-10">{text}</p>
                </SlideReveal>
            </div>
        </div>
        <div className="flex items-end overflow-hidden">
            <SlideReveal direction="right" delay={0.4} triggerOnce={false}>
                <div className="relative w-full md:w-170 h-90 md:h-100">
                    <Image
                        src={image}
                        alt={title}
                        style={{ objectFit: "cover" }}
                        fill
                    />
                </div>
            </SlideReveal>
        </div>
    </div>
);