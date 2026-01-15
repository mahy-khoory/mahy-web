import SolarPanelImageGrid from '@/components/Services/SolarPanel/SolarPanelImageGrid'
import SolarPanelImagesGrid from '@/components/Services/SolarPanel/SolarPanelImagesGrid'
import SolarPanelInstallations from '@/components/Services/SolarPanel/SolarPanelInstallations'
import SolarPanelInstallationsGrid from '@/components/Services/SolarPanel/SolarPanelInstallationsGrid'
import SolarPanelNumbers from '@/components/Services/SolarPanel/SolarPanelNumbers'
import SolarPanelQuoteGrid from '@/components/Services/SolarPanel/SolarPanelQuoteGrid'

function SolarPanelInstallationsPage() {
    return (
        <main>
            <SolarPanelInstallations />
            <SolarPanelImageGrid />
            <SolarPanelInstallationsGrid />
            <SolarPanelQuoteGrid />
            <SolarPanelNumbers />
            <SolarPanelImagesGrid />
        </main>
    )
}

export default SolarPanelInstallationsPage