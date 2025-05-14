import React from 'react'
import about from '../../assets/Group 183.png'
import doctor from '../../assets/testimonials.png'
import coma from '../../assets/coma.png'
import { GoClock } from 'react-icons/go'
import { MdOutlineMailOutline } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import { PiPhoneCallLight } from 'react-icons/pi'
import news from '../../assets/rectangle 34.png';
import jen from '../../assets/1.png'
import jon from '../../assets/2.png'
import jeen from '../../assets/3.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

const menu = [
  {
    name: "Dr John",
    Department: "neurology",
    image: jen
  },
  {
    name: "Dr Thomas",
    Department: "orthopedic",
    image: jon
  },
  {
    name: "Dr Arun",
    Department: "Dentologist",
    image: jeen
  },
]

function Doctor() {
  return (
    <div>
      <div className="w-full h-[250px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${about})`, }}>
        <div className='ml-18 md:ml-35'>
          <h1 className='text-[#1F2B6C] text-5xl md:text-7xl pt-35 md:pt-25'>Our Doctors</h1>
        </div>
      </div>

      <div className='min-h-screen md:h-screen w-full flex items-center justify-center'>
        <div className="w-[80%]">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {menu.map((item) => (
              <div key={item} className='h-[526px] w-[300px] mx-auto rounded'>
                <img className='w-[317px] h-[350px]' src={item.image} alt="" />
                <div className='bg-[#BFD2F8] h-[142px] text-[#1F2B6C]'>
                  <h1 className='pt-6 tracking-wider text-center'>{item.name}</h1>
                  <h1 className='uppercase font-bold tracking-widest text-center'>{item.Department}</h1>
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

            )

            )}

          </div>
        </div>
      </div>

      <div className="w-full h-[400px] md:h-[444px] bg-cover bg-no-repeat bg-center flex items-center justify-center" style={{ backgroundImage: `url(${doctor})` }}>
        <div className="w-[50%] text-center text-white text-md md:text-2xl flex justify-center items-center">
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
      </div>

      <div className='md:h-screen min-h-screen w-full flex items-center justify-center'>
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


      <div className='h-auto md:h-[100vh] w-full flex items-center justify-center'>
        <div className='w-[95%] md:w-[80%] mb-5 flex'>
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

export default Doctor