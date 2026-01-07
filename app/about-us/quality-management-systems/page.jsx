import Qms from '@/components/UI/about-us/Qms'
import PageHeading from '@/components/UI/PageHeading'

function QualityManagementSystemsPage() {
    return (
        <main>
            <PageHeading
                title={"Quality Management Systems"}
                description={"The company follows a structured Quality Management System to ensure consistent product and service excellence. Processes are continuously monitored, reviewed, and improved to meet regulatory and customer requirements. Quality standards are embedded across operations to drive reliability, efficiency, and customer satisfaction."}
                image={"/gallery/gallery-1.jpg"}
            />
            <Qms />
        </main>
    )
}

export default QualityManagementSystemsPage