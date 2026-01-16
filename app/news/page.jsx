import { Suspense } from "react";
import PageHeading from "@/components/UI/PageHeading";
import Breadcrumb from "@/components/UI/Breadcrumb";
import NewsroomIntro from "@/components/UI/news/NewsroomIntro";
import FeaturedNews from "@/components/UI/news/FeaturedNews";
import NewsCard from "@/components/UI/news/NewsCard";
import Pagination from "@/components/UI/news/Pagination";
import SwipeableNewsGrid from "@/components/UI/news/SwipeableNewsGrid";
import { getArticle, getArticles } from "@/utlils/articles";
import { getTranslations } from "next-intl/server";
import { articles } from "@/constants/articles";
import { getLocale } from "@/utlils";

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

  const articleTranslations = await getTranslations('Articles');
  const news = getArticles(start, end, articleTranslations);
  const featuredArticle = getArticle(1, articleTranslations);
  const locale = await getLocale();

  return (
    <main className="pb-10">
      <PageHeading
        title={t("Heading")}
        description={t("Description")}
        image="/gallery/gallery-2.jpg"
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
