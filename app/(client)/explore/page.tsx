'use client'
import React, { useEffect } from 'react'
import flip1 from '@/public/flip-img1.png'
import flip2 from '@/public/flip-img3.png'
import flip3 from '@/public/flip-img7.png'
import flip4 from '@/public/flip-img4.png'
import flip5 from '@/public/flip-img5.png'
import flip6 from '@/public/flip-img6.png'
import Image from 'next/image'
import Link from 'next/link'
import './module.css'
import AOS from 'aos'
import "aos/dist/aos.css";

const Explore = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    })
  })
  return (
    <div className='w-full rounded-md min-h-[35vh] container bg-[rgb(63,255,5,0.5)] flex justify-between '>
      <div className="w-[350px] relative">
        <Image data-aos='fade-right' data-aos-delay='0' src={flip3} alt='flip1' className='card1 rounded-2xl'  width={200} height={125} />
        <Image data-aos='fade-right' data-aos-delay='200' src={flip1} alt='flip2' className='card2' width={200} height={125}/>
        <Image data-aos='fade-right' data-aos-delay='400' src={flip2} alt='flip3' className='card3' width={200} height={125}/>
      </div>
      <div className="w-[500px] flex justify-center items-center flex-col text-center">
        <h3 data-aos='zoom-in' data-aos-delay='0' className='text-lg'>PROVIDING AMAZING</h3>
        <h2 data-aos='zoom-in' data-aos-delay='200' className='text-2xl pt-4 font-semibold text-gray-900'>education wordpress theme</h2>
        <p data-aos='zoom-in' data-aos-delay='400' className='pt-4'>The next level of LMS WordPress Theme. Learn anytime and anywhere.</p>
        {/* <Link</Link> */}
         <div className="pt-6"><Link data-aos='zoom-in' data-aos-delay='600' href='/' className='py-2 px-4 text-md rounded-[30px] transition-all outline-none transition-500 bg-green-700 text-white'>Browse all coursee</Link></div>
      </div>
      <div className="w-[350px] relative">
         <Image data-aos='fade-left' data-aos-delay='200' src={flip5} alt='flip6' className='card4' width={290} height={100}/>
        <Image data-aos='fade-left' data-aos-delay='400' src={flip4} alt='flip5' className='card5' width={290} height={100}/>
        <Image data-aos='fade-left' data-aos-delay='600' src={flip6} alt='flip4' className='card6' width={120} height={100}/>

      </div>
    </div>
  )
}

export default Explore