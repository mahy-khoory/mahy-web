"use client"

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import PrimaryButton from "../PrimaryButton";
import { motion } from "framer-motion";

const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: i => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.15, duration: 1, ease: "easeOut" }
    }),
};

function ScrollSectionWithImages() {
    const items = [
        {
            title: "The power of DXC",
            title2: "people and technology.",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam optio autem quis quia assumenda necessitatibus tenetur commodi rem ipsa, accusamus fugit officia doloremque vero architecto numquam vitae temporibus aliquid est.",
            cta: "Join our team",
            image: "/gallery/gallery-1.jpg"
        },
        {
            title: "The power of DXC",
            title2: "people and technology.",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam optio autem quis quia assumenda necessitatibus tenetur commodi rem ipsa, accusamus fugit officia doloremque vero architecto numquam vitae temporibus aliquid est.",
            cta: "Join our team",
            image: "/gallery/gallery-2.jpg"
        },
        {
            title: "The power of DXC",
            title2: "people and technology.",
            text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laboriosam optio autem quis quia assumenda necessitatibus tenetur commodi rem ipsa, accusamus fugit officia doloremque vero architecto numquam vitae temporibus aliquid est.",
            cta: "Join our team",
            image: "/gallery/gallery-3.jpg"
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    const scrollContainerRef = useRef(null);
    const itemRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setCurrentIndex(index);
                    }
                });
            },
            { root: scrollContainerRef.current, threshold: 0.5 }
        );
        itemRefs.current.forEach(ref => ref && observer.observe(ref));
        return () => {
            itemRefs.current.forEach(ref => ref && observer.unobserve(ref));
        };
    }, []);

    return (
        <section className="max-w-7xl mx-auto my-30">
            <div className='md:grid grid-cols-5 md:h-[80vh]'>
                <div className="col-span-3">
                    <div className="md:h-full md:overflow-y-scroll" ref={scrollContainerRef}>
                        {items.map((item, i) => (
                            <motion.div
                                variants={itemVariants}
                                initial="hidden"
                                whileInView="visible"
                                custom={i}
                                viewport={{ once: false }}
                                className="md:h-full flex items-center"
                                key={i}
                                ref={el => itemRefs.current[i] = el}
                                data-index={i}>
                                <div className="md:h-40">
                                    <div className="px-5 md:px-0 pt-20 md:pt-0">
                                        <p className="text-3xl md:text-5xl font-bold">{item.title}</p>
                                        <p className="text-3xl md:text-5xl font-bold t-base mt-1 md:mt-3">{item.title2}</p>
                                        <p className="mt-8 md:mt-15">{item.text}</p>
                                        <PrimaryButton label={item.cta} className={"mt-8 md:mt-10"} />
                                    </div>
                                    <div className="relative h-80 w-full md:hidden mt-15">
                                        <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
                <div className='col-span-2 hidden md:block'>
                    <div className='flex flex-col gap-4 h-full'>
                        {items.map((item, i) => (
                            <div key={i} className={`${i === currentIndex ? "h-8/10 z-10" : "h-1/10"} 
                                relative w-full bg-blue-100 rounded-2xl overflow-hidden transition-all duration-800`}>
                                {i === currentIndex && (
                                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ScrollSectionWithImages;