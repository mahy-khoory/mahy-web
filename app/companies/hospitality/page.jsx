import CompaniesSectors from "@/components/CompaniesSectors"
import SolarPanelInstallationsGrid from "@/components/Services/SolarPanel/SolarPanelInstallationsGrid"

function HospitalityPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Hospitality"}
                    texts={[
                        "This sector operates serviced hotel apartments offering premium accommodation.",
                        "The Hospitality sector delivers high-quality serviced accommodation for business and leisure travelers, combining hotel services with residential comfort in strategic urban locations."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Pearl Marina Hotel Apartments"
                    ]}
                />
            </section>
            <SolarPanelInstallationsGrid />
        </main>
    )
}

export default HospitalityPage