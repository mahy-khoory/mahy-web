import CompaniesList from "@/components/UI/home/CompaniesList";
import SubPageHeading from "@/components/UI/SubPageHeading";
import React from "react";

function IndusteriesPage() {
  return (
    <main className="pb-25">
      <SubPageHeading
        fullHeight
        title={"Our Industeries"}
        description={
          "We operate across diverse industries, delivering reliable solutions tailored to evolving market needs. Our expertise spans technology, infrastructure, energy, and industrial sectors. We help organizations enhance efficiency, sustainability, and long-term growth."
        }
        image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/v1776976409/group-young-modern-people-smart-casual-wear-communicating-using-modern-technologies-while-working-office.jpg_1_i2je89.jpg"}
      />
      <CompaniesList />
      <section className="max-w-7xl mx-auto px-5 py-14 border-t border-gray-100">
        <p className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-6">
          Our Industries
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          <p className="text-gray-500 leading-relaxed">
            M.A.H.Y. Khoory Group operates across a diverse range of industries,
            bringing together decades of experience, technical expertise, and a
            strong commitment to quality. Our businesses serve essential sectors
            that support economic growth, sustainable development, and everyday
            life across the region.
          </p>
          <p className="text-gray-500 leading-relaxed">
            From trading and manufacturing to automotive, waste management,
            transportation, engineering, hospitality, and energy and
            sustainability consulting — each sector reflects our focus on
            reliability, innovation, and long-term value creation. Through our
            integrated approach, we deliver products, services, and solutions
            that are practical, scalable, and aligned with the evolving needs of
            customers and communities.
          </p>
        </div>

        <div className="flex flex-wrap gap-2 mt-8">
          {[
            "Trading",
            "Manufacturing",
            "Automotive",
            "Waste Management",
            "Transportation",
            "Engineering",
            "Hospitality",
            "Energy & Sustainability",
          ].map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-3 py-1.5 rounded-full border border-gray-200 text-gray-500 bg-gray-50"
            >
              {tag}
            </span>
          ))}
        </div>
      </section>
    </main>
  );
}

export default IndusteriesPage;
