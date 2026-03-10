import Breadcrumb from "@/components/UI/Breadcrumb";
import FiltersSection from "@/components/UI/shop/FiltersSection";
import { projectFilters } from "@/constants/projects";
import { getLocale } from "next-intl/server";

async function ProjectsPage({ searchParams }) {
  const params = await searchParams;
  const locale = await getLocale();
  const {
    search = "",
    location,
    sector,
    developer,
    projectScale,
    page = 1,
  } = params;

  return (
    <main className="pb-14 pt-16 max-w-350 mx-auto px-4">
      <Breadcrumb segments={[{ label: "Projects", href: "/shop" }]} locale={locale} maxWidth={false} />
      <div id="list" className="flex flex-col md:flex-row min-h-screen relative mt-4">
        <FiltersSection filters={projectFilters} />
      </div>
    </main>
  );
}

export default ProjectsPage;

{/* <ProjectsOverview /> */ }