import CompaniesSectors from "@/components/CompaniesSectors";
import GroupCompaniesGrid from "@/components/UI/companies/GroupCompaniesGrid";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { getCompaniesBySector } from "@/constants/companyGroups";

function TransportationLogisticsPage() {
  const companies = getCompaniesBySector("transportation-logistics");

  return (
    <main>
      <SubPageHeading
        title="Move That Bring Quality"
        // description="The company has a well-developed internal governance structure, under which all governance bodies have clear and focused authority and responsibility."
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776886296/freight-truck-driving-winter-highway-through-snowy-countryside-landscape-transport-logistics.jpg_qftfwc.jpg"
        align="center"
        fullHeight
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image={
            "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776886237/line-trucks-with-word-ford-side.jpg_ljd5ih.jpg"
          }
          title={"Transportation & Logistics"}
          texts={[
            "The Transportation sector plays a critical role in enabling the Group's operational efficiency by providing reliable logistics and fleet management services across all business units.",
            "It manages the movement of goods, equipment, and personnel, ensuring seamless coordination between manufacturing, trading, project execution, and service operations. The sector supports supply chain continuity and contributes directly to timely project delivery and operational performance.",
            "With a dedicated fleet, optimized routing systems, and strong operational controls, the sector enhances efficiency, reduces transportation costs, and maintains high standards of reliability and safety. Its role as a logistical backbone ensures that the Group's diverse activities remain interconnected and efficiently executed.",
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

export default TransportationLogisticsPage;
