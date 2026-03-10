"use client"

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from "framer-motion";
import { useCallback, useState } from "react";
import IndustryCard from './IndustryCard';
import { companies } from '@/constants/companies';
import CompanyCard from './CompanyCard';

const industeries = [
    { label: "Trading", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1772869180/trading-mahy_wdglvr.jpg" },
    { label: "Manufacturing", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210649/factory-workers-operating-machinery-on-production-2026-01-09-10-18-36-utc_tsa0tc.jpg" },
    { label: "Automobile", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210379/two-businessmen-are-working-together-in-the-car-sh-2026-01-08-23-56-20-utc_tjv68e.jpg" },
    { label: "Waste Management", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210761/joyful-indian-worker-in-protective-vest-and-gloves-2026-01-06-00-11-34-utc_m8310z.jpg" },
    { label: "Logistics", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210613/interior-warehouse-storage-and-cardboard-boxes-aga-2026-01-09-01-03-54-utc_dzzlr6.jpg" },
    { label: "Energy Management", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770210530/businesswoman-with-solar-panels-model-having-prese-2026-01-09-09-42-23-utc_l5vlii.jpg" },
];
const moreIndusteries = ["Airports", "Data Center", "Defence & Airspace", "Road, Metro, & Rail"];

function CompaniesList({ darkBg = false, industeriesFirst = true }) {

    const tabs = [industeriesFirst ? "Industeries" : "Companies", industeriesFirst ? "Companies" : "Industeries"];

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
                                        className={`border-b-4 py-3 px-7 border-transparent focus:outline-0 ${darkBg ? "text-gray-200" : "text-gray-400"} data-selected:border-[#79c4e7] data-selected:text-[#79c4e7] transition-all duration-300`}>
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
        <div className="relative h-120 md:h-full w-158">
            <Image src="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1772869180/trading-mahy_wdglvr.jpg" alt="Companies" fill />
            <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
            <div className='absolute bottom-7 left-7 text-gray-200'>
                <div className='flex flex-wrap gap-3 mb-4'>
                    {moreIndusteries.map((item, i) => (
                        <Link href={"/"} key={i} className='bg-black/40 py-2 px-4 rounded-xl text-sm'>{item}</Link>
                    ))}
                </div>
                <Link href={"/"} className='border-b border-gray-200 pb-1'>Explore More</Link>
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







// "use client"

// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
// import Image from 'next/image';
// import Link from 'next/link';
// import { motion, AnimatePresence } from "framer-motion";
// import IndustryCard from './IndustryCard';
// import CompanyCard from './CompanyCard';

// const tabs = ["Companies", "Industeries"];

// const companies = [
//     { label: "MAHY Khoory Group", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631811/mahy_trade_fvkjlg.mp4" },
//     { label: "MAHY Khoory Trading", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631811/mahy_trade_fvkjlg.mp4" },
//     { label: "AKE", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631855/AKE_n3re9d.mp4" },
//     { label: "EIEME", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631847/EIEME_eijv5u.mp4" },
//     { label: "GEMD", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631824/GEMD_ijbifl.mp4" },
//     { label: "Al Mehwar", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631801/AL_mehwar_zsb9aq.mp4" },
//     { label: "UwW", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631792/UWW_wv3vrz.mp4" },
//     { label: "UPM", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631801/AL_mehwar_zsb9aq.mp4" },
//     { label: "ALDPM", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631796/ADPM_klrv0d.mp4" },
//     { label: "MKA", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631850/MKA_ubyddr.mp4" },
//     { label: "MKM", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631851/MKM_e6ygxa.mp4" },
//     { label: "Greenland General Transport", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631850/Clean_Energy_qutcys.mp4" },
//     { label: "RWMD", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631806/RWMD_cndabr.mp4" },
//     { label: "AL dhafra waste collection", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631796/Al_Dafra_Waste_de0eqk.mp4" },
//     { label: "Around continent", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631822/Around_Continent_nez8f2.mp4" },
//     { label: "Ettihad waste management", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631802/Etihad_Waste_ta4qnh.mp4" },
//     { label: "Hote", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631876/Hotel_kod8dw.mp4" },
//     { label: "Restaurant", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631852/Restaurant_sd74o3.mp4" },
//     { label: "NPI", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631851/MKM_e6ygxa.mp4" },
//     { label: "Senan", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631839/Senan_efiz8q.mp4" },
//     { label: "Pure Energy", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631864/Pure_Energy_vvrszs.mp4" },
//     { label: "Clean Energy Solution", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631850/Clean_Energy_qutcys.mp4" },
//     { label: "Union Sustainability", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631839/Senan_efiz8q.mp4" },
//     { label: "SWMD", video: "https://res.cloudinary.com/db3fd1qah/video/upload/v1767631839/Senan_efiz8q.mp4" }
// ];

// const industeries = [
//     { label: "Trading", image: "/gallery/gallery-1.jpg" },
//     { label: "Manufacturing", image: "/gallery/gallery-2.jpg" },
//     { label: "Automobile", image: "/gallery/gallery-3.jpg" },
//     { label: "Waste Management", image: "/gallery/gallery-4.jpg" },
//     { label: "Logistics", image: "/gallery/gallery-5.jpg" },
//     { label: "Energy Transport", image: "/gallery/gallery-8.jpeg" },
// ];
// const moreIndusteries = ["Airports", "Data Center", "Defence & Airspace", "Road, Metro, & Rail"];

// function CompaniesList() {
//     return (
//         <section className="max-w-7xl mx-auto pt-10 md:pt-20 px-5">
//             <TabGroup>
//                 <div className="flex justify-between flex-wrap gap-5">
//                     <h2 className='uppercase text-3xl md:text-4xl font-semibold text-gray-700'>Businesses</h2>
//                     <div className=' '>
//                         <TabList className={"flex items-center gap-5"}>
//                             {tabs.map((tab, i) => (
//                                 <Tab key={i}
//                                     className={"border-b-4 py-3 px-7 border-transparent focus:outline-0 text-gray-400 data-selected:border-[#79c4e7] data-selected:text-[#79c4e7] transition-all duration-300"}>
//                                     {tab}
//                                 </Tab>
//                             ))}
//                         </TabList>
//                     </div>
//                 </div>
//                 <TabPanels className="mt-7 md:mt-10">
//                     <AnimatePresence mode="wait">
//                         <TabPanel
//                             key="companies"
//                             className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-3"
//                             as={motion.div}
//                             initial={{ y: 10, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             viewport={{ once: false, margin: "-100px" }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                         >
//                             {companies.map((company, i) => (
//                                 <CompanyCard key={i} item={company} />
//                             ))}
//                         </TabPanel>
//                         <TabPanel
//                             key="industries"
//                             className="grid grid-cols-1 lg:grid-cols-2 gap-3"
//                             as={motion.div}
//                             initial={{ y: 10, opacity: 0 }}
//                             whileInView={{ y: 0, opacity: 1 }}
//                             viewport={{ once: false, margin: "-100px" }}
//                             transition={{ duration: 0.8, ease: "easeOut" }}
//                         >
//                             <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
//                                 {industeries.map((industry, i) => (
//                                     <IndustryCard key={i} item={industry} />
//                                 ))}
//                             </div>
//                             <div className="relative h-120 md:h-full w-158">
//                                 <Image src="/gallery/gallery-9.jpeg" alt="Companies" fill />
//                                 <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
//                                 <div className='absolute bottom-7 left-7 text-gray-200'>
//                                     <div className='flex flex-wrap gap-3 mb-4'>
//                                         {moreIndusteries.map((item, i) => (
//                                             <Link href={"/"} key={i} className='bg-black/40 py-2 px-4 rounded-xl text-sm'>{item}</Link>
//                                         ))}
//                                     </div>
//                                     <Link href={"/"} className='border-b border-gray-200  pb-1'>Explore More</Link>
//                                 </div>
//                             </div>
//                         </TabPanel>
//                     </AnimatePresence>
//                 </TabPanels>
//             </TabGroup>
//         </section>
//     )
// };



// export default CompaniesList;

