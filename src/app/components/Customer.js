"use client"
import React from 'react'
import { Element } from 'react-scroll';
import SliderThree from './SliderThree';
const Customer = () => {
  const section2Ref = React.useRef(null);
  return (
    <>
    <Element name='section2'>
    <div
    ref={section2Ref}
    >
    <div className='bg-[#fafafa]'>
        <h4 className='text-center font-bold  text-2xl mt-16'>
        Certifications
        </h4>
    </div>
    {/* <div className="logos2 w-[100vw] my-20 bg-[#fafafa]">
                        <div className="logos-slide3  ">
                            <img src="/cer1.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer2.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer3.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer4.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer5.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer6.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer7.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer8.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer1.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer2.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer3.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer4.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer5.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer6.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer7.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer8.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer1.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer2.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer3.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer4.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer5.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer6.jpg" alt="3M Logo"  className='master overlay'/>
                            <img src="/cer7.jpg" alt="3M Logo" />
                            <img src="/cer8.jpg" alt="3M Logo" />
                           


    
    
    
    
    
    
    
                           
    
                        </div>
                    </div> */}

                    <div className="  mx-[40px] my-20 client bg-[#fafafa]">
                      <SliderThree />
                    </div>
    </div>

    </Element>
    </>
  )
}

export default Customer