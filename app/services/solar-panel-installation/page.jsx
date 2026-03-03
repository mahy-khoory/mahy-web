import SolarPanelImageGrid from '@/components/Services/SolarPanel/SolarPanelImageGrid'
import SolarPanelImagesGrid from '@/components/Services/SolarPanel/SolarPanelImagesGrid'
import SolarPanelInstallations from '@/components/Services/SolarPanel/SolarPanelInstallations'
import SolarPanelInstallationsGrid from '@/components/Services/SolarPanel/SolarPanelInstallationsGrid'
import SolarPanelNumbers from '@/components/Services/SolarPanel/SolarPanelNumbers'
import SolarPanelQuoteGrid from '@/components/Services/SolarPanel/SolarPanelQuoteGrid'
import CompanyDetailMenu from '@/components/UI/companies/detail/CompanyDetailMenu'
import SubPageHeading from '@/components/UI/SubPageHeading'

function SolarPanelInstallationsPage() {
    const menuItems = [
        {
            label: "Solar Panel Installation Services",
            items: [
                {
                    label: "Complete System Design & Engineering",
                    text: [
                        "Our engineering team conducts detailed site assessments and load analyses to design solar systems tailored to each project's requirements. Services include:"
                    ],
                    subItems: [
                        "Load calculation & design optimization",
                        "Engineering drawings & solar layout planning",
                        "Shading analysis & performance simulation",
                        "AC/DC electrical design"
                    ]
                },
                {
                    label: "Professional Installation & Commissioning",
                    text: [
                        "We offer full project execution from supply to commissioning, including:"
                    ],
                    subItems: [
                        "Mounting structure fabrication & installation",
                        "Solar panel alignment and interconnection",
                        "AC/DC cabling, earthing, and surge protection",
                        "System testing, commissioning & grid synchronization"
                    ]
                }
            ]
        },
        {
            label: "Car Parking & Structural Solar Mounting Solutions",
            items: [
                {
                    label: "Car Parking & Structural Solar Mounting Solutions",
                    text: [
                        "We provide custom-engineered solar car parking structures and heavy-duty mounting solutions designed to withstand UAE’s high temperatures, humidity, and wind loads. Capabilities include:"
                    ],
                    subItems: [
                        "Steel canopy design & fabrication",
                        "Shaded car park structures",
                        "Reinforced mounting frames & foundations",
                        "Integrated electrical routing & cable management",
                        "Anti-corrosion coatings & powder-coated finishes"
                    ],
                    endText: "These structures deliver both shading value and renewable energy production, enhancing property sustainability."
                },
                {
                    label: "Inverter & Electrical Control Panel Installation",
                    text: [
                        "Our electrical specialists handle the installation and configuration of all power management and control components, such as:"
                    ],
                    subItems: [
                        "On-grid & hybrid solar inverters",
                        "AC/DC control panels",
                        "Isolators, MCBs, MCCBs & protection systems",
                        "Combiner boxes & surge protection devices",
                        "SCADA-based monitoring units"
                    ],
                    endText: "All installations comply with UAE electrical standards and safety regulations."
                }
            ]
        },
        {
            label: "Authority Approvals & Compliance",
            items: [
                {
                    label: "Authority Approvals & Compliance",
                    text: [
                        "We offer full support for obtaining all required approvals and documentation, including:"
                    ],
                    subItems: [
                        "Solar installation NOCs",
                        "Grid connection approvals",
                        "DEWA/ADWEA/SEWA/FEWA compliance",
                        "Final inspection & safety certifications",
                        "As-built documentation & technical submissions"
                    ],
                    endText: "Our team ensures smooth coordination with UAE authorities for fast and compliant project delivery."
                }
            ]
        },
        {
            label: "O&M, Preventive & Corrective Maintenance Services",
            items: [
                {
                    label: "Preventive Maintenance",
                    subItems: [
                        "Scheduled inspections",
                        "Solar panel cleaning using approved methods",
                        "Electrical connection tightening",
                        "Inverter performance testing",
                        "Thermal imaging to detect hotspots",
                        "Monitoring system verification"
                    ],
                },
                {
                    label: "Corrective Maintenance",
                    subItems: [
                        "Fault diagnosis and troubleshooting",
                        "Inverter repair & replacement",
                        "Cable rectification & insulation testing",
                        "Damaged component replacement",
                        "System reset & recalibration"
                    ],
                    endText: "Real-time monitoring and detailed performance reporting are also available to maximize output and system lifespan."
                }
            ]
        },
        {
            label: "Solar Panel Replacement & System Upgrades",
            items: [
                {
                    label: "Solar Panel Replacement & System Upgrades",
                    text: [
                        "We offer end-to-end upgrade solutions, including:"
                    ],
                    subItems: [
                        "Replacement of damaged, aged, or underperforming panels",
                        "Inverter upgrades to improve efficiency",
                        "System expansion for increased load requirements",
                        "Integration of new technology for improved yield"
                    ],
                    endText: "These services ensure your solar system remains optimized for current and future needs."
                }
            ]
        },
        {
            label: "What's Included",
            items: [
                {
                    label: "Complete Solar Solutions Include:",
                    subItems: [
                        "Supply of Astro Energy, GINKO, and LONGI solar panels",
                        "Solar installation for homes, villas, warehouses, factories & malls",
                        "Structural mounting & steel solar car parking systems",
                        "Inverter & electrical control panel installation",
                        "Preventive & corrective maintenance contracts",
                        "O&M service agreements with performance assurance",
                        "Panel replacement, upgrades & system expansion",
                        "Full support for all authority approvals & compliance"
                    ]
                }
            ]
        },
    ];

    return (
        <main>
            <SubPageHeading
                title={"Solar Panel Installation & O&M Services"}
                description={"We deliver end-to-end solar energy solutions for residential, commercial, and industrial projects across the UAE covering system design, engineering, installation, commissioning, and long-term maintenance. Our solutions feature high-efficiency solar panels from globally trusted brands such as Astro Energy, GINKO, and LONGI, ensuring maximum energy generation, long-term stability, and superior performance under challenging UAE climate conditions."}
                image={"/gallery/gallery-2.jpg"}
            />
            <CompanyDetailMenu
                items={menuItems}
            />
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