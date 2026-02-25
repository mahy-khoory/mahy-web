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
            <ServicesGlobally />
            {/* <CompanyDetailMenu /> */}
            <CompanyDetailCards />
            <CompanyTextGrid />
            <CompanyTextOnBackground />
        </main>
    )
}

export default CompanyDetailPage