import React from 'react'
import sub from '../../assets/SubHead.png'
import pti from '../../assets/pti.png'
import lok from '../../assets/lok.png'
import { GoClock } from 'react-icons/go'
import { MdOutlineMailOutline } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import { PiPhoneCallLight } from 'react-icons/pi'

function Service() {
    return (
        <div>
            <div className="w-full h-[250px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${sub})`, }}>
                <div className='ml-23 md:ml-35'>
                    <h1 className='text-[#1F2B6C] text-5xl md:text-7xl pt-40 md:pt-25'>Our Service</h1>
                </div>
            </div>

            <div className="flex items-center justify-center my-5 md:h-[200vh] w-full">
                <div className='w-[95%] md:w-[80%]'>
                    <div>
                        <div className='grid grid-cols-2 md:grid-cols-3 gap-3 gap-y-3'>
                            <div className='rounded-md border-1 border-gray-100 shadow-sm w-[180px] h-[420px] md:w-[317px] md:h-[552px]'>
                                <img className='w-full' src={pti} alt="" />
                               
                                <div className='p-4 mt-4'>
                                    <h1 className='text-md md:text-2xl tracking-wider text-[#1F2B6C] font-semibold'>Free Checkup</h1>
                                    <p className='text-[12px] mt-2 md:mt-3'>Lorem ipsum dolor sit amet consectetur, enim laborum quisquam necessitatibus ratione? Nemo omnis quam minima quisquam nostrum odit aliquid earum eum.</p>
                                    <a class="text-[#159EEC] my-5 inline-flex items-center cursor-pointer">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='rounded-md border-1  border-gray-100 shadow-sm w-[180px] h-[420px] md:w-[317px] md:h-[552px] relative'>
                                <img className='w-full' src={pti} alt="" />
                                 <div className='bg-[#1F2B6C] md:h-[80px] h-[65px] w-[65px] top-34 ml-22 md:ml-[190px] md:top-65 md:w-[80px] rounded-full flex items-center justify-center absolute'><img src={lok} alt="" /></div>
                                <div className='p-4 mt-4'>
                                    <h1 className='text-md md:text-2xl tracking-wider text-[#1F2B6C] font-semibold'>Free Checkup</h1>
                                    <p className='text-[12px] mt-2 md:mt-3'>Lorem ipsum dolor sit amet consectetur, enim laborum quisquam necessitatibus ratione? Nemo omnis quam minima quisquam nostrum odit aliquid earum eum.</p>
                                    <a class="text-[#159EEC] my-5 inline-flex items-center cursor-pointer">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='rounded-md border-1 border-gray-100 shadow-sm w-[180px] h-[420px] md:w-[317px] md:h-[552px] relative'>
                                <img className='w-full' src={pti} alt="" />
                                <div className='bg-[#1F2B6C] md:h-[80px] h-[65px] w-[65px] top-34 ml-22 md:ml-[190px] md:top-65 md:w-[80px] rounded-full flex items-center justify-center absolute'><img src={lok} alt="" /></div>
                                <div className='p-4 mt-4'>
                                    <h1 className='text-md md:text-2xl tracking-wider text-[#1F2B6C] font-semibold'>Free Checkup</h1>
                                    <p className='text-[12px] mt-2 md:mt-3'>Lorem ipsum dolor sit amet consectetur, enim laborum quisquam necessitatibus ratione? Nemo omnis quam minima quisquam nostrum odit aliquid earum eum.</p>
                                    <a class="text-[#159EEC] my-5 inline-flex items-center cursor-pointer">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='rounded-md border-1 border-gray-100 shadow-sm w-[180px] h-[420px] md:w-[317px] md:h-[552px] relative'>
                                <img className='w-full' src={pti} alt="" />
                                <div className='bg-[#1F2B6C] md:h-[80px] h-[65px] w-[65px] top-34 ml-22 md:ml-[190px] md:top-65 md:w-[80px] rounded-full flex items-center justify-center absolute'><img src={lok} alt="" /></div>
                                <div className='p-4 mt-4'>
                                    <h1 className='text-md md:text-2xl tracking-wider text-[#1F2B6C] font-semibold'>Free Checkup</h1>
                                    <p className='text-[12px] mt-2 md:mt-3'>Lorem ipsum dolor sit amet consectetur, enim laborum quisquam necessitatibus ratione? Nemo omnis quam minima quisquam nostrum odit aliquid earum eum.</p>
                                    <a class="text-[#159EEC] my-5 inline-flex items-center cursor-pointer">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='hidden md:block rounded-md border-1 border-gray-100 shadow-sm w-[317px] h-[552px] relative'>
                                <img className='w-full' src={pti} alt="" />
                                <div className='bg-[#1F2B6C] h-[80px] ml-[190px] top-65 w-[80px] rounded-full flex items-center justify-center absolute'><img src={lok} alt="" /></div>
                                <div className='p-4 mt-4'>
                                    <h1 className='text-2xl tracking-wider text-[#1F2B6C] font-semibold'>Free Checkup</h1>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, enim laborum quisquam necessitatibus ratione? Nemo omnis quam minima quisquam nostrum odit aliquid earum eum.</p>
                                    <a class="text-[#159EEC] my-5 inline-flex items-center cursor-pointer">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className='hidden  md:block  rounded-md border-1 border-gray-100 shadow-sm w-[317px] h-[552px] relative'>
                                <img className='w-full' src={pti} alt="" />
                                <div className='bg-[#1F2B6C] h-[80px] ml-[190px] top-65 w-[80px] rounded-full flex items-center justify-center absolute'><img src={lok} alt="" /></div>
                                <div className='p-4 mt-4'>
                                    <h1 className='text-2xl tracking-wider text-[#1F2B6C] font-semibold'>Free Checkup</h1>
                                    <p className='mt-3'>Lorem ipsum dolor sit amet consectetur, enim laborum quisquam necessitatibus ratione? Nemo omnis quam minima quisquam nostrum odit aliquid earum eum.</p>
                                    <a class="text-[#159EEC] my-5 inline-flex items-center cursor-pointer">Learn More
                                        <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </a>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                </div>
            </div>

            <div className='h-auto md:h-[100vh] w-full flex items-center justify-center'>
                    <div className='w-[95%] md:w-[80%] mb-5 flex'>
                      <div className='text-center w-full'>
                        <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>Get in Touch</h1>
                        <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Contact</h1>
                        <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 md:mt-13'>
                          <div className='bg-[#bfd2f8] rounded-sm md:h-[233px] h-[185px] md:w-[233px] w-[180px] text-[#1F2B6C]'>
                            <div className='md:py-10 py-2 px-5 text-left'>
                              <span className='text-5xl'><PiPhoneCallLight /></span>
                              <h1 className='uppercase font-bold mt-2'>Emergency</h1>
                              <p className='mt-2'>(237) 681-812-255</p>
                              <p>(237) 666-331-894</p>
                            </div>
                          </div>
                          <div className='text-[#bfd2f8] rounded-sm md:h-[233px] h-[185px] md:w-[233px] w-[180px] bg-[#1F2B6C]'>
                            <div className='md:py-10 py-2 px-5 text-left'>
                              <span className='text-5xl'><CiLocationOn /></span>
                              <h1 className='uppercase font-bold mt-2'>Location</h1>
                              <p className='mt-2'>0123 Some place</p>
                              <p>9876 Some country</p>
                            </div>
                          </div>
                          <div className='bg-[#bfd2f8] rounded-sm md:h-[233px] h-[185px] md:w-[233px] w-[180px] text-[#1F2B6C]'>
                            <div className='md:py-10 py-2 px-5 text-left'>
                              <span className='text-5xl'><MdOutlineMailOutline /></span>
                              <h1 className='uppercase font-bold mt-2'>email</h1>
                              <p className='mt-2 text-[14px]'>fildineeesoe@gmil.com</p>
                              <p className='text-[13px]'>myebstudios@gmail.com</p>
                            </div>
                          </div>
                          <div className='text-[#bfd2f8] rounded-sm md:h-[233px] h-[185px] md:w-[233px] w-[180px] bg-[#1F2B6C]'>
                            <div className='md:py-10 py-2 px-5 text-left'>
                              <span className='text-5xl'><GoClock /></span>
                              <h1 className='uppercase font-bold mt-2'>Working Hours</h1>
                              <p className='mt-2 text-[15px]'>Mon-Sat 09:00-20:00</p>
                              <p className='text-[15px]'>Sunday Emergency only</p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
            </div>
        </div>
    )
}

export default Service