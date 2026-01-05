"use client";
import { useEffect, useRef } from "react";
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import Image from "next/image";
import Link from "next/link";
import { FaArrowRightLong } from "react-icons/fa6";
import {
  motion,
  AnimatePresence,
  useAnimation,
  useInView,
} from "framer-motion";

const tabs = ["Industeries", "Companies"];
const industeries = [
  { label: "Trading", image: "/gallery/gallery-1.jpg" },
  { label: "Manufacturing", image: "/gallery/gallery-2.jpg" },
  { label: "Automobile", image: "/gallery/gallery-3.jpg" },
  { label: "Waste Management", image: "/gallery/gallery-4.jpg" },
  { label: "Logistics", image: "/gallery/gallery-5.jpg" },
  { label: "Energy Transport", image: "/gallery/gallery-8.jpeg" },
];
const moreIndusteries = [
  "Airports",
  "Data Center",
  "Defence & Airspace",
  "Road, Metro, & Rail",
];
const companies = [
  { label: "MAHY Khoory Group", image: "/gallery/gallery-1.jpg" },
  { label: "MAHY Khoory Trading", image: "/gallery/gallery-2.jpg" },
  { label: "AKE", image: "/gallery/gallery-3.jpg" },
  { label: "EIEME", image: "/gallery/gallery-4.jpg" },
  { label: "GEMD", image: "/gallery/gallery-5.jpg" },
  { label: "Al Mehwar", image: "/gallery/gallery-6.jpg" },
  { label: "UwW", image: "/gallery/gallery-1.jpg" },
  { label: "UPM", image: "/gallery/gallery-1.jpg" },
  { label: "ALDPM", image: "/gallery/gallery-1.jpg" },
  { label: "MKA", image: "/gallery/gallery-1.jpg" },
  { label: "MKM", image: "/gallery/gallery-1.jpg" },
  { label: "Greenland General Transport", image: "/gallery/gallery-1.jpg" },
  { label: "RWMD", image: "/gallery/gallery-1.jpg" },
  { label: "AL dhafra waste collection", image: "/gallery/gallery-1.jpg" },
  { label: "Around continent", image: "/gallery/gallery-1.jpg" },
  { label: "Ettihad waste management", image: "/gallery/gallery-1.jpg" },
  { label: "Hote", image: "/gallery/gallery-1.jpg" },
  { label: "Restaurant", image: "/gallery/gallery-1.jpg" },
  { label: "NPI", image: "/gallery/gallery-1.jpg" },
  { label: "Senan", image: "/gallery/gallery-1.jpg" },
  { label: "Pure Energy", image: "/gallery/gallery-1.jpg" },
  { label: "Clean Energy Solution", image: "/gallery/gallery-1.jpg" },
  { label: "Union Sustainability", image: "/gallery/gallery-1.jpg" },
  { label: "SWMD", image: "/gallery/gallery-1.jpg" },
];

function CompaniesList() {
  const sectionRef = useRef(null);
  const controls = useAnimation();
  const isSectionInView = useInView(sectionRef, { once: false, amount: 0.35 });

  useEffect(() => {
    if (isSectionInView) {
      controls.start("visible");
    } else {
      controls.start("hidden");
    }
  }, [isSectionInView, controls]);

  return (
    <motion.section
      ref={sectionRef}
      className="max-w-7xl mx-auto pt-10 md:pt-20 px-5"
      variants={{
        hidden: { opacity: 0, y: 40 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: "easeOut" },
        },
      }}
      initial="hidden"
      animate={controls}
    >
      <TabGroup>
        <div className="flex justify-between flex-wrap gap-5">
          <h2 className="uppercase text-3xl md:text-4xl font-semibold text-gray-700">
            Businesses
          </h2>
          <div className=" ">
            <TabList className={"flex items-center gap-5"}>
              {tabs.map((tab, i) => (
                <Tab
                  key={i}
                  className={
                    "border-b-4 py-3 px-7 border-transparent focus:outline-0 text-gray-400 data-selected:border-[#79c4e7] data-selected:text-[#79c4e7] transition-all duration-300"
                  }
                >
                  {tab}
                </Tab>
              ))}
            </TabList>
          </div>
        </div>
        <TabPanels className="mt-7 md:mt-10">
          <AnimatePresence mode="wait">
            <TabPanel
              key="companies"
              className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-0.5"
              as={motion.div}
              initial={{ y: 10, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: false, margin: "-100px" }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {companies.map((company, i) => (
                <Card key={i} item={company} />
              ))}
            </TabPanel>

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
                  <Card key={i} item={industry} />
                ))}
              </div>

              <div className="relative h-120 md:h-full w-158">
                <Image src="/gallery/gallery-9.jpeg" alt="Companies" fill />
                <div className="absolute inset-0 bg-linear-to-t from-black/30 to-transparent" />
                <div className="absolute bottom-7 left-7 text-gray-200">
                  <div className="flex flex-wrap gap-3 mb-4">
                    {moreIndusteries.map((item, i) => (
                      <Link
                        href={"/"}
                        key={i}
                        className="bg-black/40 py-2 px-4 rounded-xl text-sm"
                      >
                        {item}
                      </Link>
                    ))}
                  </div>
                  <Link href={"/"} className="border-b border-gray-200  pb-1">
                    Explore More
                  </Link>
                </div>
              </div>
            </TabPanel>
          </AnimatePresence>
        </TabPanels>
      </TabGroup>
    </motion.section>
  );
}

const Card = ({ item }) => (
  <div className="relative h-60 md:h-45 group overflow-hidden">
    <div className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-[1.3] group-hover:blur-xs">
      <Image
        src={item.image}
        alt={item.label}
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
    <div className="absolute inset-0 z-10 bg-linear-to-t from-black/30 to-transparent">
      <div className="absolute bottom-5 left-0 right-0">
        <div className="flex justify-between gap-3 px-7">
          <p className="text-gray-50">{item.label}</p>
          <FaArrowRightLong
            size={20}
            color="white"
            className="translate-x-40 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500"
          />
        </div>
        <div className="h-px w-full bg-white mt-3 -translate-x-120 group-hover:translate-x-0 transition-all duration-500" />
      </div>
    </div>
  </div>
);

export default CompaniesList;
