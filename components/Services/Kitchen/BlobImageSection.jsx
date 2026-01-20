import PrimaryButton from "@/components/UI/PrimaryButton"
import Image from "next/image"

function BlobImageSection() {
    const items = [
        { count: "200+", text: "We deliver great work always", icon: "/waste/waste-3.svg" },
        { count: "10+", text: "Experience you can count on", icon: "/waste/waste-bg2.svg" },
        { count: "20+", text: "Award-Winning Work, Trusted Results", icon: "/waste/waste-bg3.svg" },
        { count: "1k+", text: "We have happy Clients worldwide", icon: "/waste/waste-2.svg" },
    ]
    return (
        <section className="max-w-7xl mx-auto px-5 py-10 md:py-20">
            <h2 className="text-2xl md:text-5xl font-semibold text-center">Who We Are. Learn About us</h2>
            <p className="text-gray-700 mt-3 font-medium text-center max-w-2xl mx-auto text-sm md:text-md">We are a dynamic team of innovators, storytellers, and visionaries dedicated to transforming ideas into extraordinary experiences.</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-12 mt-8 md:mt-15">
                <div className="relative rounded-2xl overflow-hidden h-80 md:h-full">
                    <Image src={"/gallery/gallery-4.jpg"} alt="Kitchen Solutions Image" fill style={{ objectFit: "cover" }} />
                </div>
                <div className="md:py-10">
                    <div className="grid grid-cols-2 gap-3 md:gap-6 mb-8">
                        {items.map((item, i) => (
                            <div key={i} className="bg-gray-100 rounded-2xl p-5 flex gap-3 md:gap-5">
                                <div className="relative size-10">
                                    <Image src={item.icon} alt={item.text} fill style={{ objectFit: "contain" }} />
                                </div>
                                <div>
                                    <span className="text-3xl md:text-4xl font-semibold">{item.count}</span>
                                    <p className="text-gray-700 border-t border-gray-300 mt-3 pt-3 tracking-tighter text-sm md:text-md">{item.text}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                    <PrimaryButton label="More About Us" />
                </div>
            </div>
        </section>
    )
}

export default BlobImageSection