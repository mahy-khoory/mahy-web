"use client";

import { useEffect, useState } from "react";

export const useDocuments = (statusFilter, authReady) => {
  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchDocuments = async (showLoader = true) => {
    try {
      if (showLoader) setLoading(true);

      const res = await fetch(
        `${API}api/gceo/documents?status=${statusFilter}`
      );

      const data = await res.json();

      if (!res.ok || !data.success) {
        throw new Error(data?.message || "Failed to fetch documents");
      }

      setDocuments(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.error("Fetch documents error:", err);
    } finally {
      if (showLoader) setLoading(false);
    }
  };

  useEffect(() => {
    if (!authReady) return;
    fetchDocuments();
  }, [statusFilter, authReady]);

  return {
    documents,
    loading,
    refetch: fetchDocuments,
  };
};