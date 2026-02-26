"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

export default function TrustedBusinessAdvisor({
  heading = "Your Trusted Business Advisor",
  text,
  bullets,
  endText,
  items = [
    {
      label: "Our Expertise",
      text: "This label highlights your company's deep knowledge and experience in the business consulting industry.",
      image: "/gallery/gallery-1.jpg",
    },
    {
      label: "Partnering for Success",
      text: "This label highlights your company's deep knowledge and experience in the business consulting industry.",
      image: "/gallery/gallery-3.jpg",
    },
    {
      label: "Transforming Business",
      text: "This label highlights your company's deep knowledge and experience in the business consulting industry.",
      image: "/gallery/gallery-3.jpg",
    },
  ]
}) {
  const [active, setActive] = useState(0);
  const itemRefs = useRef([]);
  const [indicator, setIndicator] = useState({ top: 0, height: 0 });
  useEffect(() => {
    const el = itemRefs.current[active];
    if (!el) return;

    setIndicator({
      top: el.offsetTop,
      height: el.offsetHeight,
    });
  }, [active]);

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-7xl px-6 py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-stretch">
          <div className="lg:col-span-5">
            <h2 className="text-[42px] font-semibold leading-tight text-slate-900">
              {heading}
            </h2>
            {text && (
              <p className="mt-4 max-w-xl text-[16px] leading-7 text-slate-500">
                {text}
              </p>
            )}
            {bullets && (
              <ul className="mt-3 list-disc pl-5 mb-4 space-y-2">
                {bullets.map((textItem, j) => (
                  <li key={j} className="text-slate-500">{textItem}</li>
                ))}
              </ul>
            )}
            {endText && (
              <p className="mt-2 max-w-md text-slate-500">{endText}</p>
            )}
            <div className="relative mt-10 pl-10">
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-slate-200 rounded-full" />
              <motion.div
                className="absolute left-0 w-[2px] bg-blue-600 rounded-full"
                animate={{ top: indicator.top, height: indicator.height }}
                transition={{ type: "spring", stiffness: 260, damping: 30 }}
              />

              <div className="space-y-10">
                {items.map((item, idx) => (
                  <button
                    key={idx}
                    ref={(el) => (itemRefs.current[idx] = el)}
                    onClick={() => setActive(idx)}
                    className="block text-left"
                  >
                    <h3 className="text-[20px] font-semibold text-slate-900">
                      {item.label}
                    </h3>
                    <p className="mt-2 max-w-md text-[15px] leading-7 text-slate-500">
                      {item.text}
                    </p>
                    {item.bullets && (
                      <ul className="mt-3 list-disc pl-5 space-y-2 text-[15px]">
                        {item.bullets.map((textItem, j) => (
                          <li key={j} className="text-slate-500">{textItem}</li>
                        ))}
                      </ul>
                    )}
                    {item.endText && (
                      <p className="mt-2 max-w-md text-[15px] leading-7 text-slate-500">
                        {item.endText}
                      </p>
                    )}
                  </button>
                ))}
              </div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="relative h-full min-h-[520px] rounded-2xl overflow-hidden shadow-[0_30px_80px_rgba(0,0,0,0.12)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={items[active].image}
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 1.03 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0"
                >
                  <Image
                    src={items[active].image}
                    alt={items[active].label}
                    fill
                    priority
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
