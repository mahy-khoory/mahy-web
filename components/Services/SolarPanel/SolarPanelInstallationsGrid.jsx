import Image from "next/image";
import { HiLightBulb } from "react-icons/hi";

function SolarPanelInstallationsGrid({
    heading = "Investment Strategies",
    text,
    itemsTitle = "Product Features & Options",
    items = [
        { title: "Driving Innovation Through Strategy", text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking", image: "/solar/solar-1.svg" },
        { title: "Expert Consulting For Sustainable Growth", text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered", image: "/solar/solar-2.svg" }
    ]
}) {
    return (
        <section className="max-w-7xl mx-auto px-5 py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
                <div className="pb-4 md:py-10">
                    <h2 className="uppercase font-bold text-xl">{heading}</h2>
                    {/* <p className="font-semibold mt-4 md:mt-6 text-3xl md:text-5xl md:leading-14">See life From A Different Perspective</p> */}
                    {text && (
                        <p className="text-gray-700 mt-4">{text}</p>
                    )}
                    <div className="border-t border-gray-400 mt-8 md:mt-10 pt-10 space-y-10">
                        {itemsTitle && <h3 className="font-bold text-xl">{itemsTitle}</h3>}
                        {items.map((item, i) => (
                            <div key={i} className="flex gap-5">
                                <div className="flex-none p-3 bg-slate-900 rounded-lg overflow-hidden h-fit">
                                    <div className="relative">
                                        {/* <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} /> */}
                                        <HiLightBulb size={30} color="white" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold">{item.title}</h3>
                                    <p className="mt-1 text-gray-700">{item.text}</p>
                                    {item.list && (
                                        <ul className="list-disc list-inside mt-1 text-gray-700">
                                            {item.list.map((listItem, j) => (
                                                <li key={j}>{listItem}</li>
                                            ))}
                                        </ul>
                                    )}
                                    {item.endText && <p className="mt-1 text-gray-700">{item.endText}</p>}
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