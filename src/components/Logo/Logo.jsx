import React from 'react'
import { FiPhoneCall } from "react-icons/fi";
import { GoClock } from "react-icons/go";
import { FaLocationDot } from "react-icons/fa6";
function Logo() {
    return (
        <div className="w-full flex flex-wrap md:flex-nowrap items-center justify-center gap-6 md:gap-30 p-4 md:p-4">
            {/* Logo Section */}
            <div className="text-2xl font-semibold hidden lg:block">
                <h1>
                    MED<span className="text-[#159EEC]">DICAL</span>
                </h1>
            </div>

            {/* Emergency Section */}
            <div className="text-sm font-semibold flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
                <FiPhoneCall className="text-2xl text-[#159EEC]" />
                <div className="text-center md:text-left">
                    <h2>EMERGENCY</h2>
                    <p className="text-[#159EEC]">(237) 681-812-255</p>
                </div>
            </div>

            {/* Work Hours Section */}
            <div className="text-sm font-semibold flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
                <GoClock className="text-2xl text-[#159EEC]" />
                <div className="text-center md:text-left">
                    <h2>WORK HOURS</h2>
                    <p className="text-[#159EEC]">09:00 - 20:00 Everyday</p>
                </div>
            </div>

            {/* Location Section */}
            <div className="text-sm font-semibold flex items-center gap-2 w-full md:w-auto justify-center md:justify-start">
                <FaLocationDot className="text-2xl text-[#159EEC]" />
                <div className="text-center md:text-left">
                    <h2>LOCATION</h2>
                    <p className="text-[#159EEC]">0123 Kottakkal</p>
                </div>
            </div>
        </div>
    )
}

export default Logo