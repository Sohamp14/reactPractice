import React from 'react'

const Card = (props) => {
  return (
    <div className='parent'>
        <div className='card'>
        <img src={props.img} alt="img" />
        <h1>{props.user} </h1>
        <h1>Age: { props.Age}</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <button>See Profile</button>
      </div>
    </div>
  )
}

export default Card