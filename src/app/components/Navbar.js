"use client"
// import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import DropdownMenu from './DropdownMenu'
import Drop from './Drop'
import { Link } from "react-scroll";
import Home from './Home';
import DropdownMenus from './DropdownMenu';
import Cont from './Cont';
import DropFinal from './DropFinal';
import Brand from '../skincare/Brand';
import Certificate from '../skincare/Certificate';

const Navbar = () => {
    const scrollToRef = (ref) => {
        if (ref.current) {
            window.scrollTo({
                top: ref.current.offsetTop,
                behavior: 'smooth'
            });
        }
    };

    const section1Ref = React.useRef(null);
    const section2Ref = React.useRef(null);
    const [hydration, setHydration] = useState(false);
    useEffect(()=>{
        setHydration(true)

    },[])
    if(!hydration)
    {
        return null;
    }
    return (
        <>
            <div className='flex justify-around  py-6 shadow-lg'>
               <Link href='/'>
               
               <div>
                    <img
                        src='/logo2.jpg'
                        alt='logo'
                        width={45}
                        height={120}
                        className=''

                    />
                </div>
               </Link>

                <div className='flex list-none gap-x-8 font-medium  pt-4 inter' >
                   <li>
                    <Home />
                   </li>
                    <li>
                       {/* <DropdownMenus /> */}
                       {/* <Drop /> */}
                       <DropFinal />
                    </li>
                  
                    <li
                    className='cursor-pointer'
                    ><Link to="section1" smooth={true} duration={500}><Brand /></Link></li>

                  
<li
                    className='cursor-pointer'
                    ><Link to="section2" smooth={true} duration={500}><Certificate /></Link></li>
            
                </div>

                <div>

                  <Cont />
                </div>
            </div>

        </>
    )
}

export default Navbar