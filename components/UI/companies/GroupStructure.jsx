"use client"

import Image from "next/image";
import { motion } from "framer-motion";

function GroupStructure() {
    const structure = [
        [
            {
                title: "Trading, Distribution & Industrial Supply",
                items: [
                    "M.A.H.Y. Khoory Trading",
                    "Greenland Equipment & Machinery Est. L.L.C.",
                    "Al Mehwar Alfede General Trading LLC",
                    "Emirates International Equipment & Machinery L.L.C."
                ]
            },
            {
                title: "Engineering, Project Delivery & Technical Services",
                items: [
                    "Al Khoory Engineering"
                ]
            }
        ],
        [
            {
                title: "Paper Recycling & Containerboard Manufacturing",
                items: [
                    "Union Paper Mills",
                    "Al Dhafra Paper Manufacturing"
                ]
            },
            {
                title: "Packaging Manufacturing & Sustainable Packaging Solutions",
                items: [
                    "National Paper Industries (NPI)",
                    "Union Sustainable Packaging Solutions LLC",
                    "Senan Industry LLC"
                ]
            },
            {
                title: "Engineered Wood & Recycled Materials Manufacturing",
                items: [
                    "Union Wood Works"
                ]
            }
        ],
        [
            {
                title: "Technical Textiles & Advanced Materials Manufacturing",
                items: [
                    "Union Nonwoven Industries"
                ]
            },
            {
                title: "Waste Management, Recycling & Environmental services",
                items: [
                    "Recyclable Waste Management Division",
                    "Solid Waste Management Division",
                    "Al Dhafra Waste Collection LLC",
                    "Around Continent Waste Collection",
                    "Al Etihad Waste Management Services LLC(Oman)",
                    "Clean Earth LLC"
                ]
            },
            {
                title: "Renewable Energy & Sustainability Engineering",
                items: [
                    "Pure Energy Construction LLC"
                ]
            },
            {
                title: "Sustainability, Energy & Green Building Consultancy",
                items: [
                    "Creative Solutions Green Building Consultancy"
                ]
            }
        ],
        [
            {
                title: "Transportation & Logistics",
                items: [
                    "Greenland Transport"
                ]
            },
            {
                title: "Automotive & Mobility Solutions",
                items: [
                    "MAHY Khoory Automotive",
                    "MAHY Khoory Motors"
                ]
            },
            {
                title: "Hospitality",
                items: [
                    "Pearl Marina Hotel Apartments"
                ]
            },
            {
                title: "Food & Beverage",
                items: [
                    "Market Restaurant & Café"
                ]
            }
        ]
    ];
    return (
        <section className="relative">
            <div className="relative z-10 max-w-7xl mx-auto px-5 py-18 lg:py-22 text-white">
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, ease: "easeOut" }}>
                    <h2 className="text-4xl md:text-6xl font-semibold text-center text-gray-100 pt-10">MAHY Khoory Group</h2>
                </motion.div>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-7 mt-16">
                    {structure.map((column, i) => (
                        <div key={i} className="space-y-5">
                            {column.map((row, j) => (
                                <motion.div key={j} className="overflow-hidden rounded-2xl"
                                    initial={{ opacity: 0, y: 10 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.45, ease: "easeOut" }}
                                    viewport={{ once: true, amount: 0.3 }}>
                                    <h3 className="relative p-6 bg-slate-900 leading-5 tracking-tight
                                        before:absolute before:top-0 before:left-0 before:h-px before:w-full
                                        before:bg-linear-to-r before:from-transparent before:via-white before:to-transparent
                                        after:absolute after:bottom-0 after:left-0 after:h-px after:w-full
                                        after:bg-linear-to-r after:from-transparent after:via-white after:to-transparent">
                                        {row.title}
                                    </h3>
                                    <ul className="px-6 py-7 bg-slate-900/60 space-y-3 tracking-tight">
                                        {row.items.map((item, k) => (
                                            <li key={k}>{item}</li>
                                        ))}
                                    </ul>
                                </motion.div>
                            ))}
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0">
                <Image src={"/gallery/gallery-1.jpg"} alt="MAHY Khoory Group" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="absolute inset-0 bg-black/50" />
        </section>
    )
}

export default GroupStructure