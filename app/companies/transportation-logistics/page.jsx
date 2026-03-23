import CompaniesSectors from "@/components/CompaniesSectors"

function TransportationLogisticsPage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1770205785/fleet-of-white-delivery-trucks-parked-in-a-lot-2026-01-09-11-55-05-utc_is9mnb.png"}
                    title={"Transportation & Logistics"}
                    texts={[
                        "The Transportation sector plays a critical role in enabling the Group's operational efficiency by providing reliable logistics and fleet management services across all business units.",
                        "It manages the movement of goods, equipment, and personnel, ensuring seamless coordination between manufacturing, trading, project execution, and service operations. The sector supports supply chain continuity and contributes directly to timely project delivery and operational performance.",
                        "With a dedicated fleet, optimized routing systems, and strong operational controls, the sector enhances efficiency, reduces transportation costs, and maintains high standards of reliability and safety. Its role as a logistical backbone ensures that the Group's diverse activities remain interconnected and efficiently executed."
                    ]}
                    companiesHeading={true}
                    items={[
                        "Greenland Transport"
                    ]}
                />
            </section>
        </main>
    )
}

export default TransportationLogisticsPage