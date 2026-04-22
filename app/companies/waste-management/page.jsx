import CompaniesSectors from "@/components/CompaniesSectors";
import GroupCompaniesGrid from "@/components/UI/companies/GroupCompaniesGrid";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { getCompaniesBySector } from "@/constants/companyGroups";

function WasteManagementPage() {
  const companies = getCompaniesBySector("waste-management");

  return (
    <main>
      <SubPageHeading
        title="Clean and Green World"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776887081/person-business-attire-placing-recyclable-documents-into-recycling-bin-promoting-sustainability-ecofriendly-office-practices.jpg_c1xxjo.jpg"
        align="center"
        fullHeight
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image={
            "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776887072/arrangement-with-recycle-bin-countertop.jpg_o0vei8.jpg"
          }
          title={"Waste Management"}
          texts={[
            "This sector delivers comprehensive waste management and environmental services across multiple waste streams.",
            "The Waste Management, Recycling & Environmental Services sector provides municipal, commercial, industrial, recyclable, and hazardous waste management services across the UAE and Oman.",
            "Operations include waste collection, segregation, recycling, hazardous waste transport, and compliant disposal. The sector supports landfill diversion, regulatory compliance, and resource recovery while supplying recyclable materials into the Group's manufacturing ecosystem.",
            "Through scale, geographic coverage, and operational discipline, the sector plays a central role in advancing sustainability and circular economy objectives.",
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

export default WasteManagementPage;
