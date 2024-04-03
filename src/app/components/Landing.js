import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Whyus from './Whyus'
import Section2 from './Section2'
import Section3 from './Section3'
import Clientels from './Clientels'
import Customer from './Customer'

const Landing = () => {
  return (
   <>
   <Navbar/>
  
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