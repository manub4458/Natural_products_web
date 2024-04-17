import Link from 'next/link'
import React from 'react'

const Cont = () => {
  return (
    <>
    <div>

    <Link href='/Contact'>
                    <button className='bg-[#db5f7a] text-white py-2 px-6 rounded-md hover:bg-[#c74762]'>
                        Contact Us
                    </button>
                    </Link>
    </div>
    </>
  )
}

export default Cont