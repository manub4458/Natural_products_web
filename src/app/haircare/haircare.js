import React from 'react'
import Navbar from '../components/Navbar'

const Haircare = () => {
  return (
    <>
    <div className=' bg-[url("/haircare.jpg")] bg-cover bg-opacity-20 bg-no-repeat  h-[100vh] '>
    <div className='text-white'>
    <Navbar />
    </div>

    <div className=' ml-32 mt-8'>
        <h2 className='text-white font-semibold  roboto2 text-3xl'>
        Private Label Haircare Products
        </h2>
    </div>

    <div className='ml-32 mt-8'>
        <p className='text-white w-[35vw] leading-7 text-lg'>
        Welcome to NatureExpert Ayurvedic Pvt Ltd, where we specialize in manufacturing and white labeling a wide range of haircare products. From nourishing shampoos to luxurious hair oils, rejuvenating serums, and hydrating conditioners, we offer over 15 different SKUs in our haircare range. Our products are crafted with care, blending the goodness of nature and the wisdom of Ayurveda to promote healthy, beautiful hair for all.
        </p>
    </div>
<div className='flex gap-x-2 '>
    <button
    className='bg-[#89d038] text-white rounded-lg p-2 ml-32 mt-4'
    >
        Submit Enquiry
    </button>

    <button
    className='text-white bg-[#212121] rounded-lg p-2  mt-4'
    >
        Call Now
    </button>
</div>
    </div>
    
    </>
  )
}

export default Haircare