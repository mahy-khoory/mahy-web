import Image from "next/image";

function SolarPanelInstallationsGrid() {
    const items = [
        { title: "Driving Innovation Through Strategy", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking", image: "/solar/solar-1.svg" },
        { title: "Expert Consulting For Sustainable Growth", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered", image: "/solar/solar-2.svg" }
    ];
    return (
        <section className="max-w-7xl mx-auto px-5 py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
                <div className="pb-4 md:py-10">
                    <h2 className="uppercase font-bold">Investment Strategies</h2>
                    <p className="font-semibold mt-4 md:mt-6 text-3xl md:text-5xl md:leading-14">See life From A Different Perspective</p>
                    <p className="text-gray-700 mt-5 md:mt-7">Convallis sed a eu lorem odio lacinia. Vulputate luctus ultricies sit aliquam Egestas leo tellus diam vestibulum. Aenean habitasse augue tempus justo viverra eget. Leo sit tortor</p>
                    <div className="border-t border-gray-400 mt-8 md:mt-10 pt-10 space-y-10">
                        {items.map((item, i) => (
                            <div key={i} className="flex gap-5">
                                <div className="flex-none p-5 bg-slate-900 rounded-lg overflow-hidden h-fit">
                                    <div className="relative h-10 w-10 ">
                                        <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="mt-1 text-gray-700">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="relative h-70 md:h-full">
                    <Image src={"/gallery/gallery-1.jpg"} alt={"Solar Panel"} fill style={{ objectFit: "cover" }} />
                </div>
            </div>
        </section>
    )
}

export default SolarPanelInstallationsGrid