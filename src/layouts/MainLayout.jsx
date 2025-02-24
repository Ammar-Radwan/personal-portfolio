import React from 'react'
import Header from '../components/Header'
import Hero from '../containers/Hero'

const NewLayout = ({ children }) => {
  return (
    <div className='h-screen min-[1020px]:overflow-hidden'>
        <Header />
        <Hero />
    </div>
  )
}

export default NewLayout