"use client"

import { StarsIcon } from "lucide-react"
import PrimaryButton from "../UI/PrimaryButton"
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: i => ({ opacity: 1, x: 0, transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" } }),
};

function BoosterPumpSlideRevealSection({
    heading = "Stats",
    subHeading = "Built on intelligent foundations",
    items = [
        { title: "99.9%", text: "Uptime and reliability across all platforms.", width: "md:w-full" },
        { title: "10K+", text: "Businesses using our AI agents.", width: "md:w-[90%]" },
        { title: "98%", text: "User satisfaction rate across industries.", width: "md:w-[80%]" },
        { title: "2M+", text: "Conversations powered every month.", width: "md:w-[70%]" }
    ],
    text1 = "Smarter numbers that power real human-AI connection.",
    text2 = "Our AI agents are trained to deliver human-level intelligence at machine speed."
}) {
    return (
        <section className="max-w-7xl mx-auto px-5 py-8 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                <div className="max-w-md flex flex-col justify-between gap-10">
                    <div>
                        <div className="flex gap-2 items-center t-base">
                            <StarsIcon fill="#2c3f6e" size={15} />
                            <span>{heading}</span>
                        </div>
                        <h2 className="text-4xl tracking-tight font-semibold mt-3 leading-11">{subHeading}</h2>
                    </div>
                    <div>
                        <p className="text-xl font-medium">{text1}</p>
                        <p className="mt-3 mb-6 text-gray-700">{text2}</p>
                        {/* <PrimaryButton label="Explore" /> */}
                    </div>
                </div>
                <div className="flex flex-col items-end gap-4">
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
        className={`border-l-2 ${i % 2 === 0 ? "border-[#007db7]" : "border-[#2c3f6e]"} bg-gray-50 p-5 w-full ${item.width}`}>
        <span className="text-xl font-medium">{item.title}</span>
        <p className="mt-1 text-gray-700 text-sm">{item.text}</p>
    </motion.div>
)

export default BoosterPumpSlideRevealSection