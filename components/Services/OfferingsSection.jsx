"use client";

import { motion } from "framer-motion";
import PrimaryButton from "../UI/PrimaryButton";
import Link from "next/link";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function OfferingsSection() {
  return (
    <section className="bg-white py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-start">
          {/* LEFT CONTENT */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="text-[36px] md:text-[48px] lg:text-[56px] font-semibold leading-tight text-[#1E2629]">
              Our offerings fuel creative <br />
              solutions for tomorrow
            </h2>

            <p className="mt-6 max-w-xl text-[#526064] leading-relaxed">
              Lorem ipsum dolor sit amet consectetur. Elit sed pulvinar libero
              id ac lacus mauris purus semper. Nascetur lobortis viverra aliquet
              cursus.
            </p>

            <Link href={"/about-us"}>
              <PrimaryButton
                className={"w-fit mt-8 md:mt-10"}
                label="Learn more about us"
              />
            </Link>
          </motion.div>

          {/* RIGHT LIST */}
          <div className="space-y-10">
            {/* ITEM 1 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-6 pb-10 border-b border-gray-200"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                ⚙️
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E2629]">
                  IT consulting
                </h3>
                <p className="mt-2 text-[#526064] leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Egestas in ipsum vel
                  sit et massa cursus nec. Fermentum pretium risus ipsum.
                </p>
              </div>
            </motion.div>

            {/* ITEM 2 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-6 pb-10 border-b border-gray-200"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                📦
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E2629]">
                  Market analysis
                </h3>
                <p className="mt-2 text-[#526064] leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Egestas in ipsum vel
                  sit et massa cursus nec. Fermentum pretium risus ipsum.
                </p>
              </div>
            </motion.div>

            {/* ITEM 3 */}
            <motion.div
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="flex gap-6"
            >
              <div className="flex-shrink-0 w-12 h-12 rounded-full border border-gray-300 flex items-center justify-center">
                📊
              </div>
              <div>
                <h3 className="text-lg font-semibold text-[#1E2629]">
                  Financial analysis
                </h3>
                <p className="mt-2 text-[#526064] leading-relaxed">
                  Lorem ipsum dolor sit amet consectetur. Egestas in ipsum vel
                  sit et massa cursus nec. Fermentum pretium risus ipsum.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
