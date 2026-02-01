"use client";

import { motion } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";

export default function SubmitButton({ label = "Submit", loading = false }) {
  return (
    <motion.button
      type="submit"
      disabled={loading}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.96 }}
      transition={{
        type: "spring",
        stiffness: 300,
        damping: 20,
      }}
      className="
        group
        relative
        mt-8
        inline-flex
        items-center
        gap-3
        overflow-hidden
        rounded-full
        bg-[#5f98b5]
        px-12
        py-3.5
        text-sm
        font-semibold
        text-white
        shadow-[0_10px_25px_rgba(63,60,143,0.35)]
        focus:outline-none
        disabled:opacity-60
        disabled:cursor-not-allowed
      "
    >
      <span
        className="
        absolute inset-0 -translate-x-full
        bg-white/10
        transition-transform duration-300
        group-hover:translate-x-0
      "
      />

      <span className="relative z-10">{loading ? "Submitting..." : label}</span>

      <motion.span
        className="relative z-10"
        whileHover={{ x: 4 }}
        transition={{ duration: 0.25 }}
      >
        <FiArrowRight className="text-lg" />
      </motion.span>
    </motion.button>
  );
}
