"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
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

export default function FeaturesEngineeringSection({
  heading = "",
  text,
  image = "/gallery/gallery-1.jpg",
  items = [],
}) {
  return (
    <section className="bg-white py-20 md:py-24 lg:py-28">
      <motion.div
        className="max-w-7xl mx-auto px-5 md:px-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }} // ✅ FIXED trigger
      >
        {/* Heading */}
        <div className="text-center max-w-[880px] mx-auto">
          <h2 className="text-[30px] sm:text-[34px] md:text-[46px] lg:text-[54px] font-semibold leading-tight text-[#1E2629]">
            {heading}
          </h2>
        </div>

        {text && (
          <p className="mt-5 text-center max-w-3xl mx-auto text-[#526064] leading-relaxed">
            {text}
          </p>
        )}

        {/* Cards */}
        <div className="mt-12 md:mt-16 lg:mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-6 md:gap-8 lg:gap-10">
          {items.map((item, i) => {
            const isLastSpecial =
              i === items.length - 1 && items.length % 3 !== 0;

            return !isLastSpecial ? (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }} // ✅ FIXED per card
                className="lg:col-span-1 group bg-[#E3EBEA] px-6 md:px-8 lg:px-10 py-8 md:py-10 lg:py-12 min-h-[280px] md:min-h-[320px] lg:min-h-[340px] flex flex-col justify-between transition-colors duration-700 hover:bg-[#1F2C30]"
              >
                <div>
                  <div className="mb-8 md:mb-10 h-10 w-10 rounded-full border border-current text-[#1F2C30] group-hover:text-white transition-colors duration-700" />

                  <h3 className="text-[20px] md:text-[22px] font-semibold text-[#1F2C30] group-hover:text-white transition-colors duration-700">
                    {item.heading}
                  </h3>

                  <p className="mt-4 text-[#526064] group-hover:text-gray-300 leading-relaxed transition-colors duration-700">
                    {item.text}
                  </p>

                  {item.bullets && (
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-[15px]">
                      {item.bullets.map((textItem, j) => (
                        <li
                          key={j}
                          className="text-[#526064] group-hover:text-gray-300 transition-colors duration-700"
                        >
                          {textItem}
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.lastText && (
                    <p className="mt-3 text-[#526064] group-hover:text-gray-300 transition-colors duration-700 leading-relaxed">
                      {item.lastText}
                    </p>
                  )}
                </div>
              </motion.div>
            ) : (
              <motion.div
                key={i}
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }} // ✅ FIXED
                className="relative overflow-hidden min-h-[280px] md:min-h-[320px] lg:min-h-[340px] col-span-1 md:col-span-2 lg:col-span-2 group"
              >
                <div className="absolute inset-0">
                  <Image
                    src={image}
                    alt="Operational excellence"
                    fill
                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                  />
                </div>

                <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition-colors duration-700" />

                <div className="relative z-10 h-full p-6 md:p-8 lg:p-12 flex items-start">
                  <div className="max-w-md">
                    <h3 className="text-[20px] md:text-[22px] font-semibold text-white">
                      {item.heading}
                    </h3>

                    <p className="mt-3 text-gray-200 leading-relaxed">
                      {item.text}
                    </p>

                    {item.bullets && (
                      <ul className="mt-3 list-disc pl-5 space-y-2 text-[15px]">
                        {item.bullets.map((textItem, j) => (
                          <li
                            key={j}
                            className="text-[#c5c5c5] group-hover:text-gray-300 transition-colors duration-700"
                          >
                            {textItem}
                          </li>
                        ))}
                      </ul>
                    )}

                    {item.lastText && (
                      <p className="mt-3 text-[#b9b9b9] group-hover:text-gray-300 transition-colors duration-700 leading-relaxed">
                        {item.lastText}
                      </p>
                    )}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>
    </section>
  );
}