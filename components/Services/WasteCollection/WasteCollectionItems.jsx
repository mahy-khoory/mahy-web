import Image from "next/image";

const defaultItems = [
    { title: "Industry Focus", text: "Asteria serves the manufacturing sector, providing innovative solutions to enhance operational efficiency. With a deep understanding of industry challenges, Asteria delivers tailored solutions.", icon: "/waste/waste-1.svg" },
    { title: "Service Offerings", text: "Asteria serves the manufacturing sector, providing innovative solutions to enhance operational efficiency.With a deep understanding of industry challenges, Asteria delivers tailored solutions.", icon: "/waste/waste-2.svg" },
    { title: "Technical Expertise", text: "Asteria serves the manufacturing sector, providing innovative solutions to enhance operational efficiency. With a deep understanding of industry challenges, Asteria delivers tailored solutions.", icon: "/waste/waste-3.svg" },
    { title: "Partnership Approach", text: "Asteria serves the manufacturing sector, providing innovative solutions to enhance operational efficiency. With a deep understanding of industry challenges, Asteria delivers tailored solutions.", icon: "/waste/waste-4.svg" },
];

function WasteCollectionItems({
    heading,
    items = defaultItems
}) {

    return (
        <section className="py-8 md:py-20 relative">
            <div className="absolute inset-0">
                <Image src={"/waste/waste-bg.jpg"} alt="Waste Items Background" fill style={{ objectFit: "cover" }} />
            </div>
            <div className="max-w-7xl mx-auto px-5 relative z-10">
                {heading && <h1 className="text-3xl md:text-4xl font-medium mb-10">{heading}</h1>}
                <div className="xl:max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10">
                    {items.map((item, i) => (
                        <div key={i} className={`border-2 border-white rounded-2xl flex flex-col gap-4 md:gap-6 px-6 py-8 md:p-10 ${i > 1 && i < 4 && "xl:translate-x-32"}`}>
                            <div className="relative size-10">
                                <Image src={item.icon} alt={item.title} fill style={{ objectFit: "cover" }} />
                            </div>
                            <h2 className="font-medium text-xl md:text-2xl">{item.title}</h2>
                            <div>
                                <p className="text-gray-700">{item.text}</p>
                                {item.options && (
                                    <div className="list-disc list-inside text-gray-700 mt-3">
                                        {item.options.map((option, j) => (
                                            <li key={j}>{option}</li>
                                        ))}
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

export default WasteCollectionItems