"use client"

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import AnimatedLines from "../AnimatedLines";
import DesktopStructure from "./DesktopStructure";
import MobileStructure from "./MobileStructure";

function CompanyStructure() {
    const items = [
        {
            title: "Siemens",
            subTitle: "Industrial Automation & Energy",
            text: "Siemens provides advanced automation, electrification, and digitalization solutions for industrial and infrastructure projects worldwide."
        },
        {
            title: "ABB",
            subTitle: "Power & Motion Technologies",
            text: "ABB delivers innovative solutions in electrification, robotics, automation, and motion, supporting industries to improve efficiency and sustainability."
        },
        {
            title: "Schneider",
            subTitle: "Energy Management Solutions",
            text: "Schneider Electric specializes in energy management and automation solutions for homes, buildings, data centers, and industries."
        },
        {
            title: "Grundfos",
            subTitle: "Advanced Pump Solutions",
            text: "Grundfos is a global leader in pumping solutions, focusing on water, wastewater, and energy-efficient technologies."
        },
        {
            title: "Danfoss",
            subTitle: "Climate & Drive Solutions",
            text: "Danfoss provides engineering solutions that enable efficient cooling, heating, motor control, and mobile machinery applications."
        },
        {
            title: "Wilo",
            subTitle: "Smart Pump Systems",
            text: "Wilo develops intelligent pumping systems for building services, water management, and industrial applications."
        },
    ];
    const locale = useLocale();

    const containerVariants = {
        hidden: { opacity: 0, x: (locale === "ar" ? 20 : -20) },
        visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: i => ({
            opacity: 1,
            y: 0,
            transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }
        }),
    };

    return (
        <section className='max-w-7xl mx-auto pt-20 pb-15 lg:pb-20 border-b border-gray-300'>
            <AnimatedLines />
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className='font-bold text-2xl lg:text-4xl text-center uppercase'>Company Structure</h2>
            </motion.div>
            <p className='text-2xl lgtext-3xl text-center font-medium mt-6 lg:mt-12 t-base'>Tencent</p>
            <DesktopStructure items={items} itemVariants={itemVariants} containerVariants={containerVariants} />
            <MobileStructure items={items} itemVariants={itemVariants} />
        </section>
    )
}

export default CompanyStructure