'use client'
import React, { useEffect } from 'react'
import devon from '@/public/devon.png'
import darell from '@/public/Image.png'
import jane from '@/public/image2.png'
import Abott from '@/public/image3.png'
import { RiStarSFill } from "react-icons/ri";
import AOS from 'aos'
import "aos/dist/aos.css";

// import Link from 'next/link'
import Image from 'next/image'
const Instructor = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    })
  })
    const profile= [
        {
            picture:devon,
            name:'Devon Lane',
            role:'Senior Developer',
            rating:'4.6',
            students:'854 students',
            delay:'0'

      },
              {
             picture:darell,
            name:'Darrell Steward',
            role:'Digital Product Designer',
            rating:'4.9',
            students:'451,444 students',
            delay:'200'

      },
              {
            picture:jane,
            name:'Jane Cooper',
            role:'UI/UX Designer',
            rating:'4.8',
            students:'435,671 students',
            delay:'400'

      },
            {
             picture:Abott,
            name:'Albert Flores',
            role:'Adobe Instructor',
            rating:'4.7',
            students:'511,123 students',
            delay:'600'

      }
    ]
  return (
    <div className='w-full min-h-[80vh] flex flex-col justify-center items-center'>
        <div className="w-full flex flex-col justify-center items-center text-center gap-3"><h2 data-aos='zoom-in' data-aos-delay='0' className='text-2xl text-neutral-900 font-semibold'>Top instructor of the month</h2>
         <h3 data-aos='zoom-in' data-aos-delay='200' className='font-semibold text-sm text-gray-500'>What Students Say About Academy LMS</h3>
        </div>
        <div className="w-full mt-16 max-w-8xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {profile.map((info, index) => (
          <div key={index} data-aos='zoom-in' data-aos-delay={info.delay} className="bg-white shadow-lg transition-all duration-500 hover:-translate-y-3 rounded overflow-hidden">
            <Image
              src={info.picture}
              width={230}
              height={250}
              alt="card-img"
              className="w-full p-2 h-[250px] object-cover"
            />
            {/* <hr className='w-[370px] flex mt-5 ml-4 justify-center text-gray-300' /> */}
            <div className="p-4 flex flex-col justify-center items-center text-sm  space-y-1">
              <span className="block text-gray-500">{info.name}</span>
              <span className="block font-semibold text-gray-800">{info.role}</span>
              
              <div className="flex items-center gap-10 pt-4">
                <span className=" text-gray-600 flex items-center gap-2"><RiStarSFill size={18} className='text-[#fb3205]' />{info.rating}</span>
              <span className=" text-gray-600 flex items-center gap-2">{info.students}</span>
              </div>
            </div>
            
            {/* <hr className='w-[370px]  text-gray-300' /> */}
          </div>
        ))}
      </div>

    </div>
  )
}

export default Instructor