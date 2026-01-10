"use client"

import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function CompanyDetailMenu() {
    const menuItems = [
        {
            label: "Introduction", text: [
                "1Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita?",
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita"
            ]
        },
        {
            label: "Item 2", text: [
                "2Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita?",
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita"
            ]
        },
        {
            label: "Item 3", text: [
                "3Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita?",
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita"
            ]
        },
        {
            label: "Item 4", text: [
                "4Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita?",
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita"
            ]
        },
        {
            label: "Item 5", text: [
                "5Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita?",
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita"
            ]
        },
        {
            label: "Item 6", text: [
                "6Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita?",
                "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita? Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit aspernatur voluptas quaerat ad quas cupiditate totam mollitia cumque, molestias illum odio, ratione animi atque nihil in aut iure labore expedita"
            ]
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        <section className="bg-slate-900 py-10 md:py-20 px-5">
            <div className="grid grid-cols-1 md:grid-cols-8 gap-8 md:gap-12 max-w-7xl mx-auto">
                <div className="flex h-full md:flex-col gap-x-2 gap-y-3 md:gap-4 flex-wrap md:col-span-2">
                    {menuItems.map((item, i) => (
                        <button key={i} onClick={() => setCurrentIndex(i)}
                            className={`${currentIndex === i ? "bg-slate-700" : "bg-slate-800"} transition-colors duration-500 py-3 md:py-4 px-8 text-white rounded-2xl font-medium uppercase`}>
                            {item.label}</button>
                    ))}
                </div>
                <div className="md:col-span-6">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                        viewport={{ once: true, amount: 0.4 }}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentIndex}
                                className="space-y-5 text-gray-200"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: 20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                            >
                                {menuItems[currentIndex].text.map((item, i) => (
                                    <p key={i}>{item}</p>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}

export default CompanyDetailMenu