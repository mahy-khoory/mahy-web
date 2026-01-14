import PrimaryButton from "@/components/UI/PrimaryButton";
import { Mail } from "lucide-react";
import Image from "next/image"
import { FaQuestion } from "react-icons/fa6";

function WasteCollectionGrid() {
    const items = [
        { query: "What is your return policy?", reply: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better." },
        { query: "Need Help?", reply: "Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better." }
    ];
    return (
        <section className="bg-gray-100">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="relative h-90 md:h-full">
                    <Image src={"/gallery/gallery-1.jpg"} alt="Waste Collection Grid" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="py-8 md:py-20 px-5 max-w-lg mx-auto">
                    <h2 className="uppercase t-base font-semibold">Faq Edge</h2>
                    <p className="text-3xl md:text-4xl font-semibold mt-2">Frequently Asked Questions</p>
                    <p className="text-sm text-gray-600 mt-5">Successful people do what unsuccessful people are not willing to do. Don't wish it were easier; wish you were better.</p>
                    <div className="relative space-y-6 text-sm mt-10">
                        {items.map((item, i) => (
                            <div key={i} className="relative z-10">
                                <div className="flex gap-3 items-center">
                                    <div className="p-2 bg-[#2da5dc] text-white aspect-square">
                                        <FaQuestion size={25} />
                                    </div>
                                    <h3>{item.query}</h3>
                                </div>
                                <div className="flex gap-3 items-center mt-4">
                                    <div className="p-2 bg-[#79c4e7] text-white aspect-square">
                                        <Mail size={25} />
                                    </div>
                                    <p className="text-gray-700">{item.reply}</p>
                                </div>
                            </div>
                        ))}
                        <div className="absolute top-0 bottom-0 left-5 w-px bg-gray-400" />
                    </div>
                    <PrimaryButton className={"mt-5 md:mt-10"} />
                </div>
            </div>
        </section>
    )
}

export default WasteCollectionGrid