"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, ease: [0.22, 1, 0.36, 1] },
  },
  exit: {
    opacity: 0,
    y: -24,
    transition: { duration: 0.55, ease: [0.4, 0, 0.2, 1] },
  },
};

export default function DewaltStrategySection() {
  return (
    <section className="bg-black py-28 overflow-hidden">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={container}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.28 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">

          {/* LEFT COLUMN */}
          <div>
            <motion.h2
              variants={fadeUp}
              className="
                text-[38px] md:text-[52px] lg:text-[60px]
                font-medium leading-[1.15] tracking-tight
                text-slate-400
                max-w-[620px]
              "
            >
              Informed strategy, Operational strength, and sustainable results.
            </motion.h2>

            {/* IMAGE — pulled closer to heading */}
            <motion.div
              variants={fadeUp}
              className="mt-12 relative"
            >
              <div className="relative overflow-hidden rounded-[28px]
                              shadow-[0_30px_80px_rgba(0,0,0,0.6)]">
                <Image
                  src="/gallery/gallery-4.jpg"
                  alt="Strategy meeting"
                  width={900}
                  height={600}
                  className="object-cover w-full h-auto scale-[1.02]"
                  priority
                />
                <div className="absolute inset-0 bg-black/10 backdrop-blur-[1px]" />
              </div>
            </motion.div>
          </div>

          {/* RIGHT COLUMN — pushed DOWN for correct alignment */}
          <div className="pt-[92px] lg:pt-[104px]">
            <motion.p
              variants={fadeUp}
              className="
                text-slate-400 text-[16px]
                leading-relaxed
                max-w-[420px]
              "
            >
              We specialize in empowering B2B companies with results-driven
              consulting solutions tailored to modern business challenges.
            </motion.p>

            {/* divider */}
            <motion.div
              variants={fadeUp}
              className="mt-8 h-px w-full bg-[#2A2A2A]"
            />

            {/* bullet list */}
            <motion.ul
              variants={container}
              className="mt-8 space-y-6 max-w-[420px]"
            >
              {[
                "Deep experience across B2B sectors",
                "Solutions aligned with your business goals",
                "Frameworks built for long-term success",
                "Working with you, not just for you",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  variants={fadeUp}
                  className="flex items-start gap-3 text-slate-400"
                >
                  <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-slate-400" />
                  <span className="leading-relaxed">{item}</span>
                </motion.li>
              ))}
            </motion.ul>

            {/* divider */}
            <motion.div
              variants={fadeUp}
              className="mt-8 h-px w-full bg-[#2A2A2A]"
            />

            {/* button — aligned with text column */}
            <motion.button
              variants={fadeUp}
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="
                mt-12
                inline-flex items-center justify-center
                rounded-full
                bg-slate-400 text-black
                px-10 py-4
                font-medium
                shadow-[0_10px_30px_rgba(0,0,0,0.4)]
              "
            >
              More about us
            </motion.button>
          </div>

        </div>
      </motion.div>
    </section>
  );
}
