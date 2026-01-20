"use client";

import { useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
import { Minus, Plus } from "lucide-react";
import PrimaryButton from "../UI/PrimaryButton";

gsap.registerPlugin(ScrollTrigger);

export default function StackedCardsSection() {
    const data = [
        {
            title: "Marketing & Strategy",
            text: "Lorem ipsum dolor sit amet consectetur. Donec quisque libero non auctor sem nec egestas. Libero duis sit purus lacus non scelerisque amet quis.",
            text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            cta: "Book a meeting",
            image: "/gallery/gallery-1.jpg",
            items: [
                {
                    title: "Campaign Strategy",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "SEO & Content Marketing",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "Paid Media (Social Ads)",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "Analytics",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                }
            ]
        },
        {
            title: "Brand Identity",
            text: "Lorem ipsum dolor sit amet consectetur. Donec quisque libero non auctor sem nec egestas. Libero duis sit purus lacus non scelerisque amet quis.",
            text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            cta: "Book a meeting",
            image: "/gallery/gallery-2.jpg",
            items: [
                {
                    title: "Campaign Strategy",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "SEO & Content Marketing",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "Paid Media (Social Ads)",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "Analytics",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                }
            ]
        },
        {
            title: "Content Creation",
            text: "Lorem ipsum dolor sit amet consectetur. Donec quisque libero non auctor sem nec egestas. Libero duis sit purus lacus non scelerisque amet quis.",
            text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            cta: "Book a meeting",
            image: "/gallery/gallery-3.jpg",
            items: [
                {
                    title: "Campaign Strategy",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "SEO & Content Marketing",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "Paid Media (Social Ads)",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "Analytics",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                }
            ]
        },
        {
            title: "Web & Digital Design",
            text: "Lorem ipsum dolor sit amet consectetur. Donec quisque libero non auctor sem nec egestas. Libero duis sit purus lacus non scelerisque amet quis.",
            text2: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
            cta: "Book a meeting",
            image: "/gallery/gallery-4.jpg",
            items: [
                {
                    title: "Campaign Strategy",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "SEO & Content Marketing",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "Paid Media (Social Ads)",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                },
                {
                    title: "Analytics",
                    text: "Lorem ipsum dolor sit amet consectetur. Donec quisque."
                }
            ]
        }
    ];

    return (
        <section>
            <Mobile data={data} />
            <Desktop data={data} />
        </section>
    );
};

const Mobile = ({ data }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:hidden px-4 my-4 max-w-7xl mx-auto">
        {data.map((dataItem, i) => (
            <Card key={i} dataItem={dataItem} i={i} />
        ))}
    </div>
)

const Desktop = ({ data }) => {
    const sectionRef = useRef(null);
    const cardsRef = useRef([]);

    useLayoutEffect(() => {
        const ctx = gsap.context(() => {
            const cards = cardsRef.current;

            gsap.set(cards, {
                transformOrigin: "center top",
                transformPerspective: 1400,
            });

            // Hide all except first
            cards.forEach((card, i) => {
                if (i !== 0) {
                    gsap.set(card, { opacity: 0, pointerEvents: "none" });
                }
            });

            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: sectionRef.current,
                    start: "top top",
                    end: `+=${cards.length * 120}%`,
                    scrub: true,
                    pin: true,
                    anticipatePin: 1,
                },
            });

            cards.forEach((card, i) => {
                if (i === 0) return;

                tl.set(card, {
                    opacity: 1,
                    pointerEvents: "auto",
                });

                tl.fromTo(
                    card,
                    {
                        yPercent: 120,
                        scale: 1.09,
                        rotateX: -25,
                    },
                    {
                        yPercent: 0,
                        scale: 1,
                        rotateX: 0,
                        ease: "none",
                    },
                    i
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={sectionRef} className="relative h-screen max-w-7xl mx-auto hidden lg:block">
            <div className="absolute inset-0 flex items-center justify-center">
                {data.map(
                    (dataItem, i) => (
                        <div key={i} ref={(el) => (cardsRef.current[i] = el)} style={{ zIndex: i }} className="absolute w-full h-165 rounded-2xl bg-black">
                            <Card dataItem={dataItem} i={i} />
                        </div>
                    )
                )}
            </div>
        </div>
    );
};

const Card = ({ dataItem, i }) => {
    const [openIndex, setOpenIndex] = useState(-1);
    const handleClick = (index) => {
        if (openIndex === index) setOpenIndex(-1);
        else setOpenIndex(index);
    }
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 w-full h-full relative text-white">
            <div className="px-8 py-14 lg:py-10 relative z-10">
                <div className="size-8 rounded-full border border-white flex justify-center items-center">
                    <span>{i + 1}</span>
                </div>
                <h2 className="text-2xl lg:text-4xl font-semibold mt-3">{dataItem.title}</h2>
                <p className="text-gray-100 mt-3 lg:mt-4 max-w-lg text-sm md:text-md">{dataItem.text}</p>
                <ul className="mt-8 space-y-5">
                    {dataItem.items.map((item, j) => (
                        <li key={j} className="border-b border-gray-500 pb-4">
                            <button onClick={() => handleClick(j)} className="uppercase font-semibold flex justify-between w-full">
                                {item.title}
                                <div className="p-0.5 border border-gray-400 rounded-full">
                                    {openIndex === j ?
                                        <Minus size={14} />
                                        :
                                        <Plus size={14} />
                                    }
                                </div>
                            </button>
                            {openIndex === j && (
                                <p className="mt-0.5 text-gray-300 text-sm">{item.text}</p>
                            )}
                        </li>
                    ))}
                </ul>
                <p className="mt-8 mb-6 text-gray-300 text-sm max-w-md">{dataItem.text2}</p>
                <PrimaryButton label={dataItem.cta} />
            </div>
            <div className="absolute inset-0 lg:relative lg:rounded-r-2xl overflow-hidden">
                <Image src={dataItem.image} alt={dataItem.title} fill style={{ objectFit: "cover" }} />
                <div className="absolute inset-0 bg-linear-to-r from-black to-transparent" />
            </div>
        </div>
    )
}