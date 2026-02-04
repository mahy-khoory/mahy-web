import ContactTextPane from "@/components/Contact/ContactTextPane";
import ServiceRequestForm from "@/components/Contact/ServiceRequestForm";
import ServiceRequest from "@/components/UI/form/ServiceRequest";
import { getTranslations } from "next-intl/server";

export default async function ScheduleServicePage() {
  const t = await getTranslations("ContactUsPage");
  const contactUs = {
    headings: [t("Text1"), t("Text2"), t("Text3")],
    labels: [t("ContactUs"), t("CustomerComplaint")],
    form1: [
      t("Form1"),
      t("Form2"),
      t("Form3"),
      t("Form4"),
      t("Form5"),
      t("Form6"),
      t("Form7"),
      t("Form8"),
      t("Form9"),
    ],
    form2: [
      t("Form10"),
      t("Form11"),
      t("Form12"),
      t("Form13"),
      t("Form14"),
      t("Form15"),
    ],
    upload: [t("Form16"), t("Form17"), t("Form18")],
    agreement: [t("Agree1"), t("Agree2"), t("Agree3"), t("Agree4")],
    submit: [t("Submit1"), t("Submit2")],
  };
  return (
    <main className="max-w-7xl mx-auto px-5 py-25">
      <main>
        <ServiceRequest />
      </main>
    </main>
  );
}
