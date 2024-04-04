import React from 'react'

const Footer = () => {
    return (
        <>

           <div className='bg-[#89d038] py-6'>
           <div className='space-y-4'>
            <h2 className='text-center font-semibold text-3xl roboto2'>
                REACH OUT TO US
            </h2>

            <p className='text-center leading-8'>
                Find out more about our top offering in labelling, <br />
                Packaging and supply chain visibililty
            </p>
           </div>
   
   <div className='flex justify-around mt-6 '>
      <div className=''>
        <button className='leading-8 bg-white p-10 h-[150px] border border-black px-20 rounded-md '>
           <div className='flex gap-x-5'>
           <img 
            src='/phone.gif'
            alt='call'
            width={30}
            height={30}
            />
            <p>
                Call us
            </p>
           </div>
           <a>
            +91-7668612888
           </a>
        </button>
      </div>

      <div className=''>
        <button className='leading-8 bg-white p-10 h-[150px] border border-black px-16 rounded-xl '>
           <div className='flex gap-x-4'>
           <img 
            src='/request.gif'
            alt='call'
            width={30}
            height={30}
            />
            <p>
                Request A Quote
            </p>
           </div>
          
        </button>
      </div>

      <div className=''>
        <button className='leading-8 bg-white p-10 h-[150px] border border-black px-20 rounded-md '>
           <div className='flex gap-x-5'>
           <img 
            src='/address.gif'
            alt='call'
            width={30}
            height={30}
            />
            <p>
                Address
            </p>
           </div>
           <a>
            +91-7668612888
           </a>
        </button>
      </div>
   </div> 
    
   
           </div>
           <div className='bg-[#212121] text-white'>
        <p className='text-center p-2'>
        Copyright @2024 All rights reserved
        </p>
    </div>
        </>
    )
}

export default Footer