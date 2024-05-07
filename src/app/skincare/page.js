import React from 'react'
import Navbar from '../components/Navbar'
import Skincare from './skincare'
import SecondSection from './secondsection'
import Footer from '../components/Footer'
import Dive from './Dive'
import Contact from './Contact'
import Contact2 from './Contact2'

const page = () => {
  return (
   <>
 
   <Skincare />
   <SecondSection />
   <Dive />
   <div className='nav'>
<Contact/>
  </div>
  <div className='mobnav'>
    <Contact2 />
    </div>
   <Footer />
   </>
  )
}

export default page