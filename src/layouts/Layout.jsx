import React from 'react'
import Header from '../components/layout/Header'

const Layout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen bg-gray-800'>
        <Header />
        <main>
          {children}
        </main>
    </div>
  )
}

export default Layout