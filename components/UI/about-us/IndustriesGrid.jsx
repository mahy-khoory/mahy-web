"use client";

import { motion } from "framer-motion";
import {
  FaPlane,
  FaCar,
  FaShieldAlt,
  FaMicrochip,
  FaUserTie,
  FaBriefcaseMedical,
  FaOilCan,
  FaMicroscope,
  FaBolt,
  FaCogs,
} from "react-icons/fa";
import AnimatedLines from "../AnimatedLines";

export default function IndustriesGrid({ heading, industries }) {
  const INDUSTRIES = [
    { label: industries[0], icon: FaPlane, href: "/companies" },
    { label: industries[1], icon: FaCar, href: "/companies" },
    { label: industries[2], icon: FaShieldAlt, href: "/companies" },
    { label: industries[3], icon: FaMicrochip, href: "/companies" },
    { label: industries[4], icon: FaUserTie, href: "/companies" },

    { label: industries[5], icon: FaBriefcaseMedical, href: "/companies" },
    { label: industries[6], icon: FaOilCan, href: "/companies" },
    { label: industries[7], icon: FaMicroscope, href: "/companies" },
    { label: industries[8], icon: FaBolt, href: "/companies" },
    { label: industries[9], icon: FaCogs, href: "/companies" },
  ];
  return (
    <section className="w-full py-16 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <AnimatedLines />
        <h2 className="text-center text-lg md:text-xl font-medium text-gray-700 mb-12">{heading}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          {INDUSTRIES.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                href={item.href}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.45 }}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.97 }}
                className="
                  group
                  relative
                  flex
                  flex-col
                  items-center
                  justify-center
                  gap-4
                  h-40
                  border
                  border-gray-200
                  rounded-xl
                  bg-white
                  transition-all
                  hover:border-sky-400
                  hover:shadow-lg
                "
              >
                <Icon
                  className="
                    text-4xl
                    text-sky-500
                    group-hover:text-sky-600
                    transition-colors
                  "
                />

                <span
                  className="
                    text-xs
                    tracking-widest
                    font-semibold
                    text-gray-800
                    uppercase
                  "
                >
                  {item.label}
                </span>
                <span
                  className="
                    absolute
                    bottom-5
                    h-[2px]
                    w-0
                    bg-sky-500
                    transition-all
                    duration-300
                    group-hover:w-12
                  "
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
