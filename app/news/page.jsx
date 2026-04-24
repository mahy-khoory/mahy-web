import { Suspense } from "react";
import PageHeading from "@/components/UI/PageHeading";
import Breadcrumb from "@/components/UI/Breadcrumb";
import NewsroomIntro from "@/components/UI/news/NewsroomIntro";
import FeaturedNews from "@/components/UI/news/FeaturedNews";
import NewsCard from "@/components/UI/news/NewsCard";
import Pagination from "@/components/UI/news/Pagination";
import SwipeableNewsGrid from "@/components/UI/news/SwipeableNewsGrid";
import { getTranslations } from "next-intl/server";

import { getLocale } from "@/utlils";
import { articles } from "@/constants/news"; // my correct one now please use this

const itemsPerPage = 3;

export default function NewsPage({ searchParams }) {
  return (
    <Suspense fallback={<div className="py-10 text-center">Loading news...</div>}>
      <NewsContent searchParams={searchParams} />
    </Suspense>
  );
}

async function NewsContent({ searchParams }) {
  const params = await searchParams;
  const page = Number(params?.page) || 1;

  const t = await getTranslations("NewsPage");

  const start = (page - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const totalPages = Math.ceil(articles.length / itemsPerPage);

const news = articles.slice(start, end);
const featuredArticle = articles[0]; 
  const locale = await getLocale();

  return (
    <main className="pb-10">
      <PageHeading
        title={t("Heading")}
        description={t("Description")}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777027449/skyscrapers-from-low-angle-view_1.jpg_kcydkj.jpg"
      />

      <Breadcrumb segments={[{ label: t("Page"), href: "/news" }]} locale={locale} />
      <NewsroomIntro
        title={t("IntroHeading")}
        description={t("IntroText")}
      />

      <FeaturedNews
        image={featuredArticle.image}
        href={`/news/${featuredArticle.id}`}
        date={featuredArticle.date.toLocaleString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}
        title={featuredArticle.heading}
        excerpt={featuredArticle.subHeading}
        ctaLabel={t("Cta")}
      />

      <SwipeableNewsGrid key={`news-page-${page}`} page={page} totalPages={totalPages}>
        {news.map((item) => (
          <NewsCard
            key={item.id}
            id={item.id}
            image={item.image}
            date={item.date.toLocaleString(locale, { day: 'numeric', month: 'long', year: 'numeric' })}
            title={item.heading}
            excerpt={item.subHeading}
            href={`/news/${item.id}`}
            cta={t("Cta")}
          />
        ))}
      </SwipeableNewsGrid>
      <Pagination totalPages={totalPages} />
    </main>
  );
}
