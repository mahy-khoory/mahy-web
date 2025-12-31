"use client"

import Image from 'next/image'
import React, { useRef, useState } from 'react'
import DepartmentCard from './DepartmentCard';
import { motion, AnimatePresence } from "framer-motion";
import AnimatedLines from '../AnimatedLines';

const imageVariants = {
    hidden: { opacity: 0, scale: 1 },
    visible: { opacity: 1, scale: 1.1, transition: { duration: 1.5 } },
    exit: { opacity: 0, scale: 1, transition: { duration: 1.5 } },
};

function FeaturedDepartments({ title, departments, cta }) {
    const [index, setIndex] = useState(0);

    const containerRef = useRef(null);
    const itemRefs = useRef([]);

    const getOffset = () => {
        if (typeof window === "undefined") return 240;
        const w = window.innerWidth;
        if (w < 640) return 60;
        if (w < 1024) return 120;
        return 240;
    };

    const handleIndexChange = (i) => {
        setIndex(i);

        const container = containerRef.current;
        const item = itemRefs.current[i];
        if (!container || !item) return;

        container.scrollTo({
            left: item.offsetLeft - getOffset(),
            behavior: "smooth",
        });
    };

    return (
        <section className='max-w-7xl mx-auto py-20'>
            <div className="px-5">
                <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.55, ease: "easeOut" }}
                    viewport={{ once: true }}>
                    <AnimatedLines />
                    <h2 className='text-4xl font-semibold mb-7 sm:mb-16 lg:mb-16 text-center'>{title}</h2>
                </motion.div>
                <div className="overflow-hidden">
                    <motion.div
                        key={departments[index].image}
                        variants={imageVariants}
                        initial="hidden"
                        animate="visible"
                        exit="exit"
                        className='w-full h-[40vh] md:h-[60vh] relative'>
                        <Image
                            src={departments[index].image}
                            alt={departments[index].title}
                            fill
                            style={{ objectFit: "cover" }}
                        />
                    </motion.div>
                </div>
            </div>
            <div className="flex flex-nowrap gap-10 mt-10 overflow-hidden px-2 md:px-5"
                ref={containerRef}>
                {departments.map((department, i) => (
                    <DepartmentCard key={i} i={i}
                        itemRefs={itemRefs}
                        index={index} department={department}
                        handleIndexChange={handleIndexChange}
                        cta={cta} />
                ))}
            </div>
        </section>
    )
}

export default FeaturedDepartments