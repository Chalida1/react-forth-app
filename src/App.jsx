import React from 'react'
import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import PageA from './views/PageA.jsx'
import PageB from './views/PageB.jsx'
import PageC from './views/PageC.jsx'


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PageA />} />
          <Route path="/login" element={<PageB />} />
          <Route path="/register" element={<PageC />} />
        
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App