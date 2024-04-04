"use client"
import { useEffect } from 'react';


const Hero = () => {
    useEffect(() => {
        const copy = document.querySelector('.logos-slide').cloneNode(true);
        // document.querySelector('.logos').appendChild(copy); 
    }, []);

    return (
        <>
            <div className='flex justify-center mx-6 mt-20 h-[65vh]'>
                <div className='w-[40vw] ml-[180px]'>
                    <h2 className=' justify-center text-2xl font-serif pt-32 leading-10 roboto2'>
                        <span className='text-[#89d038] font-semibold'>  CREATE HAIR AND SKIN</span> <br /> CARE BRAND
                    </h2>
                    <p className='w-[30vw] leading-8 pt-4 roboto2'>
                        Easily create beauty brand with premium white label dropshipping products from US suppliers. Explore private label makeup, cosmetics, and white label beauty products.
                    </p>
                    <input
                        type='email'
                        id='email'
                        placeholder='Your email Address..'
                        className=' outline-none focus:border focus:border-blue-300 rounded-md  py-3 px-8 mt-4 bg-slate-100/20 '
                    />
                    <button className='py-3 px-8 ml-4 bg-[#89d038] text-white rounded-md'>
                        Get started
                    </button>
                </div>

                <div className="logos w-[55vw]">
                    <div className="logos-slide ">
                        <img src="/product1.png" alt="3M Logo" />
                        <img src="/product1.png" alt="3M Logo" />
                        <img src="/product1.png" alt="3M Logo" />
                        <img src="/product1.png" alt="3M Logo" />
                        <img src="/product1.png" alt="3M Logo" />
                        <img src="/product1.png" alt="3M Logo" />
                        <img src="/product1.png" alt="3M Logo" />
                        <img src="/product1.png" alt="3M Logo" />

                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;
