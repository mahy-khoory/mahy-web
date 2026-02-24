import CompaniesSectors from "@/components/CompaniesSectors"
import SubPageHeading from "@/components/UI/SubPageHeading"

function VinzorAluminumLaddersPage() {
    return (
        <main>
            <SubPageHeading
                title={"VINZOR Aluminum Ladders"}
                image={"/gallery/gallery-1.jpg"}
            />
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"/gallery/gallery-1.jpg"}
                    title={"Key Highlights"}
                    texts={[
                        "VINZOR Aluminum Ladders are designed to deliver strength, stability, and lightweight performance for a wide range of applications. Manufactured using high-quality aluminum, these ladders offer excellent load-bearing capacity while remaining easy to handle and transport.",
                        "Suitable for household tasks, professional maintenance, and industrial work, VINZOR ladders are built with safety-focused features such as anti-slip steps and reinforced joints, ensuring reliable performance in daily use."
                    ]}
                    items={[
                        "Lightweight yet strong aluminum construction",
                        "Suitable for household, professional, and industrial use",
                        "Stable design with enhanced safety features",
                        "Long-lasting and corrosion-resistant"
                    ]}
                />
            </section>
        </main>
    )
}

export default VinzorAluminumLaddersPage