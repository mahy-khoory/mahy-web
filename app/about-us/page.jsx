import PageHeading from "@/components/UI/PageHeading";
import React from "react";
import Breadcrumb from "@/components/UI/Breadcrumb";
import History from "@/components/UI/about-us/History";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import LeadersSection from "@/components/UI/about-us/LeadersSection";
import MissionStatement from "@/components/UI/about-us/MissionStatement";
import Purpose from "@/components/UI/about-us/Purpose";
import { getLocale, getTranslations } from "next-intl/server";
import IndustriesGrid from "@/components/UI/about-us/IndustriesGrid";
import ManufacturingNetworkSection from "@/components/UI/about-us/ManufacturingNetworkSection";
import CompanyStructure from "@/components/UI/about-us/CompanyStructure";
import EnterprisePinnedContainer from "@/components/Layout/EnterprisePinnedContainer";
import HistoryTimeline from "@/components/Layout/HistoryTimeline";
import VisionSection from "@/components/UI/about-us/BenchMarks";
import MilestoneTimeline from "@/components/Layout/MilestoneTimeline";
import TimelineContainer from "@/components/Layout/TimelineContainer";

async function About() {
  const t = await getTranslations("AboutUsPage");
  const locale = await getLocale();

  const missionStatement = {
    heading: t("MissionStatement.Heading"),
    subHeading: t("MissionStatement.SubHeading"),
    text: t("MissionStatement.Text"),
    button: t("MissionStatement.Button"),
  };
  const structure = {
    heading: t("Structure.Heading"),
    company: t("Structure.Company"),
    items: [
      {
        title: t("Structure.Item1"),
        subTitle: t("Structure.Item1SubTitle"),
        text: t("Structure.Item1Text"),
      },
      {
        title: t("Structure.Item2"),
        subTitle: t("Structure.Item2SubTitle"),
        text: t("Structure.Item2Text"),
      },
      {
        title: t("Structure.Item3"),
        subTitle: t("Structure.Item3SubTitle"),
        text: t("Structure.Item3Text"),
      },
      {
        title: t("Structure.Item4"),
        subTitle: t("Structure.Item4SubTitle"),
        text: t("Structure.Item4Text"),
      },
      {
        title: t("Structure.Item5"),
        subTitle: t("Structure.Item5SubTitle"),
        text: t("Structure.Item5Text"),
      },
      {
        title: t("Structure.Item6"),
        subTitle: t("Structure.Item6SubTitle"),
        text: t("Structure.Item6Text"),
      },
    ],
  };
  const purpose = {
    heading: t("Purpose.Heading"),
    subHeading: t("Purpose.SubHeading"),
    items: [
      {
        title: t("Purpose.Item1Title"),
        content: t("Purpose.Item1Text"),
      },
      {
        title: t("Purpose.Item2Title"),
        content: t("Purpose.Item2Text"),
      },
      {
        title: t("Purpose.Item3Title"),
        content: t("Purpose.Item3Text"),
      },
    ],
    text1: t("Purpose.Text1"),
    text2: t("Purpose.Text2"),
  };
  const milestones = [
    {
      year: t("History.Item1Title"),
      title: t("History.Item1Text"),
      curveAt: 0.08,
      side: "above",
      description: [
        t("History.Item1Description1"),
        t("History.Item1Description2"),
        t("History.Item1Description3"),
        t("History.Item1Description4"),
        t("History.Item1Description5"),
      ],
      rulerLabel: t("History.Item1Title"),
    },
    {
      year: t("History.Item2Title"),
      title: t("History.Item2Text"),
      curveAt: 0.28,
      side: "below",
      description: [
        t("History.Item2Description1"),
        t("History.Item2Description2"),
        t("History.Item2Description3"),
        t("History.Item2Description4"),
      ],
      rulerLabel: t("History.Item2Title"),
    },
    {
      year: t("History.Item3Title"),
      title: t("History.Item3Text"),
      curveAt: 0.42,
      side: "above",
      description: [
        t("History.Item3Description1"),
        t("History.Item3Description2"),
        t("History.Item3Description3"),
        t("History.Item3Description4"),
        t("History.Item3Description5"),
      ],
      rulerLabel: t("History.Item3Title"),
    },
    {
      year: t("History.Item4Title"),
      title: t("History.Item4Text"),
      curveAt: 0.58,
      side: "below",
      description: [
        t("History.Item4Description1"),
        t("History.Item4Description2"),
        t("History.Item4Description3"),
        t("History.Item4Description4"),
        t("History.Item4Description5"),
      ],
      rulerLabel: "2023",
    },


  ];
  const history = {
    heading: t("History.Heading"),
    subHeading: t("History.Text"),
    items: [
      {
        title: t("History.Item1Title"),
        text: t("History.Item1Text"),
        description: [
          t("History.Item1Description1"),
          t("History.Item1Description2"),
          t("History.Item1Description3"),
          t("History.Item1Description4"),
          t("History.Item1Description5"),
        ],
        image: "/office.jpg",
      },
      {
        title: t("History.Item2Title"),
        text: t("History.Item2Text"),
        description: [
          t("History.Item2Description1"),
          t("History.Item2Description2"),
          t("History.Item2Description3"),
          t("History.Item2Description4"),
        ],
        image: "/office.jpg",
      },
      {
        title: t("History.Item3Title"),
        text: t("History.Item3Text"),
        description: [
          t("History.Item3Description1"),
          t("History.Item3Description2"),
          t("History.Item3Description3"),
          t("History.Item3Description4"),
          t("History.Item3Description5"),
        ],
        image: "/office.jpg",
      },
      {
        title: t("History.Item4Title"),
        text: t("History.Item4Text"),
        description: [
          t("History.Item4Description1"),
          t("History.Item4Description2"),
          t("History.Item4Description3"),
          t("History.Item4Description4"),
          t("History.Item4Description5"),
        ],
        image: "/office.jpg",
      },
    ],
  };
  const network = {
    text: [t("Network.Text1"), t("Network.Text2")],
    stats: [t("Network.Stat1"), t("Network.Stat2"), t("Network.Stat3")],
    statsNo: [
      (300000).toLocaleString(locale),
      (60).toLocaleString(locale),
      (1200).toLocaleString(locale),
    ],
    map: [t("Network.Map1"), t("Network.Map2"), t("Network.Map3")],
    locations: [
      t("Network.Location1"),
      t("Network.Location2"),
      t("Network.Location3"),
      t("Network.Location4"),
      t("Network.Location5"),
    ],
  };
  const ourPeople = {
    heading: t("OurPeople.Heading"),
    text: t("OurPeople.Text"),
  };
  const leaders = {
    heading: t("Leaders.Heading"),
    leader1: {
      quote: t("Leaders.Text1"),
      name: t("Leaders.Person1"),
      designation: t("Leaders.Position1"),
    },
    leader2: {
      quote: t("Leaders.Text2"),
      name: t("Leaders.Person2"),
      designation: t("Leaders.Position2"),
    },
  };
  const ourExcellence = {
    heading: t("OurExcellence.Heading"),
    text: t("OurExcellence.Text"),
  };
  const industries = [
    t("Industries.Item1"),
    t("Industries.Item2"),
    t("Industries.Item3"),
    t("Industries.Item4"),
    t("Industries.Item5"),
    t("Industries.Item6"),
    t("Industries.Item7"),
    t("Industries.Item8"),
    t("Industries.Item9"),
    t("Industries.Item10"),
  ];

  return (
    <main className="bg-gray-50">
      <PageHeading
        title={t("Heading")}
        description={t("Description")}
        // image={"/gallery/MAHYABOUT.jpg"}
        image={
          "https://res.cloudinary.com/db3fd1qah/image/upload/v1766140489/office_m5htoa.png"
        }
      />
      <Breadcrumb
        segments={[{ label: t("Page"), href: "/about-us" }]}
        locale={locale}
      />
      <MissionStatement missionStatement={missionStatement} />
      <EnterprisePinnedContainer />

      {/* <HistoryTimeline title="History Of MAHY Khoory" items={items} /> */}
      {/* <MilestoneTimeline title="History Of MAHY Khoory" milestones={milestones} /> */}
      <VisionSection />
      <TimelineContainer title={"History Of MAHY Khoory"} milestones={milestones} />
      <CompanyStructure data={structure} />
      <Purpose purpose={purpose} />
      <History history={history} />
      {/* <HistoryTimelineClient
        title={t("History.Heading")}
        items={[
          {
            year: t("History.Item1Title"),
            title: t("History.Item1Text"),
            description: [
              t("History.Item1Description1"),
              t("History.Item1Description2"),
              t("History.Item1Description3"),
              t("History.Item1Description4"),
              t("History.Item1Description5"),
            ],
          },
          {
            year: t("History.Item2Title"),
            title: t("History.Item2Text"),
            description: [
              t("History.Item2Description1"),
              t("History.Item2Description2"),
              t("History.Item2Description3"),
              t("History.Item2Description4"),
            ],
          },
          {
            year: t("History.Item3Title"),
            title: t("History.Item3Text"),
            description: [
              t("History.Item3Description1"),
              t("History.Item3Description2"),
              t("History.Item3Description3"),
              t("History.Item3Description4"),
              t("History.Item3Description5"),
            ],
          },
          {
            year: t("History.Item4Title"),
            title: t("History.Item4Text"),
            description: [
              t("History.Item4Description1"),
              t("History.Item4Description2"),
              t("History.Item4Description3"),
              t("History.Item4Description4"),
              t("History.Item4Description5"),
            ],
          },
        ]}
      /> */}
      <IndustriesGrid
        heading={t("Industries.Heading")}
        industries={industries}
      />
      <ManufacturingNetworkSection network={network} locale={locale} />
      <ValuesSection
        title={ourPeople.heading}
        description={ourPeople.text}
        imageSrc="/gallery/gallery-2.jpg"
        imageAlt="Our people"
        imagePosition="right"
        ctaLabel="Learn More"
        ctaHref="/people"
      />
      <div className="border-b border-gray-200"></div>
      <LeadersSection leaders={leaders} />
      <ValuesSection
        title={ourExcellence.heading}
        description={ourExcellence.text}
        imageSrc="/gallery/gallery-6.jpg"
        imageAlt="Our people"
        imagePosition="left"
        ctaLabel="Learn More"
        ctaHref="/people"
      />
    </main>
  );
}

export default About;
