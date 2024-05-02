"use client"
import React from 'react'
import Navbar from '../components/Navbar'
import { Link } from "react-scroll";

const Haircare = () => {
  return (
    <>
    <div className=' bg-[url("/haircare.jpg")] bg-cover hairbg bg-opacity-20 bg-no-repeat  h-[100vh] '>
    <div className='text-white'>
    <Navbar />
    </div>

    <div className=' ml-20 mt-8'>
        <h1 className='text-white font-semibold  armen text-3xl'>
        Private Label Haircare Products
        </h1>
    </div>

    <div className='ml-20 mt-8'>
        <p className='text-white w-[35vw] leading-7 text-lg armen'>
        Welcome to NatureExpert Ayurvedic Pvt Ltd, where we specialize in manufacturing and white labeling a wide range of haircare products. From nourishing shampoos to luxurious hair oils, rejuvenating serums, and hydrating conditioners, we offer over 15 different SKUs in our haircare range. Our products are crafted with care, blending the goodness of nature and the wisdom of Ayurveda to promote healthy, beautiful hair for all.
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

export default Haircare