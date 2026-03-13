"use client";

import ProtectedRoute from "@/components/Auth/ProtectedRoute";

export default function EmployeePortalLayout({ children }) {
  return (
    <ProtectedRoute>
      {children}
    </ProtectedRoute>
  );
}