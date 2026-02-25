"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function OtpModal({ email, onVerify, onClose }) {
  const [otp, setOtp] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await onVerify(otp);
    } catch (err) {
      setError(err.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="bg-white rounded-2xl w-full max-w-sm p-6 shadow-xl"
      >
        <h2 className="text-lg font-semibold text-slate-900">
          Verify your email
        </h2>
        <p className="text-sm text-slate-500 mt-1">
          Enter the 6-digit code sent to <b>{email}</b>
        </p>

        <form onSubmit={submit} className="mt-6 space-y-4">
          <input
            value={otp}
            onChange={(e) => setOtp(e.target.value)}
            placeholder="Enter OTP"
            maxLength={6}
            className="w-full text-center tracking-widest text-lg px-4 py-3 border rounded-xl focus:ring-2 focus:ring-[var(--accent-color)]"
          />

          {error && (
            <p className="text-sm text-red-500 text-center">{error}</p>
          )}

          <button
            disabled={loading}
            className="w-full py-3 rounded-xl text-white font-medium b-base hover:b-base-hover transition"
          >
            {loading ? "Verifying..." : "Verify & Continue"}
          </button>
        </form>

        <button
          onClick={onClose}
          className="block mx-auto mt-4 text-xs text-slate-400 hover:underline"
        >
          Cancel
        </button>
      </motion.div>
    </div>
  );
}