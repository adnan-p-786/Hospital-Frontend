import React from 'react'
import './Home.css'
import banner from '../../assets/Group 51.png'
import img from '../../assets/Group 94.png'
import image from '../../assets/Group 183.png'
import logo from '../../assets/Vector.png'
import jen from '../../assets/1.png'
import jon from '../../assets/2.png'
import jeen from '../../assets/3.png'

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

      <div className='h-screen w-full flex items-center justify-center'>
        <div className='w-[70%] h-screen flex'>
          <div className='text-center w-full mt-15'>
            <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>trusted care</h1>
            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Our Doctors</h1>
            <div className="grid grid-cols-3  mt-13">
              <div className='h-[480px] w-[300px]'>
                <img className='w-[317] h-[350px]' src={jen} alt="" />
                <div className='bg-[#BFD2F8] text-[#1F2B6C]'>
                  <h1 className='pt-4 tracking-wider'>John</h1>
                  <h1 className='uppercase font-bold tracking-widest'>Neurology</h1>
                </div>
              </div>
              <div className='h-[480px] w-[300px]'>
                <img className='w-[317] h-[350px]' src={jon} alt="" />
                <div className='bg-[#BFD2F8] text-[#1F2B6C]'>
                  <h1 className='pt-4 tracking-wider'>Thomas</h1>
                  <h1 className='uppercase font-bold tracking-widest'>Neurology</h1>
                </div>
              </div>
              <div className='h-[480px] w-[300px]'>
                <img className='w-[317] h-[350px]' src={jeen} alt="" />
                <div className='bg-[#BFD2F8] text-[#1F2B6C]'>
                  <h1 className='pt-4 tracking-wider'>Leena</h1>
                  <h1 className='uppercase font-bold tracking-widest'>Neurology</h1>
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
