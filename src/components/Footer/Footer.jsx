import React from 'react'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function Footer() {
  return (
    <div className="bg-[#1F2B6C] w-full py-10 px-4 sm:px-6 lg:px-20 text-white">
      <div className="max-w-7xl mx-auto flex flex-col space-y-10">
        {/* Top grid */}
        <div className="grid grid-cols-1 text-center md:grid-cols-3 gap-8 border-b border-gray-400 pb-10">
          <div>
            <h1 className="uppercase text-4xl text-[#BFD2F8] font-bold">meddical</h1>
            <p className="mt-4 text-sm leading-relaxed">
              Leading the Way in Medical <br />
              Excellence, Trusted Care.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Important Links</h2>
            <ul className="space-y-2 text-sm">
              <li>Appointment</li>
              <li>Doctors</li>
              <li>Services</li>
              <li>About us</li>
            </ul>
          </div>

          <div>
            <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
            <ul className="space-y-2 text-sm">
              <li>Call: (237) 681-812-255</li>
              <li>Email: fildineesoe@gmail.com</li>
              <li>Address: 0123 Some place</li>
              <li>Some country</li>
            </ul>
          </div>
        </div>

        {/* Bottom row */}
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center text-xs sm:text-sm">
          <p className="text-center sm:text-left mt-4 sm:mt-0">
            © 2021 Hospital’s name. All Rights Reserved by PNTEC-LTD
          </p>
          <div className="flex gap-3">
            <div className="w-7 h-7 bg-[#BFD2F8] text-[#1F2B6C] rounded-full flex items-center justify-center cursor-pointer">
              <FaLinkedinIn size={14} />
            </div>
            <div className="w-7 h-7 bg-[#BFD2F8] text-[#1F2B6C] rounded-full flex items-center justify-center cursor-pointer">
              <FaFacebookF size={14} />
            </div>
            <div className="w-7 h-7 bg-[#BFD2F8] text-[#1F2B6C] rounded-full flex items-center justify-center cursor-pointer">
              <FaInstagram size={14} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
