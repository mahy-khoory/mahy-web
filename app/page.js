import PartnersSection from "@/components/Layout/PartnersSection";
import DesignProcessContainer from "@/components/UI/home/DesignProcessContainer";
import HeroVideo from "@/components/UI/HeroVideo";
import FloatingMenu from "@/components/UI/FloatingMenu";
import Gallery from "@/components/UI/home/Gallery";
import KeyStatsSection from "@/components/UI/home/KeyStatsSection";
import { getLocale, getTranslations } from "next-intl/server";
import EnterprisePinnedContainer from "@/components/Layout/EnterprisePinnedContainer";
import BusinessStepsContainer from "@/components/UI/home/BusinessStepsContainer";
import WhyUsContainer from "@/components/UI/home/WhyUsContainer";
import SustainabilityPanels from "@/components/SustainabilityPanels";
import NextAdvantagesSection from "@/components/NextAdvantagesSection";
import ImageSlideShow from "@/components/UI/home/ImageSlideShow";
import ScrollSectionWithImages from "@/components/UI/home/ScrollSectionWithImages";
import Announcements from "@/components/UI/home/Announcements";

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
  const sustainability = [
    {
      title: t("Sustainability.Item1"),
      image: "/al-quba.jpg",
      bullets: [t("Sustainability.Item1Text1"), t("Sustainability.Item1Text2")],
    },
    {
      title: t("Sustainability.Item2"),
      image: "/burj.jpg",
      description: t("Sustainability.Item2Text1")
    },
    {
      title: t("Sustainability.Item3"),
      image: "/mosque.JPG",
      bullets: [t("Sustainability.Item3Text1"), t("Sustainability.Item3Text2"), t("Sustainability.Item3Text3")],
    },
    {
      title: t("Sustainability.Item4"),
      image: "/dubai-pano.jpg",
      description: t("Sustainability.Item4Text1")
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
  const galleryItems = [
    t("Gallery.Item1"),
    t("Gallery.Item2"),
    t("Gallery.Item3"),
    t("Gallery.Item4"),
    t("Gallery.Item5"),
  ];
  const advantages = {
    heading: t("Advantages.Heading"),
    text1: t("Advantages.Text1"),
    text2: t("Advantages.Text2"),
    items: [
      { title: t("Advantages.Title1"), heading: t("Advantages.Heading1"), description: t("Advantages.Description1") },
      { title: t("Advantages.Title2"), heading: t("Advantages.Heading2"), description: t("Advantages.Description2") },
      { title: t("Advantages.Title3"), description: t("Advantages.Description3") },
      { title: t("Advantages.Title4"), description: t("Advantages.Description4") },
      { title: t("Advantages.Title5"), description: t("Advantages.Description5") }
    ]
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
      img: "/gallery/gallery-7.webp"
    },
    {
      heading: t("Announcements.Heading3"),
      title: t("Announcements.Title3"),
      text: t("Announcements.Text3"),
      img: "/gallery/gallery-8.jpeg"
    },
    {
      heading: t("Announcements.Heading4"),
      title: t("Announcements.Title4"),
      text: t("Announcements.Text4"),
      img: "/gallery/gallery-9.jpeg"
    },
    {
      heading: t("Announcements.Heading5"),
      title: t("Announcements.Title5"),
      text: t("Announcements.Text5"),
      img: "/gallery/gallery-4.jpg"
    },
    {
      heading: t("Announcements.Heading6"),
      title: t("Announcements.Title6"),
      text: t("Announcements.Text6"),
      img: "/gallery/gallery-5.jpg"
    },
    {
      heading: t("Announcements.Heading7"),
      title: t("Announcements.Title7"),
      text: t("Announcements.Text7"),
      img: "/gallery/gallery-6.jpg"
    },
    {
      heading: t("Announcements.Heading8"),
      title: t("Announcements.Title8"),
      text: t("Announcements.Text8"),
    }
  ];
  const slideshow = [
    { title: t("Slideshow.Title1"), subTitle: t("Slideshow.SubTitle1") },
    { title: t("Slideshow.Title2"), subTitle: t("Slideshow.SubTitle2") },
    { title: t("Slideshow.Title3"), subTitle: t("Slideshow.SubTitle3") },
    { title: t("Slideshow.Title4"), subTitle: t("Slideshow.SubTitle4") },
    { title: t("Slideshow.Title5"), subTitle: t("Slideshow.SubTitle5") },
  ];
  const scrollSection = [
    { title1: t("ScrollSection.Item1Title1"), title2: t("ScrollSection.Item1Title2"), text: t("ScrollSection.Item1Text"), cta: t("ScrollSection.Item1Cta") },
    { title1: t("ScrollSection.Item2Title1"), title2: t("ScrollSection.Item2Title2"), text: t("ScrollSection.Item2Text"), cta: t("ScrollSection.Item2Cta") },
    { title1: t("ScrollSection.Item2Title1"), title2: t("ScrollSection.Item3Title2"), text: t("ScrollSection.Item3Text"), cta: t("ScrollSection.Item3Cta") }
  ];

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <FloatingMenu floatingMenuItems={floatingMenuItems} />
      <div id="home">
        {/* <HeroCarousel slides={HERO_SLIDES} /> */}
        <HeroVideo slides={slides} />
      </div>

      <NextAdvantagesSection advantages={advantages} />

      <Announcements items={announcements} cta={t("Announcements.Button")} locale={locale} />
      <ImageSlideShow data={slideshow} locale={locale} />
      <ScrollSectionWithImages data={scrollSection} />

      <section id="about">
        <DesignProcessContainer />
      </section>

      <section id="gallery">
        <Gallery galleryItems={galleryItems} cta={t("Gallery.Button")} />
      </section>

      <KeyStatsSection />
      <SustainabilityPanels items={sustainability} cols={4} />

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="enterprise">
        <EnterprisePinnedContainer />
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
