import React from 'react'
import { mySkills } from './assets/constant/Constant'
import { Zoom } from 'react-awesome-reveal'

const Skills = () => {
  return (
    <div id='skills' className='h-[480px] sm:h-[700px] md:h-[480px] px-5 lg:px-32 text-center dark:bg-[#25273C] dark:text-slate-100 bg-slate-100'>
        <Zoom>
          <h1 className='text-sm sm:text-2xl py-5 sm:py-8'>My Skills</h1>
        </Zoom>
       <div className='gap-4 grid-cols-3 grid md:grid-cols-5'>
          {
            mySkills.map((skill, i)=>{
             return(
             <Zoom key={i}>
               <div className={`flex flex-col items-center justify-center flex-1 rounded-md bg-slate-600 dark:bg-[#201F27] py-2 hover:opacity-70 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30 h-30  shadow-md ${skill.style}`}>
                <img src={skill.icon} className='w-[30px] sm:w-[60px]'/>
                <h1 className='text-xs sm:text-sm'>{skill.title.toUpperCase()}</h1>
              </div>
             </Zoom>
            )})
          } 
        </div>
       </div>
  )
}

export default Skills