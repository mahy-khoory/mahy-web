"use client";

import InfoNavCard from "./InfoNavCard";
import {
  Megaphone,
  CalendarDays,
  Award,
  BookOpen,
} from "lucide-react";

const items = [
  {
    title: "Announcements",
    description:
      "Our library of media releases, regulatory announcements and public consultations provides the latest and most relevant updates on ADGM's developments, business initiatives and corporate achievements.",
    href: "/news",
    icon: Megaphone,
  },
  {
    title: "Upcoming Events",
    description:
      "Flagship and industry events, global roadshows, community affairs and much more. Mark your calendars, we would love to have you join us.",
    href: "/news",
    icon: CalendarDays,
  },
  {
    title: "Spotlight",
    description:
      "Access practical knowledge and gain insight based on real experiences. Spotlight is the voice of ADGM, our community of business professionals.",
    href: "/news",
    icon: Award,
  },
  {
    title: "Publications",
    description:
      "Explore the full collection of our corporate publications, including relevant information of ADGM's framework and its innovative suite of services.",
    href: "/news",
    icon: BookOpen,
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
