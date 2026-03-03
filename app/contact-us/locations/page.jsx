"use client"

import MahyLocationsMap from "@/components/Navigator/MahyLocationsMap";
import OperationsAndCapabilitiesOverview from "@/components/UI/companies/operations-and-capabilities/OperationsAndCapabilitiesOverview"
import SubPageHeading from "@/components/UI/SubPageHeading";

const container = {
    hidden: { opacity: 0, x: -20 },
    visible: {
        opacity: 1,
        x: 0,
        transition: { duration: 0.6, ease: "easeOut" },
        delay: 0.9,
    },
};

function locations() {
    const overviewItems = [
        {
            title: "MAHY Khoory Group of Companies",
            telephone: "+971 46067300",
            email: "info@mahykhoory.com",
            address: "P.O. Box: 41, Near Abu Hail Metro Station, Dubai. UAE.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175782/image-1_o4wida.png",
        },
        {
            title: "MAHY Khoory Trading",
            telephone: "+971 46067291",
            email: "Info@mahykhoory.com",
            address: "P.O. Box: 41, Near Abu Hail Metro Station, Dubai, UAE.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175785/image-2_ylnqyo.png",
        },
        {
            title: "Emirates International Equipment & Machinery L.L.C",
            telephone: "+971 04-2855293",
            email: "info@eiemedxb.com",
            address: "Behind old RTA Building, Umm Ramool, Rashidiya, Dubai, UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175783/image-3_sdiod9.jpg",
        },
        {
            title: "Greenland Equipment & Machinery Est. L.L.C",
            telephone: "+971 43334515",
            email: "info@greenland.ae",
            address: "P.O. Box: 41, Near Abu Hail Metro Station, Dubai, UAE.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175789/image-4_lcsxcf.jpg",
        },
        {
            title: "Al Mehvar Alfede General Trading LLC",
            telephone: "+971 42861871",
            email: "info@almehwaruae.com",
            address: "P.O.Box, 28495, Dubai, UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175788/image-5_xlekgs.png",
        },
        {
            title: "Al Khoory Engineering",
            telephone: "+971 4 333 1278",
            email: "mahykeng@emirates.net.ae",
            address: "Behind Allahdin Containers Aweer, Ras Al Khor Industrial Area, Dubai, UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175787/image-6_ids5vt.png",
        },
        {
            title: "Union Paper Mills",
            telephone: "+971 4 339 3339",
            email: "info@upmuae.com",
            address: "Al Quoz Industrial Area 1, Opposite to Excellence Driving School, Dubai, UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175787/image-7_wqqqtt.png",
        },
        {
            title: "Al Dhafra Paper Manufacturing",
            telephone: "+971 23052500",
            email: "info@upmuae.com",
            address: "P.O Box 132522, Abu Dhabi",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175764/image-8_f8yris.png",
        },
        {
            title: "Union Wood Works",
            telephone: "+971 43393339",
            email: "info@unionwoodworks.ae",
            address: "Union Paper Mills Compound, Al Quoz Industrial Area No. 3, Dubai - UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175763/image-9_qon0ki.png",
        },
        {
            title: "Recyclable Waste Management Division",
            telephone: "+971 4 606 7700",
            email: "recyclewaste@upmuae.com",
            address: "P.O. Box 41, Al Quoz 1, Dubai, United Arab Emirates",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175772/image-10_bwgtaf.png",
        },
        {
            title: "Al Dhafra Waste Collection",
            telephone: "+971 4 606 7700",
            email: "recyclewaste@upmuae.com",
            address: "P.O. Box 132522, Musaffah, Abu Dhabi, United Arab Emirates",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175774/image-11_jgh0jz.png",
        },
        {
            title: "Around Continent Waste Collection",
            telephone: "+971 046067777",
            email: "GA@mahykhoory.com",
            address: "Al Qouz-1, Dubai, UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175777/image-12_oufkaq.png",
        },
        {
            title: "Al Etihad Waste Management",
            telephone: "+968 9392 3821",
            email: "info@etihadoman.com",
            address: "P.O. Box 1470, Postal Code 130, Azaiba, Sultanate of Oman",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175775/image-13_szruyg.png",
        },
        {
            title: "Solid Waste Management Division",
            telephone: "+971 46067820",
            email: "SWMD@Mahykhoory.com",
            address: "Union Paper Mills Compound, Al Quoz, Industrial Area 1, Dubai, UAE.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175782/image-14_rjnkoa.png",
        },
        {
            title: "National Paper Industry (S.P.S - L.L.C)",
            telephone: "067070666",
            email: "info@npiajman.com",
            address: "P.O. Box: 2912, New Industrial Area, Ajman, United Arab Emirates",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175781/image-15_yfjjxk.png",
        },
        {
            title: "Union Sustainable Packaging Solutions",
            telephone: "+971 505482771",
            email: "huzaifa@mahykhoory.com",
            address: "Union Paper Mills Compound, Al Quoz Industrial Area No. 3, Dubai - UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175777/image-16_qrj5yj.png",
        },
        {
            title: "Greenland Transport",
            telephone: "+971 43393339",
            email: "bijunambiar@mahykhoory.com",
            address: "P.O. Box: 41, Near Abu Hail Metro Station, Dubai, UAE.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175779/image-17_b9vsex.jpg",
        },
        {
            title: "Senan Industry LLC",
            telephone: "+971 43334447",
            email: "info@senan.ae",
            address: "P.O. Box 114520, Ras Al Khor Industrial II, Community 613, St. No. 11, Shed No. 44, Dubai, U.A.E.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175778/image-17_sez7is.png",
        },
        {
            title: "Pure Energy Construction LLC",
            telephone: "+971 43412227",
            email: "info@purenergy.ae",
            address: "Office: 4 M.A.H.Y Khoory Building Al Khabaisi, Deira, Dubai, UAE, P.O. BOX: 341713",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175763/image-18_ujq6rm.png",
        },
        {
            title: "Pearl Marina Hotel Apartments",
            telephone: "+971 044471717",
            email: "reservations@pearlmarinahotel.com",
            address: "WATER FRONT – Al Marsa St – Dubai Marina – Dubai – UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175763/image-19_uu73gt.png",
        },
        {
            title: "Market Restaurant and Cafe",
            telephone: "+971 045139495",
            email: "sales@marketrestaurantdubai.com",
            address: "Marsa Dubai - Dubai Marina - Dubai, UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175766/image-20_pj7yns.png",
        },
        {
            title: "MAHY Khoory Automotive",
            telephone: "800-6249",
            email: "info@dongfeng-uae.com",
            address: "Salahaldin Street, Al Khabaisi, Abu Hail, Dubai 41, UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175772/image-21_rmr4xp.jpg",
        },
        {
            title: "Union Nonwoven Industries",
            telephone: "+971 4 6067360",
            email: "pdpn@mahykhoory.com",
            address: "P.O. Box: 41, Near Abu Hail Metro Station, Dubai, UAE.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175764/image-22_jk25w1.png",
        },
        {
            title: "Creative Solutions Green Building",
            telephone: "+971 46067219",
            email: "CreativeSolutions@mahykhoory.com",
            address: "P.O. Box: 41, Near Abu Hail Metro Station, Dubai, UAE.",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175764/image-23_pofzdk.png",
        },
        {
            title: "MAHY Khoory Motors",
            telephone: "800-6249",
            email: "",
            address: "Saleh Ghanem Rashid Khalaf Building, Al Danah East, Abu Dhabi 3175, Abu Dhabi",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175764/image-24_qk4jbr.jpg",
        },
        {
            title: "Clean Earth LLC",
            telephone: "+971 46067710",
            email: "mansoor@upmuae.com",
            address: "Union Paper Mills Compound, Al Quoz Industrial Area No. 3, Dubai - UAE",
            image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771175763/image-25_qhrojm.png",
        },
    ];
    const bulletItems = [
        "Request for Quotation",
        "Sales Inquiry",
        "Commissioning Request Form",
        "Pre-Alignment Checklist",
        "Service Request Form",
        "Site Visit Request Form",
        "Customer Complaint Form",
        "Customer Registration",
        "Vendor Registration"
    ];
    return (
        <main>
            <SubPageHeading
                title={"Our Locations"}
                description={"At MAHY Khoory Group, delivering reliable support and maintaining strong customer relationships is a core priority across all our sectors."}
                image={"/gallery/gallery-1.jpg"}
            />

            <MahyLocationsMap/>
          
            <OperationsAndCapabilitiesOverview
                heading="All Companies Contact Details"
                items={overviewItems}
            />
        </main>

    )
}

export default locations