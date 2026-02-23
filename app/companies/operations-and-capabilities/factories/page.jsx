import TrustedAdvisorSection from '@/components/TrustedAdvisorSection'
import SubPageHeading from '@/components/UI/SubPageHeading'
import { Fragment } from 'react'

function FactoriesPage() {
    return (
        <Fragment>
            <SubPageHeading
                title={"Manufacturing Facilities"}
                image={"/gallery/gallery-2.jpg"}
            />
            <TrustedAdvisorSection />
        </Fragment>
    )
}

export default FactoriesPage