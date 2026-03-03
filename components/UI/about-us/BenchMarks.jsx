"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const barVariants = {
  hidden: { height: 0 },
  visible: (h) => ({
    height: h,
    transition: {
      duration: 1.2,
      ease: [0.22, 1, 0.36, 1],
    },
  }),
};

export default function VisionBenchmarkSection({
  heading = "Our vision empowers leaders to thrive in a dynamic world",
  items = [
    { title: "Empowering growth", text: "Lorem ipsum dolor sit amet consectetur. Morbi nunc bndum at ipsum mauris sed cursus." },
    { title: "Inspiring innovation", text: "Lorem ipsum dolor sit amet consectetur. Morbi nunc bndum at ipsum mauris sed cursus." }
  ]
}) {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6 grid grid-cols-1 lg:grid-cols-2 gap-24">
        <div className="relative">
          <div className="grid grid-cols-3 gap-6 items-end h-[620px]">
            <div className="flex flex-col items-center justify-end relative">
              <div className="absolute -top-24 text-center text-gray-300">
                <p className="text-[42px] font-light leading-none">3267+</p>
                <p className="text-sm mt-1">Team members</p>
              </div>

              <motion.div
                className="relative w-full overflow-hidden"
                custom={420}
                variants={barVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
              >
                <Image
                  src="/gallery/gallery-1.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>

              {/* <div className="absolute -bottom-20 text-center text-gray-300">
        <p className="text-[42px] font-light leading-none">99+</p>
        <p className="text-sm mt-1">Years of experience</p>
      </div> */}
            </div>

            {/* === COLUMN 2 === */}
            <div className="flex flex-col items-center justify-end relative">
              {/* Metric */}
              <div className="absolute -top-24 text-center text-gray-300">
                <p className="text-[42px] font-light leading-none">100+</p>
                <p className="text-sm mt-1">Awards received</p>
              </div>

              {/* Bar */}
              <motion.div
                className="relative w-full overflow-hidden"
                custom={560}
                variants={barVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: 0.15 }}
              >
                <Image
                  src="/gallery/gallery-2.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
            <div className="flex flex-col items-center justify-end relative">
              <div className="absolute -top-24 text-center text-gray-300">
                <p className="text-[42px] font-light leading-none">100+</p>
                <p className="text-sm mt-1">Awards received</p>
              </div>
              <motion.div
                className="relative w-full overflow-hidden"
                custom={460}
                variants={barVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-120px" }}
                transition={{ delay: 0.3 }}
              >
                <Image
                  src="/gallery/gallery-3.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center">
          <h2 className="text-[44px] leading-tight font-semibold text-gray-900 max-w-xl">
            {heading}
          </h2>

          <div className="h-px bg-gray-300 w-full my-5" />
          {items.map(((item, i) => (
            <div key={i} className="flex gap-6 mb-10">
              <div className="w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                <span className={`${i % 2 === 0 ? "w-5 h-px" : "w-px h-5"} bg-gray-500`} />
              </div>
              <div>
                <h4 className="font-semibold">{item.title}</h4>
                <p className="text-gray-600 mt-1.5 max-w-md text-sm">
                  {item.text}
                </p>
              </div>
            </div>

          )))}
        </div>
      </div>
    </section>
  );
}
