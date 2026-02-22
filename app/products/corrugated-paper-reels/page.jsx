import HoverableColumns from '@/components/HoverableColumns';
import BoosterPumpRevealSection from '@/components/Products/BoosterPumpRevealSection'
import WasteCollectionGrid from '@/components/Services/WasteCollection/WasteCollectionGrid';
import ServicesPumping from '@/components/ServicesPumping'
import SubPageHeading from '@/components/UI/SubPageHeading';
import React from 'react'
import { HiLightBulb } from 'react-icons/hi';

function CorrugatedPaperReelsPage() {
    const keyProductFeatures = [
        {
            title: "Wide GSM & Kraft Grade Selection",
            desc:
                "Available in multiple GSM ranges and kraft qualities (including high-burst, semi-kraft, and premium kraft), ensuring suitability for light-, medium-, and heavy-duty packaging requirements.",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
        },
        {
            title: "Excellent Strength & Durability",
            desc:
                "Manufactured to deliver high burst strength, ring crush value (RCT), and tensile durability, ensuring strong board formation and reliable packaging integrity.",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
        },
        {
            title: "Smooth Runability on Machines",
            desc:
                "Precision-wound reels with uniform surface finish provide excellent runability on high-speed corrugators, sheet plants, die-cutting lines, and automatic box-making machines.",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
        },
        {
            title: "Uniform GSM & Moisture Control",
            desc:
                "Strict quality inspection ensures consistent GSM uniformity, moisture balance, and reel profile, resulting in fewer machine stoppages and increased production efficiency.",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
        },
        {
            title: "Customizable Widths & Specifications",
            desc:
                "Reels can be supplied in tailored widths to fit any corrugator or converting line, with options for:• Kraft liner• Test liner• Fluting paper• Medium paper",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
        },
        {
            title: "Eco-Friendly Manufacturing",
            desc:
                "Produced using recycled fiber, optimized resource consumption, and environmentally responsible processes to support sustainable packaging.",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
        },
    ];

    const applications = [
        {
            no: "01",
            title: "Corrugated Carton Manufacturing",
            desc: "Ideal for producing single-wall, double-wall, and triple-wall corrugated boards.",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961326/gallery-1_u7bk29.jpg",
        },
        {
            no: "02",
            title: "Packaging & Logistics Operations",
            desc: "Used for outer cartons, protective sheets, pallet packaging, and export-grade boxes.",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961377/gallery-2_mgmir1.jpg",
        },
        {
            no: "03",
            title: "Industrial Packing Solutions",
            desc: "Suitable for heavy-duty protective packaging in factories, warehouses, and distribution centers.",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961312/gallery-3_o7q6xp.jpg",
        },
        {
            no: "04",
            title: "E-Commerce & Retail Packaging",
            desc: "High-quality kraft reels suitable for mailer boxes, retail cartons, inserts, and die-cut packaging.",
            image:
                "https://res.cloudinary.com/db3fd1qah/image/upload/v1765961506/gallery-4_jxixjw.jpg",
        },
    ];

    const whyChooseUs = [
        { query: "Enhanced strength for demanding packaging" },
        { query: "Smooth and consistent performance on converting machinery" },
        { query: "Options for custom GSM, width, and kraft quality" },
        { query: "Eco-friendly and recyclable materials" },
        { query: "Reliable supply for UAE and regional industries" },
    ];

    return (
        <main>
            <SubPageHeading
                title="Corrugated Paper Reels"
                image="https://res.cloudinary.com/db3fd1qah/image/upload/v1765961326/gallery-1_u7bk29.jpg"
            />
            <BoosterPumpRevealSection
                text="Our high-quality corrugated paper reels are available in a comprehensive range of widths, kraft grades, and GSM options, making them the preferred choice for packaging manufacturers, carton converters, and industrial packing operations across the UAE. Engineered for superior strength, stability, and smooth machinability, these reels deliver consistent performance in demanding converting and packaging applications."
            />
            <ServicesPumping
                title1="Our Key"
                title2="Product Features"
                items={keyProductFeatures}
            />
            <HoverableColumns
                title="Applications"
                items={applications}
            />
            <WasteCollectionGrid
                heading='Why Choose Our Corrugated Paper Reels?'
                items={whyChooseUs}
                icon={<HiLightBulb size={25} />}
            />
        </main>
    )
}

export default CorrugatedPaperReelsPage                            