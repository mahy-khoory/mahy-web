"use client"

import { Home, Mail, Phone } from "lucide-react"
import Image from "next/image"
import { motion } from "framer-motion";

const container = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" },
        delay: 0.9,
    },
};

function OperationsAndCapabilitiesOverview({
    heading = "Our Values",
    text,
    items = [
        { title: "Transparency", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Hard Work", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Teamwork", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Ownership", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Innovation", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." },
        { title: "Commitment", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit tortor eu in viverra aliquam massa in dis." }
    ]
}) {
    return (
        <section className="bg-slate-900 pt-18 pb-10 md:py-20 px-5">
            <div className="max-w-7xl mx-auto">
                <p className="text-gray-200 font-semibold text-4xl uppercase text-center pt-5">{heading}</p>
                {text && (
                    <p className="text-white font-semibold text-3xl md:text-5xl text-center max-w-2xl mx-auto mt-4 md:mt-6">{text}</p>
                )}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-8 md:pb-40 mt-10 md:mt-16">
                    {items.map((item, i) => (
                        <Card key={i} item={item} i={i} />
                    ))}
                </div>
            </div>
        </section>
    )
};

const Card = ({ item, i }) => (
    <motion.div
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        key={i}
        className={`border border-white 
            ${i % 2 === 0 ? "bg-white" : "text-white"}
            ${(i + 1) % 3 === 2 && "md:translate-y-20"}
            ${(i + 1) % 3 === 0 && "md:translate-y-40"}`}>
        <div className="flex flex-col justify-center h-full py-8 px-8">
            <span className="text-slate-400 font-semibold text-2xl">0{i + 1}</span>
            {item.image && (
                <div className="relative w-full h-30">
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "contain" }} />
                </div>
            )}
            <h2 className="text-2xl font-semibold mt-4">{item.title}</h2>
            <div className="space-y-3">
                {item.telephone && (
                    <div className="flex items-center gap-3 text-sm mt-5">
                        <Phone size={16} />
                        {item.telephone}
                    </div>
                )}
                {item.email && (
                    <div className="flex items-center gap-3 text-sm">
                        <Mail size={16} />
                        {item.email}
                    </div>
                )}
                {item.address && (
                    <div className="flex items-center gap-3 text-sm">
                        <Home size={16} />
                        {item.address}
                    </div>
                )}
            </div>
            {item.text && (
                <p className={`mt-5 ${i % 2 === 0 ? "text-gray-600" : "text-gray-300"} `}>{item.text}</p>
            )}
        </div>
    </motion.div>
)

export default OperationsAndCapabilitiesOverview