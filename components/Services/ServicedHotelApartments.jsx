import Image from "next/image"

function ServicedHotelApartments({
    topHeading = "Why Choose Us",
    heading = "Expertise That Delivers Results",
    text = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt",
    items = [
        { title: "Collaborative", text: "We believe the best solutions are built together. By working closely with your team, we ensure that every strategy is aligned with your goals, values, and culture", image: "/gallery/gallery-1.jpg" },
        { title: "Proven Results", text: "We don't just make promises—we deliver measurable outcomes. Our track record speaks for itself, with clients consistently achieving significant growth", image: "/gallery/gallery-2.jpg" },
        { title: "Tailored Solutions", text: "There's no one-size-fits-all here. We take the time to understand your unique needs, then craft custom strategies designed specifically for your business", image: "/gallery/gallery-3.jpg" }
    ]
}) {
    return (
        <section className="max-w-7xl mx-auto px-5 py-10 md:py-20">
            <div className="relative">
                <div className="flex flex-col md:flex-row gap-6 justify-between items-start">
                    <div className="md:sticky top-1/4 b-base p-10 rounded-2xl text-white md:max-w-lg text-center md:text-start">
                        <h2 className="uppercase tracking-tighter font-bold">{topHeading}</h2>
                        <p className="text-2xl md:text-5xl mt-3 font-medium md:leading-14">{heading}</p>
                        <p className="mt-4 md:mt-5 text-gray-100">{text}</p>
                    </div>
                    <div className="space-y-6 w-full md:w-fit">
                        {items.map((item, i) => (
                            <div key={i} className="relative h-130 w-full md:h-160 md:w-150 rounded-2xl overflow-hidden">
                                <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                                <div className="absolute bottom-5 left-5 right-5 md:bottom-8 md:left-8 md:right-8 border border-gray-200 backdrop-blur-[3px] p-4 rounded-xl">
                                    <h3 className="text-white font-semibold text-2xl">{item.title}</h3>
                                    <p className="text-gray-50 mt-2 leading-5">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServicedHotelApartments