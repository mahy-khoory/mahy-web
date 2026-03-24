"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortalSidebar from "./PortalSidebar";
import PortalHeader from "./PortalHeader";
import PortalAccessGuard from "../PortalAccessGuard";

export default function PortalLayout({ children, title, tabs }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handle = (e) => {
      setIsDesktop(e.matches);
      if (e.matches) setMobileOpen(false);
    };

    handle(media);
    media.addEventListener("change", handle);

    return () => media.removeEventListener("change", handle);
  }, []);

  return (
    <PortalAccessGuard>
      <div className="min-h-screen bg-[#0b1120] text-white overflow-x-hidden">

        <div className="flex w-full">
          {isDesktop ? (
            <PortalSidebar
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              title={title}
              tabs={tabs}
              mobileOpen={false}
              setMobileOpen={setMobileOpen}
              isDesktop
            />
          ) : (
            <AnimatePresence>
              {mobileOpen && (
                <>
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setMobileOpen(false)}
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                  />

                  <PortalSidebar
                    collapsed={false}
                    setCollapsed={setCollapsed}
                    title={title}
                    tabs={tabs}
                    mobileOpen={mobileOpen}
                    setMobileOpen={setMobileOpen}
                    isDesktop={false}
                  />
                </>
              )}
            </AnimatePresence>
          )}

          <motion.div
            animate={{
              marginLeft: isDesktop ? (collapsed ? 90 : 260) : 0,
            }}
            transition={{ duration: 0.25 }}
            className="flex flex-col flex-1 min-w-0"
          >

            <div className="sticky top-0 z-30">
              <PortalHeader onMenuClick={() => setMobileOpen(true)} />
            </div>

            {!isDesktop && (
              <div className="sticky top-[64px] z-20 px-4 py-3 border-b border-white/10 bg-[#08111f]/80 backdrop-blur-xl">
                <button
                  onClick={() => setMobileOpen(true)}
                  className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.06] hover:bg-white/[0.1]"
                >
                  ☰ Menu
                </button>
              </div>
            )}

            <main className="flex-1 min-w-0 px-4 py-5 sm:px-6 md:px-8 lg:px-10 lg:py-8 bg-gradient-to-br from-[#0f172a] via-[#08111f] to-[#020617]">

              <div className="w-full max-w-[1600px] mx-auto">
                {children}
              </div>

            </main>

          </motion.div>
        </div>
      </div>
    </PortalAccessGuard>
  );
}