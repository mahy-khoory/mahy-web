"use client"
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import { FaArrowRightLong } from 'react-icons/fa6';

const tabs = ["Companies", "Industeries"];
const companies = [
    { label: "Trading", image: "/gallery/gallery-1.jpg" },
    { label: "Manufacturing", image: "/gallery/gallery-2.jpg" },
    { label: "Automobile", image: "/gallery/gallery-3.jpg" },
    { label: "Waste Management", image: "/gallery/gallery-4.jpg" },
    { label: "Logistics", image: "/gallery/gallery-5.jpg" },
    { label: "Energy Transport", image: "/gallery/gallery-8.jpeg" },
];

function CompaniesList() {
    return (
        <section className="max-w-7xl mx-auto pt-20">
            <TabGroup>
                <div className="flex justify-between gap-5">
                    <h2 className='uppercase text-4xl font-semibold text-gray-700'>Businesses</h2>
                    <div className='border-b border-gray-300 '>
                        <TabList className={"flex items-center gap-5"}>
                            {tabs.map((tab, i) => (
                                <Tab key={i}
                                    className={"border-b-4 py-3 px-7 border-transparent focus:outline-0 text-gray-400 data-selected:border-[#79c4e7] data-selected:text-[#79c4e7] transition-all duration-300"}>
                                    {tab}
                                </Tab>
                            ))}
                        </TabList>
                    </div>
                </div>
                <TabPanels>
                    <TabPanel className={"grid md:grid-cols-2 gap-3 mt-10"}>
                        <div className='grid grid-cols-2 gap-3'>
                            {companies.map((company, i) => (
                                <Card item={company} />
                            ))}
                        </div>
                        <div className='relative'>
                            <Image src={"/gallery/gallery-9.jpeg"} alt='Companies' fill style={{ objectFit: "cover" }} />
                        </div>
                    </TabPanel>
                    <TabPanel className={"grid md:grid-cols-2 lg:grid-cols-3 gap-20 mt-20"}>

                    </TabPanel>
                </TabPanels>
            </TabGroup>
        </section>
    )
}

const Card = ({ item }) => (
    <div className="relative h-45 group overflow-hidden">
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
                <div className='h-px w-full bg-white mt-3 -translate-x-80 group-hover:translate-x-0 transition-all duration-500' />
            </div>
        </div>
    </div >
)

export default CompaniesList