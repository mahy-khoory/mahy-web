import SolarPanelImagesGrid from '@/components/Services/SolarPanel/SolarPanelImagesGrid'
import SubPageHeading from '@/components/UI/SubPageHeading'

function OpportunitiesPage() {
    const items = [
        { title: "Diverse Career Opportunities", text: "MAHY Khoory Group is a diversified, multi-sector organization operating across manufacturing, trading, engineering, logistics, waste management, automotive, hospitality, and other key industries. As our businesses continue to evolve and expand, career opportunities may arise across different subsidiaries based on operational needs and strategic growth plans." },
        { title: "Centralized Recruitment Process", text: "Our recruitment activities are managed centrally by our Human Resources team. When hiring requirements arise, positions are announced through official channels, including professional platforms such as LinkedIn and other authorized recruitment portals." },
        { title: "Talent & Expertise Focus", text: "We are continuously interested in engaging with qualified professionals who demonstrate strong technical competence, integrity, discipline, and a commitment to performance excellence. Opportunities may become available across operational, technical, managerial, financial, and digital transformation functions within the group." },
        { title: "Dynamic Workforce Structure", text: "As a holding organization with multiple subsidiaries, workforce requirements vary depending on projects, expansion initiatives, and business priorities. This dynamic structure allows professionals to potentially explore opportunities across different sectors within the group." },
        { title: "Stay Connected & Apply", text: "We encourage interested candidates to remain connected with MAHY Khoory Group through our official communication platforms and to submit their professional profiles through our Submit Your CV section. All applications are reviewed and maintained within our internal talent database for future consideration when suitable roles become available." },
        { title: "Long-Term Professional Growth", text: "Our objective is to build long-term professional relationships with individuals who are aligned with our values and who are prepared to contribute meaningfully to a structured, performance-driven, and forward-looking organization." }
    ];

    return (
        <main>
            <SubPageHeading
                title={"Career Opportunities"}
                image={"/gallery/gallery-2.jpg"}
            />
            <div className='mt-8 lg:mb-260 xl:mb-220'>
                <SolarPanelImagesGrid
                    heading='Overview'
                    items={items}
                />
            </div>
        </main>
    )
}

export default OpportunitiesPage