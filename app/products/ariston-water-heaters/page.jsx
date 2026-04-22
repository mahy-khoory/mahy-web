import TrustedAdvisorSection from "@/components/TrustedAdvisorSection";
import PageHeading from "@/components/UI/PageHeading";
import SubPageHeading from "@/components/UI/SubPageHeading";

function AristonWaterHeatersPage() {
  return (
    <main>
      <PageHeading
        title={"Ariston Water Heaters"}
        description={
          "ARISTON Water Heaters are designed to deliver reliable, safe, and efficient hot water solutions for both household and commercial applications. Built with proven electric heating technology and high-quality components, ARISTON water heaters ensure consistent performance and long-term dependability for daily hot water needs."
        }
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776795795/futuristic-modern-skyscrapers-glass-metal_px2vrg.jpg"
      />
      <TrustedAdvisorSection
        heading="ARISTON Water Heaters"
        texts={[
          "Ideal for homes, apartments, hotels, offices, and commercial facilities, these water heaters provide fast heating, stable temperature control, and efficient energy usage. Their durable construction and safety-focused design make them suitable for continuous operation in demanding environments.",
          "With a strong reputation for quality, efficiency, and user comfort, ARISTON water heaters combine modern design with practical functionality, offering a trusted solution for dependable hot water supply.",
        ]}
        bulletsTitle="Key Highlights"
        bullets={[
          "Reliable electric water heating technology",
          "Consistent and efficient hot water performance",
          "Suitable for residential and commercial use",
          "Durable build with enhanced safety features",
          "Easy installation and low maintenance",
        ]}
        lastText="ARISTON Water Heaters offer a trusted and efficient hot water solution, ensuring comfort, reliability, and performance for everyday use."
      />
    </main>
  );
}

export default AristonWaterHeatersPage;
