"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import AnimatedLines from "../../AnimatedLines";

const VALUES = [
  {
    title: "Excellence",
    description:
      "We pursue excellence by continuously improving our performance, capabilities, and standards to achieve best-in-class outcomes across all operations.",
  },
  {
    title: "Integrity",
    description:
      "We act with integrity by doing what is right, upholding the highest standards of professional conduct, ethics, and corporate governance.",
  },
  {
    title: "Safety",
    description:
      "We prioritize health, safety, and environmental responsibility with zero compromise, ensuring a safe and healthy working environment.",
  },
  {
    title: "Reliability",
    description:
      "We honor our commitments with consistency and accountability, building trust with customers, partners, employees, and stakeholders.",
  },
  {
    title: "Customer Focus",
    description:
      "We remain deeply customer-focused, recognizing that long-term success is built on understanding needs and delivering value-driven solutions.",
  },
  {
    title: "Respect",
    description:
      "We treat all individuals with respect and fairness, fostering collaboration, mutual trust, and inclusive relationships.",
  },
];

export default function MissionVisionSection() {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <section className="relative bg-white text-gray-900">
      <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 py-28">
        <div className="relative h-[320px] sm:h-[400px] lg:h-[640px] lg:sticky lg:top-20 flex items-center justify-center">
          <Image
            src="/gallery/gallery-3.jpg"
            alt="MAHY Khoory Vision"
            fill
            priority
            className="object-cover object-center"
          />
        </div>

        <div className="space-y-24">
          {/* <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Our Mission
            </h2>
            <div className="h-px w-20 bg-orange-500 mb-6" />
            <p className="text-[15px] leading-relaxed text-gray-700">
              Our mission is to provide high-quality products and integrated
              solutions that support industrial, commercial, environmental, and
              community needs, while contributing positively to economic
              development and environmental sustainability.
              <br />
              <br />
              Through disciplined execution, innovation, and responsible
              business practices, we strive to enhance quality of life and
              create long-term value for our customers, employees, partners, and
              stakeholders.
            </p>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-3xl font-semibold tracking-tight mb-4">
              Our Values
            </h2>
            <div className="h-px w-20 bg-orange-500 mb-10" />

            <div className="space-y-6">
              {VALUES.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.title}
                    className="border-b border-gray-200 pb-6"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <span className="text-lg font-medium">{item.title}</span>
                      <span className="text-2xl text-orange-500">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="mt-3 text-[15px] leading-relaxed text-gray-600 overflow-hidden"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.section> */}

          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-heading text-3xl mb-4">Our Vision</h2>
            <div className="h-px w-20 b-base mb-6" />
            <p className="text-body text-[15px] text-gray-700">
              To achieve sustainable long-term growth through innovation,
              diversification, and geographical expansion, while consistently
              delivering value that exceeds stakeholder expectations.
              <br />
              <br />
              We aim to strengthen our presence across regional and
              international markets by building resilient businesses, enhancing
              industrial and environmental capabilities, and maintaining the
              highest standards of governance, performance, and responsibility.
            </p>
          </motion.section>

          {/* MISSION */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-heading text-3xl mb-4">Our Mission</h2>
            <div className="h-px w-20 b-base mb-6" />
            <p className="text-body text-[15px] text-gray-700">
              Our mission is to provide high-quality products and integrated
              solutions that support industrial, commercial, environmental, and
              community needs, while contributing positively to economic
              development and environmental sustainability.
              <br />
              <br />
              Through disciplined execution, innovation, and responsible
              business practices, we strive to enhance quality of life and
              create long-term value for our customers, employees, partners, and
              stakeholders.
            </p>
          </motion.section>

          {/* VALUES */}
          <motion.section
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <h2 className="text-heading text-3xl mb-4">Our Values</h2>
            <div className="h-px w-20 b-base mb-10" />

            <div className="space-y-6">
              {VALUES.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <div
                    key={item.title}
                    className="border-b border-gray-200 pb-6"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : index)}
                      className="flex w-full items-center justify-between text-left"
                    >
                      <span className="text-ui text-lg">{item.title}</span>
                      <span className="text-2xl t-base">
                        {isOpen ? "−" : "+"}
                      </span>
                    </button>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.p
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeOut" }}
                          className="mt-3 text-body text-[15px] text-gray-600 overflow-hidden"
                        >
                          {item.description}
                        </motion.p>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </div>
          </motion.section>
        </div>
      </div>
    </section>
  );
}
