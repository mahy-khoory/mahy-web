import CompaniesSectors from "@/components/CompaniesSectors"

function WasteManagementPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Waste Management"}
                    texts={[
                        "This sector delivers comprehensive waste management and environmental services across multiple waste streams.",
                        "The Waste Management, Recycling & Environmental Services sector provides municipal, commercial, industrial, recyclable, and hazardous waste management services across the UAE and Oman.",
                        "Operations include waste collection, segregation, recycling, hazardous waste transport, and compliant disposal. The sector supports landfill diversion, regulatory compliance, and resource recovery while supplying recyclable materials into the Group’s manufacturing ecosystem.",
                        "Through scale, geographic coverage, and operational discipline, the sector plays a central role in advancing sustainability and circular economy objectives."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Recyclable Waste Management Division",
                        "Solid Waste Management Division",
                        "Al Dhafra Waste Collection LLC",
                        "Around Continent Waste Collection",
                        "Al Etihad Waste Management Services LLC (Oman)",
                        "Clean Earth LLC"
                    ]}
                />
            </section>
        </main>
    )
}

export default WasteManagementPage