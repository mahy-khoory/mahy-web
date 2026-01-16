"use client";

import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";

function SwipeRevealImage({
  src,
  alt,
  className = "",
  priority = false,
  delay = 0,
}) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`relative overflow-hidden bg-white ${className}`}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.38 }}
      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1], delay }}
    >
      {/* image (slight settle on reveal like reference) */}
      <motion.div
        className="absolute inset-0"
        initial={reduce ? false : { scale: 1.06 }}
        whileInView={reduce ? undefined : { scale: 1 }}
        viewport={{ once: true, amount: 0.38 }}
        transition={{
          duration: 1.15,
          ease: [0.22, 1, 0.36, 1],
          delay: delay + 0.05,
        }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          className="object-cover"
          sizes="(max-width: 1024px) 92vw, 560px"
        />
      </motion.div>

      {/* swipe overlay (top -> bottom wipe) */}
      {!reduce && (
        <motion.div
          className="absolute inset-0 bg-white"
          initial={{ y: "0%" }}
          whileInView={{ y: "120%" }}
          viewport={{ once: true, amount: 0.38 }}
          transition={{
            duration: 1.0,
            ease: [0.22, 1, 0.36, 1],
            delay,
          }}
        />
      )}
    </motion.div>
  );
}

const itemFade = {
  hidden: { opacity: 0, y: 16 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: d },
  }),
};

export default function EngProcessSection() {
  return (
    <section className="relative bg-white py-24 md:py-28 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* BIG VERTICAL WORD (BACKGROUND) — tuned to match reference */}
          <div className="pointer-events-none select-none hidden lg:block absolute left-[-96px] top-1/2 -translate-y-1/2">
            <div className="rotate-[-90deg] origin-left">
              <span className="text-[160px] xl:text-[190px] font-semibold tracking-tight text-[#F0F5F6]">
                Process
              </span>
            </div>
          </div>

          {/* LEFT IMAGE STACK */}
          <div className="relative lg:pl-20">
            {/* Large image (more centered like reference) */}
            <SwipeRevealImage
              src="/gallery/gallery-1.jpg"
              alt="Process image 1"
              priority
              delay={0.06}
              className="
                relative
                mx-auto lg:ml-[54px]
                w-[92%] sm:w-[80%] lg:w-[82%]
                aspect-[4/3]
                rounded-[2px]
                shadow-[0_18px_55px_rgba(0,0,0,0.18)]
                ring-1 ring-black/5
              "
            />

            {/* Smaller image (overlaps more inward + slightly higher) */}
            <SwipeRevealImage
              src="/gallery/gallery-2.jpg"
              alt="Process image 2"
              delay={0.22}
              className="
                absolute
                left-[6%] sm:left-[8%] lg:left-[2%]
                bottom-[-56px] sm:bottom-[-62px] lg:bottom-[-68px]
                w-[58%] sm:w-[46%] lg:w-[46%]
                aspect-[3/4]
                rounded-[2px]
                shadow-[0_18px_55px_rgba(0,0,0,0.18)]
                ring-1 ring-black/5
              "
            />
          </div>

          {/* RIGHT STEPS */}
          <div className="relative">
            {/* dashed line aligned through dot center (20px dot radius = 20) */}
            <div className="absolute left-[20px] top-[18px] bottom-[18px] w-px border-l border-dashed border-black/35" />

            <div className="space-y-16 md:space-y-20">
              {/* Step 01 */}
              <motion.div
                className="relative flex gap-8"
                variants={itemFade}
                initial="hidden"
                whileInView="visible"
                custom={0.1}
                viewport={{ once: true, amount: 0.38 }}
              >
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-[#16F1A3] flex items-center justify-center text-[12px] font-semibold text-[#0B1320]">
                    01
                  </div>
                </div>
                <div className="pt-[1px]">
                  <h3 className="text-[20px] font-semibold text-[#0B1320]">
                    Understand your needs
                  </h3>
                  <p className="mt-2 text-[#526064] leading-relaxed max-w-[520px]">
                    Lorem ipsum dolor sit amet consectetur. Ultricies blandit
                    libero leo ut turpis cras amet sed.
                  </p>
                </div>
              </motion.div>

              {/* Step 02 */}
              <motion.div
                className="relative flex gap-8"
                variants={itemFade}
                initial="hidden"
                whileInView="visible"
                custom={0.18}
                viewport={{ once: true, amount: 0.38 }}
              >
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-[#16F1A3] flex items-center justify-center text-[12px] font-semibold text-[#0B1320]">
                    02
                  </div>
                </div>
                <div className="pt-[1px]">
                  <h3 className="text-[20px] font-semibold text-[#0B1320]">
                    Develop custom solutions
                  </h3>
                  <p className="mt-2 text-[#526064] leading-relaxed max-w-[520px]">
                    Lorem ipsum dolor sit amet consectetur. Ultricies blandit
                    libero leo ut turpis cras amet sed.
                  </p>
                </div>
              </motion.div>

              {/* Step 03 */}
              <motion.div
                className="relative flex gap-8"
                variants={itemFade}
                initial="hidden"
                whileInView="visible"
                custom={0.26}
                viewport={{ once: true, amount: 0.38 }}
              >
                <div className="relative">
                  <div className="h-10 w-10 rounded-full bg-[#16F1A3] flex items-center justify-center text-[12px] font-semibold text-[#0B1320]">
                    03
                  </div>
                </div>
                <div className="pt-[1px]">
                  <h3 className="text-[20px] font-semibold text-[#0B1320]">
                    Achieve targeted results
                  </h3>
                  <p className="mt-2 text-[#526064] leading-relaxed max-w-[520px]">
                    Lorem ipsum dolor sit amet consectetur. Ultricies blandit
                    libero leo ut turpis cras amet sed.
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Mobile label */}
            <div className="mt-12 lg:hidden">
              <span className="text-[54px] font-semibold text-[#F0F5F6] leading-none">
                Process
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
