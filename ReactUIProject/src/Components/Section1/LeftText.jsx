import React from 'react'
import { ArrowUpRight } from 'lucide-react';
const LeftText = () => {
  return (
    <div className='h-full w-1/3 flex flex-col justify-between '>
      <div className='p-8'>
        <h1 className='text-5xl font-bold leading-tight mb-8'>Discover  <span className='text-red-800 font-extrabold '>Amazing</span> <br />Places</h1>
        <p className='text-lg text-gray-800'>Explore the world's most beautiful destinations with us. From stunning beaches to majestic mountains, we have it all.</p>
      </div>
      <div>
        <i><ArrowUpRight size={70} /></i>
      </div>
    </div>
  )
}

export default LeftText
