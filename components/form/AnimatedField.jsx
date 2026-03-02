import { motion, AnimatePresence } from "framer-motion";

const fieldVariants = {
    hidden: {
        opacity: 0,
        y: 10,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.4,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
    exit: {
        opacity: 0,
        y: 10,
        transition: {
            duration: 0.3,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
};

export function AnimatedField({ children, show = true, className }) {
    return (
        <AnimatePresence mode="popLayout">
            {show && (
                <motion.div
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={fieldVariants}
                    className={className}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

const groupVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.08,
            delayChildren: 0.1,
        },
    },
    exit: {
        opacity: 0,
        transition: {
            duration: 0.25,
        },
    },
};

const groupItemVariants = {
    hidden: {
        opacity: 0,
        y: 8,
    },
    visible: {
        opacity: 1,
        y: 0,
        transition: {
            duration: 0.35,
            ease: [0.25, 0.46, 0.45, 0.94],
        },
    },
    exit: {
        opacity: 0,
        y: 8,
        transition: {
            duration: 0.2,
        },
    },
};

export function AnimatedGroup({ children, show = true, className }) {
    return (
        <AnimatePresence mode="popLayout">
            {show && (
                <motion.div
                    layout
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={groupVariants}
                    className={className}
                >
                    {children}
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export function AnimatedGroupItem({ children, className }) {
    return (
        <motion.div layout variants={groupItemVariants} className={className}>
            {children}
        </motion.div>
    );
}
