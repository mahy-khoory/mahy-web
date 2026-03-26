"use client"

import { useLocale } from "next-intl";
import { motion } from "framer-motion";
import AnimatedLines from "../AnimatedLines";
import DesktopStructure from "./DesktopStructure";
import MobileStructure from "./MobileStructure";

function CompanyStructure({
    data,
    textClasses = "variant1",
    bg = "bg-white",
    bgHover = "hover:bg-white",
    collape = true
}) {
    const locale = useLocale();

    const textClassesVariants = {
        variant1: "text-2xl lgtext-3xl text-center font-medium mt-6 lg:mt-12 text-black uppercase",
        variant2: "mt-4 lg:mt-6 mb-6 lg:text-xl text-center px-4"
    }

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
        <section className='max-w-7xl mx-auto py-12 lg:pt-20 lg:pb-20 border-b border-gray-300'>
            <AnimatedLines />
            <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
                <h2 className='font-bold text-2xl lg:text-4xl text-center uppercase'>{data.heading}</h2>
            </motion.div>
            <p className={textClassesVariants[textClasses]}>{data.company}</p>
            <DesktopStructure
                items={data.items}
                itemVariants={itemVariants}
                containerVariants={containerVariants}
                bg={bg}
                bgHover={bgHover}
            />
            <MobileStructure
                items={data.items}
                itemVariants={itemVariants}
                bg={bg}
                collape={collape}
            />
        </section>
    )
}

export default CompanyStructure