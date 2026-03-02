"use client"

import * as React from "react"
import { motion } from "framer-motion";
import Image from "next/image"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "../Accordian";

const containerVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function WhyUs({ items, reverse = false }) {
    return (
        <div className={`grid lg:grid-cols-2 lg:h-[70vh] ${reverse && "[&>*:first-child]:order-2"}`}>
            <motion.div
                className="p-8 lg:p-15"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
            >
                {items.heading && (
                    <p className="font-bold text-3xl uppercase">{items.heading}</p>
                )}
                {items.description && (
                    <p className="text-gray-600 my-5">{items.description}</p>
                )}
                {items.bullets && (
                    <ul className="mt-4 list-disc pl-5 mb-4 space-y-2">
                        {items.bullets.map((textItem, j) => (
                            <li key={j} className="text-gray-600">{textItem}</li>
                        ))}
                    </ul>
                )}
                <Accordion
                    type="single"
                    collapsible
                    className="w-full"
                    defaultValue="item-1"
                >
                    {items.data?.map((item, i) => (
                        <AccordionItem key={i} value={`item-${i + 1}`}>
                            <AccordionTrigger className="cursor-pointer t-base-hover transition-colors duration-500 font-bold text-lg">
                                {item.title}
                            </AccordionTrigger>

                            <AccordionContent className="text-balance">
                                <motion.div
                                    initial={{ opacity: 0, height: 0 }}
                                    animate={{ opacity: 1, height: "auto" }}
                                    exit={{ opacity: 0, height: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                    className="overflow-hidden"
                                >
                                    {item.content}
                                </motion.div>
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
            </motion.div>
            <div className="relative w-full h-80 lg:h-full">
                <Image
                    src="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771915804/office_jaeuiz.webp"
                    alt="Why Us"
                    fill
                    className="object-cover"
                />
            </div>
        </div >
    )
}