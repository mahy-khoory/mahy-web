"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

export default function TrustedAdvisorSection({
  heading = "A business advisor you can trust",
  texts,
  bulletsTitle,
  bullets,
  lastText
}) {
  return (
    <section className="bg-white py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          {/* LEFT CONTENT */}
          <div>
            <h2 className="text-[42px] md:text-[50px] leading-tight font-bold text-[#0B1320]">{heading}</h2>
            {texts && texts.map((text, i) => (
              <p key={i} className="text-gray-600 mt-6">{text}</p>
            ))}
            {bulletsTitle && (
              <h3 className="leading-tight font-bold text-[#0B1320] mt-6">{bulletsTitle}</h3>
            )}
            {bullets && (
              <ul className="mt-4 list-disc pl-5 mb-4 space-y-2">
                {bullets.map((textItem, j) => (
                  <li key={j} className="text-gray-600">{textItem}</li>
                ))}
              </ul>
            )}

            {lastText && (
              <p className="mt-6 max-w-md text-gray-600">{lastText}</p>
            )}

            {/* <div className="mt-10 flex items-center gap-6">
              <span className="uppercase text-sm tracking-widest font-semibold text-[#0B1320]">
                Follow me
              </span>
              <div className="flex gap-4 text-blue-600">
                <FaFacebookF className="cursor-pointer hover:opacity-70 transition" />
                <FaTwitter className="cursor-pointer hover:opacity-70 transition" />
                <FaInstagram className="cursor-pointer hover:opacity-70 transition" />
                <FaLinkedinIn className="cursor-pointer hover:opacity-70 transition" />
              </div>
            </div> */}
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-2 gap-8">
            {/* LEFT COLUMN (slightly UP) */}
            <div className="flex flex-col gap-8 -translate-y-6">
              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/gallery/gallery-2.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>

              {/* BLACK BOX */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0A6CF1",
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="aspect-[4/5] bg-[#0B1320] text-white flex items-center justify-center text-center cursor-pointer"
              >
                <div>
                  <h3 className="text-5xl font-bold">10Y</h3>
                  <p className="mt-2 tracking-widest text-sm font-semibold">
                    OF EXPERIENCE
                  </p>
                </div>
              </motion.div>
            </div>

            {/* RIGHT COLUMN (slightly DOWN) */}
            <div className="flex flex-col gap-8 translate-y-6">
              {/* BLUE BOX */}
              <motion.div
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "#0B1320",
                }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="aspect-[4/5] bg-[#0A6CF1] text-white flex items-center justify-center text-center cursor-pointer"
              >
                <div>
                  <h3 className="text-5xl font-bold">1000+</h3>
                  <p className="mt-2 tracking-widest text-sm font-semibold">
                    HAPPY CLIENTS
                  </p>
                </div>
              </motion.div>

              {/* IMAGE */}
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src="/gallery/gallery-3.jpg"
                  alt=""
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
