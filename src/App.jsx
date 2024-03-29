import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={'/'} element={<Layout/>}>
        <Route path={'/'} index element={<HomePage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App