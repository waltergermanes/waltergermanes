import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal'

import pic from './assets/images/sample.png'
const Project = () => {
  const text = [
    {
      title: "title1",
      desc: "desc1"
    },{
      title: "title2",
      desc: "desc2"
    },

  ]
  return (
   <>
   <div id='projects' className="dark:bg-gray-900 bg-slate-500 text-slate-100 px-5 lg:px-32">
      <Zoom>
        <div className="text-center">
        <h1 className='text-sm sm:text-2xl py-5 sm:py-8'>Recent Projects</h1>
        </div>
      </Zoom>
      <div className="flex flex-col gap-20 pb-5">

        {
          text.map((t, i)=>(
          
             <div key={i} className="flex flex-col sm:odd:flex-row sm:even:flex-row-reverse gap-2 sm:gap-5 ">
            <div className="w-full sm:w-[50%]">
              <img src={pic} alt="" className='w-full h-full  sm:w-[100%] object-cover' />
                </div>
            <div className="w-full sm:w-[50%] p-3">
              <span className='text-sm sm:text-xl'>E-commerce Website</span>
              <div className=" flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm mt-2">
                <span className='bg-transparent border p-1 rounded-sm'>React</span>
                <span className='bg-transparent border p-1 rounded-sm'>Redux Toolkit</span>
                <span className='bg-transparent border p-1 rounded-sm'>NodeJS</span>
                <span className='bg-transparent border p-1 rounded-sm'>ExpressJS</span>
                <span className='bg-transparent border p-1 rounded-sm'>MySql</span>
                <span className='bg-transparent border p-1 rounded-sm'>Sequelize</span>
              </div>
              <span className='text-sm'>Description</span>
              <div className="flex gap-2 mt-3">
                <button className='w-full sm:w-[25%] bg-red-500 rounded-sm text-sm h-8'>Demo</button>
                <button className='w-full sm:w-[25%] bg-teal-500 rounded-sm text-sm h-8'>View Code</button>
              </div>
            </div>
           
          </div>
          ))
        }
      </div>
   </div>
   </>
  )
}

export default Project