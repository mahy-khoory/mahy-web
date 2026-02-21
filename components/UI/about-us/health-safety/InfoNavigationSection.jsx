"use client";

import InfoNavCard from "./InfoNavCard";
import {
  Megaphone,
  CalendarDays,
  Award,
  BookOpen,
  ShieldCheck,
  Leaf,
  ClipboardCheck,
  TrendingUp,
} from "lucide-react";

const items = [
  {
    title: "Health & Safety Management",
    description:
      "We maintain structured Health & Safety Management Systems to identify risks, prevent incidents, and ensure safe working environments across factories, warehouses, project sites, transport operations, and service locations.",
    href: "/hse/health-safety-management",
    icon: ShieldCheck,
  },
  {
    title: "Environmental Management",
    description:
      "Environmental responsibility is embedded across our operations, with practices focused on recycling, resource efficiency, regulatory compliance, and reducing environmental impact throughout our manufacturing and service activities.",
    href: "/hse/environmental-management",
    icon: Leaf,
  },
  {
    title: "Monitoring, Audits & Compliance",
    description:
      "Our HSE performance is continuously monitored through inspections, internal audits, and external assessments to ensure compliance, accountability, and effective risk management across all businesses.",
    href: "/hse/monitoring-compliance",
    icon: ClipboardCheck,
  },
  {
    title: "Continuous Improvement & Commitment",
    description:
      "We are committed to continuous HSE improvement through leadership oversight, training, incident review, and strengthened controls to ensure safe, sustainable, and responsible operations.",
    href: "/hse/continuous-improvement",
    icon: TrendingUp,
  },
];

export default function InfoNavigationSection() {
  return (
    <section className="bg-white py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item) => (
            <InfoNavCard key={item.title} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}
