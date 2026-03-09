"use client";

import { useState } from "react";

export default function ChatInput({
  placeholder,
  onSubmit,
  disabled = false,
  type = "text",
  data,
}) {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");

  function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  }

  function handleChange(event) {
    let input = event.target.value;
    if (type === "phone") {
      input = input.replace(/[^\d+]/g, "");
    }

    setValue(input);
    setError("");
  }

  function handleSubmit(event) {
    event.preventDefault();
    const trimmed = value.trim();

    if (!trimmed || disabled) return;

    if (type === "email" && !isValidEmail(trimmed)) {
      setError("Please enter a valid email address");
      return;
    }

    if (type === "phone" && trimmed.replace(/\D/g, "").length < 7) {
      setError("Please enter a valid phone number");
      return;
    }

    onSubmit(trimmed);
    setValue("");
    setError("");
  }

  const canSend =
    value.trim().length > 0 &&
    !disabled &&
    (type !== "email" || isValidEmail(value.trim())) &&
    (type !== "phone" || value.trim().length >= 7);

  return (
    <div className="space-y-1.5">
      <form
        onSubmit={handleSubmit}
        className="flex items-center gap-3 rounded-2xl border border-slate-200/90 bg-white px-5 py-3 shadow-[0_12px_30px_rgba(15,23,42,0.08)] transition focus-within:border-slate-400 focus-within:ring-2 focus-within:ring-slate-100"
      >
        <input
          type={type === "phone" ? "tel" : type === "email" ? "email" : "text"}
          className="flex-1 bg-transparent text-[15px] font-medium text-slate-900 placeholder:text-slate-400 focus:outline-none disabled:text-slate-400"
          placeholder={placeholder}
          value={value}
          disabled={disabled}
          onChange={handleChange}
        />

        <button
          type="submit"
          aria-label="Send message"
          disabled={!canSend}
          className={`inline-flex h-11 min-w-[3rem] items-center justify-center gap-2 rounded-full bg-slate-900 px-5 text-sm font-semibold text-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 ${
            canSend
              ? "hover:-translate-y-0.5"
              : "opacity-40 hover:translate-y-0"
          }`}
        >
          <span className="hidden sm:inline">{data.send}</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="h-4 w-4"
          >
            <path d="M22 2 11 13" />
            <path d="m22 2-7 20-4-9-9-4 20-7z" />
          </svg>
        </button>
      </form>

      {error && <p className="px-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}
