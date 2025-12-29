import { getTranslations } from 'next-intl/server'
import Image from 'next/image'
import React from 'react'

async function Explore() {
    const t = await getTranslations("AboutUsPage.Explore");
    const data = [
        {
            label: t("Label1"),
            heading: t("Heading1"),
            text: t("Text1"),
            image: "/gallery/gallery-1.jpg"
        },
        {
            label: t("Label2"),
            heading: t("Heading2"),
            text: t("Text2"),
            image: "/gallery/gallery-2.jpg"
        },
        {
            label: t("Label3"),
            heading: t("Heading3"),
            text: t("Text3"),
            image: "/gallery/gallery-3.jpg"
        },
        {
            label: t("Label4"),
            heading: t("Heading4"),
            text: t("Text5"),
            image: "/gallery/gallery-4.jpg"
        },
        {
            label: t("Label5"),
            heading: t("Heading5"),
            text: t("Text5"),
            image: "/gallery/gallery-5.jpg"
        },
    ];

    return (
        <div className='pt-20'>
            <h2 className='text-3xl lg:text-5xl font-black text-center px-5'>{t("Heading")}</h2>
            <p className='mt-4 lg:mt-6 mb-15 lg:text-xl text-gray-800 text-center px-5'>{t("Text")}</p>
            <div className='grid md:grid-cols-4 w-full h-screen md:h-[70vh]'>
                {data.map((item, i) => (
                    <div key={i} className={`relative group ${i === 0 && "col-span-2 row-span-2"}`}>
                        <button className="absolute inset-0 z-10" aria-label="open" />
                        <Image src={item.image} alt={item.label} fill style={{ objectFit: "cover" }} />
                        <div className="absolute -bottom-4 left-5 right-5 z-20 transition-all duration-300 group-hover:bottom-5 group-focus-within:bottom-5">
                            <p className="text-white absolute bottom-9 font-semibold text-lg group-hover:static group-focus-within:static">
                                {item.label}
                            </p>
                            <div className="opacity-0 transition-all duration-300 group-hover:opacity-100 group-focus-within:opacity-100">
                                <p className="text-gray-100 font-medium mt-1">{item.heading}</p>
                                <p className="text-gray-200 text-sm mt-2">{item.text}</p>
                            </div>
                        </div>
                        <div className="absolute inset-0 bg-linear-to-t from-black/60 to-transparent" />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Explore