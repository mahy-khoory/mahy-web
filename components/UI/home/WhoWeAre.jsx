"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import PrimaryButton from "../PrimaryButton";
import { motion } from "framer-motion";
import AnimatedLines from "../AnimatedLines";

const container1 = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
    delay: 0.9,
  },
};
const container2 = {
  hidden: { opacity: 0, x: 20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut", delay: 0.5 },
  },
};

function WhoWeAre({image}) {
  return (
    <>
      {" "}
      <section className="max-w-7xl mx-auto py-15 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-18 md:h-[80vh]">
          <motion.div
            variants={container1}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="w-full px-5 flex flex-col justify-center"
          >
            <h2 className="t-base text-xl font-semibold tracking-tighter">
              Who We Are
            </h2>
            <p className="font-semibold text-4xl md:text-5xl mt-3 leading-12 md:leading-15">
              MAHY Khoory
            </p>
            <p className="mt-5 md:mt-8 font-light text-gray-700">
              MAHY Khoory Group of Companies is a Dubai-based diversified
              holding group comprising 25+ operating companies and business
              divisions across multiple industries. The Group has built a strong
              presence in the UAE and the wider region through long-term
              commercial relationships, technical capability, and integrated
              operations. With businesses spanning trading, engineering,
              industrial manufacturing, recycling, sustainability, logistics,
              automotive, hospitality, and food & beverage, the Group operates a
              balanced and resilient portfolio designed to support both
              traditional industries and future-focused sectors.
            </p>
            <Link href={"/about-us"}>
              <PrimaryButton
                className={"w-fit mt-8 md:mt-10"}
                label="Learn more about us"
              />
            </Link>
          </motion.div>
          <motion.div
            variants={container2}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative h-100 md:h-full"
          >
            <Image
              src={image}
              alt="About Us"
              fill
              style={{ objectFit: "object-contain" }}
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default WhoWeAre;
