"use client";

import { useEffect, useRef, useState } from "react";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import {
  HiChevronDown,
  HiMenuAlt3,
  HiOutlineGlobeAlt,
  HiX,
} from "react-icons/hi";
import Cookies from "js-cookie";
import MegaMenuFlyOut from "../MegaMenuFlyOut";

const languageOptions = [
  { code: "en", label: "English", icon: "/flags/en.svg" },
  { code: "de", label: "Deutsch", icon: "/flags/de.svg" },
  { code: "ar", label: "Arabic", icon: "/flags/ar.svg" },
];

export default function Navbar({ navigation }) {
  const [openMenu, setOpenMenu] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);
  const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
  const locale = useLocale();
  const [currentLocale, setCurrentLocale] = useState(locale);
  const languageMenuRef = useRef(null);

  const toggleMobileMenu = () => {
    setMobileOpen((prev) => {
      const next = !prev;
      if (!next) setMobileDropdown(null);
      return next;
    });
  };

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileDropdown(null);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        languageMenuRef.current &&
        !languageMenuRef.current.contains(event.target)
      ) {
        setLanguageMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    setCurrentLocale(locale);
  }, [locale]);

  const setLocale = (locale) => {
    Cookies.set("locale", locale, { expires: 30 });
    window.location.reload();
  };

  const handleLocaleSelection = (locale) => {
    setLanguageMenuOpen(false);
    if (locale === currentLocale) return;

    setCurrentLocale(locale);
    setLocale(locale);
  };

  const currentLanguage =
    languageOptions.find((option) => option.code === currentLocale) ||
    languageOptions[0];

  return (
    <header
      className="fixed top-0 left-0 z-50 w-full "
      style={{
        paddingTop: "env(safe-area-inset-top)",
      }}
    >
      <nav className="mx-auto flex max-w-[90rem] items-center justify-between px-6 lg:px-12 py-2 min-h-[62px] rounded-b-full bg-black/50 backdrop-blur-2xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
        <div className="flex items-center pr-4">
          <Link
            href="/"
            aria-label="MAHY Home"
            className="inline-flex items-center"
          >
            <Image
              src="/MAHY.png"
              alt="MAHY Khoory & Co."
              width={220}
              height={100}
              priority
              className="w-[150px] sm:w-[160px] md:w-[170px] lg:w-[180px] xl:w-[200px] object-contain"
            />
          </Link>
        </div>
        {/* <ul className="hidden lg:flex flex-1 items-center justify-center gap-6 text-white text-sm font-medium">
          {navigation.links.map((item) => {
            if (item.linkType === "mega") {
              return (
                <li
                  key={item.id}
                  className="relative"
                  onMouseEnter={() => setOpenMenu(item.id)}
                  onMouseLeave={() => setOpenMenu(null)}
                >
                  <div className="flex items-center gap-1">
                    <Link
                      href={item.href}
                      className="px-4 py-2 rounded-full hover:bg-white/10 transition"
                    >
                      {item.label}
                    </Link>
                    <button
                      type="button"
                      onClick={() => toggleDropdown(item.id)}
                      aria-expanded={openMenu === item.id}
                    >
                      <HiChevronDown
                        className={`text-lg transition-transform ${
                          openMenu === item.id ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  </div>

                  <Dropdown isOpen={openMenu === item.id} items={item.items} />
                </li>
              );
            }

           
            return (
              <li key={item.id}>
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-full hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul> */}
        <ul className="hidden lg:flex flex-1 items-center justify-center gap-6 text-white text-sm font-medium">
          {navigation.links.map((item) => (
            <li
              key={item.id}
              onMouseEnter={() =>
                item.linkType === "mega"
                  ? setOpenMenu(item.id)
                  : setOpenMenu(null)
              }
              className="relative"
            >
              <div className="flex items-center gap-1">
                <Link
                  href={item.href}
                  className="px-4 py-2 rounded-full hover:bg-white/10 transition"
                >
                  {item.label}
                </Link>

                {item.linkType === "mega" && (
                  <HiChevronDown
                    className={`text-lg transition-transform ${
                      openMenu === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>
            </li>
          ))}
        </ul>
        {navigation.links
          .filter((item) => item.linkType === "mega")
          .map((item) => (
            <MegaMenuFlyOut
              key={item.id}
              isOpen={openMenu === item.id}
              columns={item.columns || []}
              onClose={() => setOpenMenu(null)}
            />
          ))}

        <div className="flex items-center gap-3">
          <div className="relative" ref={languageMenuRef}>
            <button
              type="button"
              className="inline-flex h-10 items-center gap-2 rounded-full border border-white/20 px-3 text-[11px] font-semibold uppercase tracking-[0.15em] text-white transition hover:border-white/40"
              onClick={() => setLanguageMenuOpen((prev) => !prev)}
              aria-haspopup="listbox"
              aria-expanded={languageMenuOpen}
            >
              <HiOutlineGlobeAlt className="text-sm" />
              {currentLanguage && (
                <Image
                  src={currentLanguage.icon}
                  alt={`${currentLanguage.label} flag`}
                  width={20}
                  height={14}
                  className="h-3.5 w-5 rounded-[3px] object-cover shadow-sm"
                />
              )}
              {currentLocale}
            </button>

            {languageMenuOpen && (
              <div className="absolute right-0 mt-2 w-40 rounded-2xl border border-white/10 bg-black/90 p-2 text-white shadow-lg backdrop-blur-xl">
                {languageOptions.map((option) => (
                  <button
                    key={option.code}
                    type="button"
                    className={`flex w-full items-center gap-3 rounded-xl px-3 py-1.5 text-left text-[11px] transition ${
                      option.code === currentLocale
                        ? "bg-white/15 text-white"
                        : "text-white/70 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => handleLocaleSelection(option.code)}
                  >
                    <Image
                      src={option.icon}
                      alt={`${option.label} flag`}
                      width={20}
                      height={14}
                      className="h-3.5 w-5 rounded-[3px] object-cover shadow-sm"
                    />
                    <div className="flex flex-1 items-center justify-between">
                      <span>{option.label}</span>
                      <span className="uppercase tracking-widest text-[9px] text-white/60">
                        {option.code}
                      </span>
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            type="button"
            className="lg:hidden inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white"
            onClick={toggleMobileMenu}
          >
            {mobileOpen ? (
              <HiX className="text-2xl" />
            ) : (
              <HiMenuAlt3 className="text-2xl" />
            )}
          </button>
        </div>
      </nav>

      {mobileOpen && (
        <div className="lg:hidden px-6 pt-3">
          <div className="rounded-3xl border border-white/10 bg-black/80 px-5 py-5 text-white backdrop-blur-xl">
            <ul className="flex flex-col gap-4">
              {navigation.links.map((item) => {
                if (item.linkType === "dropdown") {
                  const expanded = mobileDropdown === item.id;

                  return (
                    <li key={item.id}>
                      <div className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3">
                        <Link
                          href={item.href}
                          onClick={closeMobileMenu}
                          className="text-white"
                        >
                          {item.label}
                        </Link>

                        <button
                          type="button"
                          onClick={(e) => {
                            e.stopPropagation();
                            setMobileDropdown((prev) =>
                              prev === item.id ? null : item.id
                            );
                          }}
                          aria-expanded={expanded}
                        >
                          <HiChevronDown
                            className={`text-xl transition-transform ${
                              expanded ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                      </div>

                      {expanded && (
                        <div className="mt-2 rounded-2xl bg-white/5 p-3">
                          {item.items.map((group, i) =>
                            group.children?.map((child, j) => (
                              <Link
                                key={`${i}-${j}`}
                                href={child.href}
                                onClick={closeMobileMenu}
                                className="block py-2 text-sm text-white/80 hover:text-white"
                              >
                                {child.label}
                              </Link>
                            ))
                          )}
                        </div>
                      )}
                    </li>
                  );
                }

                return (
                  <li key={item.id}>
                    <Link
                      href={item.href}
                      onClick={closeMobileMenu}
                      className="block rounded-2xl bg-white/5 px-4 py-3"
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

            </ul>
          </div>
        </div>
      )}
    </header>
  );
}
