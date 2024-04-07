import React from 'react'
import MyPic from './assets/images/IMG_2266.JPG'
import { Slide, Zoom } from 'react-awesome-reveal'

const About = () => {
    return (
        <div id='about' className='h-[620px] sm:h-[450px] px-5 lg:px-32 text-center bg-slate-400 dark:bg-[#161722]'>
            <Zoom>
              <h1 className='text-sm sm:text-2xl py-5 sm:py-8'>About Me</h1>
            </Zoom>
        <div className='gap-3 sm:h-[300px] flex flex-col sm:flex-row'>
            <div className="w-full sm:w-1/3">
                <Slide direction='down'>
                    <div className="bg-slate-300 dark:bg-[#25273C] text-slate-900 dark:text-slate-50 h-[180px] sm:h-[300px] rounded-lg flex items-center justify-center transform transition ease-in-out hover:translate-y-[-10px]">
                        <img src={MyPic} className='ss w-[170px] h-[170px] sm:w-[250px] sm:h-[250px] object-contain col-span-1 rounded-md' alt='me'/>
                    </div>
                </Slide>
            </div>
       <div className="w-full sm:w-2/3">
        <Slide direction='up'>
        <div className="bg-slate-300 h-[350px] dark:bg-[#25273C] text-slate-900 dark:text-slate-50 px-5 pb-7 pt-4 sm:h-[300px] transform transition ease-in-out hover:translate-y-[-10px]">
            <span>Education</span>
            <div className="h-full text-base flex justify-between py-4">
            <div className="w-[10%]">
            <div className="flex flex-col justify-around h-full w-1 bg-slate-200">
               <div className='ml-[-8px] h-5 w-5 rounded-full bg-teal-500 border-2'></div>
               <div className='ml-[-8px] h-5 w-5 rounded-full bg-blue-500 border-2'></div>
               <div className='ml-[-8px] h-5 w-5 rounded-full bg-orange-500 border-2'></div>
            </div>
            </div>
                <div className="w-[90%] flex flex-col justify-between gap-3">
                    <div className="flex-1 flex justify-center gap-3 items-center bg-slate-400 rounded pr-3">
                        <div className=" flex items-center justify-center h-10 w-10 bg-blue-800">
                            <span>2022</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span>Quezon City University</span>
                            <span className='text-xs'>BS Information Technology</span>
                        </div>
                    </div>
                    
                    <div className="flex-1  flex justify-center gap-3 items-center bg-slate-400 rounded pr-3">
                        <div className="flex items-center justify-center  h-10 w-10 bg-blue-700">
                            <span>2018</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span>Mary the Queeen College</span>
                            <span className='text-xs'>Senior High School(ICT)</span>
                        </div>
                    </div>
                    <div className="flex-1  flex  justify-center gap-3 items-center  bg-slate-400 rounded pr-1">
                        <div className="flex items-center justify-center  h-10 w-10 bg-blue-500">
                            <span>2015</span>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span>Patoc National High School</span>
                            <span className='text-xs'>High School</span>
                        </div>
                    </div>
                </div>
       
       
    </div>
    </div>
    </Slide>
    </div>
        </div>
        </div>
      )
}

export default About