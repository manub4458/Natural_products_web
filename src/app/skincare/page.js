import React from 'react'
import Navbar from '../components/Navbar'
import Skincare from './skincare'
import SecondSection from './secondsection'
import Footer from '../components/Footer'
import Dive from './Dive'
import Contact from './Contact'

const page = () => {
  return (
   <>
 
   <Skincare />
   <SecondSection />
   <Dive />
   <div className='flex justify-center'>
  
  <Contact />
   </div>
   <Footer />
   </>
  )
}

export default page