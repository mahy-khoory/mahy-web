"use client";

import React, { useEffect, useMemo, useRef, useState } from "react";
import { FormField } from "@/components/form/FormField";

function pad(num) {
  return String(num).padStart(2, "0");
}

function clamp(n, min, max) {
  return Math.max(min, Math.min(max, n));
}

/**
 * Convert pointer position to dial value (0..max-1)
 * 12 o'clock = 0, clockwise increments
 */
function angleToValue(angleRad, max) {
  // Normalize so 12 o'clock is 0
  // atan2 gives -pi..pi with 0 at +x axis; we want 0 at -y axis.
  const a = (angleRad + Math.PI / 2 + Math.PI * 2) % (Math.PI * 2);
  const step = (Math.PI * 2) / max;
  const idx = Math.round(a / step) % max;
  return idx;
}

function valueToAngle(value, max) {
  const step = (Math.PI * 2) / max;
  // value 0 at 12 o'clock => -pi/2
  return value * step - Math.PI / 2;
}

function Dial({
  mode, // "hours" | "minutes" | "seconds"
  value,
  onChange,
  max,
  label,
}) {
  const wrapRef = useRef(null);
  const draggingRef = useRef(false);

  const points = useMemo(() => {
    // 12 markers for a clock look; for minutes/seconds we still show 12 ticks + highlight value
    const markers = 12;
    const arr = [];
    for (let i = 0; i < markers; i++) {
      const angle = valueToAngle(i, markers);
      arr.push({ i, angle });
    }
    return arr;
  }, []);

  const handlePointer = (clientX, clientY) => {
    const el = wrapRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;

    const dx = clientX - cx;
    const dy = clientY - cy;

    const angle = Math.atan2(dy, dx);
    const v = angleToValue(angle, max);

    onChange(v);
  };

  const onPointerDown = (e) => {
    draggingRef.current = true;
    // capture to keep receiving moves
    e.currentTarget.setPointerCapture?.(e.pointerId);
    handlePointer(e.clientX, e.clientY);
  };

  const onPointerMove = (e) => {
    if (!draggingRef.current) return;
    handlePointer(e.clientX, e.clientY);
  };

  const onPointerUp = () => {
    draggingRef.current = false;
  };

  const angle = valueToAngle(value, max);

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-3">
        <div className="text-sm font-medium text-gray-900">{label}</div>
        <div className="text-xs text-gray-500 font-mono">
          {mode.toUpperCase()}: {pad(value)}
        </div>
      </div>

      <div
        ref={wrapRef}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerUp}
        onPointerCancel={onPointerUp}
        className="
          relative mx-auto
          h-[240px] w-[240px]
          rounded-full
          bg-gradient-to-b from-gray-50 to-white
          border border-gray-200
          shadow-sm
          select-none
          touch-none
        "
      >
        {/* ticks (clock feel) */}
        {points.map((p) => {
          const r = 110;
          const x = 120 + r * Math.cos(p.angle);
          const y = 120 + r * Math.sin(p.angle);
          return (
            <div
              key={p.i}
              className="absolute -translate-x-1/2 -translate-y-1/2"
              style={{ left: x, top: y }}
            >
              <div className="h-2 w-2 rounded-full bg-gray-200" />
            </div>
          );
        })}

        {/* center */}
        <div className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-black" />

        {/* hand */}
        <div
          className="absolute left-1/2 top-1/2 origin-left"
          style={{
            width: 96,
            height: 2,
            transform: `translateY(-50%) rotate(${angle}rad)`,
          }}
        >
          <div className="h-[2px] w-full bg-black/90 rounded-full" />
          <div className="absolute right-0 top-1/2 h-4 w-4 -translate-y-1/2 rounded-full bg-black shadow" />
        </div>

        {/* quick buttons around dial (optional but feels premium) */}
        <div className="absolute inset-x-0 bottom-4 flex justify-center gap-2">
          {[-1, +1].map((step) => (
            <button
              key={step}
              type="button"
              onClick={() => onChange((value + max + step) % max)}
              className="
                rounded-full border border-gray-200 bg-white
                px-3 py-1 text-xs text-gray-700
                hover:bg-gray-50
              "
            >
              {step === -1 ? "−" : "+"}
            </button>
          ))}
        </div>
      </div>

      {/* helper */}
      <div className="mt-3 text-xs text-gray-500 text-center">
        Drag on the dial or click to set {mode}.
      </div>
    </div>
  );
}

/**
 * Lenis fix:
 * - When picker is open, optionally stop Lenis scroll to avoid interference.
 * - Also stop wheel/touch events from bubbling to Lenis / page.
 *
 * This is safe even if Lenis isn't present.
 */
function useLenisLock(isLocked) {
  useEffect(() => {
    // Try common patterns: window.lenis or window.__lenis, etc.
    const lenis =
      (typeof window !== "undefined" && (window.lenis || window.__lenis)) ||
      null;

    if (!lenis) return;

    try {
      if (isLocked) lenis.stop?.();
      else lenis.start?.();
    } catch {
      // ignore
    }

    // On unmount, ensure start
    return () => {
      try {
        lenis.start?.();
      } catch {
        // ignore
      }
    };
  }, [isLocked]);
}

export function TimePickerField({ label, value, onChange, error }) {
  const [open, setOpen] = useState(false);
  const [mode, setMode] = useState("hours"); // hours | minutes | seconds

  const [hours, setHours] = useState(value?.hours ?? 12);
  const [minutes, setMinutes] = useState(value?.minutes ?? 0);
  const [seconds, setSeconds] = useState(value?.seconds ?? 0);

  // Lock Lenis while picker open (prevents stuck/scroll fight)
  useLenisLock(open);

  const commit = (h, m, s) => {
    const finalValue = {
      hours: clamp(h, 0, 23),
      minutes: clamp(m, 0, 59),
      seconds: clamp(s, 0, 59),
      formatted: `${pad(clamp(h, 0, 23))}:${pad(clamp(m, 0, 59))}:${pad(clamp(s, 0, 59))}`,
    };
    onChange(finalValue);
  };

  // Keep local state in sync if external value changes
  useEffect(() => {
    if (!value) return;
    setHours(value.hours ?? 12);
    setMinutes(value.minutes ?? 0);
    setSeconds(value.seconds ?? 0);
  }, [value?.hours, value?.minutes, value?.seconds]);

  const display = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;

  const stopScrollBubble = (e) => {
    // Lenis / GSAP scroll hijacking fix:
    e.stopPropagation();
  };

  return (
    <FormField label={label} error={error}>
      {/* Display */}
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="
          w-full h-10 mt-1 px-3
          bg-gray-50 border border-gray-200 rounded-md
          text-sm text-left
          flex items-center justify-between
          hover:bg-gray-100
        "
      >
        <span className="font-mono text-gray-900">{display}</span>
        <span className="text-xs text-gray-400">🕒 Pick time</span>
      </button>

      {/* Picker */}
      {open && (
        <div
          className="
      mt-3
    relative
    w-full
    max-w-[360px]
    mx-auto
    rounded-2xl
    border border-gray-200
    bg-white
    shadow-lg
    p-5
    overflow-hidden
    "
          onWheel={stopScrollBubble}
          onTouchMove={stopScrollBubble}
        >
          {/* Top tabs */}
          <div className="flex items-center justify-between gap-2">
            <div className="flex gap-2">
              {["hours", "minutes", "seconds"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`
                    h-9 px-4 rounded-full text-sm border
                    ${
                      mode === m
                        ? "bg-black text-white border-black"
                        : "bg-gray-50 text-gray-700 border-gray-200 hover:bg-gray-100"
                    }
                  `}
                >
                  {m[0].toUpperCase() + m.slice(1)}
                </button>
              ))}
            </div>

            {/* <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-9 px-4 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:bg-gray-50"
            >
              Done
            </button> */}
          </div>

          <div className="mt-5">
            {mode === "hours" && (
              <Dial
                mode="hours"
                label="Select Hour (0–23)"
                value={hours}
                max={24}
                onChange={(h) => {
                  setHours(h);
                  commit(h, minutes, seconds);
                }}
              />
            )}

            {mode === "minutes" && (
              <Dial
                mode="minutes"
                label="Select Minutes (0–59)"
                value={minutes}
                max={60}
                onChange={(m) => {
                  setMinutes(m);
                  commit(hours, m, seconds);
                }}
              />
            )}

            {mode === "seconds" && (
              <Dial
                mode="seconds"
                label="Select Seconds (0–59)"
                value={seconds}
                max={60}
                onChange={(s) => {
                  setSeconds(s);
                  commit(hours, minutes, s);
                }}
              />
            )}
          </div>

          {/* Footer */}
          <div className="mt-5 flex items-center justify-between">
            <div className="text-xs text-gray-500">
              Selected:{" "}
              <span className="font-mono text-gray-800">{display}</span>
            </div>

            <button
              type="button"
              onClick={() => setOpen(false)}
              className="h-9 px-4 rounded-full border border-gray-200 bg-white text-sm text-gray-700 hover:bg-gray-50"
            >
              Done
            </button>
            <button
              type="button"
              onClick={() => {
                setHours(12);
                setMinutes(0);
                setSeconds(0);
                commit(12, 0, 0);
              }}
              className="text-xs text-gray-700 hover:text-gray-900 underline underline-offset-4"
            >
              Reset
            </button>
          </div>
        </div>
      )}
    </FormField>
  );
}
