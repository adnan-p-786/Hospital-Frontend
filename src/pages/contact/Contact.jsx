import React from 'react'
import contact from '../../assets/contact.png'
function Contact() {
    return (
        <div>
            <div className="w-full h-[250px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${contact})`, }}>
                <div className='ml-23 md:ml-35'>
                    <h1 className='text-[#1F2B6C] text-5xl md:text-7xl pt-40 md:pt-25'>Our Service</h1>
                </div>
            </div>
        </div>
    )
}

export default Contact