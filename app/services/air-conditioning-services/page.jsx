import AirConditioningServicesItems from "@/components/Services/AirConditioningServicesItems"
import SubPageHeading from "@/components/UI/SubPageHeading"

function AirConditioningServicesPage() {
    return (
        <main>
            <SubPageHeading
                title={"Air Conditioning Services - Installation, Commissioning & Ongoing Support"}
                description={"We provide a comprehensive range of air conditioning and ventilation services designed to ensure year-round comfort, high system reliability, and long-term energy efficiency. From new installations to corrective repairs and lifecycle maintenance, every service is delivered with engineering accuracy and a strong commitment to customer satisfaction."}
                image={"/gallery/gallery-8.jpeg"}
            />
            <AirConditioningServicesItems />
        </main>
    )
}

export default AirConditioningServicesPage