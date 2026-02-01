import ContactUsSection from "@/components/Contact/ContactUsSection";
import Breadcrumb from "@/components/UI/Breadcrumb";
import PageHeading from "@/components/UI/PageHeading";
import { getLocale, getTranslations } from "next-intl/server";
import React from "react";

async function ContactUs() {
  const t = await getTranslations("ContactUsPage");
  const locale = await getLocale();

  const contactUs = {
    headings: [t("Text1"), t("Text2"), t("Text3")],
    labels: [t("ContactUs"), t("CustomerComplaint")],
    form1: [t("Form1"), t("Form2"), t("Form3"), t("Form4"), t("Form5"), t("Form6"), t("Form7"), t("Form8"), t("Form9")],
    form2: [t("Form10"), t("Form11"), t("Form12"), t("Form13"), t("Form14"), t("Form15")],
    upload: [t("Form16"), t("Form17"), t("Form18")],
    agreement: [t("Agree1"), t("Agree2"), t("Agree3"), t("Agree4")],
    submit: [t("Submit1"), t("Submit2")]
  }

  return (
    <main>
      <PageHeading
        title={t("Heading")}
        description={t("Description")}
        image="/gallery/gallery-3.jpg"
      />
      <Breadcrumb segments={[{ label: t("Page"), href: "/contact-us" }]} locale={locale} />
      <ContactUsSection contactUs={contactUs} />
    </main>
  );
}

export default ContactUs;
