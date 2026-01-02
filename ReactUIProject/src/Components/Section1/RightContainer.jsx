import React from 'react'
import RightCardd from './RightCardd'

const ImageContainer = (props) => {
  return (
    <div className='p-6 h-full w-3/4 flex overflow-x-auto no-scrollbar flex-nowrap gap-4' >
      {props.users.map(function(elem,idx) {
        return <RightCardd key={idx} id={idx} color={elem.color} img={elem.img} intro={elem.intro} tag={elem.tag} />
      })}
    </div>
  )
}

export default ImageContainer