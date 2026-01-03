import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

function ChatMessages({ messages, isTyping, data, locale }, ref) {
  const chatRef = useRef(null);

  useImperativeHandle(ref, () => ({
    scrollToTop() {
      if (!chatRef.current) return;
      chatRef.current.scrollTo({ top: 0, behavior: "smooth" });
    },
    scrollToBottom() {
      if (!chatRef.current) return;
      chatRef.current.scrollTo({ top: chatRef.current.scrollHeight, behavior: "smooth" });
    },
  }));

  useEffect(() => {
    if (!chatRef.current) return;
    chatRef.current.scrollTop = chatRef.current.scrollHeight;
  }, [messages, isTyping]);

  return (
    <section
      ref={chatRef}
      aria-live="polite"
      data-lenis-prevent
      className="custom-scrollbar flex-1 overflow-y-auto bg-slate-50 px-5 py-5 sm:px-6 sm:py-6"
    >
      <div className="space-y-4">
        {messages.map((msg, i) => {
          const isBot = msg.from === "bot";
          const alignment = (locale === "ar")
            ? (isBot ? "flex-row-reverse" : "flex-row")
            : (isBot ? "flex-row" : "flex-row-reverse");
          const bubbleClass = isBot
            ? "bg-white text-slate-800 border border-slate-100"
            : "bg-slate-900 text-white shadow-lg shadow-slate-900/20";
          const badgeClass = isBot
            ? "bg-slate-200 text-slate-600"
            : "bg-slate-900 text-white";
          const textAlignment = (isBot && locale !== "ar") ? "text-left" : "text-right";

          return (
            <article
              key={`${msg.text}-${i}`}
              className={`flex w-full items-end gap-3 ${alignment} animate-message-in sm:gap-4`}
            >
              <div
                className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-2xl text-[11px] font-semibold uppercase tracking-wide sm:h-10 sm:w-10 ${badgeClass}`}
              >
                {isBot ? "MK" : data.you}
              </div>

              <div
                className={`max-w-[82%] rounded-[26px] px-4 py-3 text-sm leading-relaxed shadow-sm shadow-slate-900/5 ${bubbleClass} ${textAlignment}`}
              >
                <p
                  className={`text-[11px] font-semibold uppercase tracking-widest ${isBot ? "text-slate-500" : "text-white/70"
                    }`}
                >
                  {isBot ? data.concierge : data.you}
                </p>
                <p className="mt-2 whitespace-pre-line text-[15px] leading-relaxed">
                  {msg.text}
                </p>
              </div>
            </article>
          );
        })}

        {isTyping && (
          <div className="flex items-end gap-3 sm:gap-4">
            <div className="flex h-9 w-9 items-center justify-center rounded-2xl bg-slate-200 text-[11px] font-semibold uppercase tracking-wide text-slate-600 sm:h-10 sm:w-10">
              MK
            </div>
            <div className="max-w-[75%] rounded-[26px] border border-slate-100 bg-white px-4 py-3 shadow-sm shadow-slate-900/5">
              <div className="flex gap-1.5">
                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:.15s]" />
                <span className="h-2 w-2 animate-bounce rounded-full bg-slate-400 [animation-delay:.3s]" />
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default forwardRef(ChatMessages);
