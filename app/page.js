import PartnersSection from "@/components/Layout/PartnersSection";
import HeroVideo from "@/components/UI/HeroVideo";
import FloatingMenu from "@/components/UI/FloatingMenu";
import KeyStatsSection from "@/components/UI/home/KeyStatsSection";
import { getLocale, getTranslations } from "next-intl/server";
import BusinessStepsContainer from "@/components/UI/home/BusinessStepsContainer";
import WhyUsContainer from "@/components/UI/home/WhyUsContainer";
import WhoWeAre from "@/components/UI/home/WhoWeAre";
import CompaniesList from "@/components/UI/home/CompaniesList";
import NewsroomSection from "@/components/UI/home/NewsroomSection";
import { getArticles } from "@/utlils/articles";
import ProjectsSection from "@/components/Home/ProjectsSection";
import AwardsSection from "@/components/Awards/AwardsSection";

export default async function Home() {
  const t = await getTranslations("HomePage");
  const locale = await getLocale();

  const slides = [
    {
      title: "Driving Sustainable Growth Across Industries",
      subtitle:
        "With a strong foundation in diverse sectors, we deliver integrated solutions that support long-term development and responsible growth.",
      cta: { label: "Explore Companies", href: "/companies/all" },
    },
    {
      title: "Powering Industries with Innovation and Reliability",
      subtitle:
        "We combine technical expertise with innovative thinking to deliver dependable solutions that meet evolving industry demands.",
      cta: {
        label: "Engineering Services",
        href: "/companies/engineering-services",
      },
    },
    {
      title: "Excellence Built on Experience and Commitment",
      subtitle:
        "Our decades of industry knowledge enable us to provide consistent quality and trusted services across every business we operate.",
      cta: { label: "Shop Products", href: "/shop" },
    },
    {
      title: "Delivering Value Through Integrated Solutions",
      subtitle:
        "From trading to manufacturing and beyond, we create seamless solutions that enhance efficiency and performance.",
      cta: { label: "Explore Companies", href: "/companies/all" },
    },
    {
      title: "Strengthening Industries Through Expertise and Trust",
      subtitle:
        "We work closely with our partners to deliver reliable products and services that drive operational success.",
      cta: { label: "View Services", href: "/companies/engineering-services" },
    },
    {
      title: "Sustainable Solutions for a Better Tomorrow",
      subtitle:
        "Our focus on responsible practices ensures that our operations contribute positively to the environment and society.",
      cta: { label: "Learn More", href: "/companies/all" },
    },
    {
      title: "Building Reliable Foundations for Future Growth",
      subtitle:
        "We support businesses with scalable solutions designed to adapt, perform, and grow in a changing world.",
      cta: { label: "Explore Solutions", href: "/companies/all" },
    },
    {
      title: "Committed to Quality, Driven by Performance",
      subtitle:
        "Every solution we deliver reflects our dedication to high standards, operational excellence, and customer satisfaction.",
      cta: { label: "Discover More", href: "/companies/all" },
    },
  ];
  const floatingMenuItems = [
    t("FloatingMenu.Item1"),
    t("FloatingMenu.Item2"),
    t("FloatingMenu.Item3"),
    t("FloatingMenu.Item4"),
    t("FloatingMenu.Item5"),
    t("FloatingMenu.Item6"),
    t("FloatingMenu.Item7"),
  ];
  const advantages = {
    heading: t("Advantages.Heading"),
    text1: t("Advantages.Text1"),
    text2: t("Advantages.Text2"),
    items: [
      {
        title: t("Advantages.Title1"),
        heading: t("Advantages.Heading1"),
        description: t("Advantages.Description1"),
      },
      {
        title: t("Advantages.Title2"),
        heading: t("Advantages.Heading2"),
        description: t("Advantages.Description2"),
      },
      {
        title: t("Advantages.Title3"),
        description: t("Advantages.Description3"),
      },
      {
        title: t("Advantages.Title4"),
        description: t("Advantages.Description4"),
      },
      {
        title: t("Advantages.Title5"),
        description: t("Advantages.Description5"),
      },
    ],
  };
  const announcements = [
    {
      heading: t("Announcements.Heading1"),
      title: t("Announcements.Title1"),
      text: t("Announcements.Text1"),
    },
    {
      heading: t("Announcements.Heading2"),
      title: t("Announcements.Title2"),
      text: t("Announcements.Text2"),
      img: "/gallery/gallery-7.webp",
    },
    {
      heading: t("Announcements.Heading3"),
      title: t("Announcements.Title3"),
      text: t("Announcements.Text3"),
      img: "/gallery/gallery-8.jpeg",
    },
    {
      heading: t("Announcements.Heading4"),
      title: t("Announcements.Title4"),
      text: t("Announcements.Text4"),
      img: "/gallery/gallery-9.jpeg",
    },
    {
      heading: t("Announcements.Heading5"),
      title: t("Announcements.Title5"),
      text: t("Announcements.Text5"),
      img: "/gallery/gallery-4.jpg",
    },
    {
      heading: t("Announcements.Heading6"),
      title: t("Announcements.Title6"),
      text: t("Announcements.Text6"),
      img: "/gallery/gallery-5.jpg",
    },
    {
      heading: t("Announcements.Heading7"),
      title: t("Announcements.Title7"),
      text: t("Announcements.Text7"),
      img: "/gallery/gallery-6.jpg",
    },
    {
      heading: t("Announcements.Heading8"),
      title: t("Announcements.Title8"),
      text: t("Announcements.Text8"),
    },
  ];
  const articleTranslations = await getTranslations("Articles");
  const articles = await getArticles(0, 4, articleTranslations);
  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <FloatingMenu floatingMenuItems={floatingMenuItems} />
      <div id="home">
        {/* <HeroCarousel slides={HERO_SLIDES} /> */}
        <HeroVideo slides={slides} />
      </div>

      <section id="who-we-are">
        <WhoWeAre
          image={
            "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
          }
        />
      </section>

      <div id="companies">
        <CompaniesList industeriesFirst={false} darkBg={true} />
      </div>

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="stats">
        <KeyStatsSection />
      </section>

      <div id="awards">
        <AwardsSection />
      </div>

      <div id="newsroom">
        <NewsroomSection articles={articles} locale={locale} />
      </div>

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="after-sales">
        <BusinessStepsContainer />
      </section>

      <section id="why-us">
        <WhyUsContainer />
      </section>
    </main>
  );
}
