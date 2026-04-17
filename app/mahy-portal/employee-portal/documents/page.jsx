"use client";

import { useAuth } from "@/context/AuthContext";
import { useCallback, useEffect, useRef, useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";

const parseDateValue = (value) => {
  if (!value) return null;

  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const matchesAmountFilter = (amount, filter) => {
  if (filter === "ALL") return true;

  const numericAmount = Number(amount);

  if (!Number.isFinite(numericAmount)) {
    return filter === "NO_AMOUNT";
  }

  if (filter === "UNDER_1000") return numericAmount < 1000;
  if (filter === "1000_TO_9999")
    return numericAmount >= 1000 && numericAmount <= 9999;
  if (filter === "10000_TO_49999")
    return numericAmount >= 10000 && numericAmount <= 49999;
  if (filter === "50000_PLUS") return numericAmount >= 50000;

  return false;
};

export default function DocumentsPage() {
  const { user } = useAuth();
  const uploadDateFromRef = useRef(null);
  const uploadDateToRef = useRef(null);

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [typeFilter, setTypeFilter] = useState("ALL");
  const [amountFilter, setAmountFilter] = useState("ALL");
  const [uploadDateFrom, setUploadDateFrom] = useState("");
  const [uploadDateTo, setUploadDateTo] = useState("");

  const [toast, setToast] = useState(null);

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3000);
  };

  const openNativeDatePicker = (inputRef) => {
    if (!inputRef?.current) return;

    inputRef.current.focus();

    try {
      inputRef.current.showPicker?.();
    } catch {
    }
  };

  const fetchDocuments = useCallback(async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/portal/documents/my?email=${encodeURIComponent(
          user?.email
        )}`
      );

      const data = await res.json();

      if (data.success) {
        setDocuments(data.data);
      }
    } catch (err) {
      console.error(err);
      showToast("Failed to load documents", "error");
    } finally {
      setLoading(false);
    }
  }, [user?.email]);

  useEffect(() => {
    if (user?.email) {
      fetchDocuments();
    }
  }, [fetchDocuments, user?.email]);

  const filteredDocuments = useMemo(() => {
    const fromDateValue = parseDateValue(uploadDateFrom);
    const toDateValue = parseDateValue(uploadDateTo);

    if (toDateValue) {
      toDateValue.setHours(23, 59, 59, 999);
    }

    return documents.filter((doc) => {
      const matchesSearch =
        doc.userReferenceNo?.toLowerCase().includes(search.toLowerCase()) ||
        doc.documentType?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "ALL" || doc.status === statusFilter;

      const matchesType =
        typeFilter === "ALL" || doc.documentType === typeFilter;

      const matchesAmount = matchesAmountFilter(doc.amount, amountFilter);

      const uploadedAt = doc.createdAt ? new Date(doc.createdAt) : null;
      const uploadedAtValid = uploadedAt && !Number.isNaN(uploadedAt.getTime());

      const matchesUploadDate =
        (!fromDateValue || (uploadedAtValid && uploadedAt >= fromDateValue)) &&
        (!toDateValue || (uploadedAtValid && uploadedAt <= toDateValue));

      return (
        matchesSearch &&
        matchesStatus &&
        matchesType &&
        matchesAmount &&
        matchesUploadDate
      );
    });
  }, [
    amountFilter,
    documents,
    search,
    statusFilter,
    typeFilter,
    uploadDateFrom,
    uploadDateTo,
  ]);

  const downloadFile = (id) => {
    window.open(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/portal/documents/${id}/download`,
      "_blank"
    );

    showToast("Download started");
  };

  const getStatusBadge = (status) => {
    if (status === "APPROVED")
      return "bg-green-500/20 text-green-400 border border-green-500/30";

    if (status === "REJECTED")
      return "bg-red-500/20 text-red-400 border border-red-500/30";

    return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
  };

  return (
    <div className="w-full">

      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed right-6 top-6 z-50 px-6 py-3 rounded-xl text-sm font-medium shadow-lg bg-green-600 text-white"
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="text-2xl font-semibold mb-6">My Documents</h1>

      <div className="flex flex-wrap gap-4 mb-6">

        <input
          placeholder="Search reference..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm w-64"
        />

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm"
        >
          <option value="ALL">All Status</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
          <option value="PENDING">Pending</option>
        </select>

        <select
          value={typeFilter}
          onChange={(e) => setTypeFilter(e.target.value)}
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm"
        >
          <option value="ALL">All Types</option>
          <option value="PR">PR</option>
          <option value="PO">PO</option>
          <option value="Invoice">Invoice</option>
          <option value="Contract">Contract</option>
        </select>

        <select
          value={amountFilter}
          onChange={(e) => setAmountFilter(e.target.value)}
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-2 text-sm"
        >
          <option value="ALL">All Amounts</option>
          <option value="NO_AMOUNT">No Amount</option>
          <option value="UNDER_1000">Under 1,000</option>
          <option value="1000_TO_9999">1,000 - 9,999</option>
          <option value="10000_TO_49999">10,000 - 49,999</option>
          <option value="50000_PLUS">50,000+</option>
        </select>

        <div className="flex flex-wrap items-center gap-2 rounded-lg border border-white/10 bg-black/40 px-3 py-2 text-sm">
          <span className="text-white/60">Uploaded</span>
          <input
            type="date"
            ref={uploadDateFromRef}
            value={uploadDateFrom}
            max={uploadDateTo || undefined}
            onChange={(e) => setUploadDateFrom(e.target.value)}
            onClick={() => openNativeDatePicker(uploadDateFromRef)}
            className="cursor-pointer rounded-md border border-white/10 bg-black/30 px-3 py-1.5 text-sm"
          />
          <span className="text-white/40">to</span>
          <input
            type="date"
            ref={uploadDateToRef}
            value={uploadDateTo}
            min={uploadDateFrom || undefined}
            onChange={(e) => setUploadDateTo(e.target.value)}
            onClick={() => openNativeDatePicker(uploadDateToRef)}
            className="cursor-pointer rounded-md border border-white/10 bg-black/30 px-3 py-1.5 text-sm"
          />
        </div>

      </div>

      <div className="bg-white/5 border border-white/10 rounded-xl overflow-hidden">

        {loading && (
          <div className="p-10 text-center text-white/60">
            Loading documents...
          </div>
        )}

        {!loading && filteredDocuments.length > 0 && (
          <div className="overflow-x-auto">

            <table className="w-full min-w-[700px] text-sm">

              <thead className="bg-white/5 border-b border-white/10 text-white/70 sticky top-0">
                <tr>
                  <th className="text-left p-4">Reference</th>
                  <th className="text-left p-4">Type</th>
                  <th className="text-left p-4">Amount</th>
                  <th className="text-left p-4">Status</th>
                  <th className="text-left p-4">Uploaded</th>
                  <th className="text-right p-4">Action</th>
                </tr>
              </thead>

              <tbody>
                {filteredDocuments.map((doc) => (
                  <tr
                    key={doc.id}
                    className="border-b border-white/5 hover:bg-white/5"
                  >
                    <td className="p-4 font-medium">{doc.userReferenceNo}</td>

                    <td className="p-4">{doc.documentType}</td>

                    <td className="p-4">
                      {doc.amount
                        ? Number(doc.amount).toLocaleString()
                        : "-"}
                    </td>

                    <td className="p-4">
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(
                          doc.status
                        )}`}
                      >
                        {doc.status}
                      </span>
                    </td>

                    <td className="p-4 text-white/60">
                      {new Date(doc.createdAt).toLocaleDateString()}
                    </td>

                    <td className="p-4 text-right">

                      <button
                        onClick={() => downloadFile(doc.id)}
                        className="px-4 py-2 bg-white text-black rounded-md text-sm hover:bg-gray-200 transition"
                      >
                        Download
                      </button>

                    </td>
                  </tr>
                ))}
              </tbody>

            </table>
          </div>
        )}

        {!loading && filteredDocuments.length === 0 && (
          <div className="p-10 text-center text-white/60">
            No documents found.
          </div>
        )}

      </div>
    </div>
  );
}
