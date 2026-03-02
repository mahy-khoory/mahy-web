import PumpingServiceCards from '@/components/Services/PumpingServiceCards'
import PumpingSystemServices from '@/components/Services/PumpingSystemServices'
import SubPageHeading from '@/components/UI/SubPageHeading'
import SplitScrollShowcase from '@/components/UI/SplitScrollShowcase'
import ServicedHotelApartments from '@/components/Services/ServicedHotelApartments'
import KitchenItems from '@/components/Services/Kitchen/KitchenItems'
import ValuesSection from '@/components/UI/about-us/ValuesSection'
import CompaniesSectors from '@/components/CompaniesSectors'
import SolarPanelQuoteGrid from '@/components/Services/SolarPanel/SolarPanelQuoteGrid'
import PalletProcessSection from '@/components/Products/PalletProcessSection'

function PumpingSystemServicesPage() {
    return (
        <main>
            <SubPageHeading
                title={"Pumping System Services"}
                image={"/gallery/gallery-8.jpeg"}
            />
            <ValuesSection
                title="Overview"
                description="We provide a complete suite of specialized services to ensure the reliability, performance, and long-term efficiency of chilled water systems, domestic water supply pumps (transfer & booster), sewage pumps, and other critical pumping installations. Every stage—from pre-installation assessment to commissioning, repair, and ongoing maintenance—is executed with precision and adherence to industry-best standards."
                imageSrc="/gallery/gallery-2.jpg"
                imageAlt="Our people"
                ctaHref={false}
                imagePosition="right"
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Pre-Installation Inspections"}
                    texts={[
                        "Thorough inspections are performed prior to installation to ensure system readiness and prevent future operational issues:"
                    ]}
                    items={[
                        "Complete inspection of pumps, motors, valves, control panels, and supplied accessories",
                        "Verification of technical specifications and build quality",
                        "Site readiness assessment for mechanical, electrical, and civil requirements",
                        "Early identification of potential installation challenges",
                        "Recommendations to avoid alignment, vibration, or hydraulic issues"
                    ]}
                    text2={"These inspections help ensure a smooth and trouble-free installation process."}
                />
            </section>
            <SolarPanelQuoteGrid
                heading='Professional System Commissioning'
                text='Our commissioning services are designed to optimize system performance from the very first day of operation:'
                items={[
                    "Full commissioning of booster sets, transfer systems, chilled water pumps, sewage pumps, and control panels",
                    "Laser alignment for chilled water pumps and high-precision applications",
                    "Functional checks of electrical and mechanical connections",
                    "Flow, pressure, and operational testing under actual load conditions",
                    "Vibration, noise, and temperature monitoring",
                    "Final handover report with system performance documentation"
                ]}
                quoteText='Proper commissioning ensures maximum efficiency, safety, and equipment lifespan.'
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Comprehensive Repair, Maintenance & Technical Support"}
                    texts={[
                        "We provide complete after-sales and lifecycle support to ensure minimal downtime and consistent operational reliability:"
                    ]}
                    items={[
                        "All warranty repairs are carried out in strict compliance with manufacturer procedures and quality standards.",
                        "Fast and accurate fault diagnosis followed by efficient repair, replacement, or adjustment.",
                        "Equipped for:",
                        "Pump overhauling & complete refurbishment",
                        "Bearing replacement & shaft rebalancing",
                        "Mechanical seal replacement",
                        "Impeller trimming, cleaning, and reassembly",
                        "Motor servicing & testing",
                        "End-to-end handling of warranty claims, including documentation, coordination with manufacturers, and final resolution.",
                        "Emergency callouts, troubleshooting, system optimization, and performance tuning as required."
                    ]}
                    noCheck={[3, 4, 5, 6, 7]}
                />
            </section>
            <PalletProcessSection
                processLabel='Value Delivered'
                mainImage="/gallery/gallery-1.jpg"
                secondaryImage="/gallery/gallery-2.jpg"
                steps={[
                    {
                        title: "Reliability Optimization",
                        description: "Enhanced system reliability & reduced downtime"
                    },
                    {
                        title: "Performance Enhancement",
                        description: "Improved hydraulic performance & energy efficiency"
                    },
                    {
                        title: "Certified Expertise",
                        description: "Certified servicing aligned with global pump manufacturer standards"
                    },
                    {
                        title: "Preventive Maintenance",
                        description: "Long-term operational stability through preventive maintenance"
                    },
                    {
                        title: "Efficient Repairs",
                        description: "Faster repair cycles through fully equipped workshops and trained technicians"
                    }
                ]}
            />
            <ServicedHotelApartments />
            <PumpingSystemServices />
            <PumpingServiceCards />
            <KitchenItems />
            <SplitScrollShowcase />
        </main>
    )
}

export default PumpingSystemServicesPage