import AnimatedLines from "@/components/UI/AnimatedLines";
import PrimaryButton from "@/components/UI/PrimaryButton";
import Image from "next/image"

function KitchenItems() {
    const items = [
        { title: "Problem", text: "Their existing page lacked clarity, visual appeal" },
        { title: "Process", text: "I researched the wellness industry, mapped the user" },
        { title: "Solution", text: "Designed a responsive landing page that clearly" },
        { title: "Result", text: "50% drop bounce rate" }
    ];

    return (
        <section className="max-w-7xl mx-auto px-5 py-12 md:py-20">
            <AnimatedLines />
            <h2 className="text-4xl md:text-5xl pt-2 text-center font-semibold">Recent Case Study</h2>
            <p className="mt-4 md:mt-6 text-center max-w-xl mx-auto text-gray-600">Combining innovation, strategy, and design to craft powerful brand experiences that drive real results.</p>
            <div className="rounded-2xl p-5 md:p-8 border border-gray-300 grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 md:mt-10">
                <div className="relative h-80 md:h-full rounded-2xl overflow-hidden">
                    <Image src={"/gallery/gallery-1.jpg"} alt="Kitchen" fill style={{ objectFit: "cover" }} />
                </div>
                <div>
                    <p className="text-2xl md:text-4xl font-semibold leading-8">Wellness Landing Page</p>
                    <p className="mt-2 md:mt-4 text-gray-700">Welz is a modern wellness startup focused on promoting mental and physical well-being through holistic products and personalized services.</p>
                    <div className="grid grid-cols-2 gap-8 mt-6 mb-6">
                        {items.map((item, i) => (
                            <div key={i} className="border-l border-gray-300 pl-4 py-1">
                                <h3 className="text-xl font-semibold">{item.title}</h3>
                                <p className="text-gray-700 mt-1 text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                    <PrimaryButton label="View More" />
                </div>
            </div>
        </section>
    )
}

export default KitchenItems