'use client'
import Image from 'next/image'
import React, { useEffect } from 'react'
import skill from '@/public/skills.png'
import Link from 'next/link'
import { TiTick } from "react-icons/ti";
import AOS from 'aos'
import "aos/dist/aos.css";

const Skils = () => {
  useEffect(()=>{
    AOS.init({
      duration:100,
      once:true
    })
  })
  return (
    <div className='w-full min-h-[75vh] flex gap-x-6 py-15'>
        <div data-aos='fade-right' data-aos-delay='0' className="w-1/2">
         <Image src={skill} width={600} height={400} quality={100} alt='skill-img'/>
        </div>
        <div data-aos='fade-left' data-aos-delay='200' className="w-1/2">
         <h2 className='text-2xl text-gray-950 font-semibold'>Grow us your skill <br />with LearnPress LMS</h2>
         <p className='text-md pt-4 text-gray-500'>We denounce with righteous indignation and dislike men who are so <br /> beguiled and demoralized that cannot trouble.</p>
         <div className="pt-4">
            <li className='list-none flex items-center gap-2'><TiTick size={20} className='text-green-500' />Content Name here</li>
            <li className='list-none flex items-center gap-2'><TiTick size={20} className='text-green-500'  />Content Name here</li>
            <li className='list-none flex items-center gap-2'><TiTick size={20} className='text-green-500' />Content Name here</li>
            <li className='list-none flex items-center gap-2'><TiTick size={20} className='text-green-500' />Content Name here</li>
         </div>
         <div className="pt-6"><Link href='/' className='py-2 px-4 text-md  text-green-700 bg-transparent border border-green-700 rounded-[30px] transition-all outline-none transition-500 hover:bg-green-700 hover:text-white'>Browse all coursee</Link></div>
        </div>
    </div>
  )
}

export default Skils