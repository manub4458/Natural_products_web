import React from 'react'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import Footer from '../components/Footer'
import Mobnav from '../components/Mobnav'
import Contact2 from './Contact2'

const page = () => {
  return (
   <>
  <div className='nav'>
<Navbar/>
  </div>
  <div className='mobnav'>
    <Mobnav />
  </div>
  <div className='nav'>
<Contact/>
  </div>
  <div className='mobnav'>
    <Contact2 />
  </div>
  
   {/* <Contact /> */}
   <Footer />
   </>
  )
}

export default page