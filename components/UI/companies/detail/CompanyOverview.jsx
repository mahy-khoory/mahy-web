"use client"

import { motion } from "framer-motion"
import Image from "next/image"

function CompanyOverview() {
    return (
        <section className="relative h-screen w-full overflow-hidden">
            <motion.div
                className="relative h-full w-full"
                initial={{ scale: 1 }}
                whileInView={{ scale: 1.1 }}
                transition={{ duration: 1, ease: "easeOut" }}
                viewport={{ once: false }}
            >
                <Image
                    src="/gallery/gallery-2.jpg"
                    alt="Company Overview"
                    fill
                    className="object-cover"
                />
            </motion.div>
            <div className="absolute inset-0 bg-black/20" />
            <div className="absolute inset-0 flex flex-col justify-between text-white pt-30 md:pt-35 md:pb-20">
                <motion.div
                    className="px-5 md:pr-0 md:pl-30"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 100, y: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: false }}>
                    <h1 className="text-3xl md:text-6xl font-bold text-center md:text-start">M.A.H.Y. Khoory Trading</h1>
                </motion.div>
                <motion.div
                    className="p-8 md:pl-30 md:pr-15 md:py-15 bg-black/20 md:bg-black/40 w-fit"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 100, x: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    viewport={{ once: false }}>
                    <div className="max-w-2xl space-y-5">
                        <p>M.A.H.Y. Khoory Trading is the commercial and distribution arm of the MAHY Khoory Group, serving as a key supplier of industrial, electromechanical, and building services equipment across the GCC and selected international markets. The division plays a central role in supporting infrastructure, construction, industrial, and utility sectors through the supply of reliable, high-quality products sourced from leading global manufacturers.</p>
                        <p>With decades of experience in import, distribution, and project supply, M.A.H.Y. Khoory Trading has established itself as a trusted partner for contractors, developers, and institutional clients, delivering both products and technical support at scale.</p>
                    </div>
                </motion.div>
            </div>
        </section >
    )
}

export default CompanyOverview