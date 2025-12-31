import { getTranslations } from "next-intl/server";
import LogoMarquee from "../UI/LogoMarquee";
import partners from "@/constants/partners";
import AnimatedLines from "../UI/AnimatedLines";

export default async function PartnersSection() {
  const translations = await getTranslations('HomePage.Partners');

  return (
    <div className="max-w-7xl mx-auto px-5 py-24">
      <div className="text-center mb-14">
        <AnimatedLines />
        <h2 className="text-4xl md:text-5xl font-bold text-slate-900">{translations("Heading")}</h2>
        <p className="max-w-xl mx-auto text-slate-600 text-sm md:text-base font-medium mt-5">{translations("Description")}</p>
      </div>
      <LogoMarquee partners={partners} speed={40} />
    </div>
  );
}
