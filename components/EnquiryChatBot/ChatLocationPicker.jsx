"use client";

import dynamic from "next/dynamic";

const ChatLocationPicker = dynamic(
  () => import("./ChatLocationPickerMap"),
  {
    ssr: false,
    loading: () => (
      <div className="rounded-3xl border border-slate-100 bg-white px-5 py-6 text-sm text-slate-500 shadow-sm shadow-slate-900/5">
        Loading map…
      </div>
    ),
  }
);

export default ChatLocationPicker;
