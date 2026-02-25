import PalletProcessSection from "@/components/Products/PalletProcessSection";
import CompanyDetailMenu from "@/components/UI/companies/detail/CompanyDetailMenu";
import CompanyOverview from "@/components/UI/companies/detail/CompanyOverview";

function PalletBlock() {

  const menuItems = [
    {
      label: "Product-Oriented Features",
      items: [
        {
          label: "High-Density Compressed Wood Construction",
          text: [
            "Made from recycled wood chips bonded under high pressure and temperature, creating a uniform, solid, and durable block with excellent load-bearing capability."
          ]
        },
        {
          label: "Eco-Friendly & Sustainable Material",
          text: [
            "Produced using 100% recycled wood material, reducing waste and supporting responsible manufacturing practices. Fully compliant with sustainability guidelines for export and environmentally conscious industries."
          ]
        },
        {
          label: "Precision-Molded, Dimensionally Stable Blocks",
          text: [
            "Consistent size, density, and structural integrity ensure smooth pallet assembly and compatibility with automated nailers and pallet-production lines."
          ]
        },
        {
          label: "Wide Range of Standard Sizes",
          text: [
            "We offer multiple commonly used sizes:"
          ],
          subItems: [
            "148 × 100 mm",
            "165 × 80 mm",
            "95 × 95 mm",
            "148 × 80 mm",
            "155 × 100 mm"
          ],
          lastText: "Additional custom sizes can be manufactured based on customer requirements."
        },
        {
          label: "Moisture & Pest Resistant",
          text: [
            "Blocks are heat-treated and dried to optimal moisture content, resisting fungal growth, insects, and decay. Suitable for export pallets and global shipping standards."
          ]
        },
        {
          label: "High Load-Bearing Strength",
          text: [
            "Engineered to support heavy industrial loads, forklifting operations, and long-distance transportation without deformation or cracking."
          ]
        }
      ]
    },
    {
      label: "Branding & Customization Services",
      items: [
        {
          label: "Custom Size Manufacturing",
          text: [
            "Tailored dimensions can be produced upon request to meet the specifications of pallet manufacturers, automation lines, and specialized packaging applications."
          ]
        },
        {
          label: "Custom Density / Strength Grades",
          text: [
            "We can produce blocks in different density ratings to match required pallet strength levels—light-duty, medium-duty, or heavy-duty loads."
          ]
        },
        {
          label: "Packaging & Palletization Options",
          text: [
            "Products can be supplied shrink-wrapped, strapped, or bulk-packed based on customer handling needs."
          ]
        }
      ]
    },
    {
      label: "Advantages & Applications",
      items: [
        {
          label: "Performance Advantages",
          subItems: [
            "Uniform Density & High Structural Strength for stable, durable pallets",
            "Eco-Friendly Manufacturing using recycled wood materials",
            "Moisture-Controlled Production ensuring long-term performance",
            "Precision Dimensions for smooth pallet assembly",
            "Consistent Quality Control across large batches",
            "Suitable for Export Pallets meeting ISPM-15 compliance when required"
          ]
        },
        {
          label: "Applications",
          subItems: [
            "Pallet manufacturing (standard & custom pallets)",
            "Warehouse logistics and packaging industries",
            "Export/commercial shipping pallets",
            "Heavy-duty industrial pallets",
            "Warehouse racking systems",
            "Custom engineered wood packaging solutions"
          ]
        }
      ]
    }
  ]

  return (
    <main>
      <CompanyOverview
        heading="Pallet Blocks"
        texts={[
          "Our high-quality compressed wood pallet blocks are engineered to meet the rigorous demands of pallet manufacturers, logistics companies, packaging suppliers, and industrial warehousing operations across the UAE and GCC region.",
          "Manufactured from 100% recycled wood chips, these blocks offer exceptional strength, dimensional stability, and long-term durability—providing an eco-friendly and cost-effective solution for building reliable wooden pallets and load-bearing structures.",
          "Available in multiple standard dimensions — 148 × 100 mm, 165 × 80 mm, 95 × 95 mm, 148 × 80 mm, and 155 × 100 mm — with custom sizes available upon request to meet specific industrial requirements."
        ]}
      />
      <CompanyDetailMenu
        items={menuItems}
      />
      <PalletProcessSection
        mainImage="/gallery/gallery-1.jpg"
        secondaryImage="/gallery/gallery-2.jpg"
        steps={[
          {
            title: "Understand your needs",
            description:
              "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.",
          },
          {
            title: "Develop custom solutions",
            description:
              "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.",
          },
          {
            title: "Achieve targeted results",
            description:
              "Lorem ipsum dolor sit amet consectetur. Ultricies blandit libero leo ut turpis cras amet sed.",
          },
        ]}
      />
    </main>
  );
}

export default PalletBlock;
