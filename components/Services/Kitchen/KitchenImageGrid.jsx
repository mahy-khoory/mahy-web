import Image from "next/image"

function KitchenImageGrid({
    topHeading = "Achievements",
    headings = ["Achievement", "in numbers"],
    items = [
        { heading: 200, text: "Successfully increased revenue for 200+ number of clients by 90% through strategic planning and implementation of marketing and sales techniques." },
        { heading: 16, text: "Provided expert business advice to 13+ number of startups, resulting in successful funding and growth." },
        { heading: 40, text: "Assisted 40+ number of established businesses in streamlining operations and achieving increased efficiency and productivity." }
    ]
}) {
    return (
        <section className="md:h-screen w-full relative">
            <div className="relative md:absolute inset-0 z-20 flex flex-col justify-between pt-10 pb-10 md:pb-13 max-w-7xl mx-auto px-5">
                <div>
                    {/* <h1 className="t-base font-bold text-lg text-center md:text-start">{topHeading}</h1> */}
                    <h2 className="text-white font-bold text-4xl md:text-5xl mt-4 text-center md:text-start">{headings[0]} <span className="block t-base mt-2">{headings[1]}</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-8">
                    {items.map((item, i) => (
                        <Card key={i} item={item} />
                    ))}
                </div>
            </div>
            <div className="absolute inset-0">
                <Image src="/gallery/gallery-2.jpg" alt="Kitchen" fill className="object-cover" />
            </div>
            <div className="absolute inset-0 bg-black/50" />
            <div
                className="absolute bottom-0 left-0 w-full h-1/2 z-10 bg-black"
                style={{
                    clipPath: "polygon(0 85%, 100% 0, 100% 100%, 0 100%)",
                }}
            />
        </section>
    )
};

const Card = ({ item }) => (
    <div className="flex flex-col">
        <div className="h-3 w-full bg-slate-700 flex-none" />
        <div className="bg-gray-900 p-6 md:p-8 flex-1">
            <span className="text-xl font-semibold text-white">{item.heading}</span>
            <p className="text-white mt-3">{item.text}</p>
            {item.options && (
                <ul className="list-disc text-sm list-inside mt-2 text-white space-y-0.5">
                    {item.options.map((option, i) => (
                        <li key={i}>{option}</li>
                    ))}
                </ul>
            )}
        </div>
    </div>
)

export default KitchenImageGrid