"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import clsx from "clsx";

const data = {
    purpose: {
        image: "/gallery/gallery-1.jpg",
        title: "Benefiting Qatar, one field at a time",
        body: "Rooted in the values of a family business spanning five generations, our purpose is to create lasting value across the sectors that shape Qatar’s future. We exist to support national progress, empower communities, and build a legacy of trust, resilience, and excellence.",
    },
    mission: {
        image: "/gallery/gallery-2.jpg",
        title: "Quality, Reliability and expertise",
        body: "Guided by the principles of our founding family, our mission is to unite the strengths of our diverse companies to deliver enduring impact. We grow through building impact, lead with integrity, and serve Qatar with a commitment that’s deeply personal — generation after generation.",
    },
    vision: {
        image: "/gallery/gallery-3.jpg",
        title: "Building for generations ahead",
        body: "Our vision is to drive sustainable growth by investing in people, strengthening partnerships, and shaping industries that support national progress.",
    },
};

export default function CompanyVisionPurpose() {
    const [active, setActive] = useState("purpose");

    return (
        <section className="bg-[#F4F1E8]">
            <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10 py-16 sm:py-20 lg:py-24">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-0">
                    <div className="lg:col-span-5">
                        <p className="text-xs tracking-[0.22em] font-semibold text-[#2B2B2B]/80">
                            OUR VISION
                        </p>

                        <h2
                            className="
              mt-5
              font-serif
              text-[38px]
              leading-[1.1]
              sm:text-[46px]
              lg:text-[56px]
              text-[#1E1E1E]
            "
                        >
                            Driven by purpose
                        </h2>

                        <p
                            className="
              mt-6
              max-w-[460px]
              text-[16px]
              sm:text-[17px]
              lg:text-[18px]
              leading-[1.9]
              text-[#2B2B2B]/70
            "
                        >
                            We are driven by our purpose to contributing to the
                            infrastructural development in Qatar. We introduce sustainable
                            brands and seek international opportunities aligned with Qatar
                            National Vision 2030
                        </p>
                        <div className="relative mt-10 lg:mt-14 lg:pl-10">
                            <span className="hidden lg:block absolute left-[10px] top-0 h-full w-px bg-[#CFC6B8]" />
                            <div className="flex lg:flex-col gap-6 lg:gap-2">
                                {["purpose", "mission", "vision"].map((key) => (
                                    <button
                                        key={key}
                                        onClick={() => setActive(key)}
                                        className="relative block h-[44px] lg:h-[56px] text-left"
                                    >
                                        {active === key && (
                                            <span
                                                className="
                        hidden lg:block
                        absolute
                        -left-[30px]
                        top-1/2
                        h-[36px]
                        w-px
                        -translate-y-1/2
                        bg-[#8E826F]
                      "
                                            />
                                        )}

                                        <span
                                            className={clsx(
                                                "font-serif text-[20px] lg:text-[22px] transition-colors",
                                                active === key ? "text-[#2B2B2B]" : "text-[#2B2B2B]/45"
                                            )}
                                        >
                                            {key.charAt(0).toUpperCase() + key.slice(1)}
                                        </span>

                                        {active === key && (
                                            <span className="lg:hidden block mt-1 h-[1px] w-full bg-[#8E826F]" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="lg:col-span-7 lg:pl-14">
                        <motion.div
                            key={active}
                            initial={{ y: 24, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                            }}
                        >              <div
                            className="
                relative
                w-full
                aspect-[4/3]
                sm:aspect-[16/9]
                overflow-hidden
              "
                        >
                                <Image
                                    src={data[active].image}
                                    alt=""
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>

                            <div
                                className="
                bg-[#D9CFBF]
                px-6
                sm:px-8
                lg:px-10
                py-8
                sm:py-10
                lg:py-12
              "
                            >
                                <h3
                                    className="
                  font-serif
                  text-[24px]
                  sm:text-[28px]
                  lg:text-[32px]
                  text-[#1E1E1E]
                "
                                >
                                    {data[active].title}
                                </h3>

                                <p
                                    className="
                  mt-4
                  sm:mt-5
                  max-w-[720px]
                  text-[15px]
                  sm:text-[16px]
                  lg:text-[17px]
                  leading-[1.9]
                  text-[#2B2B2B]/80
                "
                                >
                                    {data[active].body}
                                </p>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}