"use client"
import Image from 'next/image';
import React, { useState } from 'react'
import { HiChevronLeft, HiChevronRight } from 'react-icons/hi';

function ImageSlideShow() {
    const items = [
        { title: "Close up", subTitle: "35mm", image: "/gallery/gallery-1.jpg" },
        { title: "Potrait Shot", subTitle: "50mm", image: "/gallery/gallery-2.jpg" },
        { title: "Camera Shot", subTitle: "30mm", image: "/gallery/gallery-3.jpg" },
        { title: "Narrative Shot", subTitle: "45mm", image: "/gallery/gallery-4.jpg" },
        { title: "Classic Shot", subTitle: "65mm", image: "/gallery/gallery-5.jpg" },
    ];
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleIndexChange = (index) => {
        if (index === -1) setCurrentIndex(items.length - 1);
        else if (index === items.length) setCurrentIndex(0);
        else setCurrentIndex(index);
    }

    const currentItems = [
        items[currentIndex === 0 ? items.length - 1 : currentIndex - 1],
        items[currentIndex],
        items[currentIndex === items.length - 1 ? 0 : currentIndex + 1]
    ];

    return (
        <div>
            <div className='max-w-5xl mx-auto flex items-center justify-center gap-4'>
                {currentItems.map((item, i) => (
                    <div key={i} className={`relative overflow-hidden ${i !== 1 ? "rounded-3xl h-90 w-70" :
                        "rounded-4xl h-120 w-90 border-20 border-transparent bg-linear-to-r from-red-400/20 via-yellow-400/20 via-green-400/20 via-blue-400/20 to-purple-400/20 bg-clip-border"}`}>
                        <Image src={item.image} alt={item.title} className='rounded-3xl bg-blue-200' fill style={{ objectFit: "cover" }} />
                    </div>
                ))}
            </div>
            <div className='flex justify-center items-center flex-col gap-1 mt-8'>
                <p className='font-semibold text-lg'>{currentItems[1].title}</p>
                <p className='text-sm'>{currentItems[1].subTitle}</p>
            </div>

            <div className="relative mt-1 flex items-center justify-center gap-3">
                <button
                    onClick={() => handleIndexChange(currentIndex - 1)}
                    aria-label="Previous Image"
                    className={`group relative flex h-14 w-14 items-center justify-center rounded-full border border-black/20 backdrop-blur-md transition-all duration-300
                                 "hover:border-black hover:bg-black hover:scale-105`}>
                    <HiChevronLeft
                        className="text-3xl text-black transition-all duration-300 group-hover:text-white group-hover:-translate-x-0.5"
                    />
                </button>
                <button
                    onClick={() => handleIndexChange(currentIndex + 1)}
                    aria-label="Next Image"
                    className={`group relative flex h-14 w-14 items-center justify-center rounded-full border border-black/20 backdrop-blur-md transition-all duration-300
                            hover:border-black hover:bg-black hover:scale-105`}>
                    <HiChevronRight
                        className="text-3xl text-black transition-all duration-300 group-hover:text-white group-hover:translate-x-0.5"
                    />
                </button>
            </div>
        </div>
    )
}

export default ImageSlideShow