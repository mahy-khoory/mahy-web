import CorporateGovernance from '@/components/UI/about-us/CorporateGovernance'
import SubPageHeading from '@/components/UI/SubPageHeading'

function CorporateGovernancePage() {
    return (
        <main>
            <SubPageHeading
                title={"Corporate Governance"}
                description={"Our Corporate Governance framework ensures transparency, accountability, and ethical decision-making across all operations. We adhere to robust policies, regulatory compliance, and clear oversight structures to protect stakeholder interests. This governance approach strengthens trust, sustainability, and long-term organizational integrity."}
                image={"/gallery/gallery-1.jpg"}
            />
            <CorporateGovernance />
        </main>
    )
}

export default CorporateGovernancePage