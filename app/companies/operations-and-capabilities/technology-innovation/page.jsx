import CompanyDetailCards from '@/components/UI/companies/detail/CompanyDetailCards'
import SubPageHeading from '@/components/UI/SubPageHeading'
import { Fragment } from 'react'

function TechnologyInnovationPage() {
    return (
        <Fragment>
            <SubPageHeading
                title={"Technology & Innovation"}
                image={"/gallery/gallery-2.jpg"}
            />
            <CompanyDetailCards
                heading1='Technology & Innovation'
                text1={[
                    "Technology and innovation are fundamental enablers of the MAHY Khoory Group’s long-term competitiveness and operational excellence. Across all sectors, the Group adopts modern digital platforms, advanced manufacturing technologies, and data-driven decision-making to enhance efficiency, transparency, and performance.",
                    "Enterprise-wide systems support finance, operations, supply chain, customer management, and analytics, providing unified visibility across the Group’s diverse businesses. Advanced reporting and business-intelligence tools enable leadership to monitor performance, optimize resources, and drive informed strategic decisions."
                ]}
                items1={[
                    "In manufacturing, the Group invests in automation, high-efficiency production lines, process control systems, and continuous improvement initiatives. These technologies improve throughput, reduce waste, and ensure consistent product quality across multiple industrial segments.",
                ]}
                heading2={false}
                text2={[
                    "Through ongoing investment in people, systems, and technology partnerships, the MAHY Khoory Group positions itself as a future-ready, technology-enabled holding company capable of adapting to changing industries and global trends."
                ]}
                items2={[
                    "Innovation also extends to product development and service delivery. The Group actively adopts new materials, energy-efficient systems, renewable technologies, and smart mobility solutions, aligning its offerings with evolving market needs and sustainability expectations.",
                ]}
            />
        </Fragment>
    )
}

export default TechnologyInnovationPage