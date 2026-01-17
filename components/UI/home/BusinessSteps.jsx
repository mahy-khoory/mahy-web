"use client";

import Link from "next/link"
import BusinessStepCard from "./BusinessStepCard"
import { motion } from "framer-motion";
import PrimaryButton from "../PrimaryButton";
import AnimatedLines from "../AnimatedLines";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.15, duration: 0.5, ease: "easeOut" }
    }),
};

function BusinessSteps({ items, steps }) {

    return (
        <div className="py-20 bg-slate-900 text-white">
            <AnimatedLines bg="bg-gray-200" />
            <h2 className="text-center font-bold text-4xl mb-35 mx-5">{items.heading}</h2>
            <div className="grid lg:grid-cols-2 gap-32 gap-x-20 lg:gap-30 px-4 lg:px-40 xl:grid-cols-3">
                {steps.map((step, i) => (
                    <motion.div
                        key={step.id}
                        variants={itemVariants}
                        initial="hidden"
                        whileInView="visible"
                        custom={i}
                        viewport={{ once: true }}
                    >
                        <BusinessStepCard
                            id={step.id}
                            title={step.title}
                            description={step.description}
                            icon={step.icon}
                        />
                    </motion.div>
                ))}
            </div>
            <div className="flex flex-wrap justify-center items-center mt-50 lg:mt-40 mx-5 gap-2">
                <p>{items.text}</p>
                <Link className="" href={"/"}>
                    <PrimaryButton
                        label={items.button}
                        size="md"
                        radius="rounded-full"
                    />
                </Link>
            </div>
        </div>
    )
}

export default BusinessSteps