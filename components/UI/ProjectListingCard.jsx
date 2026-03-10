import Image from "next/image"
import Link from "next/link"
import { HiLocationMarker } from "react-icons/hi"

function ProjectListingCard({ project }) {
    return (
        <div className="rounded-2xl border border-gray-200 p-4 hover:bg-gray-50">
            <div className="relative h-50 w-full rounded-xl overflow-hidden">
                <Image src={project.image} alt={project.name} fill style={{ objectFit: "cover" }} />
            </div>
            <div className="mt-2 flex items-center gap-1.5 text-sm text-gray-600">
                <span className="flex items-center gap-0.5">
                    <HiLocationMarker />
                    {project.location}
                </span>
                <span className="text-xl">·</span>
                <span>{project.sector}</span>
            </div>
            <div className="font-medium tracking-tight leading-5 mt-1.5 mb-2">{project.name}</div>
            <Link href={`/projects/${project.id}`} className="t-base">Read More</Link>
        </div>
    )
}

export default ProjectListingCard