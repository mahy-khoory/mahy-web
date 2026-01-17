"use client";
import { motion } from "framer-motion";
import AnimatedCounter from "../AnimatedCounter";
import AnimatedLines from "../AnimatedLines";

const containerVariants = {
    hidden: {},
    show: {
        transition: {
            staggerChildren: 0.12,
            delayChildren: 0.1,
        },
    },
};

const itemVariants = {
    hidden: {
        opacity: 0,
        y: 24,
        scale: 0.96,
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

function KeyStats({ heading, stats }) {
    return (
        <div className="bg-slate-900 py-10 md:py-20">
            <div className="text-center mb-12 px-4">
                <AnimatedLines bg="bg-gray-200" />
                <h2 className="text-heading text-4xl sm:text-5xl font-semibold text-gray-100">{heading}</h2>
            </div>
            <section className="w-full pb-8">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <motion.div
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="show"
                        viewport={{ once: true, margin: "-100px" }}
                        className="
              grid
              grid-cols-1
              gap-y-14
              text-center
              sm:grid-cols-2
              sm:gap-y-16
              lg:grid-cols-5
              lg:gap-x-6
              lg:gap-y-0
            "
                    >
                        {stats.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                className="flex flex-col items-center justify-center px-2"
                            >
                                <div className="h-[72px] sm:h-[84px] lg:h-[96px] flex items-center justify-center">
                                    <AnimatedCounter
                                        value={item.value}
                                        className="
    leading-none
    text-4xl
    sm:text-5xl
    lg:text-5xl
    xl:text-6xl
    font-semibold
    tracking-tight
    text-gray-200
  "
                                    />
                                </div>

                                <p className="mt-3 text-sm sm:text-base lg:text-sm xl:text-base font-normal text-gray-300 leading-snug max-w-[240px]">
                                    {item.label}
                                </p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </section>
        </div>

    )
}

export default KeyStats