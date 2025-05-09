import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
    return (
        <div className='bg-[#1F2B6C] h-[427px] flex items-center justify-center w-full'>
            <div className='w-[70%]'>
                <div className='grid grid-cols-3 gap-2 text-white w-full border-b-1 pb-17'>
                    <div>
                        <h1 className='uppercase text-4xl text-[#BFD2F8]'>meddical</h1>
                        <p className='mt-5'>Leading the Way in Medical
                            Execellence, Trusted Care.</p>
                    </div>
                    <div>
                        <h1>Important Links</h1>
                        <p className='mt-9'>Appointment</p>
                        <p>Doctors</p>
                        <p>Services</p>
                        <p>About us</p>
                    </div>
                    <div>
                        <h1>Contact us</h1>
                        <p className='mt-9'>Call: (237) 681-812-255</p>
                        <p>Email: fildineesoe@gmail.com</p>
                        <p>Address: 0123 Some place</p>
                        <p>Some country</p>
                    </div>
                </div>
                <div className='mt-8 text-white text-sm tracking-wider flex justify-between'>
                    <h1>© 2021 Hospital’s name All Rights Reserved by PNTEC-LTD</h1>
                    <div className='flex gap-2 ml-auto'>
                        <div className='w-[26px] h-[26px] bg-[#BFD2F8] text-[#1F2B6C] rounded-full items-center justify-center flex cursor-pointer'><FaLinkedinIn /></div>
                        <div className='w-[26px] h-[26px] bg-[#BFD2F8] text-[#1F2B6C] rounded-full items-center justify-center flex cursor-pointer'><FaFacebookF /></div>
                        <div className='w-[26px] h-[26px] bg-[#BFD2F8] text-[#1F2B6C] rounded-full items-center justify-center flex cursor-pointer'><FaInstagram /></div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Footer