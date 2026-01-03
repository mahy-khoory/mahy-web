"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

export default function SustainabilityPanels({
  items = [],
  cols = 4,
  className = "",
}) {
  const safeItems = useMemo(() => items.filter(Boolean), [items]);

  const [active, setActive] = useState(0);
  const [isCompactLayout, setIsCompactLayout] = useState(false);
  const [isSectionVisible, setIsSectionVisible] = useState(false);

  const sectionRef = useRef(null);
  const trackRef = useRef(null);
  const panelRefs = useRef([]);
  const activeRef = useRef(0);
  const userInteractedRef = useRef(false);

  const setActiveIndex = useCallback((value) => {
    setActive((prev) => {
      const next = typeof value === "function" ? value(prev) : value;
      activeRef.current = next;
      return next;
    });
  }, []);


  useEffect(() => {
    if (typeof window === "undefined") return;

    const mq = window.matchMedia("(max-width: 1024px)");
    const update = () => setIsCompactLayout(mq.matches);

    update();
    mq.addEventListener
      ? mq.addEventListener("change", update)
      : mq.addListener(update);

    return () => {
      mq.removeEventListener
        ? mq.removeEventListener("change", update)
        : mq.removeListener(update);
    };
  }, []);


  useEffect(() => {
    if (!sectionRef.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => setIsSectionVisible(entry.isIntersecting),
      { threshold: 0.15 }
    );

    observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);


  useEffect(() => {
    if (
      !isCompactLayout ||
      !isSectionVisible ||
      safeItems.length <= 1 ||
      userInteractedRef.current
    ) {
      return;
    }

    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % safeItems.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isCompactLayout, isSectionVisible, safeItems.length, setActiveIndex]);

  useEffect(() => {
    if (!isCompactLayout || !isSectionVisible) return;

    const container = trackRef.current;
    const node = panelRefs.current[active];
    if (!container || !node) return;

    const targetLeft =
      node.offsetLeft -
      (container.clientWidth - node.offsetWidth) / 2;

    container.scrollTo({
      left: targetLeft,
      behavior: "smooth",
    });
  }, [active, isCompactLayout, isSectionVisible]);


  useEffect(() => {
    if (!isCompactLayout || !isSectionVisible) return;

    const container = trackRef.current;
    if (!container) return;

    let frame = null;

    const syncActive = () => {
      frame = null;
      const center = container.scrollLeft + container.clientWidth / 2;

      let closestIdx = activeRef.current;
      let closestDistance = Infinity;

      panelRefs.current.forEach((node, idx) => {
        if (!node) return;
        const panelCenter = node.offsetLeft + node.offsetWidth / 2;
        const distance = Math.abs(panelCenter - center);
        if (distance < closestDistance) {
          closestIdx = idx;
          closestDistance = distance;
        }
      });

      if (closestIdx !== activeRef.current) {
        setActiveIndex(closestIdx);
      }
    };

    const handleScroll = () => {
      if (frame) return;
      frame = requestAnimationFrame(syncActive);
    };

    container.addEventListener("scroll", handleScroll, { passive: true });
    syncActive();

    return () => {
      container.removeEventListener("scroll", handleScroll);
      if (frame) cancelAnimationFrame(frame);
    };
  }, [isCompactLayout, isSectionVisible, setActiveIndex]);

  const activeItem = safeItems[Math.min(active, safeItems.length - 1)];

  return (
    <section ref={sectionRef} className={`w-full ${className}`}>
      <div className="relative overflow-hidden bg-black">
        <div className="absolute inset-0">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeItem?.image || active}
              className="absolute inset-0"
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.02 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
            >
              {activeItem?.image && (
                <Image
                  src={activeItem.image}
                  alt={activeItem?.title || "Sustainability"}
                  fill
                  priority={active === 0}
                  className="object-cover"
                />
              )}
            </motion.div>
          </AnimatePresence>

          <div className="absolute inset-0 bg-black/25" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/35" />
        </div>

        {/* Panels */}
        <div
          ref={trackRef}
          className="
            relative z-10 flex w-full gap-0 overflow-x-auto px-0
            h-[360px] sm:h-[420px] lg:h-[520px] xl:h-[580px]
            snap-x snap-mandatory
            sm:gap-4 sm:px-4
            lg:gap-0 lg:overflow-visible lg:px-0 lg:snap-none
          "
        >
          {safeItems.map((item, idx) => (
            <Panel
              key={idx}
              item={item}
              isActive={idx === active}
              showDivider={!isCompactLayout && idx !== 0}
              isCompact={isCompactLayout}
              panelRef={(el) => (panelRefs.current[idx] = el)}
              onActivate={() => {
                userInteractedRef.current = true;
                setActiveIndex(idx);
              }}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute inset-0 ring-1 ring-white/10" />
      </div>
    </section>
  );
}

function Panel({
  item,
  isActive,
  showDivider,
  onActivate,
  isCompact,
  panelRef,
}) {
  const hasDetails =
    (item?.bullets && item.bullets.length > 0) || !!item?.description;

  return (
    <motion.button
      layout
      ref={panelRef}
      type="button"
      onMouseEnter={onActivate}
      onFocus={onActivate}
      onClick={onActivate}
      className="
        group relative flex-1 overflow-hidden text-start
        focus:outline-none snap-start
        flex-[0_0_100%] sm:flex-[0_0_95%] md:flex-[0_0_90%]
        lg:flex-1 lg:min-w-0
      "
      animate={{ flexGrow: isCompact ? 1 : isActive ? 2.3 : 1 }}
      transition={{
        duration: isCompact ? 0.35 : 0.6,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {showDivider && (
        <div className="absolute inset-y-0 left-0 w-px bg-white/25" />
      )}

      <motion.div
        className="absolute inset-0"
        animate={{
          backgroundColor: isActive
            ? "rgba(0,0,0,0)"
            : "rgba(0,0,0,0.10)",
        }}
        transition={{ duration: 0.35 }}
      />

      <AnimatePresence>
        {isActive && (
          <motion.div
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/35 to-transparent"
              initial={{ y: 28 }}
              animate={{ y: 0 }}
              exit={{ y: 28 }}
            />
          </motion.div>
        )}
      </AnimatePresence>

      <div className="relative z-10 flex h-full flex-col justify-end p-5 sm:p-6 lg:p-8">
        <motion.h6
          layout
          className="text-white font-semibold tracking-tight
                     text-[14px] sm:text-[18px] lg:text-[28px]"
          animate={{ y: isActive ? -10 : 0 }}
        >
          {item?.title}
        </motion.h6>

        <AnimatePresence>
          {isActive && hasDetails && (
            <motion.div
              layout
              initial={{ opacity: 0, y: 22, filter: "blur(4px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0)" }}
              exit={{ opacity: 0, y: 18, filter: "blur(4px)" }}
              className="max-w-[520px]"
            >
              {item?.description && (
                <p className="text-white/90 text-sm lg:text-[16px] leading-relaxed">
                  {item.description}
                </p>
              )}

              {item?.bullets?.length > 0 && (
                <ul className="mt-3 space-y-2 text-white/90 text-sm lg:text-[16px]">
                  {item.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="mt-[0.55em] h-[5px] w-[5px] rounded-full bg-white/85" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>
          )}
        </AnimatePresence>

        <div className="h-2 sm:h-3" />
      </div>
    </motion.button>
  );
}
