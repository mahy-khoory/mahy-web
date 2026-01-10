"use client"

import React from 'react'
import PrimaryButton from '../../PrimaryButton'
import Image from 'next/image'
import { Quote } from 'lucide-react'
import { motion } from "framer-motion"

function CompanyDetailCards() {
    return (
        <motion.section
            className="max-w-7xl mx-auto py-5 md:py-20 px-5"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 100, y: 0 }}
            transition={{ duration: 0.4, ease: "easeOut", delay: 0.3 }}
            viewport={{ once: true }}>
            <div className='grid grid-cols-1 md:grid-cols-5 gap-4'>
                <div className='md:col-span-3 bg-gray-50 p-8 md:p-15'>
                    <h2 className='text-gray-500 uppercase'>About Us</h2>
                    <p className='font-semibold mt-4 t-base text-2xl'>A Commitment to Sustainable Success</p>
                    <p className='mt-5 text-gray-700 max-w-lg'>Born of one man's vision, drive and enterprising spirit, Juma Al Majid Holding Group, a conglomerate in Dubai operates across numerous business categories - in the fields of Contracting, Commercial, Travel, Real Estate, and Investment in the UAE and across geographies.</p>
                    <PrimaryButton label='Learn More' className={"mt-8"} />
                </div>
                <div className='relative md:h-full md:col-span-2'>
                    <div className='relative z-10 p-8 md:p-10 flex flex-col justify-center h-full'>
                        <h2 className='text-gray-300 uppercase'>Our History</h2>
                        <p className='font-semibold mt-3 text-white text-2xl'>A Past to Remember</p>
                        <p className='mt-4 text-gray-100 max-w-lg'>Our story is interwoven with the rise of the nation of the UAE. Our transformative journey has made us the business enterprise we are today.</p>
                        <PrimaryButton label='Learn More' className={"mt-6 w-fit"} />
                    </div>
                    <div className='absolute inset-0'>
                        <Image src={"/gallery/gallery-2.jpg"} alt='Our History' fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className='absolute inset-0 bg-black/30' />
                </div>
            </div>
            <div className='mt-4 flex flex-col md:flex-row gap-4'>
                <div className='relative md:w-[45%]'>
                    <div className='relative z-10 p-8 md:p-12'>
                        <h2 className='text-gray-300 uppercase'>Our History</h2>
                        <p className='font-semibold mt-3 text-white text-2xl'>A Past to Remember</p>
                        <p className='mt-4 text-gray-100 max-w-lg'>Our story is interwoven with the rise of the nation of the UAE. Our transformative journey has made us the business enterprise we are today.</p>
                        <PrimaryButton label='Learn More' className={"mt-6"} />
                    </div>
                    <div className='absolute inset-0'>
                        <Image src={"/gallery/gallery-1.jpg"} alt='Our History' fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className='absolute inset-0 bg-black/30' />
                </div>
                <div className='relative md:w-[35%] bg-gray-50 h-fit py-10 px-8 md:py-15 md:px-10'>
                    <p className='text-gray-700'>"Started in the year 1950, the Juma Al Majid Holding Group has grown to be a multi-faceted business conglomerate that extends beyond the shores of the UAE."</p>
                </div>
                <div className='md:w-[20%] bg-[#aed4e5] p-8 h-fit flex justify-center'>
                    <Quote size={100} color='white' />
                </div>
            </div>
        </motion.section>
    )
}

export default CompanyDetailCards