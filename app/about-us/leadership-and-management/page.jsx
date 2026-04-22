import GovernanceContent from "@/components/UI/about-us/leadership-and-management/GovernanceContent";
import GovernanceTabs from "@/components/UI/about-us/leadership-and-management/GovernanceTabs";
import SubPageHeading from "@/components/UI/SubPageHeading";

export default function GovernancePage() {
  return (
    <main className="bg-white">
      <SubPageHeading
        title="Leadership & Management"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776885851/businessman-standing-front-large-glass-building-business-corporative-concept-generative-ai.jpg_f65dkk.jpg"
        align="center"
        fullHeight
      />
      <GovernanceTabs />
      <GovernanceContent />
    </main>
  );
}
