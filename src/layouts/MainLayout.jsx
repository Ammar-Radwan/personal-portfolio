import React from 'react'
import Header from '../components/Header'

const MainLayout = ({ children }) => {
  return (
    <div className='h-screen min-[1020px]:overflow-hidden'>
        <Header />
        {children}
    </div>
  )
}

export default MainLayout