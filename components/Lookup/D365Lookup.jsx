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
  disabled = false,
  displayValue,
  enableSearch = false,
  searchPlaceholder = "Search...",
  searchKeys,
  allowCustomValue = false,
}) {
  const [open, setOpen] = useState(false);
  const containerRef = useRef(null);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    const handler = (e) => {
      if (!containerRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (!allowCustomValue) return;

    // keep input synced with external value
    setInputValue(value ?? "");
  }, [value, allowCustomValue]);

  useEffect(() => {
    if (disabled) setOpen(false);
  }, [disabled]);

  const selected = data.find((d) => d.value === value);
  const textToShow =
    selected?.label ||
    displayValue ||
    (value ? String(value) : "") ||
    placeholder;

  const [query, setQuery] = useState("");

  useEffect(() => {
    if (!open) setQuery(""); // reset when closed
  }, [open]);

  const keysToSearch = useMemo(() => {
    if (Array.isArray(searchKeys) && searchKeys.length > 0) return searchKeys;

    const colKeys = columns?.map((c) => c.key).filter(Boolean) || [];
    return Array.from(new Set(["label", "value", "description", ...colKeys]));
  }, [searchKeys, columns]);

  const filteredData = useMemo(() => {
    if (!enableSearch) return data;
    const q = query.trim().toLowerCase();
    if (!q) return data;

    return data.filter((row) => {
      return keysToSearch.some((k) => {
        const v = row?.[k];
        if (v === undefined || v === null) return false;
        return String(v).toLowerCase().includes(q);
      });
    });
  }, [data, query, enableSearch, keysToSearch]);

  return (
    <div ref={containerRef} className="relative w-full">
      <label className="block text-sm mb-1">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* <div
        onClick={() => {
          if (disabled) return;
          onOpen?.();
          setOpen(true);
        }}
        className={`
    relative h-[36px] px-2 pr-7 flex items-center
    border bg-white text-sm cursor-pointer
  ${disabled ? "cursor-not-allowed opacity-60 bg-gray-50" : "cursor-pointer"}
    ${error ? "border-red-500" : "border-[#C8C6C4]"}  `}
        style={{ borderRadius: "2px" }}
      >
        {/* <span className={selected ? "text-gray-900" : "text-gray-400"}>
          {selected?.label || placeholder}
        </span> */}
      {/* <span className={value ? "text-gray-900" : "text-gray-400"}> */}
      {/* {textToShow} */}
      {/* </span> */}

      {/* <ChevronDown className="absolute right-2 h-4 w-4 text-gray-600" /> */}
      {/* </div> */}

      {allowCustomValue ? (
        <input
          value={inputValue}
          onChange={(e) => {
            setInputValue(e.target.value);
            onChange(e.target.value);
          }}
          onFocus={() => {
            if (disabled) return;
            onOpen?.();
            setOpen(true);
          }}
          disabled={disabled}
          placeholder={placeholder}
          className={`
      h-[36px] w-full px-2 pr-7
      border text-sm outline-none
      ${disabled ? "bg-gray-50 cursor-not-allowed opacity-60" : "bg-white"}
      ${error ? "border-red-500" : "border-[#C8C6C4]"}
    `}
          style={{ borderRadius: "2px" }}
        />
      ) : (
        <div
          onClick={() => {
            if (disabled) return;
            onOpen?.();
            setOpen(true);
          }}
          className={`
      relative h-[36px] px-2 pr-7 flex items-center
      border bg-white text-sm cursor-pointer
      ${disabled ? "cursor-not-allowed opacity-60 bg-gray-50" : "cursor-pointer"}
      ${error ? "border-red-500" : "border-[#C8C4C6]"}
    `}
          style={{ borderRadius: "2px" }}
        >
          <span className={value ? "text-gray-900" : "text-gray-400"}>
            {textToShow}
          </span>
          <ChevronDown className="absolute right-2 h-4 w-4 text-gray-600" />
        </div>
      )}

      <AnimatePresence>
        {open && !disabled && (
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
            {enableSearch && (
              <div className="p-2 border-b border-[#C8C6C4] bg-white sticky top-0 z-10">
                <input
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  placeholder={searchPlaceholder}
                  className="w-full h-8 px-2 text-sm border border-[#C8C6C4] outline-none"
                  style={{ borderRadius: "2px" }}
                  onKeyDown={(e) => {
                    e.stopPropagation();
                  }}
                />
              </div>
            )}
            <div
              className="max-h-52 overflow-auto"
              onWheel={(e) => {
                const el = e.currentTarget;
                const scrollTop = el.scrollTop;
                const scrollHeight = el.scrollHeight;
                const clientHeight = el.clientHeight;
                const deltaY = e.deltaY;

                const isAtTop = scrollTop === 0 && deltaY < 0;
                const isAtBottom = scrollTop + clientHeight >= scrollHeight && deltaY > 0;

                if (isAtTop || isAtBottom) {
                  e.preventDefault(); // stop page from scrolling
                }

                e.stopPropagation(); // stop event bubbling
              }}
            >
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
                  ) : filteredData.length === 0 ? (
                    <tr>
                      <td
                        colSpan={columns.length}
                        className="px-3 py-4 text-center text-gray-500"
                      >
                        No results
                      </td>
                    </tr>
                  ) : (
                    filteredData.map((row) => {
                      const isSelected = row.value === value;
                      return (
                        <tr
                          key={row.id ?? row.value}
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
                {/* <tbody>
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
                   filteredData.map((row) => {
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
                </tbody> */}
              </table>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
