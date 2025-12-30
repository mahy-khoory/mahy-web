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
          { label: t("Section1Link1"), href: "#" },
          { label: t("Section1Link2"), href: "#" },
          { label: t("Section1Link3"), href: "#" },
          { label: t("Section1Link4"), href: "#" },
          { label: t("Section1Link5"), href: "#" },
        ],
      },
      {
        title: t("Section2"),
        links: [
          { label: t("Section2Link1"), href: "/about-us" },
          { label: t("Section2Link2"), href: "#" },
          { label: t("Section2Link3"), href: "/companies" },
          { label: t("Section2Link4"), href: "#" },
        ],
      },
      {
        title: t("Section3"),
        links: [
          { label: t("Section3Link1"), href: "#" },
          { label: t("Section3Link2"), href: "/contact-us" },
          { label: t("Section3Link3"), href: "#" },
        ],
        cta: {
          label: t("Cta"),
          href: "#",
        },
      },
    ],

    bottom: {
      copyright: t("Bottom"),
      links: [
        { label: t("BottomLink1"), href: "#" },
        { label: t("BottomLink2"), href: "#" },
        { label: t("BottomLink3"), href: "#" },
      ],
    },
  }
};
