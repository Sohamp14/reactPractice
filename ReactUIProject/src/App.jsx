import React from 'react'
import Section1 from './Components/Section1/Section1'
import Section2 from './Components/Section2/Section2'
const App = () => {
  const users = [
    {
      img: "https://images.unsplash.com/photo-1749793716288-a5ab5ed3b0e1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDIxMHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium numquam nisi.",
      color: "blue",
      tag: "Satisfied"
    },
    {
      img: "https://images.unsplash.com/photo-1639422090693-49570a9f0127?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI4fHx8ZW58MHx8fHx8",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium numquam nisi.",
      color: "red",
      tag: "Underservered"
    },
    {
      img: "https://images.unsplash.com/photo-1649712041612-021cf78bca23?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDk4fHx8ZW58MHx8fHx8",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium numquam nisi.",
      color: "green",
      tag: "underbanked"
    },
      {
      img: "https://images.unsplash.com/photo-1648371431385-bd73c0dd6e42?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE0OHx8fGVufDB8fHx8fA%3D%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium numquam nisi.",
      color: "orange",
      tag: "Business"
    },
      {
      img: "https://images.unsplash.com/photo-1683609553620-d85c01bc2ba5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDJ8fHxlbnwwfHx8fHw%3D",
      intro: "lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora accusantium numquam nisi.",
      color: "purple",
      tag: "underprivileged"
    },

  ]

  return (
    <div>
      <Section1 users={users} />
      <Section2 />
    </div>
  )
}

export default App