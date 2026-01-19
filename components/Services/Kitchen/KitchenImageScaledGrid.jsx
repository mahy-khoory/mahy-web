import Image from "next/image";

function KitchenImageScaledGrid() {
    const items = [
        { text: "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.", icon: "/kitchen/kitchenGrid-1.svg" },
        { text: "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.", icon: "/kitchen/kitchenGrid-2.svg" }
    ];
    return (
        <section className="bg-slate-950 text-white">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 md:gap-15">
                <div className="py-14 md:py-25 px-5">
                    <h2 className="font-semibold text-3xl md:text-5xl leading-10 md:leading-15 text-center md:text-start">Our vision for lasting impact</h2>
                    <p className="text-gray-200 mt-5 md:mt-8 text-center md:text-start">Lorem ipsum dolor sit amet consectetur. Eros amet nibh amet mattis fermentum morbi convallis amet mus. Viverra quam eget quam porttitor justo vehicula.</p>
                    <div className="space-y-6 mt-12">
                        {items.map((item, i) => (
                            <div key={i} className={`flex gap-6 items-center w-fit ${i === 0 && "border-b border-gray-500 pb-6"}`}>
                                < div className="relative size-16">
                                    <Image src={item.icon} alt={i} fill style={{ objectFit: "contain" }} />
                                </div>
                                <p className="max-w-md">{item.text}</p>
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