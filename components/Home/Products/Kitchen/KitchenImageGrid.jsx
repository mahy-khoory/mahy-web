import Image from "next/image"

function KitchenImageGrid() {
    const items = [
        { count: 200, text: "Successfully increased revenue for 200+ number of clients by 90% through strategic planning and implementation of marketing and sales techniques." },
        { count: 16, text: "Provided expert business advice to 13+ number of startups, resulting in successful funding and growth." },
        { count: 40, text: "Assisted 40+ number of established businesses in streamlining operations and achieving increased efficiency and productivity." }
    ];
    return (
        <section className="md:h-screen w-full relative">
            <div className="relative md:absolute inset-0 z-20 flex flex-col justify-between pt-22 pb-10 md:pb-13 max-w-7xl mx-auto px-5">
                <div>
                    <h1 className="t-base font-bold text-lg">Achievements</h1>
                    <h2 className="text-white font-bold text-4xl md:text-6xl mt-6 md:mt-10">Achievement <span className="block t-base mt-2">in numbers</span></h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10 mt-10 md:mt-0">
                    {items.map((item, i) => (
                        <Card key={i} item={item} />
                    ))}
                </div>
            </div>
            <div className="absolute inset-0">
                <Image src="/gallery/gallery-1.jpg" alt="Kitchen" fill className="object-cover" />
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
    <div>
        <div className="h-3 w-full bg-slate-700" />
        <div className="bg-gray-900 p-6 md:p-8">
            <p className="mb-6 md:h-40 text-white">{item.text}</p>
            <div className="flex gap-2">
                <span className="text-5xl md:text-8xl font-semibold text-white">{item.count}</span>
                <span className="t-base text-2xl md:text-4xl">+</span>
            </div>
        </div>
    </div>
)

export default KitchenImageGrid