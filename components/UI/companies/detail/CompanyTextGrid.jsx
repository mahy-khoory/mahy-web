"use client"

import Image from "next/image"
import { motion } from "framer-motion"

function CompanyTextGrid({
    heading = "A little bit about us",
    paragraphs = [],
    rightText = "",
    image = "/gallery/mka.jpg",
    showImage = true 
}) {

    return (
        <section className="max-w-7xl mx-auto px-5 py-12 md:py-20">

            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="text-3xl md:text-4xl font-semibold"
                    >
                        {heading}
                    </motion.h2>

                    <div className="mt-6 space-y-4 text-gray-600">
                        {paragraphs.map((text, i) => (
                            <motion.p
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: i * 0.1,
                                    ease: "easeOut"
                                }}
                                viewport={{ once: true }}
                            >
                                {text}
                            </motion.p>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50, scale: 0.98 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                    className="
                        bg-black p-8 md:p-12
                        rounded-xl
                        shadow-lg
                        hover:shadow-2xl
                        transition-all duration-500
                        group
                    "
                >
                    {showImage && (
                        <motion.div
                            className="relative h-20 w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            <Image
                                src={image}
                                alt="Logo"
                                fill
                                style={{ objectFit: "contain" }}
                            />
                        </motion.div>
                    )}

                    <motion.p
                        className={`text-gray-200 leading-relaxed ${
                            showImage ? "mt-8" : ""
                        }`}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {rightText}
                    </motion.p>

                </motion.div>

            </div>
        </section>
    )
}

export default CompanyTextGrid;