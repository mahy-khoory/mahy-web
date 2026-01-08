"use client";

import { ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

function Qms() {
  const items = [
    {
      title: "ISO Certification",
      text: "All companies within MAHY Khoory Group operate under certified Quality Management Systems in accordance with internationally recognized ISO standards. The Group maintains certification to the latest applicable versions of ISO, ensuring alignment with current best practices and evolving regulatory and industry requirements.",
      icon: "/qms/qms1.png",
      image: "/qms/qms-1.gif",
    },
    {
      title: "External Audits & Compliance",
      text: "To ensure ongoing compliance and continuous improvement, MAHY Khoory Group is subject to periodic external audits performed by independent ISO auditors. These audits assess the effectiveness of our quality management systems, verify adherence to ISO requirements, and evaluate the consistency of implementation across all Group operations.",
      icon: "/qms/qms2.png",
      image: "/qms/qms-2.gif",
    },
    {
      title: "Internal Quality Management",
      text: "In addition to external certification and audits, the Group maintains dedicated internal quality functions and departmental controls across its businesses. These internal systems ensure that quality requirements are embedded into daily operations, from procurement and manufacturing to service delivery and customer support. Internal reviews, process monitoring, and performance evaluations are conducted regularly to ensure compliance, consistency, and operational excellence across all companies.",
      icon: "/qms/qms3.png",
      image: "/qms/qms-3.webp",
    },
    {
      title: "Continuous Improvement",
      text: "MAHY Khoory Group follows a culture of continuous improvement, using audit outcomes, performance data, customer feedback, and operational reviews to enhance processes, improve efficiency, and strengthen quality outcomes. By regularly reviewing and updating our quality management systems, the Group ensures that its operations remain robust, compliant, and aligned with international standards.",
      icon: "/qms/qms4.png",
      image: "/qms/qms-4.webp",
    },
    {
      title: "Commitment to Quality",
      text: "Our commitment to quality extends beyond certification. It is reflected in how we manage our operations, develop our people, engage with our partners, and serve our customers. Through disciplined quality management practices, MAHY Khoory Group continues to build trust, reliability, and long-term value across all sectors and markets in which it operates.",
      icon: "/qms/qms4.png",
      image: "/qms/qms-4.webp",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <section className="pb-15">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="grid grid-cols-1 lg:grid-cols-5 gap-20 max-w-7xl mx-auto py-10 px-5"
        >
          <div className="hidden lg:flex items-center h-full lg:col-span-2">
            <motion.div
              className="relative h-120 w-full"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0 }}
            >
              <Image
                src={items[currentIndex].image}
                alt={items[currentIndex].title}
                fill
                style={{ objectFit: "cover" }}
              />
            </motion.div>
          </div>
          <div className="flex flex-col h-full justify-center gap-6 lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="flex items-center gap-4"
            >
              <div className="relative h-12 w-12">
                <Image src={items[currentIndex].icon} alt="" fill />
              </div>
              <h2 className="font-semibold text-4xl">
                {items[currentIndex].title}
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5 }}
              className="text-gray-900 text-lg"
            >
              {items[currentIndex].text}
            </motion.p>
          </div>
        </motion.div>
      </AnimatePresence>
      <div className="max-w-xs mx-auto px-5 grid grid-cols-5 gap-4">
        {items.map((item, i) => (
          <button
            key={i}
            onClick={() => setCurrentIndex(i)}
            className={`h-8 rounded-2xl border-2 border-gray-900 
                        ${currentIndex === i && "bg-gray-900"}`}
          />
        ))}
      </div>
    </section>
  );
}

export default Qms;
