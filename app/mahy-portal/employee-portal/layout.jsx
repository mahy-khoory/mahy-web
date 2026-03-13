"use client";

import PortalLayout from "@/components/mahy-portal/employee-portal/PortalLayout";

export default function EmployeePortalLayout({ children }) {
  return (
    <PortalLayout
      title="Employee Portal"
      tabs={[
        {
          label: "Document Upload",
          href: "/mahy-portal/employee-portal",
        },
        {
          label: "All Documents",
          href: "/mahy-portal/employee-portal/documents",
        },
      ]}
    >
      {children}
    </PortalLayout>
  );
}
