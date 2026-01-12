import Image from "next/image";
import AnimatedLines from "../UI/AnimatedLines";

function AnnualMaintenanceContracts() {
    const items = [
        { title: "Corporate Law", text: "We provide strategic legal counsel to startups, SMEs, and established corporations across all stages of business.", image: "/contracts/contract-1.svg" },
        { title: "Real Estate & Property Law", text: "Whether in court or out of it, we represent you with strategic, focused advocacy-working toward the best possible outcome.", image: "/contracts/contract-2.svg" },
        { title: "Family Law", text: "We guide you through divorce, custody, and other sensitive matters with compassion, clarity, and a strong focus on protecting your rights.", image: "/contracts/contract-3.svg" },
        { title: "Criminal Defense", text: "If you're facing charges, we provide assertive, strategic defense to protect your rights at every stage of the criminal justice process.", image: "/contracts/contract-4.svg" }
    ];

    return (
        <section className="max-w-7xl mx-auto py-10 md:pt-25 md:pb-20 px-5">
            <AnimatedLines />
            <h1 className="text-6xl text-center pt-3 font-semibold">Services</h1>
            <p className="mt-5 text-center text-2xl text-gray-700">Comprehensive Legal Services</p>
            <div className="mt-12 border-t border-gray-300">
                {items.map((item, i) => (
                    <div key={i} className="flex flex-col md:flex-row gap-4 md:gap-6 py-10 border-b border-gray-300">
                        <div className="relative h-12 w-12 md:h-15 md:w-15">
                            <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                        </div>
                        <div className="max-w-xl">
                            <h2 className="text-xl md:text-2xl font-semibold">{item.title}</h2>
                            <p className="mt-2 md:mt-1 text-gray-700">{item.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AnnualMaintenanceContracts