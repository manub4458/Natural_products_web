import React from 'react'
import Link from "next/link"
const Section5 = () => {
  return (
    <>
      <div className='flex justify-around mt-20 main4 bg-[#fafafa]'>

        <div>
          <img
            src='/onestop.avif'
            alt='Beauty'
            width={350}
            height={200}
            className='main7'
          />
        </div>

        <div className='mt-6 main5 main8'>
          <h2 className='armen font-semibold text-xl '>
          Your Complete Branding Partner 
          </h2>
          <p className='mt-6 armen p2'>
          Leave the hassle behind—our one-stop-shop solution covers it all. From <br className='br' />
           sourcing bottles to designing labels, we haveve got you covered. No prior <br className='br' />
            materials needed, just bring your brand vision, and we will handle <br className='br' /> the rest.
          </p>
          <Link href='/Contact'>
            <div className='flex gap-x-2 '>
              <p className='py-4 text-[#db5f7a] armen hover:ml-4'>
                Get started
              </p>
              <img 
                    src='/arrrr1.avif'
                    alt='Arrow'
                    width={20}
                    height={30}
                    className=' h-[20px] text-pink-700 mt-[19px] hover:ml-4'

                    />
            </div>
            </Link>
        </div>
      </div>

    </>
  )
}

export default Section5