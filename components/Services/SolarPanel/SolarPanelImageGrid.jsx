import PrimaryButton from "@/components/UI/PrimaryButton";
import { Check, CheckCircle, CheckCircle2Icon, CheckCircleIcon } from "lucide-react";
import Image from "next/image";

function SolarPanelImageGrid({
    heading = "Insights for Growth",
    subHeading = "Comprehensive Strategies For Realizing Your Vision",
    bulletItems,
    text = "Consectetur scelerisque nec luctus placerat ipsum ornare risus dignissim Elit ultricies risus aliquet quis lacus gravida text dapibus eget",
    items = [
        { title: "Achieving Business Goals Together", text: "At et et ipsum sit posuere facilisis. Commodo mattis nunc venenatis malesuada posuere at vel. Feugiat nunc eget purus molestie nisi." },
        { title: "Data-Driven Strategies For Success", text: "At et et ipsum sit posuere facilisis. Commodo mattis nunc venenatis malesuada posuere at vel. Feugiat nunc eget purus molestie nisi." }
    ],
}) {
    return (
        <section className="max-w-7xl mx-auto px-5 py-12">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="md:col-span-3 py-8 md:py-10 max-w-xl">
                    <div className="text-center md:text-start">
                        <h2 className="uppercase font-semibold tracking-wide">{heading}</h2>
                        <p className="text-2xl md:text-4xl font-semibold mt-3 md:mt-4">{subHeading}</p>
                        {bulletItems && (
                            <ul className="mt-6 list-disc list-inside space-y-1.5 text-sm">
                                {bulletItems.map((item, i) => (
                                    <li key={i}>{item}</li>
                                ))}
                            </ul>
                        )}
                        <p className="text-gray-700 mt-4 md:mt-5 mb-4 md:mb-2 text-sm md:text-md">{text}</p>
                    </div>
                    {items.map((item, i) => (
                        <div key={i} className={`${i > 0 && "border-t border-gray-400"} py-5 md:py-8`}>
                            <div className="flex items-center gap-2">
                                <div className="p-1 rounded-full b-base text-white">
                                    <Check size={15} />
                                </div>
                                <h3 className="font-medium text-lg">{item.title}</h3>
                            </div>
                            {item.textItems && (
                                <ul className="mt-2.5 space-y-1">
                                    {item.textItems.map((textItem, j) => (
                                        <li key={j} className="text-sm md:text-md text-gray-700">{textItem}</li>
                                    ))}
                                </ul>
                            )}
                            {item.text && (
                                <p className="text-gray-700 mt-2.5 text-sm md:text-md">{item.text}</p>
                            )}
                        </div>
                    ))}
                    {/* <PrimaryButton className={"mt-4 md:mt-2"} /> */}
                </div>
                <div className="md:col-span-2 relative h-80 md:h-full">
                    <Image src={"/gallery/gallery-1.jpg"} alt="Solar Panel Images Grid" fill style={{ objectFit: "cover" }} />
                </div>
            </div>
        </section>
    )
}

export default SolarPanelImageGrid