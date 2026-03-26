import CompanyDetailCards from '@/components/UI/companies/detail/CompanyDetailCards'
import SubPageHeading from '@/components/UI/SubPageHeading'
import { Fragment } from 'react'

function WarehousingLogisticsPage() {
    return (
        <Fragment>
            <SubPageHeading
                title={"Warehousing & Logistics"}
                image={"/gallery/gallery-2.jpg"}
            />
            <CompanyDetailCards
                heading1='Warehousing & Logistics'
                text1={[
                    "The MAHY Khoory Group maintains a robust warehousing and logistics infrastructure designed to support its multi-sector operations at scale. Centralized and regional warehouses are integrated across trading, manufacturing, automotive, and project-based businesses, enabling efficient storage, handling, and distribution of products and equipment.",
                    "Warehousing facilities are strategically positioned near ports, industrial zones, and major transport corridors, allowing the Group to optimize inbound supply, inventory management, and outbound deliveries across the UAE and neighboring markets. Specialized storage areas support heavy machinery, sensitive equipment, spare parts, and finished manufactured goods."
                ]}
                items1={[
                    "The Group’s in-house logistics arm plays a critical role in ensuring operational continuity and delivery reliability. Dedicated fleets transport raw materials, finished products, machinery, and personnel across manufacturing plants, customer sites, and project locations, providing full control over scheduling, cost efficiency, and service quality.",
                ]}
                heading2={false}
                text2={[
                    "By combining physical infrastructure with digital logistics management, the MAHY Khoory Group ensures resilient, scalable, and responsive supply-chain operations that support both internal integration and external customer commitments."
                ]}
                items2={[
                    "Advanced inventory systems, route optimization tools, and integrated enterprise platforms enhance visibility and coordination across the supply chain. These systems enable real-time tracking, faster response times, and seamless coordination between business units.",
                ]}
            />
        </Fragment>
    )
}

export default WarehousingLogisticsPage