import React from 'react'

const App = () => {
  const pageScrolling = (elem) => {
  if (elem > 0) {
    console.log('sedhaa scroll');
  } else {
    console.log('ulta scroll');
  }
}

return (
  <div>
    <div onWheel={(elem) => {
      pageScrolling(elem.deltaY)
    }}
      className='box'>
      <div className='page1'></div>
      <div className='page2'></div>
      <div className='page3'></div>
      <div className='page4'></div>
      <div className='page5'></div>
    </div>
  </div>
)
}


export default App