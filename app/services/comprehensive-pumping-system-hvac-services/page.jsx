import CompaniesSectors from "@/components/CompaniesSectors";
import ComprehensiveProcessSection from "@/components/ComprehensiveProcessSection";
import HoverableColumns from "@/components/HoverableColumns";
import ServicedHotelApartments from "@/components/Services/ServicedHotelApartments";
import SolarPanelImageGrid from "@/components/Services/SolarPanel/SolarPanelImageGrid";
import SolarPanelQuoteGrid from "@/components/Services/SolarPanel/SolarPanelQuoteGrid";
import ServicesPumping from "@/components/ServicesPumping";
import ServicesGlobally from "@/components/UI/companies/detail/ServicesGlobally";
import SubPageHeading from "@/components/UI/SubPageHeading";

function PumpingSystemServicesPage() {
  const items = [
    "Pre-Installation Inspection",
    "Detailed inspection of all supplied pumps and accessories",
    "Verification of quality, specifications, and site readiness",
    "Early issue detection to prevent future failures",
    "Professional Commissioning",
    "Complete commissioning of all installed pump sets",
    "Precise laser alignment for chilled water and other critical pumps",
    "Performance verification for smooth, quiet, and efficient operation from day one",
    "Comprehensive Repair & Support",
    "Warranty Repairs: Execution of all warranty-covered work as per manufacturer terms",
    "Non-Warranty Repairs: Fast, accurate fault diagnosis and repair to restore operation quickly",
    "Workshop Overhauls: Fully equipped workshop for major repairs, refurbishment, and rebalancing",
    "Warranty Claim Management: End-to-end handling of claims and coordination with manufacturers, saving you time and effort"
  ];
  const acItems = [
    {
      title: "Expert Installation & Commissioning",
      textItems: [
        "Installation of new AC systems in line with design drawings and specifications",
        "Thorough testing, balancing, and commissioning of units",
        "Verification of capacity, airflow, and temperature performance"
      ]
    },
    {
      title: "Hassle-Free Warranty Repairs",
      textItems: [
        "Direct coordination with OEMs for warranty-covered issues",
        "Genuine spare parts and documented service",
        "Minimal disruption to occupants and operations"
      ]
    },
    {
      title: "Reliable Non-Warranty Repairs",
      textItems: [
        "Prompt response to breakdowns and performance complaints",
        "Transparent fault reporting and cost estimates",
        "Long-lasting repair solutions, not just temporary fixes"
      ]
    }
  ];

  return (
    <main>
      <SubPageHeading
        title={"Comprehensive Pumping System & HVAC Solutions"}
        description="Expert installation, commissioning, repair, and Annual Maintenance Contracts (AMC) for air conditioning, pumping systems, water heaters, swimming pools, and fountains. Your single-point solution for mechanical system reliability."
        image={"/gallery/gallery-8.jpeg"}
      />
      <section className="max-w-7xl mx-auto px-5 py-15 md:pt-25">
        <CompaniesSectors
          image={"/gallery/gallery-1.jpg"}
          title={"Precision from Start to Finish"}
          texts={[
            "We provide end-to-end services for chilled water, domestic water supply (transfer & booster), sewerage , and other pumping systems, focusing on optimal performance and minimal downtime."
          ]}
          items={items}
          noCheck={[0, 4, 8]}
          boldLabels={true}
        />
      </section>
      <SolarPanelImageGrid
        heading="Air Conditioning: Installation, Care & Repair"
        text={"We offer complete solutions for air conditioning and ventilation systems, ensuring consistent comfort, reliability, and energy efficiency."}
        items={acItems}
      />
      <SolarPanelQuoteGrid
        heading="Annual Maintenance Contracts (AMC): Proactive Peace of Mind"
        text={"Our Annual Maintenance Contracts (AMC) are designed to keep your systems running at peak performance while reducing unexpected repair costs and downtime."}
        text2={"We offer tailored AMC packages for:"}
        items={[
          "Pumping Systems: Chilled water, booster, transfer, sewerage and related systems",
          "Water Heaters & Calorifiers",
          "Swimming Pool Filtration & Plant Systems",
          "Water Fountains & Water Feature Systems",
          "Air Conditioning & Ventilation Systems"
        ]}
        quoteText="Key Benefits of Our AMC"
        quoteItems={[
          "Regular, planned inspections and servicing to detect and address issues early.",
          "Faster response times and priority scheduling for contract customers.",
          "Fine-tuning and cleaning of equipment to improve efficiency and reduce utility costs.",
          "Proper care and timely interventions that protect your investment over the long term.",
          "Fixed or structured costs that make it easier to plan and control maintenance expenses."
        ]}
      />
      <ServicesGlobally
        heading="Your Single-Point Solution for Mechanical System Reliability"
        text="Whether you need a one-time repair, a full system overhaul, or a long-term maintenance partner, our service team delivers reliability, accountability, and technical excellence."
        texts2={[
          "Talk to us today to discuss a service plan or AMC tailored to your building and operational needs."
        ]}
      />

      <HoverableColumns />
      <ServicedHotelApartments />
      <ComprehensiveProcessSection />
      <ServicesPumping />
    </main>
  );
}

export default PumpingSystemServicesPage;
