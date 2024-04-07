import React from 'react'
import { Slide, Zoom } from 'react-awesome-reveal'
import fakebook from './assets/images/fakebook.png'
import noimage from './assets/images/no-image.png'
import portfolio from './assets/images/portfolio.png'

const Project = () => {
  const projects = [
    {
      title: "Angels Peace Academy Online Learning Management System",
      img: noimage,
      desc: "This is my Capstone Project for affected students during the COVID19 pandemic, this website allows the teachers creates exams and assignments and allows students take exams and view. Built using PHP, JavaScript and Bootstrap 5",
      lang: [`PHP`, `JavaScript`, `Bootstrap 5`],
      link: ``,
      repo: ``
    },{
      title: "FakebookSocial",
      img: fakebook,
      desc: "A social media app that allows users to connect other users. This website is a way to find and connect with friends and remain updated on their activities",
      lang:[`ReactJS`, `ExpressJS`, `Tanstack Query`, `Socket IO`,`Material UI` ],
      link: `https://fakebooksocial.netlify.app/login`,
      repo: `https://github.com/waltergermanes/fakebook.git`
    },{
      title: "My Personal Portfolio",
      img: portfolio,
      desc: "A web portfolio to showcase my personal projects",
      lang:[`ReactJS`, `Tailwind CSS`],
      link: `https://waltergermanes.netlify.app/`,
      repo: `https://github.com/waltergermanes/waltergermanes.git`
    }

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
          projects.map((project, i)=>(
          
             <div key={i} className="flex flex-col sm:odd:flex-row sm:even:flex-row-reverse gap-2 sm:gap-5 ">
            <div className="w-full sm:w-[50%]">
              <img src={project?.img} alt="" className={`w-full ${project.title === `Angels Peace Academy Online Learning Management System` ? `h-[250px]` : `h-full`} sm:w-[100%] object-cover`}/>
                </div>
            <div className="w-full sm:w-[50%] p-3">
              <span className='text-sm sm:text-xl'>{project.title}</span>
              <div className=" flex flex-wrap gap-1 sm:gap-2 text-xs sm:text-sm mt-2">
               {
                project.lang.map((lang, i)=>(
                  <span className='bg-transparent border p-1 rounded-sm'>{lang}</span>
                ))
               }
              </div>
              <span className='text-sm'>{project.desc}</span>
             {
              project.link !== `` &&  <div className="flex gap-2 mt-3">
              <a href={project.link} target="_blank" className='grid place-content-center cursor-pointer w-full sm:w-[25%] bg-red-500 rounded-sm text-sm h-8'>Demo</a>
              <a href={project.repo} target="_blank" className='w-full sm:w-[25%] bg-teal-500 rounded-sm text-sm h-8'>View Code</a>
            </div>
             }
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