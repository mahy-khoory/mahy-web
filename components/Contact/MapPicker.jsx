"use client";

import dynamic from "next/dynamic";

const MapPicker = dynamic(
  () => import("./MapPicker.client"),
  {
    ssr: false,
    loading: () => (
      <div className="h-[320px] w-full rounded-xl border border-slate-200 bg-slate-100 animate-pulse" />
    ),
  }
);

export default MapPicker;