import Image from "next/image"

function ProjectsOverview() {
    const items = [
        "/gallery/gallery-1.jpg",
        "/gallery/gallery-2.jpg",
        "/gallery/gallery-3.jpg",
        "/gallery/gallery-4.jpg",
        "/gallery/gallery-5.jpg",
        "/gallery/gallery-6.jpg",
        "/gallery/gallery-8.jpeg",
        "/gallery/gallery-9.jpeg",
    ]
    return (
        <div className="relative py-8 grid grid-cols-2 lg:grid-cols-4 gap-4 bg-black px-4">
            {items.map((item, i) => (
                <div key={i} className="relative aspect-square w-full rounded-2xl overflow-hidden">
                    <Image src={item} alt="Project" fill style={{ objectFit: "cover" }} />
                </div>
            ))}
            <div className="absolute inset-0 flex justify-center items-center">
                <div className="h-35 w-35 lg:h-50 lg:w-50 bg-white rounded-full flex justify-center items-center text-lg lg:text-2xl font-bold uppercase">Projects</div>
            </div>
        </div>
    )
}

export default ProjectsOverview