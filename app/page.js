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
      title: t("Hero1Title"),
      subtitle: t("Hero1Subtitle"),
      cta: { label: t("Hero1CtaLabel") },
    },
    {
      title: t("Hero2Title"),
      subtitle: t("Hero2Subtitle"),
      cta: { label: t("Hero2CtaLabel") },
      otherCta: { label: t("Hero2OtherCtaLabel") },
    },
    {
      title: t("Hero3Title"),
      subtitle: t("Hero3Subtitle"),
      cta: { label: t("Hero3CtaLabel") },
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
        <WhoWeAre />
      </section>

      <CompaniesList darkBg={true} />

      <section id="projects">
        <ProjectsSection />
      </section>

      <section id="stats">
        <KeyStatsSection />
      </section>

      <AwardsSection />
      <NewsroomSection articles={articles} locale={locale} />

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
