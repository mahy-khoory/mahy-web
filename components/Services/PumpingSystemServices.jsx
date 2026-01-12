import Image from "next/image"
import { FiArrowUpRight } from "react-icons/fi"

function PumpingSystemServices() {
    const items = [
        { date: "June 3, 2024", title: "6 tips on negotiating big B2B contracts and not wasting money" },
        { date: "June 3, 2024", title: "How to delegate even your most complex and critical business tasks" },
        { date: "June 3, 2024", title: "Scaling B2B sales: How to create a bullet-proof workflow" },
    ]
    return (
        <section className="max-w-7xl mx-auto px-5 py-10 md:py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                <div className="relative h-80 md:h-120 w-full">
                    <Image src={"/gallery/gallery-1.jpg"} alt="Pumping System Services" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="text-2xl md:text-4xl font-semibold">Adapting your business to continue growing with the new tools</p>
                    <p className="mt-4 text-gray-700">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className="flex gap-6 items-center uppercase mt-8 border-t border-gray-300 pt-8 text-lg font-semibold text-gray-600">
                        <span>Management</span>
                        <div className="h-px w-18 bg-gray-300" />
                        <span>June 3, 2024</span>
                    </div>
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-15">
                {items.map((item, i) => (
                    <div key={i} className={`border-y md:border-y-0 border-gray-300 ${i === 0 ? "md:pr-5" : "md:border-l  md:px-5"} py-6 md:py-4`}>
                        <p className="mb-4 md:mb-0 text-xl md:text-2xl font-semibold md:h-32">{item.title}</p>
                        <div className="flex justify-between items-center text-gray-700">
                            <span className="text-lg font-medium">{item.date}</span>
                            <FiArrowUpRight size={25} />
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default PumpingSystemServices