"use client"

import Image from 'next/image'
import { Quote } from 'lucide-react'
import { motion } from "framer-motion"

function CompanyDetailCards({
    heading1 = "About Us",
    text1 = ["Born of one man's vision, drive and enterprising spirit, Juma Al Majid Holding Group, a conglomerate in Dubai operates across numerous business categories - in the fields of Contracting, Commercial, Travel, Real Estate, and Investment in the UAE and across geographies."],
    items1 = [
        "A Past to Remember"
    ],
    heading2 = "Our History",
    text2 = ["Our story is interwoven with the rise of the nation of the UAE. Our transformative journey has made us the business enterprise we are today."],
    items2 = [
        "Founded in 1950",
        "Over 30 Companies",
        "Presence in 16 Countries",
        "More than 10,000 Employees"
    ]
}) {
    return (
        <motion.section
            className="max-w-7xl mx-auto py-5 md:py-20 px-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='md:col-span-3 bg-gray-50 p-8 md:p-15'>
                    <h2 className='t-base font-semibold uppercase'>{heading1}</h2>
                    {text1.map((paragraph, index) => (
                        <p key={index} className='mt-3 text-gray-700'>{paragraph}</p>
                    ))}
                </div>
                <div className='relative md:h-full md:col-span-2'>
                    <div className='relative z-10 p-8 md:p-10 flex flex-col h-full gap-3'>
                        {items1.map((item, index) => (
                            <p key={index} className='text-white font-medium'>{item}</p>
                        ))}
                    </div>
                    <div className='absolute inset-0'>
                        <Image src={"/gallery/gallery-2.jpg"} alt='Our History' fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className='absolute inset-0 bg-black/30' />
                </div>
            </div>
            <div className='mt-4 flex flex-col md:flex-row gap-4'>
                <div className='relative md:w-[35%]'>
                    <div className='relative z-10 p-8 md:p-12 space-y-3'>
                        {items2.map((item, index) => (
                            <p key={index} className='text-white font-medium'>{item}</p>
                        ))}
                    </div>
                    <div className='absolute inset-0'>
                        <Image src={"/gallery/gallery-1.jpg"} alt='Our History' fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className='absolute inset-0 bg-black/30' />
                </div>
                <div className='relative md:w-[45%] bg-gray-50 h-fit py-10 px-8 md:py-15 md:px-10'>
                    {heading2 && (
                        <h2 className='t-base font-semibold uppercase mb-3'>{heading2}</h2>
                    )}
                    {text2.map((paragraph, index) => (
                        <p key={index} className='text-gray-700'>{paragraph}</p>
                    ))}
                </div>
                <div className='md:w-[20%] bg-slate-500 p-8 h-fit flex justify-center'>
                    <Quote size={100} color='white' />
                </div>
            </div>
        </motion.section>
    )
}

export default CompanyDetailCards