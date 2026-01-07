"use client"

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Qms() {
    const items = [
        {
            title: "Identity Management", text: "With over 40 years of experience working alongside governments worldwide, GET Group has developed a wide-ranging collection of identity management solutions that span the entire process of document issuance. This includes enrollment, post-sales support, and all stages in between. Their offerings encompass cutting-edge personalization printers, digital identity systems, secure document management systems, and exclusive printing technologies. GET Group's wealth of experience and comprehensive portfolio cater to the specific requirements of governments seeking secure and reliable identity management solutions.",
            icon: "/qms/qms1.png", image: "/qms/qms-1.gif"
        },
        {
            title: "Digital Transformation", text: "The system offers fully customizable and secure solutions in the most efficient way. It also empowers enterprises with the complete set of service-centric tools to effectively measure, manage, and optimize performance.",
            icon: "/qms/qms2.png", image: "/qms/qms-2.gif"
        },
        {
            title: "Law Enforcement", text: "Through decades of collaboration with the public and private sectors, GET Group has developed a keen understanding of the various security threats that face governments, as well as the technical, operational, and budgetary challenges that complicate the pursuit of reliable security systems that help protect citizens, assets, infrastructure, and borders. GET Group has thus developed its Smart Cities solutions, addressing an expanded range of security and management issues in urban and rural environments, and empowering governments with scalable, customizable, and easily integrated solutions that assist in the critical functions of law enforcement, surveillance, access control, traffic management and asset control.",
            icon: "/qms/qms3.png", image: "/qms/qms-3.webp"
        },
        {
            title: "Premises and Community Management", text: "The protection of people and assets is a critical concern for all organizations. GET Group combines the latest in security technologies to provide the right solution tailored to the security, safety, and privacy needs of each customer. For a complete protection, GET Group offers a comprehensive end-to-end solution for people and vehicle access control.",
            icon: "/qms/qms4.png", image: "/qms/qms-4.webp"
        },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="bg-[#002A41] pb-15">
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentIndex}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="grid grid-cols-1 lg:grid-cols-5 gap-20 max-w-7xl mx-auto py-10 px-5"
                >
                    <div className="flex items-center h-full lg:col-span-2">
                        <motion.div
                            className="relative h-120 w-full"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -30 }}
                            transition={{ duration: 0 }}
                        >
                            <Image
                                src={items[currentIndex].image}
                                alt={items[currentIndex].title}
                                fill
                                style={{ objectFit: "cover" }}
                            />
                        </motion.div>
                    </div>
                    <div className="flex flex-col h-full justify-center gap-6 lg:col-span-3">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.4 }}
                            className="flex items-center gap-4 text-white"
                        >
                            <div className="relative h-12 w-12">
                                <Image src={items[currentIndex].icon} alt="" fill />
                            </div>
                            <h2 className="font-semibold text-4xl">
                                {items[currentIndex].title}
                            </h2>
                        </motion.div>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ duration: 0.5 }}
                            className="text-gray-100 text-lg"
                        >
                            {items[currentIndex].text}
                        </motion.p>
                    </div>
                </motion.div>
            </AnimatePresence>
            <div className="max-w-xs mx-auto px-5 grid grid-cols-4 gap-4">
                {items.map((item, i) => (
                    <button key={i} onClick={() => setCurrentIndex(i)} className={`h-8 rounded-2xl border-2 border-white 
                        ${currentIndex === i && "bg-white"}`} />
                ))}
            </div>
        </section>
    )
}

export default Qms