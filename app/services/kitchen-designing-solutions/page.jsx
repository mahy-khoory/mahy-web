import BlobImageSection from '@/components/Services/Kitchen/BlobImageSection'
import KitchenBackgroundGrid from '@/components/Services/Kitchen/KitchenBackgroundGrid'
import KitchenHorizontalItems from '@/components/Services/Kitchen/KitchenHorizontalItems'
import KitchenImageGrid from '@/components/Services/Kitchen/KitchenImageGrid'
import KitchenImageScaledGrid from '@/components/Services/Kitchen/KitchenImageScaledGrid'
import KitchenItems from '@/components/Services/Kitchen/KitchenItems'
import KitchenMenu from '@/components/Services/Kitchen/KitchenMenu'
import CompanyDetailMenu from '@/components/UI/companies/detail/CompanyDetailMenu'
import SubPageHeading from '@/components/UI/SubPageHeading'
import React from 'react'

function KitchenDesignPage() {
    const overviewItems = [
        { text: "We proudly represent world-class brands such as Siemens, Bosch, MVP, and luxury Italian kitchen brands ARREDO3 and COMPOSIT, offering unmatched craftsmanship and design excellence.", icon: "/kitchen/kitchenGrid-1.svg" },
        { text: "Whether you are building a new kitchen or upgrading an existing one, we provide end-to-end design, manufacturing, supply, and installation services, including complete kitchen re-design projects.", icon: "/kitchen/kitchenGrid-2.svg" }
    ];
    const featuresData = [
        {
            label: "Product-Oriented Features",
            items: [
                {
                    label: "Premium Kitchen Appliances",
                    text: [
                        "We supply and install a full range of high-performance kitchen appliances from leading brands including:"
                    ],
                    subItems: [
                        "Siemens",
                        "Bosch",
                        "MVP"
                    ],
                    lastText: "Italian premium brands for built-in cooking, cooling, and ventilation systems. Our appliances offer advanced technology, energy efficiency, and long lifespan for modern living."
                },
                {
                    label: "High-Quality Countertops",
                    text: [
                        "A wide selection of durable and stylish countertop materials, including:"
                    ],
                    subItems: [
                        "Quartz",
                        "Granite",
                        "Marble"
                    ],
                    lastText: "Solid surface materials. Each countertop is fabricated to precision, ensuring seamless installation and long-lasting finish."
                },
                {
                    label: "Designer Sinks & Accessories",
                    text: [
                        "We offer a complete range of sinks, mixers, and kitchen accessories tailored for convenience, hygiene, and modern kitchen workflows."
                    ]
                },
                {
                    label: "Custom Kitchen Cabinets & Furniture",
                    text: [
                        "Expertly crafted cabinets designed for maximum storage, smooth functionality, and aesthetic appeal. Options include:"
                    ],
                    subItems: [
                        "Soft-closing drawers & hinges",
                        "Modular and tailor-made cabinets",
                        "Matte, glossy, wooden, and Italian finishes",
                        "Ergonomic layouts for optimal workflow"
                    ]
                },
            ]
        },
        {
            label: "Wardrobes & Closet Solutions",
            items: [
                {
                    label: "Built-In Wardrobes",
                    text: [
                        "Designed to maximize space and enhance room interiors with modern finishes and custom configurations."
                    ]
                },
                {
                    label: "Open Closets & Walk-In Closets",
                    text: [
                        "We design and install luxurious walk-in wardrobes and open storage systems, featuring:"
                    ],
                    subItems: [
                        "LED lighting",
                        "Custom shelving",
                        "Drawer units",
                        "Shoe racks",
                        "Glass shutters and premium hardware"
                    ]
                },
            ]
        },
        {
            label: "Service-Oriented Offerings",
            items: [
                {
                    label: "Complete Kitchen Design & Layout Planning",
                    text: [
                        "Our design team creates 2D/3D layouts based on customer preferences, space dimensions, and functional requirements."
                    ]
                },
                {
                    label: "Kitchen Re-Designing & Upgradation",
                    text: [
                        "We provide professional renovation and re-design services, including:"
                    ],
                    subItems: [
                        "Removing old cabinetry",
                        "Upgrading appliances",
                        "Changing countertops and sinks",
                        "Improving storage and workflow",
                        "Modernizing the overall design"
                    ]
                },
                {
                    label: "End-to-End Installation",
                    text: ["From fabrication to final installation, our technicians ensure flawless execution, on-time delivery, and premium finishing."]
                },
                {
                    label: "Measurement, Consultation & After-Sales Support",
                    text: ["We offer free site inspections, professional recommendations, and after-installation service for long-term customer satisfaction."]
                },
            ]
        },
        {
            label: "Advantages & Applications",
            items: [
                {
                    label: "Performance Advantages",
                    subItems: [
                        "Premium European and Italian brands",
                        "Tailor-made designs to match any interior style",
                        "High-quality materials and hardware",
                        "Space-optimized layouts",
                        "Durable finishing with long service life",
                        "Professional installation and reliable after-sales support"
                    ]
                },
                {
                    label: "Applications",
                    subItems: [
                        "Residential kitchens (apartments, villas, townhouses)",
                        "Commercial & hospitality kitchens",
                        "Pantry and service kitchens",
                        "Walk-in wardrobes",
                        "Dressing rooms and custom storage solutions"
                    ]
                }
            ]
        }
    ];

    return (
        <main>
            <SubPageHeading
                title={"Kitchen Designing Solutions"}
                image={"/gallery/gallery-1.jpg"}
            />
            <KitchenImageScaledGrid
                heading='Overview'
                texts={[
                    "Our Kitchen Designing Division specializes in delivering complete, high-quality kitchen solutions—from concept planning to full installation. We provide modern, functional, and aesthetically refined kitchen layouts tailored to villas, apartments, commercial kitchens, and hospitality projects across the UAE.",
                    "With a comprehensive range of premium appliances, custom cabinetry, high-quality countertops, sinks, and storage systems, we create kitchens that combine elegance, durability, and everyday practicality."
                ]}
                items={overviewItems}
            />
            <CompanyDetailMenu
                items={featuresData}
            />
            <KitchenImageGrid />
            <KitchenMenu />
            <KitchenBackgroundGrid />
            <KitchenHorizontalItems />
            <KitchenItems />
            <BlobImageSection />
        </main>
    )
}

export default KitchenDesignPage