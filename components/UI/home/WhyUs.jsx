"use client"

import * as React from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function WhyUs({
    items,
    reverse = true,
    image = "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776679760/idea-creative-solving-question-icons.jpg_fahnp3.jpg"
}) {
    const [openIndex, setOpenIndex] = React.useState(0)
    const contentClassName = "text-sm text-gray-500 leading-relaxed pb-4 pl-[30px] pr-6"

    const toggle = (i) => setOpenIndex(prev => prev === i ? null : i)

    return (
        <section className="max-w-[1600px] mx-auto px-5 my-10">
            <div className={`
                grid lg:grid-cols-2 rounded-2xl overflow-hidden
                border border-gray-100 min-h-[560px]
                ${reverse ? "[&>*:first-child]:order-2" : ""}
            `}>
                <motion.div
                    className="flex flex-col justify-center px-8 py-14 lg:px-14 bg-white"
                    initial={{ opacity: 0, x: -24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <p className="text-[16px] font-semibold uppercase tracking-[0.14em] text-gray-400 mb-5">
                        Why choose us
                    </p>

                    {items.heading && (
                        <h2 className="text-3xl lg:text-[32px] font-semibold leading-snug text-gray-900 mb-4 max-w-sm">
                            {items.heading}
                        </h2>
                    )}

                    {items.description && (
                        <p className="text-gray-500 text-sm leading-relaxed mb-8 max-w-md">
                            {items.description}
                        </p>
                    )}

                    {/* Accordion */}
                    <div className="divide-y divide-gray-100 border-t border-gray-100">
                        {items.data?.map((item, i) => (
                            <div key={i} className="border-b border-gray-100">
                                <button
                                    onClick={() => toggle(i)}
                                    className="w-full flex items-center gap-3 py-4 text-left group"
                                >
                                    <span className="text-[11px] font-medium text-gray-300 min-w-[22px]">
                                        {String(i + 1).padStart(2, "0")}
                                    </span>
                                    <span className={`
                                        flex-1 text-sm font-medium transition-colors duration-300
                                        ${openIndex === i ? "text-gray-900" : "text-gray-600 group-hover:text-gray-900"}
                                    `}>
                                        {item.title}
                                    </span>
                                    <span className={`
                                        relative w-4 h-4 flex-shrink-0 text-gray-400
                                        transition-transform duration-300
                                        ${openIndex === i ? "rotate-45 text-gray-700" : ""}
                                    `}>
                                        <span className="absolute inset-y-[7px] inset-x-0 h-px bg-current rounded" />
                                        <span className="absolute inset-x-[7px] inset-y-0 w-px bg-current rounded" />
                                    </span>
                                </button>

                                <AnimatePresence initial={false}>
                                    {openIndex === i && (
                                        <motion.div
                                            key="content"
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            transition={{ duration: 0.3, ease: "easeInOut" }}
                                            className="overflow-hidden"
                                        >
                                            {typeof item.content === "string" ? (
                                                <p className={contentClassName}>{item.content}</p>
                                            ) : (
                                                <div className={contentClassName}>{item.content}</div>
                                            )}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>
                </motion.div>

                <motion.div
                    className="relative w-full h-72 lg:h-full min-h-[300px]"
                    initial={{ opacity: 0, scale: 1.03 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <Image
                        src={image}
                        alt="Why Us"
                        fill
                        className="object-cover brightness-90"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/15 to-transparent" />
                </motion.div>
            </div>
        </section>
    )
}
