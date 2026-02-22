import KitchenItems from "@/components/Services/Kitchen/KitchenItems"
import SubPageHeading from "@/components/UI/SubPageHeading"

function AkasFansPage() {
    const highlights = [
        {
            title: "Advanced Ventilation Systems",
            text: "High-performance exhaust and ventilation solutions"
        },
        {
            title: "Efficient Air Extraction",
            text: "Efficient air extraction for heat, moisture, smoke, and odors"
        },
        {
            title: "Versatile Applications",
            text: "Suitable for residential, commercial, and industrial applications"
        },
        {
            title: "Heavy-Duty Durability",
            text: "Durable construction for continuous and heavy-duty use"
        },
        {
            title: "Quiet & Energy Efficient",
            text: "Low-noise operation with energy-efficient performance"
        }
    ];
    return (
        <main>
            <SubPageHeading
                title={"AKAS & RYNE Ventilation Fans"}
                description={"AKAS & RYNE Ventilation Fans are engineered to deliver powerful air movement, reliable performance, and long-term durability across residential, commercial, and industrial environments. Designed with advanced airflow technology, these fans ensure effective removal of heat, moisture, smoke, and odors—creating healthier and more comfortable indoor spaces."}
                description2={"Ideal for kitchens, bathrooms, warehouses, workshops, and industrial facilities, AKAS & RYNE fans combine high airflow capacity with efficient energy usage. Their robust construction and precision-balanced motors ensure quiet operation, stable performance, and extended service life, even under continuous operation."}
                image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1771784562/fans_kihc0c.jpg"}
            />
            <KitchenItems
                heading="AKAS & RYNE Ventilation Fans"
                text="With a focus on safety, efficiency, and performance, AKAS & RYNE Ventilation Fans support proper air circulation and compliance with ventilation standards, making them a dependable choice for both small-scale installations and large commercial projects."
                title="Key Highlights"
                text2="AKAS & RYNE Ventilation Fans provide a powerful and dependable ventilation solution, ensuring cleaner air, improved comfort, and reliable operation across all environments."
                items={highlights}
            />
        </main>
    )
}

export default AkasFansPage