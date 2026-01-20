"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const awards = [
  {
    id: "01",
    date: "Feb 2025",
    title: "Creative Awards Winner",
    source: "Internal Award",
    image: "/gallery/gallery-1.jpg",
  },
  {
    id: "02",
    date: "Feb 2025",
    title: "Industry Award Recipient",
    source: "ABC Giver",
    image: "/gallery/gallery-2.jpg",
  },
  {
    id: "03",
    date: "March 2024",
    title: "Award-Winning Agency",
    source: "25 Agency",
    image: "/gallery/gallery-3.jpg",
  },
  {
    id: "04",
    date: "Sep 2023",
    title: "Recognized for Excellence",
    source: "Word Pressures",
    image: "/gallery/gallery-4.jpg",
  },
  {
    id: "05",
    date: "Oct 2025",
    title: "Awarded for Innovation",
    source: "Times Awards",
    image: "/gallery/gallery-5.jpg",
  },
];

export default function DisplayAwards() {
  const [active, setActive] = useState(awards[0]);

  return (
    <section className="bg-[#F7F7F8] py-24">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-500 mb-4">
            <span className="w-4 h-4 bg-gray-400 rounded-sm" />
            Awards
          </div>

          <h2 className="text-[36px] md:text-[52px] font-semibold text-gray-900">
            Meet Our Expert Members
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="relative w-full h-full min-h-[520px] overflow-hidden bg-black">
            <AnimatePresence mode="wait">
              <motion.div
                key={active.image}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="absolute inset-0"
              >
                <Image
                  src={active.image}
                  alt={active.title}
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="divide-y divide-gray-300">
            {awards.map((item) => {
              const isActive = item.id === active.id;

              return (
                <motion.div
                  key={item.id}
                  onMouseEnter={() => setActive(item)}
                  className={`cursor-pointer px-6 py-7 transition-colors duration-300 ${
                    isActive ? "bg-[#4A4A55] text-white" : "hover:bg-gray-100"
                  }`}
                >
                  <div className="flex items-center justify-between mb-2 text-sm">
                    <div className="flex gap-6">
                      <span className="opacity-70">{item.id}.</span>
                      <span className="opacity-70">{item.date}</span>
                    </div>

                    <span className="opacity-70">{item.source}</span>
                  </div>

                  <h3 className="text-lg md:text-xl font-semibold">
                    {item.title}
                  </h3>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
