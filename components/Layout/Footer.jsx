"use client";

import Link from "next/link";
import Image from "next/image";
import { useRouter } from "next/navigation";
import Button from "@/components/UI/Button";
import { useRef, useState } from "react";
import {
  FaXTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa6";

export default function Footer({ data }) {
  const socials = [
    { icon: FaXTwitter, href: "#" },
    { icon: FaLinkedinIn, href: "#" },
    { icon: FaInstagram, href: "#" },
    { icon: FaYoutube, href: "#" },
  ];

  const { brand, sections, bottom } = data;

  const footerRef = useRef(null);
  const rafRef = useRef(null);

  const [cursor, setCursor] = useState({ x: 0, y: 0, active: false });

  const handleMouseMove = (e) => {
    const el = footerRef.current;
    if (!el) return;

    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    rafRef.current = requestAnimationFrame(() => {
      setCursor({ x, y, active: true });
    });
  };

  const handleMouseLeave = () => {
    if (rafRef.current) cancelAnimationFrame(rafRef.current);
    setCursor((c) => ({ ...c, active: false }));
  };
  return (
    <footer
      className="relative z-10 bg-slate-950 border-t border-slate-800 overflow-hidden"
      ref={footerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 transition-opacity duration-200"
        style={{
          opacity: cursor.active ? 1 : 0,
          background: `radial-gradient(
      260px circle at ${cursor.x}px ${cursor.y}px,
      rgb(from var(--accent-color) r g b / 0.18),
      transparent 70%
    )`,
        }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-16">
        <div
          className="
            grid gap-12
            grid-cols-1
            sm:grid-cols-2
            lg:grid-cols-5
          "
        >
          <div className="lg:col-span-2 space-y-6">
            <Link
              href={brand.logo.href}
              aria-label={brand.logo.alt}
              className="inline-flex items-center justify-center sm:justify-start"
            >
              <Image
                src={brand.logo.src}
                alt={brand.logo.alt}
                width={brand.logo.width}
                height={brand.logo.height}
                sizes="(max-width: 640px) 220px, (max-width: 1024px) 190px, (max-width: 1280px) 220px, 260px"
                className="
    w-auto object-contain
    h-12 sm:h-10 md:h-11
    lg:h-14 xl:h-16 2xl:h-[72px]
  "
              />
            </Link>

            <p className="text-sm sm:text-base text-slate-400 leading-relaxed max-w-md">
              {brand.description}
            </p>
            <div className="flex items-center gap-3 pt-2">
              {socials.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="
                    w-9 h-9
                    flex items-center justify-center
                    rounded-full
                    border border-slate-700
                    text-slate-400
                    hover:text-white
                    hover:border-slate-500
                    transition
                  "
                  aria-label="Social link"
                >
                  <social.icon size={16} />
                </Link>
              ))}
            </div>
            {brand.status?.active && (
              <div className="pt-4">
                <span
                  className="
                  inline-flex items-center gap-2
                  px-3 py-1.5
                  rounded-full text-xs font-medium
                  bg-emerald-500/10 text-emerald-400
                  border border-emerald-500/20
                "
                >
                  <span className="w-2 h-2 rounded-full bg-emerald-400" />
                  {brand.status.label}
                </span>
              </div>
            )}
          </div>
          {sections.map((section) => (
            <FooterSection key={section.title} section={section} />
          ))}
        </div>
      </div>
      <div className="relative z-10 border-t border-slate-800">
        <div
          className="
            max-w-7xl mx-auto
            px-4 sm:px-6 lg:px-8
            py-6
            flex flex-col sm:flex-row
            items-center justify-between
            gap-4
          "
        >
          <p className="text-xs text-slate-500 text-center sm:text-left">
            {bottom.copyright}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 text-xs">
            {bottom.links.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-slate-500 hover:text-white transition"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

function FooterSection({ section }) {
  return (
    <div className="space-y-4">
      <h4 className="text-sm font-semibold text-white">{section.title}</h4>

      <ul
        className="
          grid
          grid-cols-2
          gap-x-6 gap-y-3
          sm:grid-cols-1
          lg:grid-cols-1
        "
      >
        {section.links.map((link) => (
          <li key={link.label}>
            <Link
              href={link.href}
              className="
                text-sm text-slate-400
                hover:text-white
                transition
              "
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {section.cta && <FooterCTA cta={section.cta} />}
    </div>
  );
}
function FooterCTA({ cta }) {
  const router = useRouter();

  return (
    <div className="pt-4">
      <Button size="sm" onClick={() => router.push(cta.href)}>
        {cta.label}
      </Button>
    </div>
  );
}
