import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'
import About from './pages/About'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainNavigation />}>
          <Route index element={<Home />} />
          <Route path='/about' element={<About />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
