import React from 'react'
import Navagio from '../assets/navagio.jpg'
import { FaPlay } from 'react-icons/fa'
import Bali from '../assets/bali.jpg'
import Dominican from '../assets/dominican.jpg'
import Mara from '../assets/tsavo.jpg'
import Marie from '../assets/marie.jpg'
import Kebs from '../assets/kebs.jpg'




const HeroSection = () => {
  return (
    <div className='flex flex-row gap-2  bg-[#111e3d] '>
      <div style={{backgroundImage: `url(${Navagio})`}} className=' basis-1/3 h-[100vh] bg-cover py-16 flex flex-col items-center justify-center '>
       {/* <div className='absolute  top-0 right-0 w-full bg-opacity-20 h-full bg-black'></div> */}
       <div className='grid gap-2 '>
        <p className='text-md text-white capitalize'>Special deal</p>
        <h1 className='font-bold text-5xl text-white font-meriwether tracking-wider line-spacing-4'>Navagio <br/>  Greece</h1>
       </div>
       
       {/* reviews */}
       <div className='absolute bottom-24 w-1/3 left-20  '>
        <p>3 days</p>
        <div className='bg-[#111e3d] p-2 rounded-full w-1/2 flex items-center justify-between '>
          <div className='flex'>
          <img src={Marie} alt="" className='h-12 w-12 rounded-full' style={{ zIndex: 3 }} />
          <img src={Kebs} alt="" className='h-12 w-12 -translate-x-6 rounded-full' style={{ zIndex: 2 }} />
          <img src={Marie} alt="" className='h-12 w-12 -translate-x-12 rounded-full' style={{ zIndex: 1 }} />
          </div>
          <p className='text-gray-300 px-4 '>+16</p>
          

        </div>
       </div>
       
       </div>
       {/* middle */}
       <div className="w-32 grid place-items-center ">
       <div className=' w-22 -translate-x-[75%] bg-red-500 p-8 rounded-full'>
          <FaPlay size={22} className='text-white'/>
        </div>
       </div>

       {/* right */}
      <div className='basis-1/2 bg-opacity-90 flex flex-col '>
        <div className='basis-1/4'></div>
        {/* hero text */}
        <div className='  basis-1/4 grid grid-cols-2 gap-8'>
          <h2 className='text-6xl text-white font-bold font-syne tracking-wider leading-tight'>Let's make word tour</h2>
          <div className=''>
            <p className='text-lg text-gray-100 antialiased '>We intend to take you to the word's most and beautiful places. You also see how many wonders 
              God has made in the world.</p>
            
            <div className='mt-4'>
              <button className='bg-indigo-500 text-white rounded-full font-semibold px-8 py-3 text-xl font-syne'>
                Get Started</button>
                </div>
          </div>
        </div>

        {/* packages ads */}
        <div className=' py-8 grid grid-cols-3 gap-12 w-full '>
          {/* Your packages ads content here */}
          <div style={{backgroundImage: `url(${Bali})`}} className='relative h-[400px] bg-cover rounded-lg'>
            <div className='absolute bottom-4 left-4 w-full'>
              <h2>Nusa Penida</h2>

            </div>
          </div>

          {/* package 2 */}
          <div style={{backgroundImage: `url(${Dominican})`}} className=' relative h-[400px] bg-cover rounded-lg'>
            <div className='absolute bottom-4 left-4 w-full'>
              <h2>Nusa Penida</h2>

            </div>
          </div>

          {/* package 3 */}
          <div style={{backgroundImage: `url(${Mara})`}} className='relative h-[400px] bg-cover rounded-lg'>
            <div className='absolute bottom-4 left-4 w-full'>
              <h2>Nusa Penida</h2>

            </div>
          </div>
        </div>

      </div>
</div>
  )
}

export default HeroSection