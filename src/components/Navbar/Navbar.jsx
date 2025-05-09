import React from 'react'
import { IoIosSearch } from "react-icons/io";
import Logo from '../Logo/Logo';

function Navbar() {
  return (
    <div>
      <Logo/>
      <nav className="bg-[#1F2B6C] text-white h-20 w-full">
        <ul className="flex items-center justify-center gap-x-16 py-4">
          <li><a href="#" className="hover:underline">Home</a></li>
          <li><a href="#" className="hover:underline">About Us</a></li>
          <li><a href="#" className="hover:underline">Services</a></li>
          <li><a href="#" className="hover:underline">Doctors</a></li>
          <li><a href="#" className="hover:underline">Contacts</a></li>
          <li>
            <button className="bg-[#BFD2F8] font-semibold text-[#1F2B6C] flex items-center gap-2 rounded-full px-6 py-2 cursor-pointer hover:bg-[#a8c0f0] transition">
              <IoIosSearch /> Appointment
            </button>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar