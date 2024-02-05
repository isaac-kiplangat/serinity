import React from 'react'
import Navagio from '../assets/navagio.jpg'
import { FaPlay } from 'react-icons/fa'
import Bali from '../assets/bali.jpg'
import Dominican from '../assets/dominican.jpg'
import Mara from '../assets/tsavo.jpg'
import Marie from '../assets/marie.jpg'
import Kebs from '../assets/kebs.jpg'
import { RxDividerVertical } from "react-icons/rx";
import { HiArrowLongRight } from "react-icons/hi2";
import { HiArrowLongLeft } from "react-icons/hi2";





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
        <p className=" my-4 font-medium text-lg text-gray-100 bg-gray-400 w-1/3 px-2 rounded-full bg-opacity-50 flex items-center gap-2">3 days  <RxDividerVertical className='text-white'/> 310 km</p>
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
       <div className="w-32 grid place-items-center relative">
       <div className=' w-22 -translate-x-[75%] bg-red-500 p-8 rounded-full'>
          <FaPlay size={22} className='text-white'/>
        </div>
        <div className='absolute bottom-4 left-8 flex flex-col items-center justify-center'>
          <div className='items-center flex justify-center flex-col'>
          <HiArrowLongRight size={40} className='text-white'/>
          <HiArrowLongLeft size={40}  className='text-white/60'/>
          </div>
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
          <div style={{backgroundImage: `url(${Bali})`}} className='relative h-[400px] bg-cover rounded-lg overflow-hidden'>
            <div className='absolute bottom-0 left-0 w-full bg-gray-400 bg-opacity-40'>
              <div className='px-4 py-2'>
              <h2 className='text-2xl text-white font-bold'>Nusa Penida</h2>
              <div className=' flex items-center gap-4'>
              <p className='font-medium text-white text-sm my-4 '> 2 days</p>
              <RxDividerVertical className='text-white'/>
              <p className='font-medium text-white text-sm my-4 '> 223  Km </p>
              </div>
              </div>

            </div>
          </div>

          {/* package 2 */}
          <div style={{backgroundImage: `url(${Dominican})`}} className=' relative h-[400px] bg-cover rounded-lg overflow-hidden'>
          <div className='absolute bottom-0 left-0 w-full bg-gray-400 bg-opacity-40'>
              <div className='px-4 py-2'>
              <h2 className='text-2xl text-white font-bold'>Zanzibar</h2>
              <div className=' flex items-center gap-4'>
              <p className='font-medium text-white text-sm my-4 '> 4 days</p>
              <RxDividerVertical className='text-white'/>
              <p className='font-medium text-white text-sm my-4 '> 123  Km </p>
              </div>
              </div>

            </div>
          </div>

          {/* package 3 */}
          <div style={{backgroundImage: `url(${Mara})`}} className='relative h-[400px] bg-cover rounded-lg overflow-hidden'>
           <div className='absolute bottom-0 left-0 w-full bg-gray-400 bg-opacity-40'>
              <div className='px-4 py-2'>
              <h2 className='text-2xl text-white font-bold'>Maasai Mara</h2>
              <div className=' flex items-center gap-4'>
              <p className='font-medium text-white text-sm my-4 '> 5 days</p>
              <RxDividerVertical className='text-white'/>
              <p className='font-medium text-white text-sm my-4 '> 823  Km </p>
              </div>
              </div>

            </div>
          </div>
        </div>

      </div>
</div>
  )
}

export default HeroSection