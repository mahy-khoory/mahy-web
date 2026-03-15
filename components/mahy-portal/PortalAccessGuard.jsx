"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useAuth } from "@/context/AuthContext";

export default function PortalAccessGuard({ children }) {
  const router = useRouter();
  const { user, initializing, loading, logout } = useAuth();

  const handleGoBack = async (event) => {
    event.preventDefault();

    try {
      await logout();
    } finally {
      router.push("/");
    }
  };

  const profileIncomplete =
    Boolean(user) &&
    (typeof user.department !== "string" ||
      user.department.trim() === "" ||
      typeof user.company !== "string" ||
      user.company.trim() === "");

  if (initializing || loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b1120] text-white">
        <p className="text-sm text-white/60">Loading portal…</p>
      </div>
    );
  }

  if (profileIncomplete) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#0b1120] text-white p-6">
        <div className="w-full max-w-lg rounded-3xl border border-white/10 bg-black/60 px-8 py-10 text-center shadow-2xl backdrop-blur-lg">
          <p className="text-2xl font-semibold">Portal temporarily disabled</p>
          <p className="mt-4 text-base text-white/70">
            Please contact IT and set up your company and department on Azure.
          </p>
          <Link
            href="/"
            onClick={handleGoBack}
            className="mt-8 inline-flex items-center justify-center rounded-full bg-white/10 px-6 py-2 text-sm font-medium text-white transition hover:bg-white/20"
          >
            Go back home
          </Link>
        </div>
      </div>
    );
  }

  return children;
}
