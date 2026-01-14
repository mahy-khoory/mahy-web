"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";
import { motion } from "framer-motion";

gsap.registerPlugin(ScrollTrigger);

const steps = [
  {
    title: "Market research",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
  },
  {
    title: "Business consulting",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
  },
  {
    title: "Finance strategy",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
  },
  {
    title: "Business planning",
    desc:
      "Lorem ipsum dolor sit amet consectetur. Id purus enim diam felis. Pharetra ut posuere sem vitae dui nec velit.",
  },
];

export default function ComprehensiveProcessSection() {
  const sectionRef = useRef(null);
  const lineRef = useRef(null);

  useEffect(() => {
    const lenis = new Lenis({ smoothWheel: true });
    const raf = (time) => {
      lenis.raf(time);
      requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);

    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: "top",
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 30%",
          end: "bottom 80%",
          scrub: true,
        },
      }
    );

    return () => lenis.destroy();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative bg-[#F5F7FB] py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-[linear-gradient(135deg,#E8ECF4_1px,transparent_1px)] bg-[length:18px_18px] opacity-60" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <p className="text-xs tracking-widest uppercase text-indigo-600 font-semibold mb-3">
            Our process
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0F1F3E] leading-tight">
            A simple yet powerful and <br /> efficient process
          </h2>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[420px_1fr] gap-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden shadow-xl"
          >
            <Image
              src="/gallery/gallery-1.jpg"
              alt="Process"
              width={500}
              height={600}
              className="object-cover w-full h-full"
            />
          </motion.div>
          <div className="relative">
            <div className="absolute left-[18px] top-0 bottom-0 w-px bg-indigo-200">
              <div
                ref={lineRef}
                className="absolute top-0 left-0 w-px h-full bg-indigo-600"
              />
            </div>

            <div className="space-y-16">
              {steps.map((step, i) => (
                <div key={i} className="relative flex gap-10">
                  <div className="relative z-10">
                    <div className="w-9 h-9 rounded-full bg-indigo-600 flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-full" />
                    </div>
                  </div>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    viewport={{ once: true }}
                    className="pt-1"
                  >
                    <h3 className="text-xl font-semibold text-[#0F1F3E]">
                      {step.title}
                    </h3>
                    <p className="mt-3 text-gray-600 leading-relaxed max-w-lg">
                      {step.desc}
                    </p>
                    <button className="mt-4 text-sm font-semibold text-red-500 hover:underline">
                      Read more →
                    </button>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
