import React, { useState } from "react"


const App = () => {
  const [num, setNum] = useState({user: 'vikas', age: 24})

  const onClicked = () => {
    console.log(num)
    // const newNum = [...num]
    // newNum.push(50)
    // setNum(prev => ({ ...prev, age: 25 }))
    setNum(prev => ({ ...prev, age: prev.age + 1 }))
    setNum(prev => ({ ...prev, age: prev.age + 1 }))
    
    
  }
  return (
    <div>
      <h1>{num.user},{num.age}</h1>
      <button onClick={onClicked}>Click</button>
    </div>

  )
}

export default App