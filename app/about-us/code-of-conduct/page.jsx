import CodeOfConductSection from "@/components/UI/about-us/code-of-conduct/CodeOfConductSection";
import LargeArticleSection from "@/components/UI/about-us/code-of-conduct/LargeArticleSection";
import DiscoverSection from "@/components/UI/about-us/health-safety/DiscoverSection";
import InfoNavigationSection from "@/components/UI/about-us/health-safety/InfoNavigationSection";
import GovernanceContent from "@/components/UI/about-us/leadership-and-management/GovernanceContent";
import GovernanceTabs from "@/components/UI/about-us/leadership-and-management/GovernanceTabs";
import SubPageHeading from "@/components/UI/SubPageHeading";

export default function GovernancePage() {
  return (
    <main className="bg-white">
      <SubPageHeading
        title="Code Of Conduct"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="/gallery/gallery-6.jpg"
        align="center"
      />
     
     <CodeOfConductSection/>
<LargeArticleSection/>


    </main>
  );
}
