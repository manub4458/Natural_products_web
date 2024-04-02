import React from 'react'
import Navbar from './Navbar'
import Hero from './Hero'
import Footer from './Footer'
import Whyus from './Whyus'
import Section2 from './Section2'
import Section3 from './Section3'
import Clientels from './Clientels'

const Landing = () => {
  return (
   <>
   <Navbar/>
  
   <Hero />
   <Whyus />
   <Section2 />
   <Section3 />
   <Clientels />
   <Footer />
   </>
  )
}

export default Landing