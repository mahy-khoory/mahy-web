import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import SubPageHeading from "@/components/UI/SubPageHeading";
import { Fragment } from "react";

function FactoriesPage() {
  return (
    <Fragment>
      <SubPageHeading
        fullHeight
        title={"Manufacturing Facilities"}
        image={
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776629993/governance-oversight_1_kaybzq.jpg"
        }
      />
      <TrustedAdvisorSection />
    </Fragment>
  );
}

export default FactoriesPage;
