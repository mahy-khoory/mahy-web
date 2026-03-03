"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

export default function CompanyVisionPurpose({
    heading = "Driven by purpose",
    tabs,
    items,
    endText
}) {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="bg-[#F4F1E8]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
                    <div className="lg:col-span-5">
                        {/* <p className="text-xs tracking-[0.22em] font-semibold text-[#2B2B2B]/80">
                            OUR VISION
                        </p> */}
                        <h2 className="mt-5 font-serif text-[38px] leading-[1.1] sm:text-[46px] lg:text-[56px] text-[#1E1E1E]">
                            {heading}
                        </h2>
                        {/* <p className="mt-6 max-w-[460px] text-[16px] sm:text-[17px] lg:text-[18px] leading-[1.9] text-[#2B2B2B]/70">
                            We are driven by our purpose to contributing to the
                            infrastructural development in UAE. We introduce sustainable
                            brands and seek international opportunities aligned with UAE
                            National Vision 2030
                        </p> */}
                        <div className="relative mt-10 lg:mt-14 lg:pl-10">
                            <span className="hidden lg:block absolute left-[10px] top-0 h-full w-px bg-[#CFC6B8]" />
                            <div className="flex lg:flex-col gap-6 lg:gap-2">
                                {tabs.map((tab, i) => (
                                    <button key={i} onClick={() => setActiveIndex(i)}
                                        className="relative block h-[44px] lg:h-[56px] text-left">
                                        {activeIndex === i && (
                                            <span className="hidden lg:block absolute -left-[30px] top-1/2 h-[36px] w-px -translate-y-1/2 bg-[#8E826F]" />
                                        )}
                                        <span
                                            className={clsx(
                                                "font-serif text-[20px] lg:text-[22px] transition-colors",
                                                activeIndex === i ? "text-[#2B2B2B]" : "text-[#2B2B2B]/45"
                                            )}
                                        >
                                            {tab}
                                        </span>

                                        {activeIndex === i && (
                                            <span className="lg:hidden block mt-1 h-[1px] w-full bg-[#8E826F]" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                        {endText && (
                            <p className="mt-8 text-gray-500">{endText}</p>
                        )}
                    </div>
                    <div className="lg:col-span-7 lg:pl-14">
                        <motion.div
                            key={activeIndex}
                            initial={{ y: 24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}>
                            <div className="relative w-full aspect-[4/3] sm:aspect-[16/9] overflow-hidden">
                                <Image
                                    src={items[activeIndex].image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div className="bg-[#D9CFBF] px-6 py-6 space-y-5">
                                {items[activeIndex].items?.map((item, i) => (
                                    <div key={i}>
                                        <h3 className="font-serif md:text-xl text-[#1E1E1E]">
                                            {item.title}
                                        </h3>
                                        {item.text && (
                                            <p className="mt-1.5 text-[#2B2B2B]/80">
                                                {item.text}
                                            </p>
                                        )}
                                        {item.items && (
                                            <ul className="list-disc pl-5 mt-1.5 text-[#2B2B2B]/80 space-y-1.5">
                                                {item.items.map((bullet, index) => (
                                                    <li key={index}>{bullet}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {item.lastText && (
                                            <p className="mt-2 text-[#2B2B2B]/80">
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