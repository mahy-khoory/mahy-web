"use client";

import { useEffect, useState, useMemo } from "react";

export default function GCEOPortalPage() {

  const [documents, setDocuments] = useState([]);
  const [loading, setLoading] = useState(true);

  const [selectedDocs, setSelectedDocs] = useState([]);

  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("PENDING");
  const [companyFilter, setCompanyFilter] = useState("ALL");
  const [severityFilter, setSeverityFilter] = useState("ALL");

  const API = process.env.NEXT_PUBLIC_BASE_URL;

  const fetchDocuments = async () => {
    try {

      const res = await fetch(
        `${API}api/gceo/documents?status=${statusFilter}`
      );

      const data = await res.json();

      if (data.success) {
        setDocuments(data.data);
      }

    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDocuments();
  }, [statusFilter]);


  const filteredDocuments = useMemo(() => {

    return documents.filter((doc) => {

      const matchesSearch =
        doc.referenceNo?.toLowerCase().includes(search.toLowerCase()) ||
        doc.uploadedByEmail?.toLowerCase().includes(search.toLowerCase());

      const matchesCompany =
        companyFilter === "ALL" || doc.company === companyFilter;

      const matchesSeverity =
        severityFilter === "ALL" || doc.severity === severityFilter;

      return matchesSearch && matchesCompany && matchesSeverity;

    });

  }, [documents, search, companyFilter, severityFilter]);


  const toggleSelect = (id) => {

    setSelectedDocs((prev) =>
      prev.includes(id)
        ? prev.filter((d) => d !== id)
        : [...prev, id]
    );
  };

  const toggleSelectAll = () => {

    if (selectedDocs.length === filteredDocuments.length) {
      setSelectedDocs([]);
    } else {
      setSelectedDocs(filteredDocuments.map((d) => d.id));
    }

  };


  const approveDocument = async (id) => {

    await fetch(`${API}api/gceo/documents/${id}/approve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        user: {
          name: "GCEO",
          email: "gceo@mahy.com"
        }
      })
    });

    fetchDocuments();
  };

  const rejectDocument = async (id) => {

    const reason = prompt("Rejection reason");

    await fetch(`${API}api/gceo/documents/${id}/reject`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        reason,
        user: {
          name: "GCEO",
          email: "gceo@mahy.com"
        }
      })
    });

    fetchDocuments();
  };


  const bulkApprove = async () => {

    await fetch(`${API}api/gceo/documents/bulk-approve`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        documentIds: selectedDocs,
        user: {
          name: "GCEO",
          email: "gceo@mahy.com"
        }
      })
    });

    setSelectedDocs([]);
    fetchDocuments();
  };

  const bulkReject = async () => {

    const reason = prompt("Rejection reason");

    await fetch(`${API}api/gceo/documents/bulk-reject`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        documentIds: selectedDocs,
        reason,
        user: {
          name: "GCEO",
          email: "gceo@mahy.com"
        }
      })
    });

    setSelectedDocs([]);
    fetchDocuments();
  };

  const downloadFile = (id) => {
    window.open(`${API}api/portal/documents/${id}/download`);
  };

  /* ---------------- STATUS BADGE ---------------- */

  const badge = (status) => {

    if (status === "APPROVED")
      return "bg-green-500/20 text-green-400";

    if (status === "REJECTED")
      return "bg-red-500/20 text-red-400";

    return "bg-yellow-500/20 text-yellow-400";
  };

  /* ---------------- RENDER ---------------- */

  return (
    <div className="w-full">

      {/* HEADER */}

      <div className="mb-6">
        <h1 className="text-2xl font-semibold">
          GCEO Document Approval Panel
        </h1>

        <p className="text-white/60 mt-1">
          Review and approve submitted company documents
        </p>
      </div>

      {/* FILTER BAR */}

      <div className="flex flex-wrap gap-4 mb-6">

        <input
          placeholder="Search reference / user"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-2"
        />

        <select
          value={companyFilter}
          onChange={(e) => setCompanyFilter(e.target.value)}
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-2"
        >
          <option value="ALL">All Companies</option>
          <option value="JDOT">JDOT</option>
          <option value="UI">UI</option>
        </select>

        <select
          value={severityFilter}
          onChange={(e) => setSeverityFilter(e.target.value)}
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-2"
        >
          <option value="ALL">All Severity</option>
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>

        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value)}
          className="bg-black/40 border border-white/10 rounded-lg px-4 py-2"
        >
          <option value="PENDING">Pending</option>
          <option value="APPROVED">Approved</option>
          <option value="REJECTED">Rejected</option>
        </select>

      </div>

      {/* BULK ACTIONS */}

      {selectedDocs.length > 0 && (

        <div className="flex gap-3 mb-4">

          <button
            onClick={bulkApprove}
            className="bg-green-600 px-4 py-2 rounded"
          >
            Bulk Approve
          </button>

          <button
            onClick={bulkReject}
            className="bg-red-600 px-4 py-2 rounded"
          >
            Bulk Reject
          </button>

        </div>
      )}

      {/* TABLE */}

      <div className="bg-white/5 border border-white/10 rounded-xl overflow-x-auto">

        <table className="w-full text-sm">

          <thead className="border-b border-white/10 text-white/70">

            <tr>

              <th className="p-4">
                <input
                  type="checkbox"
                  onChange={toggleSelectAll}
                />
              </th>

              <th className="p-4 text-left">Reference</th>
              <th className="p-4 text-left">Company</th>
              <th className="p-4 text-left">Department</th>
              <th className="p-4 text-left">Submitted By</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Severity</th>
              <th className="p-4 text-left">Urgency</th>
              <th className="p-4 text-left">Amount</th>
              <th className="p-4 text-left">Status</th>
              <th className="p-4 text-left">Actions</th>

            </tr>

          </thead>

          <tbody>

            {filteredDocuments.map((doc) => (

              <tr
                key={doc.id}
                className="border-b border-white/5 hover:bg-white/5"
              >

                <td className="p-4">
                  <input
                    type="checkbox"
                    checked={selectedDocs.includes(doc.id)}
                    onChange={() => toggleSelect(doc.id)}
                  />
                </td>

                <td className="p-4">{doc.referenceNo}</td>
                <td className="p-4">{doc.company}</td>
                <td className="p-4">{doc.department}</td>
                <td className="p-4">{doc.uploadedByEmail}</td>
                <td className="p-4">{doc.documentType}</td>
                <td className="p-4">{doc.severity}</td>
                <td className="p-4">{doc.urgency}</td>

                <td className="p-4">
                  {doc.amount ? Number(doc.amount).toLocaleString() : "-"}
                </td>

                <td className="p-4">
                  <span className={`px-3 py-1 rounded ${badge(doc.status)}`}>
                    {doc.status}
                  </span>
                </td>

                <td className="p-4 flex gap-2">

                  <button
                    onClick={() => downloadFile(doc.id)}
                    className="px-3 py-1 bg-gray-600 rounded"
                  >
                    View
                  </button>

                  {doc.status === "PENDING" && (
                    <>
                      <button
                        onClick={() => approveDocument(doc.id)}
                        className="px-3 py-1 bg-green-600 rounded"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() => rejectDocument(doc.id)}
                        className="px-3 py-1 bg-red-600 rounded"
                      >
                        Reject
                      </button>
                    </>
                  )}

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>
  );
}