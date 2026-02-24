import Link from 'next/link'
import React from 'react'

function DepartmentCard({ department, i, index, handleIndexChange, itemRefs }) {
    return (
        <div className={`w-8/12 md:w-5/12 flex-none cursor-pointer ${i !== index && "text-gray-500"}`} key={i}
            ref={(el) => (itemRefs.current[i] = el)}
            onClick={() => (handleIndexChange(i))}
        >
            <div className='h-4'>
                <div className={`${i === index ? "border-t-4" : "border-t-3 border-gray-300"}`} />
            </div>
            <p className='text-2xl font-semibold mt-3 mb-1'>{department.title}</p>
            <p className={`text-sm mt-4 ${i === index && "text-gray-60"}`}>{department.description}</p>
        </div>
    )
}

export default DepartmentCard