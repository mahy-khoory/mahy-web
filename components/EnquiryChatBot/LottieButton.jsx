"use client";

export default function LottieButton({ onClick, onInteract, locale }) {
  const triggerInteraction = () => {
    if (typeof onInteract === "function") {
      onInteract();
    }
  };

  return (
    <button
      onClick={(event) => {
        triggerInteraction();
        onClick?.(event);
      }}
      onMouseEnter={triggerInteraction}
      onFocus={triggerInteraction}
      onTouchStart={triggerInteraction}
      className="relative flex h-14 w-14 items-center justify-center
        rounded-full bg-linear-to-br from-slate-900 to-slate-800 shadow-[0_20px_45px_rgba(15,23,42,0.35)] transition hover:-translate-y-0.5 focus:outline-none"
      aria-label="Open MAHYRA assistant"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="white"
        strokeWidth="2"
        className="h-5 w-5"
      >
        <path d="M21 12a9 9 0 0 1-10 9 9.6 9.6 0 0 1-4-.9L3 21l.9-4a9.6 9.6 0 0 1-.9-4 9 9 0 1 1 18 0Z" />
        <path d="M8 10h8" />
        <path d="M8 14h5" />
      </svg>
      <span className={`absolute -top-1 ${locale === "ar" ? "-left-1" : "-right-1"} -right-1 h-3.5 w-3.5 rounded-full bg-emerald-400 ring-2 ring-white`} />
    </button>
  );
}
