import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Whyus from './Whyus'
import Section2 from './Section2'
import Section3 from './Section3'
import Clientels from './Clientels'
import Customer from './Customer'
import Mobnav from './Mobnav'
import DropdownMenu from './DropdownMenu'

const Landing = () => {
  return (
   <>
 {/* <div className='hidden lg:inline-block w-full'>
 <Navbar/>
 </div> */}

 <Navbar/>
 {/* <div className="select-none landing_conatiner h-screen ">
		
				<div className="absolute  lg:hidden w-screen  md:inline-block">
					<Mobnav />
				</div>
				<div className="absolute top-20 z-[1] w-screen">
				
				</div>
			</div> */}
     
      	<Hero />
   <Whyus />
   <Section2 />
   <Section3 />
   <Clientels />
   <Customer />
   <Footer />
   </>
  )
}

export default Landing