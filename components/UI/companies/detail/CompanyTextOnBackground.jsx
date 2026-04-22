"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import clsx from "clsx"

function CompanyTextOnBackground({
    heading = "Warranty",
    text = "",
    items,
    endText,
    image = "/gallery/gallery-10.jpeg",
    align = "right",
}) {

    const isRight = align === "right"

    return (
        <section className="relative overflow-hidden">
            <div className="relative z-10 max-w-7xl mx-auto px-5 py-16 md:py-32">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {isRight && <div className="hidden md:block" />}
                    <motion.div
                        initial={{ opacity: 0, x: isRight ? 40 : -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.3 }}
                        className={clsx(
                            "max-w-xl",
                            !isRight && "md:col-start-1",
                            isRight && "md:col-start-2"
                        )}
                    >
                        <h2 className="uppercase text-white font-semibold text-3xl md:text-5xl">
                            {heading}
                        </h2>

                        <p className="text-gray-100 mt-5 md:mt-7 leading-7 md:leading-8 tracking-wide">
                            {text}
                        </p>

                        {items && (
                            <ul className="list-disc pl-5 mt-3 md:mt-5 space-y-1">
                                {items.map((bullet, index) => (
                                    <li key={index} className="font-light leading-relaxed text-gray-100">{bullet}</li>
                                ))}
                            </ul>
                        )}

                        <p className="text-gray-100 mt-5 md:mt-7 leading-7 md:leading-8 tracking-wide">
                            {endText}
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="absolute inset-0">
                <Image
                    src={image}
                    alt={heading}
                    fill
                    className="object-cover"
                    priority
                />
            </div>
            <div className="absolute inset-0 bg-black/50" />
        </section>
    )
}

export default CompanyTextOnBackground