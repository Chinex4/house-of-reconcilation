import { useState } from 'react'

import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import MainNavigation from './components/MainNavigation'

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<MainNavigation />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
