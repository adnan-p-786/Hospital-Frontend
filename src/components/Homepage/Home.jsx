import React from 'react'
import './Home.css'
import banner from '../../assets/Group 51.png'
import img from '../../assets/Group 94.png'
import image from '../../assets/Group 183.png'
import logo from '../../assets/Vector.png'
import jen from '../../assets/1.png'
import jon from '../../assets/2.png'
import jeen from '../../assets/3.png'
import news from '../../assets/Rectangle 34.png'
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import Footer from '../../components/Footer/Footer'

const categories = [
  "Neurology", "Bones", "Oncology", "Otorhinolaryngology",
  "Ophthalmology", "Cardiovascular", "Pulmonology", "Renal Medicine",
  "Gastroenterology", "Urology", "Dermatology", "Gynaecology"
];

const selected = "Bones";
function Home() {
  return (
    <div>
      <div className="w-full h-[450px]" style={{ backgroundImage: `url(${img})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="ml-[165px] pt-35">
          <div>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest'>CARING FOR LIFE</h1>
            <h1 className='text-5xl text-[#1F2B6C] tracking-wide leading-14'>Leading the Way <br /> in Medical Excellence </h1>
            <button className='text-[#1F2B6C] font-semibold bg-[#BFD2F8] mt-5 px-7 py-1.5 rounded-full'>Our Services</button>
          </div>
        </div>
      </div>

      <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[70%] h-screen flex'>
          <div className='mt-25 text-center'>
            <h1 className='text-[#159EEC] tracking-[3px] font-bold'>WELCOME TO MEDDICAL</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>A Great Place to Receive Care</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.njldknjeklne enknekone kneknek Cumque vero facilis <br /> doloribus nostrum accusamus vel incidunt, esse eum fugit illum, brminus quos porro at impedit totam repellat cupiditate expedita. Ratione.</p>
            <a class="text-[#159EEC] mt-5 inline-flex items-center">Learn More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>

            <div className='mt-15'>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[80%] h-screen flex'>
          <div className='text-center w-full '>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>Care you can believe in</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Our Services</h1>

          </div>
        </div>
      </div>

      <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[80%] h-screen flex'>
          <div className='text-center w-full mt-10'>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>Always Caring</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Our Specialities</h1>
            <div className="grid grid-cols-4 p-8 bg-white mt-15">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`flex flex-col items-center justify-center p-6  shadow-sm transition-colors ${category === selected ? 'bg-blue-900 text-white' : 'bg-white text-black'
                    }`}
                >
                  <div className={`text-4xl mb-2 ${category === selected ? 'text-white' : 'text-blue-500'}`}>
                    <img src={logo} alt="" />
                  </div>
                  <div className="text-sm text-center">
                    {category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[573px] items-center justify-center flex " style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="w-[70%]">
          <div className='grid grid-cols-2'>
            <div className='mt-35'>
              <h1 className='text-[#159EEC] font-bold text-xl tracking-widest'>Book an Appointment</h1>
              <p className='text-sm tracking-wide mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ut corrupti quia vel debitis voluptatem maxime, illo fugit dolorum necessitatibus eveniet suscipit facere dicta provident minus! Recusandae dolorum labore voluptatum!</p>
            </div>
            <div className="max-w-xl mx-auto p-4 bg-[#1b2364] rounded-md text-white">
              <form className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />
                  <select className="p-2 rounded bg-[#1b2364] border border-gray-300 text-white">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>

                  <input type="email" placeholder="Email" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />
                  <input type="tel" placeholder="Phone" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />

                  <input type="date" className="p-2 rounded bg-[#1b2364] border border-gray-300 text-white" />
                  <select className="p-2 rounded bg-[#1b2364] border border-gray-300 text-white">
                    <option>Time</option>
                    <option>9:00 AM</option>
                    <option>11:00 AM</option>
                    <option>1:00 PM</option>
                  </select>

                  <select className="p-2 rounded bg-[#1b2364] border border-gray-300 text-white">
                    <option>Doctor</option>
                    <option>Dr. Smith</option>
                    <option>Dr. Jane</option>
                  </select>
                  <select className="p-2 rounded bg-[#1b2364] border border-gray-300 text-white">
                    <option>Department</option>
                    <option>Cardiology</option>
                    <option>Neurology</option>
                  </select>
                </div>

                <textarea placeholder="Message" rows="4" className="w-full p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white"></textarea>

                <button type="submit" className="w-full bg-[#b3c9f7] text-[#1b2364] font-semibold py-2 rounded">
                  SUBMIT
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[900px] w-full flex items-center justify-center'>
        <div className='w-[70%] h-[700px] flex'>
          <div className='text-center w-full mt-15'>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>trusted care</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Our Doctors</h1>
            <div className="grid grid-cols-3  mt-13 gap-7">
              <div className='h-[526px] w-[300px] rounded '>
                <img className='w-[317] h-[350px]' src={jen} alt="" />
                <div className='bg-[#BFD2F8] h-[142px] text-[#1F2B6C]'>
                  <h1 className='pt-6 tracking-wider'>John</h1>
                  <h1 className='uppercase font-bold tracking-widest'>Neurology</h1>
                  <div className='flex items-center justify-center gap-6 mt-4'>
                    <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full items-center justify-center flex'><FaLinkedinIn /></div>
                    <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full items-center justify-center flex'><FaFacebookF /></div>
                    <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full items-center justify-center flex'><FaInstagram /></div>
                  </div>
                  <div className='flex items-center justify-center mt-4'>
                    <button className='bg-[#1F2B6C] w-full text-[#BFD2F8] h-[46px] rounded-b-sm'>View Profile</button>
                  </div>
                </div>
              </div>
              <div className='h-[526px] w-[300px] rounded '>
                <img className='w-[317] h-[350px]' src={jon} alt="" />
                <div className='bg-[#BFD2F8] h-[142px] text-[#1F2B6C]'>
                  <h1 className='pt-6 tracking-wider'>Thomas</h1>
                  <h1 className='uppercase font-bold tracking-widest'>Neurology</h1>
                  <div className='flex items-center justify-center gap-6 mt-4'>
                    <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full items-center justify-center flex'><FaLinkedinIn /></div>
                    <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full items-center justify-center flex'><FaFacebookF /></div>
                    <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full items-center justify-center flex'><FaInstagram /></div>
                  </div>
                  <div className='flex items-center justify-center mt-4'>
                    <button className='bg-[#1F2B6C] w-full text-[#BFD2F8] h-[46px] rounded-b-sm'>View Profile</button>
                  </div>
                </div>
              </div>
              <div className='h-[526px] w-[300px] rounded '>
                <img className='w-[317] h-[350px]' src={jeen} alt="" />
                <div className='bg-[#BFD2F8] h-[142px] text-[#1F2B6C]'>
                  <h1 className='pt-6 tracking-wider'>Leena</h1>
                  <h1 className='uppercase font-bold tracking-widest'>Neurology</h1>
                  <div className='flex items-center justify-center gap-6 mt-4'>
                    <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full items-center justify-center flex'><FaLinkedinIn /></div>
                    <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full items-center justify-center flex'><FaFacebookF /></div>
                    <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full items-center justify-center flex'><FaInstagram /></div>
                  </div>
                  <div className='flex items-center justify-center mt-4'>
                    <button className='bg-[#1F2B6C] w-full text-[#BFD2F8] h-[46px] rounded-b-sm'>View Profile</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[80%] h-screen flex pt-20'>
          <div className='text-center w-full'>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>Better information, Better health</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>News</h1>
            <div className='grid grid-cols-2 mt-15 gap-3'>
              <div className='rounded-md  shadow-sm'>
                <div className='flex'>
                  <img src={news} alt="" />
                  <div className='p-5 w-[300px]'>
                  <p className='text-[#159EEC] text-sm'>Monday 05, September 2021 | By Author</p>
                  <h1 className='text-md text-left mt-1'>This Article’s Title goes Here, 
                  but not too long.</h1>
                  </div>
                </div>
              </div>
              <div className='rounded-md  shadow-sm'>
                <div className='flex'>
                  <img src={news} alt="" />
                  <div className='p-5 w-[300px]'>
                  <p className='text-[#159EEC] text-sm'>Monday 05, September 2021 | By Author</p>
                  <h1 className='text-md text-left mt-1'>This Article’s Title goes Here, 
                  but not too long.</h1>
                  </div>
                </div>
              </div>
              <div className='rounded-md  shadow-sm'>
                <div className='flex'>
                  <img src={news} alt="" />
                  <div className='p-5 w-[300px]'>
                  <p className='text-[#159EEC] text-sm'>Monday 05, September 2021 | By Author</p>
                  <h1 className='text-md text-left mt-1'>This Article’s Title goes Here, 
                  but not too long.</h1>
                  </div>
                </div>
              </div>
              <div className='rounded-md  shadow-sm'>
                <div className='flex'>
                  <img src={news} alt="" />
                  <div className='p-5 w-[300px]'>
                  <p className='text-[#159EEC] text-sm'>Monday 05, September 2021 | By Author</p>
                  <h1 className='text-md text-left mt-1'>This Article’s Title goes Here, 
                  but not too long.</h1>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-[100vh] w-full flex items-center justify-center'>
        <div className='w-[80%] h-[50vh] flex'>
          <div className='text-center w-full'>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>Get in Touch</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Contact</h1>
            <div className='grid grid-cols-4 gap-3 mt-13'>
              <div className='bg-[#bfd2f8] rounded-sm h-[233px] w-[233px] text-[#1F2B6C]'>
                <div className='py-10 px-5 text-left'>
                  <span className='text-5xl'><PiPhoneCallLight /></span>
                  <h1 className='uppercase font-bold mt-2'>Emergency</h1>
                  <p className='mt-2'>(237) 681-812-255</p>
                  <p>(237) 666-331-894</p>
                </div>
              </div>
              <div className='text-[#bfd2f8] rounded-sm h-[233px] w-[233px] bg-[#1F2B6C]'>
                <div className='py-10 px-5 text-left'>
                  <span className='text-5xl'><CiLocationOn /></span>
                  <h1 className='uppercase font-bold mt-2'>Location</h1>
                  <p className='mt-2'>0123 Some place</p>
                  <p>9876 Some country</p>
                </div>
              </div>
              <div className='bg-[#bfd2f8] rounded-sm h-[233px] w-[233px] text-[#1F2B6C]'>
                <div className='py-10 px-5 text-left'>
                  <span className='text-5xl'><MdOutlineMailOutline /></span>
                  <h1 className='uppercase font-bold mt-2'>email</h1>
                  <p className='mt-2'>fildineeesoe@gmil.com</p>
                  <p>myebstudios@gmail.com</p>
                </div>
              </div>
              <div className='text-[#bfd2f8] rounded-sm h-[233px] w-[233px] bg-[#1F2B6C]'>
                <div className='py-10 px-5 text-left'>
                  <span className='text-5xl'><GoClock /></span>
                  <h1 className='uppercase font-bold mt-2'>Working Hours</h1>
                  <p className='mt-2'>Mon-Sat 09:00-20:00</p>
                  <p>Sunday Emergency only</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>


    </div>
  )
}

export default Home
