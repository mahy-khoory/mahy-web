"use client"

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function KitchenHorizontalItems() {
    const sectionRef = useRef(null);
    const trackRef = useRef(null);

    useLayoutEffect(() => {
        if (window.innerWidth < 768) return;
        const section = sectionRef.current;
        const track = trackRef.current;
        const cards = gsap.utils.toArray(".k-card");

        const scrollLength = track.scrollWidth;

        const tl = gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: "top top",
                end: `+=${scrollLength}`,
                scrub: 1,
                pin: true,
                anticipatePin: 1,
            },
        });

        tl.to(track, {
            x: () => -(track.scrollWidth - window.innerWidth / 2),
        });

        cards.forEach((card) => {
            const title = card.querySelector(".k-title");

            ScrollTrigger.create({
                trigger: card,
                containerAnimation: tl,
                start: "left center",
                end: "right center",
                onEnter: () => {
                    title.classList.remove("md:bg-gray-100");
                    title.classList.add("md:bg-[#79c4e7]", "md:text-white");
                },
                onLeaveBack: () => {
                    title.classList.remove("md:bg-[#79c4e7]", "md:text-white");
                    title.classList.add("md:bg-gray-100");
                },
            });
        });

        return () => ScrollTrigger.killAll();
    }, []);

    const data = [
        {
            title: "Research",
            items: [
                "Stakeholders interview",
                "Competitors analysis",
                "UX research",
                "In-depth interviews"
            ]
        },
        {
            title: "Strategy",
            items: [
                "Stakeholders interview",
                "Competitors analysis",
                "UX research",
                "In-depth interviews"
            ]
        },
        {
            title: "Prototyping/Concepting",
            items: [
                "Stakeholders interview",
                "Competitors analysis",
                "UX research",
                "In-depth interviews"
            ]
        },
        {
            title: "Design and iterate",
            items: [
                "Stakeholders interview",
                "Competitors analysis",
                "UX research",
                "In-depth interviews"
            ]
        },
        {
            title: "Development",
            items: [
                "Stakeholders interview",
                "Competitors analysis",
                "UX research",
                "In-depth interviews"
            ]
        }
    ]
    return (
        <section ref={sectionRef} className="max-w-7xl mx-auto px-5 py-8 md:py-20 md:h-screen">
            <div className="flex flex-wrap justify-between gap-5 items-start md:pt-15">
                <h2 className="text-3xl md:text-6xl font-semibold max-w-4xl">Our approach to perfect outcomes</h2>
                <div className="flex gap-2 items-center">
                    <div className="size-4 rounded-full b-base" />
                    <span className="uppercase font-semibold md:text-xl text-gray-700">Process</span>
                </div>
            </div>
            <div ref={trackRef} className="flex flex-col md:flex-row gap-10 md:gap-3 md:flex-nowrap mt-12 md:mt-30">
                {data.map((dataItem, i) => (
                    <Card key={i} dataItem={dataItem} />
                ))}
            </div>
        </section>
    )
};

const Card = ({ dataItem }) => (
    <div className="k-card w-full md:w-xl flex-none">
        <div className="grid grid-cols-6 gap-2">
            <div className="col-span-4">
                <h2 className="k-title py-4 px-4 text-white md:text-black bg-[#79c4e7] md:bg-gray-100 uppercase font-medium transition-colors">
                    {dataItem.title}
                </h2>
                <ul className="mt-7 px-4 space-y-3">
                    {dataItem.items.map((item, i) => (
                        <li key={i}>{item}</li>
                    ))}
                </ul>
            </div>
            <div className="col-span-2">
                <div className="py-4 px-4 bg-gray-100 uppercase text-center font-medium">Meeting</div>
            </div>
        </div>
    </div>
)

export default KitchenHorizontalItems