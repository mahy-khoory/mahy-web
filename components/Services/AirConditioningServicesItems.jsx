import Image from "next/image"

function AirConditioningServicesItems() {
    const items = [
        {
            title: "Expert Installation & Commissioning",
            text: "Our installation and commissioning services follow strict engineering guidelines and manufacturer specifications to ensure optimal performance from day one:",
            points: [
                "Installation of new AC units as per approved drawings and technical specifications",
                "Mounting, piping, insulation, ducting connections, and condensate management",
                "Electrical integration with panels, isolators, and safety devices",
                "Full system testing, air balancing, and performance verification",
                "Measurement of cooling capacity, airflow distribution, and temperature accuracy",
                "Ensuring compliance with safety, ventilation, and environmental standards"
            ],
            text2: "These commissioning procedures guarantee stable cooling, quiet operation, and efficient energy consumption."
        },
        {
            title: "Stress-Free Warranty Repairs",
            text: "We manage all warranty-related issues directly with equipment manufacturers to ensure fast and reliable resolution:",
            points: [
                "Full coordination with AC brands and OEMs for warranty validation and approvals",
                "Use of genuine spare parts to maintain system integrity and durability",
                "Comprehensive service documentation for record-keeping and future reference",
                "Repairs carried out with minimal disruption to residents, tenants, or operations"
            ],
            text2: "Our streamlined warranty process helps reduce downtime and maintain consistent cooling performance."
        },
        {
            title: "Dependable Non-Warranty Repairs",
            text: "Our swift and accurate repair services ensure your AC systems return to peak performance quickly and efficiently:",
            points: [
                "Rapid response to breakdowns, cooling issues, leaks, and customer complaints",
                "Detailed diagnostic reports identifying the exact cause of failure",
                "Transparent repair cost estimates with no hidden charges",
                "Corrective repairs focused on solving root causes, not temporary patchwork",
                "Replacement of faulty compressors, motors, blowers, sensors, contactors, PCB boards, and refrigerant components"
            ],
            text2: "We aim to restore system efficiency while extending equipment lifespan."
        },
        {
            title: "Additional Support Services",
            points: [
                "Preventive maintenance contracts (filter cleaning, coil washing, gas top-up, electrical checks)",
                "Duct cleaning & IAQ (Indoor Air Quality) improvement services",
                "Thermostat calibration & control optimization",
                "Refrigerant leak testing and system recharging",
                "Ventilation system inspection & exhaust system servicing"
            ]
        }
    ];
    return (
        <section className="bg-slate-200 py-10 md:py-20 px-5 relative">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-20 md:pb-20">
                    {items.map((item, i) => (
                        <Card key={i} item={item} i={i} />
                    ))}
                </div>
                <div className="absolute inset-0 flex justify-center items-center overflow-hidden">
                    {/* Small screens: repeating spinning background */}
                    <div className="md:hidden absolute top-10 left-0 right-0 bottom-0 grid grid-cols-1 gap-50 place-items-center">
                        {Array.from({ length: 5 }).map((_, i) => (
                            <div key={i} className="relative size-100 animate-spin-slow">
                                <Image
                                    src="/air-conditioning/air-conditioning-bg.webp"
                                    alt=""
                                    fill
                                    className="object-contain"
                                />
                            </div>
                        ))}
                    </div>
                    {/* md and up: spinning image */}
                    <div className="hidden md:block relative size-200 animate-spin-slow">
                        <Image src="/air-conditioning/air-conditioning-bg.webp" alt="AirConditioningServices" fill />
                    </div>
                </div>
            </div>
        </section>
    )
};

const Card = ({ item, i }) => (
    <div className={` ${(i + 1) % 2 === 0 && "md:translate-y-20"} border p-8`}>
        <h2 className="font-semibold text-xl mb-3">{item.title}</h2>
        {item.text && (
            <p className="text-sm mb-2">{item.text}</p>
        )}
        <ul className="list-disc list-inside text-sm mb-2 space-y-1">
            {item.points.map((point, j) => (
                <li key={j}>{point}</li>
            ))}
        </ul>
        {item.text2 && (
            <p className="text-sm">{item.text2}</p>
        )}
    </div>
)

export default AirConditioningServicesItems