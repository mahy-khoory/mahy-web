"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

export default function SlideReveal({ children, direction = "up", delay = 0, triggerOnce = true }) {
    const [ref, inView] = useInView({
        triggerOnce,
        threshold: 0.2, // triggers when 20% of the element is visible
    });

    const variants = {
        hidden: {
            opacity: 0,
            x: direction === "left" ? -50 : direction === "right" ? 50 : 0,
            y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
        },
        visible: {
            opacity: 1,
            x: 0,
            y: 0,
            transition: { duration: 0.6, delay },
        },
    };

    return (
        <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={variants}
        >
            {children}
        </motion.div>
    );
}