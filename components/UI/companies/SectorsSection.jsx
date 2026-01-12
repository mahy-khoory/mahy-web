"use client";

import { motion } from "framer-motion";
import AnimatedLines from "../AnimatedLines";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";

function SectorsSection({ sectors }) {
    return (
        <section className="mt-20 max-w-7xl mx-auto px-5">
            <Mobile sectors={sectors} />
            <Desktop sectors={sectors} />
        </section>
    );
}

const Mobile = ({ sectors }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden">
        {sectors.map((sector, i) => (
            <div key={i} className="h-90 relative">
                <Link href={`/sectors/${i + 1}`}>
                    <Image
                        src={sector.image}
                        alt={sector.title}
                        fill
                        style={{ objectFit: "cover" }}
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-7 left-6 right-6 text-2xl text-white uppercase">
                        <h2 className="text-white text-lg font-semibold">{sector.title}</h2>
                        <div className="text-gray-100 mt-3">
                            <p className="font-medium text-xs border-b border-gray-100 pb-1 w-fit">
                                Companies:
                            </p>
                            <ul className="space-y-2 mt-3 text-xs">
                                {sector.companies.map((item, j) => (
                                    <li key={j}>{item}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </Link>
            </div>
        ))}
    </div>
);

const Desktop = ({ sectors }) => {
    const [hoverIndex, setHoverIndex] = useState(null);

    const total = sectors.length;
    const expanded = 48; // %
    const collapsed = total > 1 ? (100 - expanded) / (total - 1) : 100;
    const base = 100 / total;

    return (
        <div className="hidden lg:block">
            <AnimatedLines />
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
            >
                <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 pt-2">
                    Our Sectors
                </h2>
            </motion.div>

            <div className="mt-14 h-[640px] flex overflow-hidden rounded-none">
                {sectors.map((sector, i) => {
                    const width =
                        hoverIndex === null
                            ? `${base}%`
                            : hoverIndex === i
                                ? `${expanded}%`
                                : `${collapsed}%`;

                    return (
                        <div
                            key={i}
                            style={{ width }}
                            className="
                relative
                transition-all
                duration-700
                ease-[cubic-bezier(0.22,1,0.36,1)]
                overflow-hidden
              "
                            onMouseEnter={() => setHoverIndex(i)}
                            onMouseLeave={() => setHoverIndex(null)}
                        >
                            <Link href={`/sectors/${i + 1}`}>
                                <Image
                                    src={sector.image}
                                    alt={sector.title}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
                                {hoverIndex !== null && hoverIndex !== i && (
                                    <div className="absolute inset-0 bg-black/40 transition-opacity duration-300" />
                                )}
                                <div
                                    className={`
                  absolute bottom-6 left-4 z-20
                  writing-mode-vertical rotate-180
                  transition-all duration-300
                  ${hoverIndex === i ? "opacity-0" : "opacity-100"}
                `}
                                >
                                    <p className="text-white font-semibold uppercase tracking-wide">
                                        {sector.title}
                                    </p>
                                </div>
                                <div
                                    className={`
                  absolute bottom-10 left-6 right-6 z-30
                  transition-all duration-700
                  ${hoverIndex === i
                                            ? "opacity-100 translate-y-0"
                                            : "opacity-0 translate-y-10"
                                        }
                `}
                                >
                                    <h3 className="text-white text-xl font-semibold">
                                        {sector.title}
                                    </h3>

                                    <div className="text-gray-100 mt-4">
                                        <p className="font-medium text-sm border-b border-gray-100 pb-1 w-fit">
                                            Companies:
                                        </p>
                                        <ul className="space-y-1 mt-2 text-sm">
                                            {sector.companies.map((item, j) => (
                                                <li key={j}>{item}</li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default SectorsSection;
