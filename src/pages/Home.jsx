import React, { useEffect, useState } from 'react'
import MainLayout from '../layouts/MainLayout'

import Dashboard from '../assets/projects/dashboard_img.png'
import Nexus from '../assets/projects/nexus_img.png'
import Voice from '../assets/projects/voice_img.png'
import Ecommerce from '../assets/projects/ecommerce_img.png'

const Project = ({ name, link, description, img, bkg, customizedStyle, windowSize }) => {
  return (
    <div 
      className={`absolute ${windowSize.width > 1020 ? customizedStyle: 'project-mobile'} project border border-secondry-gray rounded-[20px] shadow-spread overflow-hidden cursor-pointer select-none duration-300 ease-in-out hover:border-primary-blue`}>
        <a 
          href={link ? link: '#'}
          className='w-[100%] h-[100%]'
        >
          <img 
          src={img} 
          alt={name}
          className={`w-[100%] h-auto`}
          />
        </a>
    </div>
  )
}


const Home = () => {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight
  })

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      })
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <MainLayout>
      <div
        className='max-xl:w-[100%] w-[1366px] h-[641px] mx-auto'
      >
          {/* Hero Content */}
          <div className="w-[100%] text-center mt-14 mx-auto">
              <h1 className='xl:text-7xl md:text-6xl text-5xl font-[800] mb-5'>
                  Crafting Engaging<br />
                  Web Experiences
              </h1>
              <p className='xl:text-[1.25rem] max-md:text-[.9rem] w-[50%] max-md:w-[90%] mx-auto font-normal text-primary-gray'>
                  Transforming ideas and designes into interactive, high-performance, and
                  responsive web applications — (SEO Applied) with clean, efficient code.
              </p>
          </div>

          {/* Projects Container */}
          <div className={`w-[100%] h-[300px] mx-auto ${windowSize.width <= 1020 ? 'projects-container-mobile' : 'relative'}`}>
              <Project 
                name='Predictive Maintainance System'
                img={Dashboard}
                bkg={Dashboard}
                customizedStyle='xl:w-[40rem] xl:h-[20rem] xl:-top-0 xl:-left-[30%] -translate-y-3/4 w-[38%] h-auto top-4 -left-[15%]'
                windowSize={windowSize}
              />
              <Project 
                name='Voice Music Landing Page'
                link='https://ammar-radwan.github.io/voice'
                img={Voice}
                bkg={Voice}
                customizedStyle='xl:w-[27rem] h-[15rem] -bottom-[20%] -left-[5%] w-[32%]'
                windowSize={windowSize}
              />
              <Project 
                name='Secure Nexus Corp'
                link='https://securenexus.co'
                img={Nexus}
                bkg={Nexus}
                customizedStyle='xl:w-[40rem] xl:bottom-0 md:bottom-12 sm:bottom-16 left-[30%] translate-y-2/4 w-[45%]'
                windowSize={windowSize}
              />
              <Project 
                name='React Ecommerce Web App'
                link='https://ammar-radwan.github.io/ecommerce'
                img={Ecommerce}
                bkg={Ecommerce}
                customizedStyle='xl:w-[40rem] xl:-right-[27%] w-[40%] xl:h-[30rem] h-auto bottom-0 -right-[18%]'
                windowSize={windowSize}
              />
          </div>
      </div>
    </MainLayout>
  )
}

export default Home