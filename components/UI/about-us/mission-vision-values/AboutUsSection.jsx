"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutUsSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      <div className="mx-auto max-w-[1600px]">
        <div className="grid grid-cols-1 lg:grid-cols-[1.25fr_1fr] items-stretch">
          
          <div className="relative h-[320px] sm:h-[420px] lg:h-[700px]">
            <div
              className="
                absolute inset-0 overflow-hidden
                [clip-path:none]
                lg:[clip-path:polygon(0_0,90%_0,78%_100%,0_100%)]
              "
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="absolute inset-0 will-change-transform transform-gpu"
              >
                <Image
                  src="/gallery/gallery-6.jpg"
                  alt="About Us"
                  fill
                  priority
                  className="object-cover"
                />
              </motion.div>
            </div>
          </div>

          <div className="flex items-center">
            <div className="px-6 sm:px-10 lg:px-20 py-16 max-w-xl">
              <h3 className="text-[28px] font-semibold tracking-wide text-orange-500 mb-6">
                ABOUT US
              </h3>

              <p className="text-[15px] leading-relaxed text-gray-700 mb-6">
                MAHY Khoory Group is a diversified holding company with
                operations spanning trading, engineering, industrial
                manufacturing, packaging, recycling, environmental services,
                transportation, energy, automotive, hospitality, and food
                services. Through a portfolio of specialized companies, the
                Group serves industrial, commercial, institutional, and
                hospitality sectors across regional and international markets.
              </p>

              <p className="text-[15px] leading-relaxed text-gray-700">
                Our businesses are built on strong operational foundations,
                vertical integration, and long-term partnerships. Guided by a
                clear vision, a focused mission, and shared values, we are
                committed to delivering sustainable growth, operational
                excellence, and long-term value for all stakeholders.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
