import EnterprisePinnedContainer from '@/components/Layout/EnterprisePinnedContainer'
import EnterprisePinnedSection from '@/components/Layout/EnterprisePinnedSection'
import SubPageHeading from '@/components/UI/SubPageHeading'
import { Fragment } from 'react'

function SustainabilityEnvironmentPage() {
    const sections = [
        {
            title: "Sustainability as a Core Strategy",
            bullets: [
                "Sustainability is embedded at the core of the MAHY Khoory Group's operating model and long-term strategy.",
                "The Group is a regional leader in circular-economy practices, integrating waste collection, recycling, manufacturing, and sustainable product development into a unified environmental ecosystem."
            ],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776679387/recycling-symbol-green-wall-modern-office.jpg_hflmu9.jpg",
        },
        {
            title: "Circular Economy & Resource Recovery",
            bullets: [
                "Recycling and resource recovery operations supply recovered materials directly into the Group's manufacturing facilities, where waste paper, wood, plastics, and other materials are transformed into high-value industrial products.",
                "This closed-loop approach significantly reduces landfill dependency and reliance on virgin resources."
            ],
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776679481/skyscrapers-tokyo.jpg_e2niyf.jpg",
        },
        {
            title: "Comprehensive Environmental Services",
            bullets: [
                "Environmental services extend beyond recycling to include solid waste management, hazardous waste handling, oil recovery, and compliant disposal services across the UAE and Oman.",
                "These operations support municipalities, industries, and commercial clients in meeting regulatory and sustainability objectives."
            ],
            image: "/processes/customer-service.avif",
        },
        {
            title: "Renewable Energy & Green Solutions",
            bullets: [
                "The Group also invests in renewable energy solutions, energy-efficient systems, and green-building consultancy.",
                "It enables both internal operations and external clients to reduce carbon emissions and operating costs."
            ],
            image: "/processes/UAE.avif",
        },
        {
            title: "Commitment to Sustainable Growth",
            bullets: [
                "Through responsible growth, continuous environmental investment, and measurable sustainability outcomes, the MAHY Khoory Group demonstrates that environmental stewardship and industrial scale can advance together."
            ],
            image: "/processes/manufacturer.avif",
        },
    ];

    return (
        <Fragment>
            <SubPageHeading
            fullHeight
                title={"Sustainability & Environment"}
                image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776677556/corporate-sustainability.jpg_vhc4mz.jpg"}
            />
            <EnterprisePinnedSection sections={sections} />
        </Fragment>
    )
}

export default SustainabilityEnvironmentPage