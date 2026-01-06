import Image from 'next/image'
import React from 'react'
import AnimatedLines from '../../AnimatedLines'

function QualityPolicies() {
    const items = [
        { title: "Customer Focus", text: "Gain precise insights into diverse customer needs and exceed customer expectations by delivering tailored products and services, thus creating value while bringing simplicity to customers.", },
        { title: "Prevention First", text: "Improve our awareness of doing it right the first time and capability of doing it right all the time; respect rules, stick to the bottom line, strictly control risks, and build a standardized and intelligent quality prevention system." },
        { title: "Continuous Improvement", text: "Stay solution-oriented and address quality management issues by technical means; adhere to the dual closed-loop management of quality problems to build competitive strength in high quality." },
        { title: "Collaborative Development", text: "Make continuous innovation to enhance quality and efficiency; build a high-quality and robust industry chain based on trust and collaboration and improve brand image for high-quality and sustainable development." },
    ]
    return (
        <div className='relative mt-20 lg:mt-30'>
            <div className='relative z-10 max-w-6xl mx-auto px-5 pt-18 pb-12 lg:py-25'>
                <AnimatedLines bg='bg-white' />
                <h2 className='text-center text-3xl text-white font-semibold pt-1'>Quality Policies</h2>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-12 lg:mt-18'>
                    {items.map((item, i) => (
                        <div key={i} className='flex gap-4 border-t border-white/40 pt-5'>
                            <h3 className='w-120 text-gray-50 text-lg font-semibold'>{item.title}</h3>
                            <p className='text-gray-200'>{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Image src={"/gallery/gallery-4.jpg"} alt='Quality Policies' fill style={{ objectFit: "cover" }} />
            <div className='absolute inset-0 bg-black/20' />
        </div>
    )
}

export default QualityPolicies