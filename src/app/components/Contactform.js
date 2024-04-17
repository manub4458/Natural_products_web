import React from 'react';

const ContactForm = ({ onClose }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center">
      <div className="fixed inset-0 bg-black opacity-50"></div>
      <div className="bg-white p-8 rounded-lg shadow-lg z-10 fixed right-0 top-0 h-full xl:w-[40vw] lg:w-[58vw]  transform transition-transform duration-300 ease-in-out translate-x-full sm:translate-x-0">
        <button className="absolute top-2 right-2 text-gray-500" onClick={onClose}>
          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        <h2 className="text-2xl font-semibold text-center">React Out to us</h2>
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
          <form className='    space-y-8  my-10 max-w-[60vw] lg:max-w-[60vw] '>
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

                </form>

      </div>
    </div>
  );
};

export default ContactForm;
