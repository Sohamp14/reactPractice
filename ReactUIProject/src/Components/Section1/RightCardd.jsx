import React from 'react'
import RightCardContaint from './RightCardContaint';
const RightCardd = (props) => {
    return (
        <div  className='h-full w-80 shrink-0 overflow-hidden rounded-4xl relative'>
            <img className='h-full w-full object-cover' src={props.img} alt="" />
            <RightCardContaint id={props.id} color={props.color} intro={props.intro} tag={props.tag} />

        </div>
    )
}

export default RightCardd