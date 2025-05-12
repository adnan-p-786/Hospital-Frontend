import React from 'react'
import free from '../../assets/free.png'
import love from '../../assets/love.png'
import plus from '../../assets/plus.png'
import blood from '../../assets/blood.png'
import bl from '../../assets/mmm.png'
import pti from '../../assets/chekupo.png'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules'
import jen from '../../assets/1.png'
import jon from '../../assets/2.png'
import jeen from '../../assets/3.png'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'

function FreeService() {
    return (
        <div>
            <div className="w-full h-[250px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: `url(${free})`, }}>
                <div className='ml-12 md:ml-35'>
                    <h1 className='text-[#1F2B6C] text-5xl md:text-7xl pt-20 md:pt-25'>Free Checkup</h1>
                </div>
            </div>

            <div className='h-auto md:h-[120vh] flex items-center justify-center w-full'>
                <div className="w-[80%] flex-row md:flex md:gap-4">
                    <div className='w-full md:w-[25%] mt-7 md:mt-0 h-[450px] shadow-md rounded-sm border-1 border-gray-200'>
                        <div className='flex rounded-t-sm px-4 gap-2 bg-[rgb(31,43,108)] text-white'>
                            <div className='flex p-4 gap-2'>
                                <img src={bl} alt="" />
                                <h1>Free Checkup</h1>
                            </div>
                        </div>
                        <div className='flex px-4 gap-2 mt-2'>
                            <div className='flex p-4 gap-2'>
                                <img src={love} alt="" />
                                <h1>Cardiogram</h1>
                            </div>
                        </div>
                        <div className='flex px-4 gap-2 mt-2'>
                            <div className='flex p-4 gap-2'>
                                <img src={plus} alt="" />
                                <h1>Dna Testing</h1>
                            </div>
                        </div>
                        <div className='flex px-4 gap-2 mt-2'>
                            <div className='flex p-4 gap-2'>
                                <img src={plus} alt="" />
                                <h1>Blood Bank</h1>
                            </div>
                        </div>
                        <div className='flex px-4 gap-2 mt-2'>
                            <div className='flex p-4 gap-2'>
                                <img src={blood} alt="" />
                                <h1>Dermalogy</h1>
                            </div>
                        </div>
                        <div className='flex px-4 gap-2 mt-2'>
                            <div className='flex p-4 gap-2'>
                                <img src={plus} alt="" />
                                <h1>Orthopedic</h1>
                            </div>
                        </div>
                    </div>
                    <div className='w-full md:w-[60%] mt-7 md:mt-0'>
                        <img src={pti} alt="" />
                        <h1 className='text-[#1F2B6C] text-3xl font-semibold  pt-5'>A passion for putting patients first</h1>
                        <div className='grid grid-cols-1 md:grid-cols-3 mt-6'>
                            <div className='flex gap-4 mt-4'>
                                <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
                                <h1 className='text:md md:text-md'>A Passion for Healing</h1>
                            </div>
                            <div className='flex gap-4 mt-4'>
                                <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
                                <h1 className='text:md md:text-md'>5-Star Care</h1>
                            </div>
                            <div className='flex gap-4 mt-4'>
                                <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
                                <h1 className='text:md md:text-md'>All our best</h1>
                            </div>
                            <div className='flex gap-4 mt-4'>
                                <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
                                <h1 className='text:md md:text-md'>Believe in Us</h1>
                            </div>
                            <div className='flex gap-4 mt-4'>
                                <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
                                <h1 className='text:md md:text-md'>Always Caring</h1>
                            </div>
                            <div className='flex gap-4 mt-4'>
                                <div className='w-[20px] h-[20px] bg-[#159EEC] rounded-full mt-1'></div>
                                <h1 className='text:md md:text-md'>A Legacy of Excellence</h1>
                            </div>
                        </div>
                        <p className='mt-4'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam temporibus saepe asperiores optio laudantium placeat fuga similique ea quia, quo officiis ipsa cumque vel voluptas dolores ut inventore cupiditate voluptatem?</p>
                        <p className='mt-4'>saepe asperiores optio laudantium placeat fuga similique ea quia, quo officiis ipsa cumque vel voluptas dolores ut inventore cupiditate voluptatem?</p>
                    </div>
                </div>
            </div>

            <div className='h-auto md:h-[130vh] w-full flex items-center justify-center'>
                <div className='w-[95%] md:w-[70%] flex'>
                    <div className='text-center w-full mt-5 md:mt-15'>
                        <h1 className='text-[#159EEC] font-bold text-xl tracking-widest uppercase'>meet the</h1>
                        <h1 className='text-3xl tracking-wider text-[#1F2B6C] font-semibold'>Team Members</h1>
                        <div className="mt-4 md:mt-13">

                            <div className="block md:hidden h-[600px] md:mb-5">
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
            </div>
        </div>
    )
}

export default FreeService