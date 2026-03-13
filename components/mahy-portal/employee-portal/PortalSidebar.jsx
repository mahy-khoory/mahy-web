"use client";

import { motion } from "framer-motion";
import PortalNavItem from "./PortalNavItem";
import { HiChevronLeft } from "react-icons/hi";

export default function PortalSidebar({
  collapsed,
  setCollapsed,
  title,
  tabs,
}) {
  return (
    <motion.aside
      animate={{ width: collapsed ? 90 : 260 }}
      transition={{ duration: 0.25 }}
      className="fixed left-0 top-0 z-40 h-screen shrink-0 bg-[#020617] border-r border-white/10 backdrop-blur-xl flex flex-col"
    >

      <div className="flex items-center justify-between px-6 py-6 border-b border-white/10">

        {!collapsed && (
          <span className="font-semibold text-lg tracking-wide truncate">
            {title}
          </span>
        )}

        <button
          onClick={() => setCollapsed(!collapsed)}
          className="text-white/70 hover:text-white transition"
        >
          <HiChevronLeft
            className={`text-xl transition ${
              collapsed ? "rotate-180" : ""
            }`}
          />
        </button>

      </div>

      <nav className="flex flex-col gap-2 p-4 overflow-y-auto">

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