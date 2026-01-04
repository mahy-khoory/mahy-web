"use client"
import { useLocale } from "next-intl";
import { useEffect, useState } from "react";
import { FiMinus } from "react-icons/fi";



export default function FloatingMenu({ floatingMenuItems }) {
  const [active, setActive] = useState(null);
  const locale = useLocale();

  const sections = [
    { id: "home", label: floatingMenuItems[0], lightBg: false },
    { id: "who-we-are", label: floatingMenuItems[1], lightBg: true },
    { id: "projects", label: floatingMenuItems[2], lightBg: false },
    { id: "stats", label: floatingMenuItems[3], lightBg: true },
    { id: "partners", label: floatingMenuItems[4], lightBg: false },
    { id: "after-sales", label: floatingMenuItems[5], lightBg: true },
    { id: "why-us", label: floatingMenuItems[6], lightBg: false },
  ];
  const isActiveLightBg = sections.find((s) => s.id === active)?.lightBg;

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { threshold: 0.6 }
    );
    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);



  return (
    <ul className={`hidden lg:block fixed bottom-80 ${locale === "ar" ? "left-20" : "right-20"} space-y-4 z-30`}>
      {sections.map((s) => (
        <li key={s.id} className="group">
          <a
            href={`#${s.id}`}
            className={`flex items-center justify-end gap-2 text-xs font-bold uppercase w-30 ${isActiveLightBg ? "t-base t-base-hover" : "text-gray-200 hover:text-white"}`}
          >
            {active !== s.id && <FiMinus className="group-hover:opacity-0 absolute" />}
            <span
              className={`transition-opacity opacity-0 group-hover:opacity-100 ${active === s.id ? "opacity-100" : ""
                }`}
            >
              {s.label}
            </span>
          </a>
        </li>
      ))}
    </ul>
  );
}