import CompaniesSectors from "@/components/CompaniesSectors";
import GroupCompaniesGrid from "@/components/UI/companies/GroupCompaniesGrid";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { getCompaniesBySector } from "@/constants/companyGroups";

function ManufacturingPage() {
    const companies = getCompaniesBySector("manufacturing");

    return (
        <main>
  <SubPageHeading
      fullHeight
        title="Manufacturing"
        // image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1772868318/Code_of_Conduct.jpg_qjqqzs.jpg"
        image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776626763/code-of-conduct_hujjya.jpg"}
        align="center"
      />

            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Manufacturing"}
                    texts={[
                        "This sector anchors the Group's industrial capabilities, driving large-scale production through integrated recycling, material transformation, and advanced manufacturing processes.",
                        "The Manufacturing sector focuses on converting recovered and recycled materials into high-quality industrial products, forming a core part of the Group's circular economy ecosystem. Operations include paper recycling and containerboard production, engineered wood manufacturing, and sustainable packaging solutions. Recovered paper is transformed into containerboard products such as linerboard and fluting medium, while reclaimed wood is processed into high-performance compressed eco-wood blocks that serve as sustainable alternatives to traditional timber.",
                        "In addition, the sector manufactures a wide range of corrugated, paper-based, and rigid plastic packaging solutions for industries including FMCG, food and beverage, logistics, construction, agriculture, and export markets. Capabilities include carton manufacturing, customized packaging design, and production of rigid containers such as bottles and jerrycans, supported by strong converting and printing expertise.",
                        "Operating advanced manufacturing facilities with significant production capacity, the sector ensures consistency, durability, and scalability across its product lines. Close integration between recycling and manufacturing operations enhances raw material efficiency, reduces environmental impact, and ensures reliable supply for downstream industries.",
                        "The sector is further supported by in-house technical services, including system assembly, installation, commissioning, and ongoing support for industrial and fluid-handling systems. These capabilities enhance operational efficiency, ensure system reliability, and support seamless execution across manufacturing and project environments.",
                        "Through its focus on sustainability, resource conservation, and operational excellence, the Manufacturing sector plays a strategic role in industrial self-sufficiency, waste reduction, and long-term value creation, while supporting environmentally responsible practices aligned with circular economy principles."
                    ]}
                />
            </section>
            <GroupCompaniesGrid
                companies={companies}
                title="Companies in This Sector"
                description="Businesses operating within this business sector of the Group."
            />
        </main>
    )
}

export default ManufacturingPage
