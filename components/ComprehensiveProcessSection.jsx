"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const steps = [
  {
    title: "Market research",
    desc: "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
  },
  {
    title: "Business consulting",
    desc: "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
  },
  {
    title: "Finance strategy",
    desc: "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
  },
  {
    title: "Business planning",
    desc: "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
    inactive: true,
  },
];

export default function ComprehensiveProcessSection() {
  return (
    <section className="relative bg-[#f4f7fb] overflow-hidden">
      {/* diagonal background */}
      <div className="absolute inset-0 bg-[repeating-linear-gradient(135deg,#e8edf6_0px,#e8edf6_1px,transparent_1px,transparent_12px)]" />

      <div className="relative max-w-7xl mx-auto px-6 py-32">
        {/* HEADER */}
        <div className="text-center mb-24">
          <p className="text-[#4f46ff] tracking-widest text-sm mb-3">
            OUR PROCESS
          </p>
          <h2 className="text-[36px] md:text-[44px] font-semibold text-[#0b2a5b]">
            A simple yet powerful and
            <br />
            efficient process
          </h2>
        </div>

        {/* CONTENT GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-[420px_48px_1fr] gap-x-12 items-start">
          
          {/* IMAGE COLUMN */}
          <div className="flex justify-center lg:justify-start">
            <Image
              src="https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg"
              alt="Process"
              width={420}
              height={560}
              className="object-cover rounded-md"
              priority
            />
          </div>

          {/* TIMELINE COLUMN */}
          <div className="relative flex justify-center">
            {/* vertical line */}
            <div className="absolute top-3 bottom-3 w-px bg-[#4f46ff]/40" />

            <div className="flex flex-col justify-between py-3 h-full">
              {steps.map((step, i) => (
                <div key={i} className="relative z-10">
                  <div
                    className={`
                      w-4 h-4 rounded-full border-4
                      ${step.inactive
                        ? "border-gray-300 bg-[#f4f7fb]"
                        : "border-[#4f46ff] bg-white"}
                    `}
                  />
                </div>
              ))}
            </div>
          </div>

          {/* CONTENT COLUMN */}
          <div className="space-y-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, ease: "easeOut" }}
              >
                <h3 className="text-lg font-semibold text-[#0b2a5b] mb-2">
                  {step.title}
                </h3>

                <p className="text-sm text-[#4b5d7a] leading-7 max-w-lg">
                  {step.desc}
                </p>

                {!step.inactive && (
                  <a
                    href="#"
                    className="inline-block mt-3 text-sm font-medium text-[#ff4d4f]"
                  >
                    Read more →
                  </a>
                )}
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
