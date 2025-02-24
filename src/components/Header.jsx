import React from 'react'
import Logo from '../assets/logos/classic_logo.svg'

const Header = () => {
  return (
    <header className='font-medium py-5'>
        <div className="container">
            <nav className='flex flex-row justify-between'>
                <div className="logo w-16">
                    <img src={Logo} alt="Logo" />
                </div>
                <div className="nav-links flex flex-row gap-6">
                    <a 
                      href="https://drive.google.com/drive/folders/1BHWzYrintNtLaSFcTKzySsZf-2dlNSyt?usp=sharing"
                      target='_blank'
                      className='hover:underline'
                    >
                        Resume
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/ammar-radwan-mohammed"
                      target='_blank'
                      className='hover:underline'
                    >
                        Hire Me <span>&rarr;</span>
                    </a>
                </div>
            </nav>
        </div>
    </header>
  )
}

export default Header