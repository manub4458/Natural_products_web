"use client"
import React, { useState } from 'react'

const Dive = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
      setIsVisible(!isVisible);
    };
  return (
    <>
    <div>

<div className='grid justify-center'>
<button 
        className="border bg-[#db5f7a] hover:bg-[#d74f6d] text-white    font-semibold w-fit py-2 px-4 rounded "
        onClick={toggleVisibility}
      >
        {isVisible ? 'Lets Dive into our HairCare products' : 'Lets Dive into our HairCare products'}
      </button>

     <div>
     {isVisible && (
        <div className="mt-4 leading-8  w-[60vw]">
         
         <li>
         1.	<strong>Shampoo:</strong> Cleanses the scalp and hair, removing dirt, oil, and impurities for a fresh and clean feel.
         </li>
         <li>
            2. <strong>Conditioner: </strong> Hydrates and nourishes the hair, smoothing frizz and tangles for softness and manageability.
         </li>

         <li>
            3. <strong>Hair Mask:  </strong> Provides deep conditioning treatment, repairing and restoring hair's strength, shine, and elasticity.
         </li>
         <li>
            4. <strong>Hair Oil:</strong> Nourishes and moisturizes the scalp and hair, promoting growth, shine, and overall health.
         </li>
         <li>
            5. <strong>Leave-In Conditioner:  </strong> Provides lightweight hydration and detangling, protecting hair from damage and breakage.
         </li>
         <li>
            6. <strong>Serum: </strong> Controls frizz and adds shine, taming flyaways and providing heat protection for styling.
         </li>

         <li>
            7. <strong>Hair Gel: </strong> Provides hold and definition, sculpting and styling hair while adding shine and control.
         </li>
         <li>
            8. <strong>Hair Mousse: </strong> Adds volume and body, enhancing texture and lift for bouncy, full-bodied styles.
         </li>
         <li>
            9. <strong>Hair Wax: </strong> Offers flexible hold and texture, shaping and defining hair for a structured yet natural look.
         </li>
         <li>
            10. <strong>Hair Spray: </strong> Sets styles in place, providing long-lasting hold and humidity resistance for all-day wear.
         </li>

         <li>
            11. <strong>Dry Shampoo: </strong> Refreshes and revitalizes hair between washes, absorbing oil and adding volume for a clean feel.
         </li>
         <li>
            12. <strong>Scalp Scrub: </strong> Exfoliates and clarifies the scalp, removing buildup and promoting circulation for a healthy scalp environment.
         </li>
         <li>
            13. <strong>Hair Growth Serum: </strong> Stimulates hair follicles and promotes growth, reducing shedding and encouraging thicker, fuller hair.
         </li>
         <li>
            14. <strong>Hair Color: </strong> Changes or enhances hair color, covering grays or adding vibrant shades for a personalized look.
         </li>
         <li>
            15. <strong>Hair Perfume: </strong> Adds fragrance and freshness to hair, leaving a lingering scent while conditioning strands for softness and shine.
         </li>

        </div>
      )}
     </div>
</div>

    </div>
    
    </>
  )
}

export default Dive