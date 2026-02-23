import EnterprisePinnedContainer from '@/components/Layout/EnterprisePinnedContainer'
import SubPageHeading from '@/components/UI/SubPageHeading'
import { Fragment } from 'react'

function SustainabilityEnvironmentPage() {
    return (
        <Fragment>
            <SubPageHeading
                title={"Sustainability & Environment"}
                image={"/gallery/gallery-2.jpg"}
            />
            <EnterprisePinnedContainer />
        </Fragment>
    )
}

export default SustainabilityEnvironmentPage