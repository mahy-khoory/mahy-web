import Image from "next/image"

function SolarPanelImagesGrid() {
    const items = [
        { title: "Smart Strategies", text: "Risus tristique proin cras diam sed. Risus diam leo feugiat non eget. Bibendum feugiat mauris enim rhoncus. Dolor." },
        { title: "Business Growth", text: "Ac ut nam vulputate volutpat felis in lorem. Volutpat sagittis in amet scelerisque porttitor ac augue sed pulvinar." }
    ];
    return (
        <section className="max-w-7xl mx-auto md:px-5">
            <div className="grid grid-cols-1 lg:grid-cols-8 md:gap-8">
                <div className="md:col-span-6">
                    <h2 className="text-4xl font-medium px-5 md:px-0 text-center md:text-start">Helping Businesses Scale Smarter Faster And Stronger</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 relative mt-8">
                        <div className="hidden md:block" />
                        <div className="md:absolute top-0 left-0 right-0 z-10">
                            <div className="md:w-6/10 bg-slate-900">
                                {items.map((item, i) => (
                                    <div className={`${i === 0 && "border-b border-gray-700"} p-10`}>
                                        <h3 className="text-white font-medium text-2xl">{item.title}</h3>
                                        <p className="text-gray-200 mt-3">{item.text}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative h-90 md:h-130">
                            <Image src={"/gallery/gallery-1.jpg"} alt="Solar Panel Images Grid" fill style={{ objectFit: "cover" }} />
                        </div>
                    </div>
                </div>
                <div className="md:col-span-2">
                    <div className="relative h-70">
                        <Image src={"/gallery/gallery-2.jpg"} alt="Solar Panel Images Grid" fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className="relative h-70 md:h-50 md:mt-8">
                        <Image src={"/gallery/gallery-3.jpg"} alt="Solar Panel Images Grid" fill style={{ objectFit: "cover" }} />
                    </div>
                    <div className="w-fit flex flex-col gap-1 md:gap-2 bg-slate-900 text-white px-4 py-3 md:px-7 md:py-5 relative bottom-20 md:bottom-7">
                        <span className="text-2xl md:text-4xl font-medium">250+</span>
                        <span className="uppercase font-medium text-sm md:text-md">Active Customers</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolarPanelImagesGrid