"use client";
import Image from "next/image";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";
import { motion } from "framer-motion";

const containerVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" }, delay: 1 },
};

export default function ImageSlideShow({ data, locale }) {
    const items = [
        { title: data[0].title, subTitle: data[0].subTitle, image: "/gallery/gallery-1.jpg" },
        { title: data[1].title, subTitle: data[1].subTitle, image: "/gallery/gallery-2.jpg" },
        { title: data[2].title, subTitle: data[2].subTitle, image: "/gallery/gallery-3.jpg" },
        { title: data[3].title, subTitle: data[3].subTitle, image: "/gallery/gallery-4.jpg" },
        { title: data[4].title, subTitle: data[4].subTitle, image: "/gallery/gallery-5.jpg" },
    ];

    const [index, setIndex] = useState(0);

    const getItem = (offset) =>
        items[(index + offset + items.length) % items.length];

    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="pt-20">
            {/* SLIDER */}
            <div className="relative overflow-hidden max-w-5xl mx-auto h-90 md:h-120">
                <div className="absolute inset-0 flex items-center justify-center">
                    {[-1, 0, 1].map((pos) => {
                        const item = getItem(pos);
                        return (
                            <div key={item.image}
                                className={`absolute rounded-3xl will-change-transform transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                                    ${pos === 0
                                        ? "translate-x-0 scale-100 opacity-100 z-20"
                                        : pos === -1
                                            ? "-translate-x-65 scale-95 opacity-60 z-10"
                                            : "translate-x-65 scale-95 opacity-60 z-10"
                                    }`}>
                                <div className={`relative overflow-hidden rounded-3xl 
                                    ${pos === 0 ? "h-90 w-70 md:h-120 md:w-90" : "h-70 w-50 md:h-90 md:w-70"}`}>
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
            {/* TEXT */}
            <div className="text-center mt-10">
                <p className="font-semibold text-lg">{items[index].title}</p>
                <p className="text-sm text-gray-500">{items[index].subTitle}</p>
            </div>
            {/* CONTROLS */}
            <div className="flex justify-center gap-4 mt-4">
                {locale === "ar" ? (
                    <>
                        <button onClick={() => setIndex((i) => (i + 1) % items.length)}
                            className="h-12 w-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
                            <HiChevronRight className="text-2xl" />
                        </button>
                        <button onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
                            className="h-12 w-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
                            <HiChevronLeft className="text-2xl" />
                        </button>
                    </>
                ) : (
                    <>
                        <button onClick={() => setIndex((i) => (i - 1 + items.length) % items.length)}
                            className="h-12 w-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
                            <HiChevronLeft className="text-2xl" />
                        </button>
                        <button onClick={() => setIndex((i) => (i + 1) % items.length)}
                            className="h-12 w-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition">
                            <HiChevronRight className="text-2xl" />
                        </button>
                    </>
                )}
            </div >
        </motion.div >
    );
}