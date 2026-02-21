import CompaniesSectors from "@/components/CompaniesSectors"

function TradingDistributionPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Trading & Distribution"}
                    texts={[
                        "The Trading, Distribution & Industrial Supply sector represents the MAHY Khoory Group’s commercial foundation, supplying industrial, electromechanical, pumping, HVAC, and building systems equipment across the region.",
                        "This sector focuses on the sourcing, import, distribution, and project supply of high-quality industrial and building-services equipment sourced from leading global manufacturers. It supports a wide range of markets, including infrastructure, construction, utilities, hospitality, and industrial operations.",
                        "Companies within this sector provide comprehensive product portfolios covering pumping systems, HVAC equipment, motors, generators, valves, piping systems, and electromechanical components. Strong technical expertise, long-standing supplier relationships, and deep market knowledge enable the delivery of reliable, compliant, and cost-effective solutions.",
                        "Supported by extensive warehousing, logistics infrastructure, and after-sales technical teams, the sector ensures timely delivery, system compatibility, and long-term operational reliability for both project-based and ongoing supply requirements."
                    ]}
                    companiesHeading={true}
                    items={[
                        "M.A.H.Y. Khoory Trading"
                    ]}
                />
            </section>
        </main>
    )
}

export default TradingDistributionPage