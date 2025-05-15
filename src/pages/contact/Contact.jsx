import React from 'react'
import contact from '../../assets/contact.png'
import { GoClock } from 'react-icons/go'
import { MdOutlineMailOutline } from 'react-icons/md'
import { CiLocationOn } from 'react-icons/ci'
import { PiPhoneCallLight } from 'react-icons/pi'
import { useCreateContact } from '../../Api/Contact/contactHooks'

function Contact() {

    const { mutate: Create } = useCreateContact()
    
        const handleSubmit = (e) => {
        e.preventDefault();
    
        const formData = new FormData(e.target);
        const value = Object.fromEntries(formData.entries());
    
        Create(value, {
            onSuccess: () => {
                e.target.reset();
                 alert("contact created successfully!");
            },
            onError: () => {
                alert("Failed to create contact."); 
            },
        });
    };


    return (
        <div>
            <div className="w-full h-[250px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${contact})`, }}>
                <div className='ml-23 md:ml-35'>
                    <h1 className='text-[#1F2B6C] text-5xl md:text-7xl pt-40 md:pt-25'>Contact us</h1>
                </div>
            </div>

            <div className='flex w-full items-center justify-center'>
                <div className="w-[80%]">
                    <img className='py-10' src="" alt="" />
                </div>
            </div>

            <div className='h-auto md:h-[110vh] flex items-center justify-center w-full'>
                <div className="w-[90%] md:w-[80%] flex-row md:flex md:gap-4 mb-8 md:mb-0">
                    <div className='w-full md:w-[50%] rounded-sm'>
                        <h1 className='text-[#159EEC] tracking-[3px] font-bold uppercase'>get in touch</h1>
                        <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Contact</h1>
                        <form onSubmit={handleSubmit} className="mt-7 rounded-md">
                            <div className="grid grid-cols-2">
                                <input name='Name' type="text" placeholder="Name" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white text-white" />
                                <input name='Email' type="email" placeholder="Email" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white text-white" />
                            </div>
                            <input name='Subject' type="text" placeholder="Subject" className="p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white w-full text-white" />
                            <textarea name='Message' placeholder="Message" rows="10" className="w-full p-2 rounded bg-[#1b2364] border border-gray-300 placeholder-white text-white"></textarea>
                            <button type="submit" className="w-full bg-[#b3c9f7] text-[#1b2364] font-semibold py-2 rounded">
                                SUBMIT
                            </button>
                        </form>
                    </div>
                    <div className='w-full md:w-[50%] mt-7 md:mt-0'>
                        <div className='grid grid-cols-2 md:grid-cols-2 gap-2'>
                            <div className='bg-[#bfd2f8] rounded-sm md:h-[233px] h-[180px] md:w-[233px] w-[170px] text-[#1F2B6C]'>
                                <div className='md:py-10 py-2 px-2 md:px-5 text-left'>
                                    <span className='text-5xl'><PiPhoneCallLight /></span>
                                    <h1 className='uppercase font-bold mt-2'>Emergency</h1>
                                    <p className='mt-2'>(237) 681-812-255</p>
                                    <p>(237) 666-331-894</p>
                                </div>
                            </div>
                            <div className='text-[#bfd2f8] rounded-sm md:h-[233px] h-[180px] md:w-[233px] w-[170px] bg-[#1F2B6C]'>
                                <div className='md:py-10 py-2 px-2 md:px-5 text-left'>
                                    <span className='text-5xl'><CiLocationOn /></span>
                                    <h1 className='uppercase font-bold mt-2'>Location</h1>
                                    <p className='mt-2'>0123 Some place</p>
                                    <p>9876 Some country</p>
                                </div>
                            </div>
                            <div className='bg-[#bfd2f8] rounded-sm md:h-[233px] h-[180px] md:w-[233px] w-[170px] text-[#1F2B6C]'>
                                <div className='md:py-10 py-2 px-2 md:px-5 text-left'>
                                    <span className='text-5xl'><MdOutlineMailOutline /></span>
                                    <h1 className='uppercase font-bold mt-2'>email</h1>
                                    <p className='mt-2 text-[14px]'>fildineeesoe@gmil.com</p>
                                    <p className='text-[13px]'>myebstudios@gmail.com</p>
                                </div>
                            </div>
                            <div className='text-[#1F2B6C] rounded-sm md:h-[233px] h-[180px] md:w-[233px] w-[170px] bg-[#bfd2f8]'>
                                <div className='md:py-10 py-2 px-2 md:px-5 text-left'>
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

export default Contact