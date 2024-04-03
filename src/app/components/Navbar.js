import Link from 'next/link'
import React from 'react'

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
                        Products
                    </li>
                    <li>
                        Brands
                    </li>
                    <li>
                        Certification
                    </li>
                </div>

                <div>

                   
                    <button className='bg-[#89d038] text-white py-2 px-6 rounded-md hover:bg-green-800'>
                        Contact Us
                    </button>
                  
                </div>
            </div>

        </>
    )
}

export default Navbar