import { ArrowLeft, ArrowRight } from '@mui/icons-material';
import React, { useState } from 'react'
import { useRef } from 'react';
import Slider from 'react-slick';
import Project from './Project';

const Slide = () => {
  const arrowRef = useRef(null);
  const [currentslide, setCurrentslide] = useState(0)
  let data = [
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661324124/Yt-portfolio/ui5_mnvdaw.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661324074/Yt-portfolio/ui4_jku3ol.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323981/Yt-portfolio/ui2_wtollo.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323980/Yt-portfolio/ui3_akynn4.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    },
    {
        img : "https://res.cloudinary.com/ghazni/image/upload/v1661323979/Yt-portfolio/ui1_n3uiaz.png",
        disc : "Lorem ipsum dolor sit amet consectetur adipisicing elit.Eveniet iure rerum obcaecati et laborum earum!"
    }
];
      var settings = {
        className: "center",
        centerMode: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        initialSlide: 0,
        arrows : false,
        responsive: [
          {
            breakpoint: 990,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: true,
              dots: false,
              centerMode : false
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2,
              centerMode : false
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              centerMode : false
            }
          }
        ]
      };
     const prev = ()=>{
      arrowRef.current.slickPrev()
      setCurrentslide(arrowRef.current.slickPlay.length)
     }
     const next = ()=>{
      arrowRef.current.slickNext()
      setCurrentslide(prev => data.length < currentslide ? prev -= 1 : prev += 1)
     }
     console.log(currentslide)
  return (
    <div className="relative w-full ">
        <Slider ref={arrowRef} {...settings}>
       {
         data.map((item, i) => (
          <div key={i} className='project bg-[#4e5156] mt-5 flex mr-2 py-2 px-1 h-[10rem] cursor-pointer relative overflow-hidden '>
            <img style={{transition: 'all 400ms ease-in-out'}} className='w-full hover:transform hover:scale-[1.3] h-full object-cover transition transform ease-in-out' src={item.img} alt="" />
              <div  className=" h-full right-0 text-left left-0   p-[.5rem]  hover:bottom-0">
              <h1 className='text-[1rem]'>Description</h1>
                  <p className='w-[90%] text-[0.8rem]'>{item.disc}
                    <a className='text-[0.4rem] text-red-600' href="#">demo</a>
                  </p>
              </div>
          </div>
      ))
       }
        </Slider>
      <div className="">
        <button onClick={prev} className='bg-white bg-opacity-10 back w-[2rem] h-[2rem] cursor-pointer absolute top-[45%] left-0'><ArrowLeft color='primary'fontSize='large'/></button>
        <button style={{background: 'rgba(255, 255, 255, 0.100)'}} onClick={next} className=' w-[2rem] h-[2rem] cursor-pointer absolute top-0 bottom-0 m-auto right-0'><ArrowRight color='primary' fontSize='large'/></button> 
       
      </div>
      <h1 className=''>dx</h1>
    </div>
  )
}

export default Slide