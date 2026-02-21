import WasteCollectionGrid from "@/components/Services/WasteCollection/WasteCollectionGrid";
import WasteCollectionTimeline from "@/components/Services/WasteCollection/WasteCollectionTimeline";
import CodeOfConductSection from "@/components/UI/about-us/code-of-conduct/CodeOfConductSection";
import LargeArticleSection from "@/components/UI/about-us/code-of-conduct/LargeArticleSection";
import DiscoverSection from "@/components/UI/about-us/health-safety/DiscoverSection";
import InfoNavigationSection from "@/components/UI/about-us/health-safety/InfoNavigationSection";
import GovernanceContent from "@/components/UI/about-us/leadership-and-management/GovernanceContent";
import GovernanceTabs from "@/components/UI/about-us/leadership-and-management/GovernanceTabs";
import DesignProcess from "@/components/UI/home/DesignProcess";
import DesignProcessContainer from "@/components/UI/home/DesignProcessContainer";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { m } from "framer-motion";
import { Star } from "lucide-react";
import { HiLightBulb } from "react-icons/hi";

export default function GovernancePage() {
  const codeOfConductItems = [
    {
      id: 1,
      title: "Integrity & Transparency",
      description: "Acting honestly, fairly, and transparently in all business dealings",
      icon: "/processes/planning.png",
      leftShift: "-left-10",
      rightShift: "-right-10"
    },
    {
      id: 2,
      title: "Legal & Regulatory Compliance",
      description: "Complying with applicable laws, regulations, and internal policies in all jurisdictions where we operate",
      icon: "/processes/design.png",
      leftShift: "left-8",
      rightShift: "right-8"
    },
    {
      id: 3,
      title: "Conflict of Interest",
      description: "Avoiding conflicts of interest and acting in the best interests of the Group",
      icon: "/processes/development.png",
      leftShift: "left-17",
      rightShift: "right-17"
    },
    {
      id: 4,
      title: "Confidentiality & Respect",
      description: "Respecting confidentiality and protecting company, customer, and partner information",
      icon: "/processes/deployment.png",
      leftShift: "left-15",
      rightShift: "right-15"
    },
    {
      id: 5,
      title: "Respect & Professionalism",
      description: "Treating colleagues, customers, suppliers, and stakeholders with respect, fairness, and professionalism",
      icon: "/processes/deployment.png",
      leftShift: "left-8",
      rightShift: "right-8"
    },
    {
      id: 6,
      title: "Health, Safety & Environment",
      description: "Maintaining a safe, inclusive, and respectful working environment free from discrimination or harassment",
      icon: "/processes/deployment.png",
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
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="/gallery/gallery-6.jpg"
        align="center"
      />
      <DesignProcessContainer
        heading={"Code of Conduct"}
        text1={"The Group’s Code of Conduct establishes the ethical and professional standards that govern our daily activities and interactions. All employees and representatives of MAHY Khoory Group are expected to understand and adhere to these standards at all times."}
        text2={"Our Code of Conduct is based on the following principles:"}
        text3={"Any breach of the Code of Conduct is taken seriously and addressed in accordance with established disciplinary and corrective procedures."}
        processes={codeOfConductItems}
        space={"lg:space-y-5"}
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
