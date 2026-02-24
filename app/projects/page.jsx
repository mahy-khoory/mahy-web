import ProjectCard from "@/components/Home/ProjectCard";
import ProjectHighlightsGrid from "@/components/Projects/ProjectHighlightsGrid";
import ProjectsOverview from "@/components/Projects/ProjectsOverview";
import Breadcrumb from "@/components/UI/Breadcrumb";
import JobList from "@/components/UI/jobs/JobList";
import PageHeading from "@/components/UI/PageHeading";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

const PROJECTS = [
  {
    title: "PUBLIC",
    image: "/gallery/gallery-1.jpg",
    href: "/companies",
  },
  {
    title: "INFRASTRUCTURE",
    image: "/gallery/gallery-2.jpg",
    href: "/companies",
  },
  {
    title: "AIRPORTS",
    image: "/gallery/gallery-3.jpg",
    href: "/companies",
  },
  {
    title: "HIGH",
    image: "/gallery/gallery-4.jpg",
    href: "/companies",
  },
  {
    title: "ELECTROMECHANICAL",
    image: "/gallery/gallery-6.jpg",
    href: "/companies",
  },
];

async function Jobs({ searchParams }) {
  // const params = await searchParams;
  // const t = await getTranslations("JobsPage");
  // const t2 = await getTranslations("CareersPage");
  const locale = await getLocale();

  // const formLabels = {
  //     title: t("FormTitle"),
  //     label1: t("Label1"),
  //     label2: t("Label2"),
  //     label3: t("Label3"),
  //     button1: t("Button1"),
  //     button2: t("Button2"),
  //     cta: t("Cta"),
  // }

  return (
    <main>
      {/* <PageHeading title={"Projects"} image={"/gallery/gallery-6.jpg"} />
      <Breadcrumb
        segments={[{ label: "Projects", href: "/projects" }]}
        locale={locale}
      />
      <section className="py-14 md:py-20">
        <div className="mx-auto max-w-[1440px] px-4 md:px-8">
          <div
            className="
            grid
            gap-6
            grid-cols-1
            sm:grid-cols-2
            md:grid-cols-3
            xl:grid-cols-5
          "
          >
            {PROJECTS.map((item, index) => (
              <ProjectCard key={`${item.title}`} {...item} />
            ))}
          </div>
        </div>
      </section> */}
      <ProjectsOverview />
      {/* <ProjectHighlightsGrid /> */}
    </main>
  );
}

export default Jobs;
