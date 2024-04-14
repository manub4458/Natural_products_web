import Link from 'next/link'
import React from 'react'

const Section4 = () => {
  return (
   <>
   <div className='flex justify-center gap-x-52 mt-20 bg-[#fafafa]'>

   <div className='mt-6'>
       <h4 className='roboto2 text-2xl font-semibold'>
        HIGH MARGINS
       </h4>
   <p className='mt-6 lato'>
   Enjoy high profit margins with our transparent pricing model. We  <br />
   only charge 20-30% of the product's cost, ensuring maximum  <br /> returns for your brand.
   </p>
   <Link href='/Contact' >
   <div className='flex gap-x-1'>
                   <p className='py-4 text-[#db5f7a]'>
                        Get started 
                    </p>

                    {/* <button className='bg-[#89d038] text-white p-2 text-[12px] rounded-lg mt-4 lato'>
                      Our Range
                    </button> */}
                    <img 
                    src='/arrow3.png'
                    alt='Arrow'
                    width={30}
                    height={30}
                    className=' h-[20px] mt-[19px]'

                    />
                   </div>
                   </Link>
      </div>
      <div>
        <img 
        src='/high.png'
        alt='Beauty'
        width={350}
        height={200}
        />
      </div>

     
   </div>
  
   </>
  )
}

export default Section4