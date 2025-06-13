import React from 'react'
import Typed from 'react-typed'
import pic from './assets/images/image.png'
import { Rotate, Slide } from 'react-awesome-reveal'
import { Facebook, GitHub, Instagram, LinkedIn, Mail } from '@mui/icons-material'

const Home= () => {
  return (
    <>
    
    <div className='text-slate-800 dark:text-slate-200 min-h-screen sm:min-h-screen flex flex-col sm:flex-row justify-between items-center px-5 lg:px-32 '>
     
       <div className='flex-1 flex flex-col gap-5 mt-28 sm:mt-20 '>
       <Slide direction='left'>
       <span>Hello, I'm<span className='text-xl'> Walter Germanes</span></span>
        <Typed
                className='text-xl font-extrabold sm:text-xl md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'
                strings={[
                    'Web Developer and Web Designer']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                   
                </Typed>
               
        <span className='leading-6 text-base '> I'm a Full Stack Developer specializing building 
        web apps, I specialize in creating scalable, responsive, and performance-driven applications, and have worked on both frontend and backend development. I'm passionate about clean code, modern web practices, and continuous learning to stay updated with the latest technologies.
        </span>
      
        <div className=' flex w-50 gap-5 '>
             <Rotate>
               <a href='k' className='bg-blue-800 p-2 flex items-center icon cursor-pointer hover:scale-105 hover:ease-in-out duration-100'>
                 <LinkedIn size={25} color='inherit'/> 
              </a>
             </Rotate>
             <Rotate>
               <a href='k' className='bg-blue-800 p-2 flex items-center icon cursor-pointer hover:scale-105 hover:ease-in-out duration-100'>
                 <GitHub size={25} color='inherit'/> 
              </a>
             </Rotate>
             <Rotate>
               <a href='k' className='bg-blue-800 p-2 flex items-center icon cursor-pointer hover:scale-105 hover:ease-in-out duration-100'>
                 <Mail size={25} color='inherit'/> 
              </a>
             </Rotate>
             <Rotate>
               <a href='k' className='bg-blue-800 p-2 flex items-center icon cursor-pointer hover:scale-105 hover:ease-in-out duration-100'>
                 <Facebook size={25} color='inherit'/> 
              </a>
             </Rotate>
             <Rotate>
               <a href='k' className='bg-blue-800 p-2 flex items-center icon cursor-pointer hover:scale-105 hover:ease-in-out duration-100'>
                 <Instagram size={25} color='inherit'/> 
              </a>
             </Rotate>
        </div>
        </Slide>
       </div>
       
       <div className='flex-1 flex justify-center mt-[-70px] sm:mt-20 '>
        <Slide direction='right'>
        <img className="animate-me w-[300px] transition transform ease-in-out hover:translate-y-[-10px] sm:h-[300px] object-contain border-8 border-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" src={pic} alt='me'/>
        </Slide>
      </div>
        
    </div>
    </>
  )
}

export default Home