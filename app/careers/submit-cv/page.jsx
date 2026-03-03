import ServicesGlobally from '@/components/UI/companies/detail/ServicesGlobally'
import SubPageHeading from '@/components/UI/SubPageHeading'
import React from 'react'

function SubmitCv() {
    return (
        <main>
            <SubPageHeading
                title={"Submit Your CV"}
                description={"MAHY Khoory Group welcomes experienced professionals, specialists, and motivated individuals who are interested in building a long-term career within a diversified, multi-sector organization."}
                image={"/gallery/gallery-2.jpg"}
            />
            <ServicesGlobally
                heading='Submit Your CV'
                text={false}
                texts1={[
                    { text: "You may submit your updated CV directly to:", link: false },
                    { text: "careers@mahykhoory.com", link: true },
                    { text: "When sending your application, please include:", link: false },
                ]}
                items={[
                    "Your full name",
                    "Area of expertise or desired department",
                    "Years of experience",
                    "Current location and contact details",
                    "Any relevant certifications or licenses"
                ]}
                texts2={[
                    "Our Human Resources team will review your profile and maintain it within our centralized talent database. As a holding group comprising 25 companies across manufacturing, trading, engineering, logistics, waste management, automotive, hospitality, and other sectors, opportunities may arise within different subsidiaries based on operational requirements.",
                    "You are also encouraged to explore the individual websites of the companies listed under the Companies section of our website. Several subsidiaries may have dedicated career pages where you can apply directly for company-specific roles aligned with your professional background.",
                    "All applications are handled with strict confidentiality and are evaluated based on qualifications, experience, and alignment with organizational needs.",
                    "We look forward to connecting with talented individuals who are ready to contribute to a performance-driven and technology-focused organization."
                ]}
            />
        </main>
    )
}

export default SubmitCv