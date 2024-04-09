import React from 'react'
import Link from "next/link"
const Section3 = () => {
  return (
    <>
      <div className='flex justify-center gap-x-36 mt-20'>

        <div>
          <img
            src='/beauty2.webp'
            alt='Beauty'
            width={350}
            height={200}
          />
        </div>

        <div className='mt-6'>
          <h4 className='roboto2 font-semibold'>
            CREATE HAIRCARE PRODUCTS
          </h4>
          <p className='mt-6'>
            Explore our collection of 25+ haircare essentials to elevate your <br />
            brand. From moisturizing shampoos to revitalizing Hair masks, <br /> we have got you covered.

          </p>
          <Link href='/Contact'>
            <div className='flex gap-x-1'>
              <p className='py-4 text-[#89d038]'>
                Get started
              </p>
              <img
                src='/arrow.png'
                alt='Arrow'
                width={30}
                height={30}
                className='text-[#89d038] h-[20px] mt-[19px]'

              />
            </div>
            </Link>
        </div>
      </div>

    </>
  )
}

export default Section3