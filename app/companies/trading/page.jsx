import CompaniesSectors from "@/components/CompaniesSectors"

function TradingPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-4.jpg"}
                    title={"Manufacturing"}
                    texts={[
                        "This sector represents the Group's commercial foundation, delivering a comprehensive range of industrial supply, distribution, and sustainable energy solutions across regional markets",
                        "The Trading sector focuses on the sourcing, import, distribution, and project supply of high-quality industrial, electromechanical, pumping, HVAC, and building systems equipment sourced from leading global manufacturers. It supports a wide spectrum of industries, including infrastructure, construction, utilities, hospitality, and industrial operations, ensuring reliable and efficient supply of critical equipment.",
                        "In addition, the sector extends its capabilities into renewable energy solutions, providing end-to-end engineering, procurement, and construction (EPC) services for solar photovoltaic and clean energy systems. These services enable commercial and industrial clients to reduce energy costs, improve operational efficiency, and lower carbon emissions.",
                        "Comprehensive product portfolios, strong technical expertise, and long-standing supplier relationships enable the sector to deliver reliable, compliant, and cost-effective solutions tailored to diverse project requirements. Supported by extensive warehousing, logistics infrastructure, and after-sales technical teams, the sector ensures timely delivery, system compatibility, and long-term operational reliability.",
                        "Through the integration of traditional industrial trading and forward-looking energy solutions, the sector plays a key role in supporting both current operational needs and future sustainability objectives."
                    ]}
                    companiesHeading={true}
                    items={[
                        "MAHY Khoory Trading ",
                        "Pure Energy Construction LLC",
                    ]}
                />
            </section>
        </main>
    )
}

export default TradingPage