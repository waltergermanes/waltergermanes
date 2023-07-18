import { Facebook, Instagram } from '@mui/icons-material'
import React from 'react'
import { Zoom } from 'react-awesome-reveal'

const Contact = () => {
  return (
    <div id='contact' className='h-[450px] dark:bg-[#161722] dark:text-slate-100 bg-slate-100 text-slate-900 px-5 lg:px-32 '>
        <Zoom>
               <div className="block text-center">
               <h1 className='text-sm sm:text-2xl py-5 sm:py-8'>Contact</h1>
               </div>
            </Zoom>
        <div className="flex sm:flex-row flex-col gap-5 pb-15">
        <div className="flex flex-col gap-5 flex-1 border p-3">
           <div className="">
           <span className="text-lg font-bold">Address:   </span>
            <span className=" font-thin">Batasan Hills, Quezon City</span>
           </div>
           <div className="">
           <span className="text-lg font-bold">Contact no.:   </span>
            <span className="">093992929  </span>
           </div>
           <div className="">
           <span className="text-lg font-bold">Email-Address:   </span>
            <span className="">walter.dumduma.germanes@gmail.com</span>

           </div>
           <div className="flex gap-3">
           <span className="text-lg font-bold">My Socials:</span>
           <span className="bg-red-500 p-1 rounded-md cursor-pointer"><Facebook/></span>
           <span className="bg-red-500 p-1 rounded-md cursor-pointer"><Instagram/></span>
           </div>
        </div>
        <div className="flex-1 flex flex-col gap-4 bg-slate-500 text-slate-100 p-5">
            <input type="text" className='w-full text-black outline-none border h-10 bg-slate-400 placeholder:text-slate-300 placeholder:italic px-3' placeholder='Fullname...' />
            <input type="text" className='w-full text-black outline-none border h-10 bg-slate-400 placeholder:text-slate-300 placeholder:italic px-3' placeholder='Email...' />
           <div className="">
           <textarea placeholder='Message...' className='text-black border bg-slate-400 outline-none placeholder:text-slate-300 placeholder:italic p-2 w-full' name="" id="" ></textarea>
           </div>
            </div>
        </div>
    </div>
  )
}

export default Contact