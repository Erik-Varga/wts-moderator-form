import { useState, useEffect } from 'react'
import './App.css'

import Footer from './components/Footer'
import { IoCall, IoLocation, IoMail } from 'react-icons/io5'
import { IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io'
import { SiIndeed } from 'react-icons/si'
import { TbWorld } from 'react-icons/tb'

function App() {
  const size = 30;

  return (
    <body className="antialiased bg-gray-100">
      <div className='App flex flex-col justify-between min-h-screen bg-gray-100 transition-all duration-500 ease-in-out'>

        <h1 className='font2 p-2'>WTS - Wireless Testing Solutions</h1>

        <div className='flex w-full justify-center items-center'>
          <div className="flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-6 bg-cyan-700 w-full max-w-4xl rounded-xl shadow-lg text-white overflow-hidden">

            <div className='flex flex-col space-y-8 justify-between p-4 sm:p-12'>

              {/* info */}
              <div className='relative z-10'>
                <h1 className='font-bold text-4xl tracking-wide'>Join our Moderator Team</h1>
                <p className="p-2 text-cyan-100 text-sm">We are looking for individuals to help moderate participants in a hand-motion research study involving innovative features of Ray-Ban Sunglasses. If you are friendly, observant and comfortable working directly with test participants and would like to be added to the Moderator List, please complete this form.</p>

                <div className="p-2 rounded flex justify-center items-center text-cyan-100 text-sm">Flexible Hours | Day-shift | In-Office | Temporary Contract | $17.50 per hour</div>
              </div>

              {/* contact */}

              <div className='flex flex-col md:flex-row'>
                <div className="w-full flex flex-col justify-between">
                  <div></div>
                  <div className='flex flex-col space-y-6 w-full'>
                    <div className='flex'>
                      <div className='w-1/12 md:w-2/12'>
                        <span><IoCall className='text-teal-100 text-xl' size={size * 0.8} /></span>
                      </div>
                      <div className='w-11/12 md:w-10/12 text-left'>
                        <span>407-600-8151</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-1/12 md:w-2/12'>
                        <span><IoMail className='text-teal-100 text-xl' size={size * 0.8} /></span>
                      </div>
                      <div className='w-11/12 md:w-10/12 text-left'>
                        <span><a href="mailto:moderator@wtsorg.com"></a>moderator-apply@wtsorg.com</span>
                      </div>
                    </div>
                    <div className='flex'>
                      <div className='w-1/12 md:w-2/12'>
                        <span><IoLocation className='text-teal-100 text-xl' size={size * 0.8} /></span>
                      </div>
                      <div className='w-11/12 md:w-10/12 text-left'>
                        <div>2180 W State Road 434</div>
                        <div>Suite #2110</div>
                        <div>Longwood, FL 32779</div>
                      </div>
                    </div>
                  </div>
                  <div className='flex space-x-4 my-4'>
                    <a href="#"><span><IoLogoFacebook size={size} /></span></a>
                    <a href="#"><span><IoLogoLinkedin size={size} /></span></a>
                    <a href="#"><span><SiIndeed size={size} /></span></a>
                    <a href="https://www.testwts.com" target='_blank'><span><TbWorld size={size} /></span></a>
                  </div>
                </div>

                <div className="w-full">
                  {/* form */}
                  <div className='relative'>
                    
                    {/* circles */}
                    <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -right-20 -top-10"></div>
                    <div className="absolute z-0 w-40 h-40 bg-teal-400 rounded-full -left-20 -bottom-20"></div>


                    <div className='relative z-10 bg-white rounded-xl shadow-lg p-2 md:p-8 text-gray-600'>
                      <form action="https://formsubmit.co/d2f16ff55e67af109737b260bde0496c" method='POST' className='flex flex-col space-y-4'>

                        {/* name */}
                        <div>
                          <label htmlFor="name" className='text-sm'>Full Name *</label>
                          <input type="text" name="name" placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' required />
                        </div>

                        {/* email */}
                        <div>
                          <label htmlFor="" className='text-sm'>Email *</label>
                          <input type="text" name="email" placeholder='username@domain.com' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"/>
                        </div>

                        {/* phone */}
                        <div>
                          <label htmlFor="" className='text-sm'>Phone *</label>
                          <input type="text" name="phone" placeholder='(456) 789-1234' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' required />
                        </div>

                        {/* message */}
                        <div>
                          <label htmlFor="" className='text-sm'>Message</label>
                          <textarea type="text" name="message" placeholder='Message' rows="4" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' ></textarea>
                        </div>

                        <div className='flex justify-between items-center'>
                        <span className='text-sm'>* Required </span>
                        <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm">
                          Send Form
                        </button>

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>


          </div>
        </div>
        <Footer />
      </div>
    </body>
  )
}

export default App
