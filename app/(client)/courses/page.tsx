'use client'
import React, { useEffect } from 'react';
import course1 from '@/public/course.png';
import course2 from '@/public/edureka.png';
import course3 from '@/public/web-develop.png';
import course4 from '@/public/digital-marketing.png';
import course5 from '@/public/figma.png';
import course6 from '@/public/web-development.png';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/Vector.png'
import logo2 from '@/public/Component 2.png'
import AOS from 'aos'
import "aos/dist/aos.css";

const Course = () => {
  useEffect(()=>{
    AOS.init({
      duration:1000,
      once:true
    })
  })
  const courses = [
    {
      image: course1,
      sponsered: 'by Determined-Poitras',
      website: 'Create an LMS Website with LearnPress',
      duration: '2 weeks',
      students: '156 students',
      delay:'0'
    },
    {
      image: course2,
      sponsered: 'by Determined-Poitras',
      website: 'Create an LMS Website with LearnPress',
      duration: '2 weeks',
      students: '156 students',
            delay:'200'

    },
    {
      image: course3,
      sponsered: 'by Determined-Poitras',
      website: 'Create an LMS Website with LearnPress',
      duration: '2 weeks',
      students: '156 students',
            delay:'400'

    },
    {
      image: course4,
      sponsered: 'by Determined-Poitras',
      website: 'Create an LMS Website with LearnPress',
      duration: '2 weeks',
      students: '156 students',
            delay:'600'

    },
    {
      image: course5,
      sponsered: 'by Determined-Poitras',
      website: 'Create an LMS Website with LearnPress',
      duration: '2 weeks',
      students: '156 students',
            delay:'800'

    },
    {
      image: course6,
      sponsered: 'by Determined-Poitras',
      website: 'Create an LMS Website with LearnPress',
      duration: '2 weeks',
      students: '156 students',
            delay:'1000'

    },
  ];

  return (
<div className="w-full min-h-[80vh] flex flex-col  py-12 bg-gray-50">
      
      <div className="w-full max-w-8xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
        <div data-aos='fade-right' data-aos-delay='0'>
          <h2 className="text-3xl font-bold text-gray-800">Featured Courses</h2>
          <h3 className="text-lg text-gray-600 mt-1">Explore our popular courses</h3>
        </div>
        <div className="mt-4 md:mt-0">
          <Link data-aos='fade-right' data-aos-delay='200'
            href="/"
            className="px-4 py-2 border border-gray-300 text-gray-600 rounded-[30px] hover:bg-gray-100 transition"
          >
            ALL Courses
          </Link>
        </div>
      </div>

      <div className="w-full max-w-8xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {courses.map((data, index) => (
          <div data-aos='zoom-in' data-aos-delay={data.delay} key={index} className="bg-white shadow-lg transition-all duration-500  hover:shadow-green-200 rounded overflow-hidden">
            <Image
              src={data.image}
              width={410}
              height={250}
              alt="card-img"
              className="w-full p-2 h-[250px] object-cover"
            />
            {/* <hr className='w-[370px] flex mt-5 ml-4 justify-center text-gray-300' /> */}
            <div className="p-4 text-sm  space-y-1">
              <span className="block text-gray-500">{data.sponsered}</span>
              <span className="block font-semibold text-gray-800">{data.website}</span>
              
              <div className="flex items-center gap-5">
                <span className=" text-gray-600 flex items-center gap-2"><Image src={logo} alt='logo' width={15} height={15} />{data.duration}</span>
              <span className=" text-gray-600 flex items-center gap-2"><Image src={logo2} alt='logo' width={15} height={15} />{data.students}</span>
              </div>
            </div>
            <div className="flex justify-between p-3">
                <div className="">
                    <span>$29.0 <b className='text-[#10d70d]'>Free</b></span>
                </div>
                <div className="">
                  <Link href='/'>View Details</Link>
                </div>
            </div>
            <hr className='w-[370px]  text-gray-300' />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Course;
