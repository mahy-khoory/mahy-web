"use client";

import { motion } from "framer-motion";
import PortalNavItem from "./PortalNavItem";
import { HiChevronLeft } from "react-icons/hi";

export default function PortalSidebar({
  collapsed,
  setCollapsed,
  title,
  tabs,
  mobileOpen,
  setMobileOpen,
  isDesktop,
}) {
  return (
    <motion.aside
      initial={false}
      animate={{
        width: isDesktop ? (collapsed ? 90 : 260) : 260,
        x: isDesktop ? 0 : mobileOpen ? 0 : -260,
      }}
      transition={{ duration: 0.25 }}
      className="fixed left-0 top-0 z-50 h-screen bg-[#020617] border-r border-white/10 flex flex-col shadow-2xl"
    >

      <div className="flex items-center justify-between px-5 py-5 border-b border-white/10">

        {!collapsed && (
          <span className="font-semibold text-lg truncate">
            {title}
          </span>
        )}

        {isDesktop ? (
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="text-white/70 hover:text-white"
          >
            <HiChevronLeft
              className={`text-xl transition ${
                collapsed ? "rotate-180" : ""
              }`}
            />
          </button>
        ) : (
          <button
            onClick={() => setMobileOpen(false)}
            className="text-white/70 hover:text-white"
          >
            ✕
          </button>
        )}
      </div>

      <nav className="flex flex-col gap-1 p-3 overflow-y-auto">

        {tabs.map((tab) => (
          <PortalNavItem
            key={tab.href}
            tab={tab}
            collapsed={collapsed}
          />
        ))}

      </nav>
    </motion.aside>
  );
}