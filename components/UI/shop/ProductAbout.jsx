import React from 'react'

function ProductAbout({ about, description }) {
    return (
        <div className='mt-10'>
            <h2 className='font-semibold text-gray-700 mt-8 text-lg border-b pb-2'>About</h2>
            <ul className='list-disc list-inside space-y-1 text-gray-800 font-light tracking-tight mt-4'>
                {about.map((item, i) => (
                    <li key={i} className='text-justify'>{item}</li>
                ))}
            </ul>
            <h2 className='font-semibold text-gray-700 mt-8 text-lg border-b pb-2'>Description</h2>
            <p className='text-gray-800 font-light tracking-tight text-justify mt-4'>{description}</p>
        </div>
    )
}

export default ProductAbout