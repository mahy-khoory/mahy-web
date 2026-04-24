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
            "High-density compressed wood blocks are manufactured from recycled wood chips that are bonded under high pressure and temperature, resulting in a uniform, solid, and highly durable structure with excellent load-bearing capacity. These blocks are eco-friendly and sustainable, produced using 100% recycled wood material, which helps reduce waste while supporting responsible manufacturing practices and meeting environmental and export compliance standards.",
            "They are precision-molded to ensure consistent size, density, and structural integrity, allowing for smooth pallet assembly and compatibility with automated nailing systems and pallet production lines. Available in a wide range of standard sizes, including 148 × 100 mm, 165 × 80 mm, 95 × 95 mm, 148 × 80 mm, and 155 × 100 mm, these blocks can accommodate various industrial requirements.",
            "In addition, the blocks are moisture and pest resistant, as they are heat-treated and dried to optimal moisture levels, preventing fungal growth, insect infestation, and decay. This makes them highly suitable for export pallets and global shipping standards. With high load-bearing strength, they are engineered to withstand heavy industrial loads, forklift handling, and long-distance transportation without deformation or cracking."
          ]
        },
      ]
    },
    {
      label: "Branding & Customization Services",
      items: [
        {
          label: "Custom Size Manufacturing",
          text: [
            "Custom size manufacturing allows blocks to be produced in tailored dimensions to meet the exact requirements of pallet manufacturers, automated production lines, and specialized packaging applications. In addition, custom density and strength grades can be provided, enabling the production of blocks with varying density levels suited for light-duty, medium-duty, or heavy-duty load requirements. To support efficient handling and logistics, flexible packaging and palletization options are available, including shrink-wrapping, strapping, or bulk packing, depending on customer preferences and operational needs."
          ]
        },
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
        image="https://res.cloudinary.com/dpn6mdpxd/image/upload/v1777026081/pallet-blocks-1_scrhqr.png"
      />
      <CompanyDetailMenu
        items={menuItems}
      />
      {/* <PalletProcessSection
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
      /> */}
    </main>
  );
}

export default PalletBlock;
