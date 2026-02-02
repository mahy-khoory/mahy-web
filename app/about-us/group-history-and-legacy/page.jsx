import CompanyDetailCards from "@/components/UI/companies/detail/CompanyDetailCards"
import SubPageHeading from "@/components/UI/SubPageHeading"

function GroupHistoryAndLegacyPage() {
    const data = {
        text1: [
            "MAHY Khoory Group was established in 1929 as a trading enterprise and has since grown into one of the UAE's diversified business groups, operating across multiple strategic sectors. Over the decades, the Group expanded from trading into engineering, manufacturing, infrastructure solutions, environmental services, logistics, hospitality, energy, and automotive supporting the evolving needs of the UAE economy.",
            "The Group's journey has been marked by long-standing partnerships with leading global brands and continuous investments in new industries. From water and power solutions to paper manufacturing, recycling, packaging, and renewable energy, MAHY Khoory Group has consistently evolved by aligning its businesses with national development priorities and market demands."
        ],
        items1: [
            "Founded in 1929 as a trading enterprise.",
            "Expanded across industries with strategic growth.",
            "Supporting the UAE's economic development for nearly a century."
        ],
        text2: [
            "The legacy of MAHY Khoory Group is built on nearly a century of trust, resilience, and long-term relationships. Across generations, the Group has maintained a strong reputation for integrity, operational excellence, and reliability serving customers, partners, and communities with a commitment to quality and professionalism.",
            "More than just a collection of companies, MAHY Khoory Group represents a philosophy of sustainable growth and responsible diversification. Through investments in circular economy initiatives, environmental services, renewable energy, and modern manufacturing, the Group continues to create lasting value while contributing positively to society and the environment.",
            "Today, MAHY Khoory Group stands as a family-rooted yet professionally managed organization, combining heritage values with innovation, digital transformation, and future-ready business practices ensuring that its legacy continues to grow for generations to come."
        ],
        items2: [
            "A legacy built on trust and integrity.",
            "Driven by long-term partnerships and excellence.",
            "Creating sustainable value for generations to come"
        ]
    };

    return (
        <main>
            <SubPageHeading
                title={"Group History & Legacy"}
                image={"/gallery/gallery-1.jpg"}
            />
            <CompanyDetailCards
                heading1="Our History"
                text1={data.text1}
                items1={data.items1}
                heading2="Our Legacy"
                text2={data.text2}
                items2={data.items2}
            />
            </main>
    )
}

export default GroupHistoryAndLegacyPage