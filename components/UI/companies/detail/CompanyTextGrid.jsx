"use client"

import Image from "next/image"
import { motion } from "framer-motion"


function CompanyTextGrid({
    heading = "A little bit about us",
    subheading,
    gridParagraphs,
    bottomParagraphs = [],
    paragraphs = [],
    rightText = "",
    rightSlot,
    image = "/gallery/mka.jpg",
    imageAlt = "Logo",
    showImage = true,
    cardColor = "bg-black",
    cardTextColor = "text-gray-200",
    reversed = false,
    animateOnce = true,
    className = "",
    id,
}) {
    const resolvedGrid = gridParagraphs ?? paragraphs
    const gridParas = Array.isArray(resolvedGrid) ? resolvedGrid : [resolvedGrid].filter(Boolean)
    const bottomParas = Array.isArray(bottomParagraphs)
        ? bottomParagraphs
        : [bottomParagraphs].filter(Boolean)

    const viewport = { once: animateOnce }

    return (
        <section
            id={id}
            aria-labelledby={id ? `${id}-heading` : undefined}
            className={`max-w-7xl mx-auto px-5 py-12 md:py-20 ${className}`}
        >
            <div
                className={`grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center ${
                    reversed ? "md:[direction:rtl] [&>*]:[direction:ltr]" : ""
                }`}
            >
                <div>
                    {subheading && (
                        <motion.p
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                            viewport={viewport}
                            className="mb-3 text-sm font-semibold uppercase tracking-widest text-gray-400"
                        >
                            {subheading}
                        </motion.p>
                    )}

                    <motion.h2
                        id={id ? `${id}-heading` : undefined}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={viewport}
                        className="text-3xl md:text-4xl font-semibold"
                    >
                        {heading}
                    </motion.h2>

                    {gridParas.length > 0 && (
                        <div className="mt-6 space-y-4 text-gray-600">
                            {gridParas.map((text, i) => (
                                <motion.p
                                    key={i}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.5,
                                        delay: i * 0.1,
                                        ease: "easeOut",
                                    }}
                                    viewport={viewport}
                                >
                                    {text}
                                </motion.p>
                            ))}
                        </div>
                    )}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={viewport}
                    className={`
                        ${cardColor}
                        p-8 md:p-12
                        rounded-xl
                        shadow-lg
                        hover:shadow-2xl
                        transition-shadow duration-500
                        group
                    `}
                >
                    {rightSlot ?? (
                        <>
                            {showImage && image && (
                                <motion.div
                                    className="relative h-20 w-full"
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    transition={{ duration: 0.5, delay: 0.2 }}
                                    viewport={viewport}
                                >
                                    <Image
                                        src={image}
                                        alt={imageAlt}
                                        fill
                                        style={{ objectFit: "contain" }}
                                    />
                                </motion.div>
                            )}

                            <motion.div
                                className={`${cardTextColor} leading-relaxed ${
                                    showImage && image ? "mt-8" : ""
                                }`}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.3 }}
                                viewport={viewport}
                            >
                                {typeof rightText === "string" ? (
                                    <p>{rightText}</p>
                                ) : (
                                    rightText
                                )}
                            </motion.div>
                        </>
                    )}
                </motion.div>
            </div>
            {bottomParas.length > 0 && (
                <div className="mt-10 md:mt-14 space-y-4 text-gray-600">
                    {bottomParas.map((text, i) => (
                        <motion.p
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{
                                duration: 0.5,
                                delay: i * 0.08,
                                ease: "easeOut",
                            }}
                            viewport={viewport}
                        >
                            {text}
                        </motion.p>
                    ))}
                </div>
            )}
        </section>
    )
}

export default CompanyTextGrid