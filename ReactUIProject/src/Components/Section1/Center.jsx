import React from 'react'
import LeftText from './leftText'
import RightContainer from './RightContainer'
const Center = (props) => {
  return (
    <div className='pt-8 pb-16 px-10 h-[80vh] flex  items-center gap-10 '>
      <LeftText/>
      <RightContainer users={props.users}/>
    </div>
  )
}

export default Center