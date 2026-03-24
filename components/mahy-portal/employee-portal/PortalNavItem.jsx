"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiOutlineDocumentText } from "react-icons/hi";

export default function PortalNavItem({ tab, collapsed }) {
  const pathname = usePathname();
  const active = pathname === tab.href;

  return (
    <Link
      href={tab.href}
      className={`flex items-center gap-4 rounded-xl px-4 py-3 text-sm transition
        ${active 
          ? "bg-white/10 text-white" 
          : "text-white/70 hover:bg-white/10 hover:text-white"
        }`}
    >
      <HiOutlineDocumentText className="text-xl shrink-0" />

      {!collapsed && (
        <span className="truncate">{tab.label}</span>
      )}
    </Link>
  );
}