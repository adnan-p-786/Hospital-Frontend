import React from 'react'
import about from '../../assets/Group 183.png'
import care from '../../assets/care.png'
import doctor from '../../assets/testimonials.png'
import coma from '../../assets/coma.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import jen from '../../assets/1.png'
import jon from '../../assets/2.png'
import jeen from '../../assets/3.png'
import { Pagination } from 'swiper/modules';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { GoClock } from 'react-icons/go'
import { MdOutlineMailOutline } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import { PiPhoneCallLight } from 'react-icons/pi'

function About() {
  return (
    <div>
      <div className="w-full h-[250px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${about})`, }}>
        <div className='ml-23 md:ml-35'>
          <h1 className='text-[#1F2B6C] text-5xl md:text-7xl pt-40 md:pt-25'>About us</h1>
        </div>
      </div>

      <div className='flex flex-col md:flex-row items-center justify-center h-auto md:h-screen gap-4'>
        <div className='w-[90%] mt-5 md:mt-0 md:w-45%'>
          <img src={care} alt="" />
        </div>
        <div className='w-[90%] md:w-[55%]'>
          <h1 className='text-[#159EEC] font-bold text-md tracking-widest uppercase'>Welcome to Appolo Hospital</h1>
          <h1 className='text-4xl mt-2 tracking-wider text-[#1F2B6C] font-semibold'>Best Care for Your <br /> Good Health</h1>
          <div className='grid grid-cols-2 mt-6'>
            <div className='flex gap-4'>
              <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
              <h1 className='text:md md:text-xl'>A Passion for Healing</h1>
            </div>
            <div className='flex gap-4'>
              <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
              <h1 className='text:md md:text-xl'>5-Star Care</h1>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
              <h1 className='text:md md:text-xl'>5-Star Care</h1>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
              <h1 className='text:md md:text-xl'>5-Star Care</h1>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
              <h1 className='text:md md:text-xl'>5-Star Care</h1>
            </div>
            <div className='flex gap-4 mt-4'>
              <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
              <h1 className='text:md md:text-xl'>5-Star Care</h1>
            </div>
          </div>
          <p className='mt-4 md:mt-8'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae asperiores porro suscipit aliquid qui molestiae nam quasi excepturi fugit ex incidunt explicabo maxime veritatis, modi ea repudiandae quod tempora.</p>
          <p className='mt-4 pb-4 md:pb-0 md:mt-10'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta recusandae asperiores porro suscipit aliquid qui molestiae nam quasi excepturi fugit ex incidunt explicabo maxime veritatis, modi ea repudiandae quod tempora.</p>
        </div>
      </div>

      {/* <div
        className="w-full h-[444px] bg-cover bg-no-repeat bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${doctor})` }}
      >
        <div className="w-[50%] text-center text-white text-2xl flex justify-center items-center">
          <div className="flex flex-col items-center">
            <img src={coma} alt="" className="mb-10 text-[100px]" />
            <p className='mb-10'>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. doloribus amet.
              Laudantium quisquam eum sapiente sunt voluptate distinctio tempora
              perferendis, magni ullam quis eos esse, deleniti quas!
            </p>
            <div className="w-[300px] h-[1px] bg-white" />
            <h1 className='mt-5'>Jhon</h1>
            <div className='flex gap-3 mt-3'>
              <div className="h-[20px] w-[20px] rounded-full bg-white"></div>
              <div className="h-[20px] w-[20px] rounded-full bg-[#bfd2f8]"></div>
              <div className="h-[20px] w-[20px] rounded-full bg-white"></div>
            </div>
          </div>

        </div>
      </div> */}

      {/* <div className='h-[900px] w-full flex items-center justify-center'>
        <div className='w-[95%] md:w-[70%] h-[700px] flex'>
          <div className='text-center w-full mt-15'>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>trusted care</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Our Doctors</h1>
            <div className="mt-13">

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
      </div> */}

      {/* 
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
      </div> */}

    </div>
  )
}

export default About