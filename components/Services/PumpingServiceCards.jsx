"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const cards = [
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
];

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

export default function PumpingServiceCards() {
  return (
    <section className="relative py-24 md:py-32 text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/gallery/gallery-1.jpg"
          alt="Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <span className="block text-sm tracking-widest text-gray-300 mb-4">
            [ PROCESS ]
          </span>
          <h2 className="text-4xl md:text-6xl font-semibold leading-tight">
            The Easy Journey
            <span className="block mt-3 font-serif italic font-normal">
              From Concept to Creation
            </span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">
          {cards.map((item, i) => {
            const direction = i % 2 === 0 ? "left" : "right";

            return (
              <motion.div
                key={i}
                className="relative backdrop-blur-md bg-white/5 border border-white/10 p-8 md:p-10"
                variants={cardVariants(direction)}
                initial="hidden"
                whileInView="visible"
                exit="exit"
                viewport={{ once: false, amount: 0.35 }}
                whileHover={{ y: -8 }}
              >
                <div className="flex justify-between items-start">
                  <div className="w-11 h-11 flex items-center justify-center bg-white/10 text-lg font-medium">
                    {i + 1}
                  </div>
                  <div className="relative w-10 h-10 opacity-80">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
                <h3 className="mt-14 text-3xl font-serif italic">
                  {item.title}
                </h3>
                <p className="mt-4 text-gray-200 leading-relaxed max-w-md">
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



// import Image from "next/image"

// function PumpingServiceCards() {
//     const items = [
//         { title: "Discover", text: "We begin by understanding your brand, audience, and goals. Through research and strategy, we uncover the insights that shape every decision.", image: "/solar/solar-1.svg" },
//         { title: "Plan", text: "With a clear vision, we create a roadmap tailored to your project. From wireframes to strategy outlines, every detail is planned with precision.", image: "/solar/solar-2.svg" },
//         { title: "Design & Build", text: "Our creative and technical teams work together to bring concepts to life—crafting designs, developing solutions, and building experiences that stand out.", image: "/solar/solar-2.svg" },
//         { title: "Launch & Grow", text: "Once live, we monitor performance, optimize results, and continue refining strategies to help your amazing brand grow and stay ahead.", image: "/solar/solar-1.svg" },
//     ]
//     return (
//         <section className="relative text-white py-14 md:py-20 px-5">
//             <div className="relative z-10 max-w-7xl mx-auto">
//                 <h2 className="text-3xl md:text-6xl text-center font-semibold">The Easy Journey <span className="block md:mt-3">From Concept to Creation</span></h2>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-15">
//                     {items.map((item, i) => (
//                         <div key={i} className="backdrop-blur-xs border border-gray-800 p-8">
//                             <div className="flex justify-between">
//                                 <div className="bg-gray-800 size-12 flex justify-center items-center">
//                                     <span className="text-2xl">{i + 1}</span>
//                                 </div>
//                                 <div className="relative size-12">
//                                     <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
//                                 </div>
//                             </div>
//                             <h3 className="text-4xl font-semibold mt-15">{item.title}</h3>
//                             <p className="text-gray-200 mt-4">{item.text}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <div className="absolute inset-0">
//                 <Image src={"/gallery/gallery-1.jpg"} alt="Pumping Service Systems" fill objectFit="cover" />
//             </div>
//             <div className="absolute inset-0 bg-black/50" />
//         </section>
//     )
// }

// export default PumpingServiceCards