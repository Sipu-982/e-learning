'use client'
import React, { useEffect } from 'react'
import profile1 from '@/public/profile1.png'
import profile2 from '@/public/profile2.png'
import profile3 from '@/public/profile3.png'
import profile4 from '@/public/profile4.png'
import Image from 'next/image'
import AOS from 'aos'
import "aos/dist/aos.css";

const Feedback = () => {
     useEffect(()=>{
        AOS.init({
            duration:1000,
            once:true
        })
    })
     const profiles =[
        {
        picture:profile1,
        message:'I must explain to you how all this mistaken.Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound',
        name:'Roe Smith',
        role:'designer',
        delay:'0',

    },
        {
        picture:profile2,
        message:'I must explain to you how all this mistaken.Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound',
        name:'Roe Smith',
        role:'designer',
        delay:'200',

    },
     {
        picture:profile3,
        message:'I must explain to you how all this mistaken.Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound',
        name:'Roe Smith',
        role:'designer',
        delay:'400',

    },
    {
        picture:profile4,
        message:'I must explain to you how all this mistaken.Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound',
        name:'Roe Smith',
        role:'designer',
        delay:'600',

    },
    
     ]
  return (
    <div className='w-full flex flex-col justify-center items-center min-h-[75vh] bg-white'>
      <div className="w-full flex flex-col justify-center text-center items-center"><h2 data-aos='fade-up' data-aos-delay='0' className='text-2xl text-gray-900 font-semibold'>Student feedbacks</h2>
       <p data-aos='fade-up' data-aos-delay='200' className='text-md text-gray-700'>What Students Say About Academy LMS</p>
      </div>
       <div className="max-w-7xl pt-15 flex gap-5 justify-center flex-wrap">
        {profiles.map((feeds,index)=>{
            return(
            <div data-aos='zoom-in' data-aos-delay={feeds.delay} className="p-3 w-[270px] min-h-[250px] rounded-md border border-[#ddd8d8]" key={index}>
                <Image src={feeds.picture} width={70} height={70} className='rounded-full' alt='profile'/>
                <p className='text-md/10 pt-2'>{feeds.message}</p>
                <div className="flex flex-col pt-2">
                <span className='font-semibold text-lg text-gray-800'>{feeds.name}</span>
                <span className='font-medium text-md text-gray-700'>{feeds.role}</span>
                </div>
                </div>
            )
        })}
       </div>
    </div>
  )
}

export default Feedback