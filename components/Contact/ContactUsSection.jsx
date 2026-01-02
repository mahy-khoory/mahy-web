"use client";

import { useEffect, useState } from "react";
import ContactTextPane from "./ContactTextPane";
import ContactFormPane from "./ContactFormPane";
import ComplaintFormPane from "./ComplaintFormPane";
import { motion, AnimatePresence } from "framer-motion";
import SiteVisitRequisitionForm from "./SiteVisitRequisitionForm";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function ContactUsSection({ contactUs }) {
  const [activeTab, setActiveTab] = useState("contact");
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [mobileTrack, setMobileTrack] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    const updateTrack = () => {
      setMobileTrack(window.innerWidth < 768);
    };

    updateTrack();
    window.addEventListener("resize", updateTrack);
    return () => window.removeEventListener("resize", updateTrack);
  }, []);

  useEffect(() => {
    if (mobileTrack && swiperInstance) {
      swiperInstance.slideTo(activeTabIndex);
    }
  }, [activeTabIndex, mobileTrack, swiperInstance]);

  const tabs = [
    { id: "contact", label: contactUs.labels[0] },
    { id: "complaint", label: contactUs.labels[1] },
    { id: "sitevisit", label: "Site Visit Requisition" },
  ];

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    const idx = tabs.findIndex((tab) => tab.id === tabId);
    if (idx !== -1) {
      setActiveTabIndex(idx);
    }
  };

  return (
    <section className="relative bg-white">
      <div className="mx-auto max-w-7xl px-6 pt-2 lg:pt-8 pb-16">
        <div className="sticky top-16 z-30 bg-white">
          <div className="py-3 mb-8 lg:mb-16">
            {mobileTrack ? (
              <div className="relative rounded-3xl border border-slate-200 bg-white/90 px-3 py-4 shadow-md">
                <Swiper
                  slidesPerView={"auto"}
                  spaceBetween={12}
                  centeredSlides
                  onSwiper={setSwiperInstance}
                  onSlideChange={(swiper) => {
                    const nextTab = tabs[swiper.activeIndex]?.id;
                    if (nextTab) {
                      handleTabChange(nextTab);
                    }
                  }}
                  className="[&_.swiper-wrapper]:items-stretch"
                >
                  {tabs.map((tab) => (
                    <SwiperSlide
                      key={tab.id}
                      className="!w-[180px] max-w-[65vw]"
                    >
                      <button
                        onClick={() => handleTabChange(tab.id)}
                        className={`w-full rounded-full border px-3.5 py-2 text-[12px] font-semibold tracking-tight transition-all duration-300
                          ${
                            activeTab === tab.id
                              ? "border-black bg-black text-white shadow-lg"
                              : "border-slate-200/70 bg-white text-slate-600"
                          }`}
                      >
                        {tab.label}
                      </button>
                    </SwiperSlide>
                  ))}
                </Swiper>
                <div className="mt-3 flex flex-col items-center gap-1 text-[10px] uppercase tracking-[0.35em] text-slate-500">
                  <div className="flex gap-2 items-center">
                    {tabs.map((tab, idx) => (
                      <span
                        key={`indicator-${tab.id}`}
                        aria-hidden="true"
                        className={`block h-[4px] rounded-full transition-all ${
                          idx === activeTabIndex
                            ? "w-9 bg-black shadow-[0_1px_4px_rgba(0,0,0,0.35)]"
                            : "w-4 bg-[#cbd2db]"
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            ) : (
              <div className="mx-auto flex w-full max-w-3xl flex-wrap justify-center gap-2 rounded-3xl bg-slate-100/90 p-1 shadow-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => handleTabChange(tab.id)}
                    className={`basis-full flex-1 rounded-full px-5 py-2.5 text-sm font-medium text-center transition-all duration-300 sm:basis-auto sm:flex-none sm:min-w-[140px]
                      ${
                        activeTab === tab.id
                          ? "bg-black text-white shadow-md"
                          : "text-slate-600 hover:text-black"
                      }`}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-20 items-start">
          <ContactTextPane data={contactUs.headings} />
          <AnimatePresence mode="wait">
            {activeTab === "contact" && (
              <motion.div
                key="contact"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ContactFormPane
                  data={contactUs.form1}
                  agreement={contactUs.agreement}
                  submit={contactUs.submit[0]}
                />
              </motion.div>
            )}

            {activeTab === "complaint" && (
              <motion.div
                key="complaint"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <ComplaintFormPane
                  data={contactUs.form2}
                  upload={contactUs.upload}
                  submit={contactUs.submit[1]}
                />
              </motion.div>
            )}

            {activeTab === "sitevisit" && (
              <motion.div
                key="sitevisit"
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <SiteVisitRequisitionForm />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
