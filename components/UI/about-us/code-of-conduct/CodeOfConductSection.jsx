"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import AnimatedLines from "../../AnimatedLines";

export default function CodeOfConductSection() {
  return (
    <section className="bg-white py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 items-center gap-24 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <div className="mb-4 flex justify-center lg:justify-start border">
              <AnimatedLines bg="bg-neutral-400" />
            </div>

            <h2 className="mb-6 text-[32px] sm:text-[36px] lg:text-[40px] font-semibold leading-tight text-black">
              Our Code of Conduct
            </h2>

            <p className="mx-auto max-w-xl text-[16px] sm:text-[17px] leading-[1.7] text-neutral-700 lg:mx-0">
              MAHY Khoory Group is committed to conducting business with
              integrity, professionalism, and accountability across all its
              operations. Our policies and Code of Conduct define the standards
              of behavior expected from all employees, management, directors,
              and business partners, and guide how we operate in every market
              and sector.
              <br />
              <br />
              These principles support ethical decision-making, regulatory
              compliance, and responsible business practices, while protecting
              the interests of our customers, employees, partners, and
              stakeholders.
            </p>
          </motion.div>

          <div className="relative w-full">
            <div className="flex flex-col items-center gap-8 lg:hidden">
              <motion.div
                className="h-[220px] w-[220px]"
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <CircleImage src="/gallery/gallery-2.jpg" />
              </motion.div>

              <div className="flex gap-6">
                <motion.div
                  className="h-[150px] w-[150px]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
                >
                  <CircleImage src="/gallery/gallery-4.jpg" />
                </motion.div>

                <motion.div
                  className="h-[150px] w-[150px]"
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
                >
                  <CircleImage src="/gallery/gallery-6.jpg" />
                </motion.div>
              </div>
            </div>
            <div className="relative hidden h-[420px] lg:block">
              <motion.div
                className="absolute right-0 top-0 h-[220px] w-[220px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.15 }}
              >
                <CircleImage src="/gallery/gallery-2.jpg" />
              </motion.div>

              <motion.div
                className="absolute left-[80px] top-[60px] h-[160px] w-[160px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.25 }}
              >
                <CircleImage src="/gallery/gallery-4.jpg" />
              </motion.div>

              <motion.div
                className="absolute bottom-0 left-[200px] h-[190px] w-[190px]"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.35 }}
              >
                <CircleImage src="/gallery/gallery-6.jpg" />
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CircleImage({ src }) {
  return (
    <div className="relative h-full w-full overflow-hidden rounded-full">
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes="200px"
        priority
      />
    </div>
  );
}
