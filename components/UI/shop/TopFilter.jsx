"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

function TopFilter({ topFilters, locale }) {
    const items = [
        { label: topFilters[0].label, image: "/products/pump.png", text: topFilters[0].text },
        { label: topFilters[1].label, image: "/products/pump.png", text: topFilters[1].text },
        { label: topFilters[2].label, image: "/products/pump.png", text: topFilters[2].text },
        { label: topFilters[3].label, image: "/products/pump.png", text: topFilters[3].text },
        { label: topFilters[4].label, image: "/products/pump.png", text: topFilters[4].text },
        { label: topFilters[5].label, image: "/products/pump.png", text: topFilters[5].text },
        { label: topFilters[6].label, image: "/products/pump.png", text: topFilters[6].text },
        { label: topFilters[7].label, image: "/products/pump.png", text: topFilters[7].text },
        { label: topFilters[8].label, image: "/products/pump.png", text: topFilters[8].text }
    ];
    const [index, setIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);

    const getRTLScrollLeft = (el) => {
        if (el.scrollLeft < 0) return Math.abs(el.scrollLeft);
        return el.scrollWidth - el.clientWidth - el.scrollLeft;
    };

    const updateScroll = () => {
        const container = containerRef.current;
        if (!container) return;
        const maxScroll = container.scrollWidth - container.clientWidth;

        if (maxScroll <= 0) return;
        const scroll = locale === "ar" ? getRTLScrollLeft(container) : container.scrollLeft;

        const percentage = (scroll / maxScroll) * 100;
        if (percentage === 100 && locale === "ar") setScrollProgress(0);
        else setScrollProgress(percentage);
    };

    const scrollBy = (amount) => {
        containerRef.current.scrollBy({ left: amount, behavior: 'smooth' });
    };

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;
        container.addEventListener('scroll', updateScroll);
        updateScroll();
        return () => container.removeEventListener('scroll', updateScroll);
    }, []);

    return (
        <div className='max-w-7xl mx-auto mt-8 px-4'>
            {/* Horizontal scroll container */}
            <div className='flex gap-4 flex-nowrap overflow-x-scroll hide-scrollbar' ref={containerRef}>
                {items.map((item, i) => (
                    <button key={i} onClick={() => setIndex(i)}
                        className={`flex-none transition-all h-35 duration-500 w-50 bg-gray-50 rounded-xl px-5 py-4 
                            ${i === index && "w-70 border flex items-center gap-4"}`}>
                        <div>
                            <p className={`text-sm font-medium mb-2 ${i !== index && "h-9"}`}>{item.label}</p>
                            {i === index && <p className='text-gray-600 text-xs'>{item.text}</p>}
                        </div>
                        <div className="flex justify-center">
                            <div className='relative w-14 h-14'>
                                <Image src={item.image} alt={item.label} fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    </button>
                ))}
            </div>
            {/* Scroll progress and buttons */}
            <div className='flex mt-6 items-center gap-8 max-w-lg md:max-w-xl mx-auto px-4'>
                <div className='bg-gray-200 h-2 w-11/12 relative rounded-2xl overflow-hidden'>
                    <div className={`absolute bottom-0 top-0 ${locale === "ar" ? "right-0" : "left-0"} bottom-0 b-base rounded-2xl`} style={{ width: `${scrollProgress}%` }} />
                </div>
                <div className={`flex gap-1 ${locale === "ar" && "flex-row-reverse"} w-1/12 justify-center`}>
                    <button className='border border-gray-300 p-1 rounded-full' onClick={() => scrollBy(-200)}>
                        <ChevronLeft color='gray' />
                    </button>
                    <button className='border border-gray-300 p-1 rounded-full' onClick={() => scrollBy(200)}>
                        <ChevronRight color='gray' />
                    </button>
                </div>
            </div>
        </div>
    )
}

export default TopFilter;