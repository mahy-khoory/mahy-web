"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useAuth } from "@/context/AuthContext";
import ExpandableCell from "@/components/UI/ExpandableCell";

const GCEO_ALLOWED_ROLES = [
  "Group General Manager Bionic",
  "Dynamics 365 Administrator",
  "Power Platform Administrator",
  "Power BI Administrator",
];

const companies = [
  "Al Dhafra Paper Manufacturing",
  "Al Dhafra Waste Collection",
  "Al Etihad Waste Management",
  "Al Khoory Engineering",
  "Al Mehvar Alfede General Trading L.L.C",
  "Clean Earth L.L.C",
  "Creative Solution Green Building",
  "Emirates International Equipment & Machinery L.L.C",
  "Green Arabia",
  "Greenland Equipment & Machinery, Est. L.L.C",
  "Greenland General Transport",
  "MAHY Khoory & Co. L.L.C",
  "MAHY Khoory Automotive",
  "MAHY Khoory Motors",
  "MAHY Khoory Trading",
  "National Paper Industry",
  "Pearl Marina Hotel Apartments",
  "Pure Energy Construction L.L.C",
  "Recyclable Waste Management Division",
  "Senan Industry L.L.C",
  "Solid Waste Management Division",
  "The Market Restaurant & Cafe",
  "Union Nonwoven Industries",
  "Union Paper Mills",
  "Union Sustainable Packaging Solutions",
  "Union Wood Works"
];

const getUniqueValues = (items, extractor) => {
  const seen = new Map();

  items.forEach((item) => {
    const rawValue = extractor(item);
    if (rawValue === undefined || rawValue === null) return;

    const stringValue = String(rawValue).trim();
    if (!stringValue) return;

    const normalized = stringValue.toLowerCase();
    if (!seen.has(normalized)) {
      seen.set(normalized, stringValue);
    }
  });

  return Array.from(seen.values()).sort((a, b) =>
    a.localeCompare(b, undefined, { sensitivity: "base" }),
  );
};

const parseDateValue = (value) => {
  if (!value) return null;
  const date = new Date(value);
  return Number.isNaN(date.getTime()) ? null : date;
};

const ACTION_BUTTON_BASE =
  "inline-flex min-w-[110px] items-center justify-center rounded-xl px-3 py-2 text-xs font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400/40 disabled:cursor-not-allowed disabled:opacity-60";

const FILTER_LABEL_CLASS =
  "mb-1.5 block text-[0.72rem] font-medium text-white/70";

const FILTER_INPUT_CLASS =
  "h-11 w-full rounded-xl border border-white/15 bg-[#101b2f] px-4 text-sm text-white/85 outline-none transition placeholder:text-white/45 focus:border-sky-400/45 focus:ring-0";

const FILTER_OPTION_CLASS = "bg-[#101b2f] text-white";

const TABLE_HEAD_CELL_CLASS =
  "px-3 py-3 text-[0.7rem] font-semibold uppercase tracking-[0.14em] text-white/60 whitespace-nowrap text-center";

const TABLE_CELL_BASE_CLASS =
  "px-3 py-4 align-middle text-sm text-white/85 text-center";

const formatDateTimeGST = (iso) => {
  if (!iso) return { date: "-", time: "-" };

  const dateObj = new Date(iso);

  // Date → DD-MM-YYYY
  const day = dateObj.getUTCDate();
  const month = dateObj.getUTCMonth() + 1;
  const year = dateObj.getUTCFullYear();

  // Time → GST (UTC+4)
  const gstTime = new Date(dateObj.getTime() + 4 * 60 * 60 * 1000);

  let hours = gstTime.getUTCHours();
  const minutes = gstTime.getUTCMinutes().toString().padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return {
    date: `${day}-${month}-${year}`,
    time: `${hours}:${minutes} ${ampm} GST`,
  };
};

function ToastStack({ toasts, removeToast }) {
  return (
    <div className="pointer-events-none fixed right-4 top-4 z-[120] flex w-[calc(100%-2rem)] max-w-sm flex-col gap-3">
      <AnimatePresence>
        {toasts.map((toast) => (
          <motion.div
            key={toast.id}
            initial={{ opacity: 0, y: -14, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className={`pointer-events-auto overflow-hidden rounded-2xl border px-4 py-3 shadow-2xl backdrop-blur-xl ${toast.type === "success"
              ? "border-emerald-400/25 bg-emerald-500/12 text-emerald-100"
              : toast.type === "error"
                ? "border-red-400/25 bg-red-500/12 text-red-100"
                : "border-sky-400/25 bg-sky-500/12 text-sky-100"
              }`}
          >
            <div className="flex items-start gap-3">
              <div
                className={`mt-0.5 h-2.5 w-2.5 shrink-0 rounded-full ${toast.type === "success"
                  ? "bg-emerald-400"
                  : toast.type === "error"
                    ? "bg-red-400"
                    : "bg-sky-400"
                  }`}
              />
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold">{toast.title}</p>
                {toast.message ? (
                  <p className="mt-1 text-xs text-white/75">{toast.message}</p>
                ) : null}
              </div>

              <button
                onClick={() => removeToast(toast.id)}
                className="rounded-md px-1 text-white/60 transition hover:text-white"
              >
                ✕
              </button>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

function ConfirmDialog({
  open,
  title,
  description,
  confirmText,
  confirmClassName,
  loading,
  onClose,
  onConfirm,
  showReason = false,
  reason,
  setReason,
}) {
  if (!open) return null;

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[110] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <motion.div
          initial={{ opacity: 0, y: 14, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 10, scale: 0.98 }}
          transition={{ duration: 0.2 }}
          className="w-full max-w-lg rounded-3xl border border-white/10 bg-[#0b1220] p-5 shadow-2xl"
        >
          <div className="mb-5">
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            {description ? (
              <p className="mt-2 text-sm leading-6 text-white/65">
                {description}
              </p>
            ) : null}
          </div>

          {showReason ? (
            <div className="mb-5">
              <label className="mb-2 block text-sm font-medium text-white/80">
                Rejection reason
              </label>
              <textarea
                value={reason}
                onChange={(e) => setReason(e.target.value)}
                rows={4}
                placeholder="Enter rejection reason..."
                className="w-full resize-none rounded-2xl border border-white/10 bg-white/[0.04] px-4 py-3 text-sm text-white outline-none transition placeholder:text-white/35 focus:border-sky-400/40 focus:ring-2 focus:ring-sky-400/20"
              />
            </div>
          ) : null}

          <div className="flex flex-col-reverse gap-3 sm:flex-row sm:justify-end">
            <button
              onClick={onClose}
              disabled={loading}
              className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-2.5 text-sm font-medium text-white/80 transition hover:bg-white/[0.06] hover:text-white disabled:cursor-not-allowed disabled:opacity-60"
            >
              Cancel
            </button>

            <button
              onClick={onConfirm}
              disabled={loading}
              className={`rounded-xl px-4 py-2.5 text-sm font-semibold text-white transition disabled:cursor-not-allowed disabled:opacity-60 ${confirmClassName}`}
            >
              {loading ? "Processing..." : confirmText}
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

export default function GCEOPortalPage() {
  const [documents, setDocuments] = useState([]);
  const [documentsLoading, setDocumentsLoading] = useState(true);
  const [selectedDocs, setSelectedDocs] = useState([]);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("PENDING");
  const [companyFilter, setCompanyFilter] = useState("ALL");
  const [severityFilter, setSeverityFilter] = useState("ALL");
  const [urgencyFilter, setUrgencyFilter] = useState("ALL");
  const [documentTypeFilter, setDocumentTypeFilter] = useState("ALL");
  const [uploadDateFrom, setUploadDateFrom] = useState("");
  const [uploadDateTo, setUploadDateTo] = useState("");
  const [actionLoading, setActionLoading] = useState(false);

  const { user, loading: authLoading, initializing } = useAuth();

  const userRoles = Array.isArray(user?.roles) ? user.roles : [];
  const hasGceoAccess = userRoles.some((role) =>
    GCEO_ALLOWED_ROLES.includes(role),
  );
  const authReady = !authLoading && !initializing;

  console.log("GCEO user roles:", userRoles);

  const [toasts, setToasts] = useState([]);

  const [dialog, setDialog] = useState({
    open: false,
    type: null,
    id: null,
  });
  const [reason, setReason] = useState("");

  const toastTimers = useRef({});
  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const pushToast = (title, message = "", type = "info") => {
    const id = `${Date.now()}-${Math.random()}`;
    setToasts((prev) => [...prev, { id, title, message, type }]);

    toastTimers.current[id] = setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
      delete toastTimers.current[id];
    }, 3500);
  };

  const removeToast = (id) => {
    if (toastTimers.current[id]) {
      clearTimeout(toastTimers.current[id]);
      delete toastTimers.current[id];
    }
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  useEffect(() => {
    return () => {
      Object.values(toastTimers.current).forEach(clearTimeout);
    };
  }, []);

  const fetchDocuments = async (showLoader = true) => {
    try {
      if (showLoader) setDocumentsLoading(true);

      const res = await fetch(
        `${API}api/gceo/documents?status=${statusFilter}`,
      );
      const data = await res.json();
      console.log("response", data);

      if (!res.ok || !data.success) {
        throw new Error(data?.message || "Failed to fetch documents");
      }

      setDocuments(Array.isArray(data.data) ? data.data : []);
    } catch (err) {
      console.error(err);
      pushToast("Failed to load documents", err.message, "error");
    } finally {
      if (showLoader) setDocumentsLoading(false);
    }
  };

  // useEffect(() => {
  //   if (!authReady || !hasGceoAccess) return;
  //   fetchDocuments();
  // }, [statusFilter, authReady, hasGceoAccess]);

  useEffect(() => {
    //useeffect added till roles are not available for testing
    if (!authReady) return;
    fetchDocuments();
  }, [statusFilter, authReady]);

  const urgencyOptions = useMemo(
    () => getUniqueValues(documents, (doc) => doc.urgency),
    [documents],
  );

  const documentTypeOptions = useMemo(
    () => getUniqueValues(documents, (doc) => doc.documentType),
    [documents],
  );

  const companyOptions = useMemo(() => {
    const seen = new Set();
    const ordered = [];

    const register = (label) => {
      if (!label) return;
      const cleaned = String(label).trim();
      if (!cleaned) return;
      const normalized = cleaned.toLowerCase();
      if (seen.has(normalized)) return;
      seen.add(normalized);
      ordered.push(cleaned);
    };

    documents.forEach((doc) => register(doc.company));
    companies.forEach((company) => register(company));

    return ordered;
  }, [documents]);

  const filteredDocuments = useMemo(() => {
    const fromDateValue = parseDateValue(uploadDateFrom);
    const toDateValue = parseDateValue(uploadDateTo);

    if (toDateValue) {
      toDateValue.setHours(23, 59, 59, 999);
    }

    return documents.filter((doc) => {
      const matchesSearch =
        doc.referenceNo?.toLowerCase().includes(search.toLowerCase()) ||
        doc.uploadedByEmail?.toLowerCase().includes(search.toLowerCase());
      const normalize = (val) => (val || "").toString().trim().toLowerCase();
      const matchesCompany =
        companyFilter === "ALL" ||
        normalize(doc.company) === normalize(companyFilter);

      const matchesSeverity =
        severityFilter === "ALL" || doc.severity === severityFilter;

      const matchesUrgency =
        urgencyFilter === "ALL" ||
        normalize(doc.urgency) === normalize(urgencyFilter);

      const matchesDocumentType =
        documentTypeFilter === "ALL" ||
        normalize(doc.documentType) === normalize(documentTypeFilter);

      const uploadedAt = doc.createdAt ? new Date(doc.createdAt) : null;
      const uploadedAtValid =
        uploadedAt && !Number.isNaN(uploadedAt.getTime());

      const matchesUploadDate =
        (!fromDateValue ||
          (uploadedAtValid && uploadedAt >= fromDateValue)) &&
        (!toDateValue || (uploadedAtValid && uploadedAt <= toDateValue));

      return (
        matchesSearch &&
        matchesCompany &&
        matchesSeverity &&
        matchesUrgency &&
        matchesDocumentType &&
        matchesUploadDate
      );
    });
  }, [
    documents,
    search,
    companyFilter,
    severityFilter,
    urgencyFilter,
    documentTypeFilter,
    uploadDateFrom,
    uploadDateTo,
  ]);

  useEffect(() => {
    setSelectedDocs((prev) =>
      prev.filter((id) => filteredDocuments.some((doc) => doc.id === id)),
    );
  }, [filteredDocuments]);

  const toggleSelect = (id) => {
    setSelectedDocs((prev) =>
      prev.includes(id) ? prev.filter((d) => d !== id) : [...prev, id],
    );
  };

  const toggleSelectAll = () => {
    if (!filteredDocuments.length) return;

    if (
      filteredDocuments.length > 0 &&
      filteredDocuments.every((doc) => selectedDocs.includes(doc.id))
    ) {
      setSelectedDocs((prev) =>
        prev.filter((id) => !filteredDocuments.some((doc) => doc.id === id)),
      );
    } else {
      setSelectedDocs((prev) => {
        const next = new Set(prev);
        filteredDocuments.forEach((doc) => next.add(doc.id));
        return Array.from(next);
      });
    }
  };

  const approveDocument = async (id) => {
    try {
      setActionLoading(true);

      const res = await fetch(`${API}api/gceo/documents/${id}/approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          user: {
            name: user?.name,
            email: user?.email,
          },
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to approve document");
      }

      pushToast(
        "Document approved",
        "The document was approved successfully.",
        "success",
      );
      await fetchDocuments(false);
    } catch (err) {
      console.error(err);
      pushToast("Approval failed", err.message, "error");
    } finally {
      setActionLoading(false);
      setDialog({ open: false, type: null, id: null });
    }
  };

  const rejectDocument = async (id, rejectionReason) => {
    try {
      setActionLoading(true);

      const res = await fetch(`${API}api/gceo/documents/${id}/reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          reason: rejectionReason,
          user: {
            name: user?.name,
            email: user?.email,
          },
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to reject document");
      }

      pushToast(
        "Document rejected",
        "The document was rejected successfully.",
        "success",
      );
      await fetchDocuments(false);
    } catch (err) {
      console.error(err);
      pushToast("Rejection failed", err.message, "error");
    } finally {
      setActionLoading(false);
      setDialog({ open: false, type: null, id: null });
      setReason("");
    }
  };

  const bulkApprove = async () => {
    try {
      setActionLoading(true);

      const res = await fetch(`${API}api/gceo/documents/bulk-approve`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentIds: selectedDocs,
          user: {
            name: user?.name,
            email: user?.email,
          },
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to bulk approve documents");
      }

      setSelectedDocs([]);
      pushToast(
        "Bulk approval successful",
        `${selectedDocs.length} document(s) approved successfully.`,
        "success",
      );
      await fetchDocuments(false);
    } catch (err) {
      console.error(err);
      pushToast("Bulk approval failed", err.message, "error");
    } finally {
      setActionLoading(false);
      setDialog({ open: false, type: null, id: null });
    }
  };

  const bulkReject = async (rejectionReason) => {
    try {
      setActionLoading(true);

      const res = await fetch(`${API}api/gceo/documents/bulk-reject`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          documentIds: selectedDocs,
          reason: rejectionReason,
          user: {
            name: user?.name,
            email: user?.email,
          },
        }),
      });

      const data = await res.json().catch(() => null);

      if (!res.ok || !data?.success) {
        throw new Error(data?.message || "Failed to bulk reject documents");
      }

      const count = selectedDocs.length;
      setSelectedDocs([]);
      pushToast(
        "Bulk rejection successful",
        `${count} document(s) rejected successfully.`,
        "success",
      );
      await fetchDocuments(false);
    } catch (err) {
      console.error(err);
      pushToast("Bulk rejection failed", err.message, "error");
    } finally {
      setActionLoading(false);
      setDialog({ open: false, type: null, id: null });
      setReason("");
    }
  };

  const downloadFile = (id) => {
    try {
      window.open(`${API}api/portal/documents/${id}/download`, "_blank");
      pushToast(
        "Opening document",
        "The file is being opened in a new tab.",
        "info",
      );
    } catch (err) {
      console.error(err);
      pushToast(
        "Open failed",
        "Unable to open the selected document.",
        "error",
      );
    }
  };

  const openApproveDialog = (id) => {
    setDialog({ open: true, type: "approve-single", id });
  };

  const openRejectDialog = (id) => {
    setReason("");
    setDialog({ open: true, type: "reject-single", id });
  };

  const openBulkApproveDialog = () => {
    setDialog({ open: true, type: "approve-bulk", id: null });
  };

  const openBulkRejectDialog = () => {
    setReason("");
    setDialog({ open: true, type: "reject-bulk", id: null });
  };

  const handleDialogConfirm = async () => {
    if (dialog.type === "approve-single" && dialog.id) {
      await approveDocument(dialog.id);
      return;
    }

    if (dialog.type === "reject-single" && dialog.id) {
      await rejectDocument(dialog.id, reason);
      return;
    }

    if (dialog.type === "approve-bulk") {
      await bulkApprove();
      return;
    }

    if (dialog.type === "reject-bulk") {
      await bulkReject(reason);
    }
  };

  const badge = (status) => {
    if (status === "APPROVED") {
      return "border border-emerald-400/20 bg-emerald-500/15 text-emerald-300";
    }

    if (status === "REJECTED") {
      return "border border-red-400/20 bg-red-500/15 text-red-300";
    }

    return "border border-amber-400/20 bg-amber-500/15 text-amber-300";
  };

  const selectedAllVisible =
    filteredDocuments.length > 0 &&
    filteredDocuments.every((doc) => selectedDocs.includes(doc.id));

  if (!authReady) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center px-4">
        <div className="w-full max-w-md rounded-3xl border border-white/10 bg-[#0b1220] p-8 text-center text-white/80">
          Checking access...
        </div>
      </div>
    );
  }

  // if (!hasGceoAccess) {
  //   return (
  //     <div className="flex min-h-[60vh] items-center justify-center px-4">
  //       <div className="w-full max-w-xl rounded-3xl border border-red-500/25 bg-red-500/10 p-8 text-center text-white">
  //         <h2 className="text-2xl font-semibold text-red-100">Access denied</h2>
  //         <p className="mt-3 text-sm text-white/80">
  //           You must be assigned at least one of the following roles to use the
  //           GCEO portal.
  //         </p>
  //         <ul className="mt-4 list-disc space-y-1 pl-6 text-left text-sm text-white/85">
  //           {GCEO_ALLOWED_ROLES.map((role) => (
  //             <li key={role}>{role}</li>
  //           ))}
  //         </ul>
  //         <p className="mt-4 text-xs text-white/70">
  //           Please contact the IT administrator if you believe this is an error.
  //         </p>
  //       </div>
  //     </div>
  //   );
  // }

  return (
    <>
      <ToastStack toasts={toasts} removeToast={removeToast} />

      <div className="w-full max-w-full overflow-hidden">
        <div className="mx-auto w-full max-w-[1600px]">
          <div className="mb-6 flex flex-col gap-3 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <h1 className="text-2xl font-semibold tracking-tight text-white md:text-3xl">
                GCEO Document Approval Panel
              </h1>
              <p className="mt-1 text-sm text-white/60 md:text-base">
                Review, filter, and approve submitted company documents.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-xs text-white/55">
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                Total: {documents.length}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                Visible: {filteredDocuments.length}
              </span>
              <span className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5">
                Selected: {selectedDocs.length}
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-white/5 bg-[#0b1220]/70 p-4 shadow-[0_8px_30px_rgba(2,6,23,0.35)] md:p-6">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
              <div className="xl:col-span-1">
                <label className={FILTER_LABEL_CLASS}>Search</label>
                <input
                  placeholder="Search reference or user"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                  className={`${FILTER_INPUT_CLASS} placeholder:text-white/40`}
                />
              </div>

              <div>
                <label className={FILTER_LABEL_CLASS}>Company</label>

                <select
                  value={companyFilter}
                  onChange={(e) => setCompanyFilter(e.target.value)}
                  className={FILTER_INPUT_CLASS}
                >
                  <option value="ALL" className={FILTER_OPTION_CLASS}>
                    All Companies
                  </option>
                  {companyOptions.map((label) => (
                    <option
                      key={label}
                      value={label}
                      className={FILTER_OPTION_CLASS}
                    >
                      {label}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label className={FILTER_LABEL_CLASS}>Severity</label>
                <select
                  value={severityFilter}
                  onChange={(e) => setSeverityFilter(e.target.value)}
                  className={FILTER_INPUT_CLASS}
                >
                  <option value="ALL" className={FILTER_OPTION_CLASS}>
                    All Severity
                  </option>
                  <option value="Low" className={FILTER_OPTION_CLASS}>
                    Low
                  </option>
                  <option value="Medium" className={FILTER_OPTION_CLASS}>
                    Medium
                  </option>
                  <option value="High" className={FILTER_OPTION_CLASS}>
                    High
                  </option>
                </select>
              </div>

              <div>
                <label className={FILTER_LABEL_CLASS}>Status</label>
                <select
                  value={statusFilter}
                  onChange={(e) => setStatusFilter(e.target.value)}
                  className={FILTER_INPUT_CLASS}
                >
                  <option value="PENDING" className={FILTER_OPTION_CLASS}>
                    Pending
                  </option>
                  <option value="APPROVED" className={FILTER_OPTION_CLASS}>
                    Approved
                  </option>
                  <option value="REJECTED" className={FILTER_OPTION_CLASS}>
                    Rejected
                  </option>
                </select>
              </div>

              <div>
                <label className={`${FILTER_LABEL_CLASS} xl:mb-6.75`}>Document Type</label>
                <select
                  value={documentTypeFilter}
                  onChange={(e) => setDocumentTypeFilter(e.target.value)}
                  className={FILTER_INPUT_CLASS}
                >
                  <option value="ALL" className={FILTER_OPTION_CLASS}>
                    All Types
                  </option>
                  {documentTypeOptions.map((type) => (
                    <option
                      key={type}
                      value={type}
                      className={FILTER_OPTION_CLASS}
                    >
                      {type}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className={`${FILTER_LABEL_CLASS} xl:mb-6.75`}>Approval Urgency</label>
                <select
                  value={urgencyFilter}
                  onChange={(e) => setUrgencyFilter(e.target.value)}
                  className={FILTER_INPUT_CLASS}
                >
                  <option value="ALL" className={FILTER_OPTION_CLASS}>
                    All Urgency
                  </option>
                  {urgencyOptions.map((urgency) => (
                    <option
                      key={urgency}
                      value={urgency}
                      className={FILTER_OPTION_CLASS}
                    >
                      {urgency}
                    </option>
                  ))}
                </select>
              </div>

              <div className="xl:col-span-2">
                <label className={FILTER_LABEL_CLASS}>Upload Date</label>
                <div className="flex flex-col gap-3 sm:flex-row">
                  <div className="flex-1">
                    <p className="mb-1 text-[0.68rem] font-medium text-white/55">
                      From
                    </p>
                    <input
                      type="date"
                      value={uploadDateFrom}
                      max={uploadDateTo || undefined}
                      onChange={(e) => setUploadDateFrom(e.target.value)}
                      className={FILTER_INPUT_CLASS}
                    />
                  </div>

                  <div className="flex-1">
                    <p className="mb-1 text-[0.68rem] font-medium text-white/55">
                      To
                    </p>
                    <input
                      type="date"
                      value={uploadDateTo}
                      min={uploadDateFrom || undefined}
                      onChange={(e) => setUploadDateTo(e.target.value)}
                      className={FILTER_INPUT_CLASS}
                    />
                  </div>
                </div>
              </div>
            </div>

            <AnimatePresence>
              {selectedDocs.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 flex flex-col gap-3 rounded-xl border border-white/8 bg-[#0c1627]/70 p-3 sm:flex-row sm:items-center sm:justify-between"
                >
                  <p className="text-sm text-white/75">
                    <span className="font-semibold text-white">
                      {selectedDocs.length}
                    </span>{" "}
                    document(s) selected
                  </p>

                  <div className="flex flex-wrap gap-2">
                    <button
                      onClick={openBulkApproveDialog}
                      disabled={actionLoading}
                      className="rounded-xl bg-emerald-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-emerald-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Bulk Approve
                    </button>

                    <button
                      onClick={openBulkRejectDialog}
                      disabled={actionLoading}
                      className="rounded-xl bg-red-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-500 disabled:cursor-not-allowed disabled:opacity-60"
                    >
                      Bulk Reject
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div className="mt-6 overflow-hidden rounded-2xl border border-white/8 bg-[#0c1525] shadow-[0_14px_45px_rgba(1,9,20,0.6)]">
              <div className="w-full overflow-x-auto">
                <table className="w-full min-w-[1180px] table-auto text-left text-[0.92rem] text-white/85">
                  <thead className="sticky top-0 z-10 bg-[#101a2d]">
                    <tr className="border-b border-white/10">
                      <th className={TABLE_HEAD_CELL_CLASS}>
                        <input
                          type="checkbox"
                          checked={selectedAllVisible}
                          onChange={toggleSelectAll}
                          className="h-4 w-4 cursor-pointer rounded border-white/20 bg-transparent accent-sky-500"
                        />
                      </th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Reference</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Company</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Department</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Submitted By</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Type</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Description</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Severity</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Urgency</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Amount</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Date & Time</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Status</th>
                      <th className={TABLE_HEAD_CELL_CLASS}>Additional Remarks</th>
                      <th className={`${TABLE_HEAD_CELL_CLASS} text-right`}>
                        Actions
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {documentsLoading ? (
                      [...Array(6)].map((_, index) => (
                        <tr
                          key={index}
                          className="border-b border-white/[0.05] last:border-b-0"
                        >
                          <td className="px-3 py-3">
                            <div className="h-4 w-4 animate-pulse rounded bg-white/10" />
                          </td>
                          {[...Array(12)].map((__, i) => (
                            <td key={i} className="px-3 py-3">
                              <div className="h-4 w-full animate-pulse rounded bg-white/10" />
                            </td>
                          ))}
                        </tr>
                      ))
                    ) : filteredDocuments.length === 0 ? (
                      <tr>
                        <td colSpan={13} className="px-6 py-14 text-center">
                          <div className="mx-auto max-w-md">
                            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.04] text-2xl">
                              📄
                            </div>
                            <h3 className="text-lg font-semibold text-white">
                              No documents found
                            </h3>
                            <p className="mt-2 text-sm leading-6 text-white/55">
                              There are no documents matching the current
                              filters.
                            </p>
                          </div>
                        </td>
                      </tr>
                    ) : (
                      filteredDocuments.map((doc, index) => {
                        const { date, time } = formatDateTimeGST(doc.createdAt);
                        return (
                          <motion.tr
                            key={doc.id}
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.2, delay: index * 0.02 }}
                            className="border-b border-white/[0.05] transition hover:bg-white/[0.06]"
                          >
                            <td className={`${TABLE_CELL_BASE_CLASS} w-[40px]`}>
                              <input
                                type="checkbox"
                                checked={selectedDocs.includes(doc.id)}
                                onChange={() => toggleSelect(doc.id)}
                                className="h-4 w-4 cursor-pointer rounded border-white/20 bg-transparent accent-sky-500"
                              />
                            </td>

                            <td
                              className={`${TABLE_CELL_BASE_CLASS} font-semibold text-white whitespace-nowrap`}
                            >
                              {doc.userReferenceNo || "-"}
                            </td>
                            <td
                              className={`${TABLE_CELL_BASE_CLASS} text-white/80 whitespace-nowrap`}
                              title={doc.company || ""}
                            >
                              {doc.company || "-"}
                            </td>
                            <td
                              className={`${TABLE_CELL_BASE_CLASS} text-white/75 whitespace-nowrap`}
                              title={doc.department || ""}
                            >
                              {doc.department || "-"}
                            </td>
                            <td
                              className={`${TABLE_CELL_BASE_CLASS} text-white/70 max-w-[200px] truncate`}
                              title={doc.uploadedByEmail || ""}
                            >
                              {doc.uploadedByEmail || "-"}
                            </td>
                            <td
                              className={`${TABLE_CELL_BASE_CLASS} text-white/80 whitespace-nowrap`}
                              title={doc.documentType || ""}
                            >
                              {doc.documentType || "-"}
                            </td>

                            <ExpandableCell text={doc.description || "-"} tableClasses={TABLE_CELL_BASE_CLASS} />

                            <td
                              className={`${TABLE_CELL_BASE_CLASS} text-white whitespace-nowrap`}
                            >
                              {doc.severity || "-"}
                            </td>
                            <td
                              className={`${TABLE_CELL_BASE_CLASS} text-white whitespace-nowrap`}
                            >
                              {doc.urgency || "-"}
                            </td>

                            <td
                              className={`${TABLE_CELL_BASE_CLASS} whitespace-nowrap tabular-nums font-semibold`}
                            >
                              {doc.amount
                                ? Number(doc.amount).toLocaleString()
                                : "-"}
                            </td>

                            <td className={`${TABLE_CELL_BASE_CLASS} text-white/70 whitespace-nowrap`}>
                              <div>{date}</div>
                              <div className="text-xs opacity-70 mt-0.5">{time}</div>
                            </td>

                            <td className={`${TABLE_CELL_BASE_CLASS} whitespace-nowrap`}>
                              <span
                                className={`inline-flex min-w-[96px] justify-center rounded-full px-3 py-1.5 text-xs font-semibold ${badge(
                                  doc.status,
                                )}`}
                              >
                                {doc.status}
                              </span>
                            </td>

                            <ExpandableCell text={doc.remarks || "-"} tableClasses={TABLE_CELL_BASE_CLASS} />

                            <td className={`${TABLE_CELL_BASE_CLASS} whitespace-nowrap text-right`}>
                              <div className="flex flex-wrap justify-end gap-2">
                                <button
                                  onClick={() => downloadFile(doc.id)}
                                  className={`${ACTION_BUTTON_BASE} border border-white/12 bg-white/[0.03] text-white/90 hover:bg-white/[0.08]`}
                                >
                                  View
                                </button>

                                {doc.status === "PENDING" && (
                                  <>
                                    <button
                                      onClick={() => openApproveDialog(doc.id)}
                                      disabled={actionLoading}
                                      className={`${ACTION_BUTTON_BASE} bg-emerald-600 text-white hover:bg-emerald-500`}
                                    >
                                      Approve
                                    </button>

                                    <button
                                      onClick={() => openRejectDialog(doc.id)}
                                      disabled={actionLoading}
                                      className={`${ACTION_BUTTON_BASE} bg-red-600 text-white hover:bg-red-500`}
                                    >
                                      Reject
                                    </button>
                                  </>
                                )}
                              </div>
                            </td>
                          </motion.tr>
                        )
                      })
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ConfirmDialog
        open={dialog.open}
        title={
          dialog.type === "approve-single"
            ? "Approve document"
            : dialog.type === "reject-single"
              ? "Reject document"
              : dialog.type === "approve-bulk"
                ? "Bulk approve documents"
                : "Bulk reject documents"
        }
        description={
          dialog.type === "approve-single"
            ? "Are you sure you want to approve this document?"
            : dialog.type === "reject-single"
              ? "Please confirm rejection for this document."
              : dialog.type === "approve-bulk"
                ? `Are you sure you want to approve ${selectedDocs.length} selected document(s)?`
                : `Please confirm rejection for ${selectedDocs.length} selected document(s).`
        }
        confirmText={
          dialog.type === "approve-single" || dialog.type === "approve-bulk"
            ? "Confirm Approval"
            : "Confirm Rejection"
        }
        confirmClassName={
          dialog.type === "approve-single" || dialog.type === "approve-bulk"
            ? "bg-emerald-600 hover:bg-emerald-500"
            : "bg-red-600 hover:bg-red-500"
        }
        loading={actionLoading}
        onClose={() => {
          if (actionLoading) return;
          setDialog({ open: false, type: null, id: null });
          setReason("");
        }}
        onConfirm={handleDialogConfirm}
        showReason={
          dialog.type === "reject-single" || dialog.type === "reject-bulk"
        }
        reason={reason}
        setReason={setReason}
      />
    </>
  );
}
