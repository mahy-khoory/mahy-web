import AwardsAccordion from "@/components/Awards/AwardsAccordion";
import { awardsData } from "@/components/Awards/awardsData";
import DisplayAwards from "@/components/Awards/DisplayAwards";
import AnimatedLines from "@/components/UI/AnimatedLines";
import SubPageHeading from "@/components/UI/SubPageHeading";

function CapabilitiesPage() {
  const mid = Math.ceil(awardsData.length / 2);

  return (
    <main>
      <SubPageHeading
        title={"Awards, Certifications & Accreditiations"}
        // description={"Our key capabilities and expertise span strategic planning, advanced technology integration, and operational excellence. We deliver tailored solutions through deep industry knowledge, innovation-driven processes, and skilled teams. This enables us to consistently achieve high-quality outcomes and long-term value for our partners."}
        image={"/gallery/gallery-5.jpg"}
      />
      <section className="bg-[#ffffff] py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedLines />
          <h2 className="mb-16 text-center text-[38px] font-semibold text-[#2F3A40]">
            Achivements
          </h2>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <AwardsAccordion items={awardsData.slice(0, mid)} />
            <AwardsAccordion items={awardsData.slice(mid)} />
          </div>
        </div>
      </section>

      <DisplayAwards />
    </main>
  );
}

export default CapabilitiesPage;
