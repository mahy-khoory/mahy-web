"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { getAuthToken, isTokenExpired, clearAuth } from "@/utils/authToken";

export default function useAuthGuard() {
  const router = useRouter();

  useEffect(() => {
    const token = getAuthToken();

    if (!token || isTokenExpired(token)) {
      clearAuth();
      router.replace("/portal/login");
    }
  }, [router]);
}