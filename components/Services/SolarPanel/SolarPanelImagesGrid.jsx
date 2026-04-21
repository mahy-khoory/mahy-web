"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const defaultItems = [
  { title: "Smart Strategies", text: "Risus tristique proin cras diam sed." },
  {
    title: "Business Growth",
    text: "Ac ut nam vulputate volutpat felis in lorem.",
  },
];

const defaultImages = [
  "/gallery/gallery-2.jpg",
  "/gallery/gallery-3.jpg",
];

function SolarPanelImagesGrid({
  heading = "Helping Businesses Scale Smarter Faster And Stronger",
  items = defaultItems,
  images = defaultImages,
  text1 = "250+",
  text2 = "Active Customers",
}) {
  return (
    <section className="max-w-7xl mx-auto px-5">
      <div className="grid grid-cols-1 lg:grid-cols-8 gap-8">

        <div className="lg:col-span-6">
          <h2 className="text-4xl font-medium text-center lg:text-left">
            {heading}
          </h2>

          <div className="grid md:grid-cols-2 gap-6 mt-8">
            {items.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45, delay: i * 0.1 }}
                viewport={{ once: true }}
                className="group bg-slate-900 text-white p-10 rounded-md shadow-md 
hover:shadow-xl transition-all duration-300 hover:-translate-y-1 
hover:bg-white"
              >
                <h3
                  className="font-semibold text-xl 
group-hover:text-[var(--accent-color)] transition-colors duration-300"
                >
                  {item.title}
                </h3>

                <p
                  className="text-gray-300 mt-3 text-sm leading-6 
group-hover:text-[var(--accent-light)] transition-colors duration-300"
                >
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

     <div className="lg:col-span-2 flex flex-col gap-6">
    
          {images.map((img, index) => (
            <div key={index} className="relative h-60 md:h-64 rounded overflow-hidden">
              <Image
                src={img}
                alt={`grid-image-${index}`}
                fill
                className="object-cover"
              />
            </div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="bg-slate-900 text-white px-6 py-5"
          >
            <span className="text-2xl font-medium block">{text1}</span>
            <span className="uppercase text-sm tracking-wide">{text2}</span>
          </motion.div>
        </div>

      </div>
    </section>
  );
}

export default SolarPanelImagesGrid;
