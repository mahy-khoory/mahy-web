"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import {
  HiOutlineShieldCheck,
  HiOutlineExclamationCircle,
} from "react-icons/hi";

export default function VerifyPage() {
  const { token } = useParams();
  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function verifyDocument() {
      try {
        const res = await fetch(
          `${API}api/portal/documents/verify/${token}`
        );

        const data = await res.json();

        if (!data.success) {
          throw new Error("Invalid verification token");
        }

        setDoc(data.data);
      } catch (err) {
        console.error(err);
        setError("Verification failed");
      }

      setLoading(false);
    }

    if (token) verifyDocument();
  }, [token]);

  return (
    <div className="min-h-screen bg-[#0b1120] text-white flex items-center justify-center px-4">
      <div className="w-full max-w-xl">

        <div className="rounded-3xl border border-white/10 bg-[#0b1220]/80 backdrop-blur-xl shadow-[0_20px_60px_rgba(0,0,0,0.4)] p-6 md:p-8">
          <div className="flex flex-col items-center text-center">

            <AnimatePresence mode="wait">

              {loading && (
                <motion.div
                  key="loading"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{
                      repeat: Infinity,
                      duration: 1.5,
                      ease: "linear",
                    }}
                    className="mb-4"
                  >
                    <HiOutlineShieldCheck className="text-5xl text-sky-400" />
                  </motion.div>

                  <h2 className="text-xl font-semibold">
                    Authenticating Document
                  </h2>
                  <p className="mt-1 text-sm text-white/60">
                    Please wait while we verify this document...
                  </p>
                </motion.div>
              )}

              {!loading && error && (
                <motion.div
                  key="error"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center"
                >
                  <HiOutlineExclamationCircle className="text-5xl text-red-400 mb-3" />

                  <h2 className="text-xl font-semibold text-red-400">
                    Verification Failed
                  </h2>

                  <p className="mt-2 text-sm text-white/60">
                    {error}
                  </p>
                </motion.div>
              )}

              {!loading && !error && doc && (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex flex-col items-center"
                >
                  <motion.div
                    initial={{ scale: 0.8 }}
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 0.6 }}
                  >
                    <HiOutlineShieldCheck className="text-5xl text-emerald-400 mb-3" />
                  </motion.div>

                  <h2 className="text-xl font-semibold text-emerald-400">
                    Document Verified
                  </h2>

                  <p className="mt-1 text-sm text-white/60">
                    This document is authentic and approved
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
          {!loading && !error && doc && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="mt-6 border-t border-white/10 pt-6 space-y-3 text-sm"
            >

              <Detail label="Reference" value={doc.referenceNo} />
              <Detail label="Verification Token" value={token} />
              <Detail label="Uploaded By" value={doc.uploadedByEmail} />
              <Detail label="Document Type" value={doc.documentType} />
              <Detail label="Status" value={doc.status} />
              <Detail
                label="Approved At"
                value={
                  doc.approvedAt
                    ? new Date(doc.approvedAt).toLocaleString()
                    : "-"
                }
              />
              <Detail label="Department" value={doc.department} />
              <Detail label="Company" value={doc.company} />

              <div className="pt-4 text-xs text-white/50 text-center">
                This document has been verified through the MAHY
                verification system.
              </div>

            </motion.div>
          )}

        </div>
      </div>
    </div>
  );
}
function Detail({ label, value }) {
  return (
    <div className="flex justify-between gap-4 border-b border-white/[0.05] pb-2">
      <span className="text-white/50">{label}</span>
      <span className="text-right font-medium text-white break-all">
        {value || "-"}
      </span>
    </div>
  );
}