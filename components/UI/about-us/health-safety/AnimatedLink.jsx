"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function AnimatedLink() {
  return (
    <motion.div
      className="inline-flex items-center gap-2 text-sm font-medium text-[#0A58FF]"
      whileHover="hover"
      initial="rest"
      animate="rest"
    >
      <span className="relative">
        Read more
        {/* underline */}
        <motion.span
          className="absolute -bottom-1 left-0 h-[1px] w-full bg-[#0A58FF]"
          variants={{
            rest: { scaleX: 0 },
            hover: { scaleX: 1 },
          }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          style={{ transformOrigin: "left" }}
        />
      </span>

      {/* Arrow wrapper */}
      <span className="relative h-4 w-4 overflow-hidden">
        {/* outgoing */}
        <motion.span
          className="absolute inset-0"
          variants={{
            rest: { x: 0, opacity: 1 },
            hover: { x: 10, opacity: 0 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ArrowRight size={16} />
        </motion.span>

        {/* incoming */}
        <motion.span
          className="absolute inset-0"
          variants={{
            rest: { x: -10, opacity: 0 },
            hover: { x: 0, opacity: 1 },
          }}
          transition={{ duration: 0.25, ease: "easeOut" }}
        >
          <ArrowRight size={16} />
        </motion.span>
      </span>
    </motion.div>
  );
}
