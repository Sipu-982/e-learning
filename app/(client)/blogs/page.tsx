'use client'
import React, { useEffect } from 'react'
import theme from '@/public/theme.png'
import Image from 'next/image'
import { MdCalendarToday } from "react-icons/md";
import AOS from 'aos'
import "aos/dist/aos.css";

const Blog2 = () => {
    useEffect(()=>{
        AOS.init({
           duration:1000,
           once:true 
        })
    })
     const themes =[
        {
            themePicture:theme,
            title:'Best LearnPress WordPress Theme Collection for 2023',
            date:'Jan 24, 22023',
            hints:'Looking for an amazing & well-functional LearnPress WordPress Theme?...',
            delay:0
        },
        {
            themePicture:theme,
            title:'Best LearnPress WordPress Theme Collection for 2023',
            date:'Jan 24, 22023',
            hints:'Looking for an amazing & well-functional LearnPress WordPress Theme?...',
            delay:200

        },
        {
            themePicture:theme,
            title:'Best LearnPress WordPress Theme Collection for 2023',
            date:'Jan 24, 22023',
            hints:'Looking for an amazing & well-functional LearnPress WordPress Theme?...',
            delay:400

        },

     ]

  return (
    <div className='w-full min-h-[75vh] flex flex-col justify-center items-center'>
        <div className="w-full flex flex-col justify-center items-center text-center">
            <h2 data-aos='zoom-in' data-aos-delay='0' className='text-gray-800 text-2xl font-semibold'>Our Latest Blogs</h2>
            <span data-aos='zoom-in' data-aos-delay='200' className='text-gray-700 text-md '>Explore world best topics </span>
        </div>
      <div className="max-w-7xl pt-15 flex gap-5 justify-center flex-wrap">
        {themes.map((items,index)=>{
            return(
                <div key={index} className="max-w-[380px] shadow min-h-[250px] rounded-md p-3 bg-white">
                <Image src={items.themePicture} quality={100} className='w-[380px] h-[230px]' alt='theme'/>
                <div data-aos='zoom-in' data-aos-delay={items.delay} className="p-2">
                    <p className='text-lg  text-gray-800 font-semibold'>{items.title}</p>
                    <span className='text-gray-700 flex items-center gap-1.5 py-2 text-md'><MdCalendarToday size={20} className='text-green-700' />{items.date}</span>
                    <p className='text-gray-600 py-2'>{items.hints}</p>
                </div>
                </div>
            )
        })}
      </div>
    </div>
  )
}

export default Blog2