"use client";

export const cards = [];

import Image from "next/image";
import { motion } from "framer-motion";

const cardVariants = (direction = "left") => ({
  hidden: {
    opacity: 0,
    y: 60,
    rotateZ: direction === "left" ? -6 : 6,
  },
  visible: {
    opacity: 1,
    y: 0,
    rotateZ: 0,
    transition: {
      duration: 1,
      ease: [0.22, 1, 0.36, 1],
    },
  },
  exit: {
    opacity: 0,
    y: -40,
    rotateZ: direction === "left" ? -6 : 6,
    transition: {
      duration: 0.6,
      ease: [0.4, 0, 0.2, 1],
    },
  },
});

export default function PumpingServiceCards({
  heading = "The Easy Journey",
  subHeading = "From Concept to Creation",
  tag = "[ PROCESS ]",
  backgroundImage = "/gallery/gallery-1.jpg",
  cards = [
    {
      title: "Discover",
      text: "We begin by understanding your brand, audience, and goals. Through research and strategy, we uncover the insights that shape every decision.",
      image: "/solar/solar-1.svg",
    },
    {
      title: "Plan",
      text: "With a clear vision, we create a roadmap tailored to your project. From wireframes to strategy outlines, every detail is planned with precision.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Design & Build",
      text: "Our creative and technical teams work together to bring concepts to life—crafting designs, developing solutions, and building experiences that stand out.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Launch & Grow",
      text: "Once live, we monitor performance, optimize results, and continue refining strategies to help your amazing brand grow and stay ahead.",
      image: "/solar/solar-1.svg",
    },
  ],
}) {
  return (
    <section className="relative py-24 md:py-32 text-white overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src={backgroundImage}
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 md:px-6">
        {/* Heading */}
        <div className="text-center mb-16 md:mb-20">
          {tag && (
            <span className="block text-sm tracking-widest text-gray-300 mb-4">
              {tag}
            </span>
          )}

          <h2 className="text-3xl sm:text-4xl md:text-6xl font-semibold leading-tight">
            {heading}
            {subHeading && (
              <span className="block mt-3 font-serif italic font-normal">
                {subHeading}
              </span>
            )}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 lg:gap-14">
          {cards.map((item, i) => {
            const direction = i % 2 === 0 ? "left" : "right";

            return (
              <motion.div
                key={i}
                className="relative backdrop-blur-md bg-white/5 border border-white/10 p-6 md:p-8 lg:p-10"
                variants={cardVariants(direction)}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.3 }}
                whileHover={{ y: -8 }}
              >
                {/* Top Row */}
                <div className="flex justify-between items-start">
                  <div className="w-10 h-10 md:w-11 md:h-11 flex items-center justify-center bg-white/10 text-sm md:text-lg font-medium">
                    {i + 1}
                  </div>

                  {item.image && (
                    <div className="relative w-8 h-8 md:w-10 md:h-10 opacity-80">
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* Content */}
                <h3 className="mt-10 md:mt-14 text-2xl md:text-3xl font-serif italic">
                  {item.title}
                </h3>

                <p className="mt-4 text-gray-200 leading-relaxed max-w-md text-sm md:text-base">
                  {item.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
