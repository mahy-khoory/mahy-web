"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import IndustryCard from './IndustryCard';
import { companies } from '@/constants/companies';
import CompanyCard from './CompanyCard';
import ScrollToTop from '../ScrollToTop';

const industeries = [
    { label: "Trading", href: "/companies/trading", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1772869180/trading-mahy_wdglvr.jpg" },
    { label: "Manufacturing", href: "/companies/manufacturing", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210649/factory-workers-operating-machinery-on-production-2026-01-09-10-18-36-utc_tsa0tc.jpg" },
    { label: "Automobile", href: "/companies/automotive", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210379/two-businessmen-are-working-together-in-the-car-sh-2026-01-08-23-56-20-utc_tjv68e.jpg" },
    { label: "Waste Management", href: "/companies/waste-management", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210761/joyful-indian-worker-in-protective-vest-and-gloves-2026-01-06-00-11-34-utc_m8310z.jpg" },
    { label: "Logistics", href: "/companies/transportation-logistics", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210613/interior-warehouse-storage-and-cardboard-boxes-aga-2026-01-09-01-03-54-utc_dzzlr6.jpg" },
    { label: "Energy Management", href: "/companies/energy-sustainability-consulting", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210530/businesswoman-with-solar-panels-model-having-prese-2026-01-09-09-42-23-utc_l5vlii.jpg" },
];
const moreIndusteries = ["Hospitality", "Engineering"];

function CompaniesList({ darkBg = false, industeriesFirst = true }) {

    const tabs = [industeriesFirst ? "Industries" : "Companies", industeriesFirst ? "Companies" : "Industries"];

    // const [hoveredCards, setHoveredCards] = useState(0);

    // const handleCardHoverStart = useCallback(() => {
    //     setHoveredCards((count) => count + 1);
    // }, []);

    // const handleCardHoverEnd = useCallback(() => {
    //     setHoveredCards((count) => Math.max(0, count - 1));
    // }, []);

    // const shouldPlayVideos = hoveredCards > 0;

    return (
        <section className={`py-10 md:py-20 ${darkBg && "bg-slate-900"}`}>
            <div className='max-w-7xl mx-auto px-5'>
                <TabGroup>
                    <div className="flex justify-between flex-wrap gap-5">
                        <h2 className={`uppercase text-3xl md:text-4xl font-semibold ${darkBg ? "text-gray-100" : "text-gray-700"}`}>Businesses</h2>
                        <div className=' '>
                            <TabList className={"flex items-center gap-5"}>
                                {tabs.map((tab, i) => (
                                    <Tab key={i}
                                        className={`border-b-4 py-3 px-7 border-transparent focus:outline-0 ${darkBg ? "text-gray-200" : "text-gray-400"} data-selected:border-[#2c3f6e] data-selected:text-[#2c3f6e] transition-all duration-300`}>
                                        {tab}
                                    </Tab>
                                ))}
                            </TabList>
                        </div>
                    </div>
                    <TabPanels className="mt-7 md:mt-10">
                        <AnimatePresence mode="wait">
                            {/* <TabPanel key="companies" as={motion.div}
                            initial={{ y: 10, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            viewport={{ once: false, margin: "-100px" }}
                            transition={{ duration: 0.8, ease: "easeOut" }}
                        >
                            <Companies companies={companies} />
                        </TabPanel> */}
                            {industeriesFirst ? (
                                <>
                                    <IndustriesTab key="industries" industeries={industeries} moreIndusteries={moreIndusteries} />
                                    <CompaniesTab key="companies" companies={companies} />
                                </>
                            ) : (
                                <>
                                    <CompaniesTab key="companies" companies={companies} />
                                    <IndustriesTab key="industries" industeries={industeries} moreIndusteries={moreIndusteries} />
                                </>
                            )}
                        </AnimatePresence>
                    </TabPanels>
                </TabGroup>
            </div>
        </section>
    )
};

const CompaniesTab = ({ companies }) => (
    <TabPanel
        key="companies"
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4"
        as={motion.div}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}>
        {companies.map((company, i) => (
            <CompanyCard
                key={i}
                index={i}
                item={company}
            // shouldPlay={shouldPlayVideos}
            // onHoverStart={handleCardHoverStart}
            // onHoverEnd={handleCardHoverEnd}
            />
        ))}
    </TabPanel>
);

const IndustriesTab = ({ industeries, moreIndusteries }) => (
    <TabPanel
        key="industries"
        className="grid grid-cols-1 lg:grid-cols-2 gap-3"
        as={motion.div}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: false, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "easeOut" }}
    >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {industeries.map((industry, i) => (
                <IndustryCard key={i} item={industry} />
            ))}
        </div>
        <div className="relative h-120 md:h-full w-full">
            <Image src="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1772869180/trading-mahy_wdglvr.jpg" style={{ objectFit: "cover" }} alt="Companies" fill />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            <div className='absolute bottom-7 left-7 text-gray-200'>
                <div className='flex flex-wrap gap-3 mb-4'>
                    {moreIndusteries.map((item, i) => (
                        <Link href={"/"} key={i} className='bg-black/40 py-2 px-4 rounded-xl text-sm'>{item}</Link>
                    ))}
                </div>
                <ScrollToTop href={"/companies/all"} className='border-b border-gray-200 pb-1'>Explore More</ScrollToTop>
            </div>
        </div>
    </TabPanel>
);


const Companies = ({ companies }) => {
    const [currentIndex, setCurrentIndex] = useState(false);
    return (
        <div className='relative'>
            <div className='relative z-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5'>
                {companies.map((company, i) => (
                    <Link key={i} href={`/companies/${i + 1}`}>
                        <div onMouseEnter={() => setCurrentIndex(i)} onTouchEnd={() => setCurrentIndex(i)} onMouseLeave={() => setCurrentIndex(false)}
                            className={`border-px border-gray-300 flex items-end h-40 p-2 ${currentIndex === i ? "bg-black/30" : "bg-black/10"}
                        duration-500 transition-all relative overflow-hidden`}>
                            <div className='relative z-10'>
                                <p className='text-white text-sm'>{company.label}</p>
                            </div>
                            <AnimatePresence mode="wait">
                                {currentIndex === false && (
                                    <motion.div key={currentIndex}
                                        initial={{ scale: 1, opacity: 0 }}
                                        animate={{ scale: 1.1, opacity: 1 }}
                                        exit={{ scale: 1, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: "easeOut" }}
                                        className='absolute inset-0'>
                                        <Image src={company.image} alt={company.label} fill style={{ objectFit: "cover" }} />
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </Link>
                ))}
            </div>
            <div className="absolute inset-0 overflow-hidden">
                <AnimatePresence mode="wait">
                    {currentIndex && (
                        <motion.video
                            key={companies[currentIndex].video}
                            muted
                            loop
                            autoPlay
                            playsInline
                            preload="metadata"
                            className="w-full h-full object-cover"
                            initial={{ scale: 1, opacity: 1 }}
                            animate={{ scale: 1.1, opacity: 1 }}
                            exit={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        >
                            <source
                                src={companies[currentIndex].video}
                                type="video/mp4"
                            />
                        </motion.video>
                    )}
                </AnimatePresence>
            </div>
        </div>
    )
};

export default CompaniesList;

