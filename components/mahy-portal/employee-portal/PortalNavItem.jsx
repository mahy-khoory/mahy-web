"use client";

import Link from "next/link";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function PortalNavItem({ tab, collapsed }) {
  return (
    <Link
      href={tab.href}
      className="flex items-center gap-4 rounded-xl px-4 py-3 text-sm text-white/80 hover:bg-white/10 hover:text-white transition"
    >

      <HiOutlineDocumentText className="text-xl" />

      {!collapsed && <span>{tab.label}</span>}

    </Link>
  );
}