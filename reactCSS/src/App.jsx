import React from 'react'
import Button from './Components/Button/Button'
import Header from './Components/Header/Header'
import { Route, Routes } from 'react-router-dom'
import Home from './Home'
import Navbar from './Components/Navbar/Navbar'

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/Header' element={<Header />} />
        <Route path='/Button' element={<Button />} />
      </Routes>
    </div>
  )
}

export default App
