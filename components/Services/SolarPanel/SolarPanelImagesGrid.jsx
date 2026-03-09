'use client'

import Image from "next/image"
import { motion } from "framer-motion"

const defaultItems = [
  { title: "Smart Strategies", text: "Risus tristique proin cras diam sed." },
  { title: "Business Growth", text: "Ac ut nam vulputate volutpat felis in lorem." }
]

function SolarPanelImagesGrid({
  heading = "Helping Businesses Scale Smarter Faster And Stronger",
  items = defaultItems,
  text1 = "250+",
  text2 = "Active Customers"
}) {

  return (
    <section className="max-w-7xl mx-auto px-5">

      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">

        {/* LEFT SIDE */}
        <div className="lg:col-span-6">

          <h2 className="text-4xl font-medium text-center lg:text-left">
            {heading}
          </h2>

          {/* CARD GRID */}
          <div className="grid md:grid-cols-2 gap-6 mt-8">

            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="bg-slate-900 text-white p-10 rounded-md shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <h3 className="font-semibold text-xl">
                  {item.title}
                </h3>

                <p className="text-gray-300 mt-3 text-sm leading-6">
                  {item.text}
                </p>
              </motion.div>
            ))}

          </div>

        </div>

        {/* RIGHT SIDE IMAGES */}
        <div className="lg:col-span-2 flex flex-col gap-6">

          <div className="relative h-70 rounded overflow-hidden">
            <Image
              src="/gallery/gallery-2.jpg"
              alt="Solar Panel Images Grid"
              fill
              className="object-cover"
            />
          </div>

          <div className="relative h-70 rounded overflow-hidden">
            <Image
              src="/gallery/gallery-3.jpg"
              alt="Solar Panel Images Grid"
              fill
              className="object-cover"
            />
          </div>

          {/* STATS BOX */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white px-6 py-5"
          >
            <span className="text-2xl font-medium block">
              {text1}
            </span>

            <span className="uppercase text-sm tracking-wide">
              {text2}
            </span>
          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default SolarPanelImagesGrid