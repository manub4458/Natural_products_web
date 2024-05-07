"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from 'react-scroll'
import Mobnav from './Mobnav'
// import Mobnav from '../components/Mobnav'
const Skincare = () => {
  return (
    <>
    <div className=' bg-[url("/skincare.avif")] bg-cover head bg-opacity-20 bg-no-repeat h-[100vh]  '>
    <div className='nav text-white'>
<Navbar/>
  </div>
  <div className='mobnav'>
    <Mobnav />
  </div>

    <div className=' ml-20 mt-4 hair'>
        <h1 className='text-white font-semibold  armen text-3xl'>
        Private Label Skincare Products
        </h1>
    </div>

    <div className='ml-20 mt-8 lg:mt-2 hair'>
        <p className='text-white w-[35vw] hair_p leading-7 text-lg armen'>
        Welcome to NatureExpert Ayurvedic Pvt Ltd! We specialize in crafting 
         a wide array of skincare essentials, including gel face washes, face packs,
          creams, serums, toners, and more. With over 50 unique products in our skincare range,
          we offer something for everyone. Trust in our expertise to provide you with high-quality,  
          effective skincare solutions tailored to your needs. Discover the natural beauty of your skin 
           with NatureExpert.
        </p>
    </div>
<div className='flex gap-x-2 '>
<li
                    className='cursor-pointer'
                    ><Link to="section4" smooth={true} duration={500}>
                         <button
    className='bg-[#db5f7a] text-white rounded-lg p-2 ml-20 mt-4 armen'
    >
        Submit Enquiry
    </button>
                        </Link></li>

                        <li
                    className='cursor-pointer'
                    ><Link to="section3" smooth={true} duration={500}>
                          <button
    className='text-white bg-[#212121] rounded-lg p-2  mt-4 armen'
    >
        Call Now
    </button>




                    
                    
                    </Link></li>
</div>
    </div>
    
    </>
  )
}

export default Skincare