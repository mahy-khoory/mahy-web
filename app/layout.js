import { Poppins } from "next/font/google";
import "./globals.css";
import "leaflet/dist/leaflet.css";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import { cookies } from "next/headers";
import { getTranslations } from "next-intl/server";
import { getNavigation } from "@/config/navbar.config";
import { getFooter } from "@/config/footer.config";
import { NextIntlClientProvider } from "next-intl";
import ChatBot from "@/components/EnquiryChatBot/FloatingWrapper/Chatbot";
import { chatbotData } from "@/config/chatbot";
import SmoothScrollProvider from "@/components/Providers/SmoothScrollProvider";
import CartProvider from "@/components/Providers/CartProvider";
import CartDrawer from "@/components/UI/cart/CartDrawer";
import ReactQueryProvider from "@/components/Providers/ReactQueryProvider";
import LoaderWrapper from "@/components/LoaderWrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata = {
  metadataBase: new URL("https://mahy.vercel.app"),
  title: "M.A.H.Y. Khoory & CO. LLC",
  description:
    "A name that is recognized across the Middle East as leaders in the fields of Water Pumping Solutions, Electrical Solutions, Paper Recycling, and Logistics",
  openGraph: {
    title: "M.A.H.Y. Khoory & CO. LLC",
    description:
      "A name that is recognized across the Middle East as leaders in the fields of Water Pumping Solutions, Electrical Solutions, Paper Recycling, and Logistics",
    images: [
      {
        url: "/gallery/icon.png",
        width: 1000,
        height: 630,
      },
    ],
  },
};
export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#000",
};

export default async function RootLayout({ children }) {
  const cookieStore = await cookies();

  const locale = cookieStore.get("locale")?.value || "en";
  const dir = locale === "ar" ? "rtl" : "ltr";
  const navTranslations = await getTranslations("Nav");
  const footerTranslations = await getTranslations("Footer");
  const chatbotTranslations = await getTranslations("Chatbot");

  return (
    <html lang={locale} dir={dir}>
      <body
        suppressHydrationWarning
        className={`${poppins.variable} antialiased`}
        style={{ paddingTop: "env(safe-area-inset-top)" }}
      >
        <ReactQueryProvider>
          <SmoothScrollProvider>
            <NextIntlClientProvider locale={locale}>
              <LoaderWrapper>
                <CartProvider>
                  <Navbar navigation={getNavigation(navTranslations)} />
                  {children}
                  <section id="useful-links">
                    <Footer data={getFooter(footerTranslations)} />
                  </section>
                  <ChatBot
                    data={chatbotData(chatbotTranslations)}
                    locale={locale}
                  />
                  <CartDrawer />
                </CartProvider>
              </LoaderWrapper>
            </NextIntlClientProvider>
          </SmoothScrollProvider>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
