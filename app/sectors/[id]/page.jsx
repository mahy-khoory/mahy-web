import CompaniesSectors from "@/components/CompaniesSectors";
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
                <CompaniesSectors image={sector.image} title={sector.title} text1={sector.text1} text2={sector.text2} text3={sector.text3} items={sector.items} />
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