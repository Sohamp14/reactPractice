import { useState } from "react"
import React,{useEffect} from 'react'

const App = () => {
  const pageScrolling = (elem) => {
    if (elem > 0) {
      console.log('sedhaa scroll');
    } else {
      console.log('ulta scroll');
    }
  }

   {/* this is for useEffect hoock*/}
  const [num, setNum] = useState(0)
  const [num2, setNum2] = useState(100)

  useEffect(() => {
    console.log('useEffect called');
  }, [num, num2]);


  return (
    <div>
      <div onWheel={(elem) => {
        pageScrolling(elem.deltaY)
      }}
        className='box'>
        <div className='page1'></div>
        <div className='page2'></div>

      {/* this is for useEffect hoock*/}
        <h1>Num1: {num}</h1>
        <button onClick={() => setNum(num + 2)}>Increment</button>
        <h1>Num2: {num2}</h1>
        <button onClick={() => setNum2(num2 + 100)}>Increment</button>
      </div>
    </div>
  )
}


export default App