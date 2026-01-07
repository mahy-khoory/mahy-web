import GovernanceContent from "@/components/UI/about-us/leadership-and-management/GovernanceContent";
import GovernanceTabs from "@/components/UI/about-us/leadership-and-management/GovernanceTabs";
import SubPageHeading from "@/components/UI/SubPageHeading";

export default function GovernancePage() {
  return (
    <main className="bg-white">
      <SubPageHeading
        title="Leadership & Management"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="/gallery/gallery-3.jpg"
        align="center"
      />
      <GovernanceTabs />
      <GovernanceContent />
    </main>
  );
}
