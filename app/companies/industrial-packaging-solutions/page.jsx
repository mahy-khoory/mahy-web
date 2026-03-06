import CompaniesSectors from "@/components/CompaniesSectors"

function IndustrialPackagingSolutionsPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1772795494/industrial-packaging-solutions_mx9ipx.jpg"}
                    title={"Industrial Packaging Solutions"}
                    texts={[
                        "This sector manufactures corrugated, paper - based, and rigid plastic packaging solutions for diverse industries.",
                        "The Packaging Manufacturing & Sustainable Packaging Solutions sector focuses on transforming recycled and virgin materials into finished packaging products for FMCG, food and beverage, industrial, logistics, agriculture, and export markets.",
                        "Capabilities include corrugated carton manufacturing, customized paper-based packaging, and rigid plastic containers such as bottles, jerrycans, and industrial packaging. Strong design, converting, and printing capabilities allow for tailored solutions that balance strength, functionality, branding, and sustainability.",
                        "Close integration with the Group’s paper recycling operations ensures consistent raw-material quality and supports environmentally responsible packaging solutions aligned with circular economy principles."
                    ]}
                    companiesHeading={true}
                    items={[
                        "National Paper Industries (NPI)",
                        "Union Sustainable Packaging Solutions LLC",
                        "Senan Industry LLC"
                    ]}
                />
            </section>
        </main>
    )
}

export default IndustrialPackagingSolutionsPage