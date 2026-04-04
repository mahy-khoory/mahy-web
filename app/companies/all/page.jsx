import ScrollTimeline from "@/components/ScrollTimeline";
import SubPageHeading from "@/components/UI/SubPageHeading";
import React from "react";

function AllCompaniesPage() {
    const companies = [
        {
            title: "MAHY Khoory Group of Companies",
            texts: [
                "M.A.H.Y. Khoory & Co. LLC is the holding company of the MAHY Khoory Group, a diversified enterprise founded in 1930 and headquartered in Dubai. Over nine decades, it has evolved from an entrepreneurial venture into a major regional organization known for technical expertise and operational reliability. The Group operates across the Middle East and international markets, serving customers in more than 29 countries. Its structure ensures strong governance, strategic leadership, and long-term value creation.",
                "The Group manages a wide portfolio of specialized companies spanning water and wastewater pumping systems, electromechanical and power solutions, HVAC, industrial machinery, recycling, packaging, logistics, waste management, and hospitality. With over 3,100 professionals representing 30+ nationalities, it maintains a strong presence across the UAE through offices, warehouses, factories, and service centres. Long-standing partnerships with global manufacturers strengthen its ability to deliver high-quality technologies and integrated solutions.",
                "Sustainability and responsible growth are central to the Group's philosophy, with significant operations in recycling, resource recovery, and environmental services. Its advanced infrastructure—including automated manufacturing facilities, logistics networks, and regional warehouses—supports efficient project execution and after-sales service. Looking ahead, the company focuses on controlled diversification, digital transformation, and technology adoption to remain competitive and resilient while delivering sustainable value to stakeholders.",
            ],
            image:
                // "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438758/0_-_mahy-khoory-group_azokpi.jpg",
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1775160129/grundfos_cklxxr.png",
        },
        {
            title: "M.A.H.Y. Khoory Trading",
            texts: [
                "M.A.H.Y. Khoory Trading is the commercial and distribution arm of the MAHY Khoory Group, supplying industrial, electromechanical, and building services equipment across the GCC and international markets. With decades of experience, it has become a trusted partner for contractors, developers, and institutional clients. The division supports major infrastructure, construction, and utility sectors by delivering high-quality products from leading global manufacturers. Its role is central to the Group's commercial and procurement activities.",
                "The division offers a comprehensive product portfolio that includes pumping systems, electrical equipment, HVAC solutions, valves, plumbing materials, solar products, and safety tools. This wide range enables it to act as a single-source supplier for integrated MEP and infrastructure needs. M.A.H.Y. Khoory Trading supports major regional projects through close collaboration with consultants and contractors, ensuring technical compatibility, timely delivery, and reliable after-sales service. Its client base spans channel partners, EPC contractors, utilities, industrial operators, and real estate developers.",
                "Headquartered in Dubai, the division maintains strong coverage across the GCC—particularly in the UAE and Oman—supported by extensive warehousing, logistics, and technical infrastructure. It also facilitates re-export to Africa and other international markets. With a focus on quality, compliance, and sustainability, the division promotes energy-efficient technologies and maintains rigorous inspection standards. Strategic partnerships, digital tools, and ongoing portfolio expansion position M.A.H.Y. Khoory Trading as a key driver of growth within the MAHY Khoory Group.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438750/1_-_mahy-khoory-trading_ecld8t.jpg",
        },
        {
            title: "Emirates International Equipment & Machinery L.L.C.",
            texts: [
                "Emirates International Equipment & Machinery L.L.C., a key subsidiary of the MAHY Khoory Group, is one of the UAE's leading providers of pumping and fluid-handling solutions. Established in 1989, the company supplies pumps, water heaters, HVAC equipment, sanitary fittings, and related systems for industrial, commercial, and residential applications. With a strong nationwide presence and a dealer network of over 300 partners, it supports major developments across high-rise, infrastructure, utilities, and oil & gas sectors. Its mission centers on delivering reliable, efficient, and high-performance pumping solutions backed by strong engineering support.",
                "The company offers a comprehensive portfolio that includes submersible pumps, booster sets, sewage pumps, hot-water circulation systems, valves, pressure vessels, and packaged pumping skids. Its services span system design, pump selection, turnkey supply, installation support, commissioning, and preventive maintenance. Emirates International Equipment & Machinery L.L.C. has contributed to numerous landmark UAE projects by working closely with consultants, developers, and MEP contractors from early design through final commissioning. Its ISO-certified quality framework and fully equipped service center ensure compliance, reliability, and long-term performance.",
                "Headquartered in Dubai with a large central warehouse and dedicated workshops, the company provides rapid distribution, technical support, and after-sales service across all emirates. It promotes energy-efficient technologies such as variable-speed systems and high-efficiency motors, aligning with the Group's sustainability goals. As the MAHY Khoory Group's dedicated pump solutions arm, it plays a strategic role in supporting both external clients and internal subsidiaries. Ongoing investments in smart pumping technologies, digital tools, and advanced service capabilities position the company as a preferred partner for complex pumping and water-management projects.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438762/2_-_emirates-international_jejxjx.png",
        },
        {
            title: "Greenland Equipment & Machinery Est. L.L.C.",
            texts: [
                "Greenland Equipment & Machinery Est. L.L.C., part of the MAHY Khoory Group since 1996, is a leading UAE distributor of HVAC, water heating, pumping, and electromechanical solutions. The company delivers integrated climate-control and fluid-handling systems backed by strong technical expertise and responsive service. Representing globally recognized brands, it supports commercial, residential, hospitality, and institutional projects with end-to-end supply, design assistance, and after-sales support. Its mission centers on sustainable, high-performance systems that enhance comfort and efficiency.",
                "Over the years, Greenland has evolved from a focused trading entity into a premier provider of energy-efficient HVAC and pumping technologies. Its product portfolio includes VRF/VRV air-conditioning systems, electric and solar water heaters, pressure booster and pumping systems, and energy-efficient electric motors. The company works closely with consultants, developers, and contractors on major UAE and international projects, offering system sizing, technical consultation, commissioning, and long-term maintenance. Its ISO-certified operations ensure compliance with ASHRAE, Eurovent, and IEC/EN standards.",
                "Headquartered in Dubai and supported by showrooms, warehouses, and a strong logistics network, Greenland ensures fast delivery and nationwide service coverage. It plays a strategic role within the MAHY Khoory Group as the primary HVAC and electromechanical trading arm, complementing the Group's broader engineering and pumping capabilities. With a focus on sustainability, innovation, and digital enablement—including smart controls, IoT-ready systems, and advanced energy-management tools—Greenland continues to strengthen its market presence and support the region's shift toward efficient, environmentally responsible building systems",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1775160049/greenland-mech_uenskm.jpg",
        },
        {
            title: "Al Mehwar Alfede General Trading LLC",
            texts: [
                "Al Mehwar Alfede General Trading LLC, a member of the MAHY Khoory Group, is a specialized UAE-based trading company focused on mechanical and pumping solutions for building services and light industrial applications. Established in the early 2000s, it supplies a wide range of pumps, booster sets, fire-fighting systems, valves, fittings, and spare parts sourced from reputable international manufacturers. With a project-oriented approach and strong technical knowledge, the company supports contractors and facility operators across the Emirates.",
                "The company's portfolio includes centrifugal pumps, end-suction and axial-flow pumps, self-priming and submersible units, and fire-fighting pump systems, along with selected HVAC components such as cooling and belt-driven fans. Beyond equipment supply, Al Mehwar provides pump selection support, installation guidance, and limited maintenance assistance. Its solutions are deployed in residential water systems, commercial HVAC installations, and fire-fighting networks, with a strong presence in Dubai and Sharjah. The company also collaborates with other MAHY Khoory entities on larger or more complex projects.",
                "Operating from its Dubai office and warehouse, Al Mehwar ensures efficient distribution and maintains stock for fast order fulfillment, supported by light fabrication and testing facilities. It plays a complementary role within the MAHY Khoory Group by managing specific pump product lines and enhancing the Group's overall supply capabilities. With a focus on quality, compliance, and energy-efficient technologies, the company continues to expand its offerings through global partnerships and value-added services, strengthening its position as a trusted specialist in pumping solutions.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438717/4_-_al-mehwar_vpyemm.png",
        },
        {
            title: "Al Khoory Engineering",
            texts: [
                "Al Khoory Engineering is a specialized engineering subsidiary of the MAHY Khoory Group, focused on the design, supply, and execution of water and wastewater pumping systems. Built on the Group's long-standing expertise in fluid management, the company delivers engineered solutions for complex infrastructure, municipal, and industrial projects. Its mission emphasizes high-performance, resource-efficient systems that enhance reliability and support sustainable development. Over the years, it has evolved into a trusted partner for mission-critical pumping applications.",
                "The company provides end-to-end engineering services, including hydraulic analysis, equipment selection, system fabrication, turnkey installation, and commissioning. Its portfolio spans centrifugal, submersible, and vertical turbine pumps, packaged booster systems, duplex and triplex skids, and integrated control solutions. Al Khoory Engineering has executed major projects across high-rise developments, municipal networks, wastewater facilities, and fire-fighting systems. Supported by ISO-certified processes and compliance with international standards such as API, ANSI, and ISO, it ensures technical rigor and long-term system performance.",
                "Headquartered in Dubai with engineering offices, workshops, and a dedicated service centre in Ras Al Khor, the company supports projects across the UAE and selected Gulf markets. As the Group's core technical arm for pumping projects, it works closely with trading and service divisions to deliver cohesive, high-quality solutions. With ongoing investments in smart pumping technologies, IoT-enabled monitoring, and specialized applications such as desalination and industrial process systems, Al Khoory Engineering continues to strengthen its role as a leader in engineered pumping solutions.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438739/5_-_mahy-khoory-engineering_u8wblr.jpg",
        },
        {
            title: "Union Paper Mills",
            texts: [
                "Union Paper Mills (UPM), established in 1988, is the MAHY Khoory Group's flagship recycled paper manufacturing facility and one of the UAE's pioneering large-scale paper recycling operations. Located in Dubai, it converts post-consumer and industrial wastepaper into high-quality recycled linerboard and fluting medium for regional and international packaging markets. As a core pillar of the Group's circular manufacturing ecosystem, UPM supports sustainability, waste reduction, and industrial localization.",
                "The mill produces a wide range of recycled paperboard grades—including Test liner, Fluting, Core Board, and Semi kraft—serving corrugated box manufacturers, packaging converters, and industrial users. With a current production capacity of around 500 tonnes per day and expansion plans targeting 650 tonnes, UPM plays a vital role in the Gulf's packaging supply chain. Its operations are supported by advanced pulping systems, high-speed paper machines, automated quality control, and ISO-certified management systems covering quality, environment, health & safety, and energy.",
                "UPM is deeply integrated within the MAHY Khoory Group's recycling ecosystem, working closely with waste collection and packaging subsidiaries to enable a closed-loop model. Sustainability is central to its mission, with continuous improvements in energy efficiency, water usage, and waste recovery. Ongoing investments in automation, digital monitoring, and new recycled paper grades ensure UPM remains a leading, forward-looking manufacturer supporting the region's circular economy and growing packaging industry.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438717/6_-_union-paper-mills_a7rhay.jpg",
        },
        {
            title: "Al Dhafra Paper Manufacturing",
            texts: [
                "Al Dhafra Paper Manufacturing, established in 2017 in Abu Dhabi's ICAD III, is the MAHY Khoory Group's dedicated recycled containerboard mill and one of the region's most advanced sustainable paper manufacturing facilities. Producing around 690 tonnes of recycled Test liner and Fluting Medium per day, the mill converts 100% recovered wastepaper into high-quality packaging materials. Its operations are supported by state-of-the-art production lines, continuous technology upgrades, and strict compliance with environmental and regulatory standards.",
                "The facility plays a central role in the Group's integrated recycling ecosystem, working alongside Union Paper Mills and in-house waste collection operations to process over 1,300 tonnes of recovered paper daily. Al Dhafra Paper Manufacturing supplies major packaging producers across the UAE, the Middle East, and select international markets, ensuring regional self-sufficiency in recycled containerboard. Recent investments—such as the 2024 partnership with Valmet to enhance dewatering and energy efficiency—underscore its commitment to innovation and operational excellence.",
                "Sustainability is at the core of the mill's mission, with operations designed to reduce landfill waste, conserve natural resources, and lower carbon emissions through closed-loop water systems and energy-efficient processes. As a strategic pillar of the MAHY Khoory Group, Al Dhafra Paper Manufacturing strengthens the Group's circular manufacturing model and supports the region's transition toward environmentally responsible packaging. With advanced infrastructure, ISO-certified systems, and a skilled leadership team, the mill continues to advance as a leading force in sustainable paper production.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438766/7_-_al-dhafra-paper_wt16se.jpg",
        },
        {
            title: "Union Wood Works",
            texts: [
                "Union Wood Works is the MAHY Khoory Group's dedicated wood recycling and engineered wood manufacturing subsidiary, specializing in the production of compressed wood blocks made entirely from 100% recycled wood fibers. By converting discarded wood into durable, high-performance eco-wood products, the company supports regional sustainability goals and reduces reliance on natural forest resources. Its operations play a central role in advancing the Group's circular manufacturing model across the GCC.",
                "The company manufactures engineered wood blocks using advanced processing systems that transform sawdust, shavings, and scrap timber into uniform, high-density products suitable for construction, packaging, furniture, and industrial applications. With automated production lines, strict quality controls, and ISO-certified processes, Union Wood Works delivers consistent, large-volume output to customers across the UAE, GCC, and international markets. Its products offer a sustainable, cost-effective alternative to solid timber without compromising performance.",
                "As part of the MAHY Khoory Group's Manufacturing Division, Union Wood Works strengthens the Group's environmental footprint by converting wood waste into valuable industrial materials. The company maintains strong compliance, safety, and environmental standards while continuously investing in innovation—from upgraded hydraulic press systems to next-generation eco-wood composites. Through its commitment to sustainability and technological advancement, Union Wood Works positions itself as a regional leader in engineered recycled wood solutions.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438767/8_-_union-paper-works_nnh5oi.png",
        },
        {
            title: "Recyclable Waste Management Division",
            texts: [
                "The Recyclable Waste Management Division (RWMD) is the Dubai-based recycling arm of the MAHY Khoory Group, responsible for collecting, consolidating, and supplying recyclable materials—primarily waste paper and cardboard—to the Group's paper manufacturing facilities. As a core component of the Group's circular economy model, RWMD processes over 1,300 metric tonnes of waste paper per day, ensuring a stable and sustainable flow of recovered fibre. Its mission focuses on maximizing landfill diversion and supporting the UAE's environmental objectives through efficient, scalable recycling solutions.",
                "RWMD provides comprehensive recycling services, including scheduled paper and cardboard collection, multi-material recycling, on-site segregation support, and closed-loop recycling integration with the Group's mills. Operating across Dubai and the Northern Emirates, the division services schools, factories, warehouses, offices, and commercial centers through daily collection routes and drop-off facilities. Its operations significantly reduce landfill dependency, conserve natural resources, and enhance recycling participation across the region.",
                "Strategically, RWMD is vital to the MAHY Khoory Group's manufacturing and sustainability goals by securing locally sourced recycled fibre, reducing reliance on imported raw materials, and enabling 100% recycled content in paper products. The division maintains strict regulatory compliance, supported by trained teams, modern infrastructure, and digital tracking systems. Through continuous innovation—such as route optimization, low-emission vehicles, and customer reporting tools—RWMD reinforces its role as a leading, environmentally responsible recycling provider in the UAE.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438762/9_-_recyclable-waste_ktxefe.jpg",
        },
        {
            title: "Al Dhafra Waste Collection LLC",
            texts: [
                "Al Dhafra Waste Collection LLC is the MAHY Khoory Group's specialized waste collection and recycling company serving the Emirate of Abu Dhabi. Established to extend the Group's circular manufacturing model, it plays a central role in securing locally sourced recyclable materials for the Group's paper mills. The company's mission focuses on delivering reliable, efficient, and environmentally responsible recycling services that support Abu Dhabi's sustainability and waste-reduction goals.",
                "With a comprehensive service portfolio, Al Dhafra Waste Collection manages large-scale paper and cardboard collection, on-site segregation, and multi-material recycling for plastics and metals. Its operations span residential, commercial, and industrial areas, supported by a modern fleet of compactor trucks, flatbeds, and mobile balers. Close coordination with the Group's recycling and manufacturing divisions ensures optimized material flow and contributes to the Group's daily handling capacity of up to 1,300 metric tonnes of recovered material.",
                "Strategically positioned within the Group's environmental services ecosystem, the company strengthens feedstock security, reduces transportation costs, and enhances supply chain resilience. Its commitment to regulatory compliance, safety, and continuous improvement ensures high-quality, traceable operations across Abu Dhabi. Through landfill diversion, resource recovery, and operational innovation, Al Dhafra Waste Collection supports the UAE's circular economy ambitions while helping clients achieve their own sustainability objectives.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438762/10_-_al-dhafra-waste-collection_cbexcl.jpg",
        },
        {
            title: "Around Continent Waste Collection",
            texts: [
                "Around Continent Waste Collection is a key environmental services subsidiary of the MAHY Khoory Group, specializing in the collection, handling, and transportation of general waste, construction and demolition waste, hazardous waste, and both solid and liquid waste streams. Operating under approved UAE regulatory permits, the company ensures that all waste is managed and transported safely and responsibly. Its mission centers on delivering compliant, reliable waste logistics that protect public health and the environment while supporting diverse industrial and commercial sectors.",
                "The company provides a wide range of licensed services, including general waste collection, C&D waste handling, hazardous waste transport, and the movement of regulated solid and liquid waste such as oils, sludge, and chemical residues. Supported by trained personnel and a specialized fleet—tanker trucks, sealed containers, and regulated-waste vehicles—Around Continent Waste Collection serves industries such as manufacturing, construction, logistics, and institutional facilities. It coordinates closely with approved treatment and disposal facilities to ensure full regulatory compliance and traceability across all waste movements.",
                "Strategically, Around Continent Waste Collection strengthens the MAHY Khoory Group's environmental services portfolio by focusing on compliant waste logistics rather than recycling operations. The company maintains strict safety, quality, and regulatory standards through advanced tracking systems, digital waste manifests, and rigorous vehicle inspection programs. By ensuring controlled waste handling and promoting safe practices at source, it plays a vital role in minimizing environmental risks and supporting the UAE's broader sustainability and compliance objectives.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438741/11_-_around-continent-waste_zezot5.jpg",
        },
        {
            title: "Al Etihad Waste Management Services LLC",
            texts: [
                "Al Etihad Waste Management Services LLC is the MAHY Khoory Group's dedicated recyclable waste management subsidiary in the Sultanate of Oman. Established in 2013 and now fully owned by the Group, it has grown into one of Oman's leading recycling operators. The company delivers structured, scalable, and modern waste management solutions that support national sustainability goals. Its mission aligns with advancing responsible waste practices and contributing to Oman's circular economy transition.",
                "The company provides comprehensive recycling services, including collection of paper, plastics, metals, and other recyclables, along with segregation systems, industrial baling solutions, and community awareness programs. With branches in Muscat, Sohar, Salalah, and Al Buraimi, Al Etihad Waste Management ensures nationwide coverage supported by dedicated fleets and trained personnel. Collected materials are sorted, processed, and directed to approved recycling partners or export markets, ensuring efficient resource recovery.",
                "Strategically, Al Etihad Waste Management strengthens the MAHY Khoory Group's regional presence and reinforces its leadership in environmental services beyond the UAE. The company operates with strong governance, regulatory compliance, and a commitment to quality, safety, and innovation. Through modern infrastructure, advanced recycling techniques, and active community engagement, it plays a vital role in reducing landfill dependency and supporting Oman's long-term sustainability and circular economy ambitions.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438739/12_-_etihad-waste-management_y5mnza.jpg",
        },
        {
            title: "Clean Earth LLC",
            texts: [
                "Clean Earth LLC is a Dubaibased environmental services company specializing in the collection, recovery, and recycling of industrial and commercial waste streams. With a strong commitment to sustainability and regulatory compliance, the company supports Dubai's longterm environmental and circular economy goals. Its operations focus on transforming highvalue recyclable materials into reusable resources, helping businesses reduce landfill dependency and improve environmental performance.",
                "The company offers a targeted portfolio of recycling services, including used industrial oil collection, used cooking oil recovery, metal and iron scrap recycling, and glass scrap collection. Supported by trained logistics teams and compliant vehicles, Clean Earth LLC ensures safe, documented, and environmentally responsible waste handling. Its structured collection programs and traceability systems enable clients to maintain full compliance with Dubai's wastemanagement regulations while optimizing operational efficiency.",
                "Sustainability is central to Clean Earth LLC's value proposition, enabling clients to conserve resources, reduce pollution, and support circular supply chains. By serving sectors such as hospitality, manufacturing, retail, and institutional facilities, the company provides tailored recycling solutions that enhance corporate environmental responsibility. Through reliable operations and strong recycling partnerships, Clean Earth LLC acts as a trusted partner for organizations seeking to meet regulatory requirements and strengthen their sustainability commitments.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438758/0_-_mahy-khoory-group_azokpi.jpg",
        },
        {
            title: "Solid Waste Management Division",
            texts: [
                "The Solid Waste Management Division (SWMD) of the MAHY Khoory Group provides integrated industrial waste management solutions across the UAE, converting waste into valuable resources while supporting circular economy goals. Initially created to eliminate landfill dependency for in-house waste, SWMD now operates as a self-sustaining division serving both internal operations and external clients. With advanced processing systems and strict regulatory compliance, it has achieved 100% internal waste recovery and established itself as a trusted partner in sustainable waste management.",
                "SWMD's core operations include processing approximately 300 tons per day of wood waste, converting it into biomass fuel for waste-to-energy applications. It also manages green waste for Dubai Municipality, supplying processed material to partnered energy plants. Beyond energy recovery, SWMD supplies wood chips to the Group's manufacturing divisions and external industrial users. Additionally, the division processes pulper reject, recovering pulp and converting non-recoverable waste into RDF, positioning itself as a pioneer in resource recovery solutions for industrial clients.",
                "Sustainability is central to SWMD's mission, with significant contributions toward Dubai Municipality's zero wood waste to landfill vision. By promoting source segregation and material awareness, it helps waste generators reduce costs and maximize resource value. Operating from strategically located facilities in Dubai, SWMD ensures efficient logistics and 24/7 service availability. Through partnerships with regulatory authorities and continuous innovation, the division enhances resource efficiency, supports municipal sustainability programs, and reinforces the UAE's long-term environmental goals.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438747/14_-_solid-waste_komaxr.jpg",
        },
        {
            title: "Union Sustainable Packaging Solutions",
            texts: [
                "Union Sustainable Packaging Solutions (USPS), part of the MAHY Khoory Group, is a Dubai-based manufacturer specializing in engineered wooden packaging products. Evolving from Union Wood Works, the company operates a fully automated facility producing compressed wooden pallet blocks from 100% reclaimed wood. As one of the largest manufacturers in the GCC, USPS ensures efficient global supply with minimal lead times. Its strategic partnership with PalletBiz further enhances its international reach and supply chain capabilities.",
                "USPS offers a wide range of wooden packaging solutions, including new and refurbished pallets, crates, boxes, pallet collars, and dunnage. It also provides value-added services such as pallet repair, pooling, buy-back, and rental programs to extend product life and reduce waste. A key innovation is its compressed pallet blocks made from recycled materials, which are uniform, durable, and compliant with ISPM-15 standards. These products serve diverse industries such as logistics, manufacturing, FMCG, agriculture, and pharmaceuticals.",
                "Sustainability is central to USPS operations, with a strong focus on recycling, reuse, and waste reduction. Its processes use chemical-free, recycled wood to produce eco-friendly packaging while supporting circular economy principles. Backed by advanced manufacturing, in-house design expertise, and strict quality standards, USPS delivers reliable and customized solutions. The company strengthens MAHY Khoory Group's position in industrial and environmental sectors by combining local expertise with global partnerships.",
            ],
            image:
                // "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438764/15_-_union-packaging_uugj62.jpg",
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/q_auto/f_auto/v1775159998/palletbiz_qeqscs.jpg"
        },
        {
            title: "National Paper Industry (S.P.S - L.L.C)",
            texts: [
                "National Paper Industry (S.P.S – L.L.C), part of the MAHY Khoory Group, is a leading manufacturer of corrugated cartons and packaging solutions headquartered in Ajman, UAE. Operating from a 180,000 sq. ft. facility with over 157 professionals, the company has built a strong reputation for reliability, technical expertise, and innovation. Its state-of-the-art manufacturing setup enables the production of high-quality corrugated packaging tailored to diverse industry needs, serving both domestic and regional markets.",
                "The company specializes in single-wall and double-wall cartons, custom-designed boxes, die-cut packaging, heavy-duty configurations, and printed corrugated solutions. Offering end-to-end services from design and prototyping to large-scale production, NPI supports industries such as FMCG, consumer electronics, industrial products, and agriculture. By customizing carton strength, dimensions, and print quality, it provides durable, branded, and cost-effective packaging solutions for both large enterprises and SMEs.",
                "NPI's advanced facility is equipped with automated corrugators, flexographic printing lines, die-cutters, and finishing systems, supported by in-house quality control labs. Integrated with Union Paper Mills, the company benefits from a steady supply of recycled paper, reinforcing its circular manufacturing model. Sustainability is central to its operations, with recycled raw materials, waste reduction practices, and energy-efficient equipment minimizing environmental impact. Backed by experienced leadership and a skilled workforce, NPI continues to expand capacity and strengthen its position as a trusted packaging partner in the UAE and regional markets.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438748/16_-_national-paper_vsgpit.jpg",
        },
        {
            title: "Greenland General Transport",
            texts: [
                "Greenland General Transport is the dedicated logistics and transportation division of the MAHY Khoory Group, established to provide reliable and integrated transport solutions across the Group's diverse businesses. With a modern fleet of heavy-duty trucks, delivery vehicles, and passenger buses, the division ensures seamless movement of goods, equipment, and personnel across the UAE. It plays a vital role in supporting the Group's trading, manufacturing, engineering, automotive, environmental, and hospitality operations through controlled, cost-effective, and timely logistics services.",
                "The division's mission is to deliver safe, dependable, and efficient transportation solutions while continuously improving service reliability and operational excellence. Its vision is to evolve into a leading regional logistics provider recognized for efficiency, safety, and technology-enabled fleet management. Over time, Greenland General Transport has expanded its scale and capabilities, enhancing its fleet, infrastructure, and operational coverage to meet complex logistics demands and support landmark projects across Dubai, Abu Dhabi, and other Emirates.",
                "Core services include intra-group logistics, project and heavy transport, staff transportation, and general cargo distribution. With nationwide coverage and readiness to extend into the GCC, the division ensures continuity and responsiveness across operations. It emphasizes safety, compliance, and sustainability through modern fleet management, GPS tracking, preventive maintenance, and fuel-efficient practices. By integrating innovation and digital enablement, Greenland General Transport strengthens the MAHY Khoory Group's execution capability, enabling rapid mobilization, operational transparency, and long-term growth.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438744/17_-_greenland-transport_voakzk.jpg",
        },
        {
            title: "Senan Industry LLC",
            texts: [
                "Senan Industry LLC, part of the MAHY Khoory Group, is a specialized manufacturer of rigid plastic packaging solutions based in Ras Al Khor Industrial Area, Dubai. The company produces blow-moulded plastic containers such as jerrycans, bottles, and industrial drums for liquid applications. Its modern facility, equipped with advanced machinery from Germany, Switzerland, and Japan, allows for high-volume, consistent, and customized production. A key strength lies in its vertical integration, with in-house injection moulding for caps and closures ensuring precision, quality, and cost efficiency.",
                "The company offers a wide range of products and services including packaging for automotive oils, lubricants, chemicals, agrochemicals, and food and beverage applications. Its end-to-end solutions cover container and closure design, Mold fabrication, blow moulding, injection moulding, and quality assurance. Senan Industry serves diverse sectors such as automotive, food and beverage, agriculture, and industrial chemicals, catering to both large manufacturers and private-label producers. With advanced CAD/CAM systems and automated inspection, it ensures compliance, durability, and tailored packaging systems using HDPE and PET materials.",
                "Strategically integrated within the MAHY Khoory Group, Senan Industry benefits from synergies in recycling and sustainability, incorporating recycled materials into production. It emphasizes eco-friendly practices such as designing reusable containers, recycling scrap, and reducing emissions through local manufacturing. The company has supported large-scale projects for government and institutional clients, demonstrating flexibility and reliability. Backed by an experienced leadership team and skilled workforce, Senan Industry operates continuously to meet demand, reinforcing its reputation as a trusted, ISO-certified packaging partner in the UAE and regional markets.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438753/18_-_senan-industry_yiajzi.jpg",
        },
        {
            title: "Pure Energy Construction LLC",
            texts: [
                "Pure Energy Construction LLC, established in 2017 as part of the MAHY Khoory Group, is the renewable energy EPC arm dedicated to supporting the UAE's clean energy transition. The company specializes in solar photovoltaic (PV) systems and select small-scale wind projects, transforming rooftops, carports, ground-mounted sites, and open land into efficient energy assets. Leveraging the Group's engineering and project execution expertise, Pure Energy delivers bankable renewable energy projects with technical rigor and long-term reliability, aligned with national sustainability goals.",
                "Its integrated EPC model covers feasibility studies, system design, procurement of Tier-1 components, construction, installation, and commissioning of on-grid, off-grid, and hybrid solar systems. The company also provides operations and maintenance services, alongside EV charging infrastructure solutions. Serving commercial, industrial, and institutional clients across Dubai, Abu Dhabi, Ajman, and Al Ain, Pure Energy helps organizations reduce energy costs and carbon emissions while ensuring compliance and optimized system performance.",
                "Pure Energy applies advanced technologies including high-efficiency solar modules, smart inverters, battery storage, and digital monitoring platforms to maximize yield and reliability. Strategic partnerships with government entities, utilities, global technology providers, and financial institutions enable scalable, commercially viable projects. Sustainability is central to its mission, with a strong focus on reducing carbon emissions, lowering fossil fuel dependence, and promoting energy efficiency. Through innovation and disciplined execution, Pure Energy positions itself as a trusted EPC partner for organizations pursuing net-zero and ESG commitments in the UAE.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438764/19_-_pure-energy_wbprxe.jpg",
        },
        {
            title: "Pearl Marina Hotel Apartments",
            texts: [
                "Pearl Marina Hotel Apartments, part of the MAHY Khoory Group's hospitality portfolio, is a boutique property located in Dubai Marina. It offers 85 fully furnished serviced apartments ranging from studios to three-bedroom units, designed for both short- and long-term stays. With modern interiors, premium amenities, and panoramic views of the Marina, the property blends residential comfort with hotel-level service, making it ideal for business executives, families, and leisure travellers.",
                "The hotel provides a comprehensive serviced-apartment experience with equipped kitchens, spacious living areas, private balconies, and daily housekeeping. Guests enjoy 24-hour concierge services, on-site dining, and leisure facilities including a rooftop pool, fitness canter, sauna, steam rooms, and children's play area. Business travellers benefit from dedicated meeting rooms and conference facilities, while digital concierge platforms, smart technologies, and energy-efficient systems enhance convenience, security, and sustainability.",
                "Strategically positioned near Dubai's commercial hubs and leisure attractions, Pearl Marina Hotel Apartments caters to a diverse clientele through partnerships with travel agencies, corporate accounts, and real estate networks. Sustainability initiatives such as energy-efficient lighting, water-saving fixtures, and recycling practices align with Dubai's environmental goals. Managed by an experienced hospitality team, the property continues to upgrade its facilities, ensuring competitive service standards and consistent guest satisfaction.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438761/20_-_pearl-marina_jwoc7e.jpg",
        },
        {
            title: "Market Restaurant & Café",
            texts: [
                "Market Restaurant & Café is a contemporary casual dining venue located in Dubai Marina, operating under the MAHY Khoory Group's hospitality portfolio. Positioned as a modern neighborhood restaurant, it offers a relaxed and welcoming atmosphere for both hotel guests and the general public. Its convenient location near Pearl Marina Hotel Apartments makes it an accessible choice within a vibrant residential and leisure district. The restaurant emphasizes quality ingredients, thoughtful preparation, and consistent service standards.",
                "The restaurant provides an all-day dining experience with a diverse menu featuring international and regional cuisine. Offerings include salads, grilled meats, seafood, comfort food, desserts, and café-style beverages, catering to a wide range of tastes. In addition to dine-in services, it supports takeaway, delivery, and catering, making it suitable for casual meals, business lunches, and social gatherings. Its customer base includes residents, tourists, and professionals seeking a comfortable yet refined dining environment.",
                "Market Restaurant & Café focuses on delivering a seamless guest experience through efficient operations and modern technology. It utilizes integrated POS systems, digital reservations, and online ordering platforms to enhance service quality and convenience. Sustainability practices such as reducing food waste, using seasonal ingredients, and recycling materials are embedded in its operations. Backed by an experienced hospitality team, the restaurant maintains consistent quality while supporting local partnerships and community engagement.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438752/21_-_market-restaurant_cvo99s.jpg",
        },
        {
            title: "MAHY Khoory Motors",
            texts: [
                "MAHY Khoory Motors is the automotive division of the MAHY Khoory Group in Abu Dhabi, established to exclusively represent OMODA & JAECOO in the capital and Western Region. Launched in 2025, the company combines the Group's legacy in trading with a forward-looking approach to modern mobility. It plays a key role in introducing advanced hybrid and electric vehicles to the UAE market. With a focus on customer experience and brand excellence, it supports the Group's expansion into next-generation automotive solutions.",
                "The company operates a growing network of showrooms and service centers, offering a technology-driven retail and ownership experience. Its facilities feature digital configurators, interactive displays, and streamlined customer journeys from purchase to after-sales support. MAHY Khoory Motors provides comprehensive services including financing, maintenance, and genuine parts distribution. Backed by trained technicians and advanced infrastructure, it ensures reliability and high service standards across the region.",
                "Innovation and sustainability are central to MAHY Khoory Motors' strategy, with a strong emphasis on EV and hybrid technologies. Supported by partnerships with leading automotive manufacturers, the company is aligned with the UAE's vision for smart and sustainable mobility. It continues to invest in advanced platforms, AI-enabled features, and connected vehicle technologies. As part of the MAHY Khoory Group, it strengthens the organization's presence in future-ready industries while delivering modern mobility solutions.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1775283251/IMG_gwgb1p.png",
        },
        {
            title: "MAHY Khoory Automotive",
            texts: [
                "MAHY Khoory Automotive is the MAHY Khoory Group's strategic entry into the UAE automotive sector, focused on delivering modern, value-driven and technology-forward mobility solutions. In partnership with Dongfeng Motor Corporation, the division introduces a new generation of vehicles combining innovative design, intelligent features, and reliable performance. Its product range spans sedans, SUVs, pickup trucks, and electric vehicles, catering to diverse customer needs. This initiative reflects the Group's commitment to expanding into future-ready industries.",
                "The division offers a fully integrated automotive experience, including vehicle sales, after-sales service, and customer support solutions. State-of-the-art showrooms and service centers in Dubai and Abu Dhabi provide maintenance, diagnostics, repairs, and warranty services through certified technicians. Customers also benefit from financing options, roadside assistance, and comprehensive ownership support. These facilities are designed to ensure convenience, consistency, and high service standards across the UAE.",
                "MAHY Khoory Automotive emphasizes innovation and growth through digital engagement and advanced customer experiences. Its expanding network of showrooms and service facilities supports a strong national presence and accessibility. With plans to introduce more electric vehicles and smart mobility solutions, the division aligns with evolving market trends and technological advancements. Backed by the Group's legacy and expertise, it aims to become a trusted automotive partner in the UAE.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438750/23_-_mahy-automotive_la0ndw.jpg",
        },
        {
            title: "Union Nonwoven Industries",
            texts: [
                "Union Nonwoven Industries, part of the MAHY Khoory Group, is a specialized manufacturer of advanced nonwoven textile solutions based in Abu Dhabi. The company produces high-performance polypropylene and polyester fabrics designed for industrial, healthcare, hygiene, filtration, and construction applications. Operating from a modern, automated facility, it ensures consistent quality and precision through advanced production and quality-control systems. Its capabilities reflect the Group's focus on innovation and scalable manufacturing solutions.",
                "The company offers a diverse range of products including spunbond and meltblown fabrics, composite sheets, and geotextile materials. These are used in applications such as medical products, filtration systems, insulation, agriculture, and infrastructure projects. Union Nonwoven also provides technical advisory and customization services, supporting clients with material selection, specifications, and finishing treatments. Post-production services like cutting, packaging, and just-in-time delivery enhance integration into customer operations.",
                "Union Nonwoven serves markets across the GCC and MENA region, catering to industries such as healthcare, construction, water treatment, and automotive. Its operations emphasize innovation, with ongoing investment in R&D, advanced manufacturing technologies, and performance testing. Sustainability is a key focus, with efforts in waste reduction, recycling, and environmentally responsible production methods. Backed by experienced leadership and the MAHY Khoory Group's legacy, the company delivers reliable, high-quality technical textile solutions.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438758/0_-_mahy-khoory-group_azokpi.jpg",
        },
        {
            title: "Creative Solutions Green Building Consultancy",
            texts: [
                "Creative Solutions Green Building Consultancy is the MAHY Khoory Group's dedicated sustainability advisory arm, focused on environmentally responsible design and high-performance building operations. The consultancy combines architectural expertise with energy and environmental engineering to deliver practical, measurable solutions. It supports clients in achieving global green-building standards while aligning with the Group's sustainability vision. Based in the UAE, it serves as a center of excellence for sustainable development.",
                "The consultancy offers comprehensive services including green-building certification advisory (LEED, WELL, ESTIDAMA), energy audits, performance benchmarking, and system commissioning. It supports projects throughout the entire lifecycle—from design and construction to post-occupancy monitoring—ensuring sustainability goals are effectively implemented. Using advanced tools such as energy modeling and BIM, Creative Solutions delivers optimized energy and water performance. Its expertise helps clients improve efficiency, compliance, and long-term operational value.",
                "Creative Solutions serves a wide range of sectors including commercial, residential, hospitality, industrial, and public infrastructure projects. The firm collaborates with global partners, certification bodies, and engineering consultants to deliver integrated solutions. Its impact is measured through reduced energy consumption, lower costs, and verified sustainability outcomes. Backed by experienced professionals and aligned with MAHY Khoory Group's strategy, it plays a key role in advancing sustainable practices across the UAE.",
            ],
            image:
                "https://res.cloudinary.com/dpn6mdpxd/image/upload/v1774438758/0_-_mahy-khoory-group_azokpi.jpg",
        },
    ];
    return (
        <main>
            <SubPageHeading
                title={"All Companies"}
                image={"/gallery/gallery-2.jpg"}
            />
            <ScrollTimeline
                items={companies}
            />
        </main>
    );
}

export default AllCompaniesPage;
