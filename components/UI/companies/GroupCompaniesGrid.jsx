"use client";

import Image from "next/image";

export default function GroupCompaniesGrid({
  companies,
  title = "Group Companies",
  description = "A diversified portfolio of specialized companies operating across industrial, commercial, engineering, and service sectors.",
}) {
  const useStackedLayout = companies.length <= 2;

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
            useStackedLayout
              ? "max-w-3xl mx-auto grid grid-cols-1"
              : "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
          ].join(" ")}
        >
          {companies.map((company, i) => (
            <div
              key={i}
              className="
                border
                border-slate-400
                rounded-[8px]
                bg-white
                px-6
                py-5
                min-h-[160px]
                transition
                hover:border-slate-600
              "
            >
              <div className="flex items-center gap-4">
                <div className="relative w-10 h-10 shrink-0">
                  <Image
                    src={company.logo}
                    alt={company.name}
                    fill
                    className="object-contain"
                  />
                </div>

                <h3 className="text-[14px] font-semibold text-gray-900 leading-snug">
                  {company.name}
                </h3>
              </div>

              <p className="mt-3 text-[12px] text-gray-500 leading-relaxed">
                {company.preview}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
