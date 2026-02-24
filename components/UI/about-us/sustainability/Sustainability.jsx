import Link from "next/link";
import AnimatedLines from "../../AnimatedLines";
import Image from "next/image";
import { ArrowRight } from "lucide-react";


function SustainabilitySection({
    heading = "Sustainability",
    items = [
        {
            title: "Shaping Digital Innovation for a Sustainable Future",
            text: "Anchored in our vision To Enable Connectivity and Trust Everywhere, Our sustainability strategy focuses on three key foundational aspects within the company: internal controls, compliance, and talent development. By strengthening core competencies and aligning with the 17 United Nations Sustainable Development Goals (SDGs) and industry trends, we have identified five key sustainable development strategic priorities, aiming to contribute to global sustainable development initiatives.",
            image: "/gallery/gallery-4.jpg"
        },
        {
            title: "Sustainability Reports",
            text: "Mahy Khoory has been releasing sustainability reports for many consecutive years.",
            image: "/gallery/gallery-5.jpg"
        },
        {
            title: "Environmental Protection",
            text: "ZTE focuses on green innovation to pave a green digital path by promoting green operations, green supply chain, green digital infrastructure, and green empowerment, contributing to net zero emission.",
            image: "/gallery/gallery-6.jpg"
        },
        {
            title: "Social Contribution",
            text: "As a Driver of Digital Economy, ZTE is dedicated to leveraging digital intelligence to foster value beyond commercial interests and achieving the vision To Enable Connectivity and Trust Everywhere.",
            image: "/gallery/gallery-8.jpeg"
        },
        {
            title: "Corporate Governance",
            text: "ZTE has always been putting emphasis on strengthening corporate governance, focusing on internal control, compliance, social credibility and BCM to build a highly resilient organization.",
            image: "/gallery/gallery-4.jpg"
        }
    ]
}) {
    return (
        <div className="my-15 max-w-6xl mx-auto">
            <AnimatedLines />
            <h2 className='text-center text-3xl font-semibold pt-1'>{heading}</h2>
            <div className='grid grid-cols-1 lg:grid-cols-3 lg:gap-5 mt-10'>
                {items.map((items, i) => (
                    <div key={i} className={`${i === 0 && "lg:col-span-2"} relative lg:rounded-3xl overflow-hidden lg:h-65 flex flex-col justify-end group`}>
                        <div className="relative z-10 px-7 py-6 lg:p-5 transition-all duration-300 ease-in-out" >
                            <h3 className="text-white font-semibold text-lg">{items.title}</h3>
                            <p className="text-gray-100 text-sm mt-3">{items.text}</p>
                            {/* <Link href={"/"}>
                                <div className="flex gap-2 items-center text-white border border-white py-1.5 px-5 rounded-2xl text-sm w-fit">
                                    Learn More
                                    <ArrowRight />
                                </div>
                            </Link> */}
                        </div>
                        <div className="absolute inset-0 group-hover:scale-120 group-hover:blur-xs transition-all duration-300 ease-in-out">
                            <Image src={items.image} alt={items.title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default SustainabilitySection