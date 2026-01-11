import Image from "next/image";
import { FiArrowUpRight } from "react-icons/fi";

function ProjectHighlightsGrid() {

  const items = [
    {
      title: "Digital Solutions",
      text: "Innovative technology solutions that streamline operations, enhance efficiency, and drive"
    },
    {
      title: "Renewable Energy",
      text: "Scalable template unifying multinational renewable energy operations"
    },
    {
      title: "Finance & Investment",
      text: "Dynamic template unifying global finance and investment services with adaptable multilingual modules."
    },
    {
      title: "Healthcare Innovations",
    },
    {
      title: "Logistic Solutions",
    }
  ];

  return (
    <section className="relative">
      <div className="relative z-10 max-w-7xl mx-auto px-5 py-10 md:py-20">
        <div className="border-t border-gray-500 text-white">
          {items.map((item, i) => (
            <div key={i} className="flex justify-between px-5 border-b border-gray-500 py-8 md:py-10">
              <div className="flex gap-1">
                <span>0{i + 1}</span>
                <div>
                  <p className="mt-1 font-semibold text-xl md:text-2xl">{item.title}</p>
                  {item.text && (
                    <p className="text-sm md:text-md mt-2 text-gray-100">{item.text}</p>
                  )}
                </div>
              </div>
              <div className="rounded-3xl border border-gray-200 py-2 px-4 h-fit">
                <FiArrowUpRight className="h-6 w-6 md:h-9 md:w-9" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute inset-0">
        <Image src={"/gallery/gallery-1.jpg"} alt="Project Highlights" fill style={{ objectFit: "cover" }} />
      </div>
      <div className="absolute inset-0 bg-black/80" />
    </section>
  )
}

export default ProjectHighlightsGrid