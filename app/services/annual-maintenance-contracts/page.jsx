import AnnualMaintenanceContracts from '@/components/Services/AnnualMaintenanceContracts'
import ServicesSection from '@/components/Services/ServicesSection'
import TrustedAdvisorTabs from '@/components/Services/TrustedAdvisorTabs'
import TrustedAdvisorSection from '@/components/TrustedAdvisorSection'

function AnnualMaintenanceContractsPage() {
    return (
        <main>
            <AnnualMaintenanceContracts />
            <TrustedAdvisorSection/>
            <ServicesSection/>
            <TrustedAdvisorTabs/>
        </main>
    )
}

export default AnnualMaintenanceContractsPage