import FeaturesEngineeringSection from "@/components/Services/FeaturesEngineeringSection";
import KitchenMenu from "@/components/Services/Kitchen/KitchenMenu";
import PumpingServiceCards from "@/components/Services/PumpingServiceCards";
import ValuesSection from "@/components/UI/about-us/ValuesSection";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";

function UnionPaperMills() {
  const upmCardsData = [
    {
      title: "Quality, Compliance & Standards",
      text: "UPM operates under internationally recognized Quality, Environmental, Health & Safety, and Energy management systems, including ISO 9001, ISO 14001, ISO 45001, and ISO 50001 certifications. Comprehensive controls ensure consistency in paper strength, weight, and moisture levels, while advanced effluent treatment, dust control systems, and safety protocols ensure full regulatory compliance.",
      image: "/solar/solar-1.svg",
    },
    {
      title: "Sustainability & Environmental Impact",
      text: "Sustainability is central to Union Paper Mills’ operations, with waste paper recycling significantly reducing landfill dependency, conserving natural resources, and lowering carbon emissions. Continuous improvements in energy efficiency, water usage, and waste recovery reinforce its role in supporting the UAE’s circular economy and environmental commitments.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Infrastructure & Technology",
      text: "The mill is equipped with high-speed paper machines, advanced pulping systems, automated quality control and monitoring, and dedicated laboratories. Large storage yards for raw materials and finished goods enable stable operations and flexible order fulfilment, while ongoing investments in automation and digital systems enhance efficiency and resilience.",
      image: "/solar/solar-2.svg",
    },
    {
      title: "Innovation & Strategic Direction",
      text: "Union Paper Mills focuses on continuous improvement through capacity expansion, development of new recycled paper grades, and reductions in energy and water intensity per tonne of output. Leveraging scale, technical expertise, and sustainability leadership, it continues to strengthen its position as a reliable and forward-looking manufacturer.",
      image: "/solar/solar-1.svg",
    },
  ];
  const overview = [
    {
      heading: "Background and Development",
      text: "Founded at a time when paper recycling was still in its early stages in the region, Union Paper Mills was among the first industrial-scale recycling mills in the UAE. The facility was established to meet growing local demand for containerboard while supporting national objectives related to waste reduction and resource efficiency.",
      lastText:
        "Over the decades, the mill has expanded both its production capacity and product portfolio, reflecting the MAHY Khoory Group’s long-term commitment to recycling, industrial localization, and environmental stewardship.",
    },
    {
      heading: "Operations and Market Role",
      text: "Union Paper Mills currently produces approximately 500 tonnes of recycled paper per day, with ongoing expansion initiatives targeting 650 tonnes per day.",
      bullets: [
        "Supports major packaging producers across the UAE and the Gulf",
        "Enables industries to meet sustainability requirements",
        "Ensures consistent and reliable supply",
      ],
      lastText:
        "UPM’s scale, consistency, and technical capability position it as a key supplier within the regional packaging value chain, supporting both domestic consumption and export-oriented manufacturing.",
    },
    {
      heading: "Industry Focus and Customers",
      text: "The mill serves a diverse industrial customer base across the packaging and manufacturing ecosystem.",
      bullets: [
        "Corrugated box manufacturers",
        "Packaging converters",
        "Paper distributors",
        "Industrial users of recycled board",
      ],
      lastText:
        "By supplying high-quality recycled paper, UPM supports sectors such as FMCG, logistics, manufacturing, and export packaging, where strength, sustainability, and cost efficiency are critical.",
    },
    {
      heading: "Integration within the MAHY Khoory Group",
      text: "Union Paper Mills plays a central role in the Group’s vertically integrated recycling ecosystem.",
      bullets: [
        "Coordinates with waste collection divisions",
        "Supports packaging subsidiaries",
        "Enables a closed-loop recycling model",
        "Covers waste recovery to finished packaging solutions",
      ],
      lastText:
        "This integration enhances supply security, quality control, and environmental performance across the Group’s manufacturing operations.",
    },
  ];

  const features = [
    {
      title: "Union Testliner (90–200 GSM)",
      text: "High-quality recycled linerboard suitable for outer layers of corrugated packaging, offering strength, printability, and cost efficiency.",
      image: "/gallery/gallery-1.jpg",
    },
    {
      title: "Unionflute (90–175 GSM)",
      text: "Durable fluting medium designed for corrugated board applications, providing excellent rigidity, cushioning, and structural performance.",
      image: "/gallery/gallery-2.jpg",
    },
    {
      title: "Unioncore Board (190–450 GSM)",
      text: "Heavy-duty core board used in paper tubes, cores, and industrial applications, delivering superior strength and load-bearing capacity.",
      image: "/gallery/gallery-3.jpg",
    },
    {
      title: "Semikraft Liner (125–200 GSM)",
      text: "Semi-chemical kraft liner combining strength and surface quality, ideal for packaging solutions requiring enhanced durability and appearance.",
      image: "/gallery/gallery-4.jpg",
    },
  ];

  return (
    <main>
      <CompanyOverview
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1771915804/office_jaeuiz.webp"
        heading="Union Paper Mills"
        texts={[
          "Union Paper Mills (UPM) is the flagship recycled paper manufacturing facility of the MAHY Khoory Group, and one of the UAE’s pioneering large-scale paper recycling operations. Established in 1988, UPM specializes in converting post-consumer and industrial waste paper into high-quality recycled paperboard products that serve the regional and international packaging industry.Located in Dubai, the mill operates as a critical pillar of the Group’s circular manufacturing ecosystem, supplying recycled linerboard and fluting medium to corrugated box manufacturers and packaging converters across the UAE and the wider Gulf region.",
        ]}
      />

      <ValuesSection
        title="Our Mission"
        description="Union Paper Mills is driven by a clear sustainability-focused mission: to deliver premium recycled paper products while minimizing environmental impact and reducing reliance on virgin raw materials"
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776762183/commitment-to-growth_qhzgjt.jpg"
        imageAlt="Our Mission"
        ctaHref={false}
        imagePosition="right"
      />

      <ValuesSection
        title="Our Vision"
        description="Our vision is to remain a regional leader in sustainable paper manufacturing through continuous investment in technology, capacity expansion, and operational excellence."
        imageSrc="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776630358/photo-family-visiting-dubai-opera-architectural-masterpiece.jpg_qopoc6.jpg"
        imageAlt="Our Vision"
        ctaHref={false}
        imagePosition="left"
      />

      <KitchenMenu
        heading="Products and Manufacturing Capabilities"
        text="Union Paper Mills produces a comprehensive range of recycled paperboard grades used in corrugated packaging and industrial applications. Its core product lines include: These products form the essential components of corrugated cartons, packaging sheets, and industrial boards. The mill is also capable of producing specialty grades on demand, serving applications such as gypsum liner, tube and core board, and other niche industrial uses.
The manufacturing process involves advanced pulping and cleaning system and continuous paper-forming systems that ensure consistency, strength, and reliability across all grades.
"
        items={features}
      />
      <PumpingServiceCards
        cards={upmCardsData}
        heading="Union Paper Mills"
        subHeading="Recycled Paper Manufacturing & Sustainable Industrial Solutions"
        tag="[ MANUFACTURING DIVISION ]"
        backgroundImage="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776682027/photorealistic-view-tree-nature-with-branches-trunk.jpg_mtzsxt.jpg"
      />

      <FeaturesEngineeringSection
        heading="Union Paper Mills Overview"
        // text={
        //   "M.A.H.Y. Khoory Trading is a GCC-wide procurement and distribution division that delivers compliant, energy-efficient solutions through strong infrastructure, technical support, and global partnerships, driving consistent quality, operational efficiency, and long-term growth across the Group."
        // }
        items={overview}
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
      />
    </main>
  );
}

export default UnionPaperMills;
