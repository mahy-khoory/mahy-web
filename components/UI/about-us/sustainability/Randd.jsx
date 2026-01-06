import React from 'react'
import AnimatedLines from '../../AnimatedLines'

function RandD() {
  const items = [
    { title: "R&D personnel", count: "33000", unit: " (48.5% of total employees)" },
    { title: "R&D investment (2019-2024) RMB", count: "117.07", unit: "billion" },
    { title: "As a percentage of operating revenue approximately", count: "20", unit: "%" },
    { title: "Global patent applications", count: "93,000", unit: " (including 5000 AI patents)" },
    { title: "Accumulated Chinese patents", count: "11", unit: " gold awards" },
    { title: "Patents' technological value", count: "45", unit: " billion" },
  ]
  return (
    <div className='max-w-6xl mx-auto lg:mt-10 px-4 lg:px-0'>
      <AnimatedLines />
      <h2 className='text-center font-semibold text-3xl pt-1'>R&D investment</h2>
      <div className='grid grid-cols-1 lg:grid-cols-3 mt-10 bg-[#e3eaee] p-8 lg:p-15 gap-12 rounded-3xl'>
        {items.map((items, i) => (
          <div key={i}>
            <p className='font-medium mb-3'>{items.title}</p>
            <span className='text-5xl font-semibold'>{items.count}</span>
            <span className=''>{items.unit}</span>
          </div>
        ))}
      </div>
    </div>
  )
}

export default RandD