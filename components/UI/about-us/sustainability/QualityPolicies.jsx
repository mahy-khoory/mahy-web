import Image from 'next/image'
import React from 'react'
import AnimatedLines from '../../AnimatedLines'

function QualityPolicies({
    heading,
    text,
    items,
    endText
}) {
    return (
        <div className='relative'>
            <div className='relative z-10 max-w-6xl mx-auto px-5 pt-18 pb-12 lg:py-25'>
                <AnimatedLines bg='bg-white' />
                <h2 className='text-center text-3xl text-white font-semibold pt-1'>{heading}</h2>
                <p className='mt-5 text-gray-100 text-center text-medium'>{text}</p>
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 mt-12 lg:mt-18'>
                    {items.map((item, i) => (
                        <div key={i} className='flex gap-4 border-t border-white/40 pt-5'>
                            <h3 className='w-1/2 text-gray-50 lg:text-lg font-semibold'>{item.title}</h3>
                            <p className='w-1/2 text-gray-200'>{item.text}</p>
                        </div>
                    ))}
                </div>
                <p className='mt-10 text-center max-w-4xl mx-auto text-gray-100 text-medium'>{endText}</p>
            </div>
            <Image src={"/gallery/gallery-4.jpg"} alt='Quality Policies' fill style={{ objectFit: "cover" }} />
            <div className='absolute inset-0 bg-black/20' />
        </div>
    )
}

export default QualityPolicies