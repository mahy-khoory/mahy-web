"use client";

import Link from "next/link";
import AnimatedLines from "../../AnimatedLines";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

function SustainabilitySection({
  heading = "Sustainability",
  cardHeight = "lg:h-65",
  items = [
    {
      title: "Shaping Digital Innovation for a Sustainable Future",
      text: "Anchored in our vision To Enable Connectivity and Trust Everywhere, Our sustainability strategy focuses on three key foundational aspects within the company: internal controls, compliance, and talent development. By strengthening core competencies and aligning with the 17 United Nations Sustainable Development Goals (SDGs) and industry trends, we have identified five key sustainable development strategic priorities, aiming to contribute to global sustainable development initiatives.",
      image: "/gallery/gallery-4.jpg",
    },
    {
      title: "Sustainability Reports",
      text: "Mahy Khoory has been releasing sustainability reports for many consecutive years.",
      image: "/gallery/gallery-5.jpg",
    },
    {
      title: "Environmental Protection",
      text: "ZTE focuses on green innovation to pave a green digital path by promoting green operations, green supply chain, green digital infrastructure, and green empowerment, contributing to net zero emission.",
      image: "/gallery/gallery-6.jpg",
    },
    {
      title: "Social Contribution",
      text: "As a Driver of Digital Economy, ZTE is dedicated to leveraging digital intelligence to foster value beyond commercial interests and achieving the vision To Enable Connectivity and Trust Everywhere.",
      image: "/gallery/gallery-8.jpeg",
    },
    {
      title: "Corporate Governance",
      text: "ZTE has always been putting emphasis on strengthening corporate governance, focusing on internal control, compliance, social credibility and BCM to build a highly resilient organization.",
      image: "/gallery/gallery-4.jpg",
    },
  ],
}) {
  const sectionRef = useRef(null);

  const [isInView, setIsInView] = useState(false);
  const [autoIndex, setAutoIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const activeIndex = useMemo(() => {
    return hoveredIndex !== null ? hoveredIndex : autoIndex;
  }, [hoveredIndex, autoIndex]);

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      {
        threshold: 0.3,
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isInView || hoveredIndex !== null || items.length <= 1) return;

    const interval = setInterval(() => {
      setAutoIndex((prev) => (prev + 1) % items.length);
    }, 2800);

    return () => clearInterval(interval);
  }, [isInView, hoveredIndex, items.length]);

  return (
    <section ref={sectionRef} className="my-15 max-w-6xl mx-auto">
      <AnimatedLines />
      <h2 className="text-center text-3xl font-semibold pt-1">{heading}</h2>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:gap-5 mt-10">
        {items.map((item, i) => {
          const isActive = activeIndex === i;

          return (
            <motion.div
              key={i}
              onMouseEnter={() => setHoveredIndex(i)}
              onMouseLeave={() => setHoveredIndex(null)}
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 24 }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: "easeOut" }}
              className={`${
                i === 0 ? "lg:col-span-2" : ""
              } relative lg:rounded-3xl overflow-hidden ${cardHeight} flex flex-col justify-end group cursor-pointer`}
            >
              <motion.div
                animate={{
                  scale: isActive ? 1.08 : 1,
                  y: isActive ? -6 : 0,
                  filter: isActive ? "blur(2px)" : "blur(0px)",
                }}
                transition={{ duration: 0.9, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  style={{ objectFit: "cover" }}
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.12]"
                />
              </motion.div>

              <motion.div
                animate={{
                  opacity: isActive ? 1 : 0.86,
                }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/35 to-transparent"
              />

              <motion.div
                animate={{
                  opacity: isActive ? 1 : 0.55,
                }}
                transition={{ duration: 0.45 }}
                className="absolute inset-0 bg-black/15"
              />

              <div className="relative z-10 px-7 py-6 lg:p-5">
                <motion.div
                  animate={{
                    y: isActive ? 0 : 18,
                    opacity: 1,
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                >
                  <h3 className="text-white font-semibold text-lg leading-snug">
                    {item.title}
                  </h3>
                </motion.div>

                <AnimatePresence mode="wait">
                  {isActive && (
                    <motion.div
                      key={`content-${i}`}
                      initial={{ opacity: 0, y: 18 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 14 }}
                      transition={{ duration: 0.45, ease: "easeOut" }}
                      className="overflow-hidden"
                    >
                      <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.55, delay: 0.08 }}
                        className="text-gray-100 text-sm mt-3 leading-6"
                      >
                        {item.text}
                      </motion.p>

                      {item.text2 && (
                        <motion.p
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          exit={{ opacity: 0 }}
                          transition={{ duration: 0.55, delay: 0.12 }}
                          className="text-gray-100 text-sm mt-2 leading-6"
                        >
                          {item.text2}
                        </motion.p>
                      )}

                      {/* <Link href={"/"} className="inline-block mt-4">
                        <motion.div
                          initial={{ opacity: 0, y: 8 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: 8 }}
                          transition={{ duration: 0.4, delay: 0.15 }}
                          className="flex gap-2 items-center text-white border border-white/80 py-1.5 px-5 rounded-2xl text-sm w-fit hover:bg-white hover:text-black transition-all duration-300"
                        >
                          Learn More
                          <ArrowRight size={18} />
                        </motion.div>
                      </Link> */}
                    </motion.div>
                  )}
                </AnimatePresence>

                <motion.div
                  animate={{
                    width: isActive ? "72px" : "0px",
                    opacity: isActive ? 1 : 0,
                  }}
                  transition={{ duration: 0.35, ease: "easeOut" }}
                  className="h-[2px] bg-white/90 mt-3"
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}

export default SustainabilitySection;