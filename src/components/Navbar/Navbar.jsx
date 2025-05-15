import { useState } from 'react';
import { IoIosSearch, IoMdClose, IoMdMenu } from "react-icons/io";
import Logo from '../Logo/Logo';
import { Link } from 'react-router-dom';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space, Typography } from 'antd';

const items = [
  {
    key: '1',
    label: <Link to="/Single Service">Single Service</Link>,
  },
  {
    key: '2',
    label: <Link to="/Free Service">Free Service</Link>,
  }
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <Logo />

      {/* Navbar Header */}
      <div className="flex items-center justify-between lg:justify-center p-4 bg-[#1F2B6C] text-white transition-all duration-500 ease-in-out">
        {/* Mobile Logo */}
        <div className='text-2xl font-semibold block lg:hidden'>
          <h1>MED<span className='text-[#159EEC]'>DICAL</span></h1>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className={`lg:hidden text-3xl transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
        >
          {isOpen ? <IoMdClose /> : <IoMdMenu />}
        </button>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-x-10 ">
          <Link to='/'><li className='hover:text-[#159EEC] hover:underline'>Home</li></Link>
          <Link to='/About'><li className='hover:text-[#159EEC] hover:underline'>About us</li></Link>
          <Dropdown
            menu={{ items, selectable: true, defaultSelectedKeys: ['3'] }}
          >
            <Typography.Link>
              <Space className='text-white text-[16px] hover:text-[#159EEC] hover:underline'>
                Services
                <DownOutlined />
              </Space>
            </Typography.Link>
          </Dropdown>
          <Link to='/Contact'><li className='hover:text-[#159EEC] hover:underline'>Contact</li></Link>
          <Link to='/Doctors'><li className='hover:text-[#159EEC] hover:underline'>Doctors</li></Link>
          <Link to="/Appointment">
            <li>
              <button className="text-[#BFD2F8] font-semibold bg-[#1F2B6C] flex items-center gap-2 rounded-full px-6 py-2 cursor-pointer hover:text-[#1F2B6C] hover:bg-[#a8c0f0] transition">
                <IoIosSearch /> Appointment
              </button>
            </li>
          </Link>
        </ul>
      </div>

      {/* Mobile Menu with Animation */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'max-h-[500px] opacity-100 py-4' : 'max-h-0 opacity-0 py-0'
          } bg-[#BFD2F8] text-[#1F2B6C]`}
      >
        <ul className="flex flex-col items-center space-y-4">
          <Link to='/'><li>Home</li></Link>
          <Link to='/About'><li>About us</li></Link>
          <Link to='/Single Service'><li>Single Service</li></Link>
          <Link to='/Free Service'><li>Free Service</li></Link>
          <Link to='/Doctors'><li>Doctors</li></Link>
          <Link to='/Contact'><li>Contact</li></Link>
          <Link to="/Appointment">
            <li>
              <button className="text-[#BFD2F8] font-semibold bg-[#1F2B6C] flex items-center gap-2 rounded-full px-6 py-2 cursor-pointer hover:bg-[#a8c0f0] transition">
                <IoIosSearch /> Appointment
              </button>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
