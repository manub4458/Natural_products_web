import Link from 'next/link'
import React from 'react'
import DropdownMenu from './DropdownMenu'

const Navbar = () => {
    return (
        <>
            <div className='flex justify-around roboto2 py-6 shadow-lg'>
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

                <div className='flex list-none gap-x-8  pt-4'>
                    <Link href='/'>
                   
                    <li>
                        Home
                    </li>

                    </Link>
                    <li>
                       <DropdownMenu />
                    </li>
                    <li>
                        Brands
                    </li>
                    <li>
                        Certification
                    </li>
                </div>

                <div>

                   <Link href='/Contact'>
                    <button className='bg-[#db5f7a] text-white py-2 px-6 rounded-md hover:bg-[#c74762]'>
                        Contact Us
                    </button>
                    </Link>
                </div>
            </div>

        </>
    )
}

export default Navbar