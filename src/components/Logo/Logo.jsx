import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
function Logo() {
    return (
        <div className='h-16 flex items-center justify-center w-full gap-10'>
            <div className='text-2xl font-semibold'>
                <h1>MED<span className='text-[#159EEC]'>DICAL</span></h1>
            </div>
            <div className='text-[13px] font-semibold flex items-center gap-2'>
                <FiPhoneCall className='text-2xl text-[#159EEC]' />
                <div>
                    <h2>EMERGENCY</h2>
                    <p className='text-[#159EEC]'>(237) 681-812-255</p>
                </div>
            </div>
            <div className='text-[13px] font-semibold flex items-center gap-2'>
                <GoClock className='text-2xl text-[#159EEC]' />
                <div>
                    <h2>WORK HOURS</h2>
                    <p className='text-[#159EEC]'>09:00 - 20:00 Everyday</p>
                </div>
            </div>
            <div className='text-[13px] font-semibold flex items-center gap-2'>
                <FaLocationDot className='text-2xl text-[#159EEC]' />
                <div>
                    <h2>LOCATION</h2>
                    <p className='text-[#159EEC]'>09:00 - 20:00 Everyday</p>
                </div>
            </div>
        </div>


    )
}

export default Logo