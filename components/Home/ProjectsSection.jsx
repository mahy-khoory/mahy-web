"use client";

import { getFeaturedProjects } from "@/constants/projects";
import AnimatedLines from "../UI/AnimatedLines";
import PrimaryButton from "../UI/PrimaryButton";
import ProjectCard from "./ProjectCard";

const projects = getFeaturedProjects([1, 5, 8, 10, 16]);

export default function ProjectsSection() {
  return (
    <>
      <section className="relative py-14 md:py-20 pt-3">
        {/* <div className="mx-auto max-w-7xl px-5 sm:px-6 text-center">

        </div> */}
        <div className="mx-auto max-w-335 px-4 md:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[220px_1fr_240px]">
            <div
              className="
  relative
  flex
  flex-col
  items-center
  justify-center
  gap-4
  p-3
"
            >
              <span
                className="
      pointer-events-none
      absolute
      inset-0
      rounded-none
      border
      border-[#2c3b45]/30
      animate-[borderPulse_3.5s_ease-in-out_infinite]
    "
              />
              <AnimatedLines />
              <h2
                className="text-[36px] font-semibold
      tracking-[0.22em]
      text-[#2c3b45]
      text-center leading-[1] tracking-tight text-black"
              >
                OUR <br />
                PROJECTS
              </h2>
            </div>

            <div className="text-body text-[#23313a] ml-4 text-sm">
              <p className="leading-loose opacity-90">
                Over the decades, MAHY Khoory Group has played a pivotal role in delivering reliable, high-performance solutions across a diverse portfolio of landmark projects in the UAE and beyond. Our experience spans premium residential developments, large-scale mixed-use communities, industrial facilities, educational institutions, and international exhibition pavilions—each reflecting our unwavering commitment to quality, innovation, and long-term value.
              </p>

              <p className="mt-1 leading-loose opacity-90">
                We work in close collaboration with developers, consultants, and contractors to deliver tailored HVAC and engineering solutions that address the unique technical and operational requirements of every project. Our involvement extends beyond product supply to include system design support, equipment selection, technical coordination, and the integration of advanced technologies that enhance efficiency, comfort, and sustainability.
              </p>

              <p className="mt-1 leading-loose">Each project demonstrates our ability to perform under varied and demanding conditions—from luxury living environments and high-occupancy commercial spaces to complex, specialized industrial facilities. Supported by strong global partnerships and deep local expertise, MAHY Khoory Group continues to contribute to developments that shape communities, support economic growth, and elevate the built environment.</p>
              <p className="mt-1 leading-loose opacity-90">Explore our featured projects below to learn more about our role, the solutions we delivered, and the value we brought to each development.</p>
            </div>

            <div className=" flex flex-col  justify-end items-center lg:items-end">
              {" "}
              <PrimaryButton
                label="View all projects"
                className="w-fit"
                motionEnabled
                href={"/projects"}
              />
            </div>
          </div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-5">
            {projects.map((item, index) => (
              <ProjectCard key={index} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
