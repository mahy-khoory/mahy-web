import AnimatedLines from "@/components/UI/AnimatedLines";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Image from "next/image"

const defaultItems = [
    { title: "Problem", text: "Their existing page lacked clarity, visual appeal" },
    { title: "Process", text: "I researched the wellness industry, mapped the user" },
    { title: "Solution", text: "Designed a responsive landing page that clearly" },
    { title: "Result", text: "50% drop bounce rate" }
];

function KitchenItems({
    heading,
    text,
    title = "Landing Page",
    text2,
    items = defaultItems,
    image= "/gallery/gallery-1.jpg"
}) {
    return (
        <section className="max-w-full mx-auto px-5 py-12">
            {heading && (
                <>
                    <AnimatedLines />
                    <h2 className="text-4xl md:text-5xl pt-2 text-center font-semibold">{heading}</h2>
                </>
            )}
            {text && <p className="mt-4 md:mt-6 text-center max-w-4xl mx-auto">{text}</p>}
            <div className="p-5 md:p-8 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-10">
                <div className="relative h-80 md:h-full overflow-hidden">
                    <Image src={image} alt="Kitchen" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="py-4">
                    <p className="text-2xl md:text-3xl font-semibold leading-8">{title}</p>
                    {text2 && <p className="mt-2 md:mt-4 text-gray-700">{text2}</p>}
                    <div className="grid grid-cols-2 gap-8 mt-6">
                        {items.map((item, i) => (
                            <div key={i} className="border-l border-gray-300 pl-4 py-1">
                                <h3 className="text-lg font-semibold leading-5">{item.title}</h3>
                                <p className="text-gray-700 mt-2 text-sm leading-5">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    {/* <PrimaryButton label="View More" /> */}
                </div>
            </div>
        </section>
    )
}

export default KitchenItems