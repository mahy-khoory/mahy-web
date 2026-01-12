"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import PrimaryButton from "../UI/PrimaryButton";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PumpingSystemServicesScrollSection() {
    const sectionRef = useRef(null);
    const leftRef = useRef(null);
    const rightRef = useRef(null);
    const items = [
        { title: "Custom Machinery Design", text: "Innovative design and development of custom machinery, tailored to meet unique manufacturing needs.", image: "/gallery/gallery-1.jpg" },
        { title: "System Integration", text: "Connecting disparate systems for streamlined operations, enhanced collaboration, and improved productivity.", image: "/gallery/gallery-1.jpg" },
        { title: "Equipment Modernization", text: "Upgrading existing equipment for improved performance, reliability, and compatibility with emerging technologies.", image: "/gallery/gallery-1.jpg" },
    ];

    return (
        <section className="max-w-7xl mx-auto px-5 py-10 md:py-20">
            <div className="rounded-2xl overflow-hidden grid grid-cols-1 md:grid-cols-2 h-200">
                <div className="overflow-scroll bg-gray-100 px-8 h-200">
                    {items.map((item, i) => (
                        <div key={i} className="flex flex-col justify-center h-full">
                            <h2 className="font-semibold text-4xl tracking-tighter">{item.title}</h2>
                            <p className="text-gray-700 mt-5 max-w-md">{item.text}</p>
                            <PrimaryButton className={"mt-7 w-fit"} label="Learn More" />
                        </div>
                    ))}
                </div>
                <div className="b-base">
                    {items.map((item, i) => (
                        <div key={i} className="flex flex-col justify-center items-center h-full">
                            <div className=" h-3/4 w-3/4 relative">
                                <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default PumpingSystemServicesScrollSection