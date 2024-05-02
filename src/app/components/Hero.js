"use client"
import { useEffect, useState } from 'react';
import Link from 'next/link'

import Carousels from './Carousel';
import Swipers from './Swiper';
import Sliders from './Slider';
import { useRouter } from 'next/navigation';

const Hero = () => {
   
    const router = useRouter();
    
    const [email, setEmail] = useState('');
     const [emailError, setEmailError] = useState('');
  
     
     const handleSubmitt = (event) => {
         event.preventDefault();
         
         if (!isValidEmail(email)) {
             setEmailError('Please enter a valid email address');
             return;
         }
 
         // Handle form submission
         console.log('Email submitted:', email);
     };
 
     const handleChange = (event) => {
         setEmail(event.target.value);
         setEmailError('');
     };
 
     const isValidEmail = (email) => {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return emailRegex.test(email);
     };
  
    const handleButtonClick = () => {
        if (!isValidEmail(email)) {
            setEmailError('Please enter a valid email address');
            return;
        }
      // Redirect to contact page with email as query parameter
      router.push(`/Contact?email=${encodeURIComponent(email)}`);
    };

    // useEffect(() => {
    //     const copy = document.querySelector('.logos-slide').cloneNode(true);
    //     // document.querySelector('.logos').appendChild(copy); 
    // }, []);

    return (
        <>
            <div className='flex justify-evenly mb-20 h-[60vh] my-20 items-center '>
                <div className=' '>
                    <h1 className=' justify-center text-3xl font-serif leading-10 armen'>
                        <span className='text-[#db5f7a] font-semibold'>  CREATE SKIN AND HAIR <br /> CARE BRAND </span>
                    </h1>
                    <p className='w-[28vw]  leading-8 pt-4 text-lg armen'>
                    Step into our world of skincare and haircare wonders! Unleash your brands beauty with us—its where fun meets fabulous. Lets make your dream products a reality!
                             </p>
                   <form 
                   onSubmit={handleSubmitt}
                   >
                   <input
                        type='email'
                        id='email'
                        value={email}
                        placeholder='Your email Address..'
                        onChange={(e) => {setEmail(e.target.value); handleChange(e);}}
                        className=' outline-none focus:border armen focus:border-blue-300 rounded-md  py-3 px-8 mt-4 bg-slate-100/20 '
                    />
                    <button className='py-3 px-8 ml-4 bg-[#db5f7a] text-white rounded-md armen'
                  onClick={handleButtonClick}
                  >
                        Get started
                    </button>
                   </form>
                 
                  
                
                </div>

                {/* <div className="logos w-[55vw]">
                    <div className="logos-slide ">
                        <img src="/hero1.png" alt="3M Logo" />
                        <img src="/hero2.png" alt="3M Logo" />
                        <img src="/hero6.jpeg" alt="3M Logo" />
                        <img src="/hero4.jpeg" alt="3M Logo" />
                        <img src="/hero5.jpeg" alt="3M Logo" />
                        <img src="/hero7.jpeg" alt="3M Logo" />
                        <img src="/product1.png" alt="3M Logo" />
                        <img src="/product1.png" alt="3M Logo" />

                    </div>
                </div> */}
                   {/* <Carousels /> */}
                  {/* <Swipers /> */}
                  <div className='w-[40vw]'>
                  <Sliders />
                  </div>
                 

                  

            </div>
        </>
    );
};

export default Hero;
