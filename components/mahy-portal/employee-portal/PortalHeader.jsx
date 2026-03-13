"use client";

import PortalUserMenu from "./PortalUserMenu";

export default function PortalHeader() {
  return (
    <header className="h-[76px] border-b border-white/10 bg-black/30 backdrop-blur-xl flex items-center sticky justify-end px-6 md:px-10">
      <PortalUserMenu />
    </header>
  );
}