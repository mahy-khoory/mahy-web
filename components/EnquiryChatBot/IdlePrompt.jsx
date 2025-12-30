"use client";

export default function IdlePrompt({ visible, onOpen, data, locale }) {
  if (!visible) return null;

  return (
    <div
      className="
        relative
        w-full
        rounded-[26px]
        border border-white/15
        bg-gradient-to-br
        from-slate-900/95
        via-slate-900/90
        to-slate-800/80
        px-4
        py-4
        text-slate-50
        backdrop-blur-2xl
        shadow-[0_22px_50px_rgba(2,6,23,0.55)]
        animate-[fadeUp_0.25s_ease-out]
        pointer-events-auto
      "
    >
      <div className="flex items-center gap-3 pr-1">
        <div className="flex h-10 w-10 items-center justify-center rounded-[18px] bg-white/10 text-white shadow-[0_10px_30px_rgba(15,23,42,0.5)] ring-1 ring-white/25">
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.6"
          >
            <path d="M21 12a9 9 0 0 1-10 9 9.6 9.6 0 0 1-4-.9L3 21l.9-4a9.6 9.6 0 0 1-.9-4 9 9 0 1 1 18 0Z" />
            <path d="M8 11h8" strokeLinecap="round" />
            <path d="M8 15h5" strokeLinecap="round" />
          </svg>
        </div>
        <div className="space-y-0.5">
          <p className="text-[10px] font-semibold uppercase tracking-wider text-slate-200">
            {data.heading1}
          </p>
          <p className="text-base font-semibold text-white">
            {data.heading2}
          </p>
          {/* <p className="text-[11px] text-slate-300/90">
            We usually respond in under a minute.
          </p> */}
        </div>
      </div>

      <button
        onClick={onOpen}
        className="
          mt-4
          items-center
          justify-between
          rounded-full
          border border-white/20
          bg-white/10
          px-3.5
          py-1.5
          text-[11px]
          font-semibold
          uppercase
          tracking-widest
          text-white
          transition
          hover:bg-white/20
          focus-visible:outline-none
          focus-visible:ring-2
          focus-visible:ring-white/60
          flex gap-3
        "
      >
        {data.cta}
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_0_2px_rgba(255,255,255,0.35)]" />
      </button>

      <div
        className={`pointer-events-none absolute -bottom-5 ${locale === "ar" ? "left-4 sm:left-6" : "right-4 sm:right-6"} 
          flex flex-col items-start gap-1`} aria-hidden="true">
        <span className="h-2 w-2 rounded-full bg-white/85" />
        <span className="ml-1 h-1.5 w-1.5 rounded-full bg-white/70" />
        <span className="ml-2 h-1 w-1 rounded-full bg-white/60" />
      </div>
    </div>
  );
}
