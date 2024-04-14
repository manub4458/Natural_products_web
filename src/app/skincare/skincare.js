import React from 'react'
import Navbar from '../components/Navbar'

const Skincare = () => {
  return (
    <>
    <div className=' bg-[url("/skincare.jpg")] bg-cover bg-opacity-20 bg-no-repeat h-[100vh] '>
    <div className='text-white'>
    <Navbar />
    </div>

    <div className=' ml-20 mt-4'>
        <h2 className='text-white font-semibold  roboto2 text-3xl'>
        Private Label Skincare Products
        </h2>
    </div>

    <div className='ml-20 mt-8'>
        <p className='text-white w-[35vw] leading-7 text-lg lato'>
        Welcome to NatureExpert Ayurvedic Pvt Ltd! We specialize in crafting 
         a wide array of skincare essentials, including gel face washes, face packs,
          creams, serums, toners, and more. With over 50 unique products in our skincare range,
          we offer something for everyone. Trust in our expertise to provide you with high-quality,  
          effective skincare solutions tailored to your needs. Discover the natural beauty of your skin 
           with NatureExpert.
        </p>
    </div>
<div className='flex gap-x-2 '>
    <button
    className='bg-[#db5f7a] text-white rounded-lg p-2 ml-20 mt-4 lato'
    >
        Submit Enquiry
    </button>

    <button
    className='text-white bg-[#212121] rounded-lg p-2  mt-4 lato'
    >
        Call Now
    </button>
</div>
    </div>
    
    </>
  )
}

export default Skincare