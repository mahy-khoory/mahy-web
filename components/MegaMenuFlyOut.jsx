"use client";

import { useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import gsap from "gsap";

export default function MegaMenuFlyOut({
  isOpen = false,
  columns = [],
  onClose,
}) {
  const panelRef = useRef(null);

  useEffect(() => {
    if (isOpen && panelRef.current) {
      gsap.fromTo(
        panelRef.current,
        { y: -12, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.35,
          ease: "power3.out",
        }
      );
    }
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={panelRef}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
          onMouseLeave={onClose}
          className="
            fixed
            inset-x-0
            top-[72px]
            z-[9999]
            w-full
            bg-black/80
            backdrop-blur-[22px]
            border-t border-white/10
            shadow-[0_40px_120px_rgba(0,0,0,0.95)]
            min-h-[300px]
            pt-8
            pb-20
          "
        >
          <button
            onClick={onClose}
            aria-label="Close menu"
            className="
              absolute right-5 top-5
              flex h-9 w-9 items-center justify-center
              rounded-full
              border border-white/30
              text-white/80
              hover:text-white
              hover:border-white/60
              transition
            "
          >
            <X size={16} />
          </button>
          <div className="mx-auto w-full max-w-[90rem] px-6 sm:px-12 pt-5">
            <div
              className="
                grid grid-cols-1
                md:grid-cols-2
                lg:grid-cols-4
                gap-x-14 gap-y-10
              "
            >
              {columns.map((col, idx) => (
                <div key={idx}>
                  <h4
                    className="
                      mb-8
                      text-[16px]
                      font-bold
                      uppercase
                      tracking-[0.18em]
                      text-white/85
                    "
                  >
                    {col.title}
                  </h4>

                  <ul className="space-y-3">
                    {(col.links || []).map((link, i) => (
                      <li key={i}>
                        <Link
                          href={link.href}
                          className="
                            block
                            text-[14px]
                            leading-snug
                            text-white/65
                            hover:text-white
                            transition-colors
                          "
                        >
                          {link.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-12 pt-4">
            <div className="h-px w-full bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
