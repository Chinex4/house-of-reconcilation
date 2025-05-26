import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Give from './pages/Give'
import Branches from './pages/Branches';
import Sermons from './pages/Sermons';
import MainNavigation from './components/MainNavigation'

import './App.css'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainNavigation />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='/give' element={<Give />} />
          <Route path='branches' element={<Branches />} />
          <Route path="sermons" element={<Sermons />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
