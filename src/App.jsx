import { useState, useEffect } from 'react'
import './App.css'

import Footer from './components/Footer'
import { IoCall, IoLocation, IoMail } from 'react-icons/io5'
import { IoLogoFacebook, IoLogoLinkedin } from 'react-icons/io'
import { SiIndeed } from 'react-icons/si'
import { TbWorld } from 'react-icons/tb'
import { FaQuestion } from 'react-icons/fa'
import { FaFaceSmile } from 'react-icons/fa6'

function App() {
  const [isModal, setIsModal] = useState(false);

  const handleModal = () => {
    setIsModal(!isModal);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const size = 30;

  return (
    <body className="antialiased bg-gray-100">
      <div className='App flex flex-col justify-between min-h-screen bg-gray-100 transition-all duration-500 ease-in-out'>

        {/* header */}
        <h1 className='font2 p-2'>WTS - Wireless Testing Solutions</h1>

        {/* container */}
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

                    {/* wts phone */}
                    <div className='flex'>
                      <div className='w-1/12 md:w-2/12'>
                        <span><IoCall className='text-teal-100 text-xl' size={size * 0.8} /></span>
                      </div>
                      <div className='w-11/12 md:w-10/12 text-left'>
                        <span>407-600-8151</span>
                      </div>
                    </div>

                    {/* wts email */}
                    <div className='flex'>
                      <div className='w-1/12 md:w-2/12'>
                        <span><IoMail className='text-teal-100 text-xl' size={size * 0.8} /></span>
                      </div>
                      <div className='w-11/12 md:w-10/12 text-left'>
                        <span><a href="mailto:moderator@wtsorg.com"></a>moderator-apply@wtsorg.com</span>
                      </div>
                    </div>

                    {/* wts location */}
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

                    {/* more info */}
                    <div className='flex'>
                      <div className='w-1/12 md:w-2/12'>
                        <span><FaQuestion className='text-teal-100 text-xl' size={size * 0.8} /></span>
                      </div>
                      <div className='w-11/12 md:w-10/12 text-left'>
                        <button onClick={handleModal}>More info ...</button>
                      </div>
                    </div>
                  </div>

                  {/* modal */}
                  {isModal && 
                    <div className="relative z-20" aria-labelledby="modal-title" role="dialog" aria-modal="true">
                    
                      <div className="fixed inset-0 bg-gray-500/75 transition-opacity" aria-hidden="true"></div>

                      <div className="fixed inset-0 z-20 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                          
                          <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                              <div className="sm:flex sm:items-start">

                                <div className="mx-auto flex size-12 shrink-0 items-center justify-center rounded-full bg-red-100 sm:mx-0 sm:size-10">
                                  <FaFaceSmile size={size} />
                                </div>
                                <div className="mt-3 text-center sm:mt-0 sm:ml-4 sm:text-left">
                                  <h3 className="text-base font-semibold text-gray-900" id="modal-title">Test Moderator 101</h3>
                                  <div className="mt-2">
                                    <p className="text-sm text-gray-500">The moderator works directly with test participants and guides them through the study.</p>
                                    <p className="text-sm text-gray-500 mt-2">The best way to maximize the chance of a successful product testing is to lead with a focused mindset and show proper hand motions by example. Use a learn-as-you-go approach. Keep instructions very simple yet precise.</p>
                                    <p className="text-sm text-gray-500 mt-2">If a participant has difficulty with the motion, direct them positively back to the right path. Respond cheerfully yet truthfully.</p>
                                    <p className="text-sm text-gray-500 mt-2">Moderators can have a natural conversation with participants, this establishes trust and participants are generally more motivated to complete the tests more accurately.</p>
                                    <p className="text-sm text-gray-500 mt-2">Keep ideal time brief and remember that the main purpose of the study is to capture good quality tests.</p>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                              <button type="button" onClick={handleModal} className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 ring-1 shadow-xs ring-gray-300 ring-inset hover:bg-gray-50 sm:mt-0 sm:w-auto">Close</button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  }

                  {/* socials */}
                  <div className='flex space-x-4 my-4 mt-8'>
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

                        {/* Honeypot field */}
                        <div className="hidden">
                          <label htmlFor="_honeypot">Don't fill this out if you're human:</label>
                          <input type="text" id="_honeypot" name="_honeypot" />
                        </div>

                        {/* disable captcha */}
                        <input type="hidden" name="_captcha" value={false} />

                        {/* subject line */}
                        <input type="hidden" name="_subject" value="New Moderator Form Submission!"></input>

                        {/* name */}
                        <div>
                          <label htmlFor="name" className='text-sm'>Full Name *</label>
                          <input type="text" name="name" id="name" placeholder='Your name' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' required />
                        </div>

                        {/* email */}
                        <div>
                          <label htmlFor="email" className='text-sm'>Email *</label>
                          <input type="text" name="email" id="email" placeholder='username@domain.com' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" />
                        </div>

                        {/* phone */}
                        <div>
                          <label htmlFor="phone" className='text-sm'>Phone *</label>
                          <input type="text" name="phone" id="phone" placeholder='(456) 789-1234' className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' required />
                        </div>

                        {/* message */}
                        {/* <div>
                          <label htmlFor="message" className='text-sm'>Message</label>
                          <textarea type="text" name="message" id="message" placeholder='Message' rows="4" className='ring-1 ring-gray-300 w-full rounded-md px-4 py-2 mt-2 outline-none focus:ring-2 focus:ring-teal-300' ></textarea>
                        </div> */}

                        <div className='text-sm'>
                          By submitting this form you consent WTS to contact you via phone or email.
                        </div>
                        <div className='flex justify-between items-center'>
                          <span className='text-sm'>* Required </span>
                          <button className="inline-block self-end bg-cyan-700 text-white font-bold rounded-lg px-6 py-2 uppercase text-sm"
                            onSubmit={handleSubmit}
                          >
                            Send Form
                          </button>

                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <span className='text-xs p-2'>v1.0</span>
          </div>
        </div>

        <Footer />
      </div>
    </body>
  )
}

export default App
