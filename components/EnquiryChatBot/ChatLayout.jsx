export default function ChatLayout({ children, onClose, className = "", data }) {
  return (
    <div
      data-lenis-prevent
      className={`flex h-full flex-col overflow-hidden rounded-[32px] border border-slate-100/80 bg-white/95 shadow-[0_25px_70px_rgba(15,23,42,0.15)] ${className}`}
    >
      <header className="border-b border-slate-100/80 bg-white/85 px-5 py-4 backdrop-blur-sm sm:px-6 sm:py-5">
        <div className="flex items-start justify-between gap-3">
          <div className="space-y-2">
            <p className="text-[11px] font-semibold uppercase tracking-widest text-slate-400">
              {data.title}
            </p>
            <h1 className="text-lg font-semibold leading-snug text-slate-900 sm:text-xl">
              {data.welcome}
            </h1>
          </div>

          {onClose && (
            <button
              type="button"
              onClick={onClose}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200/80 bg-white/80 text-slate-500 transition hover:border-slate-300 hover:bg-slate-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200"
            >
              <span className="sr-only">Close enquiry assistant</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="h-5 w-5"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          )}
        </div>
      </header>
      {children}
    </div>
  );
}
