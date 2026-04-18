"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { AnimatePresence, motion } from "framer-motion";

const PREVIEW_LIMIT = 110;

export default function ExpandableCell({
  text,
  tableClasses,
  modalTitle = "Details",
}) {
  const [open, setOpen] = useState(false);
  const scrollRef = useRef(null);

  useEffect(() => {
    if (!open || typeof document === "undefined") return undefined;

    const body = document.body;
    const scrollY = window.scrollY;

    body.style.position = "fixed";
    body.style.top = `-${scrollY}px`;
    body.style.left = "0";
    body.style.right = "0";
    body.style.width = "100%";
    body.style.overflow = "hidden";

    return () => {
      body.style.position = "";
      body.style.top = "";
      body.style.left = "";
      body.style.right = "";
      body.style.width = "";
      body.style.overflow = "";

      window.scrollTo(0, scrollY);
    };
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const el = scrollRef.current;
    if (!el) return;

    const stopScrollPropagation = (event) => {
      const { scrollTop, scrollHeight, clientHeight } = el;
      const deltaY = event.deltaY;

      const atTop = scrollTop <= 0;
      const atBottom = scrollTop + clientHeight >= scrollHeight - 1;

      if ((atTop && deltaY < 0) || (atBottom && deltaY > 0)) {
        event.preventDefault();
      }

      event.stopPropagation();
    };

    const stopTouchPropagation = (event) => {
      event.stopPropagation();
    };

    el.addEventListener("wheel", stopScrollPropagation, { passive: false });
    el.addEventListener("touchmove", stopTouchPropagation, { passive: false });

    return () => {
      el.removeEventListener("wheel", stopScrollPropagation);
      el.removeEventListener("touchmove", stopTouchPropagation);
    };
  }, [open]);

  const safeText = useMemo(() => {
    const normalized = typeof text === "string" ? text.trim() : "";
    return normalized || "-";
  }, [text]);

  const isLong = safeText !== "-" && safeText.length > PREVIEW_LIMIT;
  const previewText = isLong
    ? `${safeText.slice(0, PREVIEW_LIMIT).trimEnd()}...`
    : safeText;

  return (
    <>
      <td
        className={`${tableClasses} max-w-[260px] whitespace-normal text-white/70`}
      >
        <div className="space-y-2 text-left">
          <p className="line-clamp-2 break-words leading-6 text-white/78">
            {previewText}
          </p>

          {isLong ? (
            <button
              type="button"
              onClick={() => setOpen(true)}
              className="inline-flex items-center text-xs font-semibold text-sky-300 transition hover:text-sky-200"
            >
              Read more -&gt;
            </button>
          ) : null}
        </div>
      </td>

      {typeof document !== "undefined"
        ? createPortal(
            <AnimatePresence>
              {open ? (
                <motion.div
                  className="fixed inset-0 z-[130] flex items-center justify-center bg-black/65 p-4 backdrop-blur-sm"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setOpen(false)}
                >
                  <motion.div
                    initial={{ opacity: 0, y: 18, scale: 0.98 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 12, scale: 0.98 }}
                    transition={{ duration: 0.18 }}
                    onClick={(event) => event.stopPropagation()}
                    className="flex h-[80vh] w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-[#0b1220] shadow-2xl"
                  >
                    <div className="flex items-start justify-between gap-4 border-b border-white/10 px-6 py-5 shrink-0">
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-sky-300/85">
                          Document Details
                        </p>
                        <h3 className="mt-2 text-xl font-semibold text-white">
                          {modalTitle}
                        </h3>
                      </div>

                      <button
                        type="button"
                        onClick={() => setOpen(false)}
                        className="rounded-xl border border-white/10 bg-white/[0.03] px-3 py-2 text-sm font-medium text-white/70 transition hover:bg-white/[0.06] hover:text-white shrink-0"
                      >
                        Close
                      </button>
                    </div>

                    <div
                      ref={scrollRef}
                      className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-6 py-5 [scrollbar-gutter:stable] [-webkit-overflow-scrolling:touch]"
                    >
                      <p className="whitespace-pre-wrap break-words text-sm leading-7 text-white/80">
                        {safeText}
                      </p>
                    </div>
                  </motion.div>
                </motion.div>
              ) : null}
            </AnimatePresence>,
            document.body,
          )
        : null}
    </>
  );
}