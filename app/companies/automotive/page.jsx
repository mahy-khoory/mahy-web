import CompaniesSectors from "@/components/CompaniesSectors"

function AutomotivePage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Automotive"}
                    texts={[
                        "This sector delivers automotive distribution, retail, and after-sales services.",
                        "The Automotive & Mobility Solutions sector represents the Group’s automotive activities, including vehicle sales, service operations, and next-generation mobility platforms. It focuses on advanced, electric, and hybrid vehicle technologies supported by professional after-sales infrastructure."
                    ]}
                    companiesHeading={true}
                    items={[
                        "MAHY Khoory Automotive",
                        "MAHY Khoory Motors"
                    ]}
                />
            </section>
        </main>
    )
}

export default AutomotivePage