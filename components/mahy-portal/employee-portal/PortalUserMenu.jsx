"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useAuth } from "@/context/AuthContext";

export default function PortalUserMenu() {
  const { user, logoutRedirect } = useAuth();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">

      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3"
      >

        <HiOutlineUserCircle className="text-3xl text-white/80" />

        <div className="hidden md:block text-left">
          <p className="text-sm font-medium truncate max-w-[160px]">
            {user?.name}
          </p>
          <p className="text-xs text-white/60 truncate max-w-[160px]">
            {user?.department}
          </p>
        </div>

      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 mt-3 w-60 rounded-xl bg-[#020617] border border-white/10 shadow-lg p-4"
          >

            <p className="text-sm font-medium truncate">{user?.name}</p>
            <p className="text-xs text-white/60 truncate">{user?.email}</p>

            <div className="mt-4 border-t border-white/10 pt-3">

              <button
                onClick={logoutRedirect}
                className="text-sm text-red-400 hover:text-red-300"
              >
                Logout
              </button>

            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}