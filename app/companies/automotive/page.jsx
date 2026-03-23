import CompaniesSectors from "@/components/CompaniesSectors"

function AutomotivePage() {
    return (
        <main>
            <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
                <CompaniesSectors
                    image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1772477784/WhatsApp_Image_2026-03-02_at_12.24.38_AM_nrygeh.jpg"}
                    title={"Automotive"}
                    texts={[
                        "The Automotive sector represents the Group's commitment to delivering comprehensive mobility solutions, encompassing vehicle distribution, retail, and after-sales services.",
                        "It focuses on the sale and servicing of a wide range of vehicles, including advanced, electric, and hybrid models that align with evolving global mobility trends. The sector is supported by professional after-sales infrastructure, ensuring high standards of maintenance, repair, and customer support.",
                        "By combining strong product offerings with technical expertise and customer-centric services, the sector delivers a seamless automotive experience for both individual and corporate clients. It also positions the Group to adapt to future mobility developments, including sustainable transportation and next-generation vehicle technologies."
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