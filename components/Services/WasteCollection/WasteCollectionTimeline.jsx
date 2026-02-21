import Image from "next/image";

function WasteCollectionTimeline({
    topSection = true,
    bottomSection = true,
    items = []
}) {
    if (items.length === 0) {
        items = [
            { title: "Research", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverrau spendisse varius enim", image: "/gallery/gallery-1.jpg" },
            { title: "Proposals", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverrau spendisse varius enim", image: "/gallery/gallery-2.jpg" },
            { title: "Develop", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverrau spendisse varius enim", image: "/gallery/gallery-3.jpg" },
            { title: "Support", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum. Duis cursus, mi quis viverrau spendisse varius enim", image: "/gallery/gallery-4.jpg" }
        ];
    }
    return (
        <section className="max-w-5xl mx-auto px-5 py-10 md:py-20 relative">
            {topSection && (
                <div className="relative z-10 border border-gray-300 rounded-2xl bg-white max-w-2xl mx-auto text-center px-8 py-10 mb-10 md:mb-20">
                    <p className="text-lg md:text-2xl">I say always follow your passion, no matter what, because even if it’s not the same financial success, it’ll lead you to the money that’ll make you the happiest.</p>
                    <div className="flex justify-center text-xs uppercase text-white mt-5">
                        <p className="bg-[#2da5dc] px-3 py-1 rounded-l-2xl">Tom harderson</p>
                        <p className="bg-[#79c4e7] px-3 py-1 rounded-r-2xl">General Manager</p>
                    </div>
                    <div className="absolute -top-3 left-0 right-0 flex justify-center">
                        <p className="border border-gray-300 bg-white uppercase t-base text-sm px-3 py-1 rounded-2xl">This is our message to you</p>
                    </div>
                </div>
            )}
            <div className="space-y-25 md:space-y-16">
                {items.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-20 md:gap-0 md:items-stretch items-center justify-between relative">
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
            {bottomSection && (
                <div className="relative z-10 b-base max-w-2xl mx-auto mt-10 md:mt-20 rounded-2xl overflow-hidden">
                    <div className="grid grid-cols-1 md:grid-cols-2">
                        <div className="px-10 py-14 md:py-18 text-white">
                            <h2 className="uppercase font-semibold text-sm">View Our Features</h2>
                            <p className="uppercase mt-3 text-2xl font-semibold">Hera Webflow Template is here!</p>
                            <p className="text-sm mt-4">Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.</p>
                        </div>
                        <div className="relative h-80 md:h-full">
                            <Image src={"/gallery/gallery-1.jpg"} alt="Waste Collection Timeline" fill style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
            )}
            <div className="absolute inset-0 flex justify-center">
                <div className="h-full w-px bg-gray-300" />
            </div>
        </section>
    )
};

const DataElement = ({ item, alignmentClass = "text-left" }) => (
    <div className={`py-10 w-90 border rounded-2xl border-gray-300 bg-white relative z-10 ${alignmentClass} flex flex-col justify-center px-8`}>
        <h2 className="uppercase text-xl font-semibold border-b border-gray-200 pb-4 mb-5">{item.title}</h2>
        <p className="text-sm text-gray-700">{item.text}</p>
        {item.text2 && <p className="text-sm text-gray-700 mt-4">{item.text2}</p>}
    </div>
);

const ImageElement = ({ item }) => (
    <div className="w-90 rounded-2xl relative z-10 overflow-hidden">
        <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
    </div>
);

export default WasteCollectionTimeline