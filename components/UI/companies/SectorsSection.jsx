"use client"

import { motion } from "framer-motion";
import AnimatedLines from "../AnimatedLines";
import Image from "next/image";
import { useState } from "react";

function SectorsSection() {
    const sectors = [
        {
            title: "Engineered Wood & Recycled Materials Manufacturing",
            items: [
                "The Engineered Wood & Recycled Materials Manufacturing sector transforms reclaimed wood waste into high-performance engineered products. Its primary focus is the production of compressed eco-wood blocks manufactured entirely from recycled materials.",
                "These products provide durable and cost-effective alternatives to virgin timber, serving construction, packaging, industrial support, and furniture applications. Consistency in density, strength, and dimensions ensures suitability for large-scale industrial use.",
                "Manufacturing processes emphasize automation, quality control, and scalability, enabling reliable supply to demanding customers. Custom specifications allow adaptation to different load-bearing and structural requirements.",
                "This sector plays a meaningful role in reducing wood waste, conserving forests, and supporting circular economy objectives. It converts low-value waste into reusable industrial inputs.",
                "Through innovation and disciplined manufacturing, the sector contributes both environmental value and commercial viability to the Group's portfolio."
            ],
            companies: [
                "Union Wood Works"
            ],
            image: "/gallery/gallery-1.jpg"
        },
        {
            title: "Engineering, Project Delivery & Technical Services",
            items: [
                "The Engineering, Project Delivery & Technical Services sector functions as the MAHY Khoory Group’s specialized technical execution arm. It is dedicated to delivering engineered solutions rather than standalone equipment, focusing on performance, reliability, and lifecycle value.",
                "This sector manages the complete project lifecycle, starting from hydraulic studies, system design, and engineering calculations through to fabrication, installation, commissioning, and post-handover support. Projects are executed across municipal infrastructure, utilities, industrial facilities, commercial developments, and large-scale residential projects.",
                "Engineering teams work closely with consultants, contractors, and end users to develop customized solutions that respond to site-specific challenges, operational constraints, and regulatory requirements. This collaborative approach ensures systems are not only compliant but optimized for long-term efficiency.",
                "Strong integration with the Group’s trading and manufacturing sectors allows seamless access to high-quality equipment, standardized components, and controlled supply chains. This vertical alignment reduces project risks, improves delivery timelines, and ensures consistency across engineering standards.",
                "As infrastructure demands become more complex, this sector continues to invest in engineering talent, digital design tools, and advanced testing capabilities. It remains central to the Group’s ability to deliver technically sophisticated and mission-critical systems."

            ],
            companies: [
                "Al Khoory Engineering"
            ],
            image: "/gallery/gallery-2.jpg"
        },
        {
            title: "Packaging Manufacturing & Sustainable Packaging Solutions",
            items: [
                "This sector focuses on converting raw and recycled materials into finished packaging products that support modern supply chains. It serves a diverse customer base spanning FMCG, food and beverage, agriculture, industrial manufacturing, logistics, and export markets.",
                "Manufacturing capabilities include corrugated cartons, customized paper-based packaging, and rigid plastic containers such as bottles and jerrycans. Design flexibility and structural engineering ensure packaging solutions meet functional, branding, and regulatory requirements.",
                "Strong vertical integration with the Group’s paper recycling and containerboard operations ensures consistent material quality, cost stability, and sustainability alignment. This integration allows customers to benefit from traceable and environmentally responsible packaging solutions.",
                "Facilities within this sector are equipped with modern converting, printing, and finishing technologies, enabling high-volume production while maintaining strict quality standards. Continuous improvement programs enhance efficiency and reduce waste.",
                "As sustainability expectations increase globally, this sector continues to innovate in lightweight designs, recyclable materials, and performance optimization, reinforcing the Group’s leadership in responsible packaging manufacturing."
            ],
            companies: [
                "National Paper Industries",
                "Union Sustainable Packaging Solutions LLC",
                "Senan Industry LLC"
            ],
            image: "/gallery/gallery-3.jpg"
        },
        {
            title: "Paper Recycling & Containerboard Manufacturing",
            items: [
                "The Paper Recycling & Containerboard Manufacturing sector anchors the MAHY Khoory Group’s circular industrial ecosystem. It plays a strategic role in transforming recovered paper into essential raw materials for the packaging industry.",
                "Operating large-scale paper mills, this sector produces recycled linerboard and fluting medium that form the backbone of corrugated packaging solutions. These products support logistics, FMCG, food, industrial, and export-oriented markets across the UAE and the region.",
                "By processing significant volumes of recovered paper daily, the sector actively contributes to waste diversion and landfill reduction. Its operations align with national sustainability agendas by reducing dependence on virgin raw materials and promoting responsible resource use.",
                "Integration with the Group’s waste collection and recycling operations ensures stable feedstock supply, consistent quality, and cost efficiency. This closed-loop model strengthens supply security while delivering environmental and economic benefits.",
                "Continuous investment in technology, capacity expansion, and energy efficiency reinforces the sector’s competitiveness and long-term resilience, positioning it as a cornerstone of sustainable manufacturing within the Group."

            ],
            companies: [
                "Union Paper Mills",
                "Al Dhafra Paper Manufacturing"
            ],
            image: "/gallery/gallery-4.jpg"
        },
        {
            title: "Technical Textiles & Advanced Materials Manufacturing",
            items: [
                "This sector represents the Group’s entry into advanced, technology-driven manufacturing. It focuses on the production of nonwoven and technical textile materials designed for performance-critical applications.",
                "Products serve healthcare, hygiene, filtration, construction, agriculture, automotive, and industrial markets, where material consistency, regulatory compliance, and functional performance are essential.",
                "Advanced production technologies such as spunbond, meltblown, and composite processes enable customization across fiber blends, weights, and finishes. In-house laboratories ensure strict quality control and compliance with international standards.",
                "Continuous R&D efforts enhance tensile strength, filtration efficiency, absorbency, and sustainability. The sector also explores the integration of recycled polymer feedstocks to align with environmental goals.",
                "This sector positions the Group within high-value industrial value chains that demand innovation, technical expertise, and manufacturing precision."
            ],
            companies: [
                "Union Nonwoven Industries"
            ],
            image: "/gallery/gallery-5.jpg"
        },
        {
            title: "Trading, Distribution & Industrial Supply",
            items: [
                "The Trading, Distribution & Industrial Supply sector represents the historical foundation and commercial engine of the MAHY Khoory Group. Built on decades of market presence, this sector has played a critical role in supporting infrastructure development, construction growth, industrial expansion, and utilities across the UAE and the wider region.",
                "The sector focuses on the sourcing, importation, distribution, and project-based supply of industrial, electromechanical, pumping, HVAC, and building-services equipment. Through long-standing partnerships with globally recognized manufacturers, the Group ensures access to proven technologies, consistent quality, and products that meet international and local regulatory standards.",
                "Customers served by this sector include government authorities, consultants, contractors, developers, industrial operators, and facility owners. The ability to supply complete equipment packages—rather than isolated products—enables clients to streamline procurement, reduce interface risks, and improve overall project efficiency.",
                "Operational strength is supported by extensive warehousing facilities, structured inventory management, and dedicated logistics resources. Technical sales teams and product specialists provide application support, equipment selection guidance, documentation, and after-sales coordination, ensuring long-term reliability of supplied systems.",
                "As markets evolve, this sector continues to adapt by expanding product portfolios, strengthening supplier alliances, and integrating digital tools into sales and supply-chain processes. It remains a cornerstone of the Group’s diversified portfolio and a key enabler of downstream engineering, manufacturing, and service operations."
            ],
            companies: [
                "M.A.H.Y. Khoory Trading",
                "Greenland Equipment & Machinery Est. L.L.C.",
                "Al Mehwar Alfede General Trading LLC",
                "Emirates International Equipment & Machinery L.L.C."
            ],
            image: "/gallery/gallery-6.jpg"
        },
        {
            title: "Waste Management, Recycling & Environmental Services",
            items: [
                "The Waste Management, Recycling & Environmental Services sector delivers comprehensive environmental solutions across municipal, commercial, industrial, recyclable, and hazardous waste streams. It operates across the UAE and Oman with wide geographic coverage.",
                "Services include waste collection, segregation, recycling, hazardous waste transportation, and compliant disposal. Strict adherence to regulatory frameworks ensures environmental protection and operational safety.",
                "This sector plays a critical role in supplying recyclable materials into the Group’s manufacturing ecosystem, supporting paper, packaging, and recycled-material operations.",
                "Operational scale, trained personnel, and modern fleet infrastructure enable reliable service delivery to government entities, industrial clients, and commercial customers.",
                "By combining environmental stewardship with operational discipline, this sector reinforces the Group’s leadership in sustainable waste management."
            ],
            companies: [
                "Recyclable Waste Management Division",
                "Solid Waste Management Division",
                "Al Dhafra Waste Collection LLC",
                "Around Continent Waste Collection",
                "Al Etihad Waste Management Services LLC",
                "Clean Earth LLC"
            ],
            image: "/gallery/gallery-8.jpeg"
        }
    ];
    return (
        <section className="mt-20 max-w-7xl mx-auto px-5">
            <Mobile sectors={sectors} />
            <Desktop sectors={sectors} />
        </section>
    )
};

const Mobile = ({ sectors }) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden">
        {sectors.map((sector, i) => (
            <div key={i} className="h-90 relative">
                <Image src={sector.image} alt={sector.title} fill style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-7 left-6 right-6 text-2xl text-white uppercase">
                    <h2 className="text-white text-lg font-semibold">{sector.title}</h2>
                    <div className="text-gray-100 mt-3">
                        <p className="font-medium text-xs border-b border-gray-100 pb-1 w-fit">Companies:</p>
                        <ul className="space-y-2 mt-3 text-xs">
                            {sector.companies.map((item, j) => (
                                <li key={j}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        ))}
    </div>
);

const Desktop = ({ sectors }) => {
    const [hoverIndex, setHoverIndex] = useState(false);
    return (
        <div className="hidden lg:block">
            <AnimatedLines />
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}>
                <h2 className="text-4xl md:text-5xl font-semibold text-center text-gray-900 pt-2">Our Sectors</h2>
            </motion.div>
            <div className="flex h-160 mt-10">
                {sectors.map((sector, i) => (
                    <div key={i} className={`${hoverIndex === false ? "w-[14.28%]" : i === hoverIndex ? "w-[25%]" : "w-[12.5%] saturate-70"} transition-all duration-500 relative`}
                        onMouseEnter={() => setHoverIndex(i)} onMouseLeave={() => setHoverIndex(false)}>
                        <div className={`absolute bottom-10 left-5 right-5 z-10 ${hoverIndex === i ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"} transition-all duration-700`}>
                            <h2 className="text-white text-lg font-semibold">{sector.title}</h2>
                            {/* {sector.items.map((item, i) => (
                                <p key={i} className="text-sm mt-1 text-gray-100">{item}</p>
                            ))} */}
                            <div className="text-gray-100 mt-4">
                                <p className="font-medium text-sm border-b border-gray-100 pb-1 w-fit">Companies:</p>
                                <ul className="space-y-1 mt-2 text-sm">
                                    {sector.companies.map((item, j) => (
                                        <li key={j}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <div className={`absolute z-10 bottom-4 left-3 writing-mode-vertical rotate-180 transition-all duration-200 ${i === hoverIndex ? "opacity-0" : "opacity-100"}`}>
                            <p className="text-white font-semibold uppercase">{sector.title}</p>
                        </div>
                        <div className="absolute inset-0">
                            <Image src={sector.image} alt={sector.title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent" />
                        <div className={`absolute z-20 inset-0 ${(hoverIndex !== false && hoverIndex !== i) && "bg-black/40"} transition-colors duration-300`} />
                    </div>
                ))}
            </div>
        </div>
    )
};

export default SectorsSection