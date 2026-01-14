import React from 'react'

const App = () => {
  const submitHandler = (e) => {
    e.preventDefault()
    console.log('Form submitted')
  }
  // this is localStorage code
  const user = { name: 'liaam', age: 40, city: 'chicago' }
  const user1 = { name: 'sophia', age: 35, city: 'boston' }
  console.log('User Details:', user, user1)
  localStorage.setItem('user1', JSON.stringify(user1))
  const usera = JSON.parse(localStorage.getItem('user1'))
  console.log('Retrieved User:', usera)


  return (
    <div>
      <form onSubmit={(e) => { submitHandler(e) }}>
        <input type="text" placeholder='Enter your name' />
        <button type="submit">Submit</button>
      </form>
      APP
    </div>
  )
}

export default App
