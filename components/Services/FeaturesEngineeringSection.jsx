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

export default function FeaturesEngineeringSection({
  heading = "Features & Engineering",
  text,
  items = [
    {
      heading: "Strategic advisory",
      text: "Lorem ipsum dolor sit amet sectetur. Ut interdum quis vestibulum egetus. Venenatis."
    },
    {
      heading: "Market insights",
      text: "Lorem ipsum dolor sit amet sectetur. Ut interdum quis vestibulum egetus. Venenatis."
    }
  ]
}) {
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
            {heading}
            {/* <span className="inline-flex items-center mx-2 rounded-full bg-gray-100 px-3 py-1 align-middle">
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
            </span> */}
            {/* industries */}
          </h2>
        </div>

        {text && (
          <p>{text}</p>
        )}

        {/* Cards */}
        <motion.div
          className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 auto-rows-fr gap-10"
          variants={containerVariants}
        >
          {items.map((item, i) =>
          (i !== items.length - 1 || (items.length % 3 === 0) ? (
            <motion.div
              key={i}
              variants={cardVariants}
              className="lg:col-span-1 group bg-[#E3EBEA] px-10 py-12 min-h-[340px] flex flex-col justify-between transition-colors duration-700 hover:bg-[#1F2C30]"
            >
              <div>
                <div className="mb-10 h-10 w-10 rounded-full border border-current text-[#1F2C30] group-hover:text-white transition-colors duration-700" />

                <h3 className="text-[22px] font-semibold text-[#1F2C30] group-hover:text-white transition-colors duration-700">
                  {item.heading}
                </h3>

                <p className="mt-4 text-[#526064] group-hover:text-gray-300 leading-relaxed transition-colors duration-700">
                  {item.text}
                </p>

                {item.bullets && (
                  <ul className="mt-3 list-disc pl-5 space-y-2 text-[15px]">
                    {item.bullets.map((textItem, j) => (
                      <li key={j} className="text-[#526064] group-hover:text-gray-300">{textItem}</li>
                    ))}
                  </ul>
                )}
                {item.lastText && (
                  <p className="mt-2 text-[#526064] group-hover:text-gray-300">
                    {item.lastText}
                  </p>
                )}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key={i}
              variants={cardVariants}
              className="relative overflow-hidden min-h-85
                       col-span-1 md:col-span-2 lg:col-span-2 group"
            >
              <div className="absolute inset-0">
                <Image
                  src="/gallery/gallery-1.jpg"
                  alt="Operational excellence"
                  fill
                  className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[900ms] ease-[cubic-bezier(0.22,1,0.36,1)]"
                />
              </div>
              <div className="absolute inset-0 bg-black/55 group-hover:bg-black/65 transition-colors duration-700" />

              <div className="relative z-10 p-12">
                <div className="max-w-md">
                  <h3 className="text-[22px] font-semibold text-white">
                    {item.heading}
                  </h3>
                  <p className="mt-3 text-gray-200 leading-relaxed">
                    {item.text}
                  </p>
                  {item.bullets && (
                    <ul className="mt-3 list-disc pl-5 space-y-2 text-[15px]">
                      {item.bullets.map((textItem, j) => (
                        <li key={j} className="text-[#c5c5c5] group-hover:text-gray-300">{textItem}</li>
                      ))}
                    </ul>
                  )}
                  {item.lastText && (
                    <p className="mt-2 text-[#b9b9b9] group-hover:text-gray-300">
                      {item.lastText}
                    </p>
                  )}
                </div>
              </div>
            </motion.div>
          )))}
        </motion.div>
      </motion.div>
    </section>
  );
}
