import { articles } from "@/constants/news"; //my correct data now
import { getLocale } from "@/utlils";
import { getArticle } from "@/utlils/articles";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";
import React from "react";

async function Article({ params }) {
  const { id } = await params;
  const article = articles.find((a) => a.id === Number(id));
  const locale = await getLocale();

  if (!article) return notFound();

  return (
    <main className="max-w-4xl mx-auto pt-22 pb-15 animate-fade-in">
      <h1
        className={`text-3xl lg:text-5xl font-semibold leading-tight uppercase ${locale !== "ar" && "tracking-tighter"} px-4`}
      >
        {article.heading}
      </h1>
      <div className="text-lg mt-7 px-4 t-base">
        {article.date.toLocaleString(locale, {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </div>
      <div className="md:px-4 mt-3">
        <div className="relative w-full h-80 lg:h-140">
          <Image
            src={article.image}
            fill
            style={{ objectFit: "cover" }}
            alt={article.heading}
          />
        </div>
      </div>
      <div className="mt-12 px-4">
        {article.subHeading.split("\n").map((line, i) => (
          <h2
            key={i}
            className="text-xl lg:text-2xl font-medium text-justify inter-word mb-4"
          >
            {line}
          </h2>
        ))}
      </div>
      <div className="text-xl mt-10 font-light text-justify inter-word px-4">
        {article.article.split("\n").map((line, i) => (
          <p key={i} className="mb-6 leading-relaxed">
            {line}
          </p>
        ))}
      </div>
    </main>
  );
}

export default Article;
