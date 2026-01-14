import Image from "next/image";

function WasteCollectionTimeline() {
    const items = [
        { title: "Research", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverrau spendisse varius enim", image: "/gallery/gallery-1.jpg" },
        { title: "Proposals", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverrau spendisse varius enim", image: "/gallery/gallery-2.jpg" },
        { title: "Develop", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverrau spendisse varius enim", image: "/gallery/gallery-3.jpg" },
        { title: "Support", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverrau spendisse varius enim", image: "/gallery/gallery-4.jpg" }
    ];
    return (
        <section className="max-w-5xl mx-auto px-5 py-10 md:py-20 relative">
            <div className="space-y-25 md:space-y-16">
                {items.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-20 md:gap-0 items-center justify-between relative">
                        {i % 2 === 0 ? (<>
                            <DataElement item={item} alignmentClass={"text-right"} />
                            <ImageElement item={item} />
                        </>) : (<>
                            <ImageElement item={item} />
                            <DataElement item={item} />
                        </>)}
                        <div className="absolute inset-0 flex items-center ">
                            <div className="h-px w-full bg-gray-300" />
                        </div>
                        <div className="absolute z-10 inset-0 flex justify-center items-center">
                            <div className="size-5 rounded-full b-base" />
                        </div>
                    </div>
                ))}
            </div>
            <div className="absolute inset-0 flex justify-center">
                <div className="h-full w-px bg-gray-300" />
            </div>
        </section>
    )
};

const DataElement = ({ item, alignmentClass = "text-left" }) => (
    <div className={`h-70 w-90 border rounded-2xl border-gray-300 bg-white relative z-10 ${alignmentClass} flex flex-col justify-center px-8`}>
        <h2 className="uppercase text-xl font-semibold border-b border-gray-200 pb-4 mb-4">{item.title}</h2>
        <p className="text-sm text-gray-700">{item.text}</p>
    </div>
);

const ImageElement = ({ item }) => (
    <div className="h-70 w-90 rounded-2xl relative z-10 overflow-hidden">
        <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
    </div>
);

export default WasteCollectionTimeline