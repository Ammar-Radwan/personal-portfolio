import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import logo from '../../assets/logo.svg'

const Header = () => {
  const [isHover, setIsHover] = useState(false);
  const links = ['Projects', 'About', 'Services', 'Testemonials', 'Contact']

  return (
    <header className="py-5">
      <div className="container mx-auto flex flex-row justify-between">
        <div className="logo">
          <img src={logo} alt="" className='w-20'/>
        </div>
        <nav className="flex flex-row justify-between">
          {links?.map((link)=>(
            <NavLink 
              to={`/personal-portfolio/${link.toLowerCase()}`} 
              className={({ isActive })=>
                `${isActive ? "text-blue-500" : "text-white"}
                mx-1 px-2 hover:text-blue-500`
              }
              onMouseEnter={()=>setIsHover(true)}
              onMouseLeave={()=>setIsHover(false)}
            >
              {({isActive})=>(
                <div className="flex flex-col items-center">
                  {link}
                  {(isActive || isHover) && 
                    <span className='block h-[2px] w-full mt-1 rounded bg-white'></span>
                  }
                </div>
              )}
            </NavLink>
          ))}
        </nav>

        <a href="#" className='text-white'>Hire Me</a>
      </div>

    </header>
  )
}

export default Header