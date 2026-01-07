import CompaniesList from '@/components/UI/home/CompaniesList'
import SubPageHeading from '@/components/UI/SubPageHeading'
import React from 'react'

function IndusteriesPage() {
    return (
        <main className='pb-25'>
            <SubPageHeading
                title={"Our Industeries"}
                description={"We operate across diverse industries, delivering reliable solutions tailored to evolving market needs. Our expertise spans technology, infrastructure, energy, and industrial sectors. We help organizations enhance efficiency, sustainability, and long-term growth."}
                image={"/gallery/gallery-8.jpeg"}
            />
            <CompaniesList />
        </main>
    )
}

export default IndusteriesPage