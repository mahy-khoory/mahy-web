"use client";

import { usePathname } from "next/navigation";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ChatBot from "../EnquiryChatBot/FloatingWrapper/Chatbot";
// import { getTranslations } from "next-intl/server";

export default function LayoutWrapper({
  children,
  navigation,
  footerData,
  chatbotData,
  locale,
}) {
  // const cookieStore = await cookies();

  // const locale = cookieStore.get("locale")?.value || "en";
  const pathname = usePathname();

  const isPortal = pathname.startsWith("/mahy-portal");
  // const chatbotTranslations = await getTranslations("Chatbot");

  return (
    <>
      {!isPortal && <Navbar navigation={navigation} />}

      {children}

      {!isPortal && (
        <section id="useful-links">
          <Footer data={footerData} />
        </section>
      )}

      {!isPortal && (
        <ChatBot data={chatbotData} locale={locale} />
      )}
    </>
  );
}
