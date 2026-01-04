"use client";

import AnimatedLines from "../UI/AnimatedLines";
import PrimaryButton from "../UI/PrimaryButton";
import ProjectCard from "./ProjectCard";

const PROJECTS = [
  {
    title: "PUBLIC",
    image: "/gallery/gallery-1.jpg",
    href: "/projects",
  },
  {
    title: "INFRASTRUCTURE",
    image: "/gallery/gallery-2.jpg",
    href: "/projects",
  },
  {
    title: "AIRPORTS",
    image: "/gallery/gallery-3.jpg",
    href: "/projects",
  },
  {
    title: "HIGH",
    image: "/gallery/gallery-4.jpg",
    href: "/projects",
  },
  {
    title: "ELECTROMECHANICAL",
    image: "/gallery/gallery-6.jpg",
    href: "/projects",
  },
];

export default function ProjectsSection() {
  return (
    <>
      <section className="relative py-14 md:py-20 pt-3">
        {/* <div className="mx-auto max-w-7xl px-5 sm:px-6 text-center">

        </div> */}
        <div className="mx-auto max-w-[1340px] px-4 md:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-[220px_1fr_240px]">
            {/* <div className="flex flex-col items-center justify-center gap-4 border">
              <AnimatedLines />

              <h2
                className="
      text-ui
      text-[26px]
      tracking-[0.12em]
      text-[#2c3b45]
      text-center
      leading-relaxed
    "
              >
                OUR <br />
                PROJECTS
              </h2>
            </div> */}

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

              {/* <h2
                className="
      text-ui
      text-[26px]
      tracking-[0.22em]
      text-[#2c3b45]
      text-center
      leading-relaxed
    "
              >
                OUR <br />
                PROJECTS
              </h2> */}
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

            <div className="max-w-[780px] text-body text-[#23313a] ml-4">
              <p className="font-medium leading-[1.9]">
                At BCG, we're proud to be involved with a vast array of
                different projects spanning multiple sectors. Driven by our
                strong, value-based culture, we've spent half a century
                providing customers with a 100% success rate.
              </p>

              <p className="mt-5 leading-[2] opacity-90">
                We've worked on projects ranging from public and leisure
                buildings to airports, high rises, and electromechanical and
                plumbing installations. Whatever you require of us, rest assured
                we'll endeavour to exceed your expectations and deliver on your
                budget and specification.
              </p>
            </div>

            <div
              className=" flex flex-col  justify-end items-center lg:items-end"
            >
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
            {PROJECTS.map((item, index) => (
              <ProjectCard key={`${item.title}`} {...item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
