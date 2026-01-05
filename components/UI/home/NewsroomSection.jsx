import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function NewsroomSection({ articles, locale }) {
    return (
        <section className='max-w-7xl mx-auto pt-15 lg:pt-35 px-5'>
            <div className='flex flex-wrap gap-3 justify-between items-center mb-20'>
                <h2 className='text-heading text-3xl md:text-5xl font-semibold text-black tracking-tight uppercase'>Newsroom</h2>
                <Link className='flex items-center gap-3 group' href={"/news"}>
                    <p>Visit the newsroom</p>
                    <div className='bg-[#79c4e7] p-2 rounded-full group-hover:bg-[#2da5dc] transition-colors duration-500'>
                        <ChevronRight size={20} color='white' />
                    </div>
                </Link>
            </div>
            <div className='border-t border-gray-200 grid grid-cols-1 lg:grid-cols-2'>
                <Link href={`/news/${articles[0].id}`}>
                    <div className='pt-5 pr-5 border-r border-gray-200'>
                        <div className='relative h-100'>
                            <Image src={articles[0].image} alt={articles[0].heading} fill style={{ objectFit: "cover" }} />
                        </div>
                        <p className='font-semibold mt-5 pr-2'>{articles[0].heading}</p>
                        <p className='mt-6 text-gray-600'>{articles[0].date.toLocaleString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                    </div>
                </Link>
                <div className='pl-5'>
                    {Array.from({ length: 3 }).map((_, i) => (
                        <Link href={`/news/${articles[i + 1].id}`} key={i}>
                            <div className='grid grid-cols-1 md:grid-cols-3 py-5 border-b border-gray-200' >
                                <div className='md:col-span-2 flex flex-col justify-between'>
                                    <p>{articles[i + 1].heading}</p>
                                    <p>{articles[i + 1].date.toLocaleString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}</p>
                                </div>
                                <div className='relative h-30'>
                                    <Image src={articles[i + 1].image} alt={articles[i + 1].heading} fill style={{ objectFit: "cover" }} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default NewsroomSection