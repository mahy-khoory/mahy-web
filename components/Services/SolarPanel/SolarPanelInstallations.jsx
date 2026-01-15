"use client"

import { Check } from "lucide-react"
import Image from "next/image"
import PrimaryButton from "../../UI/PrimaryButton"
import { useEffect, useState } from "react";

function SolarPanelInstallations() {
    const topItems = [
        { title: "Accelerate Business Success", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit aecenas vel maximus lorem." },
        { title: "Simplify Business Complexities", text: "Lorem ipsum vestibulum finibus rutrum feugiat am imperdiet turpis quam." }
    ];
    const bottomItems = [
        { title: "Projects Completed", text: "Lorem ipsum dolor sit amet, adipiscing aecenas", count: "125k", percentage: 65 },
        { title: "Customer's Satisfaction", text: "Lorem ipsum dolor sit amet, adipiscing aecenas", count: "5k", percentage: 45 },
        { title: "Trusted Reviews", text: "Lorem ipsum dolor sit amet, adipiscing aecenas", count: "95%", percentage: 75 }
    ];

    const [circleSize, setCircleSize] = useState(100);
    useEffect(() => {
        const update = () => {
            setCircleSize(window.innerWidth >= 768 ? 160 : 100);
        };
        update();
        window.addEventListener("resize", update);
        return () => window.removeEventListener("resize", update);
    }, []);

    const ProgressCircle = ({ percent, stroke = 4, color = "#79c4e7" }) => {
        const radius = (circleSize - stroke) / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference * (1 - percent / 100);

        return (
            <svg width={circleSize} height={circleSize} className="-rotate-90">
                <circle
                    cx={circleSize / 2}
                    cy={circleSize / 2}
                    r={radius}
                    fill="none"
                    stroke={color}
                    strokeWidth={stroke}
                    strokeDasharray={circumference}
                    strokeDashoffset={offset}
                    strokeLinecap="round"
                />
            </svg>
        );
    };

    return (
        <section className="max-w-7xl mx-auto px-5 py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-14">
                <div className="relative h-80 md:h-160 w-full">
                    <Image src={"/gallery/gallery-1.jpg"} alt="Solar Panel Installations" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-2xl md:text-5xl font-semibold">Empowering Teams To Drive Measurable Success</p>
                    <div className="space-y-6 mt-7 md:mt-12">
                        {topItems.map((item, i) => (
                            <div key={i} className="flex gap-5">
                                <div className="p-2.5 rounded-full border h-fit">
                                    <Check size={16} />
                                </div>
                                <div>
                                    <p className="text-lg font-medium">{item.title}</p>
                                    <p className="mt-2 text-gray-600">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <PrimaryButton className={"w-fit mt-8 md:mt-10"} label="Get Started Now" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-12 md:mt-20 gap-10">
                {bottomItems.map((item, i) => (
                    <div key={i} className="flex items-center gap-4">
                        <div className="relative">
                            <ProgressCircle percent={item.percentage} />
                            <span className="absolute z-10 inset-0 flex justify-center items-center text-xl md:text-4xl t-base font-semibold">{item.count}</span>
                        </div>
                        <div>
                            <h3 className="text-xl font-semibold">{item.title}</h3>
                            <p className="mt-2 text-gray-700 text-sm">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
};

export default SolarPanelInstallations