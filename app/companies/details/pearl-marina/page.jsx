import CompaniesSectors from "@/components/CompaniesSectors"
import EnterprisePinnedSection from "@/components/Layout/EnterprisePinnedSection"
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid"
import ValuesSection from "@/components/UI/about-us/ValuesSection"
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview"

function PearlMarinaPage() {
    const items = [
        {
            title: "Technology and Guest Experience",
            subtitle: "The hotel leverages modern hospitality technologies to enhance convenience, comfort, and security. These include:",
            bullets: [
                "Online booking and digital reservation platforms",
                "Smart televisions and key-card access systems",
                "Energy-efficient climate control",
                "24/7 security monitoring through CCTV and trained personnel",
            ],
            endText: "Digital concierge and guest-service platforms further streamline communication and service requests, aligning the property with contemporary hospitality standards.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592634/Engineering-services-Advanced_System_Design.jpg_amb0ik.jpg",
        },
        {
            title: "Strategic Positioning and Partnerships",
            subtitle: "As part of the MAHY Khoory Group, Pearl Marina Hotel Apartments benefits from cross-functional synergies across hospitality, logistics, and service operations. The property maintains partnerships with travel agencies, corporate accounts, and real estate networks to support consistent occupancy and long-term bookings.",
            endText: "Ongoing refurbishment and enhancement initiatives ensure the property remains competitive. Recent upgrades include interior improvements and enhancements to wellness and leisure facilities.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592573/engineering-services-single_skilled_technician.jpg_roa7p4.jpg",
        },
        {
            title: "Sustainability and Responsible Operations",
            subtitle: "Sustainability is integrated into daily operations at Pearl Marina Hotel Apartments. Initiatives include:",
            bullets: [
                "Energy-efficient lighting and climate systems",
                "Water-saving fixtures",
                "Waste segregation and recycling practices"
            ],
            endText: "These efforts contribute to reducing the property’s environmental footprint while supporting Dubai’s broader sustainability objectives within the hospitality sector.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776592457/engineering-page_single_professional_technic.jpg_mvffeg.jpg",
        }
    ];

    return (
        <main>
            <CompanyOverview
                image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
                heading="Market Restaurant & Café"
                texts={[
                    "Pearl Marina Hotel Apartments is a boutique hospitality property located in the heart of Dubai Marina, offering upscale, fully furnished serviced apartments designed for both short- and long-term stays. Operated as part of the MAHY Khoory Group’s hospitality portfolio, the property combines contemporary elegance with the dynamic lifestyle of Dubai’s Marina waterfront.",
                    "The hotel comprises 85 serviced apartments, ranging from studios to spacious three-bedroom units, housed within a modern high-rise development. Each apartment is thoughtfully designed to provide a home-like environment complemented by premium amenities and panoramic views of the Marina and surrounding skyline."
                ]}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Accommodation and Guest Services"}
                    texts={[
                        "Pearl Marina Hotel Apartments delivers a comprehensive serviced-apartment experience, combining hotel-level service with residential comfort. Core offerings include:"
                    ]}
                    items={[
                        "Fully furnished apartments with equipped kitchens or kitchenettes",
                        "Spacious living and dining areas with private balconies",
                        "24-hour front desk and concierge services",
                        "Daily housekeeping and laundry support",
                        "On-site dining options"
                    ]}
                    text2="Guests also benefit from a wide range of leisure and wellness facilities, including a fitness center, sauna and steam rooms, rooftop swimming pool, children’s play area, and complimentary high-speed Wi-Fi throughout the property."
                />
            </section>
            <ValuesSection
                title="Business and Corporate Facilities"
                description="The property is well suited to business travelers and corporate clients, offering dedicated business services, meeting rooms, and conference facilities. These amenities support executives, project teams, and long-stay corporate guests requiring a professional yet comfortable accommodation environment."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Business and Corporate Facilities"
                width="max-w-7xl mx-auto"
                ctaHref={false}
                imagePosition="left"
            />
            <SolarPanelQuoteGrid
                heading="Target Market and Guest Segments"
                text="Pearl Marina Hotel Apartments serves a diverse clientele, including:"
                items={[
                    "Business executives and corporate travelers",
                    "Project teams and long-stay professionals",
                    "Relocating families",
                    "Leisure tourists seeking apartment-style accommodation"
                ]}
                quoteText="Its strategic location near Dubai Internet City, Dubai Media City, major commercial districts, retail destinations, beaches, and leisure attractions makes it highly attractive to both regional and international guests."
            />
            <div className="mt-10 md:mt-15">
                <EnterprisePinnedSection sections={items} />
            </div>
            <ValuesSection
                title="Management and Team"
                description="The hotel is managed by an experienced hospitality leadership team, including a General Manager and departmental heads overseeing front office operations, housekeeping, food and beverage, and guest services. The team comprises trained, multicultural hospitality professionals committed to delivering consistent service excellence and guest satisfaction."
                imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
                imageAlt="Management and Team"
                width="max-w-7xl mx-auto"
                ctaHref={false}
                imagePosition="right"
            />
        </main>
    )
}

export default PearlMarinaPage