"use client"
import React, { useState } from 'react'
import Contact from '../Contact/Contact';
import ContactForm from './Contactform';

const Footer = () => {
    const [isContactFormOpen, setIsContactFormOpen] = useState(false);

  const openContactForm = () => {
    setIsContactFormOpen(true);
  };

  const closeContactForm = () => {
    setIsContactFormOpen(false);
  };

    return (
        <>

           <div className='py-6 bg-[#fafafa]'>
           <div className='space-y-4'>
            <h2 className='text-center font-semibold text-2xl roboto2'>
                REACH OUT TO US
            </h2>

            <p className='text-center leading-8 lato'>
                Find out more about our top offering in labelling, <br />
                Packaging and supply chain visibililty
            </p>
           </div>
   
   <div className='flex justify-around mt-6 '>
      <div className=''>
        <button className='leading-8 bg-white p-10 h-[200px] w-[350px]  px-20 rounded-md  hover:text-[#db5f7a] hover:transition-all '>
           <div className='flex gap-x-5'>
           <img 
            src='/phone.gif'
            alt='call'
            width={30}
            height={30}
            />
            <p className='lato'>
                Call us
            </p>
           </div>
           <a className='lato'>
            +91-9105507196

           </a>
        </button>
      </div>

      <div className=''>
        <button className='leading-8 bg-white p-10 h-[200px] w-[350px]   px-16 rounded-xl hover:text-[#db5f7a] 
        
        '
        onClick={openContactForm}
        >
           <div className='flex gap-x-4'>
           <img 
            src='/request.gif'
            alt='call'
            width={30}
            height={30}
            />
            <p className='lato'>
                Request A Quote
            </p>
           </div>
          
        </button>
      
      </div>
      {isContactFormOpen && <ContactForm onClose={closeContactForm} />}


      <div className=''>
        <button className=' bg-white p-10 h-[200px] w-[350px]  px-20 rounded-md hover:text-[#db5f7a]   '>
           <div className='flex gap-x-5'>
           <img 
            src='/address.gif'
            alt='call'
            width={30}
            height={30}
            />
            <p className='lato'>
                Address
            </p>
           </div>
           <a className='text-[13px] lato '>
           Plot no. 21 & 22 siddhi vinayak <br /> phase   IV IP2 industrial area <br />  salempur  haridwar uttrakhand 249402
           </a>
        </button>
      </div>
   </div> 
    
   
           </div>
           <div className=''>
        <p className='text-center p-2'>
        Copyright @2024 All rights reserved
        </p>
    </div>
        </>
    )
}

export default Footer