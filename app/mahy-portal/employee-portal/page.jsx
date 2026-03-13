"use client";

import { useState } from "react";
import { useAuth } from "@/context/AuthContext";
import { motion, AnimatePresence } from "framer-motion";

export default function EmployeePortalPage() {
  const { user } = useAuth();

  const [file, setFile] = useState(null);
  const [error, setError] = useState("");
  const [toast, setToast] = useState(null);

  const [documentType, setDocumentType] = useState("");
  const [referenceNo, setReferenceNo] = useState("");
  const [description, setDescription] = useState("");
  const [severity, setSeverity] = useState("");
  const [urgency, setUrgency] = useState("");
  const [remarks, setRemarks] = useState("");
  const [loading, setLoading] = useState(false);
  const [amount, setAmount] = useState("");

  const showToast = (message, type = "success") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 3500);
  };

  const handleAmountChange = (e) => {
    const raw = e.target.value.replace(/,/g, "");

    if (raw === "") {
      setAmount("");
      return;
    }

    if (!/^\d+$/.test(raw)) return;

    const formatted = Number(raw).toLocaleString("en-US");

    setAmount(formatted);
  };

  const handleFileChange = (e) => {
    const uploaded = e.target.files[0];

    if (!uploaded) return;

    if (uploaded.type !== "application/pdf") {
      setError("Only PDF files are allowed.");
      return;
    }

    setError("");
    setFile(uploaded);
  };

  const handleSubmit = async () => {
    if (!file) {
      setError("Please upload a PDF file.");
      return;
    }

    try {
      setLoading(true);

      const formData = new FormData();

      formData.append("file", file);
      formData.append("documentType", documentType);
      formData.append("referenceNo", referenceNo);
      formData.append("amount", amount.replace(/,/g, ""));
      formData.append("description", description);
      formData.append("severity", severity);
      formData.append("urgency", urgency);
      formData.append("remarks", remarks);

      formData.append("uploadedByEmail", user?.email);
      formData.append("department", user?.department);
      formData.append("company", user?.company);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/portal/documents/upload`,
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Upload failed");
      }

      showToast("Document uploaded successfully");

      setFile(null);
      setReferenceNo("");
      setDescription("");
      setAmount("");
      setRemarks("");
    } catch (err) {
      console.error(err);
      setError(err.message);
      showToast(err.message, "error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-[1100px]">
      <AnimatePresence>
        {toast && (
          <motion.div
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ opacity: 0 }}
            className={`fixed right-6 top-6 z-50 px-6 py-3 rounded-xl text-sm font-medium shadow-lg ${
              toast.type === "error"
                ? "bg-red-600 text-white"
                : "bg-green-600 text-white"
            }`}
          >
            {toast.message}
          </motion.div>
        )}
      </AnimatePresence>

      <h1 className="text-2xl font-semibold mb-2">Document Upload</h1>

      <p className="text-white/70 mb-8">
        Welcome back {user?.name} — Company: {user?.company} — Department:{" "}
        {user?.department}
      </p>

      <div className="border border-white/10 rounded-xl p-8 bg-white/5 backdrop-blur-xl space-y-8">

        {/* Document Info */}

        <div>
          <h2 className="text-lg font-semibold mb-4">Document Information</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <select
              value={documentType}
              onChange={(e) => setDocumentType(e.target.value)}
              className="bg-black/40 border border-white/10 rounded-lg p-3"
            >
              <option value="">Select Document Type</option>
              <option value="PR">PR</option>
              <option value="PO">PO</option>
              <option value="Invoice">Invoice</option>
              <option value="Contract">Contract</option>
              <option value="Memo">Memo</option>
              <option value="Other">Other</option>
            </select>

            <input
              value={referenceNo}
              onChange={(e) => setReferenceNo(e.target.value)}
              placeholder="Reference Number"
              className="bg-black/40 border border-white/10 rounded-lg p-3"
            />

            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Amount (optional)"
              className="bg-black/40 border border-white/10 rounded-lg p-3"
            />

          </div>

          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Description"
            rows="4"
            className="w-full mt-4 bg-black/40 border border-white/10 rounded-lg p-3"
          />
        </div>

        {/* Approval */}

        <div>
          <h2 className="text-lg font-semibold mb-4">Approval Details</h2>

          <div className="grid md:grid-cols-2 gap-4">

            <select
              value={severity}
              onChange={(e) => setSeverity(e.target.value)}
              className="bg-black/40 border border-white/10 rounded-lg p-3"
            >
              <option value="">Severity Level</option>
              <option value="Low">Low</option>
              <option value="Medium">Medium</option>
              <option value="High">High</option>
            </select>

            <div className="flex gap-6 items-center">
              <label className="flex items-center gap-2">
                <input type="radio" name="urgency" value="Normal"
                checked={urgency === "Normal"}
                onChange={(e)=>setUrgency(e.target.value)}
                />
                Normal
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="urgency" value="Urgent"
                checked={urgency === "Urgent"}
                onChange={(e)=>setUrgency(e.target.value)}
                />
                Urgent
              </label>

              <label className="flex items-center gap-2">
                <input type="radio" name="urgency" value="Very Urgent"
                checked={urgency === "Very Urgent"}
                onChange={(e)=>setUrgency(e.target.value)}
                />
                Very Urgent
              </label>
            </div>

          </div>

          <textarea
            placeholder="Additional remarks"
            rows="3"
            value={remarks}
            onChange={(e)=>setRemarks(e.target.value)}
            className="w-full mt-4 bg-black/40 border border-white/10 rounded-lg p-3"
          />
        </div>

        {/* Upload */}

        <div>
          <h2 className="text-lg font-semibold mb-4">Upload Document</h2>

          <div className="border-2 border-dashed border-white/20 rounded-xl p-10 text-center">

            <input
              type="file"
              accept="application/pdf"
              onChange={handleFileChange}
              className="hidden"
              id="pdfUpload"
            />

            <label htmlFor="pdfUpload" className="cursor-pointer text-white/80">
              Drag & drop PDF here or click to upload
            </label>

            {file && (
              <p className="text-green-400 mt-3 text-sm">
                Uploaded: {file.name}
              </p>
            )}

            {error && <p className="text-red-400 mt-3 text-sm">{error}</p>}
          </div>
        </div>

        <div className="flex justify-end">

          <button
            onClick={handleSubmit}
            disabled={loading}
            className="bg-white text-black px-6 py-3 rounded-lg hover:bg-gray-200 transition"
          >
            {loading ? "Uploading..." : "Submit Document"}
          </button>

        </div>

      </div>
    </div>
  );
}
