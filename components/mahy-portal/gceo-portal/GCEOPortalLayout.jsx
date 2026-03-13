"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import PortalHeader from "../employee-portal/PortalHeader";
import PortalSidebar from "../employee-portal/PortalSidebar";
import PortalAccessGuard from "../PortalAccessGuard";

export default function GCEOPortalLayout({ children, title, tabs }) {
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");

    const handleMedia = (event) => {
      setIsDesktop(event.matches);
      if (event.matches) {
        setMobileOpen(false);
      }
    };

    handleMedia(media);
    media.addEventListener("change", handleMedia);

    return () => media.removeEventListener("change", handleMedia);
  }, []);

  return (
    <PortalAccessGuard>
      <div className="min-h-screen bg-[#0b1120] text-white">
        <div className="relative flex min-h-screen w-full overflow-x-hidden">
          {isDesktop ? (
            <PortalSidebar
              collapsed={collapsed}
              setCollapsed={setCollapsed}
              title={title}
              tabs={tabs}
              mobileOpen={false}
              setMobileOpen={setMobileOpen}
              isDesktop={true}
            />
          ) : (
            <AnimatePresence>
              {mobileOpen && (
                <>
                  <motion.div
                    className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={() => setMobileOpen(false)}
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
            className="flex min-h-screen min-w-0 flex-1 flex-col"
          >
            <div className="sticky top-0 z-30">
              <PortalHeader />
            </div>

            {!isDesktop && (
              <div className="sticky top-[64px] z-20 border-b border-white/10 bg-[#08111f]/80 px-4 py-3 backdrop-blur-xl md:px-6">
                <button
                  onClick={() => setMobileOpen(true)}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2 text-sm font-medium text-white/85 transition hover:bg-white/[0.08]"
                >
                  <span className="text-base">☰</span>
                  <span>Open Navigation</span>
                </button>
              </div>
            )}

            <main className="min-w-0 flex-1 bg-gradient-to-br from-[#0f172a] via-[#08111f] to-[#020617] px-4 py-5 sm:px-6 md:px-8 lg:px-10 lg:py-8">
              {children}
            </main>
          </motion.div>
        </div>
      </div>
    </PortalAccessGuard>
  );
}