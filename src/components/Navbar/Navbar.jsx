import React, { useState } from 'react'
import { IoIosSearch, IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <Logo />
      <div className="flex items-center justify-between lg:justify-center p-4 bg-[#1F2B6C] text-white">
        {/* Hamburger icon */}
        <div className='text-2xl font-semibold block lg:hidden'>
            <h1>MED<span className='text-[#159EEC]'>DICAL</span></h1>
        </div>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden text-3xl"
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-24">
          <Link to='/'><li>Home</li></Link>
          <Link to='/About'><li>About us</li></Link>
          <li>Services</li>
          <li>Doctors</li>
          <li>Contacts</li>
          <li>
            <button className="bg-[#BFD2F8] font-semibold text-[#1F2B6C] flex items-center gap-2 rounded-full px-6 py-2 cursor-pointer hover:bg-[#a8c0f0] transition">
              < IoIosSearch /> Appointment
            </button>
          </li>
        </ul>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="flex flex-col items-center bg-[#BFD2F8] text-[#1F2B6C] py-4 space-y-4 lg:hidden">
          <Link to='/'><li>Home</li></Link>
          <Link to='/About'><li>About us</li></Link>
          <li>Services</li>
          <li>Doctors</li>
          <li>Contacts</li>
          <li>
            <button className="text-[#BFD2F8] font-semibold bg-[#1F2B6C] flex items-center gap-2 rounded-full px-6 py-2 cursor-pointer hover:bg-[#a8c0f0] transition">
              <IoIosSearch /> Appointment
            </button>
          </li>
        </ul>
      )}
    </div>
  )
}

export default Navbar