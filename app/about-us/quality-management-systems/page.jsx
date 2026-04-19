import Qms from '@/components/UI/about-us/Qms'
import SubPageHeading from '@/components/UI/SubPageHeading'

function QualityManagementSystemsPage() {
    return (
        <main>
            <SubPageHeading
            fullHeight
                title={"Quality Management Systems"}
                description={"The company follows a structured Quality Management System to ensure consistent product and service excellence. Processes are continuously monitored, reviewed, and improved to meet regulatory and customer requirements. Quality standards are embedded across operations to drive reliability, efficiency, and customer satisfaction."}
                image={"https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1776594879/quality-management-systems_yyivys.jpg"}
            />
            <Qms />
        </main>
    )
}

export default QualityManagementSystemsPage