import PartnersSection from "@/components/Layout/PartnersSection";
import DesignProcessContainer from "@/components/UI/home/DesignProcessContainer";
import HeroVideo from "@/components/UI/HeroVideo";
import FloatingMenu from "@/components/UI/FloatingMenu";
import Gallery from "@/components/UI/home/Gallery";
import KeyStatsSection from "@/components/UI/home/KeyStatsSection";
import { getTranslations } from "next-intl/server";
import EnterprisePinnedContainer from "@/components/Layout/EnterprisePinnedContainer";
import BusinessStepsContainer from "@/components/UI/home/BusinessStepsContainer";
import WhyUsContainer from "@/components/UI/home/WhyUsContainer";
import MissionVisionValuesSection from "@/components/MissionVisionValuesSection";
import SustainabilityPanels from "@/components/SustainabilityPanels";
import NextAdvantagesSection from "@/components/NextAdvantagesSection";
import ImageSlideShow from "@/components/UI/home/ImageSlideShow";

export default async function Home() {
  const t = await getTranslations("HomePage");

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

  const items = [
    {
      title: "Green Procurement",
      image: "/al-quba.jpg",
      bullets: [
        "Guided 100 suppliers in completing organizational-level carbon inventory.",
        "Guided 10 suppliers in setting carbon reduction targets and measures.",
      ],
    },
    {
      title: "Green Manufacturing",
      image: "/burj.jpg",
      description:
        "Five major manufacturing bases saved 10.83M kWh electricity with a 4.57% YoY decrease in total industrial electricity consumption.",
    },
    {
      title: "Green Recycling",
      image: "/mosque.JPG",
      bullets: [
        'Establishing a "dual-circulation" model to reduce resource consumption.',
        "Partnered with 89 recycling organizations globally. Reuse 660 tons of metals.",
        "Reuse 70 tons of organic plastics from scrap materials.",
      ],
    },
    {
      title: "Green Logistics",
      image: "/dubai-pano.jpg",
      description:
        "Making reverse logistics processes standardized, intelligent, and efficient to enhance recycling rates.",
    },
  ];

  const items2 = [
    {
      title: "Green Procurement",
      image: "/al-quba.jpg",
      bullets: [
        "Guided 100 suppliers in completing organizational-level carbon inventory.",
        "Guided 10 suppliers in setting carbon reduction targets and measures.",
      ],
    },
    {
      title: "Green Manufacturing",
      image: "/burj.jpg",
      description:
        "Five major manufacturing bases saved 10.83M kWh electricity with a 4.57% YoY decrease in total industrial electricity consumption.",
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
  }

  return (
    <main className="bg-white min-h-screen overflow-x-hidden">
      <FloatingMenu floatingMenuItems={floatingMenuItems} />
      <div id="home">
        {/* <HeroCarousel slides={HERO_SLIDES} /> */}
        <HeroVideo slides={slides} />
      </div>

      <NextAdvantagesSection advantages={advantages} />

      <ImageSlideShow />

      <section id="about">
        <DesignProcessContainer />
      </section>

      <section id="gallery">
        <Gallery galleryItems={galleryItems} />
      </section>

      <KeyStatsSection />
      <SustainabilityPanels items={items} cols={4} />

      <section id="partners">
        <PartnersSection />
      </section>

      <section id="enterprise">
        <EnterprisePinnedContainer />
        {/* <PinnedScrollSection /> */}
        {/* <PinnedSection /> */}
      </section>

      {/* <div className="px-4 sm:px-6 lg:px-10 py-10"> */}
      {/* </div> */}
      {/* <SustainabilityPanels items={items2} cols={2} /> */}
      <section id="after-sales">
        <BusinessStepsContainer />
      </section>

      <section id="why-us">
        <WhyUsContainer />
      </section>
    </main>
  );
}
