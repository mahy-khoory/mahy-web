import WasteCollectionGrid from "@/components/Services/WasteCollection/WasteCollectionGrid";
import WasteCollectionTimeline from "@/components/Services/WasteCollection/WasteCollectionTimeline";
import CodeOfConductSection from "@/components/UI/about-us/code-of-conduct/CodeOfConductSection";
import LargeArticleSection from "@/components/UI/about-us/code-of-conduct/LargeArticleSection";
import DesignProcessContainer from "@/components/UI/home/DesignProcessContainer";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { HiLightBulb } from "react-icons/hi";

export default function GovernancePage() {
  const codeOfConductItems = [
    {
      id: 1,
      title: "Integrity",
      description: "We conduct our business with honesty, fairness, and transparency, ensuring that all decisions and actions reflect strong ethical values.",
      icon: "/processes/planning.png",
      leftShift: "-left-10",
      rightShift: "-right-10"
    },
    {
      id: 2,
      title: "Compliance",
      description: "We comply with all applicable laws, regulations, and internal policies in every jurisdiction where we operate.",
      icon: "/processes/design.png",
      leftShift: "left-8",
      rightShift: "right-8"
    },
    {
      id: 3,
      title: "Conflict of Interest",
      description: "We avoid situations where personal interests may conflict with the interests of the Group and always act in the best interest of the organization.",
      icon: "/processes/development.png",
      leftShift: "left-20",
      rightShift: "right-20"
    },
    {
      id: 4,
      title: "Confidentiality",
      description: "We respect and protect confidential information related to the Group, our customers, partners, and employees.",
      icon: "/processes/deployment.png",
      leftShift: "left-15",
      rightShift: "right-15"
    },
    {
      id: 5,
      title: "Respect & Responsibility",
      description: "We promote a culture of professionalism, respect, and accountability while maintaining safe, responsible, and sustainable business practices",
      icon: "/processes/design.png",
      leftShift: "-left-4",
      rightShift: "-right-4"
    }
  ];

  const groupPoliciesItems = [
    {
      query: "Corporate governance and delegation of authority"
    },
    {
      query: "Ethical conduct and anti-bribery and anti-corruption practices"
    },
    {
      query: "Health, safety, and environmental responsibility"
    },
    {
      query: "Quality management and operational controls"
    },
    {
      query: "Human resources, workplace conduct, and employee relations"
    },
    {
      query: "Data protection, confidentiality, and information security"
    },
    {
      query: "Financial controls, reporting, and compliance"
    }
  ];

  const timelineItems = [
    {
      title: "Compliance & Accountability",
      text: "Compliance with the Group’s policies and Code of Conduct is mandatory for all employees and business units. Management teams are responsible for implementing policies within their operations and ensuring that employees are aware of and trained on relevant requirements.",
      text2: "The Group monitors compliance through internal controls, audits, reviews, and reporting mechanisms. Where violations are identified, appropriate corrective actions are taken to address issues and prevent recurrence.",
      image: "/gallery/gallery-1.jpg"
    },
    {
      title: "Speaking Up & Ethical Concerns",
      text: "MAHY Khoory Group encourages open communication and responsible reporting of concerns related to unethical behavior, policy violations, or misconduct. Employees are expected to raise concerns through appropriate internal channels without fear of retaliation.",
      text2: "All reported concerns are treated confidentially and investigated fairly, in line with established procedures.",
      image: "/gallery/gallery-2.jpg"
    },
    {
      title: "Commitment to Responsible Business",
      text: "Our policies and Code of Conduct reflect MAHY Khoory Group’s commitment to responsible business practices, long-term sustainability, and strong corporate governance. By adhering to these principles, we aim to build trust, protect our reputation, and create lasting value for our customers, partners, employees, and the communities we serve.",
      image: "/gallery/gallery-3.jpg"
    }
  ];

  return (
    <main className="bg-white">
      <SubPageHeading
        title="Code Of Conduct"
        image="/gallery/gallery-6.jpg"
        align="center"
      />
      <DesignProcessContainer
        heading={"Code of Conduct"}
        text1={"The MAHY Khoory Group's Code of Conduct defines the ethical standards that guide how we operate and interact across all our businesses. All employees and representatives are expected to uphold these principles, ensuring that our operations reflect integrity, responsibility, and professionalism at all times."}
        text2={"Our Code of Conduct is based on the following principles:"}
        text3={"Any breach of the Code of Conduct is taken seriously and addressed in accordance with established disciplinary and corrective procedures."}
        processes={codeOfConductItems}
        space={"lg:space-y-10"}
      />
      <WasteCollectionGrid
        heading={"Group Policies"}
        text1={"MAHY Khoory Group maintains a comprehensive set of policies designed to support consistent governance, risk management, and operational discipline across all companies."}
        text2={"These policies cover, among others:"}
        text3={"Group policies are regularly reviewed and updated to ensure alignment with legal requirements, industry standards, and best practices."}
        icon={<HiLightBulb size={25} fill="white" />}
        items={groupPoliciesItems}
      />
      <WasteCollectionTimeline
        topSection={false}
        bottomSection={false}
        items={timelineItems}
      />
      <CodeOfConductSection />
      <LargeArticleSection />
    </main>
  );
}
