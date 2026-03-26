import CompanyDetailCards from '@/components/UI/companies/detail/CompanyDetailCards'
import SubPageHeading from '@/components/UI/SubPageHeading'
import { Fragment } from 'react'

function QualitySafetyCompliancePage() {
    return (
        <Fragment>
            <SubPageHeading
                title={"Quality, Safety & Compliance"}
                image={"/gallery/gallery-2.jpg"}
            />
            <CompanyDetailCards
                heading1='Quality, Safety & Compliance'
                text1={[
                    "The MAHY Khoory Group operates under a strong governance framework that prioritizes quality, safety, and regulatory compliance across all businesses and geographies. Group-wide policies ensure consistent standards while allowing operational flexibility within individual sectors.",
                    "Manufacturing plants, service operations, logistics activities, and project execution are governed by internationally recognized quality management systems. These frameworks ensure consistency in product performance, service delivery, documentation, and continuous improvement."
                ]}
                items1={[
                    "Health, safety, and environmental protection are integral to daily operations. The Group enforces rigorous safety protocols across factories, waste-management operations, construction sites, transport fleets, and service facilities to protect employees, customers, and the wider community.",
                ]}
                heading2={false}
                text2={[
                    "By embedding quality, safety, and compliance into operational culture, the MAHY Khoory Group builds long-term trust with customers, regulators, partners, and stakeholders."
                ]}
                items2={[
                    "Regulatory compliance is managed proactively across jurisdictions, including adherence to UAE and international standards related to environmental protection, waste handling, industrial safety, building codes, automotive regulations, and energy systems.",
                ]}
            />
        </Fragment>
    )
}

export default QualitySafetyCompliancePage