import React from 'react'
import Navbar from '../components/Navbar'
import Contact from './Contact'
import Footer from '../components/Footer'
import Mobnav from '../components/Mobnav'

const page = () => {
  return (
   <>
  <div className='nav'>
<Navbar/>
  </div>
  <div className='mobnav'>
    <Mobnav />
  </div>
   <Contact />
   <Footer />
   </>
  )
}

export default page