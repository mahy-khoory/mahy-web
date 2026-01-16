"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export default function FeaturesEngineeringSection() {
  return (
    <section className="bg-white py-28">
      <motion.div
        className="max-w-7xl mx-auto px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.25 }}
      >
        {/* Heading */}
        <div className="text-center max-w-[880px] mx-auto">
          <h2 className="text-[34px] md:text-[46px] lg:text-[54px] font-semibold leading-tight text-[#1E2629]">
            Our features deliver tailored solutions for business success and
            sustainable growth across{" "}
            <span className="inline-flex items-center mx-2 rounded-full bg-gray-100 px-3 py-1 align-middle">
              <Image
                src="/gallery/gallery-1.jpg"
                alt=""
                width={26}
                height={26}
                className="rounded-full"
              />
              <Image
                src="/gallery/gallery-3.jpg"
                alt=""
                width={26}
                height={26}
                className="rounded-full -ml-2"
              />
            </span>
            industries
          </h2>
        </div>

        {/* Cards */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 auto-rows-fr gap-10"
          variants={containerVariants}
        >
          {/* Card 1 */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 group bg-[#E3EBEA] px-10 py-12 min-h-[340px] flex flex-col justify-between transition-colors duration-700 hover:bg-[#1F2C30]"
          >
            <div>
              <div className="mb-10 h-10 w-10 rounded-full border border-current text-[#1F2C30] group-hover:text-white transition-colors duration-700" />

              <h3 className="text-[22px] font-semibold text-[#1F2C30] group-hover:text-white transition-colors duration-700">
                Strategic advisory
              </h3>

              <p className="mt-4 text-[#526064] group-hover:text-gray-300 leading-relaxed transition-colors duration-700">
                Lorem ipsum dolor sit amet sectetur. Ut interdum quis vestibulum
                egetus. Venenatis.
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            variants={cardVariants}
            className="lg:col-span-1 group bg-[#1F2C30] px-10 py-12 min-h-[340px] flex flex-col justify-between transition-colors duration-700 hover:bg-[#E3EBEA]"
          >
            <div>
              <div className="mb-10 h-10 w-10 rounded-full border border-current text-white group-hover:text-[#1F2C30] transition-colors duration-700" />

              <h3 className="text-[22px] font-semibold text-white group-hover:text-[#1F2C30] transition-colors duration-700">
                Market insights
              </h3>

              <p className="mt-4 text-gray-300 group-hover:text-[#526064] leading-relaxed transition-colors duration-700">
                Lorem ipsum dolor sit amet sectetur. Ut interdum quis vestibulum
                egetus. Venenatis.
              </p>
            </div>
          </motion.div>

          {/* Image Card (LARGER TILE) */}
          <motion.div
            variants={cardVariants}
            className="relative overflow-hidden min-h-[340px] 
                       col-span-1 md:col-span-2 lg:col-span-2 group"
          >
            <Image
              src="/gallery/gallery-1.jpg"
              alt="Operational excellence"
              fill
              className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
            />

            <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition-colors duration-700" />

            <div className="absolute inset-0 flex items-center p-12">
              <div className="max-w-md">
                <h3 className="text-[22px] font-semibold text-white">
                  Operational excellence
                </h3>
                <p className="mt-3 text-gray-200 leading-relaxed">
                  Lorem ipsum dolor sit amet sectetur. Ut interdum quis vestibulum
                  egetus. Venenatis.
                </p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}
