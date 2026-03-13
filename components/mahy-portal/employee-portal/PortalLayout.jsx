"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PortalSidebar from "./PortalSidebar";
import PortalHeader from "./PortalHeader";

export default function PortalLayout({ children, title, tabs }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="flex min-h-screen bg-[#0b1120] text-white">

      <PortalSidebar
        collapsed={collapsed}
        setCollapsed={setCollapsed}
        title={title}
        tabs={tabs}
      />

      <motion.div
        animate={{
          marginLeft: collapsed ? 90 : 260,
        }}
        transition={{ duration: 0.25 }}
        className="flex-1 flex flex-col min-h-screen"
      >
        <PortalHeader />

        <main className="flex-1 p-6 md:p-10 bg-gradient-to-br from-[#0f172a] to-[#020617]">
          {children}
        </main>
      </motion.div>

    </div>
  );
}