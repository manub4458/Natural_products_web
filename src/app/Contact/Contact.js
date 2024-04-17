"use client"
import React, { useState } from 'react'

const Contact = () => {
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email:'',
        phone_number:'',
        company_name:'',
        select_product:'',
        state:'',
        enquiry: ""
    });
    
    const [submitting, setSubmitting] = useState(false);
    
    const handleInputChange = (e) => {
      const   {name, value} = e.target;
    
      setFormData({
           ...formData,
          [name]: value,
    
    
      });
    }
    
     const handleSubmit = async (e) =>{
      e.preventDefault();
      setSubmitting(true);
    console.log(formData)
      // send email
    
      const response = await fetch('/api/contact-us',{
        method:'POST',
        headers: {
          'Content-Type':'application/json',
          'Accept': 'application/json',
        },
        body:JSON.stringify(formData),
      });
    
    //   const result  = await response.json(); 
      const { success, error } = await response.json(); 

    
      if (success) {
        alert('Your inquiry has been submitted!');
      } else if (error) {
        console.error(error);
        alert('Error while submitting your inquiry: ', error);
      }
    // console.log(result)
    
      setSubmitting(false);
    
     }
    return (
        <>

            <div >
                <form className='ml-[30vw] lg:ml-[18vw] xl:ml-[30vw] lg:max-w-[100vw] p-8 pl-16 mt-10 space-y-8  my-10 max-w-[40vw] '
                onSubmit={handleSubmit}
                data-netlify="true"
                >
                    <div>
                        <h2 className='text-3xl font-semibold sedan'>
                            Request a Quote
                        </h2>
                    </div>

                    <div className='flex'>
                        <div>
                            <input
                                type='text'
                                id='firstname'
                                name='firstname'
                                placeholder='First Name'
                                className='outline-black border border-gray-700 rounded-md p-3 px-4'
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                id='lastname'
                                name='lastname'
                                placeholder='Last Name'
                                className='outline-black border border-gray-700 ml-6 rounded-md p-3 px-4'
                                onChange={handleInputChange} 
                            />
                        </div>
                    </div>
                    <div>
                        <input
                            type='text'
                            id='email'
                            name='email'
                            placeholder='Email'
                            className='outline-black border border-gray-700 rounded-md w-[530px] p-3 px-4'
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div className='flex'>
                        <div>
                            <input
                                type='phone number'
                                id='phone_number'
                                name='phone_number'
                                placeholder='Phone'
                                className='outline-black border border-gray-700 rounded-md p-3 px-4'
                                onChange={handleInputChange} 
                            />
                        </div>
                        <div>
                            <input
                                type='text'
                                id='company_name'
                                name='company_name'
                                placeholder='Company Name'
                                className='outline-black border border-gray-700 ml-6 rounded-md p-3 px-4'
                                onChange={handleInputChange} 
                            />
                        </div>
                    </div>

                    <div className='flex'>
                      <div>
                      <input
                            type='select'
                            id='select_product'
                            name='select_product'
                            placeholder='Select Product'
                            className='outline-black border border-gray-700 rounded-md p-3 px-4'
                            onChange={handleInputChange} 
                        />
                      </div>
                      <div>
                      <input
                            type='text'
                            id='state'
                            name='state'
                            placeholder='State'
                            className='outline-black border border-gray-700 ml-6 rounded-md p-3 px-4'
                            onChange={handleInputChange} 
                        />
                      </div>
                    </div>

                    <div>
                        <textarea
                            type='message'
                            rows="5"
                            id='enquiry'
                            name='enquiry'
                            placeholder='Enquiry'
                            co
                            className='outline-black border border-gray-700 rounded-md w-[530px] p-3 px-4'
                            onChange={handleInputChange} 
                        />
                    </div>
                    <div>
                        <button className='bg-[#89d038] text-white py-3 w-[530px] rounded-xl'
                        type='submit'
                        >
                            Submit Request
                        </button>
                    </div>

                </form>
            </div>


        </>
    )
}

export default Contact