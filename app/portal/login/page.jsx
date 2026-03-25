"use client";

import { motion } from "framer-motion";
import { useRouter, useSearchParams } from "next/navigation";
import Cookies from "js-cookie";
import { useState } from "react";
import OtpModal from "@/components/portal/OtpModal";
import { api } from "@/lib/api/api";

export default function PortalLogin() {
  const router = useRouter();
  const params = useSearchParams();

  const redirect = params.get("redirect") || "/contact-us";

  let title = "MAHY Portal";

  if (redirect.includes("vendor-registration")) {
    title = "Vendor Registration";
  } else if (redirect.includes("customer-registration")) {
    title = "Customer Registration";
  }

  const [mode, setMode] = useState("login");
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [otpOpen, setOtpOpen] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k) => (e) =>
    setForm({ ...form, [k]: e.target.value });

  const afterAuth = () => {
    router.push(`/portal/company-select?redirect=${redirect}`);
  };

  const submit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (mode === "login") {
        const res = await api("api/auth/login", {
          email: form.email,
          password: form.password,
        });

        Cookies.set("mahy_portal_auth", res.data.token, { expires: 1 });
        afterAuth();
      } else {
        await api("api/auth/signup", {
          name: form.name,
          email: form.email,
          password: form.password,
        });

        setOtpOpen(true);
      }
    } catch (err) {
      alert(err.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const verifyOtp = async (otp) => {
    await api("api/auth/verify-otp", {
      email: form.email,
      otp,
    });

    const login = await api("api/auth/login", {
      email: form.email,
      password: form.password,
    });

    Cookies.set("mahy_portal_auth", login.data.token, { expires: 1 });
    setOtpOpen(false);
    afterAuth();
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-[#f3f9fc] to-white px-4">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-8"
        >
          <h1 className="text-2xl font-semibold text-center">
            {title}
          </h1>

          <div className="flex bg-slate-100 rounded-full p-1 my-6">
            {["login", "signup"].map((t) => (
              <button
                key={t}
                onClick={() => setMode(t)}
                className={`flex-1 py-2 rounded-full text-sm font-medium ${mode === t
                  ? "bg-white shadow"
                  : "text-slate-500"
                  }`}
              >
                {t === "login" ? "Login" : "Sign up"}
              </button>
            ))}
          </div>

          <form onSubmit={submit} className="space-y-4">
            {mode === "signup" && (
              <input
                value={form.name}
                onChange={set("name")}
                placeholder="Full name"
                required
                className="w-full px-4 py-3 border rounded-xl"
              />
            )}

            <input
              value={form.email}
              onChange={set("email")}
              type="email"
              placeholder="Email"
              required
              className="w-full px-4 py-3 border rounded-xl"
            />

            <input
              value={form.password}
              onChange={set("password")}
              type="password"
              placeholder="Password"
              required
              className="w-full px-4 py-3 border rounded-xl"
            />

            <button
              disabled={loading}
              className="w-full py-3 rounded-xl text-white font-medium b-base"
            >
              {loading
                ? "Please wait..."
                : mode === "login"
                  ? "Continue"
                  : "Create account"}
            </button>
          </form>
        </motion.div>
      </div>

      {otpOpen && (
        <OtpModal
          email={form.email}
          onVerify={verifyOtp}
          onClose={() => setOtpOpen(false)}
        />
      )}
    </>
  );
}