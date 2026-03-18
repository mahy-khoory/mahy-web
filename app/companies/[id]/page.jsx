import CompanyDetailCards from '@/components/UI/companies/detail/CompanyDetailCards'
import CompanyDetailMenu from '@/components/UI/companies/detail/CompanyDetailMenu'
import CompanyOverview from '@/components/UI/companies/detail/CompanyOverview'
import CompanyTextGrid from '@/components/UI/companies/detail/CompanyTextGrid'
import CompanyTextOnBackground from '@/components/UI/companies/detail/CompanyTextOnBackground'
import CompanyVisionPurpose from '@/components/UI/companies/detail/CompanyVisionPurpose'
import ServicesGlobally from '@/components/UI/companies/detail/ServicesGlobally'

function CompanyDetailPage() {
    return (
        <main>
            <CompanyOverview />
            {/* <CompanyVisionPurpose /> */}
            <ServicesGlobally
                heading="Your Single-Point Solution"
                text="Whether you need a one-time repair, a full system overhaul, or a long-term maintenance partner, our service team delivers reliability, accountability, and technical excellence."
                texts2={[
                    "Talk to us today to discuss a service plan or AMC tailored to your building and operational needs."
                ]}
            />
            {/* <CompanyDetailMenu /> */}
            <CompanyDetailCards />
            <CompanyTextGrid />
            <CompanyTextOnBackground />
        </main>
    )
}

export default CompanyDetailPage