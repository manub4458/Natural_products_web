"use client"
import React, { useEffect } from 'react'

const Clientels = () => {
  useEffect(() => {
    const copy = document.querySelector('.logos-slide').cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
}, []);
  return (
<>
<div className='bg-[#fafafa]'>
    <h2 className='text-center font-bold roboto2 text-2xl mt-16'>
    Our Clientele
    </h2>
</div>
<div className="logos2 w-[100vw] my-20 bg-[#fafafa]">
                    <div className="logos-slide2 ">
                        <img src="/c1.jpg" alt="3M Logo" />
                        <img src="/c2.jpg" alt="3M Logo" />
                        <img src="/c3.jpg" alt="3M Logo" />
                        <img src="/c4.jpg" alt="3M Logo" />
                        <img src="/c5.jpg" alt="3M Logo" />
                        <img src="/c6.jpg" alt="3M Logo" />
                        <img src="/c7.jpg" alt="3M Logo" />
                        <img src="/c1.jpg" alt="3M Logo" />
                        <img src="/c2.jpg" alt="3M Logo" />
                        <img src="/c3.jpg" alt="3M Logo" />
                        <img src="/c4.jpg" alt="3M Logo" />
                        <img src="/c5.jpg" alt="3M Logo" />
                        <img src="/c6.jpg" alt="3M Logo" />
                        <img src="/c7.jpg" alt="3M Logo" />
                    </div>
                </div>
</>
  )
}

export default Clientels