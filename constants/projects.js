const locationFilters = [
    { value: "dubai", label: "Dubai" },
    { value: "ras-al-khaimah", label: "Ras Al Khaimah" },
    { value: "sharjah", label: "Sharjah" },
    { value: "uae", label: "UAE" }
];

const sectorFilters = [
    { value: "residential", label: "Residential" },
    { value: "luxury-residential", label: "Luxury Residential" },
    { value: "mixed-use", label: "Mixed-Use" },
    { value: "commercial", label: "Commercial" },
    { value: "hospitality", label: "Hospitality" },
    { value: "education", label: "Education" },
    { value: "industrial", label: "Industrial" },
    { value: "infrastructure", label: "Infrastructure" },
    { value: "district-cooling", label: "District Cooling" },
    { value: "exhibition", label: "Exhibition" }
];

const developerFilters = [
    { value: "rak-properties", label: "RAK Properties" },
    { value: "al-wasl-properties", label: "Al Wasl Properties" },
    { value: "asf-real-estate", label: "ASF Real Estate" },
    { value: "sunreef-yachts", label: "Sunreef Yachts" },
    { value: "gulf-land-properties", label: "Gulf Land Properties" },
    { value: "nshama", label: "Nshama" },
    { value: "dubai-chambers", label: "Dubai Chambers" },
    { value: "sobha-construction", label: "Sobha Construction" },
    { value: "ag-engineering", label: "AG Engineering" },
    { value: "alef-group", label: "Alef Group" },
    { value: "symbolic-developments", label: "Symbolic Developments" },
    { value: "damac-properties", label: "DAMAC Properties" },
    { value: "tecom-group", label: "TECOM Group" }
];

const scaleFilters = [
    { value: "small", label: "Small" },
    { value: "medium", label: "Medium" },
    { value: "large", label: "Large" },
    { value: "mega-project", label: "Mega Project" }
];

export const projectFilters = [
    {
        title: "Location",
        key: "location",
        items: locationFilters
    },
    {
        title: "Sector",
        key: "sector",
        items: sectorFilters
    },
    {
        title: "Developer",
        key: "developer",
        items: developerFilters
    },
    {
        title: "Project scale",
        key: "scale",
        items: scaleFilters
    }
];

const projectsPerPage = 12;

export const getProjects = (page, location, sector, developer, scale) => {
    let filtered = [...projects];

    if (location)
        filtered = filtered.filter(
            (p) => p.location.toLowerCase().replace(/\s+/g, "-") === location
        );

    if (sector)
        filtered = filtered.filter(
            (p) => p.sector.toLowerCase().replace(/\s+/g, "-") === sector
        );

    if (developer)
        filtered = filtered.filter(
            (p) => p.developer.toLowerCase().replace(/\s+/g, "-") === developer
        );

    if (scale)
        filtered = filtered.filter(
            (p) => p.scale.toLowerCase().replace(/\s+/g, "-") === scale
        );

    const startIndex = (page - 1) * projectsPerPage;
    const endIndex = startIndex + projectsPerPage;

    const paginated = filtered.slice(startIndex, endIndex);

    return {
        items: paginated,
        total: filtered.length,
        totalPages: Math.ceil(filtered.length / projectsPerPage),
    };
};
export const getProject = (id) => {
    const projectId = Number(id);
    const project = projects.find(project => project.id === projectId);
    const description = projectsDescriptions.find(project => project.id === projectId);
    return {
        ...project,
        ...description
    }
};
export const getFeaturedProjects = (ids = []) => {
    return projects
        .filter((project) => ids.includes(project.id))
        .map((project) => ({
            id: project.id,
            name: project.name,
            image: project.image,
        }));
};

const projects = [
    { id: 1, name: "Cape Hayat Four Apartment Buildings", location: "Ras Al Khaimah", sector: "Luxury Residential", developer: "RAK Properties", scale: "Mega Project", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133409/cape-hayat_t0fyrj.jpg" },
    { id: 2, name: "Falcon Island Villas Development", location: "Ras Al Khaimah", sector: "Luxury Residential", developer: "Al Hamra Real Estate", scale: "Mega Project", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133437/falcon-island_cd8c8j.jpg" },
    { id: 3, name: "Marbella Villa Extension Project (89 Villas, Mina Al Arab)", location: "Ras Al Khaimah", sector: "Residential", developer: "RAK Properties", scale: "Medium", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133403/marbella-villa_ppwlzs.jpg" },
    { id: 4, name: "G+M+8+R Residential & Commercial Building - Al Rigga, Dubai", location: "Dubai", sector: "Mixed-Use", developer: "Al Wasl Properties", scale: "Medium", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133404/gm8r-residential_vd8hwy.jpg" },
    { id: 5, name: "G+14 Mixed-Use Building - Al Furjan, Dubai", location: "Dubai", sector: "Mixed-Use", developer: "ASF Real Estate", scale: "Large", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133433/g14-mixed_fcjxbh.png" },
    { id: 6, name: "Sunreef Yacht Manufacturing Facility - Dubai", location: "Dubai", sector: "Industrial", developer: "Sunreef Yachts", scale: "Large", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133423/sunreef-yacht_k1wtjv.png" },
    { id: 7, name: "Paradise Hills - 170 Luxury Villas, Dubai", location: "Dubai", sector: "Luxury Residential", developer: "Gulf Land Properties", scale: "Large", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133452/paradise-hills_w0ofgv.jpg" },
    { id: 8, name: "Nursery Building - Jumeirah Village Circle, Dubai", location: "Dubai", sector: "Education", developer: "Not specified", scale: "Small", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133445/nursery-building_qu8rd6.jpg" },
    { id: 9, name: "364 Reem Townhouses - Nshama, Town Square Dubai", location: "Dubai", sector: "Residential", developer: "Nshama", scale: "Large", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133441/364-reem_sgbnb3.jpg" },
    { id: 10, name: "Serbia Pavilion - Expo 2020 Dubai", location: "Dubai", sector: "Exhibition", developer: "Not specified", scale: "Mega Project", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133426/serbia-pavilion_xcn5a2.png" },
    { id: 11, name: "Gardenia Living - Near Miracle Garden, Dubai", location: "Dubai", sector: "Residential", developer: "Not specified", scale: "Medium", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133413/gardenia-living_yyoooq.jpg" },
    { id: 12, name: "The Place Business Chamber - Dubai Chambers", location: "Dubai", sector: "Commercial", developer: "Dubai Chambers", scale: "Small", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133448/place-business-chamber_jfgapw.jpg" },
    { id: 13, name: "Emirates Golf Estate Villas - Dubai", location: "Dubai", sector: "Luxury Residential", developer: "Not specified", scale: "Medium", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133428/emirates-golf-estate_ekj9sd.jpg" },
    { id: 14, name: "Sobha Construction - Chilled Water Pump Supply", location: "UAE", sector: "Infrastructure", developer: "Sobha Construction", scale: "Medium", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133444/sobha-construction_tihodg.png" },
    { id: 15, name: "District Cooling Plant - AG Engineering", location: "UAE", sector: "District Cooling", developer: "AG Engineering", scale: "Large", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133435/district-cooling-plant_utlmgl.png" },
    { id: 16, name: "Sobha District Cooling Plant - UAE", location: "UAE", sector: "District Cooling", developer: "Sobha Construction", scale: "Medium", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133450/sobha-district_ayy34g.jpg" },
    { id: 17, name: "Maimoon Gardens - Jumeirah Village Circle (JVC), Dubai", location: "Dubai", sector: "Residential", developer: "Not specified", scale: "Large", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133431/maimoon-gardens_wdyuld.jpg" },
    { id: 18, name: "JW Marriott Refurbishment - Dubai, UAE", location: "Dubai", sector: "Hospitality", developer: "Not specified", scale: "Small", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133424/jw-marriott_mdbqjh.jpg" },
    { id: 19, name: "Hayyan Villas - Alef Group, Sharjah, UAE", location: "Sharjah", sector: "Residential", developer: "Alef Group", scale: "Medium", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133404/hayyan-villas_pvi9jy.jpg" },
    { id: 20, name: "Burj Binghatti - Business Bay, Dubai", location: "Dubai", sector: "Mixed-Use", developer: "Not specified", scale: "Mega Project", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133416/burj-binghatti_ywurgd.jpg" },
    { id: 21, name: "Expo City Dubai - UAE", location: "UAE", sector: "Infrastructure", developer: "Not specified", scale: "Mega Project", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133411/expo-city-dubai_z7cshz.jpg" },
    { id: 22, name: "Dubai Design District (d3) - Dubai, UAE", location: "Dubai", sector: "Mixed-Use", developer: "TECOM Group", scale: "Mega Project", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133423/dubai-design-district_chyzyk.png" },
    { id: 23, name: "Symbolic Aura - Al Furjan, Dubai", location: "Dubai", sector: "Residential", developer: "Symbolic Developments", scale: "Medium", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133440/symbolic-aura_l6yrdy.jpg" },
    { id: 24, name: "DAMAC Canal Crown 1 & 2 - Business Bay, Dubai", location: "Dubai", sector: "Luxury Residential", developer: "DAMAC Properties", scale: "Mega Project", image: "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1773133417/damac-canal_zhlem0.jpg" }
];

const projectsDescriptions = [
    {
        id: 1,
        text: "Cape Hayat is a premium beachfront residential development by RAK Properties, located on Hayat Island, Ras Al Khaimah. The project comprises four residential towers two 20-storey and two 9-storey buildings housing a total of 668 high-end units, ranging from studios and one- and two-bedroom apartments to exclusive four-bedroom penthouses. Designed to capture panoramic views of the canal, mangroves, and the Arabian Gulf, Cape Hayat represents contemporary coastal living with a strong emphasis on sustainability, modern amenities, and long-term investment value.",
        involvement: "MAHY Khoory Group played a key role in the delivery of Cape Hayat by providing the complete plumbing and pumping infrastructure for the development. The scope of work included the supply, installation, and commissioning of high-performance water supply and drainage systems designed to meet the operational demands of a large-scale, high-rise residential project.",
        contribution: "The engineered solution incorporated premium Grundfos technologies, including:",
        items: [
            "CR / CRN Vertical Multistage Pumps - High-pressure pumps specified for the main water distribution network, delivering exceptional energy efficiency, stable pressure, and reliable performance across all residential levels.",
            "DPK Submersible Pumps - Heavy-duty pumps with free-flow impellers, selected for stormwater and sewage drainage applications requiring robust and dependable operation.",
            "CM Horizontal Multistage Pumps - Compact, low-noise booster pumps used for domestic water boosting, offering efficient performance and a small footprint well suited to residential plant rooms."
        ],
        contribution2: "Each system was carefully selected and engineered to align with the project's scale, hydraulic requirements, and long-term operational expectations.",
        impact: "Through a combination of engineering expertise, precise system selection, and the deployment of premium pumping technologies, MAHY Khoory Group delivered a seamless, efficient, and durable water supply and drainage infrastructure for Cape Hayat. This contribution supports the development's high standards of quality, comfort, and performance reinforcing its positioning as a landmark waterfront residential destination in Ras Al Khaimah."
    },
    {
        id: 2,
        text: "Falcon Island is an exclusive island-resort residential community developed by Al Hamra Real Estate in Ras Al Khaimah. Located within the prestigious Al Hamra Village, the development features a refined collection of two- to seven-bedroom townhouses and villas set on a private island. With direct marina access, private beaches, golf-course views, and world-class leisure amenities, Falcon Island delivers a sophisticated coastal lifestyle that seamlessly blends luxury living with a tranquil natural environment.",
        involvement: "MAHY Khoory Group was entrusted with delivering the complete plumbing and pumping solutions for the Falcon Island villas. The scope of work included the supply, installation, and commissioning of portable and submersible pumping systems—ensuring reliable freshwater distribution and efficient wastewater management across the entire community.",
        contribution: "The project incorporated premium Grundfos technologies, including:",
        items: [
            "CRN Vertical Multistage Pumps - Stainless-steel pumps selected for pressurised freshwater distribution, delivering high pressure with outstanding energy efficiency and long-term reliability.",
            "Uni-lift Submersible Pumps - Purpose-designed for dependable operation in greywater and sewage applications, ensuring effective wastewater handling in residential environments."
        ],
        contribution2: "These systems were specified to meet the scale, performance, and durability requirements of a premium island development, supporting continuous operation under varying demand conditions.",
        impact: "Through the deployment of robust, high-performance pumping systems, MAHY Khoory Group ensured continuous, high-quality water services throughout Falcon Island. This contribution supports the development's premium positioning while reinforcing MAHY Khoory's commitment to engineering excellence, operational reliability, and long-term performance in luxury residential communities."
    },
    {
        id: 3,
        text: "Marbella Villas II is an 89-unit residential extension of the established Marbella waterfront community on Hayat Island, Mina Al Arab, Ras Al Khaimah. The development introduces a refined collection of two- to four-bedroom townhouses and villas within a master-planned island environment, surrounded by landscaped parks, pedestrian promenades, and expansive coastal views. Designed around a family-oriented, resort-style lifestyle, Marbella Villas II continues the community's vision of harmonising contemporary living with nature and shared amenities.",
        involvement: "MAHY Khoory Group was responsible for engineering and delivering the core plumbing infrastructure for the Marbella Villas II extension. The scope of work included the supply, installation, and commissioning of high-performance pumping systems to ensure reliable and efficient water distribution across the entire development.",
        contribution: "The plumbing system design incorporated premium Grundfos technologies, including:",
        items: [
            "CM Horizontal Multistage Booster Pumps - Selected for their compact, modular design and ability to deliver high flow rates efficiently, supporting the main domestic water supply across villas and townhouses.",
            "UPS Circulator Pumps - Specified for quiet, maintenance-free circulation of hot water and domestic systems, ensuring consistent comfort and reliable operation."
        ],
        contribution2: "Both pump solutions are widely recognised for their durability, energy efficiency, and long-term reliability in residential building services applications, making them well suited to a waterfront, family-oriented community of this scale.",
        impact: "By tailoring engineered pumping solutions to the specific requirements of the Marbella Villas II extension, MAHY Khoory Group ensured consistent, high-quality water distribution throughout the community. This project reflects our value-driven approach and proven track record in delivering dependable, large-scale plumbing systems that enhance residential comfort, operational efficiency, and long-term asset value within premium lifestyle developments."
    },
    {
        id: 4,
        text: "This G+M+8+R mixed-use development in Al Rigga, Dubai, developed by Al Wasl Properties, comprises 81 residential apartments supported by commercial spaces at the podium levels. Located within one of Dubai's most established and vibrant urban districts, the project benefits from excellent connectivity, strong pedestrian activity, and close proximity to major business and retail hubs making it highly attractive to both residents and commercial tenants.",
        involvement: "MAHY Khoory Group played a key role in delivering a reliable and energy-efficient HVAC solution tailored to the project's mixed-use requirements. The scope of supply included ducted indoor units and VRF outdoor units, with a total installed capacity of approximately 430 HP.",
        items: [
            "The VRF system was selected to provide precise temperature control across multiple zones, ensuring optimal comfort for residential apartments while efficiently accommodating the variable load demands of commercial podium spaces. Ducted indoor units were carefully specified to allow concealed installation, preserving clean interior aesthetics while maintaining high air distribution efficiency.",
            "The VRF outdoor units were chosen for their high-ambient performance, proven reliability, and reduced operating costs critical considerations for a dense urban environment such as Al Rigga, where system durability and long-term efficiency are essential.",
            "MAHY Khoory Group worked in close coordination with consultants, contractors, and project stakeholders to ensure full compliance with design specifications, spatial constraints, and Dubai's environmental performance standards."
        ],
        impact: "By supplying a robust and scalable HVAC solution, MAHY Khoory Group contributed significantly to the project's overall value delivering year-round thermal comfort, operational efficiency, and long-term sustainability for both residential occupants and commercial users within this prominent urban development."
    },
    {
        id: 5,
        text: "This G+14 mixed-use development in Al Furjan, Dubai, is a premium residential project developed by ASF Real Estate, with Abdullah & Sons acting as both client and contractor, and Abdul Rahim Engineering Consultant appointed as the project consultant. The development comprises 140 residential apartments, complemented by retail outlets, a gym, and shared lifestyle amenities addressing the growing residential demand in one of Dubai's fastest-developing communities.",
        involvement: "MAHY Khoory Group was entrusted with delivering a comprehensive HVAC solution designed to meet the comfort, efficiency, and operational flexibility requirements of a modern mixed-use building. The scope of supply included ducted indoor units, Fresh Air Handling Units (FAHU), VRF outdoor units, central controllers, and app-based cloud control systems, with a total installed capacity of approximately 1,050 HP (around 2,950 kW).",
        contribution: "The VRF system enables individualized climate control for residential units while efficiently serving shared facilities such as the gym and retail areas. FAHUs were integrated to provide a continuous supply of fresh, filtered air enhancing indoor air quality and occupant wellbeing. Centralized controls combined with cloud-based management enable real-time monitoring, remote operation, and optimized energy consumption across the building.",
        contribution2: "MAHY Khoory Group worked closely with consultants and contractors to ensure seamless integration of all HVAC components, full compliance with local regulations, and reliable performance under Dubai's high-ambient operating conditions.",
        impact: "By delivering a robust, future-ready HVAC solution with smart control capabilities, MAHY Khoory Group contributed to long-term operational efficiency, enhanced occupant comfort, and sustainable building performance supporting Al Furjan's vision as a high-quality, well-connected residential destination."
    },
    {
        id: 6,
        text: "The Sunreef Yacht Manufacturing Facility is a specialized industrial project developed for Sunreef Yachts, a global leader in luxury yacht design and construction. The facility supports high-precision yacht manufacturing processes, where stringent environmental control is essential to protect materials, surface finishes, and overall production quality.",
        involvement: "MAHY Khoory Group contributed to the project by supplying advanced HVAC solutions purpose-engineered for demanding industrial and production environments. Working in close coordination with Home of Architecture as the project consultant and Orion Electromechanical LLC as the contractor, MAHY Khoory ensured that the delivered systems achieved consistent temperature control, precise humidity regulation, and reliable air circulation throughout all manufacturing areas.",
        contribution: "Unlike conventional commercial buildings, yacht manufacturing facilities require highly stable indoor environmental conditions to prevent material deformation, coating defects, and equipment downtime. The HVAC systems supplied by MAHY Khoory Group were selected for their robustness, durability, and ability to operate continuously under demanding industrial conditions supporting uninterrupted production cycles and maintaining strict quality standards.",
        contribution2: "The engineered solutions were designed to provide uniform airflow distribution and controlled humidity levels, safeguarding sensitive manufacturing processes and high-value materials integral to luxury yacht construction.",
        impact: "Strategically located to leverage Dubai's maritime and logistics infrastructure, the facility enables Sunreef Yachts to efficiently serve international markets. MAHY Khoory Group's HVAC solutions played a direct role in preserving the precision, craftsmanship, and finish quality expected in the global luxury yacht industry.",
        impact2: "Through careful equipment selection, detailed technical coordination, and strict adherence to project timelines, MAHY Khoory Group supported the successful delivery of a world-class marine manufacturing facility reinforcing Dubai's position as a global hub for luxury craftsmanship and advanced industrial development."
    },
    {
        id: 7,
        text: "Paradise Hills is a prestigious residential villa development by Gulf Land Properties, comprising 170 luxury villas with four- and five-bedroom configurations. Designed for upscale family living, the gated community emphasizes privacy, comfort, and premium finishes setting a high benchmark for contemporary residential developments in Dubai.",
        involvement: "MAHY Khoory Group supplied a complete VRF-based HVAC solution tailored to the individual requirements of each villa. The scope included ducted indoor units and VRF outdoor units, with a total installed capacity of approximately 4,360 HP across the development.",
        contribution: "The VRF systems were selected to deliver independent temperature control for each villa and internal zone, ensuring personalized comfort while maintaining high energy efficiency. Ducted indoor units were seamlessly integrated into the architectural design to preserve clean interior aesthetics without compromising airflow quality or performance.",
        contribution2: "MAHY Khoory Group worked in close coordination with HAO Architects and Consultants and Hesper Contracting LLC to ensure smooth execution, optimal equipment placement, and full compliance with design and performance standards. The systems were engineered to operate reliably under Dubai's extreme climatic conditions while minimizing long-term operating costs for homeowners.",
        impact: "Situated in a prime residential location with convenient access to major road networks and lifestyle amenities, Paradise Hills benefits from a well-connected yet tranquil setting. MAHY Khoory Group's contribution ensures each villa delivers quiet operation, efficient cooling, and long-term system reliability reinforcing the project's positioning as a premium residential destination in Dubai."
    },
    {
        id: 8,
        text: "This G+1 nursery building, located in Jumeirah Village Circle (JVC), Dubai, serves as a dedicated educational and childcare facility within one of the city's fastest-growing, family-oriented residential communities. Given the nature of the occupants, the project required HVAC solutions with a strong emphasis on indoor air quality, thermal comfort, safety, and low noise levels critical factors for the wellbeing of young children and staff.",
        involvement: "MAHY Khoory Group supplied HVAC systems carefully selected to meet the specific operational and environmental requirements of educational facilities. The solutions were designed to deliver consistent cooling, effective air circulation, and stable indoor temperatures, creating a comfortable, calm, and healthy learning environment throughout the building.",
        contribution: "Special attention was given to fresh air provision, temperature stability, and ease of maintenance to support uninterrupted daily operations. The supplied systems ensure energy-efficient performance while complying with local building regulations and environmental standards supporting both occupant comfort and long-term operational reliability.",
        contribution2: "Low-noise operation and uniform air distribution were prioritized to maintain a quiet, distraction-free atmosphere suitable for early learning and childcare activities.",
        impact: "With JVC's central location and strong focus on family living, the nursery plays an important role in the community's social infrastructure. MAHY Khoory Group's contribution ensures the facility benefits from a dependable and efficient climate control system that supports child wellbeing, enhances staff productivity, and delivers sustainable performance throughout the building's lifecycle."
    },
    {
        id: 9,
        text: "The 364 Reem Townhouses project forms part of Nshama's Town Square Dubai a master-planned community designed around modern family living with integrated retail outlets, leisure facilities, and expansive green spaces. The development reflects Nshama's vision of creating well-connected, community-focused neighborhoods supported by contemporary infrastructure and high-quality residential environments.",
        involvement: "MAHY Khoory Group supplied a comprehensive HVAC solution for the Reem Townhouses, comprising ducted and wall-mounted air-conditioning units with a total installed capacity of approximately 2,430 tons. The systems were carefully selected to address the varied cooling requirements of townhouse layouts while ensuring energy efficiency, cost-effective operation, and ease of long-term maintenance.",
        contribution: "The HVAC solution was engineered to provide reliable and consistent cooling across a large number of residential units. The combination of ducted and wall-mounted systems offered design flexibility to suit different unit configurations while maintaining uniform thermal comfort and operational efficiency throughout the community.",
        contribution2: "MAHY Khoory Group worked in close coordination with Arif & Bintoak as the project consultant and United Masters as the contractor, ensuring efficient system deployment and adherence to strict project timelines.",
        impact: "Located within a vibrant, family-centric development, the Reem Townhouses benefit from excellent accessibility, comprehensive community amenities, and modern infrastructure. MAHY Khoory Group's HVAC contribution directly supports Nshama's objective of delivering high-quality, energy-efficient homes at scale enhancing resident comfort while ensuring long-term system performance and asset value."
    },
    {
        id: 10,
        text: "The Serbia Pavilion at Expo 2020 Dubai represented Serbia on a global stage, hosting exhibitions, cultural programs, official events, and diplomatic engagements throughout the Expo period. As a high-profile international venue with sustained visitor traffic, the pavilion required HVAC systems that were reliable, discreet, and capable of continuous operation while maintaining optimal indoor comfort.",
        involvement: "MAHY Khoory Group supplied a tailored HVAC solution designed to meet the pavilion's operational intensity and architectural requirements. The scope included ducted indoor units, concealed floor-standing units, and touchscreen central controllers engineered to deliver precise climate control while integrating seamlessly within the pavilion's spatial and design constraints.",
        contribution: "The selected systems ensured consistent temperature control and high reliability without compromising the pavilion's interior aesthetics. Concealed installations preserved clean architectural lines, while centralized touchscreen controls enabled efficient system management during periods of peak occupancy and continuous use.",
        contribution2: "Given the international visibility and performance demands of Expo 2020, system reliability, compliance, and visual integration were critical. MAHY Khoory Group worked in close coordination with Design Integrated Engineering Consultants / Haida Green Consultant and SAM Building Contracting LLC to ensure seamless integration, strict adherence to project specifications, and timely delivery.",
        impact: "The successful execution of the Serbia Pavilion demonstrates MAHY Khoory Group's capability to support landmark, high-profile developments with advanced HVAC solutions showcasing technical excellence, strong stakeholder coordination, and the ability to perform to global standards on an international platform."
    },
    {
        id: 11,
        text: "Gardenia Living is a B+G+6 premium residential development located near Dubai Miracle Garden, comprising 156 residential apartments along with a gym and shared lifestyle amenities. Designed to offer comfortable, modern urban living, the project appeals to residents seeking quality finishes, efficient building services, and a well-connected location close to one of Dubai's most popular leisure attractions.",
        involvement: "MAHY Khoory Group supplied a comprehensive HVAC solution tailored to the project's residential requirements. The scope included ducted indoor units and Fresh Air Handling Units (FAHU), with a total installed capacity of approximately 960 HP engineered to deliver reliable performance and long-term efficiency.",
        contribution: "The HVAC system design focused on efficient cooling, consistent fresh air circulation, and low-noise operation key factors for residential comfort and occupant wellbeing. FAHUs were integrated to provide a continuous supply of filtered fresh air, significantly enhancing indoor air quality across apartments and common areas.",
        contribution2: "Given the project's proximity to a major tourist destination, the systems were engineered to accommodate fluctuating occupancy levels while maintaining stable indoor conditions and optimized energy consumption.",
        impact: "Through the selection of reliable, high-performance HVAC equipment, MAHY Khoory Group ensured long-term operational reliability, improved indoor air quality, and sustained thermal comfort for residents. This contribution supports Gardenia Living's positioning as a high-quality residential development in a prominent Dubai location—delivering a balanced combination of comfort, efficiency, and lifestyle value."
    },
    {
        id: 12,
        text: "The Place Business Chamber is a modern commercial workspace developed for Dubai Chambers, comprising 52 private offices and 30 workstations distributed across two floors. Designed to foster collaboration, professionalism, and operational efficiency, the facility delivers a contemporary working environment aligned with Dubai's dynamic and rapidly evolving business ecosystem.",
        involvement: "MAHY Khoory Group supplied a tailored HVAC solution engineered to meet the functional and comfort requirements of modern office environments. The scope included ducted and wall-mounted indoor units paired with S+ high-ambient VRF outdoor units selected to ensure stable and reliable performance under Dubai's extreme climatic conditions.",
        contribution: "The HVAC design supports flexible office layouts, efficient energy utilization, and quiet operation key requirements for productive professional spaces. High-ambient VRF outdoor units were specified to maintain performance and efficiency during peak summer temperatures, ensuring uninterrupted operation and reduced lifecycle operating costs while delivering consistent indoor comfort across diverse workspace configurations.",
        impact: "Through the delivery of a robust and energy-efficient HVAC solution, MAHY Khoory Group contributed to creating a comfortable, productive, and future-ready business environment. This solution directly supports Dubai Chambers' mission to enable growth, collaboration, and excellence within the business community, reinforcing The Place Business Chamber as a high-quality commercial destination in Dubai."
    },
    {
        id: 13,
        text: "Emirates Golf Estate Villas, developed by Al Wasl Real Estate, represent premium residential living adjacent to one of Dubai's most prestigious golf communities. Set within an exclusive, leisure-oriented environment, the development offers residents enhanced privacy, expansive green views, and close proximity to world-class golf and lifestyle amenities creating a refined living experience defined by tranquility and prestige.",
        involvement: "MAHY Khoory Group supplied HVAC systems specifically engineered for high-end villa applications. The solutions were designed with a strong focus on superior thermal comfort, quiet operation, and energy efficiency key requirements for luxury residential environments.",
        contribution: "The HVAC systems were carefully tailored to suit large villa layouts and the expectations associated with upscale living. System selection and configuration ensured balanced cooling, consistent temperature distribution, and discreet integration within architectural spaces, maintaining interior aesthetics while delivering reliable performance across all living areas.",
        impact: "Located within a prime residential and leisure zone, Emirates Golf Estate Villas benefit from exclusivity, excellent accessibility, and a serene natural setting. MAHY Khoory Group's contribution ensures residents enjoy reliable, high-performance climate control solutions that align seamlessly with the development's quality standards and luxury lifestyle positioning reinforcing the project's status as a distinguished golf community residence in Dubai."
    },
    {
        id: 14,
        text: "A mid-sized commercial development located within a prime urban setting in the UAE required a robust and efficient HVAC infrastructure to support long-term operational performance. With a total project value of AED 3.4 million, the development demanded chilled water solutions capable of delivering reliability, energy efficiency, and durability under the region's demanding climatic conditions.",
        involvement: "MAHY Khoory Group partnered with Sobha Construction on a key mechanical systems package, supplying high-performance chilled water pumps as part of the building's core HVAC infrastructure.",
        involvement2: "The scope focused on the supply of Grundfos chilled water pump units, selected for their robust engineering, energy-efficient operation, and proven track record in commercial HVAC applications. The specified pump series was purpose-engineered for chilled water circulation within the building's air-conditioning plant, ensuring stable flow rates, precise temperature control, and minimal downtime—critical factors for maintaining occupant comfort and uninterrupted operations.",
        contribution: "Beyond equipment supply, MAHY Khoory Group provided detailed technical coordination in close collaboration with the Sobha Construction team. This included:",
        items: [
            "Aligning pump specifications with hydraulic design criteria and performance requirements",
            "Verifying fit-for-purpose pump and motor sizing",
            "Ensuring compatibility with chilled water system parameters",
            "Supporting seamless integration within existing plant room layouts and spatial constraints"
        ],
        contribution2: "Close coordination with site engineers ensured accurate execution and efficient installation of the pumping systems.",
        impact: "The chilled water pumps supplied by MAHY Khoory Group now serve as the central circulation backbone of the project's HVAC system supporting efficient thermal conditioning of occupied spaces while optimizing overall plant energy performance.",
        impact2: "This project highlights MAHY Khoory Group's commitment to supplying trusted global brands and delivering engineered HVAC solutions that enhance comfort, operational reliability, and long-term lifecycle value for clients across the UAE."
    },
    {
        id: 15,
        text: "A District Cooling Plant executed by AG Engineering represents a strategic infrastructure installation designed to supply chilled water to multiple connected buildings within a master-planned community. In hot climates such as the UAE, district cooling plants play a vital role by centralizing cooling operations, reducing peak electricity demand, and significantly improving overall energy efficiency. With a project value of AED 3.6 million, this development stands as a long-term, sustainable infrastructure investment supporting large-scale HVAC requirements.",
        involvement: "MAHY Khoory Group delivered a key mechanical equipment package for the project, with scope centered on the supply of high-efficiency Grundfos LS series pumps. These pumps form the hydraulic backbone of the district cooling plant's chilled water distribution network.",
        involvement2: "The Grundfos LS series was selected for its superior energy performance, continuous-duty reliability, and ability to deliver accurate flow and head across large district cooling systems. Engineered for efficient operation under variable load conditions, the LS series is ideally suited for environments where cooling demand fluctuates throughout the day and across seasons.",
        contribution: "Working closely with the project team, MAHY Khoory Group ensured precise pump specification for the plant's chilled water loops, taking into account:",
        items: [
            "System flow rate and head requirements",
            "Redundancy and reliability strategies",
            "Seamless integration with plant automation and control systems"
        ],
        contribution2: "Engineering coordination included detailed review of pump duty points, confirmation of motor sizing, and optimization of piping interfaces to support efficient operation, accessibility, and long-term maintenance.",
        impact: "By supplying Grundfos LS series pumps, MAHY Khoory Group contributed directly to the plant's operational efficiency delivering reliable, high-capacity chilled water circulation while reducing lifecycle costs and ensuring service continuity. This project highlights MAHY Khoory's capability to support complex infrastructure developments with engineered fluid-handling solutions aligned with sustainability, performance, and energy-efficiency objectives at a city-scale level."
    },
    {
        id: 16,
        text: "The Sobha DCP project forms a critical component of large-scale district cooling infrastructure, where reliability, efficiency, and continuous operation are essential. Designed to support chilled water distribution across connected buildings, the plant required robust pumping solutions capable of maintaining stable hydraulic performance under variable demand conditions.",
        involvement: "MAHY Khoory Group played a key role in the Sobha DCP project through the supply of high-performance Grundfos pumps from the CRE series. These pumps provide reliable fluid handling essential for continuous chilled water circulation within the plant's loop systems.",
        involvement2: "The Grundfos CRE series consists of multistage centrifugal pumps engineered for demanding industrial and commercial HVAC applications. Known for their robust construction, energy-optimized operation, and flexible configuration options, CRE pumps are particularly well suited to district cooling environments.",
        contribution: "Grundfos CR/CRE multistage units are designed to deliver high pressure and stable flow across variable load conditions an essential requirement in district cooling plants where duty cycles fluctuate significantly between daily operational peaks and off-peak periods. This capability ensures consistent hydraulic performance, high operational resilience, and sustained energy efficiency during continuous operation.",
        items: [
            "Under the AED 0.4 million project package, MAHY Khoory Group supplied and delivered the specified CRE pump units along with associated system components. The scope ensured full compliance with hydraulic design criteria, seamless integration with the plant's chilled water headers, and long-term operational reliability.",
            "MAHY Khoory's engineering team coordinated closely with the MEP contractor to validate pump sizing, motor selection, mechanical interfaces, and adherence to applicable UAE standards ensuring accurate execution and smooth system integration."
        ],
        impact: "By delivering these high-efficiency pumping solutions, MAHY Khoory Group contributed directly to the Sobha DCP's operational readiness. The supplied systems support the core benefits of district cooling infrastructure, including enhanced thermal comfort, reduced energy consumption, and improved lifecycle performance for the end user—demonstrating MAHY Khoory's capability to support complex, large-scale cooling infrastructure with engineered, performance-driven solutions."
    },
    {
        id: 17,
        text: "Maimoon Gardens is a prestigious high-rise residential development designed to deliver reliable, efficient, and sustainable living infrastructure suited to modern urban lifestyles. Given the scale and vertical nature of the project, robust mechanical and water systems were essential to ensure consistent performance across all residential levels.",
        involvement: "As part of this landmark development, MAHY Khoory & Co. LLC played a key role in the mechanical and water infrastructure supply scope, delivering a comprehensive suite of Grundfos pumping solutions engineered specifically to meet the demanding requirements of high-rise residential applications.",
        contribution: "The supplied pumping package was carefully selected to support reliable water supply, efficient pressure boosting, and effective drainage across the development and included:",
        items: [
            "LS Series Pumps - Designed for dependable low-pressure water circulation within residential systems, supporting daily domestic water distribution with quiet operation and energy-efficient performance.",
            "CRN & CRI Series Multistage Pumps - Vertical multistage centrifugal pumps suitable for high-pressure boosting, water transfer, and circulation duties. These pumps offer robust performance and high energy efficiency, making them ideal for commercial-grade applications in tall residential structures.",
            "DPK Drainage Pumps - Heavy-duty submersible pumps used for wastewater and drainage handling in basements, service areas, and utility zones ensuring reliable drainage and effective flood-prevention performance in critical infrastructure areas."
        ],
        impact: "Through the delivery of these engineered pumping solutions, MAHY Khoory & Co. LLC supported the core water supply, pressure boosting, and drainage systems for Maimoon Gardens contributing directly to the development's operational reliability and sustainable performance objectives. All equipment was specified and supplied in alignment with project design pressures, energy-efficiency targets, and long-term lifecycle performance expectations, ensuring dependable operation throughout the building's service life.",
        impact2: "This project highlights MAHY Khoory's capability to deliver integrated, high-performance water infrastructure solutions for complex high-rise residential developments."
    },
    {
        id: 18,
        text: "The JW Marriott Dubai is one of the city's most prestigious hospitality destinations, known for its premium guest experience and high operational standards. As part of an extensive refurbishment program, the hotel undertook critical upgrades to enhance comfort, reliability, and efficiency across its facilities particularly within essential building services.",
        involvement: "For this refurbishment project, MAHY Khoory & Co. LLC was selected to supply high-quality electric water heating solutions to support upgraded domestic hot water systems serving guest rooms, back-of-house areas, and service amenities. Reliable hot water availability is a core requirement in hospitality environments, where system uptime and consistency directly impact guest satisfaction.",
        involvement2: "MAHY Khoory supplied Ariston electric water heaters a globally recognized brand known for efficient heating performance, stringent safety standards, and durability in commercial and hospitality applications. Ariston systems are engineered to deliver consistent hot water, offer compact installation flexibility, and perform reliably under high-occupancy operating conditions, making them well suited for hotel refurbishment projects where continuity of service is critical.",
        contribution: "Each Ariston unit was carefully specified based on capacity requirements, energy efficiency targets, and compatibility with the hotel's existing mechanical and plumbing infrastructure. Key technical features include thick insulated tanks, durable heating elements, and integrated safety controls compliant with UAE quality and energy standards—ensuring dependable operation while optimizing energy consumption and lifecycle performance.",
        impact: "MAHY Khoory's scope extended across product specification, supply coordination, and logistics, working closely with the hotel's engineering and MEP teams to ensure timely delivery aligned with the refurbishment schedule. This end-to-end support enabled a smooth and efficient upgrade of the hotel's hot water systems.",
        impact2: "The successful execution of this package reinforces the JW Marriott Dubai's commitment to premium guest comfort and operational excellence, supported by reliable, high-performance water heating solutions delivered by MAHY Khoory & Co. LLC."
    },
    {
        id: 19,
        text: "The Hayyan Villas residential cluster is designed to deliver a high standard of modern, family-oriented living supported by reliable and efficient utility infrastructure. To meet the project's domestic water supply requirements, MAHY Khoory & Co. LLC supplied advanced Grundfos SCALA1 pumps intelligent domestic water pressure boosting solutions engineered for high-performance residential applications.",
        involvement: "MAHY Khoory supplied Grundfos SCALA1 pumps, an all-in-one pressure boosting solution that integrates the pump, motor, pressure and flow sensors, controller, and non-return valve into a compact, intelligent unit. Designed specifically for villas and townhouses, the SCALA1 delivers consistent and stable water pressure throughout residential plumbing systems.",
        contribution: "The Hayyan Villas development required steady and reliable water pressure to support multi-point water usage across individual homes, including taps, showers, and utility outlets. The Grundfos SCALA1 was selected for its ability to:",
        items: [
            "Provide efficient pressure boosting from city mains or storage tanks, ensuring consistent water flow throughout each villa's plumbing network",
            "Operate reliably in residential environments with built-in protection features such as dry-run protection and anti-cycling control, reducing the risk of equipment damage or downtime",
            "Simplify installation and commissioning through its compact, all-in-one design, minimizing space requirements and on-site installation complexity",
            "Enable mobile monitoring and diagnostics via Bluetooth connectivity using the Grundfos GO app, offering maintenance teams enhanced visibility and operational insights"
        ],
        impact: "By supplying Grundfos SCALA1 pumps, MAHY Khoory & Co. LLC enhanced water delivery performance, user comfort, and operational reliability for residents of Hayyan Villas. The solution aligns with the project's emphasis on high-quality living environments and sustainable infrastructure, while supporting long-term performance and ease of serviceability across the community's domestic water systems.",
        impact2: "This contribution reinforces Hayyan Villas' positioning as a modern, premium residential destination equipped with efficient, dependable, and future-ready utility solutions."
    },
    {
        id: 20,
        text: "Burj Binghatti is a flagship high-rise development in Dubai, distinguished by its premium architecture and mixed-use functionality. Designed to meet the demanding operational requirements of a landmark tower, the project incorporates advanced mechanical and utility systems to ensure long-term performance, efficiency, and sustainability.",
        involvement: "As part of the project's sophisticated mechanical systems package, MAHY Khoory & Co. LLC supplied advanced Grundfos TPE series vertical inline pumps. These pumps were engineered to deliver high-performance water circulation, precise pressure management, and energy-efficient fluid handling across the building's mechanical, HVAC, and utility systems.",
        contribution: "The Grundfos TPE series comprises robust inline centrifugal pumps equipped with integrated frequency converters and high-efficiency permanent magnet motors. This intelligent design allows automatic speed modulation based on real-time system demand, ensuring optimized energy consumption, stable pressure control, and reliable operation under variable load conditions critical for a mixed-use high-rise of this scale and complexity.",
        contribution2: "Within Burj Binghatti, the TPE pumps were strategically specified to serve hot and cold water circulation loops, HVAC plant systems, and water supply distribution networks throughout the tower. Variable speed control enables accurate pressure regulation while significantly reducing operational energy costs, directly supporting the project's sustainability and efficiency objectives.",
        impact: "MAHY Khoory & Co. LLC's scope extended beyond equipment supply to include detailed technical specification, close coordination with the MEP contractor, logistics planning, and on-time delivery. This ensured seamless integration of the pumping systems within the wider mechanical and plumbing infrastructure.",
        impact2: "The result is a future-ready, efficient, and highly reliable water systems backbone that aligns with Burj Binghatti's premium architectural standards and long-term operational performance expectations demonstrating MAHY Khoory's capability to deliver engineered solutions for iconic, large-scale developments."
    },
    {
        id: 21,
        text: "Expo City Dubai stands as one of Dubai's most visionary developments—transforming the world-class Expo 2020 Dubai legacy site into a future-ready, mixed-use urban hub that promotes innovation, sustainability, and community living. Evolving from a global exposition precinct into a vibrant destination for residents, businesses, culture, and technology, Expo City Dubai aligns closely with Dubai's long-term urban planning principles of connectivity, sustainability, and high-quality infrastructure.",
        involvement: "As part of the essential water and wastewater management systems supporting both legacy assets and ongoing utilities, MAHY Khoory & Co. LLC supplied specialized Grundfos solutions from the SEG and OCU ranges. These systems were engineered for modern fluid handling and wastewater applications across large, high-footfall, city-scale environments.",
        contribution: "",
        items: [
            "Grundfos SEG Series Pumps - Submersible sewage grinder pumps designed for robust wastewater and effluent handling. Featuring a patented grinder system and durable cartridge shaft seals, SEG pumps efficiently process sewage and sludge-laden flows for transfer to treatment facilities or discharge networks—critical for a development of Expo City's scale, where reliability, resilience, and energy efficiency are paramount.",
            "Grundfos OCU Control Solutions - Advanced pump station control assemblies that manage pump sequencing, monitoring, and system protection. These controls enhance operational uptime, system responsiveness, and energy efficiency across highly automated civic infrastructure, ensuring consistent performance under variable and peak demand conditions.",
        ],
        impact: "MAHY Khoory's supply of SEG pumping and OCU control solutions formed a core component of Expo City Dubai's wastewater infrastructure—supporting effective flow management, protecting downstream networks, and maintaining operational efficiency across visitor zones, residential areas, and legacy buildings. Through precise product specification, close coordination with consultants, and timely logistics execution, MAHY Khoory & Co. LLC contributed to the sustainable operation and long-term reliability of wastewater systems at a major city-scale development—reinforcing Expo City Dubai's vision for resilient, efficient, and future-ready urban infrastructure."
    },
    {
        id: 22,
        text: "Dubai Design District (d3) is Dubai's premier creative, fashion, and culture-oriented mixed-use precinct, developed by TECOM Group. Conceived as an integrated live-work-play community, d3 supports a dynamic creative economy through a mix of studio offices, retail spaces, residential buildings, hospitality venues, and high-quality public realm infrastructure where reliable utility services are essential to occupant comfort and operational performance.",
        involvement: "As part of the district's mechanical services scope, MAHY Khoory & Co. LLC delivered essential water supply solutions to support this landmark urban development. The scope included the supply of Grundfos LS series pumps high-performance vertical multistage centrifugal pumps engineered for reliable, energy-efficient water transfer, distribution, and pressure boosting in commercial and mixed-use environments.",
        contribution: "The Grundfos LS series is widely used in building services applications where consistent flow, stable pressure, and long service life are critical. Within d3's infrastructure, these pumps were specified to support the district's potable and non-potable water supply networks, ensuring that offices, retail outlets, communal facilities, and residential areas receive stable, pressurized water even during peak demand periods.",
        contribution2: "The multistage pump design delivers high head within a compact footprint, enabling efficient integration into plant rooms and MEP risers across the district, while maintaining high hydraulic efficiency and operational reliability.",
        impact: "MAHY Khoory's engineering team worked closely with project consultants and the MEP contractor to finalize pump selections aligned with required flow rates, pressure profiles, and energy-efficiency targets. The superior hydraulic performance of the LS series contributes to reduced energy consumption and enhanced lifecycle value of the water supply infrastructure.",
        impact2: "Through precise technical specification, coordinated logistics, and on-time delivery, MAHY Khoory & Co. LLC supported d3's vision for world-class infrastructure helping ensure dependable utility services that match the district's innovative, creative, and future-focused environment."
    },
    {
        id: 23,
        text: "Symbolic Aura is a landmark residential development in Dubai's vibrant Al Furjan district, delivered by Symbolic Developments, a division of the Speedex Group. Valued at approximately AED 150 million, the project comprises 72 premium “Sky Garden” residences featuring spacious 2.5- and 3-bedroom apartments. Designed to blend luxury living with sustainability and smart-home innovation, the development offers thoughtfully planned layouts, generous natural light, landscaped elements, and full-floor lifestyle amenities including fitness, meditation, and communal spaces. Construction commenced in mid-2024, with handover scheduled for early 2026.",
        involvement: "For this high-end residential development, MAHY Khoory & Co. LLC supplied advanced Samsung Variable Refrigerant Flow (VRF) air-conditioning systems globally recognized for high-efficiency climate control, flexible zoning, and intelligent system performance. Samsung VRF technology was selected to deliver precise temperature regulation across multiple zones, ensuring superior indoor comfort while optimizing energy consumption, particularly suited to contemporary residential towers in Dubai's demanding climate.",
        contribution: "Samsung VRF systems provide dynamic load adaptation and individualized comfort control across residential units, supporting simultaneous cooling and heating where required. Key technical advantages include modulated refrigerant flow, enhanced piping flexibility, and optimized energy usage, enabling efficient operation even during peak demand conditions. Seamless integration with building management systems allows for remote diagnostics, scheduling, and energy reporting—capabilities fully aligned with Symbolic Aura's smart-building and sustainability vision.",
        impact: "By supplying Samsung VRF technology, MAHY Khoory & Co. LLC ensured that Symbolic Aura benefits from reliable, energy-efficient, and future-ready HVAC performance. This contribution enhances occupant comfort while supporting the project's environmental and energy-efficiency objectives. Close coordination with site MEP teams and proactive logistics management enabled smooth installation within the overall construction program, underscoring MAHY Khoory's capability to deliver premium climate-control solutions for sophisticated, high-value residential developments."
    },
    {
        id: 24,
        text: "DAMAC Canal Crown is a prestigious luxury residential development by DAMAC Properties, prominently located along the Dubai Canal in Business Bay. Comprising two elegant towers of approximately 38 storeys each, the project offers panoramic waterfront views and a diverse collection of contemporary residences ranging from studios to multi-bedroom homes. Designed by renowned international architects, Canal Crown blends refined urban living with world-class amenities, including observation decks, landscaped podiums, gym and spa facilities, and recreational spaces overlooking one of Dubai's most desirable waterways.",
        involvement: "For this landmark mixed-use development, MAHY Khoory & Co. LLC supplied customized Grundfos Hydro booster sets factory-assembled, pre-tested pumping systems engineered specifically for water pressure boosting and distribution in high-rise residential infrastructure. Grundfos Hydro booster sets are complete, ready-to-install solutions that integrate multiple centrifugal pumps (such as CM, CMV, or CR series), manifolds, intelligent controls, valves, and accessories into a single compact package. These systems are designed to deliver consistent and efficient pressurized water supply across complex vertical plumbing networks, a critical requirement for a development of Canal Crown's scale and height.",
        contribution: "The Hydro booster sets supplied by MAHY Khoory were carefully specified to meet the project's stringent performance and reliability requirements, including:",
        items: [
            "Reliable mains water pressure boosting - Ensuring stable and adequate water supply to upper floors and throughout apartment risers",
            "Energy-efficient operation - Optimized hydraulic design and intelligent controls that reduce overall energy consumption",
            "Plug-and-pump installation - Factory-assembled and tested units that simplify installation and minimize on-site labor and commissioning time",
            "Redundancy and resilience - Multiple pumps within each booster set enabling uninterrupted operation even if individual units are offline, enhancing system uptime"
        ],
        impact: "By supplying high-quality Grundfos Hydro booster sets, MAHY Khoory & Co. LLC strengthened Canal Crown's water infrastructure backbone ensuring seamless, reliable, and sustainable water delivery for residents. This contribution supports the development's overall operational excellence and aligns with the developer's objectives for comfort, reliability, and long-term performance reinforcing DAMAC Canal Crown's position as a premier luxury residential address along the Dubai Canal."
    },
];