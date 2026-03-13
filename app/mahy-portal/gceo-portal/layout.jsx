"use client";

import GCEOPortalLayout from "@/components/mahy-portal/gceo-portal/GCEOPortalLayout";

export default function GCEOPanelLayout({ children }) {
  return (
    <GCEOPortalLayout
      title="GCEO PANEL"
      tabs={[
        {
          label: "Approval Actions",
          href: "/mahy-portal/gceo-portal",
        },
      ]}
    >
      {children}
    </GCEOPortalLayout>
  );
}
