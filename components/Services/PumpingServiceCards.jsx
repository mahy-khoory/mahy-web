import Image from "next/image"

function PumpingServiceCards() {
    const items = [
        { title: "Discover", text: "We begin by understanding your brand, audience, and goals. Through research and strategy, we uncover the insights that shape every decision.", image: "/solar/solar-1.svg" },
        { title: "Plan", text: "With a clear vision, we create a roadmap tailored to your project. From wireframes to strategy outlines, every detail is planned with precision.", image: "/solar/solar-2.svg" },
        { title: "Design & Build", text: "Our creative and technical teams work together to bring concepts to life—crafting designs, developing solutions, and building experiences that stand out.", image: "/solar/solar-2.svg" },
        { title: "Launch & Grow", text: "Once live, we monitor performance, optimize results, and continue refining strategies to help your amazing brand grow and stay ahead.", image: "/solar/solar-1.svg" },
    ]
    return (
        <section className="relative text-white py-14 md:py-20 px-5">
            <div className="relative z-10 max-w-7xl mx-auto">
                <h2 className="text-3xl md:text-6xl text-center font-semibold">The Easy Journey <span className="block md:mt-3">From Concept to Creation</span></h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10 mt-12 md:mt-15">
                    {items.map((item, i) => (
                        <div className="backdrop-blur-xs border border-gray-800 p-8">
                            <div className="flex justify-between">
                                <div className="bg-gray-800 size-12 flex justify-center items-center">
                                    <span className="text-2xl">{i + 1}</span>
                                </div>
                                <div className="relative size-12">
                                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                                </div>
                            </div>
                            <h3 className="text-4xl font-semibold mt-15">{item.title}</h3>
                            <p className="text-gray-200 mt-4">{item.text}</p>
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute inset-0">
                <Image src={"/gallery/gallery-1.jpg"} alt="Pumping Service Systems" fill objectFit="cover" />
            </div>
            <div className="absolute inset-0 bg-black/50" />
        </section>
    )
}

export default PumpingServiceCards