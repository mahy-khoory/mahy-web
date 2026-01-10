"use client"

import Image from "next/image"
import { motion } from "framer-motion"

function CompanyTextGrid() {
    return (
        <motion.section
            className="max-w-7xl mx-auto px-5 py-10 md:py-20"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                <div>
                    <h2 className="text-3xl md:text-4xl font-semibold">A little bit about us</h2>
                    <div className="mt-6 space-y-3 text-gray-600">
                        <p>Founded in 1930, M.A.H.Y Khoory has evolved from a small enterprise into a diversified conglomerate known for its innovation, quality, and dedication. One of our key milestones includes becoming one of the largest producers of recycled paper in the Middle East, reflecting our commitment to sustainability and environmental responsibility.</p>
                        <p>M.A.H.Y Khoory Group is organized into several key divisions, each contributing to our mission of delivering quality and excellence, including: trading divisions, manufacturing, recycling services, hospitality, green energy, logistics, interiors and automotive. Headquartered in Dubai, we have a workforce of over 3,200 employees and multiple regional offices spread across the GCC and other countries.</p>
                        <p>Our legacy of trust, innovation, and quality drives us forward as we continue to serve our communities and clients with unparalleled dedication.</p>
                    </div>
                </div>
                <div className="bg-black p-10 md:p-12">
                    <div className="relative h-20 w-full">
                        <Image src={"/gallery/mka.jpg"} alt="Logo" fill style={{ objectFit: "contain" }} />
                    </div>
                    <p className="text-gray-200 mt-8">We proudly collaborate with a diverse array of esteemed global brands, each renowned for their innovation and excellence in their respective fields. From household names like Ariston, Hisense, and DeWalt to industry leaders such as Dongfeng in automotive manufacturing, ABB in technology and automation, and Grundfos in pump technology and water solutions, our partnerships span across sectors like electronics, energy, construction, and beyond. These collaborations enable us to deliver comprehensive, cutting-edge solutions that meet the dynamic needs of our customers worldwide.</p>
                </div>
            </div>
        </motion.section>
    )
}

export default CompanyTextGrid