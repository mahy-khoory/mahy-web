import Image from "next/image";
import { HiLightBulb } from "react-icons/hi";

function SolarPanelInstallationsGrid({
    heading = "Investment Strategies",
    text,
    itemsTitle = "Product Features & Options",
    items = [
        {
            title: "Driving Innovation Through Strategy",
            text: "It is a long established fact that a reader will be distracted by the readable content of a page when looking",
            image: "/solar/solar-1.svg"
        },
        {
            title: "Expert Consulting For Sustainable Growth",
            text: "There are many variations of passages of Lorem Ipsum available, but the majority have suffered",
            image: "/solar/solar-2.svg"
        }
    ],
    images = [
        "/gallery/gallery-1.jpg",
        "/gallery/gallery-2.jpg",
        "/gallery/gallery-3.jpg"
    ]
}) {
    return (
        <section className="max-w-7xl mx-auto px-5 py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-20">
                <div className="pb-4 md:py-10">
                    <h2 className="uppercase font-bold text-xl">{heading}</h2>

                    {text && (
                        <p className="text-gray-700 mt-4">{text}</p>
                    )}

                    <div className="border-t border-gray-400 mt-8 md:mt-10 pt-10 space-y-10">
                        {itemsTitle && <h3 className="font-bold text-xl">{itemsTitle}</h3>}

                        {items.map((item, i) => (
                            <div key={i} className="flex gap-5">
                                <div className="flex-none p-3 bg-slate-900 rounded-lg overflow-hidden h-fit">
                                    <HiLightBulb size={30} color="white" />
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

                                    {item.endText && (
                                        <p className="mt-1 text-gray-700">{item.endText}</p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="flex flex-col gap-4 h-[350px] md:h-full">
                    {images.map((img, index) => (
                        <div key={index} className="relative flex-1 rounded-xl overflow-hidden">
                            <Image
                                src={img}
                                alt={`Gallery ${index + 1}`}
                                fill
                                className="object-cover"
                            />
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}

export default SolarPanelInstallationsGrid;