'use client'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect } from 'react'
import group from '@/public/Group.png'
import AOS from 'aos'
import "aos/dist/aos.css";

const HomePage = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      once:true
    })
  })
  return (
    <div className='w-full mt-5 flex justify-center items-center min-h-[80vh] bg-white'>
        <div data-aos='fade-right' data-aos-delay='0' className="w-1/2">
          <div className="py-4">
            <h2 className='text-3xl text-neutral-900 font-bold'>Build Your Skills <br />With Online Course</h2>
          </div>
          <div className="py-4">
            <p className='text-md/8 text-gray-700 font-semibold'>We denounce with righteous indignation and dislike men who are so beguiled and demoralized that cannot trouble.</p>
          </div>
          <div className="py-4">
            <Link href='/' className='text-md py-3 px-5 bg-green-600 text-white rounded-[30px]'>Enrol Now</Link>
          </div>
        </div>
        <div data-aos='fade-left' data-aos-delay='200' className="w-1/2">
            <Image src={group} width={600} height={600} alt='group'/>
        </div>
    </div>
  )
}

export default HomePage