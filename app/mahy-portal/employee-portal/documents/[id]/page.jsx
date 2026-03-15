"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";

export default function DocumentPage() {

  const { id } = useParams();

  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const [doc, setDoc] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {

    async function loadDocument() {

      try {

        const res = await fetch(`${API}api/portal/documents/documents/${id}`);

        const data = await res.json();

        if (!data.success) {
          throw new Error(data.message);
        }

        setDoc(data.data);

      } catch (err) {
        console.error(err);
        setError("Unable to load document");
      }

      setLoading(false);
    }

    if (id) loadDocument();

  }, [id]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white bg-[#0b1220]">
        Loading document...
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

        <h1 className="text-2xl font-semibold mb-6">
          Document {doc.status}
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
            <span className="text-gray-400">Created:</span>{" "}
            {new Date(doc.createdAt).toLocaleString()}
          </p>

          {doc.approvedAt && (
            <p>
              <span className="text-gray-400">Approved At:</span>{" "}
              {new Date(doc.approvedAt).toLocaleString()}
            </p>
          )}

          {doc.rejectedAt && (
            <p>
              <span className="text-gray-400">Rejected At:</span>{" "}
              {new Date(doc.rejectedAt).toLocaleString()}
            </p>
          )}

        </div>

        <div className="mt-6 text-sm text-gray-400">
          This document was processed through the MAHY Portal system.
        </div>

        <a
          href={`${API}api/portal/documents/${id}/download`}
          className="block mt-8 bg-sky-500 hover:bg-sky-600 text-center py-3 rounded-lg font-medium"
        >
          Download Document
        </a>

      </div>

    </div>
  );
}