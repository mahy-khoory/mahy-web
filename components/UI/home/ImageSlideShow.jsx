"use client";
import Image from "next/image";
import { useState } from "react";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default function ImageSlideShow() {
    const items = [
        { title: "Close up", subTitle: "35mm", image: "/gallery/gallery-1.jpg" },
        { title: "Portrait Shot", subTitle: "50mm", image: "/gallery/gallery-2.jpg" },
        { title: "Camera Shot", subTitle: "30mm", image: "/gallery/gallery-3.jpg" },
        { title: "Narrative Shot", subTitle: "45mm", image: "/gallery/gallery-4.jpg" },
        { title: "Classic Shot", subTitle: "65mm", image: "/gallery/gallery-5.jpg" },
    ];

    const [index, setIndex] = useState(0);

    const getItem = (offset) =>
        items[(index + offset + items.length) % items.length];

    return (
        <div className="pt-20">
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
                <button
                    onClick={() =>
                        setIndex((i) => (i - 1 + items.length) % items.length)
                    }
                    className="h-12 w-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                    <HiChevronLeft className="text-2xl" />
                </button>
                <button
                    onClick={() => setIndex((i) => (i + 1) % items.length)}
                    className="h-12 w-12 rounded-full border flex items-center justify-center hover:bg-black hover:text-white transition"
                >
                    <HiChevronRight className="text-2xl" />
                </button>
            </div>
        </div>
    );
}