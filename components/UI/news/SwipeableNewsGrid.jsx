"use client";

import { useEffect, useRef, useState } from "react";
import { useNewsPageNavigation } from "./useNewsPageNavigation";

const MIN_SWIPE_DISTANCE = 60;

export default function SwipeableNewsGrid({ page, totalPages, children }) {
  const { currentPage, goToPage, isPending } = useNewsPageNavigation(totalPages);
  const [slideDirection, setSlideDirection] = useState("forward");
  const pointerState = useRef({
    active: false,
    x: 0,
    y: 0,
    type: null,
  });
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = window.sessionStorage.getItem("newsNavDirection");
    if (stored === "forward" || stored === "backward") {
      setSlideDirection(stored);
      window.sessionStorage.removeItem("newsNavDirection");
    } else {
      setSlideDirection("forward");
    }
  }, [page]);

  const resetPointer = () => {
    pointerState.current = {
      active: false,
      x: 0,
      y: 0,
      type: null,
    };
  };

  const handlePointerDown = (event) => {
    pointerState.current = {
      active: true,
      x: event.clientX,
      y: event.clientY,
      type: event.pointerType,
    };
  };

  const handlePointerUp = (event) => {
    if (!pointerState.current.active || isPending) return;

    const deltaX = event.clientX - pointerState.current.x;
    const deltaY = event.clientY - pointerState.current.y;

    if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > MIN_SWIPE_DISTANCE) {
      if (deltaX < 0) {
        goToPage(currentPage + 1);
      } else {
        goToPage(currentPage - 1);
      }
    }

    resetPointer();
  };

  const animationClass =
    slideDirection === "backward" ? "animate-slide-from-left" : "animate-slide-from-right";

  return (
    <div
      ref={containerRef}
      id="list"
      className={`
        max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-16
        animate-fade-in
        ${animationClass}
        ${isPending ? "pointer-events-none opacity-60" : ""}
      `}
      onPointerDown={handlePointerDown}
      onPointerUp={handlePointerUp}
      onPointerLeave={resetPointer}
      onPointerCancel={resetPointer}
      data-direction={slideDirection}
      aria-live="polite"
      style={{ touchAction: "pan-y" }}
    >
      {children}
    </div>
  );
}
