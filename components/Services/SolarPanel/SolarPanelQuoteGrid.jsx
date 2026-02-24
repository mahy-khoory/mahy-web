import { ArrowRight, Check, Quote } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { FaQuoteLeft } from "react-icons/fa6"

function SolarPanelQuoteGrid({
    heading = "Tailored Solutions",
    text = "Lorem ipsum Suspendisse a massa vel sem ornare tincidunt eu sed ipsum Suspendisse commodo finibus nibh ac pretium turpis molestie",
    items = [
        "Strategize For Success",
        "Optimize Your Resources",
        "Innovate With Purpose",
        "Align For Growth"
    ],
    quoteText = "Gravida et sit arcu est id massa aliquam. Ac orci aliquam lacus eros convallis molestie. Eget nisl in ut et neque quisque nunc."
}) {
    return (
        <section className="max-w-7xl mx-auto md:px-5">
            <div className="grid grid-cols-1 md:grid-cols-5">
                <div className="relative h-80 md:h-full md:col-span-2">
                    <Image src={"/gallery/gallery-1.jpg"} alt="Solar Panel OEM Grid" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="pt-7 pb-5 md:py-10 px-5 md:px-10 md:col-span-3">
                    <h2 className="uppercase font-semibold">{heading}</h2>
                    {/* <p className="mt-5 text-3xl font-medium">Tailored Business Consulting For Optimal Success</p> */}
                    <p className="mt-3 text-gray-700">{text}</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 mt-8 gap-3 md:gap-0">
                        <div>
                            {items.map((item, i) => (
                                <div key={i} className={`flex gap-3 items-center pb-4 ${i < (items.length - 1) && "border-b border-gray-400"} ${i > 0 && "pt-4"}`}>
                                    <Check size={18} />
                                    <span className="font-medium">{item}</span>
                                </div>
                            ))}
                        </div>
                        <div className="bg-slate-900 text-white p-5">
                            <FaQuoteLeft size={30} />
                            <p className="mt-5">{quoteText}</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default SolarPanelQuoteGrid