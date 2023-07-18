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
          
             <div className="flex  even:flex-row-reverse gap-2 sm:gap-5 ">
            <div className="w-[50%]">
              <Slide direction={i % 2 === 1 ? 'left' : 'right'}>
              <img src={pic} alt="" className='w-full h-full  sm:w-[100%] object-cover' />
              </Slide>
                </div>
            <div className="w-[50%] p-3">
            <Slide direction={i % 2 === 1 ? 'left' : 'right'}>
              <span className='text-sm sm:text-xl'>E-commerce Website</span>
              <div className=" flex flex-wrap gap-1 sm:gap-4 text-[10px] sm:text-xs mt-2">
                <span className='bg-emerald-500 p-1 rounded-xl'>React</span>
                <span className='bg-emerald-500 p-1 rounded-xl'>Redux Toolkit</span>
                <span className='bg-emerald-500 p-1 rounded-xl'>NodeJS</span>
                <span className='bg-emerald-500 p-1 rounded-xl'>ExpressJS</span>
                <span className='bg-emerald-500 p-1 rounded-xl'>MySql</span>
                <span className='bg-emerald-500 p-1 rounded-xl'>Sequelize</span>
              </div>
              <span className='text-sm'>Description</span>
              <div className="flex gap-2 mt-3">
                <button className='w-full sm:w-[25%] bg-red-500 rounded-sm text-sm h-8'>Demo</button>
                <button className='w-full sm:w-[25%] bg-teal-500 rounded-sm text-sm h-8'>View Code</button>
              </div>
              </Slide>
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