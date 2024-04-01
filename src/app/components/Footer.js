import React from 'react'

const Footer = () => {
    return (
        <>

            <div className='flex justify-between mx-20 my-2 '>
                <div className='leading-10'>
                    <img
                        src='/logo2.jpg'
                        alt='logo'
                        width={45}
                        height={120}
                        className=''

                    />
                    <h3>
                        @2024 Natural All rights reserved
                    </h3>
                </div>

                <div className='flex list-none gap-x-8  pt-12 '>
                    <li>
                        Home
                    </li>
                    <li>
                        Products
                    </li>
                    <li>
                        Certification
                    </li>
                </div>
            </div>
        </>
    )
}

export default Footer