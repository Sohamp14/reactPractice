import React from 'react'
import { ArrowRight } from 'lucide-react'

const RightCardContaint = (props) => {
    return (
        <div className='h-full w-full absolute top-0 left-0 p-8 flex flex-col justify-between'>
            <h1 className='font-bold h-12 w-12 bg-gray-100 flex justify-center items-center rounded-full text-2xl'>{props.id+1}</h1>
            <div>
                <p className='text-lg text-shadow-2xl text-white leading-relaxed mb-8 '>{props.intro}</p>
                <div className='flex gap-2'>
                    <button style={{backgroundColor:props.color}} className='font-medium text-lg rounded-full text-white px-5 py-2'>{props.tag}</button>
                    <button style={{backgroundColor:props.color}} className='font-medium  text-lg rounded-full text-white px-3 py-2'><ArrowRight /></button>
                </div>
            </div>
        </div>
    )
}

export default RightCardContaint