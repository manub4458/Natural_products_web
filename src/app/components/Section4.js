import Link from 'next/link'
import React from 'react'

const Section4 = () => {
  return (
   <>
   <div className='flex justify-around mt-20 main2 bg-[#fafafa]'>

   <div className='mt-6 main3'>
       <h2 className='armen text-xl font-semibold'>
        HIGH MARGINS
       </h2>
   <p className='mt-6 armen p2'>
   Enjoy high profit margins with our transparent pricing model. We  <br className='br' />
   only charge 20-30% of the products cost, ensuring maximum  <br className='br' /> returns for your brand.
   </p>
   <Link href='/Contact' >
   <div className='flex gap-x-2 '>
                   <p className='py-4 text-[#db5f7a] armen hover:ml-4 hover:scroll-smooth'>
                        Get started 
                    </p>

                    {/* <button className='bg-[#89d038] text-white p-2 text-[12px] rounded-lg mt-4 lato'>
                      Our Range
                    </button> */}
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
      <div>
        <img 
        src='/high.avif'
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

export default Section4