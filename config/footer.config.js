export const getFooter = (t) => {
  return {
    brand: {
      name: t("Name"),
      logo: {
        src: "/MAHY.png",
        alt: "MAHY Khoory & Co. LLC",
        href: "/",
        width: 140,
        height: 32,
      },
      description: t("Description"),
      status: {
        label: t("Status"),
        active: true,
      },
    },


    sections: [
      {
        title: t("Section1"),
        links: [
          { label: t("Section1Link1"), href: "/products/pumping-solutions" },
          { label: t("Section1Link2"), href: "/products/led-lighting-products" },
          { label: t("Section1Link3"), href: "/services/air-conditioning-services" },
          { label: t("Section1Link4"), href: "/products/corrugated-paper-reels" },
          { label: t("Section1Link5"), href: "/companies/automotive" },
        ],
      },
      {
        title: t("Section2"),
        links: [
          { label: t("Section2Link1"), href: "/about-us" },
          { label: t("Section2Link2"), href: "/news" },
          { label: t("Section2Link3"), href: "/companies/all" },
          { label: t("Section2Link4"), href: "/companies/operations-and-capabilities/technology-innovation" },
        ],
      },
      {
        title: t("Section3"),
        links: [
          { label: t("Section3Link1"), href: "/support" },
          { label: t("Section3Link3"), href: "/support", openBot: true },
        ],
        cta: {
          label: "Contact Us",
          href: "/contact-us",
        },
      },
    ],

    bottom: {
      copyright: t("Bottom"),
      links: [
        { label: t("BottomLink1"), href: "/about-us/code-of-conduct" },
        { label: t("BottomLink2"), href: "/about-us/code-of-conduct" },
        { label: t("BottomLink3"), href: "/about-us/code-of-conduct" },
      ],
    },
  }
};
