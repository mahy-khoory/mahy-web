import SustainabilityPanels from "@/components/SustainabilityPanels"
import DesignProcessContainer from "@/components/UI/home/DesignProcessContainer";
import Gallery from "@/components/UI/home/Gallery"
import ImageSlideShow from "@/components/UI/home/ImageSlideShow"
import ScrollSectionWithImages from "@/components/UI/home/ScrollSectionWithImages"
import { getLocale, getTranslations } from "next-intl/server";

async function ProductsServicesPage() {
  const t = await getTranslations("HomePage");
  const locale = await getLocale();

  const slideshow = [
    { title: t("Slideshow.Title1"), subTitle: t("Slideshow.SubTitle1") },
    { title: t("Slideshow.Title2"), subTitle: t("Slideshow.SubTitle2") },
    { title: t("Slideshow.Title3"), subTitle: t("Slideshow.SubTitle3") },
    { title: t("Slideshow.Title4"), subTitle: t("Slideshow.SubTitle4") },
    { title: t("Slideshow.Title5"), subTitle: t("Slideshow.SubTitle5") },
  ];
  const scrollSection = [
    {
      title1: t("ScrollSection.Item1Title1"),
      title2: t("ScrollSection.Item1Title2"),
      text: t("ScrollSection.Item1Text"),
      cta: t("ScrollSection.Item1Cta"),
    },
    {
      title1: t("ScrollSection.Item2Title1"),
      title2: t("ScrollSection.Item2Title2"),
      text: t("ScrollSection.Item2Text"),
      cta: t("ScrollSection.Item2Cta"),
    },
    {
      title1: t("ScrollSection.Item2Title1"),
      title2: t("ScrollSection.Item3Title2"),
      text: t("ScrollSection.Item3Text"),
      cta: t("ScrollSection.Item3Cta"),
    },
  ];
  const galleryItems = [
    t("Gallery.Item1"),
    t("Gallery.Item2"),
    t("Gallery.Item3"),
    t("Gallery.Item4"),
    t("Gallery.Item5"),
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
      description: t("Sustainability.Item2Text1"),
    },
    {
      title: t("Sustainability.Item3"),
      image: "/mosque.JPG",
      bullets: [
        t("Sustainability.Item3Text1"),
        t("Sustainability.Item3Text2"),
        t("Sustainability.Item3Text3"),
      ],
    },
    {
      title: t("Sustainability.Item4"),
      image: "/dubai-pano.jpg",
      description: t("Sustainability.Item4Text1"),
    },
  ];
  return (
    <main>
      <ScrollSectionWithImages data={scrollSection} />
      <ImageSlideShow data={slideshow} locale={locale} />
      <SustainabilityPanels items={sustainability} cols={4} />
      <section id="about">
        <DesignProcessContainer />
      </section>
      <section id="gallery">
        <Gallery galleryItems={galleryItems} cta={t("Gallery.Button")} />
      </section>
    </main>
  )
}

export default ProductsServicesPage