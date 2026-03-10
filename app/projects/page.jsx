import Breadcrumb from "@/components/UI/Breadcrumb";
import ProjectListingCard from "@/components/UI/ProjectListingCard";
import FiltersSection from "@/components/UI/shop/FiltersSection";
import Pagination from "@/components/UI/shop/Pagination";
import { getProjects, projectFilters } from "@/constants/projects";
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

  const { items, total, totalPages } = getProjects(page, location, sector, developer, projectScale);

  return (
    <main className="pb-14 pt-16 max-w-350 mx-auto px-4">
      <Breadcrumb segments={[{ label: "Projects", href: "/shop" }]} locale={locale} maxWidth={false} />
      <div id="list" className="flex flex-col md:flex-row min-h-screen relative mt-4">
        <FiltersSection filters={projectFilters} />
        <div className="flex-1 overflow-y-auto">
          <div className="text-sm font-medium text-gray-700">Showing {items.length.toLocaleString(locale)} out of {total} Results </div>
          {/* No Projects */}
          {items.length === 0 ? (
            <div className="text-center text-gray-500 mt-20">
              <p className="text-lg">No projects found</p>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
                {items.map((item, i) => (
                  <ProjectListingCard key={i} project={item} />
                ))}
              </div>
              <Pagination currentPage={Number(page)} totalPages={totalPages} />
            </>
          )}
        </div>
      </div>
    </main>
  );
}

export default ProjectsPage;

{/* <ProjectsOverview /> */ }