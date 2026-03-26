import Image from 'next/image'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'
import ScrollToTop from '../ScrollToTop'

function IndustryCard({ item }) {
    return (
        <ScrollToTop href={item.href} className="relative h-60 md:h-45 group overflow-hidden">
            <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-[1.3] group-hover:blur-xs">
                <Image src={item.image} alt={item.label} fill style={{ objectFit: "cover" }} />
            </div>
            <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 to-transparent">
                <div className='absolute bottom-5 left-0 right-0'>
                    <div className='flex justify-between gap-3 px-7'>
                        <p className='text-gray-50'>{item.label}</p>
                        <FaArrowRightLong size={20} color='white'
                            className='translate-x-40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500' />
                    </div>
                    <div className='h-px w-full bg-white mt-3 -translate-x-120 group-hover:translate-x-0 transition-all duration-500' />
                </div>
            </div>
        </ScrollToTop>
    )
}

export default IndustryCard