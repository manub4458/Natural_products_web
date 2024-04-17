import React from 'react'
import Link from "next/link"
const Section5 = () => {
  return (
    <>
      <div className='flex justify-around mt-20 bg-[#fafafa]'>

        <div>
          <img
            src='/onestop.png'
            alt='Beauty'
            width={350}
            height={200}
          />
        </div>

        <div className='mt-6'>
          <h4 className='armen font-semibold text-xl '>
          Your Complete Branding Partner 
          </h4>
          <p className='mt-6 armen'>
          Leave the hassle behind—our one-stop-shop solution covers it all. From <br />
           sourcing bottles to designing labels, we haveve got you covered. No prior <br />
            materials needed, just bring your brand vision, and we will handle <br /> the rest.
          </p>
          <Link href='/Contact'>
            <div className='flex gap-x-1'>
              <p className='py-4 text-[#db5f7a] armen'>
                Get started
              </p>
              <img
                src='/arrow3.png'
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

export default Section5