"use client";

import { useAuth } from "@/context/AuthContext";
import { useEffect, useState, useMemo } from "react";

export default function DocumentsPage() {
  const { user } = useAuth();

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("ALL");
  const [typeFilter, setTypeFilter] = useState("ALL");

  const fetchDocuments = async () => {
    try {
      const res = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}api/portal/documents/my?email=${encodeURIComponent(user?.email)}`
      );

      const data = await res.json();

      if (data.success) {
        setDocuments(data.data);
      }
    } catch (err) {
      console.error("Failed to load documents", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (user?.email) {
      fetchDocuments();
    }
  }, [user]);

  const filteredDocuments = useMemo(() => {
    return documents.filter((doc) => {
      const matchesSearch =
        doc.referenceNo?.toLowerCase().includes(search.toLowerCase()) ||
        doc.documentType?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "ALL" || doc.status === statusFilter;

      const matchesType =
        typeFilter === "ALL" || doc.documentType === typeFilter;

      return matchesSearch && matchesStatus && matchesType;
    });
  }, [documents, search, statusFilter, typeFilter]);


  const getStatusBadge = (status) => {
    if (status === "APPROVED")
      return "bg-green-500/20 text-green-400 border border-green-500/30";

    if (status === "REJECTED")
      return "bg-red-500/20 text-red-400 border border-red-500/30";

    return "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30";
  };

  const downloadFile = (id) => {
    window.open(
      `${process.env.NEXT_PUBLIC_BASE_URL}api/portal/documents/${id}/download`,
      "_blank"
    );
  };

  const resetFilters = () => {
    setSearch("");
    setStatusFilter("ALL");
    setTypeFilter("ALL");
  };

  return (
    <div className="w-full">
      <div className="mb-6">
        <h1 className="text-2xl font-semibold">My Documents</h1>
        <p className="text-white/60 mt-1">
          Track the approval status of your submitted documents.
        </p>
      </div>
      <div className="mb-6 flex flex-wrap gap-4 items-center">
        <input
          placeholder="Search reference or type..."
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
          <option value="Memo">Memo</option>
          <option value="Other">Other</option>
        </select>
        <button
          onClick={resetFilters}
          className="px-4 py-2 text-sm border border-white/20 rounded-lg hover:bg-white/10"
        >
          Reset
        </button>

      </div>
      <div className="bg-white/5 border border-white/10 rounded-xl backdrop-blur-xl overflow-hidden">

        {loading && (
          <div className="p-10 text-center text-white/60">
            Loading documents...
          </div>
        )}

        {!loading && filteredDocuments.length === 0 && (
          <div className="p-10 text-center text-white/60">
            No documents found.
          </div>
        )}

        {!loading && filteredDocuments.length > 0 && (
          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead className="bg-white/5 border-b border-white/10 text-white/70">
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
                    className="border-b border-white/5 hover:bg-white/5 transition"
                  >
                    <td className="p-4 font-medium">{doc.referenceNo}</td>

                    <td className="p-4 text-white/70">{doc.documentType}</td>

                    <td className="p-4 text-white/70">
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
      </div>
    </div>
  );
}