import ScrollTimeline from '@/components/ScrollTimeline'
import SubPageHeading from '@/components/UI/SubPageHeading'
import React from 'react'

function AllCompaniesPage() {
    return (
        <main>
            <SubPageHeading
                title={"All Companies"}
                image={"/gallery/gallery-2.jpg"}
            />
            <ScrollTimeline
                items={[
                    { title: "1950", heading: "Pallion's Beginnings", text: "Palloys commences operations as Palloys Refining Co in Woollahra, Sydney, Australia, founded by Felix Parry (Felix Pisarewski), a Polish war hero who arrived in Australia as a refugee after the second world war. Palloys Refining Co's business is solely related to the refining of precious metals sourced from the jewellery and dental industries.", image: "/gallery/gallery-2.jpg" },
                    { title: "1980", heading: "Pallion's Beginnings", text: "Palloys commences operations as Palloys Refining Co in Woollahra, Sydney, Australia, founded by Felix Parry (Felix Pisarewski), a Polish war hero who arrived in Australia as a refugee after the second world war. Palloys Refining Co's business is solely related to the refining of precious metals sourced from the jewellery and dental industries.", image: "/gallery/gallery-3.jpg" },
                    { title: "2000", heading: "Pallion's Beginnings", text: "Palloys commences operations as Palloys Refining Co in Woollahra, Sydney, Australia, founded by Felix Parry (Felix Pisarewski), a Polish war hero who arrived in Australia as a refugee after the second world war. Palloys Refining Co's business is solely related to the refining of precious metals sourced from the jewellery and dental industries.", image: "/gallery/gallery-4.jpg" },
                    { title: "2020", heading: "Pallion's Beginnings", text: "Palloys commences operations as Palloys Refining Co in Woollahra, Sydney, Australia, founded by Felix Parry (Felix Pisarewski), a Polish war hero who arrived in Australia as a refugee after the second world war. Palloys Refining Co's business is solely related to the refining of precious metals sourced from the jewellery and dental industries.", image: "/gallery/gallery-5.jpg" },
                ]}
            />
        </main>
    )
}

export default AllCompaniesPage