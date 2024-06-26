"use client"
import React, { useState } from 'react';

const ContactForm = ({ onClose }) => {
  const [formData, setFormData] = useState({
    firstname:'',
    lastname:'',
    email:"",
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

 const [email, setEmail] = useState('');
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
    <div className="fixed inset-0 flex items-center h-fit justify-center ">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10 fixed right-0 top-0 h-full xl:w-[40vw] lg:w-[58vw]  form transform transition-transform duration-300 ease-in-out translate-x-full sm:translate-x-0">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        {/* <h2 className="text-2xl font-semibold text-center">React Out to us</h2> */}
        {/* <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 font-bold mb-2">Name</label>
            <input type="text" id="name" name="name" required className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 font-bold mb-2">Email</label>
            <input type="email" id="email" name="email" required className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500" />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 font-bold mb-2">Message</label>
            <textarea id="message" name="message" required rows="4" className="w-full px-4 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
          </div>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300">Send</button>
        </form> */}
          {/* <form className='    space-y-8  my-10 max-w-[60vw] lg:max-w-[60vw] '>
                    <div>
                        <h2 className='text-3xl font-semibold sedan'>
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

                </form> */}

<form className='space-y-8 lg:space-y-4   xl:space-y-6 my-10 lg:mt-0 max-w-[60vw]  lg:max-w-[60vw] '
                onSubmit={handleSubmit}
                data-netlify="true"
                >
                    <div>
                        <h2 className='text-3xl font-semibold sedan'>
                            Request a Quote
                        </h2>
                    </div>

                    <div className='flex'>
                        <div className='grid'>
                        <label htmlFor="email">First Name <span style={{ color: 'red' }}>*</span></label>
                            <input
                                type='text'
                                id='firstname'
                                name='firstname'
                                placeholder='First Name'
                                className='outline-black border border-gray-700 rounded-md p-3 px-4'
                                onChange={handleInputChange} 
                                required
                            />
                               {errors.firstname && <p style={{ color: 'red' }}>{errors.firstname}</p>}
                        </div>
                        <div className='mt-6'>
                            <input
                                type='text'
                                id='lastname'
                                name='lastname'
                                placeholder='Last Name'
                                className='outline-black border border-gray-700 ml-6 rounded-md p-3 px-4 '
                                onChange={handleInputChange} 

                            />
                            {errors.lastname && <p className='pl-10' style={{ color: 'red' }}>{errors.lastname}</p>}
                        </div>
                    </div>
                    <div className='grid'>
                    <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='Email'
                            className='outline-black border border-gray-700 rounded-md w-[530px] lg:w-[525px] p-3 px-4'
                            onChange={(e)=>{handleInputChange(e); handleChange(e);}} 
                            required
                        />
                         {emailError && <p style={{ color: 'red' }}>{emailError}</p>}
                    </div>
                  
                    <div className='flex'>
                        <div className='grid'>
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
                        <div className='mt-6'>
                            <input
                                type='text'
                                id='company_name'
                                name='company_name'
                                placeholder='Company Name'
                                className='outline-black border border-gray-700 ml-6 rounded-md p-3 px-4'
                                onChange={handleInputChange} 
                                required
                            />
                        </div>
                    </div>

                    <div className='flex'>
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
                        className='outline-black border border-gray-700 rounded-md w-[255px] p-3 px-4'
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
                        className='outline-black border border-gray-700 rounded-md w-[255px] p-3 px-4 ml-5'
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

                    <div className='grid'>
                    <label htmlFor="email">Enquiry <span style={{ color: 'red' }}>*</span></label>

                        <textarea
                            type='message'
                            rows="5"
                            id='enquiry'
                            name='enquiry'
                            placeholder='Enquiry'
                            co
                            className='outline-black border lg:hidden xl:inline-block border-gray-700 rounded-md w-[530px] p-3 px-4'
                            onChange={handleInputChange} 
                            required
                        />
                         <textarea
                            type='message'
                            rows="3"
                            id='enquiry'
                            name='enquiry'
                            placeholder='Enquiry'
                            co
                            className='outline-black border br lg:inline-block xl:hidden border-gray-700 rounded-md w-[530px] p-3 px-4'
                            onChange={handleInputChange} 
                            required
                        />
                    </div>
                    <div>
                        <button className='bg-[#89d038] text-white py-3 w-[530px] lg:py-1 xl:py-3 rounded-xl'
                        type='submit'
                        >
                            Submit Request
                        </button>
                    </div>

                </form>

      </div>
    </div>
  );
};

export default ContactForm;
