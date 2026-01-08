import CorporateGovernance from '@/components/UI/about-us/CorporateGovernance'
import SubPageHeading from '@/components/UI/SubPageHeading'

function CorporateGovernancePage() {
    return (
        <main>
            <SubPageHeading
                title={"Corporate Governance"}
                description={"MAHY Khoory Group is committed to maintaining high standards of corporate governance across all its businesses. Strong governance is fundamental to the Group's long-term success, supporting responsible decision-making, operational integrity, and sustainable value creation for all stakeholders."}
                description2={"The Group's governance framework is designed to ensure transparency, accountability, and effective oversight, while enabling management teams to operate efficiently and respond to evolving market conditions."}
                image={"/gallery/gallery-1.jpg"}
            />
            <CorporateGovernance />
        </main>
    )
}

export default CorporateGovernancePage