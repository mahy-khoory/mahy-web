import FeaturesEngineeringSection from '@/components/Services/FeaturesEngineeringSection'
import SubPageHeading from '@/components/UI/SubPageHeading'
import React from 'react'

function RestaurantDiningServices() {
    const overview = [
        {
            heading: "All-Day Dining & International Cuisine",
            text: "The restaurant features an extensive, chef-crafted menu available throughout the day—offering breakfast, lunch, dinner, and beverages. Guests can enjoy a wide range of global cuisines, including:",
            bullets: [
                "Arabic",
                "Indian",
                "Italian",
                "Portuguese",
                "Continental & Fusion dishes"
            ],
            lastText: "The menu includes à la carte options, signature chef specials, and rotating seasonal dishes that appeal to diverse tastes and dining preferences."
        },
        {
            heading: "Buffets & Special Dining Events",
            text: "On selected days, the restaurant hosts themed buffets featuring:",
            bullets: [
                "Seafood Nights",
                "BBQ Grills & Live Counters",
                "Seasonal & Festive Dining Experiences"
            ],
            lastText: "These buffets offer a generous selection of grilled specialties, fresh seafood, salads, desserts, and beverages—making them ideal for families, groups, and social occasions seeking variety and value."
        },
        {
            heading: "Catering & Event Packages",
            text: "The venue provides full-service catering solutions tailored for:",
            bullets: [
                "Yacht parties",
                "Corporate gatherings",
                "Private celebrations",
                "Social events"
            ],
            lastText: "Customized menus can be arranged based on group size, event duration, cuisine preferences, and special dietary requirements. Service staff can also be provided for on-board or on-site support to ensure a seamless dining experience."
        },
        {
            heading: "Ambience & Guest Experience",
            text: "With both indoor and outdoor seating, the restaurant delivers a relaxed and enjoyable atmosphere enhanced by:",
            bullets: [
                "Waterfront views of Dubai Marina",
                "Comfortable seating layouts",
                "Soft ambient lighting",
                "A casual yet refined dining environment"
            ],
            lastText: "The setting is perfect for families, couples, social meetups, business discussions, and leisurely waterfront dining."
        },
        {
            heading: "Reservations & Guest Services",
            text: "Guests can make reservations for:",
            bullets: [
                "Regular à la carte dining",
                "Buffet nights & themed events",
                "Private parties & catered events"
            ],
            lastText: "The restaurant operates daily with flexible timings, welcoming both walk-in customers and pre-booked groups."
        },
        {
            heading: "Ideal For",
            bullets: [
                "Casual all-day dining",
                "Family & group meals",
                "Themed buffet nights",
                "Waterfront social gatherings",
                "Yacht catering & private event services"
            ],
        }
    ];

    return (
        <main>
            <SubPageHeading
                title={"Restaurant & Dining Services"}
                image={"/gallery/gallery-1.jpg"}
            />
            <FeaturesEngineeringSection
                heading='Overview'
                text={"Set along the scenic Dubai Marina promenade, this premium waterfront restaurant offers an inviting blend of international flavors, curated dining experiences, and panoramic marina views. Designed for residents, tourists, corporate guests, and families, the venue combines relaxed ambience with a diverse menu, making it an ideal destination for casual meals, social gatherings, and special events."}
                items={overview}
            />
        </main>
    )
}

export default RestaurantDiningServices