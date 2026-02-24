import SolarPanelQuoteGrid from '@/components/Services/SolarPanel/SolarPanelQuoteGrid'
import SubPageHeading from '@/components/UI/SubPageHeading'
import React from 'react'

function GlobalWaterPressureTanksPage() {
    return (
        <main>
            <SubPageHeading
                title={"Global Water Solutions Pressure Tanks"}
                description={"Global Water Solutions Pressure Tanks are engineered to ensure efficient pressure control, system stability, and long service life in water supply applications. Designed for consistent performance, these tanks support smooth operation of pumps and water networks."}
                image={"/gallery/gallery-1.jpg"}
            />
            <div className='my-8'>
                <SolarPanelQuoteGrid
                    heading='Key Highlights'
                    text='Ideal for booster pump systems, filtration units, and residential or commercial water supply networks, Global Water Solutions tanks help reduce pump cycling, maintain steady pressure, and protect system components.'
                    items={[
                        "High-quality pressure vessels with durable construction",
                        "Designed for booster pumps and filtration systems",
                        "Improves system efficiency and pump lifespan",
                        "Suitable for residential, commercial, and industrial use"
                    ]}
                    quoteText="Global Water Solutions Pressure Tanks deliver reliable pressure management and dependable water system performance."
                />
            </div>
        </main>
    )
}

export default GlobalWaterPressureTanksPage