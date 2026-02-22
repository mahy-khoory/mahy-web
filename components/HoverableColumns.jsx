"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";

/* Background animation */
const bgVariants = {
  initial: { opacity: 0, scale: 1 },
  animate: { opacity: 1, scale: 1.06, transition: { duration: 0.7 } },
  exit: { opacity: 0, scale: 1, transition: { duration: 0.6 } },
};

const defaultItems = [
  {
    no: "01",
    title: "Plan development",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961326/gallery-1_u7bk29.jpg",
  },
  {
    no: "02",
    title: "Market research",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961377/gallery-2_mgmir1.jpg",
  },
  {
    no: "03",
    title: "Business consulting",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
  },
  {
    no: "04",
    title: "Finance strategy",
    desc: "",
    image:
      "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961506/gallery-4_jxixjw.jpg",
  },
];

export default function HoverableColumns({
  title = " Grow client base for improved business standing",
  items = defaultItems,
}) {
  const [active, setActive] = useState(0);

  return (
    <section className="relative w-full min-h-screen overflow-hidden">
      {/* GLOBAL BACKGROUND */}
      <AnimatePresence mode="wait">
        <motion.div
          key={items[active].image}
          variants={bgVariants}
          initial="initial"
          animate="animate"
          exit="exit"
          className="absolute inset-0"
        >
          <Image
            src={items[active].image}
            alt=""
            fill
            priority
            className="object-cover"
          />
        </motion.div>
      </AnimatePresence>

      {/* COLOR OVERLAY */}
      <div className="absolute inset-0 bg-[#061737]/85" />

      {/* GRID LINES (desktop only) */}
      <div className="absolute inset-0 hidden lg:grid grid-cols-4 pointer-events-none">
        <div className="border-r border-white/10" />
        <div className="border-r border-white/10" />
        <div className="border-r border-white/10" />
        <div />
      </div>

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-24 pb-20">
        {/* HEADER */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mb-20">
          <h2 className="text-white text-[42px] md:text-[48px] leading-tight font-semibold max-w-xl">
            {title}
          </h2>

          {/* <p className="text-white/80 max-w-md leading-7 pt-2">
            Lorem ipsum dolor sit amet consectetur. Vel odio netus vel sed.
            In integer magna ultricies ullamcorper et.
          </p> */}
        </div>

        {/* COLUMNS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-auto lg:h-[540px] gap-y-12 lg:gap-y-0">
          {items.map((item, idx) => {
            const isActive = idx === active;

            return (
              <div
                key={item.no}
                className="relative h-[360px] lg:h-full"
                onMouseEnter={() => setActive(idx)}
                onFocus={() => setActive(idx)}
              >
                {/* BASE PLATE (always present) */}
                <motion.div
                  animate={{ y: isActive ? -160 : 0 }}
                  transition={{
                    duration: 0.45,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="
                    absolute
                    left-0
                    right-0
                    bottom-0
                    h-[220px]
                    bg-[#0f1b33]/40
                    backdrop-blur-[2px]
                    flex
                    flex-col
                    justify-end
                  "
                >
                  <div
                    className={clsx(
                      "px-10 pb-10 transition-opacity duration-300",
                      isActive && "opacity-0"
                    )}
                  >
                    <div className="text-[#ff4d4f] text-[44px] font-semibold leading-none">
                      {item.no}
                    </div>
                    <div className="text-white text-[26px] font-semibold mt-3 leading-tight">
                      {item.title}
                    </div>
                  </div>
                </motion.div>

                {/* ACTIVE PANEL */}
                <AnimatePresence>
                  {isActive && (
                    <motion.div
                      initial={{ opacity: 0, y: 40 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 30 }}
                      transition={{ duration: 0.4, ease: "easeOut" }}
                      className="
                        absolute
                        left-0
                        right-0
                        bottom-0
                        h-[460px]
                        bg-[#3f4e69]/95
                        px-10
                        py-12
                        flex
                        flex-col
                        justify-between
                      "
                    >
                      <div>
                        <div className="text-[#ff4d4f] text-[48px] font-semibold leading-none">
                          {item.no}
                        </div>

                        <h3 className="text-white text-[28px] font-semibold mt-4">
                          {item.title}
                        </h3>

                        {item.desc && (
                          <p className="text-white/85 text-[15px] leading-[26px] mt-8 max-w-[320px]">
                            {item.desc}
                          </p>
                        )}
                      </div>

                      {item.desc && (
                        <Link
                          href="/"
                          className="text-[#ff4d4f] text-sm font-medium inline-flex items-center gap-2"
                        >
                          Read more <span>→</span>
                        </Link>
                      )}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
