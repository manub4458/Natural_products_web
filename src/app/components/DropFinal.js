"use client"
import Link from 'next/link'
import React,{ useEffect, useState } from 'react'


const DropFinal = () => {
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

            <div className="dropdown">
                <button className="dropbtn inter">Products</button>
                <div className="dropdown-content">

                    <Link href='/skincare'>
                        <li className='top'>Skincare</li>
                    </Link>

                    <Link href='/haircare'>
                        <li className='top' >Haircare</li>
                    </Link>
                </div>
            </div>
        </>
    )
}

export default DropFinal