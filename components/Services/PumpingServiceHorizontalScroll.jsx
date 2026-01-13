"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function PumpingServiceHorizontalScroll() {
    const items = [
        { title: "We listen", text: "Class aptent taciti socios torque conu nostram aliquet.", image: "/gallery/gallery-1.jpg" },
        { title: "Process consulting", text: "Class aptent taciti socios torque conu nostram aliquet.", image: "/gallery/gallery-2.jpg" },
        { title: "Information security", text: "Class aptent taciti socios torque conu nostram aliquet.", image: "/gallery/gallery-3.jpg" },
        { title: "Quality assurance", text: "Class aptent taciti socios torque conu nostram aliquet.", image: "/gallery/gallery-4.jpg" },
    ];

    return (
        <section>
            <Mobile items={items} />
            <Desktop items={items} />
        </section>
    )
};

const Mobile = ({ items }) => (
    <div className="px-5 py-13 bg-gray-50">
        <h2 className="font-medium uppercase t-base text-center">Steps to success</h2>
        <p className="font-semibold text-2xl mt-3 mb-10 max-w-xs mx-auto text-center">We follow a simple work process</p>
        <div className="space-y-10">
            {items.map((item, i) => (
                <div className="flex flex-col items-center" key={i}>
                    <div className="relative size-30 rounded-full overflow-hidden">
                        <Image src={item.image} alt={item.title} fill className="object-cover" />
                    </div>
                    <h3 className="t-base text-xl font-semibold mt-4">{item.title}</h3>
                    <p className="text-sm text-gray-600 mt-2 max-w-xs text-center">{item.text}</p>
                </div>
            ))}
        </div>
    </div>
);

const Desktop = ({ items }) => {
    const sectionRef = useRef(null);
    const imageRefs = useRef([]);
    const barRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Initial states
            imageRefs.current.forEach((img) =>
                gsap.set(img, { scale: 0, transformOrigin: "left center" })
            );
            gsap.set(barRef.current, { width: "0%" });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${items.length * 100}%`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });
            // Animate images one by one
            imageRefs.current.forEach((img, i) => {
                const progress = ((i + 1) / imageRefs.current.length) * 100;

                tl.to(img, { scale: 1, ease: "power3.out" })
                    .to(
                        barRef.current,
                        { width: `${progress}%`, ease: "none" },
                        "<" // sync with image scale
                    );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);
    return (
        <div ref={sectionRef} className="h-screen w-full bg-gray-50 py-10 md:py-20 hidden md:block">
            <div className="flex flex-col items-center h-full max-w-7xl mx-auto px-5">
                <h2 className="font-medium uppercase t-base pt-18">Steps to success</h2>
                <p className="font-semibold text-4xl max-w-md text-center mt-5 mb-20">We follow a simple work process</p>
                <div className="relative grid grid-cols-4 gap-20 w-full">
                    {items.map((item, i) => (
                        <div className="relative z-10" key={i}>
                            <span className="t-base uppercase">Step 0{i + 1}</span>
                            <div
                                ref={(el) => (imageRefs.current[i] = el)}
                                className="relative size-30 rounded-full overflow-hidden mt-5"
                            >
                                <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>

                            <h3 className="t-base text-xl font-semibold mt-6">{item.title}</h3>
                            <p className="text-sm text-gray-600 mt-3">{item.text}</p>
                        </div>
                    ))}
                    {/* Progress bar */}
                    <div className="absolute left-2 right-2 top-24 h-1 rounded-xl overflow-hidden">
                        <div className="absolute inset-0 bg-gray-200" />
                        <div
                            ref={barRef}
                            className="absolute top-0 left-0 bottom-0 b-base"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PumpingServiceHorizontalScroll;