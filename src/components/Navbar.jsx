import React from 'react'
import { TbBeachOff } from "react-icons/tb";


const Navbar = () => {

  const navitems = [
    {link:"Home", path:"/"},
    {link:"Photos", path:"/"},
    {link:"Packages", path:"/"},
    {link:"Contact", path:"/"},

  ]
  return (
    <div className='bg-transparent  flex flex-row py-8 px-16'>
      <div className="basis-1/3 px-8">
        <h2 className='text-3xl font-syne font-semibold text-white underline flex gap-1 items-center'>
          <TbBeachOff className='' size={30}/>Serenity</h2>
      </div>
      <div className="w-32"></div>
      <div className="basis-1/2 flex items-center justify-between">
      {navitems.map((item)=>(

        <ul className='  flex items-center justify-between'>
          <li className='font-medium text-gray-200 hover:text-white text-md font-meriwether
           hover:underline hover:underline-offset-8 decoration-2 '>{item.link}</li>
        </ul>
          
          ))}
        <div className=''>
          <button className='py-2 px-8 bg-indigo-500 text-white text-md font-semibold font-syne rounded-full'>Sign Up</button>
        </div>

      </div>



    </div>
  )
}

export default Navbar