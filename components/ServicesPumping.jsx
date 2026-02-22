"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";
import clsx from "clsx";

const services = [
  {
    title: "Business planning",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Vulputate iaculis morbi morbi convallis erat. Blandit lacinia donec semper ut nam aliquam mus duis.",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
  },
  {
    title: "Financial strategy",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Vulputate iaculis morbi morbi convallis erat. Blandit lacinia donec semper ut nam aliquam mus duis.",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
  },
  {
    title: "Business consulting",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Vulputate iaculis morbi morbi convallis erat. Blandit lacinia donec semper ut nam aliquam mus duis.",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
  },
  {
    title: "Market research",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Vulputate iaculis morbi morbi convallis erat. Blandit lacinia donec semper ut nam aliquam mus duis.",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
  },
];

export default function ServicesPumping({
  title1 = "Our service",
  title2 = "Grow client base for improved business standing",
  items = services,
}) {
  // ✅ default hover = top-left
  const [active, setActive] = useState(0);

  return (
    <section className="bg-[#061737] text-white py-24 sm:py-32">
      {/* HEADER */}
      <div className="max-w-5xl mx-auto text-center mb-20 sm:mb-28 px-4">
        <p className="text-[#ff4d4f] uppercase tracking-widest text-xs sm:text-sm mb-3">
          {title1}
        </p>
        <h2 className="text-[32px] sm:text-[42px] md:text-[48px] font-semibold leading-tight">
          {title2}
        </h2>
      </div>

      {/* GRID WRAPPER */}
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6">

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2">
          {items.map((item, i) => {
            const isActive = active === i;
            const columns = 2;
            const totalRows = Math.ceil(items.length / columns);
            const currentRow = Math.floor(i / columns);
            const currentCol = i % columns;

            const isNotLastColumn = currentCol !== columns - 1;
            const isNotLastRow = currentRow !== totalRows - 1;

            return (
              <div
                key={i}
                onMouseEnter={() => setActive(i)}
                className={clsx(
                  "relative transition-colors duration-300",
                  "px-6 sm:px-12 md:px-16",
                  "py-16 sm:py-18 md:py-20",
                  isNotLastColumn && "md:border-r border-white/20",
                  isNotLastRow && "md:border-b border-white/20",
                  isActive && "bg-white/5"
                )}
              >
                {/* IMAGE SLOT */}
                <motion.div
                  animate={{
                    opacity: isActive ? 1 : 0,
                    y: isActive ? 0 : 12,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className={clsx(
                    "overflow-hidden",
                    "mb-6 md:mb-0",
                    "md:absolute md:top-8 md:left-16",
                    "w-[140px] sm:w-[160px]",
                  )}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    width={160}
                    height={110}
                    className="object-cover"
                  />
                </motion.div>

                {/* CONTENT */}
                <div className="relative z-10 md:mt-24">
                  <h3 className="text-xl sm:text-2xl font-semibold mb-4">
                    {item.title}
                  </h3>

                  <p className="text-white/80 text-sm leading-7 max-w-md">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
