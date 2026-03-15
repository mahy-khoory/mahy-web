"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function VerifyPage() {

  const { token } = useParams();

  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    async function verifyDocument() {

      try {

        const res = await fetch(`${API}api/portal/documents/verify/${token}`);

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0b1220]">
        Verifying document...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-400 bg-[#0b1220]">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0b1220] text-white">

      <div className="bg-[#111827] p-10 rounded-2xl w-[520px] shadow-xl">

        <h1 className="text-green-400 text-2xl font-semibold mb-6">
          Document Verified
        </h1>

        <div className="space-y-2 text-sm">

          <p>
            <span className="text-gray-400">Reference:</span>{" "}
            {doc.referenceNo}
          </p>

          <p>
            <span className="text-gray-400">Document Type:</span>{" "}
            {doc.documentType}
          </p>

          <p>
            <span className="text-gray-400">Status:</span>{" "}
            {doc.status}
          </p>

          <p>
            <span className="text-gray-400">Approved At:</span>{" "}
            {new Date(doc.approvedAt).toLocaleString()}
          </p>

          <p>
            <span className="text-gray-400">Department:</span>{" "}
            {doc.department}
          </p>

          <p>
            <span className="text-gray-400">Company:</span>{" "}
            {doc.company}
          </p>

        </div>

        <div className="mt-6 text-sm text-gray-400">
          This document has been verified through the MAHY verification system.
        </div>

      </div>

    </div>
  );
}