import ExploreSection from "@/components/UI/about-us/ExploreSection"
import SubPageHeading from "@/components/UI/SubPageHeading"

function CapabilitiesPage() {
    return (
        <main>
            <SubPageHeading
                title={"Our Key Capabilities & Expertise"}
                description={"Our key capabilities and expertise span strategic planning, advanced technology integration, and operational excellence. We deliver tailored solutions through deep industry knowledge, innovation-driven processes, and skilled teams. This enables us to consistently achieve high-quality outcomes and long-term value for our partners."}
                image={"/gallery/gallery-1.jpg"}
            />
            <ExploreSection />
        </main>
    )
}

export default CapabilitiesPage