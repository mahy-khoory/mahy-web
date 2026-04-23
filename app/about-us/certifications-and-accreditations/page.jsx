import AwardsAccordion from "@/components/Awards/AwardsAccordion";
import { awardsData } from "@/components/Awards/awardsData";
import AnimatedLines from "@/components/UI/AnimatedLines";
import SubPageHeading from "@/components/UI/SubPageHeading";

function CapabilitiesPage() {
  const mid = Math.ceil(awardsData.length / 2);

  return (
    <main>
      {/* ── Hero ── */}
      <SubPageHeading
        fullHeight
        title={"Awards, Certifications & Accreditations"}
        image={
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776594607/certifications-and-accreditations_a2ssqq.jpg"
        }
      />

      {/* ── Editorial intro ── */}

      {/* ── Achievements accordion ── */}
      <section className="bg-white py-24">
        <div className="mx-auto max-w-7xl px-6">
          <AnimatedLines />
          <h2 className="mb-16 text-center text-[38px] font-semibold text-[#2F3A40]">
            Achievements
          </h2>
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
            <AwardsAccordion items={awardsData.slice(0, mid)} />
            <AwardsAccordion items={awardsData.slice(mid)} />
          </div>
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 py-20">
        <AnimatedLines />
        {/* <h2 className="mb-16 text-center text-[38px] font-semibold text-[#2F3A40]">
          Achievements
        </h2> */}
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-10">
          Our commitment to excellence
        </p>

        {/* Pull-quote spanning full width */}
        <p className="text-xl md:text-3xl font-semibold text-gray-800 leading-relaxed max-w-4xl mb-12">
          Our certifications are not just formal achievements — they are a clear
          demonstration of our dedication to operating at the highest standards
          in every sector we serve.
        </p>

        <div className="border-t border-gray-100 mb-12" />

        {/* Three-column body paragraphs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-gray-500 leading-relaxed text-sm">
          <p>
            Our certifications represent adherence to internationally recognised
            frameworks for quality management, environmental responsibility,
            health and safety, and operational excellence. They reinforce our
            focus on delivering consistent performance and ensuring that our
            processes meet the expectations of our customers, partners, and
            stakeholders.
          </p>
          <p>
            Across our operations, we continuously invest in improving systems,
            upgrading practices, and aligning with global benchmarks —
            strengthening trust, enhancing efficiency, and ensuring every
            product and service reflects our commitment to excellence.
          </p>
          <p>
            Our accreditations and affiliations with recognised industry bodies
            further validate our capabilities. These partnerships support
            knowledge sharing, encourage best practices, and position the Group
            as a reliable and responsible organisation within the industries we
            operate.
          </p>
        </div>
      </section>
    </main>
  );
}

export default CapabilitiesPage;

// import AwardsAccordion from "@/components/Awards/AwardsAccordion";
// import { awardsData } from "@/components/Awards/awardsData";
// import DisplayAwards from "@/components/Awards/DisplayAwards";
// import AnimatedLines from "@/components/UI/AnimatedLines";
// import SubPageHeading from "@/components/UI/SubPageHeading";

// function CapabilitiesPage() {
//   const mid = Math.ceil(awardsData.length / 2);

//   return (
//     <main>
//       <SubPageHeading
//       fullHeight
//         title={"Awards, Certifications & Accreditiations"}
//         // description={"Our key capabilities and expertise span strategic planning, advanced technology integration, and operational excellence. We deliver tailored solutions through deep industry knowledge, innovation-driven processes, and skilled teams. This enables us to consistently achieve high-quality outcomes and long-term value for our partners."}
//         image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776594607/certifications-and-accreditations_a2ssqq.jpg"}
//       />
//       <section className="bg-[#ffffff] py-24">
//         <div className="mx-auto max-w-7xl px-6">
//           <AnimatedLines />
//           <h2 className="mb-16 text-center text-[38px] font-semibold text-[#2F3A40]">
//             Achivements
//           </h2>

//           <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
//             <AwardsAccordion items={awardsData.slice(0, mid)} />
//             <AwardsAccordion items={awardsData.slice(mid)} />
//           </div>
//         </div>
//       </section>

//     </main>
//   );
// }

// export default CapabilitiesPage;

// {/* <DisplayAwards /> */}
