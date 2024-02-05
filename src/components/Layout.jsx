import React from 'react'
import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'

const Layout = () => {
  return (
    <div className='relative w-full overflow-hidden'>
      <div className="absolute z-40 top-0 right-0 w-full">
        <Navbar/>
      </div>
      <Outlet/>
      <Footer/>
    </div>
  )
}

export default Layout