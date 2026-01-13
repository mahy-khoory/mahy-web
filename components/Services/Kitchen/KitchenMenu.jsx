"use client"

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image"
import { useState } from "react";

function KitchenMenu() {
    const items = [
        { title: "Strategic Visionaries", text: "We start by understanding your business at its core. Ourteam of seasoned consultants collaborates with you to craft a strategic vision that aligns with your goals.", image: "/gallery/gallery-1.jpg" },
        { title: "Customized Solutions", text: "No two businesses are alike, and we recognize that. Our team develops bespoke solutions tailored to your specific needs.", image: "/gallery/gallery-2.jpg" },
        { title: "Collaborative Execution", text: "We start by understanding your business at its core. Ourteam of seasoned consultants collaborates with you to craft a strategic vision that aligns with your goals.", image: "/gallery/gallery-3.jpg" }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="max-w-7xl mx-auto px-5 py-8 md:py-15">
            <h2 className="t-base font-bold text-lg text-center md:text-start">Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-40">
                <div>
                    <p className="mt-3 md:mt-6 mb-7 md:mb-12 md:text-xl text-gray-600 text-center md:text-start">Our unique methodology is designed to empower organizations, driving transformative change and sustainable growth. Discover the key pillars of our collaborative process:</p>
                    <div className="overflow-hidden">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 1.02 }}
                                transition={{ duration: 0.45, ease: "easeOut" }}
                                className="relative w-full h-100 md:h-150">
                                <Image src={items[currentIndex].image} alt="Kitchen Menu" fill style={{ objectFit: "cover" }} />
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
                <div className="space-y-6 md:space-y-8">
                    {items.map((item, i) => (
                        <button key={i} className={`${i === currentIndex ? "bg-slate-500 text-white" : "bg-slate-100 text-gray-400"} p-8 md:pl-12 md:py-12 flex gap-8 relative 
                        group w-full transition-all duration-500`} onClick={() => setCurrentIndex(i)}>
                            <span className="text-4xl font-semibold">0{i + 1}</span>
                            <div className="max-w-xs text-start">
                                <h3 className="text-2xl font-semibold">{item.title}</h3>
                                <p className="mt-4">{item.text}</p>
                            </div>
                            <div className={`absolute left-0 top-0 bottom-0 w-2.5 group-hover:bg-slate-700 ${i === currentIndex && "bg-slate-700"} transition-all duration-500`} />
                        </button>
                    ))}
                </div>
            </div>
        </section>
    )
};

export default KitchenMenu