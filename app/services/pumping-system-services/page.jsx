import PumpingServiceCards from '@/components/Services/PumpingServiceCards'
import PumpingSystemServices from '@/components/Services/PumpingSystemServices'
import SubPageHeading from '@/components/UI/SubPageHeading'
import SplitScrollShowcase from '@/components/UI/SplitScrollShowcase'

function PumpingSystemServicesPage() {
    return (
        <main>
            <SubPageHeading
                title={"Pumping System Services"}
                description={"Reliable pumping system services delivering optimal performance and long-term efficiency. From installation to maintenance, we ensure smooth and uninterrupted operations."}
                image={"/gallery/gallery-8.jpeg"}
            />
            <SplitScrollShowcase/>
            <PumpingSystemServices />
            <PumpingServiceCards />
        </main>
    )
}

export default PumpingSystemServicesPage