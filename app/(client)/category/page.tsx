'use client'
import React, { useEffect } from 'react'
import vector1 from '@/public/Cpu.png'
import vector2 from '@/public/Handshake.png'
import vector3 from '@/public/CreditCard.png'
import vector4 from '@/public/ChartBarHorizontal.png'
// vector5 is missing
import vector6 from '@/public/Receipt.png'
import vector7 from '@/public/MegaphoneSimple.png'
import vector8 from '@/public/Camera.png'
import vector9 from '@/public/Package.png'
import vector10 from '@/public/PenNib.png'
import vector11 from '@/public/FirstAidKit.png'
import vector12 from '@/public/Headphones.png'
import Image from 'next/image'
import { PiBugDroidFill } from "react-icons/pi";
import { FaArrowRightLong } from "react-icons/fa6";
import AOS from 'aos'
import "aos/dist/aos.css";

const Category = () => {
  useEffect(()=>{
    AOS.init({
      duration:2000,
      once:true
    })
  })
  const catalogs = [
    { vector: vector1, title: 'Label', total: '63,476 Courses',delay:'0' },
    { vector: vector2, title: 'Business', total: '52,822 Courses',delay:'200' },
    { vector: vector3, title: 'Finance & Accounting', total: '33,841 Courses',delay:'400' },
    { vector: vector4, title: 'IT & Software', total: '22,649 Courses',delay:'600' },
    { icon: <PiBugDroidFill size={25} />, title: 'Personal Development', total: '20,126 Courses',delay:'800' },
    { vector: vector6, title: 'Office Productivity', total: '13,932 Courses',delay:'1000' },
    { vector: vector7, title: 'Marketing', total: '12,068 Courses',delay:'200' },
    { vector: vector8, title: 'Photography & Video', total: '6,196 Courses',delay:'1200' },
    { vector: vector9, title: 'Lifestyle', total: '2,736 Courses',delay:'1400' },
    { vector: vector10, title: 'Design', total: '2,600 Courses',delay:'1600' },
    { vector: vector11, title: 'Health & Fitness', total: '1,678 Courses',delay:'1800' },
    { vector: vector12, title: 'Music', total: '956 Courses',delay:'2000' },
  ];
   
  return (
    <div className='w-full  min-h-[80vh]'>
        <div className="w-full justify-center items-center pb-10 text-center">
          <h2 data-aos='fade-up' data-aos-delay='200' className='text-3xl font-semibold'>Browse Top Category</h2></div>
      <div className="grid justify-center items-center content-center grid-cols-4 gap-7">
        {catalogs.map((items, index) => (
          <div key={index} data-aos='zoom-in' data-aos-delay={items.delay} className="flex items-center gap-2 p-2 bg-[rgba(157,255,146,0.2)] shadow-md">
            <div className='p-3 bg-[rgba(254,187,187,0.32)]'>
              {items.vector ? (
                <Image src={items.vector} width={25} height={25} alt={items.title} />
              ) : (
                items.icon
              )}
            </div>
            <div  className=''>
              <span className="font-medium">{items.title}</span><br />
              <strong className="text-gray-600 text-sm">{items.total}</strong>
            </div>
          </div>
        ))}
      </div>
     <div data-aos='zoom-in' data-aos-delay='200' className="flex w-full py-5 justify-center items-center"><h3 className='flex items-center gap-2'>We have more category & subcategory.<span className='text-green-700 pl-2'>Browse All</span><FaArrowRightLong size={18} className='text-green-700' /></h3></div>

    </div>
  );
};

export default Category;


