import CompanyVisionPurpose from "@/components/UI/companies/detail/CompanyVisionPurpose"
import SubPageHeading from "@/components/UI/SubPageHeading"


function RecruitmentProcessPage() {
    const items = [
        {
            label: "Structured & Professional Evaluation",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773042594/Dubai_business_district_at_night_with_illuminated_skyscrapers.jpg_inqewf.jpg",
            items: [
                {
                    title: "Structured & Professional Evaluation",
                    text: "At MAHY Khoory Group, our recruitment process is aligned with the governance standards of a diversified holding organization. Every application is carefully reviewed to ensure the candidate’s qualifications, experience, and professional values match the operational and strategic needs of the group.",
                }
            ]
        },
        {
            label: "Department & HR Assessment",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773042651/corporate_workspace_with_a_sleek_desk_displaying_organized_documents.jpg_h6ggoy.jpg",
            items: [
                {
                    title: "Department & HR Assessment",
                    text: "Shortlisted candidates are interviewed by the relevant subsidiary or department to assess technical expertise, industry knowledge, and role-specific capabilities. Successful candidates then proceed to an evaluation by our central HR and HR Development team, where cultural alignment, professionalism, communication skills, and long-term suitability within the group are reviewed. For senior roles, final approval may involve higher management in accordance with internal procedures.",
                }
            ]
        },
        {
            label: "Offer & Onboarding",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773042687/corporate_office_desk_with_a_formal_employment_offer_letter_placed.jpg_xuuxei.jpg",
            items: [
                {
                    title: "Offer & Onboarding",
                    text: "If the evaluation confirms alignment with our standards and value expectations, a formal offer is issued. Upon acceptance, a structured onboarding process ensures smooth integration into the respective company while aligning the candidate with group policies, systems, and performance frameworks.",
                }
            ]
        },
    ];
    return (
        <main>
            <SubPageHeading
                title={"Recruitment Process"}
                image={"/gallery/gallery-2.jpg"}
            />
            <CompanyVisionPurpose
                heading="Recruitment Process"
                items={items}
                tabs={items.map((item) => item.label)}
                endText="Our recruitment approach reflects professionalism, fairness, and a commitment to appointing competent and accountable individuals who contribute to sustainable growth."
            />
        </main>
    )
}

export default RecruitmentProcessPage