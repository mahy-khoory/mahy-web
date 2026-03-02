"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function CompanyDetailMenu({
    items
}) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="bg-slate-900 py-10 md:py-20 px-5">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-12 max-w-7xl mx-auto">
                <div className="flex h-full md:flex-col gap-x-2 gap-y-3 md:gap-4 flex-wrap md:col-span-2">
                    {items.map((item, i) => (
                        <button key={i} onClick={() => setCurrentIndex(i)}
                            className={`${currentIndex === i ? "bg-slate-700" : "bg-slate-800"} transition-colors duration-500 py-3 md:py-4 px-8 text-white rounded-2xl font-medium uppercase`}>
                            {item.label}</button>
                    ))}
                </div>
                <div className="md:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="space-y-5 text-gray-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {items[currentIndex].items.map((item, i) => (
                                    <div key={i}>
                                        {item.label && (
                                            <h2 className="font-semibold">{item.label}</h2>
                                        )}
                                        {item.text && item.text.map((text, i) => (
                                            <p key={i} className="text-gray-200 mt-2 text-sm">{text}</p>
                                        ))}
                                        {item.subItems && (
                                            <ul className="list-disc pl-5 mb-4 text-sm mt-2">
                                                {item.subItems.map((bullet, index) => (
                                                    <li key={index} className="mb-2">{bullet}</li>
                                                ))}
                                            </ul>
                                        )}
                                        {item.endText && (
                                            <p className="text-gray-200 mt-2 text-sm">{item.endText}</p>
                                        )}
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CompanyDetailMenu