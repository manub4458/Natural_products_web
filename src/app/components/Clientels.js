"use client"
import React, { useEffect } from 'react'
import { Element } from 'react-scroll';
import SliderTwo from './SliderTwo';
const Clientels = () => {
  useEffect(() => {
    // const copy = document.querySelector('.logos-slide').cloneNode(true);
    // document.querySelector('.logos').appendChild(copy);
}, []);
const section1Ref = React.useRef(null);
    
  return (
<>
<Element name='section1' >
<div 
ref={section1Ref}
>

<div className='bg-[#fafafa]'>
    <h4 className='text-center font-bold armen text-2xl mt-16'>
    Our Clientele
    </h4>
</div>
{/* <div className="logos2 w-[100vw] my-20 bg-[#fafafa]">
                    <div className="logos-slide2 ">
                        <img src="/e1.png" alt="3M Logo" />
                        <img src="/e2.png" alt="3M Logo" />
                        <img src="/e3.png" alt="3M Logo" />
                        <img src="/e4.png" alt="3M Logo" />
                        <img src="/e5.png" alt="3M Logo" />
                        <img src="/e6.png" alt="3M Logo" />
                        <img src="/e7.png" alt="3M Logo" />
                        <img src="/e1.png" alt="3M Logo" />
                        <img src="/e2.png" alt="3M Logo" />
                        <img src="/e3.png" alt="3M Logo" />
                        <img src="/e4.png" alt="3M Logo" />
                        <img src="/e5.png" alt="3M Logo" />
                        <img src="/e6.png" alt="3M Logo" />
                        <img src="/e7.png" alt="3M Logo" />
                    </div>
                </div> */}

                <div className="  mx-[40px] my-20 bg-[#fafafa]">
                     <SliderTwo />
                </div>
</div>
</Element>
</>
  )
}

export default Clientels