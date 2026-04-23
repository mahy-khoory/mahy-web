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
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776888552/factory-manager-holding-meeting-talking-his-employees-about-project-plans.jpg_1_vrmxzd.jpg"
        }
      />

      <TrustedAdvisorSection
        heading="Manufacturing Facilities"
        numbers_1="30+"
        numbers_2="96 Years"
        texts={[
          "Our manufacturing facilities form the backbone of our industrial operations, combining advanced technology, efficient processes, and sustainable practices to deliver high-quality products at scale.",

          "Strategically located and equipped with modern production systems, our facilities support a wide range of manufacturing activities, from recycling and material transformation to the production of industrial and packaging solutions. Each facility is designed to ensure consistency, operational efficiency, and the ability to meet evolving market demands.",

          "We integrate recycling processes directly into our manufacturing operations, converting recovered materials into valuable end products. This approach not only enhances resource efficiency but also supports our commitment to sustainability and circular economy principles.",

          "Our capabilities include the production of paper and containerboard, engineered wood products, and a wide range of packaging solutions, including corrugated, paper-based, and rigid plastic products. With strong in-house expertise in converting, design, and production, we deliver customized solutions tailored to various industries.",

          "In addition to manufacturing, our facilities are supported by technical services such as system assembly, installation, and commissioning, ensuring seamless execution and long-term operational reliability.",
        ]}
        lastText="Through continuous investment in technology, quality control, and sustainable practices, our manufacturing facilities enable us to deliver reliable products, reduce environmental impact, and support the growing needs of our customers and partners."
        images={[
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776629993/governance-oversight_1_kaybzq.jpg",
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776888472/mid-adult-manager-car-mechanic-talking-while-using-computer-auto-repair-shop.jpg_ttjdu0.jpg",
        ]}
      />
    </Fragment>
  );
}

export default FactoriesPage;
