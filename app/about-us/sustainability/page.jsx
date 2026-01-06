import CorporateCulture from "@/components/UI/about-us/sustainability/CorporateCulture"
import QualityPolicies from "@/components/UI/about-us/sustainability/QualityPolicies"
import RandD from "@/components/UI/about-us/sustainability/Randd"
import SustainabilitySection from "@/components/UI/about-us/sustainability/Sustainability"
import Image from "next/image"


function SustainabilityPage() {
    return (
        <main className='lg:pb-20'>
            <div className="w-full h-screen relative">
                <Image src={"/gallery/gallery-1.jpg"} alt="Sustainability" fill style={{ objectFit: "cover" }} />
                <div className="absolute left-0 right-0 bottom-0 h-1/2 bg-linear-to-t from-white to-transparent" />
                <div className="absolute inset-0 text-center z-10 pt-45 text-3xl text-white">
                    <p>To lead in connectivity and intelligence computing.</p>
                    <p className="mt-5">Enabling communation</p>
                </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 max-w-6xl gap-8 lg:gap-15 mx-auto relative bottom-40 lg:bottom-20 px-4 lg:px-0 h-150 lg:h-fit">
                <div className="relative h-70 lg:h-90 rounded-4xl overflow-hidden">
                    <Image src={"https://res.cloudinary.com/db3fd1qah/image/upload/v1766140489/office_m5htoa.png"} alt="Office"
                        fill style={{ objectFit: "cover" }} />
                </div>
                <div className="flex flex-col justify-center">
                    <p className="font-semibold text-xl">Mahy Khoory</p>
                    <p className="font-medium mt-2">A Global Leader in Integrated Information and Communication Technology Solutions</p>
                    <p className="text-sm mt-2">Leveraging innovative technologies and product solutions, ZTE serves global telecom operators, government and enterprise customers, and consumers.
                        Covering more than 160 countries and regions, ZTE enables connectivity for one-third of the world's population, and is committed to realizing a bright future with communication and trust everywhere.</p>
                    <h2 className="mt-5 font-semibold">Our Mission</h2>
                    <p className="text-sm mt-2">To create an intelligent future with digital innovation, excellent growth platform for employees, and greater value for customers, shareholders, and stakeholders across the globe.</p>
                </div>
            </div>
            <RandD />
            <QualityPolicies />
            <SustainabilitySection />
            <CorporateCulture />
        </main>
    )
}

export default SustainabilityPage