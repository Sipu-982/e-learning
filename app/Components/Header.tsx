'use client'
import React, { useEffect } from 'react'
import logo from '@/public/GraduationCap.png'
import Image from 'next/image'
import Link from 'next/link'
import { TiUserOutline } from "react-icons/ti";
import AOS from 'aos'
import "aos/dist/aos.css";

const Header = () => {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true,
            easing:'ease-in-out'
        })
    })
  return (
    <div data-aos="zoom-in" data-aos-delay="200" className='w-full z-50 flex bg-white items-center m-0 sticky top-0 py-2 px-15 shadow-lg shadow-[#f3eeee] justify-between h-18'>
      
      <div data-aos="zoom-in" data-aos-delay="400" className="flex items-center gap-2">
        <div className="">
          <Image src={logo} alt='logo' width={20} height={20}/>
        </div>
        <div className="">
          <Link href='/'>OSMAN IT</Link>
        </div>
      </div>

      <div data-aos="zoom-in" data-aos-delay="600" className="">
        <input type="search" name="" id="" placeholder='Search Your course' className='w-[528px] px-4 py-3 h-[40px] border border-gray-300 outline-none transition-all duration-300 focus:ring-2 focus:ring-blue-700  bg-white rounded-[30px]' />
      </div>
      <div data-aos="zoom-in" data-aos-delay="800" className="">
        <nav className='flex gap-5'>
          <Link href='/'>Home</Link>
          <Link href='/courses'>Courses</Link>
          <Link href='/'>About Us</Link>
        </nav>
      </div>
      <div data-aos="zoom-in" data-aos-delay="1000" className="flex gap-2.5">
        <button className='w-32 h-12 rounded-[30px] border border-gray-600 bg-transparent'>Register</button>
        <button className='w-32 h-12 rounded-[30px] flex items-center justify-center bg-gray-950 text-gray-200'><TiUserOutline size={25} /><span>Login</span></button>
      </div>
    </div>
  )
}

export default Header