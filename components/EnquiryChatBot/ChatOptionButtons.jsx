export default function ChatOptionButtons({ options, onSelect, className = "", locale }) {
  if (!options?.length) return null;

  const needsScroll = options.length > 5;
  const scrollClasses = needsScroll ? "max-h-60 overflow-y-auto pr-1 custom-scrollbar" : "";

  return (
    <div className={`space-y-2 ${scrollClasses} ${className}`}>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => onSelect(option)}
          className={`w-full rounded-[22px] border border-slate-200/90 bg-white px-5 py-3 ${locale === "ar" ? "text-right" : "text-left"}  
          text-[15px] font-medium text-slate-700 transition hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-50 
          focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200`}>
          {option}
        </button>
      ))}
    </div>
  );
}
