import CompaniesSectors from "@/components/CompaniesSectors"
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid"
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid"
import TrustedAdvisorSection from "@/components/TrustedAdvisorSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"
import CompanyTextOnBackground from "@/components/UI/companies/detail/CompanyTextOnBackground"

function CreativeSolutionsPage() {
    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Creative Solutions Green Building Consultancy"
                texts={[
                    "Creative Solutions Green Building Consultancy is MAHY Khoory Group’s specialized sustainability and green-building advisory arm, established to support environmentally responsible design, energy efficiency, and high-performance building operations. The consultancy integrates architectural insight with environmental and energy engineering expertise to help clients achieve internationally recognized green-building standards.",
                    "Serving as the Group’s center of excellence for sustainable development, Creative Solutions translates MAHY Khoory’s sustainability commitments into practical, measurable building strategies across the UAE."
                ]}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Services and Expertise"}
                    texts={[
                        "Creative Solutions provides end-to-end sustainability consultancy services, including:",
                    ]}
                    items={[
                        "Green-building assessments and certification advisory",
                        "LEED, WELL, ESTIDAMA, and Dubai Green Building compliance",
                        "Energy audits and performance benchmarking",
                        "Energy and water modeling and optimization",
                        "Mechanical and electrical system commissioning",
                        "Post-occupancy performance monitoring"
                    ]}
                    endText={"The consultancy supports projects from early design through construction and operational handover, ensuring that sustainability goals are embedded throughout the building lifecycle."}
                />
            </section>
            <SolarPanelQuoteGrid
                heading="Markets and Client Sectors"
                text="Creative Solutions serves clients across:"
                items={[
                    "Commercial and office developments",
                    "Hospitality and mixed-use projects",
                    "Residential and institutional buildings",
                    "Public infrastructure and government facilities",
                    "Industrial and manufacturing sites"
                ]}
                quoteText="Clients include developers, architects, consultants, asset owners, and public-sector entities seeking improved operational efficiency, regulatory compliance, and reduced environmental impact."
            />
            <TrustedAdvisorSection
                heading="Technology and Innovation"
                texts={[
                    "The consultancy leverages advanced digital tools, including energy-modeling software, daylight simulations, and Building Information Modeling (BIM). Its team includes U.S. Department of Energy–certified Pumping Systems Assessors and internationally accredited sustainability professionals.",
                    "Creative Solutions remains actively engaged with global green-building platforms and professional forums, ensuring access to the latest sustainability technologies, smart-building systems, and renewable-energy integration strategies."
                ]}
            />
            <CompanyTextOnBackground
                heading="Strategic Projects and Partnerships"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592634/Engineering-services-Advanced_System_Design.jpg_amb0ik.jpg"
                align="left"
                text="Creative Solutions has contributed to high-profile projects, including sustainability initiatives within MAHY Khoory Group’s own facilities and advisory roles on environmentally responsible developments across Dubai and the wider UAE."
                endText={"The consultancy collaborates with international technology providers, certification bodies, architecture firms, and engineering consultants, delivering integrated sustainability solutions aligned with project objectives and regulatory frameworks."}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Sustainability Impact"}
                    texts={[
                        "The firm measures success through quantifiable energy and water savings, reduced operating costs, and verified certification outcomes. By training facility operators and implementing continuous monitoring, Creative Solutions ensures that sustainability measures translate into long-term performance gains.",
                        "Its role within the Group enables knowledge transfer across MAHY Khoory’s industrial, hospitality, and real-estate assets, strengthening sustainability performance at a group-wide level."
                    ]}
                />
            </section>
            <CompanyTextOnBackground
                heading="Leadership and Team"
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
                align="left"
                text="Creative Solutions is led by senior professionals with recognized credentials in green architecture, energy engineering, and sustainability management. The team operates in close alignment with MAHY Khoory Group leadership, ensuring strategic consistency and technical excellence."
            />
        </main>
    )
}

export default CreativeSolutionsPage