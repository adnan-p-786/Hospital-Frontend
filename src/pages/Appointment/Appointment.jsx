import React from 'react'
import appoint from '../../assets/appointment.png'
import { PiPhoneCallLight } from 'react-icons/pi'
function Appointment() {
    return (
        <div>
            <div className="w-full h-[250px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${appoint})`, }}>
                <div className='mx-11 md:ml-35'>
                    <h1 className='text-[#1F2B6C] font-semibold text-3xl md:text-5xl pt-25 md:pt-25'>Book an Appointment</h1>
                </div>
            </div>

            <div className='flex h-auto md:h-[140vh] items-center mt-9 md:mt-0 mb-9 md:mb-0 justify-center w-full'>
                <div className="w-[90%] md:w-[80%]">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="">
                            <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Book an Appointment</h1>
                            <p className='mt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam consectetur minima a aspernatur? Beatae nostrum dolores iure debitis enim odit odio alias cum totam, maiores harum possimus? Iste, obcaecati neque!</p>
                            <div className="max-w-xl mx-auto p-4 mt-15 bg-[#1b2364] rounded-md text-white">
                                <form className="space-y-4 ">
                                    <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
                                        <input type="text" placeholder="Name" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />
                                        <select className="p-2 rounded bg-[#1b2364] border border-gray-300 text-white">
                                            <option>Gender</option>
                                            <option>Male</option>
                                            <option>Female</option>
                                        </select>

                                        <input type="email" placeholder="Email" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />
                                        <input type="tel" placeholder="Phone" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white" />

                                        <input type="date" placeholder="dd-mm-yyyy" className="p-2 rounded bg-[#1b2364] border text-white border-gray-300 placeholder-white" />
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

                        <div className="bg-[#1b2364] text-white rounded-md px-10">
                            <div className='py-10'>
                                <h1 className='text-3xl md:text-5xl text-[#B3C9F7] text-center'>Shedule Hours</h1>
                                <h2 className='py-2 ml-0 md:ml-14 mt-8 w-full'>Monday - 9:00 AM to 10:00 PM</h2>
                                <h2 className='py-2 ml-0 md:ml-14'>Monday - 9:00 AM to 10:00 PM</h2>
                                <h2 className='py-2 ml-0 md:ml-14'>Tuesday - 9:00 AM to 10:00 PM</h2>
                                <h2 className='py-2 ml-0 md:ml-14'>Wednesday - 9:00 AM to 10:00 PM</h2>
                                <h2 className='py-2 ml-0 md:ml-14'>Thursday - 9:00 AM to 10:00 PM</h2>
                                <h2 className='py-2 ml-0 md:ml-14'>Friday - 9:00 AM to 10:00 PM</h2>
                                <h2 className='py-2 ml-0 md:ml-14'>Saturday - 9:00 AM to 10:00 PM</h2>
                                <h2 className='py-2 ml-0 md:ml-14'>Sunday - Closed</h2>
                            </div>
                            <div className="md:ml-14 md:w-[300px] h-[1px] bg-white" />
                            <div className="mt-8 flex gap-3 items-center justify-center mb-5 md:mb-0">
                                <div>
                                    <i className='text-4xl md:text-6xl '><PiPhoneCallLight /></i>
                                </div>
                                <div>
                                    <p className="text-xl md:text-2xl font-semibold">Emergency</p>
                                    <p className="text-sm md:text-xl text-[#D4D7FB]">(237) 681-812-255</p>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    )
}

export default Appointment