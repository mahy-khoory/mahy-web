"use client";

import React, { useState } from "react";
import { FiUploadCloud, FiFileText } from "react-icons/fi";
import { toast } from "react-toastify";

export default function FileUploadField({ label, register, error, upload }) {
  const [fileName, setFileName] = useState(null);

  return (
    <div>
      <label className="mb-1 block text-sm font-medium text-slate-700">{label}</label>

      <label
        className="
          relative
          flex
          cursor-pointer
          items-center
          justify-center
          gap-4
          rounded-lg
          border
          border-dashed
          border-slate-300
          bg-slate-50
          px-6
          py-6
          text-center
          transition
          hover:border-[#3F3C8F]
          hover:bg-slate-100
        "
      >
        <input
          type="file"
          className="absolute inset-0 cursor-pointer opacity-0"
          accept=".jpg,.jpeg,.png,.pdf"
          multiple={false}
          {...register("attachment")}
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (!file) return;

            const allowed = ["image/jpeg", "image/png", "application/pdf"];
            if (!allowed.includes(file.type)) {
              toast.error("Only JPG, JPEG, PNG, or PDF files are allowed.");
              return;
            }
            if (file.size > 5 * 1024 * 1024) {
              toast.error("File must be less than 5MB.");
              return;
            }
            setFileName(file.name);
          }}
        />

        {!fileName ? (
          <>
            <FiUploadCloud className="text-2xl text-slate-500" />
            <div className="text-sm text-slate-600">
              <span className="font-medium text-[#3F3C8F]">
                {upload[0]}
              </span>{" "}
              {upload[1]}
              <div className="mt-1 text-xs text-slate-500">
                {upload[2]}
              </div>
            </div>
          </>
        ) : (
          <>
            <FiFileText className="text-xl text-[#3F3C8F]" />
            <div className="text-sm font-medium text-slate-700">
              {fileName}
            </div>
          </>
        )}
      </label>

      <div className="min-h-[18px] mt-1">
        {error && <p className="text-xs text-red-500">{error.message}</p>}
      </div>
    </div>
  );
}
