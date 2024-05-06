import Link from 'next/link'
import React from 'react'

const Section2 = () => {
  return (
   <>
   <div className='flex justify-around mt-20 main2 bg-[#fafafa]'>

   <div className='mt-6 main3'>
       <h2 className='armen text-xl font-semibold'>
        CREATE SKINCARE PRODUCTS
       </h2>
   <p className='mt-6 armen p2'>
   Explore our range of 70+ skincare must-haves, ready to make your brand  <br className='br' />
   shine. From  silky serums to gentle cleansers, we have got your skincare <br  className='br' /> needs covered.
   </p>
   <div className='flex gap-x-1'>
                   {/* <p className='py-4 text-[#89d038]'>
                        Get started 
                    </p> */}
<Link href='/skincare' >
                    <button className='bg-[#db5f7a] text-white p-2 text-[12px] rounded-lg mt-4 armen'>
                      Our Range
                    </button>

                    </Link>
                    {/* <img 
                    src='/arrow.png'
                    alt='Arrow'
                    width={30}
                    height={30}
                    className='text-[#89d038] h-[20px] mt-[19px]'

                    /> */}
                   </div>
      </div>
      <div className=''>
        <img 
        src='/skincare.avif'
        alt='Beauty'
        width={350}
        height={200}
        className='main7'
        />
      </div>

     
   </div>
  
   </>
  )
}

export default Section2