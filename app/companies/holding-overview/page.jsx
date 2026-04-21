import CompanyTextGrid from "@/components/UI/companies/detail/CompanyTextGrid";
import SubPageHeading from "@/components/UI/SubPageHeading";
import Image from "next/image";

function HoldingOverviewPage() {
  return (
    <main>
      <SubPageHeading
        fullHeight
        title={"Holding Company Overview"}
        image={
          //   "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776593285/holding-overview-page.jpg_norjia.jpg"
          "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776629101/empty-corporate-boardroom-with-documents-city-skyline-twilight.jpg_bhsoze.jpg"
        }
      />
      <CompanyTextGrid
        heading="About Us"
        paragraphs={[
          "The Group operates through a portfolio of specialized companies active across a broad range of sectors, including water and wastewater pumping systems, electromechanical and power solutions, HVAC and industrial machinery, paper recycling and packaging manufacturing, environmental and waste management services, logistics and warehousing, and hospitality. This diversified portfolio reflects a balanced mix of industrial, commercial, service-oriented, and environmental activities, enabling the Group to serve multiple industries while maintaining focused expertise within each business segment.",
        ]}
        image="/MAHY.png"
        rightText="Headquartered in Dubai, the MAHY Khoory Group maintains a strong operational footprint across the United Arab Emirates, with offices, warehouses, manufacturing facilities, and service centers in Abu Dhabi, Al Ain, Sharjah, and Ras Al Khaimah. Beyond the UAE, the Group serves customers and supports projects in more than 29 countries, spanning the GCC, Africa, and South Asia. This geographic reach allows the Group to combine deep local market knowledge with the capability to support regional and international projects of varying scale and complexity."
      />

      <section className="space-y-5 text-gray-600 max-w-7xl mx-auto px-5 pb-10 md:pb-20">
        <p>
          Over the decades, the Group has consistently expanded its capabilities
          by investing in modern technologies, strengthening operational
          expertise, and building long-term partnerships across multiple
          industries. This strategic approach has enabled M.A.H.Y Khoory Group
          to adapt to evolving market demands while maintaining a strong
          foundation built on reliability, technical excellence, and responsible
          business practices.
        </p>
        <p>
          Today, the Group continues to focus on sustainable growth and
          innovation, supporting industries that contribute to economic
          development and environmental responsibility. Through continuous
          improvement, operational efficiency, and a commitment to quality,
          M.A.H.Y Khoory Group remains dedicated to creating long-term value for
          its partners, customers, and the communities it serves.
        </p>
      </section>

      <section className="relative w-full h-[65vh] md:h-[85vh] overflow-hidden">
        <Image
          src="https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776593394/urban-business-growth-financial-success.jpg_bnuzqg.jpg"
          alt="Business Growth"
          fill
          className="object-cover object-center"
          priority={false}
        />

        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/20" />
        <div className="relative z-10 h-full flex items-center">
          <div className="max-w-7xl mx-auto px-5 w-full">
            <div className="max-w-xl">
              <h2 className="text-white text-[28px] md:text-[36px] font-semibold leading-tight">
                Driving Sustainable Growth & Innovation
              </h2>
              <p className="mt-4 text-white/85 text-[15px] md:text-[17px] leading-relaxed">
                Through continuous investment in technology, strategic
                partnerships, and operational excellence, the Group has built a
                strong foundation for long-term growth—enabling us to deliver
                value across industries while adapting to evolving global
                demands.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HoldingOverviewPage;
