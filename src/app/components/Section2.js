import React from 'react'

const Section2 = () => {
  return (
   <>
   <div className='flex justify-center gap-x-52 mt-20'>

   <div className='mt-6'>
       <h4 className='roboto2 font-semibold'>
        CREATE SKINCARE PRODUCTS
       </h4>
   <p className='mt-6'>
   Explore our range of 70+ skincare must-haves, ready to make your brand  <br />
   shine. From  silky serums to gentle cleansers, we have got your skincare <br /> needs covered.
   </p>
   <div className='flex gap-x-1'>
                   {/* <p className='py-4 text-[#89d038]'>
                        Get started 
                    </p> */}

                    <button className='bg-[#89d038] text-white p-2 text-[12px] rounded-lg mt-4'>
                      Our Range
                    </button>
                    {/* <img 
                    src='/arrow.png'
                    alt='Arrow'
                    width={30}
                    height={30}
                    className='text-[#89d038] h-[20px] mt-[19px]'

                    /> */}
                   </div>
      </div>
      <div>
        <img 
        src='/beauty3.webp'
        alt='Beauty'
        width={350}
        height={200}
        />
      </div>

     
   </div>
  
   </>
  )
}

export default Section2