"use client"

import Image from 'next/image';
import { useState } from 'react'
import AnimatedLines from '../../AnimatedLines';

function CorporateCulture() {
    const items = [
        {
            title: "Core Values",
            description: [
                "Respecting each other and being faithful to the ZTE Cause",
                "Serving with dedication and being committed to our customers",
                "Endeavoring with creativity to establish a famous ZTE brand",
                "Operating with scientific management to increase corporate performance"
            ]
        },
        {
            title: "Culture Spirit",
            description: [
                "Customer Success",
                "Value Contribution",
                "Pursuit of Excellence",
                "Simplicity Prevails"
            ]
        },
        {
            title: "Behavior Guidelines",
            description: [
                "Cooperative Take the initiative",
                "Responsible Dare to assume responsibility",
                "Professional Win first place",
                "Pragmatic Tell complete truth"
            ]
        }
    ];
    const [currentIndex, setCurrentIndex] = useState(0);
    return (
        <section className='max-w-6xl mx-auto mt-20 lg:mt-30'>
            <AnimatedLines />
            <h2 className='font-semibold text-3xl pt-1 text-center'>Corporate Culture</h2>
            <div className='lg:h-100 relative lg:rounded-3xl overflow-hidden mt-12'>
                <div className='relative z-10 grid grid-cols-1 lg:grid-cols-3 h-full'>
                    {items.map((item, i) => (
                        <div key={i} onMouseEnter={() => setCurrentIndex(i)} className="relative px-10 py-15 lg:pb-0 overflow-hidden border-b lg:border-b-0 border-white/40">
                            {/* Background Blur */}
                            <div className={`absolute inset-0 z-0 ${currentIndex === i && "lg:backdrop-blur-xs"} transition-all duration-300 bg-black/20 pointer-events-none`} />
                            {/* TITLE */}
                            <div className={`relative z-10 flex flex-col items-center transition-all duration-300
                                    ${currentIndex === i ? "lg:translate-y-5" : "lg:translate-y-25"}`}>
                                <h3 className="text-white text-xl font-medium">{item.title}</h3>
                                <div className="mt-2 w-16 h-0.5 bg-white" />
                            </div>
                            {/* DESCRIPTION */}
                            <div className={`relative z-10 pt-10 space-y-2 transition-all duration-300
                                    ${currentIndex === i ? "opacity-100 translate-y-0" : "lg:opacity-0 lg:translate-y-4"}`}>
                                {item.description.map((text, i) => (
                                    <p key={i} className="text-sm text-gray-100">
                                        {text}
                                    </p>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='absolute inset-0'>
                    <Image src={"/gallery/gallery-4.jpg"} alt='Corporate Culture' fill style={{ objectFit: "cover" }} />
                </div>
            </div>
        </section>
    )
}

export default CorporateCulture