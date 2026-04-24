"use client";

import Image from "next/image";
import Link from "next/link";

export default function GroupCompaniesGrid({
  companies,
  title = "Group Companies",
  description = "A diversified portfolio of specialized companies operating across industrial, commercial, engineering, and service sectors.",
}) {
  const companyCount = companies.length;
  const useSingleCardLayout = companyCount === 1;
  const useTwoCardLayout = companyCount === 2;

  return (
    <section className="bg-white w-full">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 py-14">
        <div className="text-center">
          <h2 className="text-[28px] sm:text-[32px] font-medium text-gray-900">
            {title}
          </h2>

          <p className="mt-2 text-[12px] sm:text-[13px] text-gray-500 max-w-xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div
          className={[
            "mt-10 gap-6",
            useSingleCardLayout
              ? "max-w-2xl mx-auto grid grid-cols-1"
              : useTwoCardLayout
                ? "max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2"
                : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          ].join(" ")}
        >
          {companies.map((company, i) => (
            <Link key={i} href={company.href} className="group h-full">
              <div
                className={[
                  "h-full border bg-white transition duration-300",
                  "hover:border-slate-600 hover:shadow-[0_18px_40px_rgba(15,23,42,0.08)]",
                  useSingleCardLayout
                    ? "rounded-[24px] border-slate-300 px-8 py-8 text-center"
                    : useTwoCardLayout
                      ? "rounded-[20px] border-slate-300 px-6 py-7 text-center"
                      : "rounded-[8px] border-slate-400 px-6 py-5 min-h-[160px]",
                ].join(" ")}
              >
                <div
                  className={[
                    "flex",
                    useSingleCardLayout || useTwoCardLayout
                      ? "flex-col items-center gap-4"
                      : "items-center gap-4",
                  ].join(" ")}
                >
                  <div
                    className={[
                      "relative shrink-0",
                      useSingleCardLayout
                        ? `${company.wideLogo ? "w-50 h-16" : "size-16"}`
                        : useTwoCardLayout
                          ? "w-14 h-14"
                          : "w-10 h-10",
                    ].join(" ")}
                  >
                    <Image
                      src={company.logo}
                      alt={company.name}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <h3
                    className={[
                      "font-semibold text-gray-900 leading-snug",
                      useSingleCardLayout
                        ? "text-[20px]"
                        : useTwoCardLayout
                          ? "text-[17px]"
                          : "text-[14px]",
                    ].join(" ")}
                  >
                    {company.name}
                  </h3>
                </div>

                <p
                  className={[
                    "text-gray-500 leading-relaxed",
                    useSingleCardLayout
                      ? "mt-5 text-[14px] max-w-xl mx-auto"
                      : useTwoCardLayout
                        ? "mt-4 text-[13px]"
                        : "mt-3 text-[12px]",
                  ].join(" ")}
                >
                  {company.preview}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
