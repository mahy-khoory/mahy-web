import ContactUsSection from "@/components/Contact/ContactUsSection";
import ServiceRequestTop from "@/components/Contact/ServiceRequestTop";
import WhyChooseService from "@/components/Contact/WhyChooseService";
import Breadcrumb from "@/components/UI/Breadcrumb";
import PageHeading from "@/components/UI/PageHeading";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

async function ContactUs() {
  const t = await getTranslations("ContactUsPage");
  const locale = await getLocale();

  return (
    <main className="bg-black">
      {/* <div className="bg-white">
        <Breadcrumb
          segments={[{ label: t("Page"), href: "/contact-us" }]}
          locale={locale}
        />
      </div> */}

      {/* IMPORTANT: isolate hero visually */}
      <section className="relative">
        <ServiceRequestTop
          brand="Service"
          company="MAHY Khoory"
          title="MAHY Servicing"
          imageSrc="/gallery/gallery-1.jpg"
        />
      </section>
      <WhyChooseService />
    </main>
  );
}

export default ContactUs;
