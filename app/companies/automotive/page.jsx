import CompaniesSectors from "@/components/CompaniesSectors";
import GroupCompaniesGrid from "@/components/UI/companies/GroupCompaniesGrid";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { getCompaniesBySector } from "@/constants/companyGroups";

function AutomotivePage() {
  const companies = getCompaniesBySector("automotive");

  return (
    <main>
      <SubPageHeading
        title="Move That Spread Comfort "
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776886838/traffic-light-trails-downtown.jpg_1_rpo8xg.jpg"
        align="center"
        fullHeight
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image={
            "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776886758/webp_mobile_listing_main_2023_DongFeng_AX7_Mache_Exterior_05_ttbcgg.webp"
          }
          title={"Automotive"}
          texts={[
            "The Automotive sector represents the Group's commitment to delivering comprehensive mobility solutions, encompassing vehicle distribution, retail, and after-sales services.",
            "It focuses on the sale and servicing of a wide range of vehicles, including advanced, electric, and hybrid models that align with evolving global mobility trends. The sector is supported by professional after-sales infrastructure, ensuring high standards of maintenance, repair, and customer support.",
            "By combining strong product offerings with technical expertise and customer-centric services, the sector delivers a seamless automotive experience for both individual and corporate clients. It also positions the Group to adapt to future mobility developments, including sustainable transportation and next-generation vehicle technologies.",
          ]}
        />
      </section>
      <GroupCompaniesGrid
        companies={companies}
        title="Companies in This Sector"
        description="Businesses operating within this business sector of the Group."
      />
    </main>
  );
}

export default AutomotivePage;
