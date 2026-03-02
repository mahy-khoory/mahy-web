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
    ctaLabel = "Learn More",
    ctaHref = "/",
    priority = false,
    className = "",
}) {



    const isImageLeft = imagePosition === "left";

    return (
        <section className={`w-full bg-white ${className}`}>
            <div
                className="
          max-w-6xl
          mx-auto
          px-6 sm:px-10 lg:px-12
          py-20 sm:py-24 lg:py-28
        "
            >
                <div
                    className={`
            grid items-center
            gap-16 lg:gap-28
            lg:grid-cols-2
            ${isImageLeft ? "lg:[&>*:first-child]:order-2" : ""}
          `}
                >
                    <motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className={`
              max-w-[560px]
              lg:-translate-y-6
              ${isImageLeft ? "lg:translate-x-6" : "lg:-translate-x-6"}
            `}
                    >
                        {eyebrow && (
                            <div className="text-xs font-semibold tracking-[0.28em] uppercase text-slate-500">
                                {eyebrow}
                            </div>
                        )}

                        <h2
                            className="
                mt-4
                text-3xl
                sm:text-4xl
                lg:text-[48px]
                font-extrabold
                leading-tight
                tracking-tight
                text-slate-950
              "
                        >
                            {title}
                        </h2>

                        <p
                            className="
                mt-6
                text-base
                font-light
                sm:text-lg
                leading-relaxed
                text-slate-700
              "
                        >
                            {description}
                        </p>

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
                        className="w-full"
                    >
                        <div
                            className="
      group
      relative
      w-full
      overflow-hidden
      bg-slate-100

      aspect-[16/9]
      sm:aspect-[4/3]
      lg:aspect-[3/4]
      xl:aspect-[4/5]

      max-h-[520px]
    "
                        >
                            <div
                                className="
        pointer-events-none
        absolute inset-0
        z-10
        opacity-0
        group-hover:opacity-100
        transition-opacity duration-500
        bg-gradient-to-tr
        from-white/10
        via-white/5
        to-transparent
      "
                            />

                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                fill
                                priority={priority}
                                sizes="(max-width: 1024px) 100vw, 50vw"
                                className="
        object-cover
        transition-transform duration-700 ease-out
        group-hover:scale-[1.05]
      "
                            />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
