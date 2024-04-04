import React from 'react'

const Contact = () => {
    return (
        <>

            <div >
                <form className='ml-[30vw] p-8 pl-16 mt-10 space-y-8  my-10 max-w-[40vw] '>
                    <div>
                        <h2 className='text-2xl font-semibold'>
                            Request a Quote
                        </h2>
                    </div>

                    <div className='flex'>
                        <div>
                            <input
                                type='text'
                                id='first Name'
                                placeholder='First Name'
                                className='outline-black border border-gray-700 rounded-md p-3 px-4'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                id='last name'
                                placeholder='Last Name'
                                className='outline-black border border-gray-700 ml-6 rounded-md p-3 px-4'
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            type='text'
                            id='first Name'
                            placeholder='Email'
                            className='outline-black border border-gray-700 rounded-md w-[530px] p-3 px-4'
                        />
                    </div>
                    <div className='flex'>
                        <div>
                            <input
                                type='number'
                                id='Phone'
                                placeholder='Phone'
                                className='outline-black border border-gray-700 rounded-md p-3 px-4'
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                id='company'
                                placeholder='Company'
                                className='outline-black border border-gray-700 ml-6 rounded-md p-3 px-4'
                            />
                        </div>
                    </div>

                    <div className='flex'>
                      <div>
                      <input
                            type='select'
                            id='Select Product'
                            placeholder='Select Product'
                            className='outline-black border border-gray-700 rounded-md p-3 px-4'
                        />
                      </div>
                      <div>
                      <input
                            type='text'
                            id='state'
                            placeholder='State'
                            className='outline-black border border-gray-700 ml-6 rounded-md p-3 px-4'
                        />
                      </div>
                    </div>

                    <div>
                        <textarea
                            type='message'
                            rows="5"
                            id='enquiry'
                            placeholder='Enquiry'
                            co
                            className='outline-black border border-gray-700 rounded-md w-[530px] p-3 px-4'
                        />
                    </div>
                    <div>
                        <button className='bg-[#89d038] text-white py-3 w-[530px] rounded-xl'>
                            Submit Request
                        </button>
                    </div>

                </form>
            </div>
        </>
    )
}

export default Contact