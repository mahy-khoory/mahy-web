"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Calculator,
  Share2,
  BadgeCheck,
  TrendingUp,
  Users,
  BarChart3,
} from "lucide-react";


const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.1,
    },
  },
};

const cardIn = {
  hidden: { opacity: 0, y: 26, scale: 0.98 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const iconByKey = {
  strategy: Calculator,
  sustainability: Share2,
  operations: BadgeCheck,
  marketing: TrendingUp,
  hr: Users,
  finance: BarChart3,
};

const defaultItems = [
  {
    key: "strategy",
    title: "Strategic Planning and Business Development",
    desc: "Assisting businesses in defining their vision, mission, and long-term goals.",
  },
  {
    key: "sustainability",
    title: "Sustainability and Corporate Social Responsibility",
    desc: "Supporting business in integrating sustainability practices & corporate social responsibility.",
  },
  {
    key: "operations",
    title: "Operations and Process Improvement",
    desc: "Helping business streamline their operations, enhance efficiency & optimize processes.",
  },
  {
    key: "marketing",
    title: "Marketing and Sales Consulting",
    desc: "Assisting businesses in defining their vision, mission, and long-term goals.",
  },
  {
    key: "hr",
    title: "Human Resources Consulting",
    desc: "Offering guidance on various HR aspects, such as talent acquisition & HR policies and procedures.",
  },
  {
    key: "finance",
    title: "Financial Consulting",
    desc: "Providing expertise in financial management, budgeting, forecasting, and financial analysis.",
  },
];

function ServiceCard({ item }) {
  const Icon = iconByKey[item.key] ?? BadgeCheck;

  return (
    <motion.article
      variants={cardIn}
      whileHover={{
        y: -6,
        scale: 1.01,
        transition: { duration: 0.25, ease: [0.22, 1, 0.36, 1] },
      }}
      className="group relative rounded-2xl border border-blue-500/70 bg-white p-7 md:p-8 shadow-[0_0_0_rgba(0,0,0,0)] transition-shadow duration-300 hover:shadow-[0_18px_55px_rgba(2,8,23,0.10)]"
    >
      {/* subtle hover glow like the reference */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100">
        <div className="absolute inset-6 rounded-2xl bg-blue-500/10" />
      </div>

      <div className="relative flex gap-5">
        {/* Icon block (matches “icon on left” look) */}
        <div className="shrink-0">
          <div className="relative grid h-12 w-12 place-items-center rounded-xl border border-blue-200 bg-white shadow-sm">
            {/* tiny animated ring */}
            <motion.span
              aria-hidden
              className="absolute inset-0 rounded-xl"
              initial={false}
              whileHover={{ scale: 1.06, opacity: 1 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            />
            <motion.div
              initial={false}
              whileHover={{ rotate: -6, scale: 1.05 }}
              transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            >
              <Icon className="h-6 w-6 text-blue-600" />
            </motion.div>
          </div>
        </div>

        {/* Text */}
        <div className="min-w-0">
          <h3 className="text-[16px] md:text-[17px] font-semibold leading-snug text-slate-900">
            {item.title}
          </h3>

          <p className="mt-4 text-[15px] leading-7 text-slate-500">
            {item.desc}
          </p>
        </div>
      </div>

      {/* crisp border on hover */}
      <div className="pointer-events-none absolute inset-0 rounded-2xl ring-0 ring-blue-500/0 transition duration-300 group-hover:ring-2 group-hover:ring-blue-500/25" />
    </motion.article>
  );
}

export default function ServicesSection({
  title = "What Services do we provide",
  subtitle = "This title emphasizes the trust and reliability your company brings to the table. It positions your team as trusted advisors who provide valuable guidance.",
  items = defaultItems,
}) {
  return (
    <section className="bg-white py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto max-w-3xl text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="text-[34px] sm:text-[42px] md:text-[52px] font-semibold tracking-tight text-slate-900"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.6 }}
            transition={{
              duration: 0.7,
              ease: [0.22, 1, 0.36, 1],
              delay: 0.05,
            }}
            className="mt-4 text-[15px] sm:text-[16px] leading-7 text-slate-500"
          >
            {subtitle}
          </motion.p>
        </div>

        {/* Cards */}
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.25 }}
          className="mt-14 grid grid-cols-1 gap-6 sm:gap-7 md:mt-16 md:grid-cols-2 lg:grid-cols-3"
        >
          {items.map((item, idx) => (
            <ServiceCard key={`${item.key}-${idx}`} item={item} />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
