"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function D365Lookup({
  label,
  value,
  onChange,
  data = [],
  columns = [],
  placeholder = "",
  required,
  error,
  loading = false,
  onOpen,
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const selected = data.find((d) => d.value === value);

  return (
    <div ref={containerRef} className="relative w-full">
      <label className="block text-sm mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      <div
        onClick={() => {
          onOpen?.();
          setOpen(true);
        }}
        className={`
    relative h-[36px] px-2 pr-7 flex items-center
    border bg-white text-sm cursor-pointer
    ${error ? "border-red-500" : "border-[#C8C6C4]"}
  `}
        style={{ borderRadius: "2px" }}
      >
        <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected?.label || placeholder}
        </span>

        <ChevronDown className="absolute right-2 h-4 w-4 text-gray-600" />
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 2 }}
            transition={{ duration: 0.12 }}
            className="
              absolute z-50 mt-[2px] w-full
              bg-white border border-[#C8C6C4]
            "
            style={{ borderRadius: "2px" }}
          >
            <div className="max-h-52 overflow-auto">
              <table className="w-full text-sm border-collapse">
                <thead className="bg-[#F3F2F1] border-b border-[#C8C6C4] sticky top-0">
                  <tr>
                    {columns.map((col) => (
                      <th
                        key={col.key}
                        className="px-2 py-[6px] text-left font-medium text-gray-700"
                      >
                        {col.label}
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {loading ? (
                    <tr>
                      <td
                        colSpan={columns.length}
                        className="px-3 py-4 text-center"
                      >
                        Loading...
                      </td>
                    </tr>
                  ) : (
                    data.map((row) => {
                      const isSelected = row.value === value;
                      return (
                        <tr
                          key={row.id}
                          onClick={() => {
                            onChange(row.value);
                            setOpen(false);
                          }}
                          className={`
                            cursor-pointer
                            ${isSelected ? "bg-[#C7E0F4]" : ""}
                            hover:bg-[#E5F1FB]
                          `}
                        >
                          {columns.map((col) => (
                            <td
                              key={col.key}
                              className="px-2 py-[6px] text-gray-900"
                            >
                              {row[col.key]}
                            </td>
                          ))}
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
