"use client"
import { ChevronLeft, ChevronRight } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

function TopFilter() {
    const items = [
        { label: "Pumping Solutions", image: "/products/pump.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt ab" },
        { label: "Turnkey Projects", image: "/products/pump.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt ab" },
        { label: "System Engineering & Design", image: "/products/pump.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt ab" },
        { label: "Energy Efficient Solutions", image: "/products/pump.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt ab" },
        { label: "Digital Pump Solution", image: "/products/pump.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt ab" },
        { label: "Interior & Kitchen Solutions", image: "/products/pump.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt ab" },
        { label: "Fit-Out & Joinery Solutions", image: "/products/pump.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt ab" },
        { label: "Industry-Specific Packages", image: "/products/pump.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt ab" },
        { label: "Emergency & Critical Applications", image: "/products/pump.png", text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam nesciunt ab" }
    ];
    const [index, setIndex] = useState(0);
    const [scrollProgress, setScrollProgress] = useState(0);
    const containerRef = useRef(null);

    const updateScroll = () => {
        const container = containerRef.current;
        if (!container) return;

        const scrollLeft = container.scrollLeft;
        const maxScroll = container.scrollWidth - container.clientWidth;
        const percentage = (scrollLeft / maxScroll) * 100;
        setScrollProgress(percentage);
    };

    const scrollBy = (amount) => {
        containerRef.current.scrollBy({
            left: amount,
            behavior: 'smooth'
        });
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
                    <button
                        onClick={() => setIndex(i)}
                        className={`flex-none transition-all h-35 duration-500 w-50 bg-gray-50 rounded-xl px-5 py-4 ${i === index && "w-70 border flex items-center gap-4"}`}
                        key={i}
                    >
                        <div>
                            <p className='text-sm font-medium mb-2'>{item.label}</p>
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
                    <div className='absolute left-0 top-0 bottom-0 b-base rounded-2xl' style={{ width: `${scrollProgress}%` }} />
                </div>
                <div className='flex gap-1 w-1/12 justify-center'>
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