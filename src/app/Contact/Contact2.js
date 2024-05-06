"use client"
import { useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

const Contact2 = () => {
    const searchParams = useSearchParams();
    const queryEmail = searchParams.get("email")
    // console.log(queryEmail)
    const [formData, setFormData] = useState({
        firstname:'',
        lastname:'',
        email:queryEmail || '',
        phone_number:'',
        company_name:'',
        select_product:'',
        state:'',
        enquiry: ""
    });
    const [errors, setErrors] = useState({
        firstname: '',
        lastname: '',
        email: '',
        phone_number: '',
        company_name: '',
        select_product: '',
        state: '',
        enquiry: '',
    });
    
    const [submitting, setSubmitting] = useState(false);
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        let newValue = value;
        let error = '';
    
        // Validation for first name and last name: only English alphabets allowed
        if (name === 'firstname' || name === 'lastname') {
            if (!/^[a-zA-Z]*$/.test(value)) {
                error = 'Only English alphabets allowed';
            }
        }
        if (name === 'email' || queryEmail) {
            if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) {
                error = 'please add @ with the email';
            }
        }
        // Validation for phone number: should start with +91 followed by 10 digits
        if (name === 'phone_number') {
            if (!/^\+91\d{10}$/.test(value)) {
                error = 'Phone number should start with +91 followed by 10 digits';
            }
        }
        
        setErrors({
            ...errors,
            [name]: error,
        });
    
        setFormData({
            ...formData,
            [name]: newValue,
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

     const [email, setEmail] = useState(queryEmail || '');
     const [emailError, setEmailError] = useState('');
  
     
     const handleSubmitt = (event) => {
         event.preventDefault();
         
         if (!isValidEmail(email)) {
             setEmailError('Please enter a valid email address');
             return;
         }
 
         // Handle form submission
         console.log('Email submitted:', email);
     };
 
     const handleChange = (event) => {
         setEmail(event.target.value);
         setEmailError('');
     };
 
     const isValidEmail = (email) => {
         const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
         return emailRegex.test(email);
     };
        
     
     
    return (
        <>

            <div >
                <form className=' main_cont space-y-4 '
                onSubmit={handleSubmit}
                data-netlify="true"
                >
                    <div>
                        <h2 className='text-3xl font-semibold sedan'>
                            Request a Quote
                        </h2>
                    </div>

                    <div className='flex main_cont1'>
                        <div className='grid space-y-2'>
                        <label >First Name <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type='text'
                                id='firstname'
                                name='firstname'
                                placeholder='First Name'
                                className='outline-black border border-gray-700 rounded-md p-3 px-4 '
                                onChange={handleInputChange} 
                                required
                            />
                               {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname}</p>}
                        </div>
                        <div className=''>
                       

                            <input
                                type='text'
                                id='lastname'
                                name='lastname'
                                placeholder='Last Name'
                                className='outline-black border border-gray-700 rounded-md p-3 px-4 '
                                onChange={handleInputChange} 

                            />
                            {errors.lastname && <p className='pl-10' style={{ color: 'red' }}>{errors.lastname}</p>}
                        </div>
                    </div>
                    <div className='grid space-y-2 '>
                    <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            value={email}
                            placeholder='Email'
                            className='outline-black border border-gray-700 rounded-md email  p-3 px-4'
                            onChange={(e)=>{handleInputChange(e); handleChange(e);}} 
                            // onChange={handleInputChange} 
                            required
                        />
                         {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                         {/* {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>} */}
                    </div>
                  
                    <div className='flex main_cont1'>
                        <div className='grid space-y-2'>
                    <label htmlFor="email">Phone Number <span style={{ color: 'red' }}>*</span></label>

                            <input
                                type='phone number'
                                id='phone_number'
                                name='phone_number'
                                placeholder='Phone'
                                className='outline-black border border-gray-700 rounded-md p-3 px-4'
                                onChange={handleInputChange} 
                                required
                            />
                               {errors.phone_number && <p className='text-sm w-[200px] ' style={{ color: 'red' }}>{errors.phone_number}</p>}

                        </div>
                        <div className=''>
                            <input
                                type='text'
                                id='company_name'
                                name='company_name'
                                placeholder='Company Name'
                                className='outline-black border border-gray-700  rounded-md p-3 px-4'
                                onChange={handleInputChange} 
                                required
                            />
                        </div>
                    </div>

                    <div className='flex main_cont1'>
                      <div>
                      {/* <input
                            type='select'
                            id='select_product'
                            name='select_product'
                            placeholder='Select Product'
                            className='outline-black border border-gray-700 rounded-md p-3 px-4'
                            onChange={handleInputChange} 
                            required
                            
                        /> */}
                        <select
                        className='outline-black border border-gray-700 rounded-md p-3 px-4 email'
                        onChange={handleInputChange}
                        name='select_product'
                        >
                            <option>
                               Select Product
                            </option>
                            <option>
                                Haircare
                            </option>
                            <option>
                                Skincare
                            </option>
                            <option>
                                Both
                            </option>
                        </select>
                      </div>
                      <div >
                      <select
                        className='outline-black border border-gray-700 rounded-md p-3 px-4 email '
                        onChange={handleInputChange}
                        name='state'
                        >
                            <option>
                               Select State
                            </option>
                            <option>
                            Andaman & Nicobar
                            </option>
                            <option>
                            Andhra Pradesh
                            </option>
                            <option>
                            Arunachal Pradesh
                            </option>
                            <option>
                            Assam
                            </option>
                            <option>
                            Bihar
                            </option>
                            <option>
                            Chandigarh
                            </option>
                            <option>
                            Chhattisgarh
                            </option>
                            <option>
                                Delhi
                            </option>
                            <option>
                            Goa
                            </option>
                            <option>
                            Gujarat
                            </option>
                            <option>
                            Haryana
                            </option>


                            <option>
                            Himachal Pradesh
                            </option>
                            <option>
                            Jammu & Kashmir
                            </option>
                            <option>
                            Jharkhand
                            </option>
                            <option>
                            Karnataka
                            </option>
                            <option>
                            Kerala
                            </option>
                            <option>
                            Ladakh 
                            </option>
                            <option>
                            Madhya Pradesh
                            </option>
                            <option>
                            Maharashtra
                            </option>
                            <option>
                            Manipur
                            </option>


                            <option>
                            Meghalaya
                            </option>
                            <option>
                            Mizoram
                            </option>
                            <option>
                            Nagaland
                            </option>

                            <option>
                            Odisha
                            </option>
                            <option>
                            Punjab
                            </option>
                            <option>
                            Rajasthan
                            </option>
                            <option>
                            Sikkim
                            </option>
                            <option>
                            Tamil Nadu
                            </option>
                            <option>
                            Telangana
                            </option>
                            <option>
                            Tripura
                            </option>
                            <option>
                            Uttar Pradesh
                            </option>
                            <option>
                            Uttarakhand
                            </option>

                        </select>
                      </div>
                    </div>

                    <div className='grid space-y-2'>
                    <label htmlFor="email">Enquiry <span style={{ color: 'red' }}>*</span></label>

                        <textarea
                            type='message'
                            rows="3"
                            id='enquiry'
                            name='enquiry'
                            placeholder='Enquiry'
                            className='outline-black border border-gray-700 rounded-md email  p-3 px-4'
                            onChange={handleInputChange} 
                            required
                        />
                    </div>
                    <div>
                        <button className='bg-[#89d038] text-white py-3 px-8  rounded-xl'
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

export default Contact2