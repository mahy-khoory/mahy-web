import { getTranslations } from "next-intl/server";
import Link from "next/link";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

export default async function Breadcrumb({ segments, locale, maxWidth = true }) {
  const t = await getTranslations("HomePage");
  return (
    <nav aria-label="Breadcrumb" className="w-full border-b border-black/1">
      <div className={`${maxWidth && "max-w-7xl mx-auto"} px-5 pt-5`}>
        <ol className="flex flex-wrap items-center text-sm text-black/70">
          <li className="flex items-center"><Link href="/" className="hover:text-black transition">{t("Page")}</Link></li>
          {segments.map((segment, index) => (
            <li key={segment.href} className="flex items-center">
              {locale === "ar"
                ? <HiChevronLeft className="mx-2 text-black/40 shrink-0" />
                : <HiChevronRight className="mx-2 text-black/40 shrink-0" />}
              {index === segments.length - 1
                ? (<span className="font-medium text-black">{segment.label}</span>)
                : (<Link href={segment.href} className="hover:text-black transition">{segment.label}</Link>)}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}