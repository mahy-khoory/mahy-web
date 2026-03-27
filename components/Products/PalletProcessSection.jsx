"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.22 },
  },
};

const fadeSoftUp = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
  },
};

const imageReveal = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function PalletProcessSection({
  processLabel = "PROCESS",
  mainImage,
  secondaryImage,
  steps = [],
}) {
  return (
    <motion.section
      className="relative bg-white py-36 overflow-hidden"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.3 }}
    >
      <div className="absolute left-8 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="block rotate-180 writing-mode-vertical text-[140px] font-extrabold tracking-[0.28em] text-black/5">
          {processLabel}
        </span>
      </div>

      <div className="relative max-w-[1400px] mx-auto px-8 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
        <div className="relative">
          <motion.div
            variants={imageReveal}
            className="relative z-10 w-[92%]"
          >
            <Image
              src={mainImage}
              alt="Process main"
              width={720}
              height={880}
              className="w-full h-auto object-cover shadow-[0_40px_80px_rgba(0,0,0,0.18)]"
              priority
            />
          </motion.div>
          <motion.div
            variants={imageReveal}
            className="absolute -left-6 top-[55%] w-[52%] z-20"
          >
            <Image
              src={secondaryImage}
              alt="Process secondary"
              width={480}
              height={620}
              className="w-full h-auto object-cover shadow-[0_30px_60px_rgba(0,0,0,0.2)]"
            />
          </motion.div>
        </div>
        <div className="relative">
          <div className="absolute left-[20px] top-0 bottom-0 border-l border-dashed border-gray-300" />

          <div className="space-y-28">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                variants={fadeSoftUp}
                className="relative pl-20"
              >
                {/* Number */}
                <div className="absolute left-0 top-1">
                  <div className="w-10 h-10 rounded-full bg-slate-400 text-black text-sm font-semibold flex items-center justify-center">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-[24px] font-semibold text-black">
                  {step.title}
                </h3>
                <p className="mt-5 text-gray-600 leading-[1.75] max-w-lg text-[16px]">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
