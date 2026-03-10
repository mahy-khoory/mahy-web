import ValuesSection from "@/components/UI/about-us/ValuesSection"
import { getProject } from "@/constants/projects";

async function ProjectDetailPage({ params }) {
    const { id } = await params;
    const project = getProject(id);

    return (
        <main>
            <ValuesSection
                title={project.name}
                imageSrc={project.image}
                imageAlt={project.name}
                description={project.text}
                involvement={project.involvement}
                involvement2={project.involvement2}
                contribution={project.contribution}
                items={project.items}
                contribution2={project.contribution2}
                impact={project.impact}
                impact2={project.impact2}
                width="max-w-350"
                gap={"gap-8 lg:grid-cols-5"}
                h1={true}
                col1={"lg:col-span-3"}
                col2={"lg:col-span-2"}
            />
        </main>
    )
}

export default ProjectDetailPage