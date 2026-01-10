"use client"

import Image from "next/image"
import { motion } from "framer-motion"

function CompanyTextOnBackground() {
    return (
        <section className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto px-5 relative z-10 py-15 md:py-40">
                <div className="hidden md:block" />
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    viewport={{ once: true, amount: 0.2 }}>
                    <h2 className="uppercase text-white font-semibold text-4xl md:text-5xl">Warranty</h2>
                    <p className="text-gray-100 mt-5 md:mt-7 leading-8 tracking-wide">Choosing a Dongfeng vehicle is investing in world-class automotive design,engineering, and craftsmanship. Built with precision and reliability, Dongfeng cars are designed to excel in every challenge while offering unparalleled style and performance. To reflect our confidence in the quality of our vehicles, We proudly offer a 6-years/200,000 kms Warranty (Whichever comes first) across the UAE. This comprehensive warranty ensures peace of mind and reaffirms our commitment to delivering a worry-free ownership experience.</p>
                </motion.div>
            </div>
            <div className="absolute inset-0">
                <Image src="/gallery/gallery-10.jpeg" alt="Warranty" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="absolute inset-0 bg-black/40" />
        </section>
    )
}

export default CompanyTextOnBackground