import React from 'react'

const Section2 = () => {
  return (
   <>
   <div className='flex justify-center gap-x-52 mt-20'>

   <div className='mt-6'>
       <h4 className='roboto2 font-semibold'>
        CREATE BEAUTY PRODUCTS
       </h4>
   <p className='mt-6'>
   Private label high-quality beauty product to build your brand and <br />
   dropship directly to your customers.
   </p>
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