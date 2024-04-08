import { useState } from 'react'
import Home from './Home'
import './App.css'
import About from './About'
import Skills from './Skills'
import Project from './Project'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import Contact from './Contact'
import { Menu, Close,LightMode, NightsStay } from '@mui/icons-material';
import { Slide } from 'react-awesome-reveal'

function App() {
  const [open, setOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)
  return (
    <div id='home' className={darkMode ? 'dark scroll-smooth' : ' scroll-smooth'}>
     <div className="bg-slate-100 text-slate-950 dark:text-gray-200 dark:bg-[#25273C] ">
         <div className='z-10 fixed top-0 backdrop-blur-lg w-full h-[70px] border-b px-5 lg:px-32 flex justify-between items-center'>
          <a href='#home' className='font-extrabold cursor-pointer'>Walter Germanes</a>
          <ul className='sm:flex justify-end gap-6 items-center font-bold hidden'>
            <li className='hover:from-pink-500 hover:to-yellow-500'><a href='#about'>About me</a></li>
            <li ><a href='#skills'>My Skills</a></li>
            <li ><a href='#projects'>Projects</a></li>
            <li ><a href='#contact'>Contact</a></li>
            <li className='cursor-pointer' onClick={() => setDarkMode(!darkMode)}>{darkMode ? <LightMode/> : <NightsStay/>}</li>
            <li>
              <a href="https://waltergermanes.netlify.app/assets/WALTER_GERMANES-RESUME_.pdf" target="_blank" className='bg-gradient-to-r from-cyan-500 to-teal-700 px-3 py-2 cursor-pointer rounded-md text-white'>Resume</a>
            </li>
          </ul>
        {
          open ?  
            <span onClick={()=> setOpen(!open)} className='transform transition ease-in-out cursor-pointer'><Close fontSize='large'/></span>
            : <span onClick={()=> setOpen(!open)} className='duration-500 transform transition ease-in-out cursor-pointer sm:hidden'><Menu fontSize='large'/></span>
        }
      </div>
        <Home/>
     </div>
       <About/>
       <Skills/>
       <Project/>
       <Contact/>
    </div>
  )
}

export default App
