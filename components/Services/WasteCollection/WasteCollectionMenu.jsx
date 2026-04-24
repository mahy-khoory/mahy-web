// "use client";

// import PrimaryButton from "@/components/UI/PrimaryButton";
// import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";

// function WasteCollectionMenu({
//   heading = "Building a legacy of excellence",
//   tabs = ["Innovation", "Client Approach", "Integrity"],
//   items = [
//     "Innovation is woven into the fabric of our strategy. We recognize the dynamic nature of the financial landscape and are committed to staying at the forefront of industry trends. Our strategy involves embracing technological advancements, exploring innovative solutions.",
//     "At the core of our strategy is a commitment to putting our clients first. We prioritize understanding your unique needs, challenges, and aspirations. By adopting a client-centric approach, we tailor our services to deliver personalized solutions that align with your goals.",
//     "Trust is paramount in financial consultancy, and our strategy is built on a foundation of integrity and transparency. We uphold the highest ethical standards in our interactions, ensuring that our clients have complete confidence in our recommendations and actions.",
//   ],
//   image = "/gallery/gallery-1.jpg",
// }) {
//   return (
//     <section className="bg-gray-100">
//       <div className="grid grid-cols-1 md:grid-cols-2">
//         <div className="relative h-[300px] md:h-[500px] lg:h-full min-h-[400px] overflow-hidden">
//           <Image
//             src={image}
//             alt="Waste Collection Menu"
//             fill
//             className="object-cover object-center"
//             sizes="(max-width: 768px) 100vw, 50vw"
//           />
//         </div>
//         <div className="pt-8 pb-12 md:py-20 px-5 max-w-2xl mx-auto min-h-[450px] h-auto flex flex-col">
//           {/* <h2 className="uppercase t-base font-semibold">Our Vision</h2> */}
//           <p className="text-3xl md:text-4xl font-semibold mt-3">{heading}</p>
//           {/* <p className="text-sm text-gray-600 mt-5">We are more than just financial consultants; we are a dedicated team of experts driven by a shared vision of transforming challenges into opportunities.</p> */}
//           <TabGroup>
//             <TabList
//               className={"flex flex-wrap gap-y-2 gap-x-8 items-center mt-7"}
//             >
//               {tabs.map((tab, i) => (
//                 <Tab
//                   key={i}
//                   className={
//                     "text-sm border-b-3 py-2 border-transparent focus:outline-0 text-gray-400 data-selected:border-[#2c3f6e] data-selected:text-[#2c3f6e] transition-all duration-300 cursor-pointer"
//                   }
//                 >
//                   {tab}
//                 </Tab>
//               ))}
//             </TabList>
//             <TabPanels className="mt-6 md:mt-6 border-t border-gray-300 pt-6">
//               <AnimatePresence mode="wait">
//                 {items.map((item, i) => (
//                   <TabPanel
//                     key={i}
//                     as={motion.div}
//                     initial={{ x: -10, opacity: 0 }}
//                     whileInView={{ x: 0, opacity: 1 }}
//                     viewport={{ once: false, margin: "-100px" }}
//                     transition={{ duration: 0.8, ease: "easeOut" }}
//                   >
//                     {item}
//                   </TabPanel>
//                 ))}
//               </AnimatePresence>
//             </TabPanels>
//           </TabGroup>
//           {/* <PrimaryButton className={"mt-6 md:mt-8"} /> */}
//         </div>
//       </div>
//     </section>
//   );
// }

// export default WasteCollectionMenu;


"use client";

import { Tab, TabGroup, TabList, TabPanel, TabPanels } from "@headlessui/react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

function WasteCollectionMenu({
  heading = "Building a legacy of excellence",
  tabs = ["Innovation", "Client Approach", "Integrity"],
  items = [
    "Innovation is woven into the fabric of our strategy...",
    "At the core of our strategy is a commitment...",
    "Trust is paramount in financial consultancy...",
  ],
  image = "/gallery/gallery-1.jpg",
  imageFit = "cover",
}) {
  return (
    <section className="bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2">
        
        {/* ✅ IMAGE SECTION */}
        <div className="relative h-[300px] md:h-[500px] lg:h-full min-h-[400px] overflow-hidden">
          <Image
            src={image}
            alt="Waste Collection Menu"
            fill
            className={`${
              imageFit === "contain"
                ? "object-contain bg-white p-6 md:p-10"
                : "object-cover object-center"
            }`}
            sizes="(max-width: 768px) 100vw, 50vw"
            priority
          />
        </div>

        {/* ✅ CONTENT */}
        <div className="pt-8 pb-12 md:py-20 px-5 max-w-2xl mx-auto min-h-[450px] h-auto flex flex-col">
          
          <p className="text-3xl md:text-4xl font-semibold mt-3">
            {heading}
          </p>

          <TabGroup>
            
            <TabList className="flex flex-wrap gap-y-2 gap-x-8 items-center mt-7">
              {tabs.map((tab, i) => (
                <Tab
                  key={i}
                  className="text-sm border-b-2 py-2 border-transparent focus:outline-none text-gray-400 data-[selected]:border-[#2c3f6e] data-[selected]:text-[#2c3f6e] transition-all duration-300 cursor-pointer"
                >
                  {tab}
                </Tab>
              ))}
            </TabList>

            <TabPanels className="mt-6 border-t border-gray-300 pt-6">
              <AnimatePresence mode="wait">
                {items.map((item, i) => (
                  <TabPanel
                    key={i}
                    as={motion.div}
                    initial={{ x: -10, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: 10, opacity: 0 }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  >
                    {item}
                  </TabPanel>
                ))}
              </AnimatePresence>
            </TabPanels>

          </TabGroup>
        </div>
      </div>
    </section>
  );
}

export default WasteCollectionMenu;