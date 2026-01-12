import React, { useState } from 'react'
import './App.css'   // Import external CSS

const App = () => {
  // Example state values
  const [num, setNum] = useState(10)
  const [user, setUser] = useState("John Doe")
  const [array, setArray] = useState([12, 32, 34, 45])

  function updateNum() {
    setNum(num * 2)
    setUser("Jane Smith")
    setArray([32, 43, 343, 545, 656])
  }

  // Counter state
  const [count, setCount] = useState(0)

  function increaseCount() {
    setCount(count + 1)
  }

  function decreaseCount() {
    setCount(count - 1)
  }

  function jump5num() {
    setCount(count + 5)
  }

  function Jump5Back() {
    setCount(count - 5)
  }
  return (
    <div className="app-container">

      <h1 className="heading">
        Value of Num is {num} <br />
        Array: {array.join(", ")} <br />
        Who is alpha: {user}
      </h1>
      <button className="btn" onClick={updateNum}>Update Values</button>

      <hr className="divider" />

      <h1 className="heading">{count}</h1>
      <button className="btn" onClick={increaseCount}>Increase</button>
      <button className="btn" onClick={decreaseCount}>Decrease</button>
      <button className="btn" onClick={jump5num}>Increase by 5</button>
      <button className="btn" onClick={Jump5Back}>Decrease by 5</button>
    </div>
  )
}

export default App