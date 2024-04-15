import React from 'react'
import Navbar from '../components/Navbar'
import Skincare from './skincare'
import SecondSection from './secondsection'
import Footer from '../components/Footer'
import Dive from './Dive'
import Contact from '../Contact/Contact'

const page = () => {
  return (
   <>
 
   <Skincare />
   <SecondSection />
   <Dive />
   <Contact />
   <Footer />
   </>
  )
}

export default page