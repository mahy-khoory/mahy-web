import SolarPanelInstallationsGrid from "@/components/Services/SolarPanel/SolarPanelInstallationsGrid";
import WasteCollectionMenu from "@/components/Services/WasteCollection/WasteCollectionMenu"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import WhyUs from "@/components/UI/home/WhyUs";
import SubPageHeading from "@/components/UI/SubPageHeading"

function DxArfAirConditioningPage() {
    const tabItems = [
        {
            title: "DX (Direct Expansion) Systems",
            text: "High-efficiency DX systems designed for diverse applications, offering stable cooling performance with low energy consumption. Available options include:",
            options: [
                "Ducted split units (residential & commercial)",
                "Decorative wall-mounted units",
                "Cassette-type units",
                "Ceiling-concealed units",
                "Floor-standing units"
            ],
            endText: "Ideal for residential buildings, offices, retail spaces, and light commercial applications."
        },
        {
            title: "VRF (Variable Refrigerant Flow) Systems",
            text: "Advanced VRF technology suitable for medium and large-scale buildings, offering:",
            options: [
                "Simultaneous cooling/heating options",
                "Superior energy efficiency",
                "Individual zone control",
                "Longer piping lengths for design flexibility",
                "High ambient performance for UAE climate"
            ],
            endText: "VRF systems are ideal for offices, hotels, villas, commercial complexes, and mixed-use buildings."
        },
        {
            title: "Fresh Air Handling & Ventilation Solutions",
            text: "We supply a wide range of indoor air quality equipment designed to maintain healthy and balanced airflow:",
            options: [
                "Fresh Air Units (FAU)",
                "Energy Recovery Ventilators (ERV)",
                "Heat Recovery Units",
                "Treated Fresh Air Units (TFAU)"
            ],
            endText: "These systems enhance air quality while reducing energy load on air conditioning units."
        }
    ];
    const serviceOfferings = [
        {
            title: "Technical Consultation & System Design",
            text: "Our technical sales and application engineers evaluate building requirements and recommend the most efficient and cost-effective cooling solution."
        },
        {
            title: "Installation Support & Commissioning",
            text: "We provide complete installation guidance, supervision, and commissioning support to ensure optimal system performance."
        },
        {
            title: "Replacement, Upgrades & Retrofits",
            text: "We assist customers in:",
            list: [
                "Replacing old cooling systems",
                "Upgrading to VRF for improved efficiency",
                "Retrofitting ventilation units for better IAQ",
                "Enhancing overall system performance"
            ],
        },
        {
            title: "After-Sales Service & Customer Support",
            text: "Our support team ensures long-term system reliability through:",
            list: [
                "Prompt troubleshooting assistance",
                "Warranty coordination",
                "Scheduled maintenance upon request"
            ],
        }
    ];
    const applications = {
        data: [
            {
                title: "Performance Advantages",
                content:
                    <ApplicationElement
                        items={[
                            "Reliable cooling performance built for harsh climates",
                            "High energy efficiency and reduced operating costs",
                            "Flexible system design for all building types",
                            "Low noise operation for improved comfort",
                            "Advanced filtration and air quality solutions",
                            "Strong engineering support and dedicated after-sales service"
                        ]} />
            },
            {
                title: "Applications",
                content:
                    <ApplicationElement
                        items={[
                            "Residential buildings, villas & apartments",
                            "Commercial offices and retail spaces",
                            "Hospitals, clinics, and healthcare facilities",
                            "Hotels, hospitality, and mixed-use developments",
                            "Schools, universities, and institutional buildings",
                            "Warehouses, workshops, and industrial facilities"
                        ]} />
            }
        ]
    };

    return (
        <main>
            <SubPageHeading
                title={"DX & VRF Air Conditioning Systems"}
                image={"/gallery/gallery-1.jpg"}
            />
            <TrustedAdvisorSection
                heading="Overview"
                texts={[
                    "Our Air Conditioning Division provides a complete range of DX (Direct Expansion) and VRF (Variable Refrigerant Flow) systems engineered for high performance, energy efficiency, and long-term reliability. Designed for residential, commercial, and industrial applications, our solutions ensure optimal indoor comfort even in the harsh climatic conditions of the UAE.",
                    "With an extensive selection of ducted split units, decorative split units, fresh air units, ERVs, and advanced VRF technologies, we deliver cooling systems tailored to meet any building’s mechanical requirements. Our experienced technical sales and application team ensures every project receives precise engineering, reliable system design, and cost-effective installation support.",
                    "Customer satisfaction, system quality, and dependable after-sales service remain the foundation of our commitment."
                ]}
            />
            <WasteCollectionMenu
                heading="Product-Oriented Features"
                tabs={tabItems.map((item) => item.title)}
                items={tabItems.map((item) => featuresElement({ item }))}
            />
            <SolarPanelInstallationsGrid
                heading="Service-Oriented Offerings"
                items={serviceOfferings}
            />
            <WhyUs
                items={applications}
                reverse={true}
            />
        </main>
    )
};

const featuresElement = ({ item }) => (
    <div className="text-gray-700">
        <p>{item.text}</p>
        <ul className="list-disc pl-5 my-4">
            {item.options.map((option, index) => (
                <li key={index}>{option}</li>
            ))}
        </ul>
        <p className="text-sm italic">{item.endText}</p>
    </div>
);

const ApplicationElement = ({ items }) => (
    <div className="text-gray-700">
        <ul className="list-disc pl-5">
            {items.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>
    </div>
);

export default DxArfAirConditioningPage