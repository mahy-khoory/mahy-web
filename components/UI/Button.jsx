"use client";

import { HiArrowRight } from "react-icons/hi";
import { motion } from "framer-motion";

const sizeClasses = {
  xs: {
    button: "px-3 py-1.5 text-xs",
    icon: "text-sm",
  },
  sm: {
    button: "px-4 py-2 text-sm",
    icon: "text-base",
  },
  md: {
    button: "px-5 py-2.5 md:px-8 md:py-3 text-sm md:text-base",
    icon: "text-base md:text-lg",
  },
  lg: {
    button: "px-6 py-3 md:px-10 md:py-4 text-base md:text-lg",
    icon: "text-lg md:text-xl",
  },
  xl: {
    button: "px-8 py-4 md:px-12 md:py-5 text-lg md:text-xl",
    icon: "text-xl md:text-2xl",
  },
};

export { buttonVariants };

export default function Button({ children = "", onClick, size = "md", bg = false }) {
  const selected = sizeClasses[size] || sizeClasses.md;

  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className={`
        ${bg ? "b-base text-white hover:bg-[#2c3f6e]" : "hover:bg-black hover:border-black"}
        cursor-pointer
        group
        inline-flex items-center gap-2 md:gap-3
        rounded-full
        bg-white text-black
        border border-gray-300
        shadow-sm
        font-medium
        hover:text-white 
        transition-colors duration-300 ease-out
        ${selected.button}
      `}
    >
      {children}

      <HiArrowRight
        className={`
          transition-transform duration-300
          group-hover:translate-x-1
          ${selected.icon}
        `}
      />
    </motion.button>
  );
}
