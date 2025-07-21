'use client'
import React, { useEffect } from 'react'
import cap from '@/public/GraduationCap.png'
import Image from 'next/image'
import { FaFacebookF } from 'react-icons/fa6'
import { ImInstagram } from 'react-icons/im'
import { BsTwitterX, BsYoutube } from 'react-icons/bs'
import { PiPinterestLogoBold } from 'react-icons/pi'
import AOS from 'aos'
import "aos/dist/aos.css";

const Footer = () => {
    useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true
        })
    })
  return (
    <footer className="w-full bg-gray-100 py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand section */}
        <div data-aos='zoom-in' data-aos-delay='0'>
          <div className="flex items-center gap-2 mb-4">
            <Image src={cap} alt="graduateCap" width={50} height={50} />
            <h2 className="text-xl font-semibold text-gray-800">OSMAN IT</h2>
          </div>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>

        {/* Get Help */}
        <div data-aos='zoom-in' data-aos-delay='200'>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">GET HELP</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Contact Us</li>
            <li>Latest Blog</li>
            <li>FAQ</li>
            <li>Privacy</li>
          </ul>
        </div>

        {/* Categories */}
        <div data-aos='zoom-in' data-aos-delay='400'>
          <h3 className="text-lg font-semibold mb-4 text-gray-800">CATEGORIES</h3>
          <ul className="space-y-2 text-gray-600">
            <li>Art & Design</li>
            <li>Business</li>
            <li>Marketing</li>
            <li>Development</li>
          </ul>
        </div>

        {/* Contact Info */}
        <div data-aos='fade-right' data-aos-delay='200'>
          <h3 data-aos='fade-up' data-aos-delay='0' className="text-lg font-semibold mb-4 text-gray-800">CONTACT US</h3>
          <p data-aos='fade-up' data-aos-delay='600' className="text-gray-600 mb-2">
            Address: 2321 New Design Str, Lorem Ipsum, 10 Hudson Yards, USA
          </p>
          <p data-aos='fade-up' data-aos-delay='800' className="text-gray-600">Phone: +880 18234 567890</p>
          <p data-aos='fade-up' data-aos-delay='1000' className="text-gray-600 mb-4">Mail: osmanit@gmail.com</p>
          <div  className="flex gap-4 text-gray-600 text-xl">
            <FaFacebookF  className="hover:text-blue-600 cursor-pointer" />
            <ImInstagram className="hover:text-pink-500 cursor-pointer" />
            <BsTwitterX className="hover:text-black cursor-pointer" />
            <PiPinterestLogoBold className="hover:text-red-600 cursor-pointer" />
            <BsYoutube className="hover:text-red-500 cursor-pointer" />
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
