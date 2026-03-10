"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import SecondaryButton from "@/components/UI/SecondaryButton";
import ArrowActionButton from "./ArrowActionButton";

export default function ValuesSection({
    eyebrow,
    title,
    description,
    imageSrc,
    imageAlt = "",
    imagePosition = "right",
    ctaHref,
    priority = false,
    className = "",
    width = "max-w-6xl mx-auto",
    gap = "gap-16 lg:gap-28 lg:grid-cols-2",
    padding = "px-6 sm:px-10 lg:px-12 pt-20 pb-10 sm:py-24 lg:pt-28 lg:pb-16",
    col1,
    col2,
    h1 = false,
    involvement,
    involvement2,
    contribution,
    items,
    contribution2,
    impact,
    impact2
}) {
    const isImageLeft = imagePosition === "left";

    return (
        <section className={`w-full bg-white ${className}`}>
            <div className={`${width} ${padding}`}>
                <div className={`grid items-center ${gap} ${isImageLeft ? "lg:[&>*:first-child]:order-2" : ""}`}>
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`${col1}`}>
                        {eyebrow && (
                            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-slate-500">
                                {eyebrow}
                            </div>
                        )}

                        {h1 ?
                            <h1 className="text-2xl font-extrabold leading-tight tracking-tight text-slate-950">
                                {title}
                            </h1>
                            :
                            <h2 className="mt-4 text-3xl sm:text-4xl lg:text-[48px] font-extrabold leading-tight tracking-tight text-slate-950">
                                {title}
                            </h2>
                        }

                        <p className="mt-2 font-light leading-relaxed text-slate-700 text-sm">
                            {description}
                        </p>

                        {involvement && (
                            <>
                                <h2 className="font-semibold mt-3">MAHY Khoory's Involvement</h2>
                                <p className="mt-2 font-light leading-relaxed text-slate-700 text-sm">{involvement}</p>
                                {involvement2 &&
                                    <p className="mt-1.5 font-light leading-relaxed text-slate-700 text-sm">{involvement2}</p>
                                }
                            </>
                        )}

                        {(contribution || items) && (
                            <>
                                <h2 className="font-semibold mt-3">Technical Contribution</h2>
                                {contribution &&
                                    <p className="mt-1.5 font-light leading-relaxed text-slate-700 text-sm">{contribution}</p>
                                }
                                {items && (
                                    <ul className="list-disc pl-5 mt-1.5 space-y-1">
                                        {items.map((bullet, index) => (
                                            <li key={index} className="font-light leading-relaxed text-slate-700 text-sm">{bullet}</li>
                                        ))}
                                    </ul>
                                )}
                                {contribution2 &&
                                    <p className="mt-1.5 font-light leading-relaxed text-slate-700 text-sm">{contribution2}</p>
                                }
                            </>
                        )}

                        {impact && (
                            <>
                                <h2 className="font-semibold mt-3">Project Impact</h2>
                                <p className="mt-2 font-light leading-relaxed text-slate-700 text-sm">{impact}</p>
                                {impact2 &&
                                    <p className="mt-1.5 font-light leading-relaxed text-slate-700 text-sm">{impact2}</p>
                                }
                            </>
                        )}

                        {ctaHref && (
                            <div className="mt-10">
                                <Link href={ctaHref}>
                                    <ArrowActionButton
                                        width="w-30"
                                        height="h-14"
                                        iconSize={29}
                                        ariaLabel="Our People"
                                    />
                                </Link>
                            </div>
                        )}
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.96 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`w-full ${col2} h-80 lg:h-full`}
                    >
                        <div className="group relative w-full overflow-hidden bg-slate-100 rounded-xl h-full">
                            <div className="pointer-events-none absolute inset-0 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-linear-to-tr from-white/10 via-white/5 to-transparent" />
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                priority={priority}
                                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05]"
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
