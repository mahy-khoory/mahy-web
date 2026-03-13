"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import PortalSidebar from "./PortalSidebar";
import PortalHeader from "./PortalHeader";
import PortalAccessGuard from "../PortalAccessGuard";

export default function PortalLayout({ children, title, tabs }) {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <PortalAccessGuard>
      <div className="flex min-h-screen w-full overflow-x-hidden bg-[#0b1120] text-white">

        {/* SIDEBAR */}
        <PortalSidebar
          collapsed={collapsed}
          setCollapsed={setCollapsed}
          title={title}
          tabs={tabs}
        />

        {/* CONTENT */}
        <motion.div
          animate={{
            marginLeft: collapsed ? 90 : 260,
          }}
          transition={{ duration: 0.25 }}
          className="flex flex-col flex-1 min-h-screen min-w-0"
        >
          <PortalHeader />

          <main className="flex-1 min-w-0 p-6 md:p-10 bg-gradient-to-br from-[#0f172a] to-[#020617]">
            {children}
          </main>

        </motion.div>

      </div>
    </PortalAccessGuard>
  );
}