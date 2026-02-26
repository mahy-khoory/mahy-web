import CompaniesSectors from '@/components/CompaniesSectors'
import ServicedHotelApartments from '@/components/Services/ServicedHotelApartments'
import TrustedBusinessAdvisor from '@/components/Services/TrustedAdvisorTabs'
import SubPageHeading from '@/components/UI/SubPageHeading'

function ServicedHotelApartmentsPage() {
    const services = [
        {
            label: "Guest Amenities",
            text: "The property features a range of lifestyle and recreational facilities designed to enhance every guest’s stay:",
            bullets: [
                "Outdoor swimming pool with sun terrace",
                "Jacuzzi and relaxation lounges",
                "Fully equipped fitness center",
                "Secure indoor parking",
                "Business facilities and meeting spaces"
            ],
            endText: "These amenities support both leisure and productivity, making the property suitable for all types of travellers.",
            image: "/gallery/gallery-1.jpg"
        },
        {
            label: "Dining & Hospitality Services",
            text: "Guests can enjoy a variety of on-site dining options, including:",
            bullets: [
                "International cuisine served at the in-house restaurant",
                "Room service for added convenience",
                "Breakfast offerings",
                "Café and casual dining areas"
            ],
            endText: "The dining experience is designed to cater to diverse tastes and daily lifestyle needs.",
            image: "/gallery/gallery-2.jpg"
        },
        {
            label: "Support & Concierge Services",
            text: "A dedicated hospitality team ensures seamless guest support throughout the stay:",
            bullets: [
                "24/7 front desk and concierge assistance",
                "Airport transfer arrangements (upon request)",
                "Laundry and dry-cleaning services",
                "Travel, tour, and excursion bookings",
                "Transportation assistance",
                "On-site security and maintenance support"
            ],
            endText: "These services guarantee comfort, safety, and an elevated guest experience.",
            image: "/gallery/gallery-3.jpg"
        },
        {
            label: "Prime Dubai Marina Location",
            text: "Situated at one of Dubai’s most vibrant waterfront destinations, the property offers walking-distance access to:",
            bullets: [
                "Marina Walk",
                "Jumeirah Beach",
                "Dubai Marina Mall",
                "Metro & Tram Stations",
                "Restaurants, cafés, and retail outlets",
                "Waterfront leisure attractions"
            ],
            endText: "The location provides exceptional connectivity for both business and leisure activities.",
            image: "/gallery/gallery-4.jpg"
        },
        {
            label: "Suitable For",
            text: "These serviced hotel apartments are the ideal choice for:",
            bullets: [
                "Holidaymakers",
                "Long-stay residents",
                "Business travelers",
                "Corporate bookings",
                "Families seeking spacious, fully equipped accommodation"
            ],
            image: "/gallery/gallery-5.jpg"
        },
    ]
    return (
        <main>
            <SubPageHeading
                title={"Serviced Hotel Apartments "}
                image={"/gallery/gallery-1.jpg"}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-2.jpg"}
                    title={"Accommodation Options"}
                    texts={[
                        "Guests can choose from a wide selection of fully furnished units designed for comfort, flexibility, and convenience:"
                    ]}
                    companiesHeading={false}
                    items={[
                        "Studio Apartments",
                        "One-Bedroom Apartments",
                        "Two-Bedroom Apartments",
                        "Three-Bedroom Apartments"
                    ]}
                    text2="Each apartment includes:"
                    items2={[
                        "Fully fitted kitchen with appliances",
                        "Separate living and dining areas",
                        "In-room laundry facilities",
                        "Daily housekeeping service",
                        "Free high-speed Wi-Fi",
                        "Private balcony or large windows with marina or city views"
                    ]}
                    endText="These units are ideal for families, couples, corporate travellers, and long-stay residents looking for spacious and practical accommodation."
                />
            </section>
            <TrustedBusinessAdvisor
                heading='Services'
                items={services}
            />
            <ServicedHotelApartments />
        </main>
    )
}

export default ServicedHotelApartmentsPage