import React from 'react'
import Link from "next/link"
const Section3 = () => {
  return (
    <>
      <div className='flex justify-around mt-20 bg-[#fafafa]'>

        <div>
          <img
            src='/haircare.jpg'
            alt='Beauty'
            width={350}
            height={200}
          />
        </div>

        <div className='mt-6'>
          <h4 className='armen font-semibold text-xl'>
            CREATE HAIRCARE PRODUCTS
          </h4>
          <p className='mt-6 armen'>
            Explore our collection of 25+ haircare essentials to elevate your <br />
            brand. From moisturizing shampoos to revitalizing Hair masks, <br /> we have got you covered.

          </p>
          
            <div className='flex gap-x-1'>
              {/* <p className='py-4 text-[#89d038] lato'>
                Get started
              </p>
              <img
                src='/arrow.png'
                alt='Arrow'
                width={30}
                height={30}
                className='text-[#89d038] h-[20px] mt-[19px]'

              /> */}
<Link href='/haircare' >
<button className='bg-[#db5f7a] text-white p-2 text-[12px] rounded-lg mt-4 armen'>
                      Our Range
                    </button>
                    </Link>
            </div>
           
        </div>
      </div>

    </>
  )
}

export default Section3