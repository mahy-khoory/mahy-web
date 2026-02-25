import Image from "next/image";

function KitchenImageScaledGrid({
    heading = "Our vision for lasting impact",
    texts,
    items = [
        { text: "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.", icon: "/kitchen/kitchenGrid-1.svg" },
        { text: "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.", icon: "/kitchen/kitchenGrid-2.svg" }
    ]
}) {
    ;
    return (
        <section className="bg-slate-950 text-white">
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-15">
                <div className="py-14 md:py-20 px-5 md:px-15">
                    <h2 className="font-semibold text-3xl md:text-5xl leading-10 md:leading-15 text-center md:text-start">{heading}</h2>
                    {texts?.map((text, i) => (
                        <p key={i} className="text-gray-200 mt-5 text-center md:text-start">{text}</p>
                    ))}
                    <div className="space-y-6 mt-12">
                        {items.map((item, i) => (
                            <div key={i} className={`flex gap-6 w-full ${i < items.length - 1 && "border-b border-gray-500 pb-6"}`}>
                                <div className="relative size-16">
                                    <Image src={item.icon} alt={i} fill style={{ objectFit: "contain" }} />
                                </div>
                                <div>
                                    {item.title && (
                                        <h3 className="font-medium mb-1.5">{item.title}</h3>
                                    )}
                                    <p className="max-w-md text-sm">{item.text}</p>
                                    {item.bullets && (
                                        <ul className="mt-2 list-disc pl-5 mb-4 space-y-2 text-sm">
                                            {item.bullets.map((textItem, j) => (
                                                <li key={j} className="text-gray-100">{textItem}</li>
                                            ))}
                                        </ul>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-80 md:h-full">
                    <Image src={"/gallery/gallery-2.jpg"} alt={"Kitchen Grid"} fill style={{ objectFit: "cover" }} />
                </div>
            </div>
        </section>
    )
}

export default KitchenImageScaledGrid