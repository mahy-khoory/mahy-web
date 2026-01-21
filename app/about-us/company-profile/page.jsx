import WhoWeAre from "@/components/UI/home/WhoWeAre";
import SubPageHeading from "@/components/UI/SubPageHeading";
import React from "react";

const companyProfile = () => {
  return (
    <>
      <SubPageHeading
        title={"Company Profile"}
        description={
          "MAHY Khoory Group brings together decades of experience, deep sector knowledge, and strong operational capabilities across a diversified portfolio of businesses. Our expertise has been built over time through disciplined growth, long-term partnerships, and consistent execution across industrial, commercial, environmental, and service sectors."
        }
        // description2={
        //   "The Group's capabilities are anchored in physical assets, skilled teams, and integrated operations that allow us to deliver reliable solutions at scale, while maintaining high standards of governance, safety, and performance."
        // }
        image={"/gallery/gallery-1.jpg"}
      />
      <WhoWeAre/>

    </>
  );
};

export default companyProfile;
