'use client'
import React, { useEffect } from 'react'
import AOS from 'aos'
import "aos/dist/aos.css";

const Summary = () => {
useEffect(()=>{
  AOS.init({
    duration:1000,
    once:true
  })
})
const totals=[
{count:'25k+',
title:'Active Students',delay:'0'},
{count:'899',
title:'Total Courses',delay:'200'
},
{count:'158',
title:'Instructor',delay:'400'
},
{count:'100%',
title:'Satisfaction rate',delay:'600'
},
]
  return (
    <div className='w-full min-h-[50vh] flex justify-center items-center px-16'>
        <div className="w-full max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {totals.map((infos,index)=>{
                return(
                    <div key={index} data-aos='fade-up' data-aos-delay={infos.delay} className="flex flex-col items-center text-center">
                         <span className='text-2xl font-bold text-shadow-gray-950'>{infos.count}</span>
                         <span className='text-lg font-semibold text-shadow-gray-500'>{infos.title}</span>
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Summary