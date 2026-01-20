"use client"

import { StarsIcon } from "lucide-react"
import PrimaryButton from "../UI/PrimaryButton"
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: i => ({ opacity: 1, x: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" } }),
};

function BoosterPumpSlideRevealSection() {
    const items = [
        { count: "99.9%", text: "Uptime and reliability across all platforms.", width: "md:w-full" },
        { count: "10K+", text: "Businesses using our AI agents.", width: "md:w-[90%]" },
        { count: "98%", text: "User satisfaction rate across industries.", width: "md:w-[80%]" },
        { count: "2M+", text: "Conversations powered every month.", width: "md:w-[70%]" }
    ];
    return (
        <section className="max-w-7xl mx-auto px-5 py-8 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="max-w-md flex flex-col justify-between gap-10">
                    <div>
                        <div className="flex gap-2 items-center t-base">
                            <StarsIcon fill="#79c4e7" size={15} />
                            <span>Stats</span>
                        </div>
                        <h2 className="text-4xl tracking-tight font-semibold mt-3 leading-11">Built on intelligent foundations</h2>
                    </div>
                    <div>
                        <p className="text-xl font-medium">Smarter numbers that power real human-AI connection.</p>
                        <p className="mt-3 mb-6 text-gray-700">Our AI agents are trained to deliver human-level intelligence at machine speed.</p>
                        <PrimaryButton label="Explore" />
                    </div>
                </div>
                <div className="flex flex-col items-end gap-6">
                    {items.map((item, i) => (
                        <Card key={i} item={item} i={i} />
                    ))}
                </div>
            </div>
        </section >
    )
};

const Card = ({ item, i }) => (
    <motion.div key={i} variants={itemVariants} initial="hidden" whileInView="visible" custom={i} viewport={{ once: true }}
        className={`border-l-2 ${i % 2 === 0 ? "border-[#007db7]" : "border-[#79c4e7]"} bg-gray-50 p-5 w-full ${item.width}`}>
        <span className="text-4xl font-medium">{item.count}</span>
        <p className="mt-0.5 text-gray-700">{item.text}</p>
    </motion.div>
)

export default BoosterPumpSlideRevealSection