import AnimatedLines from "@/components/UI/AnimatedLines";
import CompaniesCard from "@/components/UI/companies/CompaniesCard";
import PrimaryButton from "@/components/UI/PrimaryButton";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { companiesSectors } from "@/constants/sectors";
import { Check } from "lucide-react";
import { getLocale } from "next-intl/server";
import Image from "next/image";
import { notFound } from "next/navigation";

async function CompanySectorsPage({ params }) {
    const { id } = await params;
    const locale = await getLocale();
    if (!id) notFound();
    const sector = companiesSectors[Number(id - 1)];

    return (
        <main>
            <SubPageHeading
                title={sector.title}
                image={sector.image}
            />
            <section className="max-w-7xl mx-auto px-5 py-10 md:py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-20">
                    <div>
                        <h2 className="text-4xl font-semibold">Leading the Way in <span className="md:block mt-2 t-base">Financial Innovation</span></h2>
                        {/* <p className="text-gray-600 mt-10">We are dedicated to pushing the boundaries of financial technology. Our platform is continuously updated with the latest features and innovations to ensure that you always have access to cutting-edge tools.</p> */}
                        <div className="space-y-6 mt-10">
                            {sector.items.map((item, i) => (
                                <div key={i} className="flex gap-3">
                                    <div className="b-base rounded-full p-1 h-fit">
                                        <Check size={13} color="white" />
                                    </div>
                                    <p className="text-sm text-gray-700">{item}</p>
                                </div>
                            ))}
                        </div>
                        <PrimaryButton label="Get Started" className={"mt-10"} />
                    </div>
                    <div className="relative h-full rounded-2xl overflow-hidden">
                        <Image src={sector.image} alt={sector.title} fill style={{ objectFit: "cover" }} />
                    </div>
                </div>
            </section>
            <section className="max-w-7xl mx-auto px-5 pb-10 md:pb-20">
                <AnimatedLines />
                <h2 className="text-3xl md:text-5xl pt-4 font-semibold text-center">Companies in this sector</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-10 md:mt-15">
                    {sector.companies.map((item, i) => (
                        <CompaniesCard key={i} id={i} title={item}
                            logo={"/gallery/gallery-1.jpg"} locale={locale} />
                    ))}
                </div>
            </section>
        </main>
    )
}

export default CompanySectorsPage