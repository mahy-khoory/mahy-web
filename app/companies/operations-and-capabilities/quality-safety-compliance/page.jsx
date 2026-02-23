import CompanyDetailCards from '@/components/UI/companies/detail/CompanyDetailCards'
import SubPageHeading from '@/components/UI/SubPageHeading'
import { Fragment } from 'react'

function QualitySafetyCompliancePage() {
    return (
        <Fragment>
            <SubPageHeading
                title={"Quality, Safety & Compliance"}
                image={"/gallery/gallery-2.jpg"}
            />
            <CompanyDetailCards />
        </Fragment>
    )
}

export default QualitySafetyCompliancePage