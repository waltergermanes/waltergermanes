import React from 'react'
import Typed from 'react-typed'
import pic from './assets/images/FB_IMG_1682461166590.jpg'
import { Social } from './assets/constant/Constant'
import { Rotate, Slide } from 'react-awesome-reveal'

const Home= () => {
  return (
    <>
    
    <div className='text-slate-800 dark:text-slate-200 min-h-screen sm:min-h-screen flex flex-col sm:flex-row justify-between items-center px-5 lg:px-32 mt-20 sm:mt-[-30px]'>
     
       <div className='flex-1 flex flex-col gap-10 sm:gap-5'>
       <Slide direction='left'>
       <span>Hello, I'm<span className='text-sm sm:text-xl'> Walter Germanes</span></span>
        <Typed
                className='text-xl sm:text-xl md:text-xl text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%'
                strings={[
                    'Web Developer and Graphite Artist']}
                    typeSpeed={40}
                    backSpeed={50}
                    loop >
                   
                </Typed>
               
        <span className='leading-8 font-extralight text-md '> I'm a Full Stack Developer specializing building 
        web apps, I enjoy building everything from small websites to rich interactive web apps.
        Besides from Web Development, I also passionate to create realistic portraits
        </span>
      
        <div className=' flex w-50 gap-5 '>
          {Social.map(social=>{
            return(
             <Rotate>
               <a href='k' key={social.id} className='bg-blue-800 p-2 icon cursor-pointer hover:scale-105 hover:ease-in-out duration-100'>
                 <social.icon size={25} color='inherit'/> 
              </a>
             </Rotate>
            )
          })}
        </div>
        </Slide>
       </div>
       
       <div className='flex-1 flex justify-center'>
        <Slide direction='right'>
        <img className="mt-[-100px] sm:mt-0 animate-me w-[300px] transition transform ease-in-out hover:translate-y-[-10px] sm:h-[300px] object-contain border-8 border-transparent bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%" src={pic} alt='me'/>
        </Slide>
      </div>
        
    </div>
    </>
  )
}

export default Home