import DiscoverSection from "@/components/UI/about-us/health-safety/DiscoverSection";
import InfoNavigationSection from "@/components/UI/about-us/health-safety/InfoNavigationSection";
import GovernanceContent from "@/components/UI/about-us/leadership-and-management/GovernanceContent";
import GovernanceTabs from "@/components/UI/about-us/leadership-and-management/GovernanceTabs";
import SubPageHeading from "@/components/UI/SubPageHeading";

export default function GovernancePage() {
  return (
    <main className="bg-white">
      <SubPageHeading
        title="Health Safety & Environment"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="/gallery/ADGM.png"
        align="center"
      />
      <DiscoverSection
        eyebrow="Discover More"
        title="MAHY Khoory Center"
        description="Find out more about MAHY events, read the latest media announcements and publications, or access our video and image gallery via the MAHY Media Centre."
        image="/gallery/gallery-4.jpg"
      />
      <InfoNavigationSection/>
    </main>
  );
}
