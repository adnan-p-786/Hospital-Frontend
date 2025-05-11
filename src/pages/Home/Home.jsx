import React from 'react'
import './Home.css'
import banner from '../../assets/Group 51.png'
import img from '../../assets/Group 94.png'
import image from '../../assets/Group 183.png'
import logo from '../../assets/Vector.png'
import jen from '../../assets/1.png'
import jon from '../../assets/2.png'
import jeen from '../../assets/3.png'
import medical from '../../assets/medical 1.png'
import news from '../../assets/rectangle 34.png';
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { CiLocationOn } from "react-icons/ci";
import { PiPhoneCallLight } from "react-icons/pi";
import { GoClock } from "react-icons/go";
import { MdOutlineMailOutline } from "react-icons/md";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import { Pagination } from 'swiper/modules';

const categories = [
  "Neurology", "Bones", "Oncology", "Otorhinolaryngology",
  "Ophthalmology", "Cardiovascular", "Pulmonology", "Renal Medicine",
  "Gastroenterology", "Urology", "Dermatology", "Gynaecology"
];

const selected = "Bones";
function Home() {
  return (
    <div>
      <div
        className="w-full h-[400px] md:h-[450px] bg-cover bg-no-repeat bg-center"
        style={{
          backgroundImage: `url(${img})`,
        }}
      >
        <div className="px-4 sm:px-8 md:px-16 lg:ml-[165px] pt-30 md:pt-28 lg:pt-36">
          <div className="max-w-2xl text-center md:text-left">
            <h1 className="text-[#159EEC]  font-bold text-sm sm:text-base md:text-lg lg:text-xl tracking-widest">
              CARING FOR LIFE
            </h1>
            <h1 className="text-3xl sm:text-4xl md:text-5xl text-[#1F2B6C] tracking-wide leading-tight mt-2">
              Leading the Way <br className="hidden md:block" /> in Medical Excellence
            </h1>
            <button className="text-[#1F2B6C] font-semibold bg-[#BFD2F8] mt-5 px-6 sm:px-7 py-2 sm:py-2.5 rounded-full">
              Our Services
            </button>
          </div>
        </div>
      </div>


      <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[95%] md:w-[70%] h-screen flex'>
          <div className='mt-20 md:mt-25 text-center'>
            <h1 className='text-[#159EEC] tracking-[3px] font-bold'>WELCOME TO MEDDICAL</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>A Great Place to Receive Care</h1>
            <p className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit.njldknjeklne enknekone kneknek Cumque vero facilis <br /> doloribus nostrum accusamus vel incidunt, esse eum fugit illum, brminus quos porro at impedit totam repellat cupiditate expedita. Ratione.</p>
            <a class="text-[#159EEC] mt-5 inline-flex items-center cursor-pointer">Learn More
              <svg class="w-4 h-4 ml-2" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M5 12h14"></path>
                <path d="M12 5l7 7-7 7"></path>
              </svg>
            </a>
            <div className='mt-7 md:mt-15 '>
              <img src={image} alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[80%] h-screen flex mt-20'>
          <div className='text-center w-full '>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>Care you can believe in</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Our Services</h1>
            <div className="grid grid-cols-3 mt-8 w-full gap-2">
              <div className='bg-amber-100 h-full w-full p-4 '>
                <img src={medical} alt="" />
                <p>Free Checkup</p>
              </div>
              <div className='bg-amber-100 h-full w-full items-center justify-center flex'>
                <img src={medical} alt="" />
                <p>Free Checkup</p>
              </div>
              <div className='bg-amber-100 h-full w-full'>
                sss
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='h-auto md:h-screen w-full flex items-center justify-center'>
        <div className='w-[98%] md:w-[80%] h-screen flex'>
          <div className='text-center w-full'>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>Always Caring</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Our Specialities</h1>
            <div className="grid grid-cols-3 md:grid-cols-4 p-8 bg-white mt-15">
              {categories.map((category) => (
                <div
                  key={category}
                  className={`flex flex-col items-center justify-center p-6  shadow-sm transition-colors ${category === selected ? 'bg-blue-900 text-white' : 'bg-white text-black'
                    }`}
                >
                  <div className={`text-4xl mb-2 ${category === selected ? 'text-white' : 'text-blue-500'}`}>
                    <img src={logo} alt="" />
                  </div>
                  <div className="text-[10px] md:text-md  lg:text-md xl:text-md text-center">
                    {category}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-auto md:h-[573px] items-center justify-center flex " style={{ backgroundImage: `url(${banner})`, backgroundSize: 'cover', backgroundRepeat: 'no-repeat' }}>
        <div className="w-[90%] md:w-[70%] my-4">
          <div className='grid grid-cols-1 md:grid-cols-2'>
            <div className='mt-10 md:mt-35 text-center md:text-left'>
              <h1 className='text-[#159EEC] font-bold text-xl tracking-widest'>Book an Appointment</h1>
              <p className='text-sm tracking-wide mt-3'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nemo ut corrupti quia vel debitis voluptatem maxime, illo fugit dolorum necessitatibus eveniet suscipit facere dicta provident minus! Recusandae dolorum labore voluptatum!</p>
            </div>
            <div className="max-w-xl mx-auto p-4 mt-5 bg-[#1b2364] rounded-md text-white">
              <form className="space-y-4">
                <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                  <input type="text" placeholder="Name" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />
                  <select className="p-2 rounded bg-[#1b2364] border border-gray-300 text-white">
                    <option>Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                  </select>

                  <input type="email" placeholder="Email" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />
                  <input type="tel" placeholder="Phone" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />

                  <input type="text" placeholder="dd/mm/yyyy" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />
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
            <div className="mt-13">
              {/* Mobile Carousel */}
              <div className="block md:hidden">
                <Swiper
                  modules={[Pagination]}
                  spaceBetween={20}
                  slidesPerView={1}
                  pagination={{ clickable: true }}
                >
                  {[{ name: 'John', img: jen }, { name: 'Thomas', img: jon }, { name: 'Leena', img: jeen }].map((doctor, index) => (
                    <SwiperSlide key={index}>
                      <div className='h-[526px] w-[300px] mx-auto rounded'>
                        <img className='w-[317px] h-[350px]' src={doctor.img} alt="" />
                        <div className='bg-[#BFD2F8] h-[142px] text-[#1F2B6C]'>
                          <h1 className='pt-6 tracking-wider'>{doctor.name}</h1>
                          <h1 className='uppercase font-bold tracking-widest'>Neurology</h1>
                          <div className='flex items-center justify-center gap-6 mt-4'>
                            <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full flex items-center justify-center cursor-pointer'><FaLinkedinIn /></div>
                            <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full flex items-center justify-center cursor-pointer'><FaFacebookF /></div>
                            <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full flex items-center justify-center cursor-pointer'><FaInstagram /></div>
                          </div>
                          <div className='flex items-center justify-center mt-4'>
                            <button className='bg-[#1F2B6C] w-full text-[#BFD2F8] h-[46px] rounded-b-sm'>View Profile</button>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>

              {/* Desktop Grid */}
              <div className="hidden md:grid grid-cols-3 gap-7">
                {[{ name: 'John', img: jen }, { name: 'Thomas', img: jon }, { name: 'Leena', img: jeen }].map((doctor, index) => (
                  <div key={index} className='h-[526px] w-[300px] rounded'>
                    <img className='w-[317px] h-[350px]' src={doctor.img} alt="" />
                    <div className='bg-[#BFD2F8] h-[142px] text-[#1F2B6C]'>
                      <h1 className='pt-6 tracking-wider'>{doctor.name}</h1>
                      <h1 className='uppercase font-bold tracking-widest'>Neurology</h1>
                      <div className='flex items-center justify-center gap-6 mt-4'>
                        <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full flex items-center justify-center cursor-pointer'><FaLinkedinIn /></div>
                        <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full flex items-center justify-center cursor-pointer'><FaFacebookF /></div>
                        <div className='w-[26px] h-[26px] text-[#BFD2F8] bg-[#1F2B6C] rounded-full flex items-center justify-center cursor-pointer'><FaInstagram /></div>
                      </div>
                      <div className='flex items-center justify-center mt-4'>
                        <button className='bg-[#1F2B6C] w-full text-[#BFD2F8] h-[46px] rounded-b-sm'>View Profile</button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      <div className='h-auto md:h-screen w-full flex items-center justify-center'>
        <div className='w-[95%] md:w-[80%] h-screen flex pt-5 md:pt-20'>
          <div className='text-center w-full'>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>Better information, Better health</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>News</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 mt-2 md:mt-15 gap-3'>
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
        <div className='w-[95%] md:w-[80%] h-[50vh] flex'>
          <div className='text-center w-full'>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>Get in Touch</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Contact</h1>
            <div className='grid grid-cols-2 md:grid-cols-4 gap-3 mt-5 md:mt-13'>
              <div className='bg-[#bfd2f8] rounded-sm md:h-[233px] h-[180px] md:w-[233px] w-[180px] text-[#1F2B6C]'>
                <div className='md:py-10 py-2 px-5 text-left'>
                  <span className='text-5xl'><PiPhoneCallLight /></span>
                  <h1 className='uppercase font-bold mt-2'>Emergency</h1>
                  <p className='mt-2'>(237) 681-812-255</p>
                  <p>(237) 666-331-894</p>
                </div>
              </div>
              <div className='text-[#bfd2f8] rounded-sm md:h-[233px] h-[180px] md:w-[233px] w-[180px] bg-[#1F2B6C]'>
                <div className='md:py-10 py-2 px-5 text-left'>
                  <span className='text-5xl'><CiLocationOn /></span>
                  <h1 className='uppercase font-bold mt-2'>Location</h1>
                  <p className='mt-2'>0123 Some place</p>
                  <p>9876 Some country</p>
                </div>
              </div>
              <div className='bg-[#bfd2f8] rounded-sm md:h-[233px] h-[180px] md:w-[233px] w-[180px] text-[#1F2B6C]'>
                <div className='md:py-10 py-2 px-5 text-left'>
                  <span className='text-5xl'><MdOutlineMailOutline /></span>
                  <h1 className='uppercase font-bold mt-2'>email</h1>
                  <p className='mt-2 text-[14px]'>fildineeesoe@gmil.com</p>
                  <p className='text-[13px]'>myebstudios@gmail.com</p>
                </div>
              </div>
              <div className='text-[#bfd2f8] rounded-sm md:h-[233px] h-[180px] md:w-[233px] w-[180px] bg-[#1F2B6C]'>
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

export default Home
