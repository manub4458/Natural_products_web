"use client"
import React, { useEffect } from 'react'

const Clientels = () => {
  useEffect(() => {
    const copy = document.querySelector('.logos-slide').cloneNode(true);
    document.querySelector('.logos').appendChild(copy);
}, []);
  return (
<>
<div>
    <h2 className='text-center font-bold text-2xl mt-16'>
    Our Clientele
    </h2>
</div>
<div className="logos2 w-[100vw] my-20">
                    <div className="logos-slide2 ">
                        <img src="/3m.svg" alt="3M Logo" />
                        <img src="/barstool-store.svg" alt="3M Logo" />
                        <img src="/budweiser.svg" alt="3M Logo" />
                        <img src="/buzzfeed.svg" alt="3M Logo" />
                        <img src="/forbes.svg" alt="3M Logo" />
                        <img src="/macys.svg" alt="3M Logo" />
                        <img src="/menshealth.svg" alt="3M Logo" />
                        <img src="/mrbeast.svg" alt="3M Logo" />
                        <img src="/mrbeast.svg" alt="3M Logo" />







                       

                    </div>
                </div>
</>
  )
}

export default Clientels