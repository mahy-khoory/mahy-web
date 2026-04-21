import React from "react";

import { getLocale, getTranslations } from "next-intl/server";
import AboutUsSection from "@/components/UI/about-us/mission-vision-values/AboutUsSection";
import MissionVisionSection from "@/components/UI/about-us/mission-vision-values/MissionVisionSection";
import AnimatedLines from "@/components/UI/AnimatedLines";

async function MissionVisionValues() {

  return (
    <main className="bg-gray-50">
     <AboutUsSection image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776793808/young-company-colleagues-sitting-row-talking-each-other_2_wz1mth.jpg"/>
     <MissionVisionSection image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/v1776793661/designer-concept_axdjf2.jpg"/>
    </main>
  );
}

export default MissionVisionValues;
