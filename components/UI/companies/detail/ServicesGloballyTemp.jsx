"use client"

import AnimatedLines from "../../AnimatedLines"
import Image from "next/image"
import { motion } from "framer-motion"
import PrimaryButton from "../../PrimaryButton"

function ServicesGloballyTemp({
  heading = "",
  text,
  texts1,
  texts2,
  items,
  image = "/gallery/gallery-3.jpg",
  invert = false,
}) {
  return (
    <section className="max-w-7xl mx-auto px-5">
      <motion.div
        className="mt-3 md:mt-6 p-8 md:p-12 rounded-3xl grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-12 bg-blue-100"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut", delay: 0.2 }}
        viewport={{ once: true }}
      >
        <div
          className={`md:py-4 md:col-span-2 ${
            invert ? "md:order-2" : "md:order-1"
          }`}
        >
          {text && <p className="leading-7 text-gray-700">{text}</p>}

          {texts1 && (
            <div>
              {texts1.map((item, i) =>
                item.link ? (
                  <a
                    key={i}
                    href={`mailto:${item.text}`}
                    className="block text-blue-600 underline hover:text-blue-800"
                  >
                    {item.text}
                  </a>
                ) : (
                  <p key={i} className={`${i > 0 && "mt-2"}`}>
                    {item.text}
                  </p>
                )
              )}
            </div>
          )}

          {items && (
            <ul className="mt-2 space-y-2">
              {items.map((item, i) => (
                <li key={i} className="flex gap-3">
                  <span className="mt-[0.55em] h-1.5 w-1.5 rounded-full bg-gray-700" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          )}

          {texts2 && (
            <div className="mt-3 space-y-2">
              {texts2.map((item, i) => (
                <p className="text-gray-700" key={i}>
                  {item}
                </p>
              ))}
            </div>
          )}
        </div>

        <div
          className={`rounded-3xl overflow-hidden relative h-60 md:h-full md:col-span-3 ${
            invert ? "md:order-1" : "md:order-2"
          }`}
        >
          <Image src={image} alt="Services" fill style={{ objectFit: "cover" }} />
        </div>
      </motion.div>
    </section>
  )
}

export default ServicesGloballyTemp